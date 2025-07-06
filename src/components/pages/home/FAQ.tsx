'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

// Updated icon components with new color
const CostIcon = () => (
  <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
)

const TimeIcon = () => (
  <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clipRule="evenodd"
    />
  </svg>
)

const SupportIcon = () => (
  <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
      clipRule="evenodd"
    />
  </svg>
)

const TechIcon = () => (
  <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
      clipRule="evenodd"
    />
  </svg>
)

const BudgetIcon = () => (
  <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
)

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
        "Le coût d'une application est comme le prix d'une maison : ça dépend de ce que vous voulez dedans ! Une app simple avec quelques fonctionnalités clés sera plus accessible qu'une grande plateforme complexe. Le mieux, c'est qu'on en discute pour vous donner une estimation précise et adaptée à vos ambitions. C'est gratuit et sans engagement.",
      icon: <CostIcon />,
    },
    {
      id: 2,
      question: 'Combien de temps faut-il pour créer notre application ?',
      answer:
        "En général, on peut donner vie à une première version de votre application (MVP) entre 2 et 12 semaines. Pour les projets plus simples, quelques semaines suffisent. Si votre vision est plus grande, avec beaucoup de fonctionnalités, cela peut prendre jusqu'à 3 mois. On établit toujours un calendrier clair ensemble.",
      icon: <TimeIcon />,
    },
    {
      id: 3,
      question: 'Et après le lancement, vous nous accompagnez toujours ?',
      answer:
        "Bien sûr ! Notre relation ne s'arrête pas à la mise en ligne. On propose des solutions de maintenance pour que votre app reste au top : corrections, mises à jour, et même l'ajout de nouvelles fonctionnalités si votre projet évolue. On est là pour vous, sur le long terme.",
      icon: <SupportIcon />,
    },
    {
      id: 4,
      question: 'Quelles sont les technologies que vous utilisez ?',
      answer:
        "On adore React Native et Expo pour créer des applications qui fonctionnent aussi bien sur Android que sur iOS, à partir d'une seule base de code. C'est un gain de temps et d'argent, sans sacrifier la qualité ! Pour la partie 'invisible' mais essentielle (le backend), on fait confiance à NestJS et Prisma.",
      icon: <TechIcon />,
    },
    {
      id: 5,
      question: "J'ai une super idée, mais je ne suis pas sûr(e) d'avoir le budget...",
      answer:
        'Aucun souci ! Parlons-en ouvertement. On est là pour comprendre votre projet, vos contraintes et trouver ensemble une solution qui correspond à vos moyens. Un premier échange ne coûte rien et peut ouvrir de belles perspectives.',
      icon: <BudgetIcon />,
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

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
            {/* This path should transition from the background of the PREVIOUS section (SuccessStories, which is #FAF3E0) */}
            {/* However, SuccessStories also has a bottom wave to #2C3E50 (ProjectCTA). So this top wave should be #2C3E50 */}
            <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="#2C3E50" />
          </svg>
        </div>

        {/* Formes SVG en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="400" r="300" fill="#A3B18A" fillOpacity="0.03" />
            <circle cx="1100" cy="150" r="150" fill="#E67E22" fillOpacity="0.04" />
            <circle cx="300" cy="650" r="200" fill="#A3B18A" fillOpacity="0.02" />
            <path
              d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
              fill="#E67E22"
              fillOpacity="0.03"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter-bold text-[#2C3E50] mb-4">
              Vos interrogations, nos <span className="text-[#E67E22]">réponses claires</span>
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-[#2C3E50]/80 max-w-3xl mx-auto mb-6">
              <span className="md:hidden">Questions fréquentes. Pas la vôtre ? Contactez-nous !</span>
              <span className="hidden md:inline">
                On a rassemblé ici les questions que vous nous posez souvent. Si la vôtre n'y est pas, on est là pour y
                répondre !
              </span>
            </p>
            <div className="w-20 h-1.5 bg-[#E67E22] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 bg-[#FAF3E0]/40 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[#2C3E50]/5"
              >
                <button
                  className="flex justify-between items-center w-full px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none group"
                  onClick={() => toggleQuestion(item.id)}
                  aria-expanded={openQuestion === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center">
                    <div className="mr-3 sm:mr-4 p-2 rounded-lg bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-base sm:text-lg text-[#2C3E50] group-hover:text-[#E67E22] transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#2C3E50]/70 transform transition-transform duration-300 flex-shrink-0 ml-2 ${
                      openQuestion === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openQuestion === item.id ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                  }`}
                  style={{ maxHeight: openQuestion === item.id ? (isMobile ? 'none' : '20rem') : '0px' }} // Dynamic max-height for smoother animation
                >
                  <p className="text-sm sm:text-base text-[#2C3E50]/90 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <p className="text-base text-[#2C3E50]/80 mb-6">
              Une question spécifique ? Un projet à nous soumettre ? On est toujours ravis d'échanger.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#E67E22] text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22]/50 focus:ring-offset-white"
              aria-label="Contactez-nous pour toute autre question"
            >
              Une autre question ? Écrivez-nous !
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Vague en bas pour transition vers le Footer (fond sombre) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z" fill="#2C3E50" />
          </svg>
        </div>
      </section>
    </>
  )
}
