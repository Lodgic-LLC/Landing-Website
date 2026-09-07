import Link from "next/link";

const proofs = [
  "5 ans de développement en production dans le spatial et l'aéronautique",
  "Un seul interlocuteur, du devis à la mise en ligne : moi",
  "Réponse sous 24 heures",
];

/** Scores relevés sur Google PageSpeed Insights, vérifiables publiquement. */
const scores = [
  { name: "Perf.", value: "88" },
  { name: "Access.", value: "93" },
  { name: "Pratiques", value: "96" },
  { name: "SEO", value: "100" },
];

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
              Je m&apos;appelle Yann Rouquié. Après cinq ans à développer des logiciels pour le
              spatial et l&apos;aéronautique, je mets la même exigence au service des entreprises
              de Toulouse. Vous m&apos;expliquez votre besoin, je vous dis ce qui est faisable,
              en combien de temps et pour quel budget.
            </p>

            <ul className="mt-7 space-y-2.5">
              {proofs.map((item) => (
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

          {/* Une preuve chiffrée plutôt qu'une liste de technologies */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-[#E6E1D8] bg-white">
              <div className="border-b border-[#E6E1D8] px-7 pt-6 pb-5">
                <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#C2542D]">
                  Dernière réalisation
                </p>
                <p className="mt-2 font-sofia-bold text-xl text-[#2E2B28]">
                  Alliance-TRAVAUX
                </p>
                <p className="mt-0.5 text-sm text-[#6B655D] font-inter">
                  Collectif d&apos;artisans, Toulouse — refonte complète
                </p>
              </div>

              <div className="px-7 py-6">
                <p className="text-sm text-[#6B655D] font-inter">Temps d&apos;affichage</p>
                <p className="mt-1.5 flex items-baseline gap-3 font-sofia-bold">
                  <span className="text-xl text-[#6B655D] line-through decoration-[#C2542D]/50">
                    5,8 s
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-[#C2542D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className="text-4xl text-[#C2542D]">0,7 s</span>
                </p>

                <dl className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-[#E6E1D8] bg-[#E6E1D8]">
                  {scores.map((score) => (
                    <div key={score.name} className="bg-[#F8F6F2] px-2 py-3 text-center">
                      <dt className="text-[10px] leading-tight text-[#6B655D] font-inter">
                        {score.name}
                      </dt>
                      <dd className="mono mt-0.5 text-lg font-semibold text-[#2E2B28]">
                        {score.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-3 text-[11px] leading-relaxed text-[#6B655D] font-inter">
                  Google PageSpeed Insights, 7 septembre 2026
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E6E1D8] bg-[#F8F6F2] px-7 py-4">
                <a
                  href="https://alliance-travaux.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-inter font-semibold text-[#2E2B28] hover:text-[#C2542D]"
                >
                  Voir le site
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
                <Link
                  href="/#realisations"
                  className="inline-flex items-center gap-1.5 text-sm font-inter font-semibold text-[#C2542D] hover:text-[#A34322]"
                >
                  Mes autres réalisations
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
