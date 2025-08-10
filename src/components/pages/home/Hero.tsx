'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="w-full bg-[#f6f7fc] pt-24 md:pt-36 overflow-hidden relative">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#dbe7ff] to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#eaf2ff] to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Colonne texte */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0 text-center lg:text-left">
            <h1 className="font-bricolage-grotesque-bold text-[#000f45] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Développement de <span className="font-bricolage-grotesque-extrabold">solutions digitales</span> sur
              mesure
            </h1>
            <p className="font-inter text-[#162869] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Nous transformons vos idées en applications web et mobiles performantes, avec une expertise cloud moderne
              et des pratiques efficaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center rounded-md bg-[#001F45] px-6 py-3 text-white font-inter font-medium shadow-sm hover:bg-[#0b2b63] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
                aria-label="Prendre rendez-vous"
              >
                Démarrer mon projet
                <FaChevronRight className="ml-2" aria-hidden />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-md border border-[#001F45] px-6 py-3 text-[#001F45] font-inter font-medium hover:bg-[#DBFF00] hover:text-[#001F45] transition-all duration-300 focus:outline-none"
                aria-label="Voir nos services"
              >
                Voir nos services
              </Link>
            </div>
          </div>

          {/* Colonne images */}
          <div className="w-full lg:w-1/2 flex justify-center items-end relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[600px] overflow-hidden">
            {/* Mathéo - En arrière-plan */}
            <div className="absolute top-8 bottom-0 -left-64  transform translate-x-1/2 z-30">
              <Image
                src="/images/hero/matheo.png"
                alt="Mathéo - Développeur"
                width={800}
                height={1200}
                className="h-[600px]  sm:h-[700px] md:h-[800px] lg:h-[700px] w-auto object-cover object-center drop-shadow-lg"
                priority
              />
              {/* Informations Mathéo */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-white backdrop-blur-sm px-4 py-3 shadow-lg border border-[#001F45] transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[#DBFF00] cursor-pointer">
                  <h3 className="font-bricolage-grotesque-bold text-[#001F45] text-sm sm:text-base">Mathéo</h3>
                  <p className="hidden sm:block font-inter text-[#162869] text-xs sm:text-sm mt-1">
                    <span className=" inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5"></span>
                    Fondateur & Développeur
                  </p>
                  <p className="block sm:hidden font-inter text-[#162869] text-xs sm:text-sm mt-1">
                    <span className=" inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5"></span>
                    Développeur
                  </p>
                </div>
              </div>
            </div>

            {/* Yann - Au premier plan */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/6 z-20">
              <Image
                src="/images/hero/yann.png"
                alt="Yann - Développeur"
                width={800}
                height={1200}
                className="h-[650px] sm:h-[750px] md:h-[850px] lg:h-[750px] w-auto object-cover object-center drop-shadow-xl"
                priority
              />
              <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                <div className="bg-white backdrop-blur-sm px-6 py-3 shadow-lg border border-[#001F45] transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[#DBFF00] cursor-pointer whitespace-nowrap">
                  <h3 className="font-bricolage-grotesque-bold text-[#001F45] text-sm sm:text-base">Yann</h3>
                  <p className="hidden sm:block font-inter text-[#162869] text-xs sm:text-sm mt-1">
                    <span className="inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5"></span>
                    Fondateur & Responsable Client
                  </p>
                  <p className="block sm:hidden font-inter text-[#162869] text-xs sm:text-sm mt-1">
                    <span className=" inline-block w-2 h-2 bg-[#DBFF00] rounded-full mr-1.5"></span>
                    Responsable Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
