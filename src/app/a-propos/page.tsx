import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { FaArrowRight, FaLightbulb, FaUsers, FaRocket, FaEnvelope, FaChevronRight, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'A Propos - Lodgic',
  description: 'Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale',
  alternates: {
    canonical: 'https://lodgic-dev.com/a-propos',
  },
  openGraph: {
    title: 'A Propos - Lodgic',
    description: 'Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale',
    url: 'https://lodgic-dev.com/a-propos',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - À propos de nous',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'à propos',
    'Lodgic',
    'équipe de développement',
    'agence mobile Toulouse',
    'expertise développement',
    'histoire Lodgic',
    'valeurs entreprise',
    'développeur mobile',
    'expertise technique',
    'services numériques',
    'transformation digitale',
    'développement sur mesure',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'A Propos - Lodgic',
    description: 'Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale',
    images: ['https://lodgic-dev.com/FullLogo_Transparent.png'],
  },
}

export default function APropos() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#FFFFFF] pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="200" cy="100" r="300" fill="#E67E22" fillOpacity="0.05" />
            <circle cx="1200" cy="700" r="250" fill="#E67E22" fillOpacity="0.05" />
            <path d="M-200 400 Q400 200 720 400 T1600 400" stroke="#E67E22" strokeOpacity="0.03" strokeWidth="100" />
            {/* Points lumineux */}
            <g opacity="0.8">
              {[...Array(20)].map((_, i) => (
                <circle
                  key={`hero-dot-${i}`}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="#2C3E50"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Contenu gauche */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2C3E50] leading-tight mb-6">
                Créons ensemble
                <span className="block text-[#E67E22]"> l'application qu'il vous faut</span>
              </h1>

              <p className="text-[#374151] text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Chez Lodgic, On vous accompagne pas à pas, de l'idée au lancement concret de votre application.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-[#E67E22] text-[#FFFFFF] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#E67E22]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center text-lg"
                >
                  <FaEnvelope className="w-5 h-5 mr-2.5" />
                  Contactez-nous
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#2C3E50]/10 hover:border-[#2C3E50] transition-all flex items-center group text-lg"
                >
                  Nos services
                  <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Image à droite */}
            <div className="w-full lg:w-2/5 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/svg/about.svg"
                    alt="Notre approche de développement chez Lodgic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                    priority
                  />
                </div>
                {/* Éléments décoratifs supplémentaires */}
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#E67E22]/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-[#E67E22]/30 rounded-full animate-ping-slow"></div>
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
            <path d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z" fill="#FAF3E0" />
          </svg>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-20 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Qui sommes-nous ?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
              Une équipe à taille humaine, proche de vous et de vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto mb-12">
            {/* Mathéo Katbie */}
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-8 border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group">
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C3E50]/80 to-[#2C3E50]/60 group-hover:from-[#2C3E50] group-hover:to-[#2C3E50]/70 transition-all duration-300 shadow-md"></div>
                  <div className="absolute inset-1 rounded-full bg-[#FAF3E0] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#2C3E50] group-hover:text-[#FFFFFF] transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111827] group-hover:text-[#E67E22] transition-colors">
                    Mathéo Katbie
                  </h3>
                  <p className="text-[#E67E22] font-medium">Développeur Full-Stack Web & Mobile</p>
                </div>
              </div>

              <p className="text-[#374151] mb-6 leading-relaxed">
                Mathéo donne vie à votre projet avec des solutions techniques robustes et intuitives. Son expertise
                couvre l'ensemble du développement, du back-end au front-end, pour des applications performantes et
                faciles à utiliser.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                  <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                    Développement d'applications web et mobiles
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                  <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                    Intégration d'API et services tiers
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                  <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                    Optimisation des performances et de la sécurité
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Équipe étendue */}
          <div className="bg-[#FAF3E0]/50 rounded-xl p-8 max-w-5xl mx-auto shadow-lg border border-[#FAF3E0] hover:border-[#E67E22]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E67E22]/20 to-[#E67E22]/10 group-hover:from-[#E67E22] group-hover:to-[#E67E22]/70 transition-all duration-300 shadow-md rounded-full flex items-center justify-center">
                  <FaUsers className="w-8 h-8 text-[#E67E22] group-hover:text-[#FFFFFF] transition-colors duration-300" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#E67E22] transition-colors">
                  Une équipe adaptable à vos besoins
                </h3>
                <p className="text-[#374151] leading-relaxed">
                  Pour les projets d'envergure ou nécessitant des compétences spécifiques, nous collaborons avec notre
                  réseau de développeurs spécialisés (UI/UX designers, experts en sécurité, développeurs mobiles natifs,
                  etc.). Cette flexibilité nous permet de constituer l'équipe idéale pour votre projet, quelle que soit
                  sa taille ou sa complexité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1440 500"
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
              Envie d'en savoir plus sur notre façon de travailler ?
            </h2>
            <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos services ou contactez-nous pour discuter de votre projet digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="/services"
                className="bg-[#FFFFFF] text-[#2C3E50] px-8 py-4 rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center text-lg w-full sm:w-auto justify-center"
              >
                Découvrir nos services
                <FaArrowRight className="inline-block ml-2.5 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#FFFFFF]/80 text-[#FFFFFF] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF] transition-all flex items-center text-lg w-full sm:w-auto justify-center group"
              >
                Nous contacter
                <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform hidden sm:inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
