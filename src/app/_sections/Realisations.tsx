import Image from 'next/image'
import Link from 'next/link'
import { PROJETS } from '@/content/projets'

/** Aperçu des réalisations : deux cartes, le détail est sur /realisations. */
export default function Realisations() {
  return (
    <section
      id="realisations"
      className="border-t border-[#E6E1D8] bg-white py-14 md:py-20"
      aria-labelledby="realisations-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <div>
            <p className="eyebrow eyebrow-left">Réalisations</p>
            <h2
              id="realisations-heading"
              className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
            >
              Deux projets, livrés et en ligne
            </h2>
          </div>

          <Link
            href="/realisations"
            className="inline-flex items-center gap-1.5 pb-2 text-sm font-inter font-semibold text-[#C2542D] hover:text-[#A34322]"
          >
            Voir le détail de chaque projet
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJETS.map((projet) => (
            <Link
              key={projet.name}
              href="/realisations"
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E6E1D8] bg-white transition-colors hover:border-[#C2542D]/50"
            >
              {/* Capture, cadrée sur le haut de page */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E6E1D8] bg-[#F8F6F2]">
                <Image
                  src={projet.screens[0].src}
                  alt={projet.screens[0].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 45vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#C2542D]">
                  {projet.sector}
                </p>
                <h3 className="mt-1.5 text-2xl font-sofia-bold text-[#2E2B28]">{projet.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6B655D] font-inter">
                  {projet.summary}
                </p>

                {/* Chiffres du projet, poussés en bas pour aligner les deux cartes */}
                <dl className="mt-auto grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-[#E6E1D8] bg-[#E6E1D8] pt-px">
                  {projet.metrics.map((metric) => (
                    <div key={metric.label} className="bg-[#F8F6F2] px-2 py-3 text-center">
                      <dt className="sr-only">{metric.label}</dt>
                      <dd>
                        <span className="block font-sofia-bold text-xl text-[#C2542D]">
                          {metric.value}
                        </span>
                        <span className="mt-0.5 block text-[11px] leading-tight text-[#6B655D] font-inter">
                          {metric.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
