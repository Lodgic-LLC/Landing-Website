import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

type Phase = {
  number: number
  name: string
  range: string
  color: string
}

const PHASES: Phase[] = [
  { number: 1, name: 'Cadrage', range: 'J1 – J5', color: 'bg-blue-500' },
  { number: 2, name: 'Design UI/UX', range: 'J6 – J14', color: 'bg-violet-500' },
  { number: 3, name: 'Développement', range: 'J15 – J35', color: 'bg-emerald-500' },
  { number: 4, name: 'Tests & recette', range: 'J36 – J42', color: 'bg-amber-500' },
  { number: 5, name: 'Mise en production', range: 'J43 – J45', color: 'bg-lime-500' },
]

const METRICS = [
  { value: '45 j', label: 'Délai garanti' },
  { value: 'Budget fixe', label: 'Défini avant de commencer le projet' },
  { value: '6 mois', label: 'Maintenance incluse après livraison' },
]

const INCLUDED = [
  '1 référent dédié pour tout le suivi',
  'Réunion hebdo de suivi',
  '6 mois de maintenance compris',
  'Transfert du code source',
]

export default function Process() {
  return (
    <section id="offre" className="relative overflow-hidden py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#001F45]/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#001F45]">
            Offre Startup & Entrepreneurs :
          </span>
          <h2 className="mt-5 text-balance text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45]">
            Votre application en 45 jours, clé en main.
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#162869]/85 font-inter">
            De l'idée à l'app en production. Délai garanti et accompagnement complet.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-y border-[#001F45]/10 py-8 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-sofia-bold text-[#001F45]">{metric.value}</span>
              <span className="mt-1 text-sm text-[#162869]/70 font-inter">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="mt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70 font-inter">
            Le planning
          </p>
          <h3 className="mt-2 text-xl md:text-2xl font-sofia-bold text-[#001F45]">
            5 phases sur 45 jours
          </h3>

          <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-[#f6f7fc] ring-1 ring-[#001F45]/10">
            {PHASES.map((phase, index) => (
              <span
                key={phase.number}
                className={`${phase.color} h-full`}
                style={{ flex: index === 2 ? 3 : index === 1 ? 1.5 : 1 }}
                aria-hidden
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {PHASES.map((phase) => (
              <div key={phase.number} className="flex items-center gap-2">
                <span className={`inline-block h-2 w-2 flex-shrink-0 rounded-full ${phase.color}`} aria-hidden />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#001F45] font-inter">{phase.name}</span>
                  <span className="text-[11px] text-[#162869]/70 font-inter">{phase.range}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included + CTA */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-[#001F45]/10 bg-[#f6f7fc] p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70 font-inter">
              Tout est inclus
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-sofia-bold text-[#001F45]">
              Ce qui est compris dans l'offre
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[15px] text-[#001F45] font-inter">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-[#001F45]/15 bg-gradient-to-br from-white via-[#f6f7fc] to-white p-6 md:p-8 shadow-soft">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DBFF00]/30 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-col gap-3">
                <Link
                  href="/offre"
                  className="inline-flex items-center justify-center rounded-lg bg-[#001F45] px-5 py-3 text-sm font-inter font-semibold text-white transition-smooth hover:bg-[#0b2b63]"
                >
                  Découvrir l'offre complète
                  <FaArrowRight className="ml-2 h-3 w-3" aria-hidden />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-[#001F45]/20 bg-white px-5 py-3 text-sm font-inter font-semibold text-[#001F45] transition-smooth hover:border-[#001F45]/40"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
