'use client'

import { useState } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

interface SubmitStatusType {
  success: boolean
  message: string
}

interface FormErrorsType {
  email?: string
}

export default function FAQ() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType | null>(null)
  const [formErrors, setFormErrors] = useState<FormErrorsType>({})
  const analytics = useAnalytics()

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const calculateFormCompletion = () => {
    const fields = [formData.email, formData.message]
    const filled = fields.filter((f) => f && f.trim() !== '').length
    return Math.round((filled / fields.length) * 100)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors: FormErrorsType = {}
    if (!validateEmail(formData.email)) {
      errors.email = "L'adresse email n'est pas valide"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      analytics.trackFormInteraction('contact_form', 'abandon', 'validation_error', {
        error_fields: Object.keys(errors),
        form_completion: calculateFormCompletion(),
      })
      return
    }

    setIsSubmitting(true)
    setFormErrors({})
    setSubmitStatus(null)

    analytics.trackFormInteraction('contact_form', 'submit', undefined, {
      form_completion: 100,
      has_phone: false,
      message_length: formData.message.length,
      subject: 'Demande via FAQ',
    })

    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      formDataObj.append('_subject', `Nouveau message (FAQ): ${formData.email || 'Visiteur'}`)
      formDataObj.append('_next', 'https://www.lodgic-dev.com/merci')
      formDataObj.append('_captcha', 'false')

      const response = await fetch('https://formsubmit.co/ajax/c1f6460b84bc25bfcdc7f63d038c2dfd', {
        method: 'POST',
        body: formDataObj,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        analytics.trackConversion('contact_form', 10, {
          form_type: 'contact',
          conversion_point: 'form_submit',
          lead_quality: 'high',
        })
        setSubmitStatus({
          success: true,
          message: 'Votre message a bien été envoyé. Nous revenons vers vous rapidement.',
        })
        setFormData({ email: '', message: '', consent: false })
        return
      }

      // Si pas ok
      setSubmitStatus({ success: false, message: "Échec de l'envoi. Veuillez réessayer." })
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus({
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      })
      analytics.trackFormInteraction('contact_form', 'abandon', 'submit_error', {
        error_message: error instanceof Error ? error.message : 'Unknown error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      consent: e.target.checked,
    }))
  }

  // (supprimé) ancien handleSubmit redondant

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden border-t border-gray-200"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Section gauche - Informations de contact */}
            <div
              className="lg:w-1/2 lg:pr-8 lg:border-r lg:border-gray-300 flex-shrink-0"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofia-bold text-[rgb(0,15,69)] mb-6">
                Discuter de mon projet
              </h2>
              <p className="text-gray-600 mb-8 font-inter">
                Vous avez une idée d'application ou un projet en tête ? Prenez contact avec nous pour en discuter.
              </p>
            </div>

            {/* Section droite - Formulaire */}
            <div
              className="lg:w-1/2 lg:pl-8 flex-grow"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 placeholder-gray-500"
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Zone de texte */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Comment pouvons-nous vous aider ?*"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 placeholder-gray-500 resize-vertical"
                    required
                  />
                </div>
                <p className="text-red-500 text-xs">*Champ obligatoire</p>

                {/* Checkbox de consentement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                    En soumettant ce formulaire, je donne mon consentement à Lodgic pour traiter mes données
                    personnelles conformément à la{' '}
                    <a href="/politique-confidentialite" className=" hover:text-blue-800 underline">
                      Politique de Confidentialité
                    </a>{' '}
                    et à la{' '}
                    <a href="/politique-confidentialite" className=" hover:text-blue-800 underline">
                      Politique des Cookies
                    </a>
                    .
                  </label>
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DBFF00] hover:bg-[#caeb00] text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9ACD32] focus:ring-offset-2 text-lg font-sofia cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours…' : 'Envoyer'}
                </button>

                {submitStatus && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`${
                      submitStatus.success
                        ? 'text-green-700 bg-green-50 border-green-200'
                        : 'text-red-700 bg-red-50 border-red-200'
                    } text-sm mt-2 p-3 rounded border`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
