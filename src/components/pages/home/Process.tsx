"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Stratégie",
    description: "Analyse de vos objectifs et définition du plan projet.",
    features: [
      "Définir ce que l'application doit faire",
      "Établir un calendrier et les étapes du projet",
      "Choisir les meilleures technologies pour votre projet",
    ],
  },
  {
    number: "02",
    title: "Design et Maquettes",
    description:
      "Création des maquettes visuelles et de l'interface utilisateur.",
    features: [
      "Maquettes visuelles de tous les écrans",
      "Un style graphique unique pour votre projet",
      "Une navigation simple et logique pour les utilisateurs",
    ],
  },
  {
    number: "03",
    title: "Création de l'Application",
    description: "Développement de l'application fonctionnelle .",
    features: [
      "Optimisation du référencement naturel (SEO)",
      "Structure permettant des évolutions futures",
      "Vérifications régulières a vos cotés",
    ],
  },
  {
    number: "04",
    title: "Vérifications et Lancement",
    description: "Tests, corrections et mise en ligne de votre application.",
    features: [
      "Tests approfondis sur différents téléphones",
      "Correction de tous les problèmes identifiés",
      "Publication sur l'App Store et Google Play",
    ],
  },
  {
    number: "05",
    title: "Suivi et Améliorations",
    description: "Support post-lancement, maintenance et évolutions futures.",
    features: [
      "Assistance technique",
      "Mise à jour de l'application",
      "Développement de nouvelles fonctionnalités",
    ],
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-50 opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre processus de développement
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            De l'idée à l'application réalisée, étape par étape.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Ligne verticale connectant les étapes (visible sur desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`mb-12 lg:mb-24 relative ${
                index % 2 === 0 ? "" : "lg:text-right"
              }`}
            >
              {/* Cercle de connexion (visible sur desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-12 w-8 h-8 rounded-full bg-blue-100 border-4 border-white shadow-md transform -translate-x-1/2 z-20"></div>

              <div
                className={`flex flex-col lg:flex-row items-start ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } gap-8`}
              >
                {/* Numéro et titre */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Caractéristiques */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"
                  }`}
                >
                  <div
                    className={`bg-blue-50 p-6 rounded-xl shadow-md ${
                      index % 2 === 0
                        ? "lg:rounded-l-xl lg:rounded-r-3xl"
                        : "lg:rounded-r-xl lg:rounded-l-3xl"
                    }`}
                  >
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span
                            className={`ml-3 text-gray-700 ${
                              index % 2 === 0 ? "text-left" : "lg:text-right"
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
          <div className="text-center mt-12 relative z-10">
            <a
              href="/rendez-vous"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Démarrer votre projet
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
