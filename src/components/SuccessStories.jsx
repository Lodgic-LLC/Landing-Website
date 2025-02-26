import React, { useRef, useEffect } from 'react'

const SuccessStories = () => {
  const progressLineRef = useRef(null)

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

  const successCases = [
    {
      id: 1,
      title: 'SaaS pour Startups',
      description: 'Transformation digitale complète pour une startup en pleine croissance',
      items: [
        {
          id: 'saas-1',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5zm9.364-9.5A5.48 5.48 0 0010 7.32a5.403 5.403 0 00-4.864-3.32A4.5 4.5 0 000 8.5c0 2.485 2.015 4.5 4.5 4.5h11c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5a4.5 4.5 0 00-.636.045z" />
            </svg>
          ),
          text: "Développement d'une plateforme SaaS en 3 mois",
        },
        {
          id: 'saas-2',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Augmentation de 40% du taux de conversion',
        },
        {
          id: 'saas-3',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          ),
          text: 'Réduction des coûts opérationnels de 30%',
        },
      ],
    },
    {
      id: 2,
      title: 'Site e-commerce optimisé',
      description: 'Refonte complète pour une expérience client exceptionnelle',
      items: [
        {
          id: 'ecom-1',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Refonte complète du site pour une meilleure UX',
        },
        {
          id: 'ecom-2',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: "Augmentation de 25% du chiffre d'affaires",
        },
        {
          id: 'ecom-3',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Taux de panier abandonné réduit de 45%',
        },
      ],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">Découvrez nos success stories</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre expertise et de notre engagement envers la réussite de nos
              clients
            </p>

            {/* Trait horizontal sous le titre avec animation */}
            <div className="relative h-1 w-32 mx-auto">
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              <div
                ref={progressLineRef}
                className="absolute inset-0 bg-blue-600 w-0 transition-all duration-1500 ease-out rounded-full"
              ></div>
            </div>
          </div>

          {/* Grille des cas de succès */}
          <div className="grid md:grid-cols-2 gap-10">
            {successCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={(caseItem.id - 1) * 100}
              >
                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">{caseItem.title}</h3>
                <p className="text-gray-500 mb-6 text-sm">{caseItem.description}</p>

                <div className="space-y-5">
                  {caseItem.items.map((item) => (
                    <div key={item.id} className="flex items-start">
                      <div className="flex-shrink-0 p-1.5 bg-blue-50 rounded-full mt-0.5">{item.icon}</div>
                      <p className="ml-4 text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <a
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-inter-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="Voir tous nos cas clients"
            >
              Voir tous nos cas clients
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
