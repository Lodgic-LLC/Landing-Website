import nodemailer from 'nodemailer'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'

export const runtime = 'nodejs'

function readField(value: unknown, maxLength: number) {
  return typeof value === 'string' && value.length <= maxLength ? value.trim() : null
}

function failure(message: string, status: number) {
  return Response.json({ success: false, message }, { status })
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) return failure('Origine non autorisée.', 403)
  if (!request.headers.get('content-type')?.startsWith('application/json')) return failure('Format de requête invalide.', 415)

  let data: Record<string, unknown>
  try {
    const raw = await request.text()
    if (raw.length > 12_000) return failure('Message trop long.', 413)
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return failure('Formulaire invalide.', 400)
    data = parsed as Record<string, unknown>
  } catch {
    return failure('Formulaire invalide.', 400)
  }

  const name = readField(data.name ?? '', 200)
  const email = readField(data.email, 320)
  const phone = readField(data.phone ?? '', 100)
  const subject = readField(data.subject ?? '', 200)
  const message = readField(data.message, 5_000)
  const source = readField(data.source, 100)
  const honey = readField(data.honey ?? '', 200)
  if (name === null || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || phone === null || subject === null || !message || !source || honey === null) {
    return failure('Vérifiez les champs du formulaire.', 400)
  }
  if (honey) return Response.json({ success: true })

  const smtpPassword = process.env.SMTP_PASSWORD
  if (!smtpPassword) return failure("L'envoi par la messagerie Hostinger n'est pas encore configuré.", 503)

  const smtpPort = Number(process.env.SMTP_PORT || 465)
  if (smtpPort !== 465 && smtpPort !== 587) return failure('Port SMTP invalide.', 503)
  const smtpUser = process.env.SMTP_USER?.trim() || CONTACT_EMAIL
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || 'smtp.hostinger.com',
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort === 587,
    auth: { user: smtpUser, pass: smtpPassword },
    connectionTimeout: 8_000,
    greetingTimeout: 5_000,
    socketTimeout: 15_000,
  })
  try {
    const info = await transport.sendMail({
      from: { name: 'Site Lodgic', address: smtpUser },
      to: CONTACT_EMAIL,
      replyTo: { name: name || email, address: email },
      subject: `Nouveau message : ${source.replace(/[\r\n]/g, ' ')}`,
      text: [
        'Nouveau message envoyé depuis le site Lodgic.',
        `Page : ${SITE_URL}/contact`,
        name && `Nom : ${name}`,
        `Email : ${email}`,
        phone && `Téléphone : ${phone}`,
        subject && `Sujet : ${subject}`,
        `Message :\n${message}`,
      ].filter(Boolean).join('\n\n'),
    })
    if (info.accepted.length === 0) return failure("Le serveur mail n'a pas accepté le message.", 502)
    return Response.json({ success: true })
  } catch (error) {
    const code = error && typeof error === 'object' && 'code' in error ? String(error.code) : 'UNKNOWN'
    console.error('Échec de l’envoi SMTP du formulaire :', code)
    if (code === 'EAUTH') return failure('Authentification SMTP refusée. Vérifiez le compte et le mot de passe de la boîte Hostinger.', 502)
    if (['ETIMEDOUT', 'ECONNECTION', 'ESOCKET'].includes(code)) return failure('Connexion au serveur mail impossible. Vérifiez les paramètres SMTP et le réseau.', 502)
    return failure("Le serveur mail n'a pas pu envoyer le message.", 502)
  } finally {
    transport.close()
  }
}
