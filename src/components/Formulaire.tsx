'use client'

import { useState } from 'react'
import Link from 'next/link'
import { trackConversion } from '@/lib/analytics'

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
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

export default function Formulaire({
  source,
  fields = SHORT_FIELDS,
  submitLabel = 'Envoyer',
}: ProjectFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [honey, setHoney] = useState('')
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null)
  const [sending, setSending] = useState(false)

  function validate() {
    const found: Partial<Record<FieldName, string>> = {}
    for (const field of fields) {
      const value = (values[field.name] ?? '').trim()
      if (field.required && !value) found[field.name] = 'Ce champ est requis'
      else if (field.name === 'email' && value && !isValidEmail(value))
        found[field.name] = "Cette adresse email n'est pas valide"
    }
    return found
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    if (!formEndpointIsValid) {
      setStatus({
        ok: false,
        message: "Le formulaire n'est pas disponible pour le moment. Écrivez-moi directement à contact@lodgic-dev.com.",
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
        message: "L'envoi a échoué. Écrivez-moi directement à contact@lodgic-dev.com.",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {fields.map((field) => {
        const id = `field-${field.name}`
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
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setValues((prev) => ({ ...prev, [field.name]: e.target.value })),
          className: `w-full rounded-lg border bg-white px-4 py-3 font-body text-[#17232A] transition-colors placeholder:text-[#59666E]/60 focus:outline-none focus:ring-2 focus:ring-[#246B66]/30 ${
            error ? 'border-[#246B66]' : 'border-[#DCE3E6] focus:border-[#246B66]'
          }`,
        }

        return (
          <div key={field.name}>
            <label htmlFor={id} className="mb-1.5 block text-base font-body font-medium text-[#17232A]">
              {field.label}
              {field.required && <span className="text-[#246B66]"> *</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea {...shared} rows={5} />
            ) : (
              <input {...shared} type={field.type ?? 'text'} />
            )}

            {error && (
              <p id={`${id}-error`} className="mt-1.5 text-sm text-[#246B66] font-body">
                {error}
              </p>
            )}
          </div>
        )
      })}

      <p className="text-sm leading-relaxed text-[#59666E]">
        Les champs marqués * sont nécessaires pour répondre à votre demande. Votre message est transmis par FormSubmit à Yann (Lodgic). Téléphone et sujet sont facultatifs lorsqu’ils sont proposés. Vos données sont traitées pour étudier votre projet et vous répondre ; elles ne servent pas à vous inscrire à une newsletter. Consultez la <Link href="/politique-confidentialite" className="text-link text-sm">politique de confidentialité</Link> pour connaître la durée de conservation et exercer vos droits.
      </p>

      {/* Piège à robots : invisible pour un humain, rempli par les scripts de spam.
          Formsubmit ignore silencieusement tout envoi où ce champ est renseigné. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="field-honey">Ne pas remplir</label>
        <input
          id="field-honey"
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
        className="w-full rounded-lg bg-[#246B66] px-6 py-3.5 font-body font-semibold text-white transition-colors hover:bg-[#1C5753] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? 'Envoi en cours…' : submitLabel}
      </button>

      {status && (
        <p
          role="status"
          className={`rounded-lg px-4 py-3 text-sm font-body ${
            status.ok ? 'bg-[#EDF4F3] text-[#1C5753]' : 'bg-[#FDF2F2] text-[#B42318]'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}
