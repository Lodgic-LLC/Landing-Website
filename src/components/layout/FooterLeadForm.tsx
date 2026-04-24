'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function FooterLeadForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage('')

    if (!consent) {
      setStatus('error')
      setErrorMessage('Merci de cocher la case de consentement.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage("L'adresse email n'est pas valide.")
      return
    }

    try {
      setStatus('loading')
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          message,
          consent,
          source: 'footer',
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMessage(data?.error ?? "Impossible d'envoyer pour l'instant.")
        return
      }

      setStatus('success')
      setEmail('')
      setMessage('')
      setConsent(false)
    } catch {
      setStatus('error')
      setErrorMessage("Une erreur est survenue. Réessayez dans un instant.")
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-5 rounded-xl border border-[#DBFF00]/40 bg-[#DBFF00]/10 px-5 py-4 text-sm text-[#DBFF00] font-inter"
      >
        ✓ Merci ! Votre demande a bien été reçue. Nous revenons vers vous sous 24 h.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-3">
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBFF00] focus:ring-2 focus:ring-[#DBFF00]/20 transition-smooth"
        />
        <textarea
          name="message"
          placeholder="Comment pouvons-nous vous aider ?"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBFF00] focus:ring-2 focus:ring-[#DBFF00]/20 transition-smooth resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <label className="flex items-start gap-2.5 text-sm text-white/75 font-inter cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 text-[#DBFF00] focus:ring-[#DBFF00]/40 focus:ring-offset-0"
          />
          <span>J'accepte de soumettre mes données à des fins commerciales</span>
        </label>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DBFF00] px-6 py-3 text-[#001F45] font-inter font-semibold hover:bg-white hover:shadow-elevated transition-smooth disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Envoi...
            </>
          ) : (
            <>
              Soumettre
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {status === 'error' && errorMessage ? (
        <p role="alert" className="text-sm text-red-300 font-inter">
          {errorMessage}
        </p>
      ) : null}
    </form>
  )
}
