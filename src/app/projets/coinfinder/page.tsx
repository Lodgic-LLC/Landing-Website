import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CoinFinder - Plateforme Crypto | Lodgic',
  description:
    "Découvrez comment nous avons développé CoinFinder, une plateforme de suivi et d'analyse de cryptomonnaies en temps réel avec des fonctionnalités  de gestion de portefeuille.",
}

export default function CoinFinderProject() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden relative">
        {/* Formes SVG en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Cercles et formes abstraites */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Grand cercle central */}
            <circle cx="720" cy="400" r="400" fill="url(#gradient1)" fillOpacity="0.2" />

            {/* Cercle supérieur droit */}
            <circle cx="1100" cy="150" r="200" fill="url(#gradient2)" fillOpacity="0.15" />

            {/* Cercle inférieur gauche */}
            <circle cx="300" cy="650" r="250" fill="url(#gradient3)" fillOpacity="0.15" />

            {/* Forme abstraite 1 */}
            <path
              d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
              fill="url(#gradient4)"
              fillOpacity="0.1"
            />

            {/* Forme abstraite 2 */}
            <path
              d="M1600,0 C1400,100 1200,50 1000,150 C800,250 600,100 400,200 C200,300 0,200 -200,100 L-200,-100 L1600,-100 Z"
              fill="url(#gradient5)"
              fillOpacity="0.1"
            />

            {/* Points décoratifs */}
            <g opacity="0.3">
              <circle cx="150" cy="150" r="2" fill="white" />
              <circle cx="350" cy="250" r="2" fill="white" />
              <circle cx="550" cy="150" r="2" fill="white" />
              <circle cx="750" cy="300" r="2" fill="white" />
              <circle cx="950" cy="200" r="2" fill="white" />
              <circle cx="1150" cy="350" r="2" fill="white" />
              <circle cx="1350" cy="250" r="2" fill="white" />
              
              <circle cx="250" cy="350" r="2" fill="white" />
              <circle cx="450" cy="450" r="2" fill="white" />
              <circle cx="650" cy="350" r="2" fill="white" />
              <circle cx="850" cy="500" r="2" fill="white" />
              <circle cx="1050" cy="400" r="2" fill="white" />
              <circle cx="1250" cy="550" r="2" fill="white" />
            </g>

            {/* Définition des dégradés */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Texte du projet - Côté gauche */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                CoinFinder — Plateforme Crypto
              </h1>
              
              <p className="text-white text-opacity-90 text-lg mb-6">
                Application web de suivi et d'analyse de cryptomonnaies en temps réel avec des fonctionnalités avancées de visualisation et d'alertes personnalisées
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">
                  React.js
                </span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">
                  Express
                </span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">
                  AWS
                </span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">
                  Supabase
                </span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">
                  TradingView API
                </span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">
                  WebSockets
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all flex items-center group"
                >
                  Discuter de mon projet
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Image du projet - Côté droit */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Effet de brillance sur l'image */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/images/coinfinder.png" 
                    alt="Dashboard principal CoinFinder" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme SVG en bas pour transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
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
              CoinFinder est une plateforme complète permettant aux utilisateurs de suivre et d'analyser
              les cryptomonnaies. Notre objectif était de créer une solution tout-en-un qui simplifie l'expérience
              des utilisateurs intéressés par le marché des cryptomonnaies, des débutants aux plus expérimentés.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              La plateforme offre des données en temps réel et des outils d'analyse avancés, le tout dans une interface intuitive et personnalisable.
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
              CoinFinder avait besoin d'une plateforme complète permettant aux utilisateurs de suivre et d'analyser
              les cryptomonnaies. Le défi était de créer une interface intuitive qui présente des
              données complexes de manière accessible, tout en intégrant un système d'authentification robuste et des outils de visualisation performants.
            </p>
            <p className="text-lg text-gray-700 mb-6">Les principaux défis techniques incluaient :</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>Traitement et affichage en temps réel de données de marché pour des milliers de cryptomonnaies</li>
              <li>Création d'outils d'analyse technique avancés accessibles aux utilisateurs de tous niveaux</li>
              <li>Développement d'un système d'authentification sécurisé pour protéger les données utilisateurs</li>
              <li>Mise en place d'un système d'alertes personnalisables basé sur différents indicateurs</li>
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
              sécurisée garantit la protection des données utilisateurs, tandis que les outils d'analyse avancés permettent de suivre efficacement l'évolution du marché.
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
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Comparaison de cryptomonnaies</h3>
                </div>
                <p className="text-gray-700">
                  Outils permettant de comparer facilement plusieurs cryptomonnaies selon différents critères (prix, volume, capitalisation, etc.) pour une analyse plus approfondie.
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
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Formes SVG en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Cercles et formes abstraites */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Grand cercle central */}
            <circle cx="720" cy="200" r="250" fill="url(#cta-gradient1)" fillOpacity="0.2" />

            {/* Cercle supérieur droit */}
            <circle cx="1100" cy="100" r="120" fill="url(#cta-gradient2)" fillOpacity="0.15" />

            {/* Cercle inférieur gauche */}
            <circle cx="300" cy="300" r="150" fill="url(#cta-gradient3)" fillOpacity="0.15" />

            {/* Forme abstraite */}
            <path
              d="M-100,150 C100,100 300,300 500,250 C700,200 900,350 1100,300 C1300,250 1500,150 1700,200 L1700,400 L-100,400 Z"
              fill="url(#cta-gradient4)"
              fillOpacity="0.1"
            />

            {/* Points décoratifs */}
            <g opacity="0.3">
              <circle cx="150" cy="75" r="2" fill="white" />
              <circle cx="350" cy="125" r="2" fill="white" />
              <circle cx="550" cy="75" r="2" fill="white" />
              <circle cx="750" cy="150" r="2" fill="white" />
              <circle cx="950" cy="100" r="2" fill="white" />
              <circle cx="1150" cy="175" r="2" fill="white" />
              <circle cx="1350" cy="125" r="2" fill="white" />
              
              <circle cx="250" cy="175" r="2" fill="white" />
              <circle cx="450" cy="225" r="2" fill="white" />
              <circle cx="650" cy="175" r="2" fill="white" />
              <circle cx="850" cy="250" r="2" fill="white" />
              <circle cx="1050" cy="200" r="2" fill="white" />
              <circle cx="1250" cy="275" r="2" fill="white" />
            </g>

            {/* Définition des dégradés */}
            <defs>
              <linearGradient id="cta-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="cta-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient id="cta-gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="cta-gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Forme SVG en haut pour transition */}
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
          <svg
            className="absolute top-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="#F9FAFB" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à créer votre <span className="text-blue-200">plateforme d'analyse</span> ?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à développer une solution sur mesure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Nous contacter
              </Link>
              
              <Link
                href="/services"
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center group"
              >
                Découvrir nos services
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
