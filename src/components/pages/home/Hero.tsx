'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 overflow-hidden relative">
      {/* Décor de fond subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,255,0,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Colonne texte */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0 text-center lg:text-left pb-[50px]">
            <h1 className="font-bricolage-grotesque-bold text-[#000f45] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] mb-6 text-balance">
              Créons ensemble l&apos;
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">application</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
              </span>{' '}
              qui vous ressemble.
            </h1>

            <p className="font-inter text-[#162869]/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Chez Lodgic, nous vous accompagnons pas à pas, de l&apos;idée à la réalisation, pour créer une application qui vous ressemble.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center rounded-xl bg-[#001F45] px-7 py-3.5 text-white font-inter font-semibold shadow-soft hover:shadow-elevated hover:bg-[#0b2b63] transform hover:-translate-y-0.5 transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
                aria-label="Prendre rendez-vous"
              >
                Contactez-nous
                <FaChevronRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden />
              </Link>
              <Link
                href="/#services"
                className="group inline-flex items-center justify-center rounded-xl border border-[#001F45]/15 bg-white/70 backdrop-blur-sm px-7 py-3.5 text-[#001F45] font-inter font-semibold hover:border-[#001F45]/40 hover:bg-white transform hover:-translate-y-0.5 transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
                aria-label="Voir nos services"
              >
                Voir nos services
              </Link>
            </div>

            {/* Points clés */}
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-[#001F45]/80">
                <div className="w-1.5 h-1.5 bg-[#DBFF00] rounded-full" />
                <span className="font-inter text-sm font-medium">Développement sur mesure</span>
              </div>
              <div className="flex items-center gap-2 text-[#001F45]/80">
                <div className="w-1.5 h-1.5 bg-[#DBFF00] rounded-full" />
                <span className="font-inter text-sm font-medium">Accompagnement personnalisé</span>
              </div>
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
            </div>

            {/* Card commune Yann & Mathéo */}
            <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-5 sm:px-7 py-3.5 rounded-xl border border-[#001F45]/10 shadow-soft pointer-events-auto">
                <h3 className="font-bricolage-grotesque-bold text-[#001F45] text-sm sm:text-base text-center tracking-tight">
                  Yann &amp; Mathéo 
                </h3>
                <p className="mt-1 flex items-center justify-center font-inter text-[#162869]/80 text-xs sm:text-sm whitespace-nowrap">
                  <span className="inline-block w-1.5 h-1.5 bg-[#DBFF00] rounded-full mr-2" />
                  Conseil, design &amp; développement sur mesure
                </p>
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
