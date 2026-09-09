'use client'

import Link from 'next/link'
import { FiGlobe, FiSmartphone, FiLayers, FiArrowRight } from 'react-icons/fi'
import { services } from '@/content/accueil'

/** Les icônes restent ici : le fichier de contenu ne manipule que du texte. */
const ICONES = { web: FiGlobe, mobile: FiSmartphone, logiciel: FiLayers } as const

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F6F2] py-14 md:py-20 border-t border-[#E6E1D8]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-9 md:mb-10">
          <p className="eyebrow eyebrow-left">Services</p>
          <h2
            id="services-heading"
            className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
          >
            Ce que je développe, et à partir de combien
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6B655D] font-inter">
            On cadre ensemble, je chiffre, puis je construis. Prix planchers pour un projet
            simple.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((service) => {
            const Icon = ICONES[service.icone]
            return (
              <article
                key={service.title}
                className="group relative flex flex-col rounded-xl border border-[#E6E1D8] bg-white p-8 transition-colors duration-200 hover:border-[#C2542D]/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FBEFE9] text-[#C2542D]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="rounded-md border border-[#E6E1D8] bg-[#F8F6F2] px-2.5 py-1 text-xs font-inter font-semibold text-[#2E2B28]">
                    {service.price}
                  </p>
                </div>

                <h3 className="mt-6 text-[1.4rem] md:text-2xl font-sofia-bold text-[#2E2B28] mb-3">
                  {service.title}
                </h3>

                <p className="mb-5 text-[#6B655D] font-inter text-[15px] leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-auto space-y-2 border-t border-[#E6E1D8] pt-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#2E2B28] font-inter">
                      <svg className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#C2542D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-inter font-semibold text-[#C2542D] hover:text-[#A34322]"
                >
                  En savoir plus
                  <FiArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[#6B655D] font-inter">
            Votre besoin ne rentre dans aucune case ? C&apos;est à ça que sert le premier
            échange.
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#C2542D] px-7 py-3.5 text-base font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
          >
            Parler de votre projet
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
