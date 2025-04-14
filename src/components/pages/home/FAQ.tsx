'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Détecter si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    // Vérifier au chargement
    checkIfMobile()

    // Vérifier au redimensionnement
    window.addEventListener('resize', checkIfMobile)

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  const faqItems = [
    {
      id: 1,
      question: "Quel est le coût d'une application mobile ?",
      answer:
        'Le coût dépend entièrement des fonctionnalités requises et de la complexité du projet. Nous proposons un devis détaillé et gratuit après une première consultation pour comprendre vos besoins spécifiques.',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      question: "Quel est le délai moyen de développement d'une application mobile ?",
      answer:
        "Entre 2 à 12 semaines selon la complexité du projet. Les applications simples peuvent être livrées en quelques semaines, tandis que les projets plus complexes avec des intégrations multiples peuvent prendre jusqu'à 3 mois.",
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      question: 'Proposez-vous un support après la publication sur les stores ?',
      answer:
        "Absolument. Nous offrons différentes formules de maintenance et de support technique après la publication sur l'App Store et le Play Store. Cela inclut les corrections de bugs, l'ajout de nouvelles fonctionnalités, les mises à jour de sécurité et l'assistance technique selon vos besoins.",
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 'tech-stack',
      question: 'Quelles technologies utilisez-vous pour développer les applications mobiles ?',
      answer:
        "Nous utilisons principalement React Native et Expo pour le développement d'applications mobiles cross-plateforme. Cela nous permet de créer des applications performantes pour Android et iOS à partir d'une seule base de code, tout en offrant une expérience utilisateur proche du natif. Pour le backend, nous privilégions NestJS et Prisma.",
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 5,
      question: "Je ne suis pas sur d'avoir le budget",
      answer:
        "Vous n'avez rien à perdre à prendre contact avec nous. Nous pouvons discuter de votre projet mobile et de vos besoins pour trouver une solution adaptée à votre budget.",
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
  ]

  // Préparer les données structurées pour le SEO
  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchemaData)}
      </Script>

      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        {/* Vague en haut pour transition */}
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
          <svg
            className="absolute top-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        {/* Formes SVG en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Cercles et formes abstraites */}
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-30"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Grand cercle central */}
            <circle cx="720" cy="400" r="300" fill="url(#gradient1)" fillOpacity="0.1" />

            {/* Cercle supérieur droit */}
            <circle cx="1100" cy="150" r="150" fill="url(#gradient2)" fillOpacity="0.1" />

            {/* Cercle inférieur gauche */}
            <circle cx="300" cy="650" r="200" fill="url(#gradient3)" fillOpacity="0.1" />

            {/* Forme abstraite 1 */}
            <path
              d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
              fill="url(#gradient4)"
              fillOpacity="0.05"
            />

            {/* Définition des dégradés */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Questions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                fréquentes
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              Vous avez des questions ? Nous avons les réponses. Voici les questions les plus fréquemment posées par nos
              clients.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 sm:mb-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full px-3 sm:px-6 py-3 sm:py-5 text-left focus:outline-none cursor-pointer"
                  onClick={() => toggleQuestion(item.id)}
                >
                  <div className="flex items-center">
                    <div className="mr-2 sm:mr-4 p-1.5 sm:p-2 rounded-lg bg-blue-50">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                        {item.icon.props.children}
                      </svg>
                    </div>
                    <span className="font-medium text-sm sm:text-base md:text-lg text-gray-900">{item.question}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform ${!isMobile ? 'transition-transform duration-200' : ''
                      } flex-shrink-0 ml-2 ${openQuestion === item.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isMobile ? (
                  // Version mobile sans animation
                  openQuestion === item.id && (
                    <div className="px-3 sm:px-6 border-t border-gray-100">
                      <p className="text-sm sm:text-base text-gray-600 py-3 sm:py-4">{item.answer}</p>
                    </div>
                  )
                ) : (
                  // Version desktop avec animation
                  <div
                    className={`px-3 sm:px-6 transition-all duration-200 ease-out overflow-hidden border-t border-gray-100 ${openQuestion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
                      }`}
                  >
                    <p className="text-sm sm:text-base text-gray-600 py-3 sm:py-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-16">
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Vous avez d'autres questions ? N'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
            >
              Contactez-nous
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
