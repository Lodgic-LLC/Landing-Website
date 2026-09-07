import Link from "next/link";

const proofs = [
  "Ingénieur diplômé en informatique",
  "Un seul interlocuteur, du devis à la mise en ligne : moi",
  "Réponse sous 24 heures",
];

const practical = [
  { label: "Sites web", value: "Next.js · React" },
  { label: "Applications mobiles", value: "React Native · iOS et Android" },
  { label: "Logiciels métier", value: "Node.js · PostgreSQL" },
  { label: "Où", value: "Toulouse, et à distance partout en France" },
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
              Je m&apos;appelle Yann Rouquié. Vous m&apos;expliquez votre besoin, je vous dis ce qui
              est faisable, en combien de temps et pour quel budget. Puis je le construis,
              du premier écran à la mise en ligne.
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

          {/* En pratique : de l'information, pas du décor */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E6E1D8] bg-white p-7">
              <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
                En pratique
              </p>

              <dl className="mt-5 divide-y divide-[#E6E1D8]">
                {practical.map((item) => (
                  <div key={item.label} className="py-3.5 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
                    <dt className="shrink-0 text-sm font-inter text-[#6B655D]">{item.label}</dt>
                    <dd className="mt-0.5 text-[15px] font-sofia-bold text-[#2E2B28] sm:mt-0 sm:text-right sm:min-w-0">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 border-t border-[#E6E1D8] pt-5">
                <p className="text-sm leading-relaxed text-[#6B655D] font-inter">
                  Vous n&apos;avez pas besoin de connaître ces noms. Ce sont des technologies
                  répandues et durables : votre projet ne dépend pas de moi pour exister, un
                  autre développeur saura le reprendre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
