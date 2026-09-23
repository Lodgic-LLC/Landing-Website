import Link from 'next/link'
import { FiGlobe, FiSmartphone, FiLayers, FiArrowRight } from 'react-icons/fi'
import { services } from '@/content/accueil'

/** Les icônes restent ici : le fichier de contenu ne manipule que du texte. */
const ICONES = { web: FiGlobe, mobile: FiSmartphone, logiciel: FiLayers } as const

/** Trois cartes, une par prestation, chacune avec son propre appel à l'action. */
export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F6F2] py-14 md:py-20 border-t border-[#E6E1D8]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-9 md:mb-11">
          <p className="eyebrow eyebrow-left">Services</p>
          <h2
            id="services-heading"
            className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
          >
            Ce que je développe
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6B655D] font-inter">
            Trois façons de résoudre un problème. On cadre ensemble, je chiffre par écrit,
            puis je construis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {services.map((service) => {
            const Icon = ICONES[service.icone]
            return (
              <article
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E6E1D8] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C2542D]/40 hover:shadow-[0_18px_40px_-24px_rgba(35,33,31,0.35)]"
              >
                {/* Bandeau : icône et délai */}
                <div className="flex items-center justify-between gap-3 border-b border-[#E6E1D8] bg-[#FBEFE9]/40 px-6 py-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#B54A26] ring-1 ring-[#E6E1D8]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="mono text-[11px] uppercase tracking-[0.12em] text-[#6B655D]">
                    {service.delai}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl md:text-2xl font-sofia-bold text-[#2E2B28]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#6B655D] font-inter">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-[#E6E1D8] pt-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#2E2B28] font-inter">
                        <svg className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#B54A26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Appel à l'action propre à la catégorie */}
                  <Link
                    href={service.href}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#2E2B28]/15 bg-white px-5 py-3 font-inter font-semibold text-[#2E2B28] transition-colors group-hover:border-[#C2542D] group-hover:bg-[#C2542D] group-hover:text-white"
                  >
                    {service.cta}
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
