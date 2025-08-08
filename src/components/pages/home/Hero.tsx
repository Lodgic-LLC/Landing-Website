'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full bg-[#f6f7fc] pt-24 md:pt-40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-20 md:pb-24">
          {/* Contenu gauche */}
          <div className="w-full lg:w-1/2 pt-8 lg:pt-0 text-center lg:text-left">
            <div>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6  ">
                <span className="md:hidden font-bricolage-grotesque-bold">
                  Solutions <span className="text-blue-600 font-bricolage-grotesque-bold">Digitales</span> Innovantes
                </span>
                <span className="hidden md:inline font-bricolage-grotesque-light text-[#000f45]">
                  Développement de <span className="font-bricolage-grotesque-bold text-[#000f45]">solutions digitales</span> sur mesure pour votre entreprise
                </span>
              </h1>

              <p className="text-md sm:text-lg md:text-lg  mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
                <span className="md:hidden font-inter text-[#162869]">Applications web, mobile et solutions cloud dernière génération.</span>
                <span className="hidden md:inline font-inter text-[#162869]">
                  Nous transformons vos idées en solutions digitales performantes. De la conception à la mise en production, notre équipe vous accompagne avec les technologies les plus récentes.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
