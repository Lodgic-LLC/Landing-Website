import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forge AI - Marketplace NFT | Lodgic',
  description:
    "Découvrez comment nous avons développé Forge AI, une plateforme de génération et d'achat/vente de NFT combinant l'IA générative et la technologie blockchain.",
}

export default function ForgeAIProject() {
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
                Forge AI - <span className="text-blue-200">Marketplace NFT</span>
              </h1>
              
              <p className="text-white text-opacity-90 text-lg mb-6">
                Plateforme de génération et achat/vente de NFT utilisant l'IA générative
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {/* Technologies utilisées */}
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">React.js</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">Solana</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">OpenAI API</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">Web3.js</span>
                <span className="bg-white/10 text-blue-100 px-3 py-1 rounded-full text-sm">IPFS</span>
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                  {/* Affichage spécial pour Forge AI avec effet de NFT */}
                  <div className="relative">
                    <img 
                      src="/images/forge-main.png" 
                      alt="Forge AI - Marketplace NFT" 
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Overlay avec effet holographique */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-overlay"></div>
                    
                    {/* Badge NFT */}

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

      {/* Aperçu du projet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Aperçu du projet</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Forge AI est une plateforme qui permet aux utilisateurs de créer des NFT uniques à partir
              de simples descriptions textuelles, puis de les vendre sur une marketplace intégrée. Notre mission était
              de développer une solution qui démocratise la création artistique numérique en combinant l'IA générative
              et la technologie blockchain.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              La plateforme offre une expérience utilisateur intuitive, permettant même aux novices en matière de NFT et
              de crypto-monnaies de participer facilement à cet écosystème en pleine expansion.
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
              Forge AI avait besoin d'une plateforme permettant aux utilisateurs de créer des NFT uniques à partir de
              simples descriptions textuelles, puis de les vendre sur une marketplace intégrée. Le défi était de
              combiner l'IA générative, la technologie blockchain et une expérience utilisateur intuitive.
            </p>
            <p className="text-lg text-gray-700 mb-6">Nous devions relever plusieurs défis techniques majeurs :</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>
                Intégrer des modèles d'IA générative avancés capables de transformer du texte en images de haute qualité
              </li>
              <li>Développer une infrastructure blockchain sécurisée pour le minting des NFT</li>
              <li>Créer une marketplace fluide et intuitive pour l'achat et la vente</li>
              <li>Assurer la sécurité des transactions et la protection des droits de propriété intellectuelle</li>
              <li>
                Concevoir une interface utilisateur accessible aux novices en matière de NFT et de crypto-monnaies
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
              Nous avons développé une plateforme complète intégrant des modèles d'IA avancés pour la génération
              d'images, une infrastructure blockchain sécurisée pour le minting des NFT, et une marketplace fluide pour
              l'achat et la vente. L'interface utilisateur a été conçue pour être accessible même aux utilisateurs
              novices en matière de NFT et de crypto-monnaies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Génération d'images par IA</h3>
                </div>
                <p className="text-gray-700">
                  Intégration de modèles d'IA avancés permettant de transformer des descriptions textuelles en images
                  uniques et de haute qualité.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Infrastructure blockchain</h3>
                </div>
                <p className="text-gray-700">
                  Développement d'une infrastructure blockchain sécurisée sur Solana pour le minting des NFT,
                  garantissant l'authenticité et la propriété des œuvres.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Marketplace intégrée</h3>
                </div>
                <p className="text-gray-700">
                  Création d'une marketplace intuitive permettant aux utilisateurs d'acheter, de vendre et d'enchérir
                  sur des NFT, avec un système de paiement sécurisé.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Gestion des utilisateurs</h3>
                </div>
                <p className="text-gray-700">
                  Mise en place d'un système complet de gestion des comptes utilisateurs, avec authentification
                  sécurisée et portefeuille intégré.
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
                  src="/images/forge-generation.png"
                  alt="Interface de génération de NFT"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Outil de génération de NFT par IA avec prompt textuel</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/images/forge-marketplace.png" alt="Marketplace Forge AI" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">
                    Marketplace permettant l'achat et la vente des NFT générés
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg md:col-span-2">
                <img src="/images/forge-mint.png" alt="Processus de minting" className="w-full h-auto" />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium">Interface de minting des NFT sur la blockchain</p>
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
