'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'On définit la stratégie ensemble',
    description:
      'On commence par écouter attentivement vos idées et vos ambitions pour définir une feuille de route claire et alignée sur vos objectifs.',
    features: [
      'On cerne ensemble les fonctionnalités clés de votre future application.',
      'On établit un calendrier réaliste, avec des étapes bien définies.',
      'On sélectionne les technologies les plus adaptées pour assurer performance et pérennité.',
    ],
  },
  {
    number: '02',
    title: "On imagine l'expérience utilisateur",
    description:
      'Place à la créativité ! On conçoit des maquettes intuitives et un design qui reflète votre identité, pour une expérience utilisateur mémorable.',
    features: [
      'Vous visualisez chaque écran grâce à des maquettes détaillées.',
      'On crée un univers graphique qui vous est propre.',
      'On pense chaque interaction pour une prise en main facile et agréable.',
    ],
  },
  {
    number: '03',
    title: 'On donne vie à votre application',
    description:
      'Nos développeurs entrent en jeu pour transformer le design en une application fonctionnelle, robuste et optimisée.',
    features: [
      'On optimise votre app pour les stores (ASO).',
      'On construit une base solide, prête pour les évolutions futures.',
      "Vous suivez l'avancement et validez chaque étape avec nous.",
    ],
  },
  {
    number: '04',
    title: "On s'assure de la perfection avant le grand saut",
    description:
      'Pas de lancement sans une batterie de tests rigoureux. On peaufine chaque détail pour une mise en ligne sereine.',
    features: [
      "On teste sur une multitude d'appareils pour une compatibilité maximale.",
      'On traque et corrige le moindre bug pour une qualité irréprochable.',
      'On vous accompagne pour la publication sur les stores.',
    ],
  },
  {
    number: '05',
    title: 'On reste à vos côtés, même après le lancement',
    description:
      "Notre partenariat ne s'arrête pas là. On assure le suivi, la maintenance et on est prêts pour les prochaines étapes de votre croissance.",
    features: [
      "Vous bénéficiez d'une assistance technique réactive.",
      'On maintient votre application à jour avec les dernières évolutions.',
      'Prêts à faire évoluer votre application avec de nouvelles idées ?',
    ],
  },
]

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Vague en haut pour transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#A3B18A]/20 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E67E22]/10 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-[#2C3E50] mb-4">
            Comment on transforme <span className="text-[#E67E22]">votre idée</span> en succès
          </h2>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#2C3E50]/80">
            On vous accompagne avec un processus clair et collaboratif, pour que chaque étape soit une avancée vers
            votre objectif.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Ligne verticale connectant les étapes (visible sur desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#A3B18A]/30 transform -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className={`mb-12 lg:mb-20 relative ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
              {/* Cercle de connexion (visible sur desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-12 w-8 h-8 rounded-full bg-[#A3B18A]/50 border-4 border-[#F5F5F0] shadow-md transform -translate-x-1/2 z-20"></div>

              <div
                className={`flex flex-col lg:flex-row items-start ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Numéro et titre */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E67E22] text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <h3
                      className={`text-2xl font-bold text-[#2C3E50] ml-4 ${
                        index % 2 === 0 ? 'text-left' : 'lg:text-right w-full'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={`text-base sm:text-lg text-[#2C3E50]/80 mb-6 leading-relaxed ${
                      index % 2 === 0 ? 'text-left' : 'lg:text-right'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Caractéristiques */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div
                    className={`bg-[#FAF3E0]/50 p-6 rounded-xl shadow-md border border-[#A3B18A]/20 ${
                      index % 2 === 0 ? 'lg:rounded-l-xl lg:rounded-r-3xl' : 'lg:rounded-r-xl lg:rounded-l-3xl'
                    }`}
                  >
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full bg-[#E67E22] text-white flex items-center justify-center text-xs font-bold mt-0.5 ${
                              index % 2 === 0 ? '' : 'lg:order-2'
                            }`}
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span
                            className={`ml-3 text-[#2C3E50]/90 ${
                              index % 2 === 0 ? 'text-left' : 'lg:text-right lg:order-1 lg:ml-0 lg:mr-3'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Final */}
          <div className="text-center mt-12 md:mt-16 relative z-10">
            <a
              href="/rendez-vous"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#E67E22] rounded-full shadow-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22]/50 focus:ring-offset-[#F5F5F0]"
              aria-label="Prêt à donner vie à votre vision ? Contactez-nous pour démarrer votre projet."
            >
              Prêt à donner vie à votre vision ?
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-[#2C3E50]/70">Discutons ensemble de votre projet, sans engagement.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
