import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedMetric, StaticMetric } from './_components/AnimatedMetric'
import { FaqAccordion } from './_components/FaqAccordion'
import { PhaseCard } from './_components/PhaseCard'
import { PHASES } from './_components/phases'
import { Timeline } from './_components/Timeline'

export const metadata: Metadata = {
  title: 'Application clé en main en 45 jours — Offre Startup · Lodgic',
  description:
    "Offre Lodgic pour startups et entrepreneurs : votre application livrée en 45 jours, avec 6 mois de maintenance inclus.",
  alternates: { canonical: 'https://lodgic-dev.com/offre' },
  openGraph: {
    title: 'Application clé en main en 45 jours — Lodgic',
    description:
      "De l'idée à l'app en production en 45 jours. Délai garanti et accompagnement complet.",
    url: 'https://lodgic-dev.com/offre',
    siteName: 'Lodgic',
    type: 'website',
    locale: 'fr_FR',
  },
}

type PhaseDetail = {
  number: number
  name: string
  range: string
  description: string
  deliverables: string[]
  color: string
}

const PHASE_DETAILS: PhaseDetail[] = [
  {
    number: 1,
    name: 'Cadrage & discovery',
    range: 'J1 – J5',
    description: 'Atelier de lancement, user stories, choix de la stack technique.',
    deliverables: ['Cahier des charges', 'User stories', 'Choix stack'],
    color: PHASES[0].color,
  },
  {
    number: 2,
    name: 'Design UI/UX',
    range: 'J6 – J14',
    description: 'Wireframes, maquettes Figma, design system, validation avant développement.',
    deliverables: ['Maquettes Figma', 'Design system', 'Prototype cliquable'],
    color: PHASES[1].color,
  },
  {
    number: 3,
    name: 'Développement',
    range: 'J15 – J35',
    description: 'Sprints de 5 jours, demo hebdomadaire, accès staging continu.',
    deliverables: ['App fonctionnelle', 'API backend', 'Demo chaque vendredi'],
    color: PHASES[2].color,
  },
  {
    number: 4,
    name: 'Tests & recette',
    range: 'J36 – J42',
    description: 'QA, corrections de bugs, validation client, tests de performance.',
    deliverables: ['Rapport QA', 'Bugs corrigés', 'PV de recette'],
    color: PHASES[3].color,
  },
  {
    number: 5,
    name: 'Mise en production',
    range: 'J43 – J45',
    description: 'Déploiement, publication sur les stores, formation, remise des accès.',
    deliverables: ['App en production', 'Code source', 'Documentation'],
    color: PHASES[4].color,
  },
]

const INCLUDED: string[] = [
  '1 chef de projet dédié',
  'Accès Figma & Jira',
  'Réunion hebdo de suivi',
  'Hébergement 1er mois offert',
  '6 mois de maintenance compris',
  'Transfert de propriété du code',
  'Remise complète des accès',
  'Formation à l’utilisation',
]

const FAQ_ITEMS = [
  {
    question: 'Qu’est-ce qui est compris dans le prix ?',
    answer:
      'Design, développement, tests, déploiement et 6 mois de maintenance post-livraison. Tout est inclus, sans surprise.',
  },
  {
    question: 'Que se passe-t-il si le délai n’est pas respecté ?',
    answer:
      'Nous nous engageons contractuellement sur les 45 jours. En cas de retard de notre fait, des garanties sont prévues dans le contrat.',
  },
  {
    question: 'Je n’ai pas encore de cahier des charges, est-ce un problème ?',
    answer:
      "Non, la phase 1 sert précisément à le construire ensemble lors d'un atelier de cadrage dédié.",
  },
  {
    question: 'Puis-je faire évoluer l’app après livraison ?',
    answer:
      'Oui, nous proposons des contrats de maintenance et d’évolution pour faire grandir votre produit dans la durée.',
  },
]

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 flex-shrink-0 text-[#001F45]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function OffrePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#f6f7fc] to-white"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-[#001F45]/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#001F45]">
            Offre Startup & Entrepreneurs :
          </span>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#001F45] md:text-5xl lg:text-6xl">
            Votre application en 45 jours, clé en main.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#162869]/85 md:text-xl">
            De l’idée à l’app en production. Délai garanti et accompagnement complet.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 border-y border-[#001F45]/10 py-8 sm:grid-cols-3">
            <AnimatedMetric value={45} suffix=" j" label="Délai garanti" />
            <StaticMetric value="Budget fixe" label="Défini avant de commencer le projet" />
            <StaticMetric value="6 mois" label="Maintenance incluse après livraison" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#001F45] px-6 py-3 text-sm font-semibold text-white transition-smooth hover:bg-[#0b2b63] focus:outline-none focus:ring-2 focus:ring-[#001F45]/40 focus:ring-offset-2"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/projets"
              className="inline-flex items-center justify-center rounded-lg border border-[#001F45]/20 bg-white px-6 py-3 text-sm font-semibold text-[#001F45] transition-smooth hover:border-[#001F45]/40"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70">Le planning</p>
              <h2 className="mt-2 text-2xl font-bold text-[#001F45] md:text-3xl">5 phases sur 45 jours</h2>
            </div>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Phases cards */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:gap-5">
            {PHASE_DETAILS.map((phase, index) => (
              <PhaseCard
                key={phase.number}
                index={index}
                number={phase.number}
                name={phase.name}
                range={phase.range}
                description={phase.description}
                deliverables={phase.deliverables}
                color={phase.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="border-y border-[#001F45]/10 bg-[#f6f7fc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70">Tout est inclus</p>
            <h2 className="mt-2 text-2xl font-bold text-[#001F45] md:text-3xl">
              Ce qui est compris dans l’offre.
            </h2>
            <p className="mt-3 text-[#162869]/85">
              Un pack complet, sans coûts cachés. Vous repartez avec l’application, le code et les
              accès.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#001F45]/10 bg-white px-4 py-3 text-[15px] text-[#001F45]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Offre */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#001F45]/15 bg-gradient-to-br from-white via-[#f6f7fc] to-white p-8 shadow-soft md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#DBFF00]/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70">
                  Offre de lancement
                </p>
                <p className="mt-3 max-w-xl text-[15px] text-[#162869]/85">
                  Créneau prioritaire pour les premiers clients · Démarrage rapide selon disponibilité.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#001F45] px-6 py-3 text-sm font-semibold text-white transition-smooth hover:bg-[#0b2b63]"
              >
                Démarrer mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#001F45]/10 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-[#001F45] md:text-3xl">
              Questions fréquentes.
            </h2>
            <p className="mt-3 text-[#162869]/85">
              Tout ce qu’il faut savoir avant de démarrer.
            </p>
          </div>

          <div className="mt-10">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </main>
  )
}
