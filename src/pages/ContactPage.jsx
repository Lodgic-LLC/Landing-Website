import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import PageTitle from '../components/PageTitle'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un envoi de formulaire
    try {
      // Ici, vous intégreriez votre logique d'envoi réelle
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus({ success: true, message: 'Votre message a été envoyé avec succès !' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageTitle
        title="Contactez-nous"
        description="Nous sommes là pour vous accompagner dans vos projets digitaux. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
      />

      <div className="bg-gray-50 p-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4" data-aos="fade-up">
              Contactez-nous
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Nous sommes là pour vous accompagner dans vos projets digitaux. Remplissez le formulaire ci-dessous et
              nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl shadow-md p-8" data-aos="fade-right">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-inter-medium text-gray-700 mb-2">
                    Nom
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

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-inter-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Votre adresse email"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-inter-medium text-gray-700 mb-2">
                    Objet
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

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-inter-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-inter-medium py-3 px-6 rounded-lg transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {submitStatus && (
                  <div
                    className={`mt-4 p-3 rounded-lg ${
                      submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Informations de contact */}
            <div className="bg-white rounded-xl shadow-md p-8" data-aos="fade-left">
              <div className="mb-10">
                <h2 className="text-xl font-inter-bold text-gray-900 mb-6">Nos coordonnées</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700">123 Avenue des Développeurs, 75001 Paris</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <FaPhone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700">contact@lodgic.fr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-inter-bold text-gray-900 mb-6">Suivez-nous</h2>

                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Carte Google Maps */}
              <div className="mt-10">
                <div className="rounded-lg overflow-hidden h-64 w-full">
                  <iframe
                    title="Localisation de notre bureau"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330157606295!3d48.87456857928884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sOp%C3%A9ra%20Garnier!5e0!3m2!1sfr!2sfr!4v1623252320127!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
