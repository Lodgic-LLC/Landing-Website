'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { trackConversion } from '@/lib/analytics'
import { CONTACT_EMAIL } from '@/lib/site'

/** Adresse d'envoi Formsubmit, définie dans .env.local (voir .env.example). */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''
const formEndpointIsValid = (() => {
  try {
    const url = new URL(ENDPOINT)
    return url.origin === 'https://formsubmit.co' && url.pathname.startsWith('/ajax/')
  } catch {
    return false
  }
})()

type FieldName = 'name' | 'email' | 'phone' | 'subject' | 'message'

interface Field {
  name: FieldName
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  required?: boolean
  placeholder?: string
}

/** Formulaire court de la page d'accueil : juste de quoi engager la conversation. */
export const SHORT_FIELDS: Field[] = [
  { name: 'email', label: 'Votre email', type: 'email', required: true },
  { name: 'message', label: 'Comment puis-je vous aider ?', type: 'textarea', required: true, placeholder: 'Pour qui ? Pour quel usage ? Avez-vous déjà un site ou une application ?' },
]

/** Formulaire complet de la page contact. */
export const FULL_FIELDS: Field[] = [
  { name: 'name', label: 'Votre nom', required: true },
  { name: 'email', label: 'Votre email', type: 'email', required: true },
  { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: 'Facultatif' },
  { name: 'subject', label: 'Sujet', placeholder: 'Site web, application, logiciel…' },
  { name: 'message', label: 'Votre projet en quelques lignes', type: 'textarea', required: true, placeholder: 'Le besoin, les utilisateurs, ce qui existe déjà. Précisez votre échéance ou votre budget si vous les connaissez.' },
]

interface ProjectFormProps {
  /** D'où vient l'envoi : sert à distinguer les conversions dans les statistiques. */
  source: string
  fields?: Field[]
  submitLabel?: string
  headingLevel?: 'h2' | 'h3'
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

function validateField(field: Field, rawValue: string) {
  const value = rawValue.trim()
  if (field.required && !value) return 'Ce champ est requis'
  if (field.name === 'email' && value && !isValidEmail(value)) return 'Saisissez une adresse email complète, par exemple nom@domaine.fr'
  return undefined
}

export default function Formulaire({
  source,
  fields = SHORT_FIELDS,
  submitLabel = 'Envoyer',
  headingLevel = 'h3',
}: ProjectFormProps) {
  const Heading = headingLevel
  const formId = useId()
  const [values, setValues] = useState<Record<string, string>>({})
  const [honey, setHoney] = useState('')
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null)
  const [sending, setSending] = useState(false)

  function validate() {
    const found: Partial<Record<FieldName, string>> = {}
    for (const field of fields) {
      const error = validateField(field, values[field.name] ?? '')
      if (error) found[field.name] = error
    }
    return found
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return

    const found = validate()
    setErrors(found)
    const firstInvalid = fields.find(field => found[field.name])
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid.name}`)?.focus()
      return
    }

    if (!formEndpointIsValid) {
      setStatus({
        ok: false,
        message: "Le formulaire n'est pas disponible pour le moment. Écrivez-moi directement à ",
      })
      return
    }

    setSending(true)
    setStatus(null)
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _honey: honey, _subject: `Nouveau message : ${source}` }),
      })
      if (!response.ok) throw new Error(`Réponse ${response.status}`)

      trackConversion(source)
      setStatus({ ok: true, message: 'Message envoyé. Merci, je vous répondrai personnellement.' })
      setValues({})
      setHoney('')
    } catch {
      setStatus({
        ok: false,
        message: "L'envoi a échoué. Écrivez-moi directement à ",
      })
    } finally {
      setSending(false)
    }
  }

  function privacyText() {
    return <>
      Les champs marqués * sont nécessaires pour répondre à votre demande. Votre message est transmis par FormSubmit à Yann (Lodgic). Téléphone et sujet sont facultatifs lorsqu’ils sont proposés. Vos données sont traitées pour étudier votre projet et vous répondre ; elles ne servent pas à vous inscrire à une newsletter. Consultez la <Link href="/politique-confidentialite" className="text-link text-sm">politique de confidentialité</Link> pour connaître la durée de conservation et exercer vos droits.
    </>
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-busy={sending} noValidate>
      <Heading className="contact-form-title">Parlons de votre projet.</Heading>
      {fields.map((field) => {
        const id = `${formId}-${field.name}`
        const error = errors[field.name]
        const shared = {
          id,
          name: field.name,
          required: field.required,
          autoComplete: ({ email: 'email', name: 'name', phone: 'tel' } as Record<string, string>)[field.name],
          value: values[field.name] ?? '',
          placeholder: field.placeholder,
          'aria-invalid': Boolean(error),
          'aria-describedby': error ? `${id}-error` : undefined,
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const nextValue = e.target.value
            setValues(prev => ({ ...prev, [field.name]: nextValue }))
            setErrors(prev => prev[field.name] ? { ...prev, [field.name]: validateField(field, nextValue) } : prev)
          },
          onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setErrors(prev => ({ ...prev, [field.name]: validateField(field, e.target.value) }))
          },
          className: 'contact-input',
        }

        return (
          <div key={field.name} className={`contact-field ${field.type === 'textarea' ? 'contact-field-message' : ''}`}>
            <label htmlFor={id} className="contact-field-label">
              {field.label}
              {field.required && <span className="contact-required"> *</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea {...shared} rows={5} />
            ) : (
              <input {...shared} type={field.type ?? 'text'} />
            )}

            {error && (
              <p id={`${id}-error`} className="contact-field-error">
                {error}
              </p>
            )}
          </div>
        )
      })}

      <p className="contact-form-privacy contact-form-privacy-desktop">{privacyText()}</p>
      <details className="contact-form-privacy-mobile">
        <summary>Vos données servent à étudier votre projet et vous répondre. <span>En savoir plus</span></summary>
        <p>{privacyText()}</p>
      </details>

      {/* Piège à robots : invisible pour un humain, rempli par les scripts de spam.
          Formsubmit ignore silencieusement tout envoi où ce champ est renseigné. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-honey`}>Ne pas remplir</label>
        <input
          id={`${formId}-honey`}
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="contact-submit"
      >
        <span>{sending ? 'Envoi en cours…' : submitLabel}</span><span aria-hidden="true">↗</span>
      </button>

      {status && (
        <p
          role="status"
          className={`rounded-lg px-4 py-3 text-sm font-body ${
            status.ok ? 'bg-[#EDF4F3] text-[#1C5753]' : 'bg-[#FDF2F2] text-[#B42318]'
          }`}
        >
          {status.message}{!status.ok && <><a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-2">{CONTACT_EMAIL}</a>.</>}
        </p>
      )}
    </form>
  )
}
