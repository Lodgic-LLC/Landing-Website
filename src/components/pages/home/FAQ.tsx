'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Section gauche - Informations de contact */}
            <div className="lg:w-1/2 lg:pr-8 lg:border-r lg:border-gray-300 flex-shrink-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bricolage-grotesque-regular text-[rgb(0,15,69)] mb-6">
                Contactez-nous
              </h1>
              <div className="mb-8">
                <h3 className="text-lg font-inter-regular text-[rgb(22,40,105)] mb-2">
                  Ventes et demandes générales
                </h3>
                <a 
                  href="mailto:lodgicdev@gmail.com" 
                  className="underline underline-offset-2 underline-color-blue-600 transition-colors duration-200"
                >
                  lodgicdev@gmail.com
                </a>
              </div>
            </div>

            {/* Section droite - Formulaire */}
            <div className="lg:w-1/2 lg:pl-8 flex-grow">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Première ligne - Nom complet et Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Nom complet*"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Deuxième ligne - Téléphone et Entreprise */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Entreprise"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 text-gray-700 placeholder-gray-500"
                    />
                  </div>
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
                    En soumettant ce formulaire, je donne mon consentement à Lodgic pour traiter mes données personnelles conformément à la{' '}
                    <a href="/privacy" className=" hover:text-blue-800 underline">
                      Politique de Confidentialité
                    </a>{' '}
                    et à la{' '}
                    <a href="/cookies" className=" hover:text-blue-800 underline">
                      Politique des Cookies
                    </a>
                    .
                  </label>
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  className="w-full bg-[#DBFF00] hover:bg-[#caeb00] text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9ACD32] focus:ring-offset-2 text-lg font-bricolage-grotesque-regular cursor-pointer" 
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
