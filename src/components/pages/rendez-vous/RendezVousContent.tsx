'use client'

import React from 'react'
import BookingWidget from './BookingWidget'
import { FaCheckCircle, FaComments, FaCalendarAlt, FaArrowRight, FaLaptopCode, FaHeadset, FaQuestionCircle, FaChevronRight, FaClock, FaLightbulb } from 'react-icons/fa'
import Link from 'next/link'

const RendezVousContent = () => {
  const faqItems = [
    {
      question: "Comment se déroule le rendez-vous ?",
      answer: "Notre rendez-vous de consultation se déroule en vidéoconférence via Google Meet. Nous discuterons de votre projet, de vos objectifs et de vos besoins spécifiques. Notre équipe vous fournira des conseils personnalisés et vous présentera les solutions possibles."
    },
    {
      question: "Combien de temps dure la consultation ?",
      answer: "La consultation initiale dure environ 45 minutes. Ce temps nous permet d'explorer votre projet en détail et de répondre à toutes vos questions. Si nécessaire, nous pourrons planifier des sessions de suivi."
    },
    {
      question: "Est-ce que la consultation est gratuite ?",
      answer: "Oui, la consultation initiale est entièrement gratuite et sans engagement. Nous croyons qu'il est important de bien comprendre vos besoins avant de vous proposer des solutions adaptées."
    },
    {
      question: "Que dois-je préparer avant le rendez-vous ?",
      answer: "Pour maximiser l'efficacité de notre consultation, nous vous recommandons de préparer une description générale de votre projet, vos objectifs principaux, et toute référence visuelle ou fonctionnelle qui pourrait nous aider à mieux comprendre vos attentes."
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="200" fill="white" fillOpacity="0.2" />
            <circle cx="100" cy="100" r="50" fill="white" fillOpacity="0.2" />
            <circle cx="700" cy="200" r="80" fill="white" fillOpacity="0.2" />
            <circle cx="200" cy="600" r="100" fill="white" fillOpacity="0.2" />
            <circle cx="600" cy="600" r="70" fill="white" fillOpacity="0.2" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Planifiez votre consultation gratuite
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discutons de votre projet et explorons ensemble les possibilités pour le concrétiser.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-white px-4 py-2">
                <FaClock className="text-white/80" />
                <span className="text-sm font-medium">Consultation de 45 minutes</span>
                <span className="mx-2">•</span>
                <FaQuestionCircle className="text-white/80" />
                <span className="text-sm font-medium">Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {/* Process & Benefits */}
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <FaLightbulb className="h-5 w-5 text-blue-600" />
                  </div>
                  Comment ça marche ?
                </h2>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 p-3 rounded-full shadow-sm">
                        <FaCalendarAlt className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-medium text-gray-800">1. Réservez un créneau</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">Choisissez un horaire qui vous convient dans notre calendrier en ligne.</p>
                    </div>
                  </div>

                  <div className="flex items-start hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 p-3 rounded-full shadow-sm">
                        <FaComments className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-medium text-gray-800">2. Consultation vidéo</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">Nous échangerons par visioconférence pour discuter en détail de votre projet.</p>
                    </div>
                  </div>

                  <div className="flex items-start hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 p-3 rounded-full shadow-sm">
                        <FaLaptopCode className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-medium text-gray-800">3. Analyse personnalisée</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">Nous vous fournirons des conseils et solutions adaptés à vos besoins spécifiques.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <FaCheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    Les avantages de notre consultation
                  </h3>
                  <ul className="space-y-4 pl-2">
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Expertise technique et conseils personnalisés</span>
                    </li>
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Estimation préliminaire des coûts et délais</span>
                    </li>
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Identification des défis techniques potentiels</span>
                    </li>
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Suggestions d'amélioration et d'optimisation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Booking Widget */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <FaCalendarAlt className="h-5 w-5 text-blue-600 mr-2" />
                    Réservez votre créneau
                  </h3>
                  <p className="text-gray-600 mt-2 flex items-center">
                    <FaClock className="h-4 w-4 text-blue-500 mr-2" />
                    Consultation gratuite de 45 minutes
                  </p>
                </div>
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-3">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tout ce que vous devez savoir avant de réserver votre consultation avec notre équipe.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-start">
                    <FaQuestionCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-gray-600 ml-8 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 clip-slant-bottom" />
        <div className="relative py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Prêt à transformer votre vision en réalité ?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Planifiez votre consultation gratuite ou explorez nos projets pour découvrir notre expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-medium rounded-lg shadow-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:scale-105"
                >
                  Nous contacter
                  <FaHeadset className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/projets"
                  className="inline-flex items-center px-8 py-4 text-base font-medium rounded-lg shadow-lg text-white bg-blue-700/50 backdrop-blur-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-all duration-200 hover:scale-105 border border-white/20"
                >
                  Voir nos projets
                  <FaChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RendezVousContent
