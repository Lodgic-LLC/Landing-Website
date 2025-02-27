import { useEffect } from 'react'
import AOS from 'aos'
import { Link } from 'react-router-dom'

const Hero = () => {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 md:py-32 lg:py-36 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Texte et CTA - Côté gauche */}
        <div className="w-full md:w-1/2 mb-16 md:mb-0 z-10" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-inter-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
            Développement d'<span className="gradient-text from-blue-500 to-indigo-600">applications web</span> et{' '}
            <span className="gradient-text from-blue-500 to-indigo-600">mobile</span> sur mesure
          </h1>

          <p className="font-inter-regular text-gray-600 mb-8 max-w-lg text-lg md:text-xl leading-relaxed">
            Expertise technique, design innovant et accompagnement personnalisé pour concrétiser vos projets digitaux.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/rendez-vous"
              className="font-inter-medium bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1 duration-300 flex items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Prendre rendez-vous
            </Link>
            <Link
              to="/services"
              className="font-inter-medium border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>

        {/* Illustration - Côté droit */}
        <div
          className="w-full md:w-1/2 flex justify-center relative"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Cercles décoratifs */}
          <div className="absolute w-64 h-64 rounded-full bg-blue-200 opacity-20 -top-10 -right-10 animate-pulse-slow"></div>
          <div className="absolute w-48 h-48 rounded-full bg-indigo-300 opacity-20 bottom-10 -left-10 animate-pulse-slow animation-delay-2000"></div>

          <div className="relative w-full max-w-lg z-10">
            {/* Fond avec effet de profondeur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-1 translate-x-1 translate-y-1 opacity-40"></div>

            {/* Contenu de l'illustration */}
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl overflow-hidden border border-gray-100">
              {/* En-tête de l'interface */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-600 flex-grow text-center">
                  www.lodgic.fr/dashboard
                </div>
              </div>

              {/* Interface de l'application */}
              <div className="space-y-4">
                {/* Barre de navigation */}
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <div className="w-24 h-4 bg-blue-100 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      L
                    </div>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-gray-50 p-4 rounded-lg">
                    <div className="w-32 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="w-24 h-3 bg-gray-200 rounded mb-1"></div>
                        <div className="w-16 h-3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="w-full h-3 bg-blue-200 rounded mb-2"></div>
                    <div className="w-3/4 h-3 bg-blue-200 rounded mb-4"></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="w-full h-3 bg-indigo-200 rounded mb-2"></div>
                    <div className="w-3/4 h-3 bg-indigo-200 rounded mb-4"></div>
                    <div className="w-12 h-12 bg-indigo-500 rounded-lg mx-auto flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Graphique */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-32 h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="flex items-end h-24 space-x-2">
                    {[40, 70, 30, 80, 60, 50, 75].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-600 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notification flottante */}
              <div className="absolute bottom-6 right-6 bg-white p-3 rounded-xl shadow-lg transform rotate-3 animate-float-slow z-20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-inter-medium text-gray-800">Projet déployé</p>
                    <p className="text-xs text-gray-500">il y a 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white w-full"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}
      ></div>
    </section>
  )
}

export default Hero
