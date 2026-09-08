import Image from 'next/image'
import Link from 'next/link'
import { PROJETS } from '@/content/projets'

/** Aperçu des réalisations : deux cartes, le détail est sur /realisations. */
export default function Realisations() {
  return (
    <section
      id="realisations"
      className="border-t border-[#E6E1D8] bg-white py-20 md:py-28"
      aria-labelledby="realisations-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-left">Réalisations</p>
          <h2
            id="realisations-heading"
            className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
          >
            Ce que j&apos;ai construit
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJETS.map((projet) => (
            <Link
              key={projet.name}
              href="/realisations"
              className="group overflow-hidden rounded-xl border border-[#E6E1D8] bg-white transition-colors hover:border-[#C2542D]/40"
            >
              <div className="relative aspect-[2940/1604] w-full overflow-hidden bg-[#F8F6F2]">
                <Image
                  src={projet.screens[0].src}
                  alt={projet.screens[0].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 45vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-6">
                <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#C2542D]">
                  {projet.sector}
                </p>
                <h3 className="mt-1.5 text-2xl font-sofia-bold text-[#2E2B28]">{projet.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6B655D] font-inter">
                  {projet.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {projet.stack.map((techno) => (
                    <span
                      key={techno}
                      className="rounded border border-[#E6E1D8] bg-[#F8F6F2] px-2 py-0.5 mono text-[11px] text-[#6B655D]"
                    >
                      {techno}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-7 py-3.5 font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
          >
            Voir toutes mes réalisations
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
