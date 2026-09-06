import Link from "next/link";
import ToulouseMap from "./ToulouseMap";

export default function Hero() {
  return (
    <section className="w-full h-[70vh] lg:min-h-screen lg:h-auto bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-32 md:pt-36 pb-20 overflow-hidden relative flex flex-col justify-center">
      {/* Décor de fond subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,255,0,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-6 xl:col-span-5 pt-10 pb-16 lg:pb-24">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#001F45]/10 bg-white/70 px-3.5 py-1.5 text-xs font-inter font-medium text-[#001F45]/70 backdrop-blur mb-6">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#DBFF00] shadow-[0_0_8px_rgba(219,255,0,0.9)]" />
              Studio de développement basé à Toulouse
            </p>

            <h1 className="font-sofia-bold heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-6 text-balance">
              Agence de développement{' '}
              <span className="text-[#0EA5E9]">à Toulouse</span>
            </h1>

            <p className="lead text-lg sm:text-xl max-w-2xl mb-8">
              Lodgic conçoit et développe des applications web et mobiles sur
              mesure pour startups et entreprises : de l&apos;idée au déploiement,
              avec un interlocuteur unique du premier cadrage à la mise en ligne.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-3"
              >
                Discuter de votre projet
              </Link>
              <Link
                href="/#realisations"
                className="inline-flex items-center text-[#001F45] font-sofia-bold border border-[#001F45]/10 rounded-md px-5 py-3 hover:border-[#001F45]/30 hover:bg-[#001F45]/5 transition-smooth"
              >
                Voir nos réalisations
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#001F45]/10 pt-6 text-sm font-inter text-[#001F45]/70">
              {[
                'React Native · Next.js',
                'Développement sur mesure',
                'Réponse sous 24 h',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#0EA5E9]"
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
          </div>

          {/* Right column - Toulouse SVG Map (lg+ only, statically rendered) */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 justify-center items-center relative h-full min-h-[500px] w-full">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute top-10 right-10 w-72 h-72 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-[100px] opacity-20" />
              <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#DBFF00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20" />

              <div className="relative w-full h-full flex items-center justify-center p-4">
                <ToulouseMap />

                <div className="absolute top-[82%] left-[72%] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#DBFF00] shadow-[0_0_8px_rgba(219,255,0,0.8)]" />
                  <span className="font-sofia-bold text-xs text-[#001F45] whitespace-nowrap">
                    Lodgic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
