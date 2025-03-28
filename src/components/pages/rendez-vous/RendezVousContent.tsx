'use client'

import BookingWidget from './BookingWidget'

export default function RendezVousContent() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white pt-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-inter-bold text-gray-900 mb-6">
              Planifiez votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                consultation
              </span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Réservez un créneau avec l'un de nos experts pour une analyse approfondie de vos besoins et l'élaboration
              d'une stratégie personnalisée.
            </p>
          </div>
        </div>
      </div>

      {/* Calendly Section */}
      <section className="pb-12 md:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="grid md:grid-cols-5">
                {/* Left Info Panel */}
                <div className="md:col-span-2 bg-gradient-to-br from-blue-700 to-blue-800 text-white p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-inter-semibold mb-6">Les bénéfices de notre consultation</h2>

                  <ul className="space-y-5 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-inter-medium">Analyse approfondie de vos objectifs et défis</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-inter-medium">Élaboration d'une stratégie sur mesure</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-inter-medium">Conseils d'experts adaptés à votre secteur</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-inter-medium">Plan d'action concret et mesurable</span>
                    </li>
                  </ul>

                  <div className="pt-6 border-t border-blue-600">
                    <p className="font-inter-semibold mb-3 text-lg">Besoin d'assistance ?</p>
                    <p className="text-sm mb-4 text-blue-100">Notre équipe est à votre disposition :</p>
                    <a
                      href="mailto:lodgicdev@gmail.com"
                      className="flex items-center text-white hover:text-blue-200 transition duration-300 group"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="font-inter-medium">lodgicdev@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Right Booking Widget */}
                <div className="md:col-span-3 h-full">
                  <div className="h-[750px] md:h-[800px] w-full">
                    <BookingWidget />
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 md:mt-24" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-inter-semibold text-center mb-10">Questions fréquentes</h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-inter-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Combien de temps dure un rendez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    Nos consultations stratégiques durent 45 minutes, un format optimisé pour analyser vos besoins,
                    répondre à vos questions et établir les bases d'une collaboration efficace.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-inter-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Le rendez-vous est-il gratuit ?
                  </h3>
                  <p className="text-gray-700">
                    Oui, cette consultation initiale est offerte sans engagement. Elle nous permet d'évaluer précisément
                    vos besoins et de déterminer comment notre expertise peut vous apporter une valeur ajoutée.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-inter-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Comment se déroule le rendez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    La consultation se déroule par visioconférence sécurisée. Vous recevrez un lien de connexion après
                    votre réservation. Nous analyserons ensemble vos objectifs et élaborerons un plan d'action
                    personnalisé.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-inter-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Puis-je modifier ma réservation ?
                  </h3>
                  <p className="text-gray-700">
                    Absolument, vous pouvez modifier ou annuler votre rendez-vous à tout moment via le lien de
                    confirmation reçu par email. Nous comprenons que les priorités peuvent évoluer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-inter-bold text-gray-900 mb-6">Prêt à concrétiser votre vision ?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Réservez votre consultation stratégique dès maintenant et bénéficiez de l'expertise de nos consultants pour
            transformer vos ambitions en résultats concrets.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-inter-semibold px-8 py-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Planifier ma consultation
          </button>
        </div>
      </section>
    </>
  )
}
