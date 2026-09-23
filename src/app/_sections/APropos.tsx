import Image from 'next/image'
import { ficheIdentite, garanties, presentation } from '@/content/accueil'

/**
 * Portrait : déposer le fichier dans public/portrait-yann.jpg,
 * puis passer AFFICHER_PORTRAIT à true. Sans photo, rien ne signale son absence.
 */
const PORTRAIT_SRC = '/portrait-yann.jpg'
const AFFICHER_PORTRAIT = false

/** Bandeau compact : qui je suis en deux phrases, quatre faits, quatre garanties. */
export default function About({ fond = 'blanc' }: { fond?: 'blanc' | 'creme' }) {
  return (
    <section
      id="about"
      className={`${fond === 'blanc' ? 'bg-white' : 'bg-[#F8F6F2]'} border-t border-[#E6E1D8] py-14 md:py-20`}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex gap-6 md:gap-8">
          {AFFICHER_PORTRAIT && (
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-[#E6E1D8] md:h-28 md:w-28">
              <Image
                src={PORTRAIT_SRC}
                alt="Yann, ingénieur en informatique et développeur à Toulouse"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          )}

          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-left">Qui je suis</p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
            >
              Yann, ingénieur en informatique.
            </h2>
            {presentation.map((texte) => (
              <p key={texte} className="mt-4 text-[17px] leading-relaxed text-[#6B655D] font-inter">
                {texte}
              </p>
            ))}
            <a
              href="https://linkedin.com/in/yann-rouquie"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-inter font-semibold text-[#B54A26] hover:text-[#A34322]"
            >
              Mon parcours sur LinkedIn
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quatre faits sur une ligne */}
        <dl className="mt-8 grid gap-x-8 gap-y-4 border-y border-[#E6E1D8] py-5 sm:grid-cols-2 lg:grid-cols-4">
          {ficheIdentite.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
                {item.label}
              </dt>
              <dd className="mt-1 text-[15px] font-sofia-bold text-[#2E2B28]">{item.value}</dd>
            </div>
          ))}
        </dl>

        {/* Ce que vous obtenez : une garantie par thème */}
        <div className="mt-10">
          <h3 className="text-lg font-sofia-bold text-[#2E2B28]">
            Ce que vous obtenez, quel que soit le projet
          </h3>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#E6E1D8] sm:grid-cols-2 lg:grid-cols-4">
            {garanties.map((g) => (
              <li key={g.theme} className="bg-white p-5">
                <p className="mono text-[10px] uppercase tracking-[0.14em] text-[#B54A26]">{g.theme}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#2E2B28] font-inter">{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
