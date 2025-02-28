import React, { useEffect } from 'react'
import AOS from 'aos'
import PageTitle from '../components/PageTitle'

const AboutPage = () => {
  useEffect(() => {
    AOS.refresh()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageTitle
        title="À propos de Lodgic"
        description="Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale"
      />
      <div className="pt-16">
        <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
            {/* Texte - Côté gauche */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="font-inter-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                Experts en transformation
                <br />
                <span className="text-blue-600">digitale</span> depuis 2020
              </h1>

              <p className="font-inter-regular text-gray-700 mb-8 max-w-lg text-lg leading-relaxed">
                Lodgic accompagne les entreprises dans leur évolution numérique avec une approche stratégique et
                personnalisée. Notre expertise en développement web et mobile nous permet de créer des solutions sur
                mesure qui génèrent des résultats concrets.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="font-inter-medium bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Contactez-nous
                </a>
                <a
                  href="/services"
                  className="font-inter-medium border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Nos services
                </a>
              </div>
            </div>

            {/* Illustration - Côté droit */}
            <div
              className="w-full md:w-1/2 flex justify-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-lg">
                {/* Fond dégradé */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform rotate-2 shadow-xl"></div>

                {/* Contenu de l'illustration */}
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-xl overflow-hidden">
                  {/* SVG d'appareils connectés */}
                  <div className="relative z-10 flex justify-center items-center">
                    <svg
                      className="w-full h-auto max-w-md"
                      viewBox="0 0 500 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Ordinateur portable */}
                      <rect x="150" y="100" width="200" height="120" rx="8" fill="#1F2937" />
                      <rect x="160" y="110" width="180" height="100" rx="4" fill="#6366F1" />
                      <rect x="170" y="220" width="160" height="10" rx="2" fill="#1F2937" />

                      {/* Tablette */}
                      <rect x="80" y="150" width="100" height="140" rx="8" fill="#1F2937" />
                      <rect x="85" y="155" width="90" height="130" rx="4" fill="#8B5CF6" />

                      {/* Smartphone */}
                      <rect x="370" y="160" width="60" height="110" rx="8" fill="#1F2937" />
                      <rect x="375" y="165" width="50" height="100" rx="4" fill="#EC4899" />
                      <circle cx="400" cy="275" r="5" fill="#E5E7EB" />

                      {/* Éléments de connexion */}
                      <line
                        x1="350"
                        y1="160"
                        x2="370"
                        y2="180"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      {/* Cubes flottants */}
                      <rect x="120" y="80" width="20" height="20" rx="2" fill="#60A5FA" opacity="0.8" />
                      <rect x="360" y="120" width="20" height="20" rx="2" fill="#34D399" opacity="0.8" />
                      <rect x="300" y="240" width="20" height="20" rx="2" fill="#F472B6" opacity="0.8" />
                      <rect x="100" y="220" width="20" height="20" rx="2" fill="#FBBF24" opacity="0.8" />

                      {/* Icônes de technologie */}
                      <circle cx="250" y="70" r="15" fill="#F472B6" opacity="0.8" />
                      <circle cx="400" y="100" r="10" fill="#34D399" opacity="0.8" />
                      <circle cx="100" y="120" r="12" fill="#60A5FA" opacity="0.8" />
                    </svg>
                  </div>

                  {/* Éléments flottants avec animation améliorée */}
                  <div className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-md transform rotate-6 animate-float">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="absolute bottom-10 left-10 bg-white p-2 rounded-lg shadow-md transform -rotate-3 animate-float-delayed">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="absolute top-1/4 left-10 bg-white p-2 rounded-lg shadow-md transform rotate-12 animate-float-delayed">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="absolute bottom-1/4 right-10 bg-white p-2 rounded-lg shadow-md transform -rotate-12 animate-float">
                    <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>

                  {/* Notification flottante améliorée */}
                  <div className="absolute top-1/3 right-5 z-10 bg-white p-3 rounded-xl shadow-lg transform rotate-3 animate-float-slow">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-inter-medium text-gray-800">Nouvelle mise à jour</p>
                        <p className="text-xs text-gray-500">il y a 5 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Valeurs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">Nos valeurs fondamentales</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg">
                Ces principes guident chacune de nos actions et façonnent notre approche pour vous offrir un service
                d'excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Valeur 1 - Transparence */}
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-inter-bold text-gray-900 mb-3 text-center">Transparence</h3>
                <p className="text-gray-600 text-center">
                  Nous privilégions une communication claire et honnête à chaque étape de votre projet, garantissant une
                  collaboration basée sur la confiance.
                </p>
              </div>

              {/* Valeur 2 - Excellence */}
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-inter-bold text-gray-900 mb-3 text-center">Excellence</h3>
                <p className="text-gray-600 text-center">
                  Nous nous engageons à maintenir les plus hauts standards de qualité dans chaque ligne de code et
                  chaque aspect de nos solutions.
                </p>
              </div>

              {/* Valeur 3 - Engagement */}
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-inter-bold text-gray-900 mb-3 text-center">Engagement</h3>
                <p className="text-gray-600 text-center">
                  Nous sommes pleinement investis dans la réussite de votre projet, avec une approche personnalisée qui
                  va au-delà de vos attentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Approche */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Contenu texte */}
                <div className="lg:w-1/2" data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
                    Notre approche <span className="text-blue-600">innovante</span>
                  </h2>
                  <div className="w-24 h-1 bg-blue-600 rounded-full mb-6"></div>

                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Chez Lodgic, nous abordons chaque projet avec une méthodologie structurée mais flexible, conçue pour
                    maximiser l'impact de votre transformation digitale.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Découverte approfondie</h3>
                        <p className="text-gray-600">
                          Nous prenons le temps de comprendre vos objectifs, votre marché et vos défis spécifiques pour
                          créer une solution parfaitement adaptée.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Conception centrée utilisateur</h3>
                        <p className="text-gray-600">
                          Nous plaçons l'expérience utilisateur au cœur de notre processus de conception pour créer des
                          interfaces intuitives et engageantes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Développement agile</h3>
                        <p className="text-gray-600">
                          Notre processus itératif vous permet de voir des résultats rapidement et d'ajuster la
                          direction en fonction de vos retours.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Amélioration continue</h3>
                        <p className="text-gray-600">
                          Nous ne nous contentons pas de livrer un produit final. Nous analysons les performances et
                          optimisons constamment pour maximiser les résultats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                  <div className="relative">
                    {/* Fond décoratif */}
                    <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>

                    {/* Illustration principale */}
                    <div className="relative bg-white rounded-xl shadow-xl p-8 z-10">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <h3 className="text-xl font-inter-bold">Stratégie digitale</h3>
                            </div>
                            <p>Nous élaborons une feuille de route claire pour votre transformation numérique</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                            </svg>
                            <h3 className="text-lg font-inter-bold text-gray-900">Design UX/UI</h3>
                          </div>
                          <p className="text-gray-600">Interfaces intuitives et esthétiques</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <h3 className="text-lg font-inter-bold text-gray-900">Développement</h3>
                          </div>
                          <p className="text-gray-600">Code robuste et évolutif</p>
                        </div>

                        <div className="col-span-2">
                          <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                              <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                              </svg>
                              <h3 className="text-lg font-inter-bold text-gray-900">Analyse & Optimisation</h3>
                            </div>
                            <p className="text-gray-600">
                              Nous mesurons les performances et optimisons continuellement pour maximiser votre ROI
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Éléments décoratifs */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-20 bg-gradient-to-r  from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-inter-bold mb-6" data-aos="fade-up">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Discutons de votre projet et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#2563EB] font-inter-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contactez notre équipe
            </a>
          </div>
        </section>

        {/* Section Notre Équipe */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">Notre Équipe</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg">
                Rencontrez les talents passionnés qui donnent vie à vos projets digitaux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Yann Roquie */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="p-6 flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="8" r="5" fill="currentColor" />
                        <path
                          d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-inter-bold text-gray-900">Yann Roquie</h3>
                    <p className="text-blue-600 font-inter-medium text-sm">Développeur & Contact Client</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">
                    Avec plus de 8 ans d'expérience dans le développement web, Yann combine expertise technique et
                    vision stratégique pour transformer vos idées en solutions digitales performantes.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn de Yann Roquie"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:yann@lodgic.fr"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Email de Yann Roquie"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mathéo Katbie */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="p-6 flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-indigo-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="8" r="5" fill="currentColor" />
                        <path
                          d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-inter-bold text-gray-900">Mathéo Katbie</h3>
                    <p className="text-indigo-600 font-inter-medium text-sm">Développeur Full-Stack</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">
                    Passionné par les technologies web modernes, Mathéo excelle dans la création d'applications
                    performantes et évolutives. Son expertise couvre à la fois le front-end et le back-end.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                      aria-label="GitHub de Mathéo Katbie"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                      aria-label="LinkedIn de Mathéo Katbie"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:matheo@lodgic.fr"
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                      aria-label="Email de Mathéo Katbie"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
