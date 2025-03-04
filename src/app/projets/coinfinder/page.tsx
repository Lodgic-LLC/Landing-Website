import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CoinFinder - Plateforme Crypto | Lodgic',
  description:
    "Découvrez comment nous avons développé CoinFinder, une plateforme de suivi et d'analyse de cryptomonnaies en temps réel avec des fonctionnalités avancées de trading et de gestion de portefeuille.",
}

export default function CoinFinderProject() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-3 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6">
              Finance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              CoinFinder — Plateforme Crypto
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-10">
              Application web de suivi et d'analyse de cryptomonnaies en temps réel avec des fonctionnalités avancées de
              trading et de gestion de portefeuille
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                React.js
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                Express
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                AWS
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                Supabase
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                TradingView API
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                WebSockets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-32 relative z-20 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/coinfinder.png" alt="Dashboard principal CoinFinder" className="w-full h-auto" />
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
              CoinFinder est une plateforme complète permettant aux utilisateurs de suivre, d'analyser et d'investir
              dans les cryptomonnaies. Notre objectif était de créer une solution tout-en-un qui simplifie l'expérience
              des investisseurs, des débutants aux plus expérimentés.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              La plateforme offre des données en temps réel, des outils d'analyse avancés, et des fonctionnalités de
              trading sécurisées, le tout dans une interface intuitive et personnalisable.
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
              CoinFinder avait besoin d'une plateforme complète permettant aux utilisateurs de suivre, d'analyser et
              d'investir dans les cryptomonnaies. Le défi était de créer une interface intuitive qui présente des
              données complexes de manière accessible, tout en intégrant des fonctionnalités de trading sécurisées et un
              système d'authentification robuste.
            </p>
            <p className="text-lg text-gray-700 mb-6">Les principaux défis techniques incluaient :</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>Traitement et affichage en temps réel de données de marché pour des milliers de cryptomonnaies</li>
              <li>Création d'outils d'analyse technique avancés accessibles aux utilisateurs de tous niveaux</li>
              <li>Développement d'un système d'authentification multi-facteurs pour sécuriser les comptes</li>
              <li>Intégration avec plusieurs exchanges pour permettre les transactions directes</li>
              <li>Conception d'une interface responsive et personnalisable adaptée à tous les appareils</li>
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
              Nous avons développé une application web responsive avec un tableau de bord personnalisable, des
              graphiques interactifs en temps réel et un système d'alertes personnalisées. L'authentification
              multi-facteurs garantit la sécurité des comptes utilisateurs, tandis que l'intégration avec plusieurs
              exchanges permet d'exécuter des transactions directement depuis la plateforme.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Tableau de bord personnalisable</h3>
                </div>
                <p className="text-gray-700">
                  Interface modulaire permettant aux utilisateurs de configurer leur espace de travail selon leurs
                  besoins, avec des widgets pour différents types de données et d'analyses.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Graphiques avancés</h3>
                </div>
                <p className="text-gray-700">
                  Intégration de graphiques interactifs en temps réel avec des outils d'analyse technique complets,
                  permettant aux utilisateurs d'étudier les tendances du marché.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Système de paiement sécurisé</h3>
                </div>
                <p className="text-gray-700">
                  Mise en place d'un système de paiement automatisé et sécurisé, permettant aux utilisateurs d'effectuer
                  des transactions en toute confiance.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Alertes personnalisées</h3>
                </div>
                <p className="text-gray-700">
                  Système d'alertes permettant aux utilisateurs de définir des conditions spécifiques (prix, volume,
                  etc.) et d'être notifiés en temps réel lorsque ces conditions sont remplies.
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
              <h2 className="text-2xl font-bold text-gray-900">Aperçu de la plateforme</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/coinfinder-login.png"
                  alt="Page d'authentification CoinFinder"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">
                    Interface d'authentification sécurisée avec validation en deux étapes
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/coinfinder-signup.png"
                  alt="Page d'inscription CoinFinder"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">
                    Processus d'inscription simplifié avec vérification d'identité
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/coinfinder-paiement.png"
                  alt="Interface de paiement CoinFinder"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">
                    Système de paiement sécurisé avec multiples options de cryptomonnaies
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/images/coinfinder.png" alt="Dashboard principal CoinFinder" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">
                    Tableau de bord personnalisable avec suivi en temps réel des cours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre vision et découvrir comment nous pouvons vous aider
              à la concrétiser.
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
