'use client'

import { useId, useRef, useState } from 'react'
import Link from 'next/link'
import { trackClick, trackConversion } from '@/lib/analytics'

import { projectKinds, type ProjectKind } from '@/content/parcours'
import { isFormSuccess } from '@/lib/form-response'

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

type FieldName = 'name' | 'email' | 'phone' | 'subject' | 'message' | 'project'

interface Field {
  name: FieldName
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
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
  { name: 'name', label: 'Votre nom', placeholder: 'Facultatif' },
  { name: 'email', label: 'Votre email', type: 'email', required: true },
  { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: 'Facultatif' },
  { name: 'project', label: 'Votre projet', type: 'select' },
  { name: 'message', label: 'Votre projet en quelques lignes', type: 'textarea', required: true, placeholder: 'Le besoin, les utilisateurs, ce qui existe déjà. Précisez votre échéance ou votre budget si vous les connaissez.' },
]

interface ProjectFormProps {
  /** D'où vient l'envoi : sert à distinguer les conversions dans les statistiques. */
  source: string
  fields?: Field[]
  submitLabel?: string
  initialProject?: ProjectKind
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

export default function Formulaire({
  source,
  fields = SHORT_FIELDS,
  submitLabel = 'Envoyer',
  initialProject,
}: ProjectFormProps) {
  const formId = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const started = useRef(false)
  const inFlight = useRef(false)
  const [values, setValues] = useState<Record<string, string>>(initialProject ? { project: initialProject } : {})
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
    if (inFlight.current) return

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = fields.find(field => found[field.name])
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus()
      trackClick('form-validation-error', { source, count: Object.keys(found).length })
      return
    }

    if (!formEndpointIsValid) {
      setStatus({
        ok: false,
        message: "Le formulaire n'est pas disponible pour le moment. Écrivez-moi directement à contact@lodgic-dev.com.",
      })
      return
    }

    inFlight.current = true
    setSending(true)
    setStatus(null)
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _honey: honey, _subject: `Nouveau message : ${source}` }),
      })
      if (!response.ok) throw new Error(`Réponse ${response.status}`)

      const payload: unknown = await response.json()
      if (!isFormSuccess(payload)) throw new Error('Envoi non confirmé')
      trackConversion(source)
      setStatus({ ok: true, message: 'Votre message a été transmis. Je vais examiner votre besoin et vous répondre personnellement pour préciser la prochaine étape. Aucun travail ne démarre sans proposition acceptée.' })
      setValues({})
      setHoney('')
      started.current = false
    } catch {
      setStatus({
        ok: false,
        message: "L'envoi a échoué. Écrivez-moi directement à contact@lodgic-dev.com.",
      })
    } finally {
      inFlight.current = false
      setSending(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate aria-busy={sending} onFocus={() => { if (!started.current) { started.current = true; trackClick('form-start', { source }) } }}>
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
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setValues((prev) => ({ ...prev, [field.name]: e.target.value })),
          className: `w-full rounded-lg border bg-white px-4 py-3 font-body text-[#17232A] transition-colors placeholder:text-[#59666E]/60 focus:outline-none focus:ring-2 focus:ring-[#246B66]/30 ${
            error ? 'border-[#B42318]' : 'border-[#DCE3E6] focus:border-[#246B66]'
          }`,
        }

        return (
          <div key={field.name}>
            <label htmlFor={id} className="mb-1.5 block text-base font-body font-medium text-[#17232A]">
              {field.label}
              {field.required && <span className="text-[#246B66]"> *</span>}
            </label>

            {field.type === 'select' ? <select {...shared}><option value="">À préciser ensemble</option>{projectKinds.map(kind => <option key={kind.value} value={kind.value}>{kind.label}</option>)}</select> : field.type === 'textarea' ? (
              <textarea {...shared} rows={5} />
            ) : (
              <input {...shared} type={field.type ?? 'text'} />
            )}

            {error && (
              <p id={`${id}-error`} className="mt-1.5 text-sm text-[#B42318] font-body">
                {error}
              </p>
            )}
          </div>
        )
      })}

      <p className="text-sm leading-relaxed text-[#59666E]">
        Les champs marqués * sont nécessaires pour répondre à votre demande. Votre message est transmis par FormSubmit à Yann (Lodgic). Le nom, le téléphone et le type de projet sont facultatifs lorsqu’ils sont proposés. Vos données sont traitées pour étudier votre projet et vous répondre ; elles ne servent pas à vous inscrire à une newsletter. Consultez la <Link href="/politique-confidentialite" className="text-link text-sm">politique de confidentialité</Link> pour connaître la durée de conservation et exercer vos droits.
      </p>

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
