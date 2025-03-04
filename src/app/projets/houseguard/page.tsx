import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HouseGuard - Application de Gestion Immobilière | Lodgic',
  description:
    'Découvrez comment nous avons développé HouseGuard, une application mobile innovante pour la gestion de locations immobilières, la communication entre locataires et propriétaires, et la déclaration de sinistres.',
}

export default function HouseGuardProject() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-3 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6">
              Mobile
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              HouseGuard — Gestion Immobilière Simplifiée
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-10">
              Application de gestion locative qui facilite la communication entre propriétaires et locataires et
              simplifie la déclaration de sinistres
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                React Native
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                AWS
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                Supabase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-32 relative z-20">
            <div className="flex flex-wrap justify-center items-center">
              {/* Téléphone 1 - légèrement incliné vers la gauche */}
              <div className="transform -rotate-6 translate-y-4 md:-translate-x-4 z-10 hidden md:block">
                <div className="w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                  <img
                    src="/images/house-locataire.png"
                    alt="Interface locataire HouseGuard"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              {/* Téléphone principal - centré et plus grand */}
              <div className="w-64 md:w-72 rounded-2xl overflow-hidden shadow-2xl bg-white p-3 z-20">
                <img
                  src="/images/house-biens.png"
                  alt="Liste des biens immobiliers HouseGuard"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Téléphone 3 - légèrement incliné vers la droite */}
              <div className="transform rotate-6 translate-y-4 md:translate-x-4 z-10 hidden md:block">
                <div className="w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                  <img
                    src="/images/house-proprietaire.png"
                    alt="Dashboard propriétaire HouseGuard"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -left-10 top-1/3 w-24 h-24 bg-blue-50 rounded-full opacity-70 z-0"></div>
              <div className="absolute -right-10 bottom-1/4 w-20 h-20 bg-blue-50 rounded-full opacity-70 z-0"></div>
              <div className="absolute left-1/4 -bottom-10 w-16 h-16 bg-blue-100 rounded-full opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu du projet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Aperçu du projet</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              HouseGuard est une application mobile innovante qui révolutionne la gestion locative en facilitant la
              communication entre propriétaires et locataires. Notre objectif était de créer une solution complète qui
              simplifie la gestion immobilière quotidienne et la déclaration de sinistres.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              L'application offre une expérience utilisateur intuitive avec des interfaces distinctes pour les
              propriétaires et les locataires, permettant une gestion efficace des biens, des paiements de loyer, et des
              interventions techniques, le tout dans un environnement sécurisé et convivial.
            </p>
          </div>
        </div>
      </section>

      {/* Le défi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Le défi</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Notre client souhaitait développer une application mobile permettant de simplifier la gestion locative
              pour les propriétaires et les locataires. Il voulait créer une plateforme centralisée pour gérer les biens
              immobiliers, faciliter la communication entre les parties, et optimiser le processus de déclaration et de
              suivi des sinistres.
            </p>
            <p className="text-lg text-gray-700 mb-6">Les principaux défis techniques incluaient :</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>Création d'interfaces distinctes mais cohérentes pour les propriétaires et les locataires</li>
              <li>Développement d'un système de messagerie en temps réel sécurisé entre les utilisateurs</li>
              <li>Mise en place d'un processus fluide de déclaration et de suivi des sinistres avec prise de photos</li>
              <li>Intégration d'un système de gestion des paiements de loyer avec notifications automatiques</li>
              <li>
                Conception d'une architecture évolutive capable de gérer un grand nombre de biens et d'utilisateurs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notre solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Notre solution</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Nous avons développé une application native multi-plateforme qui répond précisément à ces besoins : des
              interfaces distinctes pour propriétaires et locataires, un système de messagerie en temps réel, un
              processus simplifié de déclaration de sinistres, et un système de gestion des paiements avec notifications
              automatiques. L'interface a été conçue selon les principes du design centré utilisateur, avec des tests
              d'utilisabilité à chaque étape du développement.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Gestion des biens</h3>
                </div>
                <p className="text-gray-700">
                  Interface intuitive permettant aux propriétaires de gérer leurs biens immobiliers et aux locataires de
                  visualiser les informations relatives à leur logement.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Communication directe</h3>
                </div>
                <p className="text-gray-700">
                  Système de messagerie en temps réel permettant aux propriétaires et locataires de communiquer
                  efficacement sur tous les sujets relatifs au logement.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Gestion des sinistres</h3>
                </div>
                <p className="text-gray-700">
                  Processus simplifié de déclaration et de suivi des sinistres, avec possibilité d'ajouter des photos et
                  de suivre l'état d'avancement des interventions.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Gestion des paiements</h3>
                </div>
                <p className="text-gray-700">
                  Système de gestion des paiements de loyer avec notifications automatiques, historique des transactions
                  et tableau de bord financier pour les propriétaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-12 justify-center">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Aperçu de l'application</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-biens.png" alt="Liste des biens immobiliers" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Liste des biens immobiliers</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-proprietaire.png" alt="Dashboard propriétaire" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Dashboard propriétaire</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-parametres.png" alt="Paramètres du compte" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Paramètres du compte</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-locataire.png" alt="Interface locataire" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Interface locataire</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-notif-locataire.png" alt="Notifications locataire" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Notifications locataire</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/house-problem-locataire.png"
                  alt="Déclaration de sinistre"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Déclaration de sinistre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à développer votre application mobile ?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider
              à créer une application mobile performante et intuitive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition-colors shadow-lg"
              >
                Nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
