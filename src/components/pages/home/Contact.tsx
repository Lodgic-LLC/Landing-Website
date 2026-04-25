'use client'

import { useState } from 'react'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  message: string
}

const initialState: FormState = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    const subject = encodeURIComponent(`Nouveau projet — ${form.name}`)
    const body = encodeURIComponent(
      `Bonjour,\n\nJe m'appelle ${form.name} (${form.email}).\n\n${form.message}\n\nMerci.`,
    )

    window.location.href = `mailto:contact@lodgic.fr?subject=${subject}&body=${body}`

    setStatus('success')
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container-editorial max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Col gauche — intro */}
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
              Prendre contact
            </span>
            <h2 className="display-h2 text-balance">Parlons de votre projet.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)]">
              Décrivez-nous votre besoin en quelques lignes. On revient vers vous sous 24&nbsp;h
              avec une première réponse concrète.
            </p>

            <div className="mt-8 space-y-3 text-[14px]">
              <p className="flex items-center gap-2 text-[var(--color-muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                Réponse garantie sous 24&nbsp;h
              </p>
              <p className="flex items-center gap-2 text-[var(--color-muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                Premier échange offert
              </p>
              <p className="flex items-center gap-2 text-[var(--color-muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                Toulouse &amp; à distance, partout en France
              </p>
            </div>
          </div>

          {/* Col droite — formulaire */}
          <div className="lg:col-span-3">
            <div className="card-std p-7 md:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] mb-4">
                    <FaCheckCircle className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-[19px] font-semibold text-[var(--color-ink)] mb-2">
                    Votre client mail s&apos;est ouvert.
                  </h3>
                  <p className="text-[14.5px] text-[var(--color-muted)] max-w-sm">
                    Si ça ne fonctionne pas, écrivez-nous directement à&nbsp;
                    <a
                      href="mailto:contact@lodgic.fr"
                      className="text-[var(--color-brand-ink)] underline"
                    >
                      contact@lodgic.fr
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="input-label">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="Jean Dupont"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="input-label">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="jean@entreprise.com"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="message" className="input-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de votre projet en quelques lignes…"
                      required
                      className="input-field resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="mt-3 text-[13px] text-[var(--color-accent-red)]">
                      Merci de remplir tous les champs.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-brand text-white mt-5 w-full sm:w-auto"
                  >
                    Envoyer le message
                    <FaArrowRight className="h-3 w-3" aria-hidden />
                  </button>

                  <p className="mt-4 text-[12.5px] text-[var(--color-muted-faint)]">
                    En envoyant ce formulaire, vous acceptez que vos informations soient utilisées
                    pour vous recontacter. Aucun spam, promis.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
