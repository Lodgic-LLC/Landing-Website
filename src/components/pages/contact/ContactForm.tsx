'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaEnvelope } from 'react-icons/fa'

interface SubmitStatusType {
  success: boolean
  message: string
}

interface FormErrorsType {
  email?: string
  phone?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType | null>(null)
  const [formErrors, setFormErrors] = useState<FormErrorsType>({})
  const router = useRouter()

  const validateEmail = (email: string): boolean => {
    // Regex pour validation d'email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Si le champ est vide, c'est valide (car optionnel)
    if (!phone.trim()) return true

    // Regex pour valider les numéros de téléphone français
    // Accepte les formats: 06 12 34 56 78, 0612345678, +33 6 12 34 56 78, +33612345678
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    return phoneRegex.test(phone)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Effacer les erreurs lorsque l'utilisateur modifie les champs
    if (name === 'email' && formErrors.email) {
      setFormErrors((prev) => ({ ...prev, email: undefined }))
    }
    if (name === 'phone' && formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Réinitialiser les erreurs
    const errors: FormErrorsType = {}

    // Valider l'email
    if (!validateEmail(formData.email)) {
      errors.email = "L'adresse email n'est pas valide"
    }

    // Valider le téléphone (si renseigné)
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = "Le numéro de téléphone n'est pas valide (format français attendu)"
    }

    // S'il y a des erreurs, les afficher et arrêter la soumission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)
    setFormErrors({})

    try {
      // Créer un objet FormData à partir du formulaire
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      // Ajouter les champs cachés pour FormSubmit
      formDataObj.append('_subject', `Nouveau message: ${formData.subject}`)
      formDataObj.append('_next', 'https://lodgic-dev.com/merci')
      formDataObj.append('_captcha', 'false')

      // Envoyer les données à FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/c1f6460b84bc25bfcdc7f63d038c2dfd', {
        method: 'POST',
        body: formDataObj,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        router.push('/merci')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus({
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className=" bg-gradient-to-r from-blue-50 to-indigo-50 py-32 md:py-32 px-4 sm:px-16 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Contactez-nous
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Nous sommes a votre disposition pour échanger avec vous sur votre projet.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Formulaire de contact */}
            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-blue-600 mr-3 rounded-full"></span>
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                          formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Votre adresse email"
                      />
                      {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                        formErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Votre numéro de téléphone"
                    />
                    {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Objet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="L'objet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre demande en détail..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        'Envoyer le message'
                      )}
                    </button>
                  </div>

                  {submitStatus && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.success
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      <div className="flex">
                        <div className="flex-shrink-0">
                          {submitStatus.success ? (
                            <svg
                              className="h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5 text-red-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{submitStatus.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
