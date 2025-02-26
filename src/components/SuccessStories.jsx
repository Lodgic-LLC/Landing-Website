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
      image: '/assets/saas-project.jpg',
      link: '#',
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
      title: 'CoinFinder - Plateforme Crypto',
      description: 'Application web de suivi et d\'analyse de cryptomonnaies en temps réel',
      image: '/public/images/coinfinder.png',
      link: 'https://coinfinder.fr',
      items: [
        {
          id: 'coin-1',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          ),
          text: 'Interface intuitive pour suivre plus de 10 000 cryptomonnaies en temps réel',
        },
        {
          id: 'coin-2',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Augmentation de 65% du temps passé sur la plateforme',
        },
        {
          id: 'coin-3',
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          ),
          text: 'Croissance de 120% de la base utilisateurs en 6 mois',
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
              <a
                key={caseItem.id}
                href={caseItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group rounded-xl overflow-hidden shadow-lg h-80 block cursor-pointer transition-transform hover:-translate-y-1 duration-300"
                data-aos="fade-up"
                data-aos-delay={(caseItem.id - 1) * 100}
              >
                {/* Image d'arrière-plan */}
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay avec dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 transition-opacity duration-300"></div>

                {/* Titre visible uniquement quand pas de survol */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-2xl font-inter-bold mb-2">{caseItem.title}</h3>
                </div>

                {/* Contenu qui apparaît au survol */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-inter-bold text-white mb-3">{caseItem.title}</h3>
                  <p className="text-white/90 mb-4">{caseItem.description}</p>

                  <div className="space-y-3">
                    {caseItem.items.map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-blue-500/30 rounded-full mt-0.5">
                          {React.cloneElement(item.icon, { className: "w-4 h-4 text-white" })}
                        </div>
                        <p className="ml-3 text-white/90 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-white/90">
                    <span className="text-sm font-medium">Voir le projet</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
