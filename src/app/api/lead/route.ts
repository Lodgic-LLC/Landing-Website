import { NextResponse } from 'next/server'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function createHubspotLead(data: { email: string; message?: string; source?: string }) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN ?? process.env.HUBSPOT_API_KEY
  if (!hubspotToken) {
    throw new Error('HubSpot token manquant')
  }

  const properties: Record<string, string> = {
    email: data.email,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW',
  }

  if (data.message) {
    properties.message = data.message
  }

  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${hubspotToken}`,
    },
    body: JSON.stringify({ properties }),
  })

  if (response.ok) return { created: true }

  // 409 = contact déjà existant, on tente une mise à jour sur email
  if (response.status === 409) {
    const updateRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(
        data.email,
      )}?idProperty=email`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${hubspotToken}`,
        },
        body: JSON.stringify({ properties }),
      },
    )
    if (!updateRes.ok) {
      const err = await updateRes.text()
      console.error('HubSpot update error:', err)
      throw new Error('HubSpot update failed')
    }
    return { created: false, updated: true }
  }

  const errText = await response.text()
  console.error('HubSpot error:', errText)
  throw new Error('HubSpot create failed')
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string
      message?: string
      consent?: boolean
      source?: string
    }

    const email = body.email?.trim().toLowerCase()
    const message = body.message?.trim() ?? ''
    const consent = Boolean(body.consent)

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 })
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
    }
    if (!consent) {
      return NextResponse.json({ error: 'Consentement requis' }, { status: 400 })
    }

    await createHubspotLead({
      email,
      message,
      source: body.source ?? 'footer',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('lead error:', error)
    return NextResponse.json(
      { error: "Une erreur est survenue, veuillez réessayer." },
      { status: 500 },
    )
  }
}
