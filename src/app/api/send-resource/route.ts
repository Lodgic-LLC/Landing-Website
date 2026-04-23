import fs from 'node:fs'
import path from 'node:path'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESOURCES: Record<
  string,
  {
    subject: string
    html: string
    attachments: { filename: string; path: string }[]
  }
> = {
  'business-plan-app-mobile': {
    subject: 'Vos modèles de business plan pour application mobile',
    html: `
      <p>Bonjour,</p>
      <p>
        Merci pour votre intérêt ! Vous trouverez en pièces jointes deux modèles de business plan
        pensés pour les projets d'applications mobiles : l'un orienté investisseurs, l'autre pour
        cadrer votre projet de A à Z.
      </p>
      <p>
        N'hésitez pas à les adapter à votre contexte. Si vous souhaitez être accompagné pour
        structurer votre projet, nous sommes disponibles.
      </p>
      <p>Bonne lecture,<br/><strong>L'équipe Lodgic</strong></p>
    `,
    attachments: [
      {
        filename: 'Business_Plan_Investisseurs.docx',
        path: path.join(process.cwd(), 'public/ressources/bp_investisseurs.docx'),
      },
      {
        filename: 'Business_Plan_App_Mobile.docx',
        path: path.join(process.cwd(), 'public/ressources/business_plan_app_mobile.docx'),
      },
    ],
  },
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function createHubspotContact(email: string) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN ?? process.env.HUBSPOT_API_KEY
  if (!hubspotToken) return

  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${hubspotToken}`,
    },
    body: JSON.stringify({
      properties: {
        email,
        lifecyclestage: 'lead',
      },
    }),
  })

  if (!response.ok && response.status !== 409) {
    const error = await response.text()
    console.error('HubSpot error:', error)
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; resourceId?: string }
    const email = body.email?.trim().toLowerCase()
    const resourceId = body.resourceId?.trim()

    if (!email || !resourceId) {
      return NextResponse.json({ error: 'email et resourceId sont requis' }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
    }

    const resource = RESOURCES[resourceId]
    if (!resource) {
      return NextResponse.json({ error: 'Ressource introuvable' }, { status: 404 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'RESEND_API_KEY manquante' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const attachments = resource.attachments.map(({ filename, path: filePath }) => ({
      filename,
      content: fs.readFileSync(filePath).toString('base64'),
    }))

    await resend.emails.send({
      from: 'Lodgic <hello@lodgic-dev.com>',
      to: email,
      subject: resource.subject,
      html: resource.html,
      attachments,
    })

    await createHubspotContact(email)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('send-resource error:', error)
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
  }
}
