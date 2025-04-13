'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Écoute et Planification',
    description:
      "Nous commençons par comprendre votre projet et vos objectifs. Comme un architecte avant de construire une maison, nous dessinons les plans de votre application pour qu'elle réponde parfaitement à vos besoins.",
    features: [
      'Liste des fonctionnalités nécessaires',
      "Création d'un plan d'action clair",
      'Choix des solutions techniques adaptées',
    ],
  },
  {
    number: '02',
    title: 'Design et Apparence',
    description:
      "Nous dessinons l'apparence de votre application, écran par écran, pour qu'elle soit belle, simple à utiliser et à l'image de votre entreprise. C'est l'étape où votre projet prend vie visuellement.",
    features: [
      'Dessins détaillés de chaque écran',
      "Création d'une identité visuelle sur mesure",
      'Simplification des parcours de navigation',
    ],
  },
  {
    number: '03',
    title: "Création de l'Application",
    description:
      "C'est le moment où nous construisons réellement votre application. Nos experts transforment les maquettes en une application fonctionnelle, rapide et fiable, comme un artisan façonnant un produit de qualité.",
    features: [
      'Programmation soignée et bien organisée',
      'Structure permettant des évolutions futures',
      'Vérifications régulières de la qualité',
    ],
  },
  {
    number: '04',
    title: 'Vérifications et Lancement',
    description:
      "Avant de vous livrer l'application, nous la testons minutieusement pour nous assurer qu'elle fonctionne parfaitement sur tous les appareils. Puis nous la publions et vous accompagnons pour son lancement réussi.",
    features: [
      'Tests approfondis sur différents téléphones',
      'Correction de tous les problèmes identifiés',
      "Publication sur l'App Store et Google Play",
    ],
  },
  {
    number: '05',
    title: 'Suivi et Améliorations',
    description:
      "Une application réussie évolue constamment. Nous restons à vos côtés après le lancement pour assurer son bon fonctionnement, l'améliorer selon les retours de vos utilisateurs et ajouter de nouvelles fonctionnalités.",
    features: [
      'Assistance technique rapide en cas de besoin',
      'Mises à jour régulières de sécurité',
      "Analyse de l'utilisation par vos clients",
    ],
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-50 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment nous créons votre application</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Notre méthode simple et transparente pour transformer votre idée en une application mobile réussie.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Ligne verticale connectant les étapes (visible sur desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className={`mb-12 lg:mb-24 relative ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
              {/* Cercle de connexion (visible sur desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-12 w-8 h-8 rounded-full bg-blue-100 border-4 border-white shadow-md transform -translate-x-1/2 z-20"></div>

              <div
                className={`flex flex-col lg:flex-row items-start ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Numéro et titre */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                </div>

                {/* Caractéristiques */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                  <div
                    className={`bg-blue-50 p-6 rounded-xl shadow-md ${
                      index % 2 === 0 ? 'lg:rounded-l-xl lg:rounded-r-3xl' : 'lg:rounded-r-xl lg:rounded-l-3xl'
                    }`}
                  >
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`ml-3 text-gray-700 ${index % 2 === 0 ? 'text-left' : 'lg:text-right'}`}>
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
          <div className="text-center mt-12 relative z-10">
            <a
              href="/rendez-vous"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Démarrer votre projet
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
