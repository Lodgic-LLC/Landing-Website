'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight, FaRocket, FaUsers } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 overflow-hidden relative">
      {/* Décor de fond amélioré */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-[#DBFF00]/20] to-[#001F45]/10 blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Colonne texte */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0 text-center lg:text-left pb-[50px]">
            <h1 className="font-bricolage-grotesque-bold text-[#000f45] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Créons ensemble l'
              <span className="relative">
                <span className="relative z-10">application</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
              </span>{' '}
              qui vous ressemble.
            </h1>

            <p className="font-inter text-[#162869] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 opacity-90">
              Chez Lodgic, on vous accompagne pas à pas. De l'idée à la réalisation de votre application.
            </p>

            {/* Points clés - Hidden on mobile */}
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-[#001F45]">
                <div className="w-2 h-2 bg-[#DBFF00] rounded-full"></div>
                <span className="font-inter text-sm font-medium">Développement sur mesure</span>
              </div>
              <div className="flex items-center gap-2 text-[#001F45]">
                <div className="w-2 h-2 bg-[#DBFF00] rounded-full"></div>
                <span className="font-inter text-sm font-medium">Accompagnement personnalisé</span>
              </div>
            </div>

            {/* CTAs améliorés */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/#contact "
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#001F45] to-[#0b2b63] px-8 py-4 text-white font-inter font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
                aria-label="Prendre rendez-vous"
              >
                Contactez-nous
                <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <Link
                href="/#services"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-[#001F45] px-8 py-4 text-[#001F45] font-inter font-semibold hover:bg-[#DBFF00] hover:text-[#001F45] hover:border-[#DBFF00] transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
                aria-label="Voir nos services"
              >
                Voir nos services
              </Link>
            </div>
          </div>

          {/* Colonne images */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px]">
            {/* Mathéo - En arrière-plan */}
            <div className="absolute top-16 bottom-0 left-1/4 transform -translate-x-1/2 z-30">
              <Image
                src="/images/matheo.png"
                alt="Mathéo - Développeur"
                width={600}
                height={900}
                className="h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] w-auto object-cover object-center drop-shadow-2xl filter brightness-95"
                priority
              />
              {/* Informations Mathéo */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-white/95 backdrop-blur-md px-8 py-4 shadow-xl border border-[#001F45]/20 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#DBFF00] cursor-pointer group min-w-[200px]">
                  <h3 className="font-bricolage-grotesque-bold text-[#001F45] text-sm sm:text-base group-hover:text-[#0b2b63] transition-colors">
                    Mathéo
                  </h3>
                  <p className="hidden sm:block font-inter text-[#162869] text-xs sm:text-sm mt-1 whitespace-nowrap">
                    <span className="inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5 animate-pulse"></span>
                    Fondateur & Développeur
                  </p>
                  <p className="block sm:hidden font-inter text-[#162869] text-xs sm:text-sm mt-1 whitespace-nowrap">
                    <span className="inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5 animate-pulse"></span>
                    Développeur
                  </p>
                </div>
              </div>
            </div>

            {/* Yann - Au premier plan */}
            <div className="absolute top-12 bottom-0 right-1/4 transform translate-x-1/2 z-20">
              <Image
                src="/images/yann.png"
                alt="Yann - Développeur"
                width={600}
                height={900}
                className="h-[400px] sm:h-[440px] md:h-[480px] lg:h-[500px] w-auto object-cover object-center drop-shadow-2xl filter brightness-105"
                priority
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-white/95 backdrop-blur-md px-8 py-4 shadow-xl border border-[#001F45]/20 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-[#DBFF00] cursor-pointer group min-w-[220px]">
                  <h3 className="font-bricolage-grotesque-bold text-[#001F45] text-sm sm:text-base group-hover:text-[#0b2b63] transition-colors">
                    Yann
                  </h3>
                  <p className="hidden sm:block font-inter text-[#162869] text-xs sm:text-sm mt-1 whitespace-nowrap">
                    <span className="inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5 animate-pulse"></span>
                    Fondateur & Responsable Client
                  </p>
                  <p className="block sm:hidden font-inter text-[#162869] text-xs sm:text-sm mt-1 whitespace-nowrap">
                    <span className="inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5 animate-pulse"></span>
                    Responsable Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dégradé vers le blanc en bas du hero */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
    </section>
  )
}
