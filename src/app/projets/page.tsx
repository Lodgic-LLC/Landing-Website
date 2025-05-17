import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import {
  FaArrowRight,
  FaCode,
  FaBrain,
  FaMobileAlt,
  FaCheckCircle,
  FaChevronRight,
  FaCalendarAlt,
  FaEnvelope,
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Nos Projets - Lodgic',
  description:
    "Découvrez nos réalisations récentes en matière de développement d'applications mobiles et web. Études de cas et projets concrets.",
  alternates: {
    canonical: 'https://lodgic-dev.com/projets',
  },
  keywords: [
    'projets',
    'portfolio',
    'réalisations',
    'études de cas',
    'applications mobiles',
    'développement web',
    'applications iOS',
    'applications Android',
    'Lodgic projets',
    'projets réussis',
    'applications sur mesure',
    'HouseGuard',
    'Forge AI',
    'CoinFinder',
  ],
  openGraph: {
    title: 'Nos Projets - Lodgic',
    description:
      "Découvrez nos réalisations récentes en matière de développement d'applications mobiles et web. Études de cas et projets concrets.",
    url: 'https://lodgic-dev.com/projets',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic Projects',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

const projects = [
  {
    id: 1,
    title: 'HouseGuard',
    subtitle: 'Gestion Immobilière Simplifiée',
    description: 'Application mobile de gestion locative pour propriétaires et gestionnaires immobiliers',
    image: '/images/house-proprietaire.png',
    tech: ['React Native', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
    icon: <FaMobileAlt className="text-blue-600 w-8 h-8" />,
    color: 'bg-blue-50 border-blue-200',
    link: '/projets/houseguard',
    features: [
      'Gestion de biens immobiliers',
      'Suivi des paiements de loyer',
      'Communication propriétaire-locataire',
      'Déclaration et suivi des sinistres',
    ],
  },
  {
    id: 2,
    title: 'Forge AI',
    subtitle: 'Marketplace NFT',
    description: "Plateforme de génération et achat/vente de NFT utilisant l'IA générative",
    image: '/images/forge-main.png',
    tech: ['React.js', 'Next.js', 'Solana', 'OpenAI API', 'Web3.js', 'IPFS'],
    icon: <FaBrain className="text-indigo-600 w-8 h-8" />,
    color: 'bg-indigo-50 border-indigo-200',
    link: '/projets/forge-ai',
    features: [
      "Développement d'une marketplace",
      'Génération de NFT via IA',
      'Création/gestion des comptes utilisateur',
      'Intégration blockchain (Solana)',
    ],
  },
  {
    id: 3,
    title: 'CoinFinder',
    subtitle: 'Plateforme Crypto',
    description: "Application web de suivi et d'analyse de cryptomonnaies en temps réel",
    image: '/images/coinfinder.png',
    tech: ['React.js', 'Express', 'AWS', 'Supabase', 'TradingView API', 'WebSockets'],
    icon: <FaCode className="text-emerald-600 w-8 h-8" />,
    color: 'bg-emerald-50 border-emerald-200',
    link: '/projets/coinfinder',
    features: [
      'Interface de suivis de cryptomonnaies',
      'Système de paiement automatisé',
      'Dashboard de suivis du portefeuille',
      'Alertes et notifications personnalisées',
    ],
  },
]

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="200" cy="100" r="300" fill="#FFFFFF" fillOpacity="0.07" />
            <circle cx="1200" cy="700" r="250" fill="#FFFFFF" fillOpacity="0.07" />
            <path d="M-200 400 Q400 200 720 400 T1600 400" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="100" />
            {/* Points lumineux */}
            <g opacity="0.6">
              {[...Array(25)].map((_, i) => (
                <circle
                  key={`hero-dot-${i}`}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="#FFFFFF"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Contenu gauche */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] leading-tight mb-6">
                Nos <span className="text-[#E67E22]">Réalisations</span>
              </h1>

              <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Découvrez nos projets récents et apprenez comment nous aidons nos clients à développer des applications
                performantes et innovantes.
              </p>

              {/* Vous pouvez ajouter des boutons ici si nécessaire, comme sur la page services */}
              {/* Exemple:
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-[#FFFFFF] text-[#2C3E50] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center text-lg"
                >
                  Discuter d'un projet
                </Link>
              </div>
              */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto lg:mx-0 rounded-full mb-8"></div>
            </div>

            {/* Image à droite - Apparaît sur les grands écrans */}
            <div className="w-full lg:w-2/5 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/svg/projets.svg"
                    alt="Illustration des projets Lodgic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 to-transparent"></div>
                </div>
                {/* Éléments décoratifs supplémentaires */}
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#E67E22]/30 rounded-full blur-md animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-[#FFFFFF]/20 rounded-full animate-ping-slow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z"
              fill="#FAF3E0" // Sera la couleur de fond de la première section de projets
            />
          </svg>
        </div>
      </section>

      {/* Section des projets */}
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-[#FAF3E0]' : 'bg-[#FFFFFF]'} overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Contenu textuel */}
              <div className="lg:w-1/2">
                <div className="mb-6 lg:mb-8 flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#E67E22]/70 to-[#E67E22]/40 rounded-xl flex items-center justify-center shadow-lg">
                    {React.cloneElement(project.icon, { className: 'h-10 w-10 text-[#FFFFFF]' })}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">{project.title}</h2>
                    {project.subtitle && <p className="text-lg text-[#E67E22] font-semibold">{project.subtitle}</p>}
                  </div>
                </div>

                <p className="text-[#374151] text-lg mb-8 leading-relaxed">{project.description}</p>

                {project.features && project.features.length > 0 && (
                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-[#111827] text-md flex items-center">
                      <FaCheckCircle className="h-5 w-5 text-[#E67E22] mr-2" />
                      Fonctionnalités clés :
                    </h3>
                    <ul className="space-y-2 pl-7">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaChevronRight className="h-4 w-4 text-[#E67E22] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-[#374151]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.tech && project.tech.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-semibold text-[#111827] mb-3 flex items-center text-md">
                      <svg className="w-5 h-5 mr-2 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Technologies Utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="bg-[#E67E22]/20 text-[#E67E22] text-sm font-medium px-3 py-1.5 rounded-md shadow-sm hover:bg-[#E67E22]/30 transition-colors"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={project.link}
                  className="inline-flex items-center px-7 py-3.5 bg-[#E67E22] text-[#FFFFFF] rounded-lg shadow-md hover:bg-[#E67E22]/90 transition-colors font-semibold text-lg group"
                >
                  Voir le projet
                  <FaChevronRight className="ml-2.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image du projet */}
              <div className="w-full lg:w-1/2 group">
                {project.id === 1 ? (
                  // Special three-phone mockup for HouseGuard
                  <div className="flex justify-center items-center w-full h-auto p-4 transform transition-transform duration-300 group-hover:scale-105">
                    <div className="flex space-x-[-25px] sm:space-x-[-40px] md:space-x-[-50px]">
                      {/* Phone 1 (left) */}
                      <div className="relative transform -rotate-6 z-10 shadow-xl rounded-2xl sm:rounded-3xl border-2 border-white/50 group-hover:border-[#E67E22]/30 transition-colors">
                        <div className="w-32 sm:w-40 md:w-44 h-56 sm:h-64 md:h-72 bg-[#FAF3E0] rounded-2xl sm:rounded-3xl overflow-hidden">
                          <Image
                            src="/images/house-proprietaire.png" // Assurez-vous que ce chemin est correct
                            alt="HouseGuard - Vue propriétaire"
                            width={176} // Ajustez la largeur en fonction de w-44
                            height={288} // Ajustez la hauteur en fonction de h-72
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* Phone 2 (center) */}
                      <div className="relative transform z-20 scale-110 shadow-2xl rounded-2xl sm:rounded-3xl border-4 border-white/80 group-hover:border-[#E67E22]/50 transition-colors">
                        <div className="w-32 sm:w-40 md:w-44 h-56 sm:h-64 md:h-72 bg-[#FAF3E0] rounded-2xl sm:rounded-3xl overflow-hidden">
                          <Image
                            src="/images/house-parametres.png" // Assurez-vous que ce chemin est correct
                            alt="HouseGuard - Dashboard"
                            width={176}
                            height={288}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* Phone 3 (right) */}
                      <div className="relative transform rotate-6 z-10 shadow-xl rounded-2xl sm:rounded-3xl border-2 border-white/50 group-hover:border-[#E67E22]/30 transition-colors">
                        <div className="w-32 sm:w-40 md:w-44 h-56 sm:h-64 md:h-72 bg-[#FAF3E0] rounded-2xl sm:rounded-3xl overflow-hidden">
                          <Image
                            src="/images/house-locataire.png" // Assurez-vous que ce chemin est correct
                            alt="HouseGuard - Vue locataire"
                            width={176}
                            height={288}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard image display for other projects
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border-2 border-transparent group-hover:border-[#E67E22]/30 transition-all duration-300 transform group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center" // ou object-contain si l'image est un logo/graphique
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2C3E50]/30 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>
                    {/* Éléments décoratifs optionnels comme sur la page services */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#E67E22]/30 to-[#E67E22]/10 rounded-xl opacity-50 blur-sm group-hover:opacity-70 transition-all duration-300 transform group-hover:rotate-12"></div>
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#FAF3E0]/70 rounded-full opacity-60 group-hover:opacity-90 transition-all duration-300 transform group-hover:scale-110"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1440 500" // Ajusté pour correspondre à la section services
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="250" r="300" fill="#FFFFFF" />
            <circle cx="100" cy="100" r="150" fill="#FFFFFF" />
            <circle cx="1300" cy="400" r="200" fill="#FFFFFF" />
          </svg>
          {/* Points lumineux */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#FFFFFF]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-[#FFFFFF]/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#FFFFFF]/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Discutons ensemble de votre projet et voyons comment nous pouvons vous aider à le concrétiser.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="/rendez-vous" // Lien vers la page de prise de rendez-vous
                className="bg-[#FFFFFF] text-[#2C3E50] px-8 py-4 rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center text-lg w-full sm:w-auto justify-center"
              >
                {/* Importer FaCalendarAlt si ce n'est pas déjà fait */}
                <FaCalendarAlt className="w-5 h-5 mr-2.5" />
                Prendre un Rendez-vous
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#FFFFFF]/80 text-[#FFFFFF] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF] transition-all flex items-center text-lg w-full sm:w-auto justify-center group"
              >
                {/* Importer FaEnvelope si ce n'est pas déjà fait */}
                <FaEnvelope className="w-5 h-5 mr-2.5" />
                Nous Contacter
                <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform hidden sm:inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
