'use client'

import { useState } from 'react'

interface CallToActionProps {
  resourceId: string
  title?: string
  description?: string
  buttonLabel?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function CallToAction({
  resourceId,
  title = 'Téléchargez la ressource gratuite',
  description = 'Entrez votre email pour recevoir la ressource directement dans votre boîte mail.',
  buttonLabel = 'Recevoir',
}: CallToActionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async () => {
    if (!emailRegex.test(email)) {
      setErrorMessage('Veuillez entrer une adresse email valide.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-resource', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resourceId }),
      })

      if (!response.ok) {
        throw new Error('Erreur serveur')
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.")
    }
  }

  if (status === 'success') {
    return (
      <div className="my-10 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="m-0 text-[15px] text-emerald-800">
          ✅ C&apos;est envoyé ! Vérifiez votre boîte mail (et vos spams si besoin).
        </p>
      </div>
    )
  }

  return (
    <div className="my-10 rounded-xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
      <h3 className="m-0 text-xl font-semibold text-[#000f45]">{title}</h3>
      <p className="mt-2 mb-0 text-[15px] text-[#162869]">{description}</p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          disabled={status === 'loading'}
          className="h-11 flex-1 rounded-lg border border-gray-300 px-3 text-[15px] text-[#0f1b42] outline-none transition-colors focus:border-[#000f45]"
          aria-label="Adresse email"
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className="h-11 rounded-lg bg-[#000f45] px-5 text-[15px] font-medium text-white transition hover:bg-[#162869] disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
        >
          {status === 'loading' ? 'Envoi...' : buttonLabel}
        </button>
      </div>

      {errorMessage && <p className="mt-2 mb-0 text-sm text-red-600">{errorMessage}</p>}
    </div>
  )
}
