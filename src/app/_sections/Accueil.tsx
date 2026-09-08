import Image from "next/image";
import Link from "next/link";
import { galerieAccueil, preuves } from '@/content/accueil'

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F6F2] pt-32 md:pt-36 pb-16 md:pb-24 border-b border-[#E6E1D8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-left">Ingénieur en informatique · Toulouse</p>

            <h1 className="mt-4 font-sofia-bold heading text-4xl sm:text-5xl lg:text-[54px] text-balance">
              Développeur à Toulouse :{" "}
              <span className="text-[#C2542D]">sites web, applications mobiles et logiciels sur mesure</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B655D] font-inter">
              Yann Rouquié. Cinq ans à développer des logiciels pour le spatial et
              l&apos;aéronautique, aujourd&apos;hui au service des entreprises de Toulouse.
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
                href="/#realisations"
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
          <div className="lg:col-span-5">
            <div className="grid gap-3">
              {/* Visuel principal */}
              <Link
                href="/#realisations"
                className="group relative block overflow-hidden rounded-xl border border-[#E6E1D8]"
              >
                <Image
                  src={galerieAccueil.principale.src}
                  alt={galerieAccueil.principale.alt}
                  width={1960}
                  height={1069}
                  priority
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#23211F]/80 to-transparent"
                />
                <p className="absolute bottom-3 left-4 text-sm font-inter font-medium text-white">
                  {galerieAccueil.principale.legende}
                </p>
              </Link>

              {/* Trois vignettes */}
              <div className="grid grid-cols-4 gap-3">
                {galerieAccueil.vignettes.map((vignette) => (
                  <Link
                    key={vignette.src}
                    href="/#realisations"
                    className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-[#E6E1D8]"
                  >
                    <Image
                      src={vignette.src}
                      alt={vignette.alt}
                      width={1960}
                      height={1069}
                      sizes="(max-width: 1024px) 30vw, 14vw"
                      className="aspect-[4/3] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#23211F]/75 to-transparent"
                    />
                    <p className="absolute bottom-1.5 left-2 text-[11px] font-inter font-medium text-white">
                      {vignette.legende}
                    </p>
                  </Link>
                ))}

                {/* Accès à toutes les réalisations */}
                <Link
                  href="/#realisations"
                  className="group flex aspect-[4/3] flex-col items-center justify-center gap-1.5 rounded-lg bg-[#23211F] p-2 text-center transition-colors hover:bg-[#33302C]"
                >
                  <svg
                    className="h-5 w-5 text-[#C2542D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                  <span className="text-[11px] font-inter font-medium leading-tight text-white">
                    Mes réalisations
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
