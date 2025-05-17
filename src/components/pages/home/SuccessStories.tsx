'use client'

import React from 'react'
import Link from 'next/link'

interface CaseItem {
  id: number
  title: string
  description: string
  image: string // Main image for standard display
  images?: string[] // Optional: for multi-image display like HouseGuard
  link: string
  items: Array<{
    id: string
    icon: React.ReactNode
    text: string
  }>
}

export default function SuccessStories() {
  const successCases: CaseItem[] = [
    {
      id: 1,
      title: 'Forge AI - Marketplace NFT',
      description: 'Plateforme de génération et achat/vente de NFT IA.',
      image: '/images/forge-main.png',
      link: '/projets/forge-ai',
      items: [
        {
          id: 'forge-1',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          ),
          text: "Développement d'une marketplace NFT innovante.",
        },
        {
          id: 'forge-2',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          ),
          text: "Intégration d'IA pour la génération unique de NFTs.",
        },
        {
          id: 'forge-3',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          ),
          text: 'Système de comptes utilisateurs sécurisé et intuitif.',
        },
      ],
    },
    {
      id: 2,
      title: 'CoinFinder - Veille Crypto',
      description: "Application web pour le suivi et l'analyse de cryptomonnaies.",
      image: '/images/coinfinder.png',
      link: '/projets/coinfinder',
      items: [
        {
          id: 'coin-1',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          ),
          text: 'Interface claire pour le suivi des cryptomonnaies.',
        },
        {
          id: 'coin-2',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          ),
          text: 'Système de paiement automatisé et sécurisé.',
        },
        {
          id: 'coin-3',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Dashboard personnalisé pour le suivi de portefeuille.',
        },
      ],
    },
    {
      id: 3,
      title: 'HouseGuard - Gestion Locative',
      description: 'App mobile de gestion locative pour propriétaires et agences.',
      image: '/images/house-proprietaire.png', // Main image, can be the central one
      images: [
        // For the 3-phone display
        '/images/house-proprietaire.png', // Left
        '/images/house-locataire.png', // Center
        '/images/house-biens.png', // Right
      ],
      link: '/projets/houseguard',
      items: [
        {
          id: 'house-1',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          ),
          text: 'Gestion simplifiée des biens immobiliers.',
        },
        {
          id: 'house-2',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Suivi rigoureux des paiements et des loyers.',
        },
        {
          id: 'house-3',
          icon: (
            <svg className="w-5 h-5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: 'Communication fluide entre propriétaires et locataires.',
        },
      ],
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-[#FAF3E0] overflow-hidden">
      {/* Vague en haut pour transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="#F5F5F0" />
        </svg>
      </div>

      {/* Formes SVG en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full" // Adjusted opacity here if needed, or on individual shapes
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grand cercle central */}
          <circle cx="720" cy="400" r="300" fill="#E67E22" fillOpacity="0.03" />
          {/* Cercle supérieur droit */}
          <circle cx="1100" cy="150" r="150" fill="#A3B18A" fillOpacity="0.04" />
          {/* Cercle inférieur gauche */}
          <circle cx="300" cy="650" r="200" fill="#E67E22" fillOpacity="0.02" />
          {/* Forme abstraite 1 */}
          <path
            d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
            fill="#A3B18A"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-[#2C3E50] mb-4">
            Nos <span className="text-[#E67E22]">réalisations</span> dont on est fiers
          </h2>
          <p className="text-lg md:text-xl text-[#2C3E50]/80 max-w-3xl mx-auto mb-6">
            On est ravis de vous montrer quelques projets qu'on a eu le plaisir de co-créer et de voir s'épanouir.
          </p>
          <div className="w-20 h-1.5 bg-[#E67E22] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {successCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full group"
            >
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 opacity-50 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>

                {caseItem.id === 3 && caseItem.images?.length === 3 ? (
                  <div className="flex justify-center items-center w-full h-full p-2 bg-[#F5F5F0]/50">
                    {' '}
                    {/* Light background for the phones image */}
                    <div className="flex space-x-[-15px] transform scale-75 sm:scale-80 md:scale-90">
                      <div className="relative transform -rotate-6 z-10 shadow-md rounded-lg">
                        <div className="w-20 sm:w-24 h-40 sm:h-44 bg-gray-700 rounded-lg overflow-hidden ring-2 ring-gray-300">
                          <img
                            src={caseItem.images[0]}
                            alt={`${caseItem.title} - Vue 1`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="relative transform z-20 scale-110 shadow-lg rounded-lg">
                        <div className="w-20 sm:w-24 h-40 sm:h-44 bg-gray-800 rounded-lg overflow-hidden ring-2 ring-gray-200">
                          <img
                            src={caseItem.images[1]}
                            alt={`${caseItem.title} - Vue 2 (centrale)`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="relative transform rotate-6 z-10 shadow-md rounded-lg">
                        <div className="w-20 sm:w-24 h-40 sm:h-44 bg-gray-700 rounded-lg overflow-hidden ring-2 ring-gray-300">
                          <img
                            src={caseItem.images[2]}
                            alt={`${caseItem.title} - Vue 3`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#2C3E50] mb-2 group-hover:text-[#E67E22] transition-colors duration-300">
                  {caseItem.title}
                </h3>
                <p className="text-[#2C3E50]/80 text-sm sm:text-base mb-4">{caseItem.description}</p>
                <ul className="space-y-2 mb-4">
                  {caseItem.items.map((item) => (
                    <li key={item.id} className="flex items-start">
                      <span className="flex-shrink-0 mt-1">{item.icon}</span>
                      <span className="ml-2 text-sm text-[#2C3E50]/90">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link
                  href={caseItem.link}
                  className="inline-flex items-center text-[#A3B18A] hover:text-[#E67E22] font-medium transition-colors duration-300"
                  aria-label={`Découvrir le projet ${caseItem.title}`}
                >
                  Découvrir ce projet
                  <svg
                    className="w-4 h-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6" // Arrow pointing right
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="h-1 w-full bg-[#E67E22] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center px-8 py-3 bg-[#E67E22] text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22]/50 focus:ring-offset-[#FAF3E0]"
            aria-label="Discutons de votre projet et prenons rendez-vous"
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Un projet ? Parlons-en !
          </Link>
          <p className="mt-4 text-sm text-[#2C3E50]/70">Chaque grand projet commence par une simple conversation.</p>
        </div>
      </div>

      {/* Vague en bas pour transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* This path should transition to the background of the NEXT section (ProjectCTA which is dark) */}
          <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z" fill="#2C3E50" />
        </svg>
      </div>
    </section>
  )
}
