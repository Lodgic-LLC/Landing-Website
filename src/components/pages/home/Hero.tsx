import Link from "next/link";

const proofs = [
  "Diplômé ingénieur en informatique",
  "Un seul interlocuteur, du devis à la livraison",
  "Réponse sous 24 heures",
];

const stack = [
  { label: "Mobile", value: "React Native · Expo" },
  { label: "Web", value: "Next.js · React · TypeScript" },
  { label: "Back-end", value: "Node.js · PostgreSQL" },
  { label: "Zone", value: "Toulouse et Occitanie" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F6F2] pt-32 md:pt-36 pb-16 md:pb-24 border-b border-[#E6E1D8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-left">Ingénieur en informatique · Toulouse</p>

            <h1 className="mt-4 font-sofia-bold heading text-4xl sm:text-5xl lg:text-[56px] text-balance">
              Développeur web &amp; mobile à Toulouse,{" "}
              <span className="text-[#C2542D]">ingénieur en informatique</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B655D] font-inter">
              Je suis Yann Rouquié. Je conçois et développe vos applications web et
              mobiles sur mesure — de l&apos;architecture au déploiement, avec un seul
              interlocuteur : moi.
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

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C2542D] px-7 py-3.5 font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
              >
                Discuter de votre projet
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="mailto:contact@lodgic-dev.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2E2B28]/20 bg-white px-7 py-3.5 font-inter font-semibold text-[#2E2B28] transition-colors hover:border-[#2E2B28]/40"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                contact@lodgic-dev.com
              </a>
            </div>
          </div>

          {/* Fiche technique : du concret, pas de décor */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E6E1D8] bg-white p-7">
              <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
                Ce avec quoi je travaille
              </p>

              <dl className="mt-5 divide-y divide-[#E6E1D8]">
                {stack.map((item) => (
                  <div key={item.label} className="py-3.5 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
                    <dt className="text-sm font-inter text-[#6B655D]">{item.label}</dt>
                    <dd className="mt-0.5 text-[15px] font-sofia-bold text-[#2E2B28] sm:mt-0 sm:text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 border-t border-[#E6E1D8] pt-5">
                <p className="text-sm leading-relaxed text-[#6B655D] font-inter">
                  Chaque projet est cadré à l&apos;écrit avant la première ligne de code :
                  périmètre, contraintes techniques et budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
