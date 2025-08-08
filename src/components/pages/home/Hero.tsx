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
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pb-16 md:pb-20">
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
                className="inline-flex items-center justify-center rounded-md border border-[#001F45] px-6 py-3 text-[#001F45] font-inter font-medium hover:bg-[#001F45]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
                aria-label="Voir nos services"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
