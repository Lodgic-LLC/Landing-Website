'use client'

import { useState } from 'react'
import { trackConversion } from '@/lib/analytics'

/** Adresse d'envoi Formsubmit, définie dans .env.local (voir .env.example). */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

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
  { name: 'message', label: 'Comment puis-je vous aider ?', type: 'textarea', required: true },
]

/** Formulaire complet de la page contact. */
export const FULL_FIELDS: Field[] = [
  { name: 'name', label: 'Votre nom', required: true },
  { name: 'email', label: 'Votre email', type: 'email', required: true },
  { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: 'Facultatif' },
  { name: 'subject', label: 'Sujet', placeholder: 'Site web, application, logiciel…' },
  { name: 'message', label: 'Votre projet en quelques lignes', type: 'textarea', required: true },
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
  const [consent, setConsent] = useState(false)
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

    setSending(true)
    setStatus(null)
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: `Nouveau message — ${source}` }),
      })
      if (!response.ok) throw new Error(`Réponse ${response.status}`)

      trackConversion(source)
      setStatus({ ok: true, message: 'Message envoyé. Je vous réponds sous 24 heures.' })
      setValues({})
      setConsent(false)
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
          value: values[field.name] ?? '',
          placeholder: field.placeholder,
          'aria-invalid': Boolean(error),
          'aria-describedby': error ? `${id}-error` : undefined,
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setValues((prev) => ({ ...prev, [field.name]: e.target.value })),
          className: `w-full rounded-lg border bg-white px-4 py-3 font-inter text-[#2E2B28] transition-colors placeholder:text-[#6B655D]/60 focus:outline-none focus:ring-2 focus:ring-[#C2542D]/30 ${
            error ? 'border-[#C2542D]' : 'border-[#E6E1D8] focus:border-[#C2542D]'
          }`,
        }

        return (
          <div key={field.name}>
            <label htmlFor={id} className="mb-1.5 block text-sm font-inter font-medium text-[#2E2B28]">
              {field.label}
              {field.required && <span className="text-[#C2542D]"> *</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea {...shared} rows={5} />
            ) : (
              <input {...shared} type={field.type ?? 'text'} />
            )}

            {error && (
              <p id={`${id}-error`} className="mt-1.5 text-sm text-[#C2542D] font-inter">
                {error}
              </p>
            )}
          </div>
        )
      })}

      <label className="flex items-start gap-2.5 text-sm text-[#6B655D] font-inter">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#E6E1D8] text-[#C2542D] focus:ring-[#C2542D]/30"
        />
        <span>
          J&apos;accepte que mes informations soient utilisées pour répondre à ma demande.
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-lg bg-[#C2542D] px-6 py-3.5 font-inter font-semibold text-white transition-colors hover:bg-[#A34322] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? 'Envoi en cours…' : submitLabel}
      </button>

      {status && (
        <p
          role="status"
          className={`rounded-lg px-4 py-3 text-sm font-inter ${
            status.ok ? 'bg-[#FBEFE9] text-[#A34322]' : 'bg-[#FDF2F2] text-[#B42318]'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}
