import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const Features = () => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  // Données des fonctionnalités
  const features = [
    {
      id: 1,
      title: 'Performance & Sécurité',
      description:
        'Applications optimisées et sécurisées selon les dernières normes du marché, garantissant rapidité et protection des données.',
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-500',
      shadowColor: 'shadow-indigo-200',
      link: '/services/performance',
    },
    {
      id: 2,
      title: 'Expérience utilisateur',
      description:
        "Interfaces intuitives centrées sur vos utilisateurs, conçues pour maximiser l'engagement et la satisfaction.",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.6569 16.2427L19.0711 14.8285C20.6332 13.2664 20.6332 10.7336 19.0711 9.17152C17.509 7.60942 14.9762 7.60942 13.4141 9.17152L12 10.5858"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6.34315 7.75732L4.92893 9.17154C3.36683 10.7336 3.36683 13.2664 4.92893 14.8285C6.49104 16.3906 9.0238 16.3906 10.5859 14.8285L12 13.4142"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M14.1213 12.1213L9.87868 7.87868" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500',
      shadowColor: 'shadow-purple-200',
      link: '/services/ux-design',
    },
    {
      id: 3,
      title: 'Solutions sur mesure',
      description:
        'Développement adapté à vos besoins spécifiques, avec des fonctionnalités personnalisées pour votre activité.',
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-200',
      link: '/services/custom-solutions',
    },
    {
      id: 4,
      title: 'Accompagnement complet',
      description:
        'Support technique et conseils tout au long du projet, de la conception initiale à la maintenance continue.',
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: 'from-cyan-500 to-teal-500',
      shadowColor: 'shadow-cyan-200',
      link: '/services/support',
    },
  ]

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-gray-900 mb-6">
            Pourquoi choisir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lodgic</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous combinons expertise technique et vision stratégique pour transformer vos idées en solutions digitales
            performantes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-white rounded-xl p-8 border border-gray-100 shadow-lg hover:shadow-xl ${feature.shadowColor} transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-inter-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">{feature.description}</p>

              {/* Ligne décorative avec animation au survol */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6 group-hover:via-blue-300 transition-colors"></div>

              {/* Bouton "En savoir plus" avec animation */}
              <div className="mt-auto">
                <Link
                  to={feature.link}
                  className="text-sm font-inter-medium text-blue-600 flex items-center group-hover:text-indigo-600 transition-colors"
                >
                  <span className="mr-2">En savoir plus</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex justify-center" data-aos="zoom-in" data-aos-delay="600">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white border border-gray-200 rounded-lg px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-inter-bold text-gray-900">Prêt à démarrer votre projet ?</h4>
                  <p className="text-gray-600">Discutons ensemble de vos besoins et objectifs</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-inter-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  Contactez-nous
                </Link>
                <Link
                  to="/rendez-vous"
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-inter-medium rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
