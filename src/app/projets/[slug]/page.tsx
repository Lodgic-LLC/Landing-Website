import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllProjectSlugs, getProjectBySlug, projects } from '@/data/projects'
import {
  BrowserFrame,
  DeviceScene,
  HouseIncidentScreen,
  HousePaymentScreen,
  HousePhoneScreen,
  HouseTenantScreen,
  PhoneFrame,
  RhDashboardScreen,
  RhExpensesScreen,
  RhLeaveCalendarScreen,
  RhMobileScreen,
  RhOnboardingScreen,
} from '@/components/pages/projects/ProjectMockups'

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Projet introuvable - Lodgic' }
  }

  return {
    title: `${project.name} - Lodgic`,
    description: project.description,
  }
}

const ACCENT_BY_CATEGORY: Record<string, { dot: string; text: string; bg: string; gradient: string }> = {
  'Application mobile': {
    dot: 'bg-[#0EA5E9]',
    text: 'text-[#0EA5E9]',
    bg: 'bg-[#0EA5E9]/10',
    gradient: 'from-[#e8f0ff] via-[#f3f7ff] to-white',
  },
  'SaaS interne': {
    dot: 'bg-[#6366F1]',
    text: 'text-[#6366F1]',
    bg: 'bg-[#6366F1]/10',
    gradient: 'from-[#ece8ff] via-[#f3effd] to-white',
  },
  'Site web': {
    dot: 'bg-[#F43F5E]',
    text: 'text-[#F43F5E]',
    bg: 'bg-[#F43F5E]/10',
    gradient: 'from-[#fde7ec] via-[#fcf0f0] to-white',
  },
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) => (
  <div className="mb-8 md:mb-10 max-w-3xl">
    <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/60">
      {eyebrow}
    </p>
    <h2 className="mt-2 text-2xl md:text-3xl font-sofia-bold text-[#001F45]">{title}</h2>
    {subtitle && <p className="mt-2 text-base text-[#162869]/80 font-inter">{subtitle}</p>}
  </div>
)

export default async function ProjetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const accent = ACCENT_BY_CATEGORY[project.category] ?? ACCENT_BY_CATEGORY['Site web']
  const otherProjects = projects.filter((p) => p.slug !== project.slug)

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className={`relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br ${accent.gradient} overflow-hidden`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#001F45]/5 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm font-inter font-medium text-[#162869]/70 hover:text-[#001F45] transition-colors"
          >
            <span aria-hidden>←</span> Tous les projets
          </Link>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-sofia-bold text-[#001F45] shadow-sm ring-1 ring-[#001F45]/5">
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden />
                {project.category}
              </div>
              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] leading-tight tracking-tight text-balance">
                {project.name}
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#162869]/85 font-inter max-w-2xl leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#001F45] text-white px-5 py-3 text-sm font-sofia-bold hover:bg-[#0b2b63] transition-smooth"
                >
                  Démarrer un projet similaire
                </Link>
                <Link
                  href="#maquettes"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-[#001F45] ring-1 ring-[#001F45]/15 px-5 py-3 text-sm font-sofia-bold hover:ring-[#001F45]/40 transition-smooth"
                >
                  Voir les maquettes
                </Link>
              </div>
            </div>

            {/* Meta card */}
            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-[#001F45]/10 p-6 md:p-7 shadow-elevated">
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/60">
                  Informations projet
                </p>
                <dl className="mt-4 divide-y divide-[#001F45]/5">
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-sm text-[#162869]/70">Client</dt>
                    <dd className="text-sm font-sofia-bold text-[#001F45] text-right max-w-[60%]">
                      {project.client}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-sm text-[#162869]/70">Année</dt>
                    <dd className="text-sm font-sofia-bold text-[#001F45]">{project.year}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-sm text-[#162869]/70">Durée</dt>
                    <dd className="text-sm font-sofia-bold text-[#001F45]">{project.duration}</dd>
                  </div>
                  <div className="py-3">
                    <dt className="text-sm text-[#162869]/70">Stack</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-[#f6f7fc] text-[#001F45] text-[12px] font-inter font-medium px-2 py-1 ring-1 ring-[#001F45]/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MÉTRIQUES KEY */}
      <section className="py-14 md:py-20 bg-white border-b border-[#001F45]/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {project.metrics.map((metric, i) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-[#f6f7fc] ring-1 ring-[#001F45]/5 p-6 md:p-7"
              >
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/60">
                  Résultat {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#001F45] tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-[#162869]/75 font-inter">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXTE / BESOINS */}
      <section id="contexte" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Contexte"
                title="Le point de départ."
                subtitle={project.challenge}
              />
            </div>
            <div>
              <SectionHeader eyebrow="Besoins du client" title="Ce qu'il fallait résoudre." />
              <ul className="space-y-3">
                {project.needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-[#001F45]/8 p-4"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                    </span>
                    <span className="text-[15px] text-[#162869]/90 font-inter leading-relaxed">
                      {need}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-16 md:py-24 bg-[#f6f7fc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Notre réponse"
            title="La solution mise en place."
            subtitle="Chaque brique a été pensée pour lever un blocage concret identifié lors du cadrage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {project.solutions.map((item, index) => (
              <article
                key={item}
                className="group rounded-2xl bg-white ring-1 ring-[#001F45]/8 p-6 md:p-7 hover:ring-[#001F45]/20 transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${accent.bg} ${accent.text} font-sofia-bold text-sm`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] md:text-base text-[#001F45] font-inter leading-relaxed">
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAQUETTES */}
      <section id="maquettes" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Maquettes"
            title="Un aperçu de l'interface."
            subtitle="Des écrans pensés pour le quotidien des utilisateurs — simples, clairs, efficaces."
          />

          {project.slug === 'houseguard-gestion-locative' && (
            <div className="space-y-10">
              {/* Scène multi-devices : 3 écrans mis en scène */}
              <DeviceScene>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                  <div className="lg:translate-y-6 hidden sm:block">
                    <PhoneFrame title="Signalement d'incident">
                      <HouseIncidentScreen />
                    </PhoneFrame>
                  </div>
                  <div>
                    <PhoneFrame title="Tableau de bord propriétaire">
                      <HousePhoneScreen />
                    </PhoneFrame>
                  </div>
                  <div className="lg:translate-y-6 hidden sm:block">
                    <PhoneFrame title="Vue paiements">
                      <HousePaymentScreen />
                    </PhoneFrame>
                  </div>
                </div>
              </DeviceScene>

              {/* Galerie d'écrans supplémentaires */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`rounded-3xl bg-gradient-to-br ${accent.gradient} p-6 md:p-10 ring-1 ring-[#001F45]/5`}>
                  <PhoneFrame title="Espace locataire">
                    <HouseTenantScreen />
                  </PhoneFrame>
                </div>
                <div className={`rounded-3xl bg-gradient-to-br ${accent.gradient} p-6 md:p-10 ring-1 ring-[#001F45]/5 flex items-center justify-center`}>
                  <div className="w-full max-w-[320px]">
                    <div className="rounded-2xl bg-white ring-1 ring-[#001F45]/10 p-5">
                      <p className="text-[11px] uppercase tracking-wider text-[#162869]/60 font-inter font-semibold">
                        Fonctionnalités clés
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-[#001F45] font-inter">
                        {[
                          'Suivi multi-biens et multi-locataires',
                          'Ticketing incidents avec priorités',
                          'Paiements et relances automatiques',
                          'Messagerie contextuelle intégrée',
                          'Notifications push iOS / Android',
                        ].map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.slug === 'application-gestion-rh' && (
            <div className="space-y-10">
              {/* Hero dashboard */}
              <DeviceScene>
                <BrowserFrame title="Vue RH — pilotage en un coup d'œil" url="rh.lodgic-app.com">
                  <RhDashboardScreen />
                </BrowserFrame>
              </DeviceScene>

              {/* Calendrier + mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                  <BrowserFrame title="Calendrier des congés" url="rh.lodgic-app.com/conges">
                    <RhLeaveCalendarScreen />
                  </BrowserFrame>
                </div>
                <div className={`rounded-3xl bg-gradient-to-br ${accent.gradient} p-6 ring-1 ring-[#001F45]/5`}>
                  <PhoneFrame title="App mobile collaborateur">
                    <RhMobileScreen />
                  </PhoneFrame>
                </div>
              </div>

              {/* Notes de frais + onboarding */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <BrowserFrame title="Notes de frais" url="rh.lodgic-app.com/notes-de-frais">
                  <RhExpensesScreen />
                </BrowserFrame>
                <BrowserFrame title="Onboarding collaborateur" url="rh.lodgic-app.com/onboarding/lucas">
                  <RhOnboardingScreen />
                </BrowserFrame>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* RÉSULTATS */}
      <section id="resultats" className="py-16 md:py-24 bg-[#f6f7fc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Résultat"
            title="Ce que ça a changé."
            subtitle="Les chiffres parlent, mais l'impact se vit au quotidien par les équipes."
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-white ring-1 ring-[#001F45]/8 p-5"
                >
                  <p className="text-3xl font-sofia-bold text-[#001F45] tracking-tight">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-[#162869]/75 font-inter">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-[#001F45]/8 p-4"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}
                    >
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.8 6.79-6.8a1 1 0 011.42 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-[15px] text-[#162869]/90 font-inter leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES PROJETS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/60">
                Autres réalisations
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-sofia-bold text-[#001F45]">
                Voir d'autres projets.
              </h2>
            </div>
            <Link
              href="/projets"
              className="text-sm font-sofia-bold text-[#001F45] hover:text-[#0b2b63]"
            >
              Tout voir →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => {
              const a = ACCENT_BY_CATEGORY[p.category] ?? ACCENT_BY_CATEGORY['Site web']
              return (
                <Link
                  key={p.slug}
                  href={`/projets/${p.slug}`}
                  className="group rounded-2xl bg-white ring-1 ring-[#001F45]/8 overflow-hidden transition-smooth hover:ring-[#001F45]/20 hover:shadow-elevated hover:-translate-y-0.5"
                >
                  <div className={`h-36 bg-gradient-to-br ${a.gradient} relative`}>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-sofia-bold text-[#001F45] shadow-sm">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${a.dot}`} aria-hidden />
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-sofia-bold text-[#001F45] group-hover:text-[#0b2b63]">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#162869]/85 font-inter leading-relaxed">
                      {p.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-sofia-bold text-[#001F45]">
                      Voir le projet
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#001F45] p-8 md:p-14 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#DBFF00]/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/70">
                  Un projet en tête ?
                </p>
                <h2 className="mt-3 text-2xl md:text-4xl font-sofia-bold text-balance">
                  On vous répond sous 24 h pour en discuter, sans engagement.
                </h2>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-sofia-bold text-sm text-[#001F45] hover:bg-white/90 transition-smooth self-start md:self-auto"
              >
                Démarrer mon projet
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
