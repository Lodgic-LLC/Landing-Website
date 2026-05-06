'use client'

import { useState } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

interface SubmitStatusType {
  success: boolean
  message: string
}

interface FormErrorsType {
  email?: string
  name?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors: FormErrorsType = {}
    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis'
    }
    if (!validateEmail(formData.email)) {
      errors.email = "L'adresse email n'est pas valide"
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      analytics.trackFormInteraction('contact_form', 'abandon', 'validation_error', {
        error_fields: Object.keys(errors),
      })
      return
    }

    setIsSubmitting(true)
    setFormErrors({})
    setSubmitStatus(null)

    analytics.trackFormInteraction('contact_form', 'submit', undefined, {
      has_phone: Boolean(formData.phone),
      message_length: formData.message.length,
      subject: formData.subject || 'Demande via /contact',
    })

    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      formDataObj.append(
        '_subject',
        `Nouveau message (Contact) : ${formData.name || formData.email || 'Visiteur'}`
      )
      formDataObj.append('_next', 'https://www.lodgic-dev.com/merci')
      formDataObj.append('_captcha', 'false')

      const response = await fetch('https://formsubmit.co/ajax/c1f6460b84bc25bfcdc7f63d038c2dfd', {
        method: 'POST',
        body: formDataObj,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        analytics.trackConversion('contact_form', 10, {
          form_type: 'contact_page',
          conversion_point: 'form_submit',
          lead_quality: 'high',
        })
        setSubmitStatus({
          success: true,
          message: 'Votre message a bien été envoyé. Nous revenons vers vous rapidement.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false,
        })
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
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[#001F45] mb-1.5">
            Nom et prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            aria-invalid={Boolean(formErrors.name)}
            aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700"
            required
          />
          {formErrors.name && (
            <p id="contact-name-error" className="text-red-500 text-xs mt-1">
              {formErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[#001F45] mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-invalid={Boolean(formErrors.email)}
            aria-describedby={formErrors.email ? 'contact-email-error' : undefined}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700"
            required
          />
          {formErrors.email && (
            <p id="contact-email-error" className="text-red-500 text-xs mt-1">
              {formErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-[#001F45] mb-1.5">
            Téléphone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-[#001F45] mb-1.5">
            Sujet
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 bg-white"
          >
            <option value="">Choisir un sujet</option>
            <option value="application-mobile">Application mobile</option>
            <option value="site-web">Site web</option>
            <option value="logiciel-sur-mesure">Logiciel sur mesure</option>
            <option value="conseil">Conseil et cadrage</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#001F45] mb-1.5">
          Votre message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 resize-vertical"
          required
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contact-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleCheckboxChange}
          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
          required
        />
        <label htmlFor="contact-consent" className="text-sm text-gray-600 leading-relaxed">
          J'accepte que mes données soient traitées par Lodgic conformément à la{' '}
          <a href="/politique-confidentialite" className="underline hover:text-blue-800">
            politique de confidentialité
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#DBFF00] hover:bg-[#caeb00] text-black font-semibold py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9ACD32] focus:ring-offset-2 text-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
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
