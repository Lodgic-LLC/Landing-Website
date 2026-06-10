import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiSearch,
  FiClipboard,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiRefreshCw,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiBarChart2,
} from 'react-icons/fi'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import FAQStructuredData from '@/components/seo/FAQStructuredData'
import { FaqAccordion } from '@/components/FaqAccordion'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Intégration IA pour entreprises",
  description:
    "Lodgic accompagne les entreprises dans le développement et le déploiement de solutions d'IA sur mesure : automatisations, agents IA, chatbots et exploitation des données.",
  alternates: {
    canonical: `${SITE_URL}/integration-ia`,
  },
  openGraph: {
    title: "Intégration IA sur mesure pour entreprises - Lodgic",
    description:
      "Automatisez vos processus, gagnez du temps et améliorez votre productivité grâce à des solutions d'intelligence artificielle adaptées à votre activité.",
    url: `${SITE_URL}/integration-ia`,
    siteName: 'Lodgic',
    type: 'website',
    locale: 'fr_FR',
  },
}

const steps = [
  {
    id: '01',
    icon: FiSearch,
    title: 'Audit & découverte',
    description:
      "Nous échangeons avec vous pour comprendre vos objectifs, vos outils actuels, vos processus et les opportunités d'automatisation. À l'issue de cette étape, nous identifions les cas d'usage les plus rentables.",
  },
  {
    id: '02',
    icon: FiClipboard,
    title: 'Cadrage du projet',
    description:
      "Nous définissons les fonctionnalités, les attentes et le planning du projet. Vous disposez d'une vision claire du périmètre et des résultats attendus.",
  },
  {
    id: '03',
    icon: FiCode,
    title: 'Développement',
    description:
      "Nous concevons chaque solution sur mesure. Durant cette phase, nous faisons des points réguliers pour tenir à jour l'avancée du développement.",
  },
  {
    id: '04',
    icon: FiCheckCircle,
    title: 'Tests et validation',
    description:
      "Avant la mise en production, nous testons les performances, les comportements normaux et anormaux. L'objectif est de garantir une solution robuste et utilisable immédiatement.",
  },
  {
    id: '05',
    icon: FiUploadCloud,
    title: 'Déploiement',
    description:
      "Nous mettons la solution en production dans votre environnement. Ensuite, nous vous accompagnons dans la configuration et la formation de vos équipes utilisatrices.",
  },
  {
    id: '06',
    icon: FiRefreshCw,
    title: 'Suivi et amélioration continue',
    description:
      "Une solution IA performante évolue avec votre entreprise. Nous assurons la maintenance avec l'ajout de nouvelles fonctionnalités et l'optimisation des performances.",
  },
]

const capabilities = [
  {
    icon: FiCpu,
    title: 'Agents IA',
    intro: 'Des assistants capables de réaliser des tâches de manière autonome, par exemple :',
    items: [
      'Qualification automatique de prospects',
      'Réponse aux demandes clients',
      'Analyse de documents et recherche d’informations',
      'Support interne aux équipes',
    ],
  },
  {
    icon: FiZap,
    title: 'Automatisation intelligente',
    intro: 'Connectez vos outils et automatisez vos processus métier, voici quelques cas d’usage :',
    items: [
      'Le traitement automatique d’emails',
      'La génération de comptes-rendus',
      'Automatisation des tâches administratives',
    ],
  },
  {
    icon: FiMessageSquare,
    title: 'Chatbots IA',
    intro:
      'Des assistants conversationnels connectés à vos données pour, par exemple, avoir un support client 24h/24 ou une FAQ intelligente.',
    items: [],
  },
  {
    icon: FiBarChart2,
    title: 'Analyse et exploitation des données',
    intro:
      'Transformez vos données en informations exploitables, avec une analyse de performances, des rapports automatisés ainsi que des prévisions et des recommandations.',
    items: [],
  },
]

const faqs = [
  {
    question: "L'IA est-elle adaptée à mon entreprise ?",
    answer:
      "Dans la majorité des cas, oui. L'enjeu est surtout d'identifier les tâches qui peuvent être automatisées ou optimisées.",
  },
  {
    question: 'Faut-il déjà utiliser des outils IA ?',
    answer: 'Non. Nous pouvons vous accompagner même si vous partez de zéro.',
  },
  {
    question: 'Combien de temps dure un projet ?',
    answer:
      "Cela dépend du périmètre. Certains projets d'automatisation peuvent être déployés en quelques jours, tandis que les solutions plus avancées nécessitent plusieurs semaines.",
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'La sécurité et la confidentialité des données font partie intégrante de notre processus de développement, nous respectons les règles RGPD en vigueur.',
  },
]

export default function IntegrationIAPage() {
  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Intégration IA', url: `${SITE_URL}/integration-ia` },
  ]

  return (
    <main className="relative overflow-hidden bg-slate-50 text-[#001F45] selection:bg-[#DBFF00] selection:text-[#001F45]">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqs} />

      {/* En-tête */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,31,69,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,31,69,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-[#3b5bdb]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#DBFF00]/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-inter font-semibold uppercase tracking-[0.2em] text-[#001F45]/60 mb-4">
            Intelligence artificielle
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] mb-6">
            Intégration IA
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-[#001F45]/75 font-inter leading-relaxed">
            Automatisez vos processus, gagnez du temps et améliorez votre productivité grâce à des
            solutions d'intelligence artificielle adaptées à votre activité. Chez Lodgic, nous
            accompagnons les entreprises dans le développement et le déploiement de solutions d'IA
            sur mesure pour votre entreprise.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#001F45] px-8 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#0b2b63]"
            >
              Demander un entretien
            </Link>
          </div>
        </div>
      </section>

      {/* Notre méthode d'accompagnement */}
      <section className="relative py-16 md:py-24">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45] mb-4">
              Notre méthode d'accompagnement
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[#001F45]/70 font-inter leading-relaxed">
              Nous privilégions une approche humaine : nous cherchons d'abord à résoudre un problème
              métier avant de parler technologie.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.id}
                  className="relative flex gap-5 rounded-2xl border border-[#001F45]/10 bg-white p-6 md:p-7 shadow-sm transition-shadow hover:shadow-[0_12px_40px_rgba(0,31,69,0.08)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#001F45] text-[#DBFF00]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-sofia-bold text-[#0EA5E9]">{step.id}</span>
                      <h3 className="text-lg md:text-xl font-sofia-bold text-[#001F45]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#001F45]/70 font-inter text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-16">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#001F45] px-8 py-12 md:px-12 md:py-14 text-center shadow-[0_20px_60px_rgba(0,31,69,0.25)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#DBFF00]/10 blur-3xl"
            />
            <h2 className="relative text-2xl md:text-3xl font-sofia-bold text-white mb-3">
              Prêt à explorer les opportunités de l'IA pour votre entreprise ?
            </h2>
            <p className="relative mx-auto max-w-xl text-white/75 font-inter text-base md:text-lg mb-8">
              Réservez un appel découverte et échangeons sur vos besoins.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex h-12 items-center justify-center rounded-full bg-[#DBFF00] px-8 text-sm font-inter font-semibold text-[#001F45] transition-transform hover:scale-105"
            >
              Demander un entretien
            </Link>
          </div>
        </div>
      </section>

      {/* Ce que nous pouvons mettre en place */}
      <section className="relative py-16 md:py-24">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45] mb-4">
              Ce que nous pouvons mettre en place
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[#001F45]/70 font-inter">
              Des exemples concrets de solutions IA adaptées à votre activité.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-[#001F45]/10 bg-white p-7 md:p-8 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#001F45] text-[#DBFF00]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sofia-bold text-[#001F45] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-[#001F45]/70 font-inter text-sm md:text-base leading-relaxed">
                    {cap.intro}
                  </p>
                  {cap.items.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {cap.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[#001F45]/80 font-inter text-sm md:text-base"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0EA5E9]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24 pb-24 md:pb-32">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45] mb-4">
              Les questions souvent posées
            </h2>
            <p className="text-base md:text-lg text-[#001F45]/70 font-inter">
              Tout ce que vous devez savoir avant de vous lancer.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </main>
  )
}
