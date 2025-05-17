'use client'

import React from 'react'
import BookingWidget from './BookingWidget'
import {
  FaCheckCircle,
  FaComments,
  FaCalendarAlt,
  FaArrowRight,
  FaLaptopCode,
  FaHeadset,
  FaQuestionCircle,
  FaChevronRight,
  FaClock,
  FaLightbulb,
} from 'react-icons/fa'
import Link from 'next/link'

const RendezVousContent = () => {
  const faqItems = [
    {
      question: 'Combien de temps dure un rendez-vous ?',
      answer:
        "Nos consultations stratégiques durent 45 minutes, un format optimisé pour analyser vos besoins, répondre à vos questions et établir les bases d'une collaboration efficace.",
    },
    {
      question: 'Le rendez-vous est-il gratuit ?',
      answer:
        "Oui, cette consultation initiale est offerte sans engagement. Elle nous permet d'évaluer précisément vos besoins et de déterminer comment notre expertise peut vous apporter une valeur ajoutée.",
    },
    {
      question: 'Comment se déroule le rendez-vous ?',
      answer:
        "La consultation se déroule par visioconférence sécurisée. Vous recevrez un lien de connexion après votre réservation. Nous analyserons ensemble vos objectifs et élaborerons un plan d'action personnalisé.",
    },
    {
      question: 'Puis-je modifier ma réservation ?',
      answer:
        'Absolument, vous pouvez modifier ou annuler votre rendez-vous à tout moment via le lien de confirmation reçu par email. Nous comprenons que les priorités peuvent évoluer.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FAF3E0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="200" fill="#FFFFFF" fillOpacity="0.1" />
            <circle cx="100" cy="100" r="50" fill="#FFFFFF" fillOpacity="0.1" />
            <circle cx="700" cy="200" r="80" fill="#FFFFFF" fillOpacity="0.1" />
            <circle cx="200" cy="600" r="100" fill="#FFFFFF" fillOpacity="0.1" />
            <circle cx="600" cy="600" r="70" fill="#FFFFFF" fillOpacity="0.1" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-[#FFFFFF] mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Planifiez votre <span className="text-[#E67E22]">entretien de découverte</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#FFFFFF]/90 leading-relaxed">
              Discutons de votre projet et explorons ensemble les possibilités pour le concrétiser.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="p-2 rounded-full bg-[#FFFFFF]/10 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-[#FFFFFF] px-4 py-2">
                <FaClock className="text-[#FFFFFF]/80" />
                <span className="text-sm font-medium">Consultation de 45 minutes</span>
                <span className="mx-2">•</span>
                <FaQuestionCircle className="text-[#FFFFFF]/80" />
                <span className="text-sm font-medium">Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Transition */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z" fill="#FAF3E0" />
          </svg>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 relative bg-[#FAF3E0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
              {/* Process & Benefits */}
              <div className="bg-[#FFFFFF] rounded-xl shadow-xl p-8 border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-[#111827] mb-8 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E67E22]/10 flex items-center justify-center mr-3">
                    <FaLightbulb className="h-5 w-5 text-[#E67E22]" />
                  </div>
                  Comment ça marche ?
                </h2>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start hover:bg-[#E67E22]/5 p-3 rounded-lg transition-colors duration-200 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 p-3 rounded-full shadow-sm transition-colors duration-200">
                        <FaCalendarAlt className="h-6 w-6 text-[#E67E22]" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-medium text-[#111827]">1. Réservez un créneau</h3>
                      <p className="mt-2 text-[#374151] leading-relaxed">
                        Choisissez un horaire qui vous convient dans notre calendrier en ligne.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start hover:bg-[#E67E22]/5 p-3 rounded-lg transition-colors duration-200 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 p-3 rounded-full shadow-sm transition-colors duration-200">
                        <FaComments className="h-6 w-6 text-[#E67E22]" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-medium text-[#111827]">2. Consultation vidéo</h3>
                      <p className="mt-2 text-[#374151] leading-relaxed">
                        Nous échangerons par visioconférence pour discuter en détail de votre projet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start hover:bg-[#E67E22]/5 p-3 rounded-lg transition-colors duration-200 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 p-3 rounded-full shadow-sm transition-colors duration-200">
                        <FaLaptopCode className="h-6 w-6 text-[#E67E22]" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-xl font-medium text-[#111827]">3. Analyse personnalisée</h3>
                      <p className="mt-2 text-[#374151] leading-relaxed">
                        Nous vous fournirons des conseils et solutions adaptés à vos besoins spécifiques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-2xl font-bold text-[#111827] mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#A3B18A]/20 flex items-center justify-center mr-3">
                      <FaCheckCircle className="h-4 w-4 text-[#A3B18A]" />
                    </div>
                    Les avantages de notre consultation
                  </h3>
                  <ul className="space-y-4 pl-2">
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-[#A3B18A] mt-1 flex-shrink-0" />
                      <span className="ml-3 text-[#374151]">Expertise technique et conseils personnalisés</span>
                    </li>
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-[#A3B18A] mt-1 flex-shrink-0" />
                      <span className="ml-3 text-[#374151]">Estimation préliminaire des coûts et délais</span>
                    </li>
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-[#A3B18A] mt-1 flex-shrink-0" />
                      <span className="ml-3 text-[#374151]">Identification des défis techniques potentiels</span>
                    </li>
                    <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                      <FaCheckCircle className="h-5 w-5 text-[#A3B18A] mt-1 flex-shrink-0" />
                      <span className="ml-3 text-[#374151]">Suggestions d'amélioration et d'optimisation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Booking Widget */}
              <div className="bg-[#FFFFFF] rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-2xl transition-shadow duration-300">
                <div className="p-6 bg-gradient-to-r from-[#E67E22]/5 to-[#E67E22]/10 border-b border-[#E67E22]/20">
                  <h3 className="text-2xl font-bold text-[#111827] flex items-center">
                    <FaCalendarAlt className="h-5 w-5 text-[#E67E22] mr-2" />
                    Réservez votre créneau
                  </h3>
                  <p className="text-[#374151] mt-2 flex items-center">
                    <FaClock className="h-4 w-4 text-[#E67E22] mr-2" />
                    Consultation gratuite de 45 minutes
                  </p>
                </div>
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
        {/* Wave Transition */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C360,0 1080,120 1440,50 L1440,100 L0,100 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FFFFFF] relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] text-sm font-medium mb-3">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-[#111827] mb-4">Questions fréquentes</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto mb-4"></div>
              <p className="text-[#374151] max-w-2xl mx-auto">
                Tout ce que vous devez savoir avant de réserver votre consultation avec notre équipe.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-xl p-6 shadow-lg border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-medium text-[#111827] mb-3 flex items-start">
                    <FaQuestionCircle className="h-5 w-5 text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-[#374151] ml-8 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Wave Transition */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z" fill="#2C3E50" />
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 py-20">
        <div className="absolute inset-0 opacity-10">
          {/* Simplified decorative elements, ensure fill is #FFFFFF for contrast on dark bg */}
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="200" fill="#FFFFFF" fillOpacity="0.05" />
            <circle cx="100" cy="100" r="50" fill="#FFFFFF" fillOpacity="0.05" />
            <circle cx="700" cy="200" r="80" fill="#FFFFFF" fillOpacity="0.05" />
          </svg>
        </div>
        <div className="relative py-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6 leading-tight">
                Prêt à transformer votre vision en réalité ?
              </h2>
              <p className="text-xl text-[#FFFFFF]/90 mb-10 max-w-2xl mx-auto">
                Planifiez votre entretien de découverte et découvrez comment nous pouvons vous aider à réaliser vos
                ambitions.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg shadow-lg text-[#2C3E50] bg-[#FFFFFF] hover:bg-[#FAF3E0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22] transition-all duration-200 hover:scale-105 transform hover:-translate-y-0.5"
                >
                  Nous contacter
                  <FaHeadset className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/projets"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg shadow-lg text-[#FFFFFF] bg-transparent hover:bg-[#FFFFFF]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFFFFF]/50 transition-all duration-200 hover:scale-105 transform hover:-translate-y-0.5 border-2 border-[#FFFFFF]/80 hover:border-[#FFFFFF]"
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
