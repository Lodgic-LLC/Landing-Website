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
                HouseGuard - Gestion Immobilière Simplifiée
              </h1>
              
              <p className="text-white text-opacity-90 text-lg mb-6">
                Application mobile de gestion locative pour propriétaires et gestionnaires immobiliers
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {/* Technologies utilisées */}
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">React Native</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">Firebase</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">MongoDB</span>
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
                
                <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl p-6">
                  {/* Affichage spécial pour HouseGuard avec 3 téléphones */}
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="flex space-x-[-15px]">
                      {/* Premier téléphone (légèrement incliné vers la gauche) */}
                      <div className="relative transform -rotate-6 z-10">
                        <div className="w-24 h-44  rounded-xl overflow-hidden ">
                          <img 
                            src="/images/house-proprietaire.png" 
                            alt="HouseGuard - Vue propriétaire" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Téléphone central (plus grand et au premier plan) */}
                      <div className="relative transform z-20 scale-110">
                        <div className="w-24 h-44 rounded-xl overflow-hidden shadow-lg">
                          <img 
                            src="/images/house-locataire.png" 
                            alt="HouseGuard - Vue locataire" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Troisième téléphone (légèrement incliné vers la droite) */}
                      <div className="relative transform rotate-6 z-10">
                        <div className="w-24 h-44  rounded-xl overflow-hidden ">
                          <img 
                            src="/images/house-biens.png" 
                            alt="HouseGuard - Dashboard" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
              HouseGuard est une application mobile qui permet de gérer la gestion locative en facilitant la
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
                <div className="p-4">
                  <p className="text-gray-700 font-medium">Liste des biens immobiliers</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-proprietaire.png" alt="Dashboard propriétaire" className="w-full h-auto" />
                <div className="p-4">
                  <p className="text-gray-700 font-medium">Dashboard propriétaire</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-parametres.png" alt="Paramètres du compte" className="w-full h-auto" />
                <div className="p-4">
                  <p className="text-gray-700 font-medium">Paramètres du compte</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-locataire.png" alt="Interface locataire" className="w-full h-auto" />
                <div className="p-4 ">
                  <p className="text-gray-700 font-medium">Interface locataire</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img src="/images/house-notif-locataire.png" alt="Notifications locataire" className="w-full h-auto" />
                <div className="p-4">
                  <p className="text-gray-700 font-medium">Notifications locataire</p>
                </div>
              </div>

              <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/house-problem-locataire.png"
                  alt="Déclaration de sinistre"
                  className="w-full h-auto"
                />
                <div className="p-4 ">
                  <p className="text-gray-700 font-medium">Déclaration de sinistre</p>
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
