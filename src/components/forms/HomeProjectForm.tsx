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

type HomeProjectFormProps = {
  source?: string
  emailInputId?: string
  messageInputId?: string
  consentInputId?: string
}

export default function HomeProjectForm({
  source = 'FAQ',
  emailInputId = 'home-faq-email',
  messageInputId = 'home-faq-message',
  consentInputId = 'home-faq-consent',
}: HomeProjectFormProps) {
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
        source,
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
      subject: `Demande via ${source}`,
    })

    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      formDataObj.append('_subject', `Nouveau message (${source}): ${formData.email || 'Visiteur'}`)
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
          source,
        })
        setSubmitStatus({
          success: true,
          message: 'Votre message a bien été envoyé. Nous revenons vers vous rapidement.',
        })
        setFormData({ email: '', message: '', consent: false })
        return
      }

      setSubmitStatus({ success: false, message: "Échec de l'envoi. Veuillez réessayer." })
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus({
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      })
      analytics.trackFormInteraction('contact_form', 'abandon', 'submit_error', {
        error_message: error instanceof Error ? error.message : 'Unknown error',
        source,
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor={emailInputId} className="block text-sm font-medium text-[#001F45] mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id={emailInputId}
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
          aria-invalid={Boolean(formErrors.email)}
          aria-describedby={formErrors.email ? `${emailInputId}-error` : undefined}
          className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700"
          required
        />
        {formErrors.email && (
          <p id={`${emailInputId}-error`} className="text-red-500 text-xs mt-1">
            {formErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={messageInputId} className="block text-sm font-medium text-[#001F45] mb-1.5">
          Comment pouvons-nous vous aider ? <span className="text-red-500">*</span>
        </label>
        <textarea
          id={messageInputId}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 resize-vertical"
          required
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id={consentInputId}
          name="consent"
          checked={formData.consent}
          onChange={handleCheckboxChange}
          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
          required
        />
        <label htmlFor={consentInputId} className="text-sm text-gray-600 leading-relaxed">
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
  )
}
