import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const DetailedServices = () => {
  const progressLineRef = useRef(null)

  useEffect(() => {
    AOS.refresh()

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

  const services = [
    {
      id: 1,
      title: "Développement d'applications web",
      description:
        "Création d'applications web modernes, réactives et évolutives qui répondent parfaitement à vos besoins métier et offrent une expérience utilisateur exceptionnelle.",
      features: [
        'Interfaces utilisateur réactives et intuitives',
        'Architecture évolutive et maintenable',
        'Optimisation des performances',
        'Compatibilité multi-navigateurs et multi-appareils',
      ],
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fond violet */}
          <rect className="animate-pulse" width="100" height="100" rx="20" fill="#8B5CF6" />

          {/* Éléments d'interface */}
          <rect x="20" y="25" width="60" height="10" rx="2" fill="#F3F4F6" />
          <rect x="20" y="40" width="40" height="5" rx="1" fill="#E5E7EB" />
          <rect x="20" y="50" width="30" height="5" rx="1" fill="#E5E7EB" />

          {/* Éléments 3D */}
          <circle
            cx="30"
            cy="70"
            r="8"
            fill="#2563EB"
            className="animate-bounce"
            style={{ animationDelay: '0s', animationDuration: '2s' }}
          />
          <circle
            cx="50"
            cy="70"
            r="8"
            fill="#EC4899"
            className="animate-bounce"
            style={{ animationDelay: '0.3s', animationDuration: '2.2s' }}
          />
          <circle
            cx="70"
            cy="70"
            r="8"
            fill="#10B981"
            className="animate-bounce"
            style={{ animationDelay: '0.6s', animationDuration: '1.8s' }}
          />
        </svg>
      ),
      color: 'from-violet-500 to-indigo-600',
      delay: 0,
    },
    {
      id: 2,
      title: 'Refonte et optimisation',
      description:
        "Modernisation de vos applications existantes pour améliorer les performances, l'expérience utilisateur et la sécurité, tout en préservant vos fonctionnalités essentielles.",
      features: [
        'Audit technique complet',
        'Refactorisation du code',
        'Optimisation des performances',
        'Migration vers des technologies modernes',
      ],
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fond bleu */}
          <rect width="100" height="100" rx="20" fill="#6B7280" />

          {/* Éléments de design */}
          <rect x="25" y="25" width="30" height="30" rx="4" fill="#F3F4F6" className="animate-pulse" />
          <rect x="60" y="25" width="15" height="15" rx="2" fill="#E5E7EB" />
          <rect x="60" y="45" width="15" height="10" rx="2" fill="#E5E7EB" />
          <rect x="25" y="60" width="50" height="15" rx="2" fill="#F3F4F6" />

          {/* Élément animé */}
          <rect
            x="35"
            y="35"
            width="10"
            height="10"
            rx="2"
            fill="#2563EB"
            className="animate-spin"
            style={{ transformOrigin: 'center', animationDuration: '3s' }}
          />
        </svg>
      ),
      color: 'from-gray-600 to-gray-700',
      delay: 100,
    },
    {
      id: 3,
      title: "Intégration d'API",
      description:
        'Connexion fluide de vos applications avec des services tiers et automatisation des flux de données pour optimiser vos processus métier et améliorer la productivité.',
      features: [
        "Développement d'API RESTful",
        'Intégration avec des services tiers',
        'Automatisation des flux de données',
        'Documentation complète des API',
      ],
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fond bleu clair */}
          <rect width="100" height="100" rx="20" fill="#60A5FA" />

          {/* Éléments de connexion */}
          <rect x="20" y="40" width="20" height="20" rx="4" fill="#F3F4F6" />
          <rect x="60" y="40" width="20" height="20" rx="4" fill="#F3F4F6" />

          {/* Ligne de connexion animée */}
          <path d="M40 50 L60 50" stroke="#2563EB" strokeWidth="4" strokeDasharray="20" className="animate-pulse" />

          {/* Éléments de données */}
          <circle cx="30" cy="50" r="5" fill="#2563EB" className="animate-ping" style={{ animationDuration: '2s' }} />
          <circle
            cx="70"
            cy="50"
            r="5"
            fill="#2563EB"
            className="animate-ping"
            style={{ animationDuration: '2s', animationDelay: '1s' }}
          />
        </svg>
      ),
      color: 'from-blue-400 to-blue-600',
      delay: 200,
    },
    {
      id: 4,
      title: 'Maintenance de site internet',
      description:
        'Service complet de maintenance technique, mises à jour de sécurité et optimisations régulières pour garantir la performance et la fiabilité de vos applications web.',
      features: [
        'Mises à jour de sécurité régulières',
        'Surveillance des performances',
        'Sauvegardes automatisées',
        'Support technique réactif',
      ],
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fond jaune */}
          <rect width="100" height="100" rx="20" fill="#FBBF24" />

          {/* Écran d'ordinateur */}
          <rect x="25" y="25" width="50" height="35" rx="4" fill="#F3F4F6" />
          <rect x="30" y="30" width="40" height="25" rx="2" fill="#E5E7EB" />

          {/* Engrenage principal */}
          <circle
            cx="50"
            cy="65"
            r="15"
            fill="#2563EB"
            className="animate-spin"
            style={{ transformOrigin: 'center', animationDuration: '10s' }}
          />
          <circle cx="50" cy="65" r="10" fill="#FBBF24" />
          <circle cx="50" cy="65" r="5" fill="#F3F4F6" />

          {/* Dents d'engrenage */}
          <rect x="48" y="45" width="4" height="8" fill="#2563EB" />
          <rect x="48" y="77" width="4" height="8" fill="#2563EB" />
          <rect x="30" y="63" width="8" height="4" fill="#2563EB" />
          <rect x="62" y="63" width="8" height="4" fill="#2563EB" />

          {/* Dents diagonales */}
          <rect x="36" y="51" width="4" height="8" transform="rotate(45 36 51)" fill="#2563EB" />
          <rect x="60" y="75" width="4" height="8" transform="rotate(45 60 75)" fill="#2563EB" />
          <rect x="36" y="75" width="4" height="8" transform="rotate(-45 36 75)" fill="#2563EB" />
          <rect x="60" y="51" width="4" height="8" transform="rotate(-45 60 51)" fill="#2563EB" />

          {/* Indicateurs de statut */}
          <circle cx="75" cy="30" r="5" fill="#10B981" className="animate-pulse" />
          <circle cx="75" cy="45" r="5" fill="#F59E0B" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="75" cy="60" r="5" fill="#EF4444" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      ),
      color: 'from-amber-400 to-amber-500',
      delay: 300,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge et Titre */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
              Des services complets pour vos projets digitaux
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Nous proposons une gamme complète de services pour vous accompagner dans la réalisation de vos projets
              web, de la conception à la maintenance.
            </p>

            {/* Trait horizontal sous le titre avec animation */}
            <div className="relative h-1 w-24 mx-auto">
              <div className="absolute inset-0 bg-gray-200"></div>
              <div
                ref={progressLineRef}
                className="absolute inset-0 bg-[#2563EB] w-0 transition-all duration-1500 ease-out"
              ></div>
            </div>
          </div>

          {/* Grille de services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                {/* Barre de couleur en haut */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="p-8">
                  {/* Icône et titre */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-inter-bold text-gray-900 text-center mb-4">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>

                  {/* Caractéristiques */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton */}
                  <div className="text-center">
                    <Link
                      to={`/services`}
                      className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-inter-medium shadow-md hover:shadow-lg transition-shadow`}
                    >
                      En savoir plus
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-20" data-aos="fade-up" data-aos-delay="400">
            <div className="relative">
              {/* Éléments décoratifs */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-50 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-indigo-50 rounded-full opacity-70 blur-xl"></div>

              {/* Carte principale */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left max-w-lg">
                      <h3 className="text-2xl md:text-3xl font-inter-bold text-gray-900 mb-4">
                        Besoin d'un service sur mesure ?
                      </h3>
                      <p className="text-gray-600 mb-6 md:mb-0">
                        Nous adaptons nos services à vos besoins spécifiques. Contactez-nous pour discuter de votre
                        projet et obtenir une proposition personnalisée.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-inter-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          ></path>
                        </svg>
                        Nous contacter
                      </Link>
                      <Link
                        to="/rendez-vous"
                        className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-inter-medium rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>
                        Prendre rendez-vous
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedServices
