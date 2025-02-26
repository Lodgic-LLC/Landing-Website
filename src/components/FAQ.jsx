import React, { useRef, useEffect, useState } from 'react'

const FAQ = () => {
  const progressLineRef = useRef(null)
  const [openQuestion, setOpenQuestion] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (progressLineRef.current) {
              progressLineRef.current.style.width = '100%'
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (progressLineRef.current) {
      observer.observe(progressLineRef.current)
    }

    return () => {
      if (progressLineRef.current) {
        observer.unobserve(progressLineRef.current)
      }
    }
  }, [])

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  const faqItems = [
    {
      id: 1,
      question: "Quel est le coût d'un projet ?",
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
      question: 'Quel est le délai moyen de développement ?',
      answer:
        "Entre 4 à 12 semaines selon la complexité du projet. Les applications simples peuvent être livrées en un mois, tandis que les projets plus complexes avec des intégrations multiples peuvent prendre jusqu'à 3 mois.",
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
      question: 'Travaillez-vous avec des clients internationaux ?',
      answer:
        'Oui, nous collaborons régulièrement avec des clients du monde entier. Notre équipe est habituée au travail à distance et nous utilisons des outils de communication efficaces pour assurer une collaboration fluide malgré les fuseaux horaires.',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      question: 'Proposez-vous un support après la livraison du projet ?',
      answer:
        "Absolument. Nous offrons différentes formules de maintenance et de support technique après la mise en production. Cela inclut les corrections de bugs, les mises à jour de sécurité et l'assistance technique selon vos besoins.",
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
      id: 5,
      question: 'Quelles technologies utilisez-vous pour le développement ?',
      answer:
        'Nous utilisons principalement React.js, Next.js et TailwindCSS pour le front-end, et Node.js ou Python pour le back-end. Nous adaptons notre stack technologique en fonction des besoins spécifiques de chaque projet pour garantir les meilleures performances.',
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
      id: 6,
      question: 'Comment se déroule le processus de collaboration ?',
      answer:
        "Notre processus commence par une consultation initiale, suivie d'une phase de conception et de planification. Nous développons ensuite le projet par sprints avec des démonstrations régulières pour recueillir vos retours. Après les tests et la validation finale, nous procédons au déploiement et vous accompagnons pour la mise en production.",
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">Questions fréquemment posées</h2>
            <p className="text-gray-600 text-lg mb-6">Tout ce que vous devez savoir avant de démarrer votre projet</p>

            {/* Trait horizontal sous le titre avec animation */}
            <div className="relative h-1 w-32 mx-auto">
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              <div
                ref={progressLineRef}
                className="absolute inset-0 bg-[#2563EB] w-0 transition-all duration-1500 ease-out rounded-full"
              ></div>
            </div>
          </div>

          {/* Questions et réponses */}
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Question (toujours visible) */}
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => toggleQuestion(item.id)}
                  aria-expanded={openQuestion === item.id}
                  tabIndex="0"
                >
                  <div className="flex items-center">
                    <span className="mr-4 flex-shrink-0 bg-blue-50 p-2 rounded-lg">{item.icon}</span>
                    <span className="font-inter-medium text-gray-900 text-lg">{item.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform duration-500 ease-in-out ${openQuestion === item.id ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Réponse (visible uniquement si la question est ouverte) */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openQuestion === item.id ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-600 px-6 py-5 pl-16 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <p className="text-gray-700 mb-6 text-lg">Vous avez une question spécifique concernant votre projet ?</p>
            <a
              href="/rendez-vous"
              className="inline-flex items-center justify-center bg-[#2563EB] text-white font-inter-medium px-8 py-4 rounded-lg hover:bg-[#1d4ed8] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Contactez-nous pour plus d'informations"
            >
              <span>Discutons de votre projet</span>
              <svg
                className="ml-2 w-5 h-5"
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
      </div>
    </section>
  )
}

export default FAQ
