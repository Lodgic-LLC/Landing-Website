import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { InlineWidget } from 'react-calendly'

const Appointment = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Prendre rendez-vous | Lodgic</title>
        <meta
          name="description"
          content="Réservez facilement un rendez-vous avec notre équipe pour discuter de vos objectifs et besoins."
        />
      </Helmet>

      <div className="bg-gradient-to-b from-blue-50 to-white pt-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-inter-bold text-gray-900 mb-6">Prenons rendez-vous</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Réservez un créneau qui vous convient pour discuter de vos objectifs et comment nous pouvons les atteindre
              ensemble.
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
                <div className="md:col-span-2 bg-blue-700 text-white p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-inter-semibold mb-6">Pourquoi prendre rendez-vous ?</h2>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Consultation personnalisée adaptée à vos besoins</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Analyse de vos objectifs et définition d'une stratégie</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Réponses à toutes vos questions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Premier pas vers l'atteinte de vos objectifs</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-blue-600">
                    <p className="font-inter-medium mb-2">Besoin d'aide ?</p>
                    <p className="text-sm mb-4">Contactez-nous directement :</p>
                    <a
                      href="mailto:contact@lodgic.com"
                      className="flex items-center text-white hover:text-blue-200 transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      contact@lodgic.com
                    </a>
                  </div>
                </div>

                {/* Right Calendly Widget */}
                <div className="md:col-span-3 p-4 md:p-0">
                  <div className="h-[650px] md:h-[700px]">
                    <InlineWidget
                      url="https://calendly.com/d/crq8-54j-ff7"
                      styles={{ height: '100%', width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 md:mt-24" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-inter-semibold text-center mb-10">Questions fréquentes</h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-inter-medium text-gray-900 mb-3">
                    Combien de temps dure un rendez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    Nos consultations durent généralement 30 minutes, ce qui nous donne suffisamment de temps pour
                    discuter de vos besoins et répondre à vos questions.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-inter-medium text-gray-900 mb-3">Le rendez-vous est-il gratuit ?</h3>
                  <p className="text-gray-700">
                    Oui, la consultation initiale est entièrement gratuite et sans engagement. C'est l'occasion de
                    déterminer si nous pouvons vous aider.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-inter-medium text-gray-900 mb-3">Comment se déroule le rendez-vous ?</h3>
                  <p className="text-gray-700">
                    Le rendez-vous se fait par visioconférence. Vous recevrez un lien après votre réservation. Nous
                    discuterons de vos objectifs et établirons un plan d'action.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-inter-medium text-gray-900 mb-3">
                    Puis-je annuler ou reporter mon rendez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    Bien sûr, vous pouvez modifier ou annuler votre rendez-vous à tout moment via le lien de
                    confirmation que vous recevrez par email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-inter-semibold text-gray-900 mb-6">
            Prêt à transformer vos objectifs en réalité ?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Réservez votre rendez-vous dès maintenant et faisons le premier pas ensemble vers l'atteinte de vos
            objectifs.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-inter-medium px-8 py-3 rounded-lg transition duration-300 shadow-md"
          >
            Prendre rendez-vous
          </button>
        </div>
      </section>
    </>
  )
}

export default Appointment
