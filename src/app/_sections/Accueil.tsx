import Image from "next/image";
import Link from "next/link";
import { galerieAccueil, preuves } from '@/content/accueil'

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F6F2] pt-32 md:pt-36 pb-16 md:pb-24 border-b border-[#E6E1D8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow-left">Ingénieur en informatique · Toulouse</p>

            <h1 className="mt-4 font-sofia-bold heading text-4xl sm:text-5xl lg:text-[52px] text-balance">
              Un projet à lancer&nbsp;?
              <br />
              <span className="text-[#C2542D]">Parlons-en avant d&apos;écrire du code.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B655D] font-inter">
              Yann Rouquié, ingénieur passé par le spatial et l&apos;aéronautique. Je conçois
              aujourd&apos;hui les sites, applications et logiciels des entreprises de Toulouse.
            </p>

            <ul className="mt-7 space-y-2.5">
              {preuves.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[15px] font-inter text-[#2E2B28]">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#C2542D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C2542D] px-7 py-3.5 font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
              >
                Expliquer mon projet
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2E2B28]/20 bg-white px-7 py-3.5 font-inter font-semibold text-[#2E2B28] transition-colors hover:border-[#2E2B28]/40"
              >
                Voir ce que j&apos;ai déjà livré
              </Link>
            </div>

            <p className="mt-5 text-sm text-[#6B655D] font-inter">
              Ou directement :{" "}
              <a
                href="mailto:contact@lodgic-dev.com"
                className="font-sofia-bold text-[#2E2B28] underline underline-offset-2 decoration-[#C2542D]/40 hover:decoration-[#C2542D]"
              >
                contact@lodgic-dev.com
              </a>
              {" · "}
              <a
                href="tel:+33643517157"
                className="font-sofia-bold text-[#2E2B28] underline underline-offset-2 decoration-[#C2542D]/40 hover:decoration-[#C2542D]"
              >
                06 43 51 71 57
              </a>
            </p>
          </div>

          {/* Galerie : ce que j'ai livré, en images */}
          <div className="lg:col-span-6">
            <p className="mb-3 text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#C2542D]">
              {galerieAccueil.intitule}
            </p>
            <div className="grid gap-3">
              {/* Visuel principal */}
              <Link
                href="/realisations"
                className="group relative block overflow-hidden rounded-xl border border-[#E6E1D8] shadow-[0_18px_40px_-24px_rgba(35,33,31,0.35)]"
              >
                <Image
                  src={galerieAccueil.principale.src}
                  alt={galerieAccueil.principale.alt}
                  width={1960}
                  height={1069}
                  priority
                  sizes="(max-width: 1024px) 92vw, 48vw"
                  className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="flex items-center justify-between gap-4 border-t border-[#E6E1D8] bg-white px-4 py-3">
                  <div>
                    <p className="font-sofia-bold text-[#2E2B28]">
                      {galerieAccueil.principale.titre}
                    </p>
                    <p className="text-xs text-[#6B655D] font-inter">
                      {galerieAccueil.principale.legende}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-inter font-semibold text-[#C2542D] group-hover:text-[#A34322]">
                    Voir le projet
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Deux vignettes et l'accès aux réalisations */}
              <div className="grid grid-cols-3 gap-3">
                {galerieAccueil.vignettes.map((vignette) => (
                  <Link
                    key={vignette.src}
                    href="/realisations"
                    className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-[#E6E1D8]"
                  >
                    <Image
                      src={vignette.src}
                      alt={vignette.alt}
                      width={1960}
                      height={1069}
                      sizes="(max-width: 1024px) 30vw, 16vw"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#23211F]/80 to-transparent"
                    />
                    <p className="absolute bottom-2 left-2.5 text-xs font-inter font-medium text-white">
                      {vignette.legende}
                    </p>
                  </Link>
                ))}

                <a
                  href="https://alliance-travaux.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg bg-[#23211F] p-3 text-center transition-colors hover:bg-[#33302C]"
                >
                  <svg
                    className="h-6 w-6 text-[#C2542D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                  <span className="text-xs font-inter font-medium leading-tight text-white">
                    Voir le site
                    <br />
                    en ligne
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
