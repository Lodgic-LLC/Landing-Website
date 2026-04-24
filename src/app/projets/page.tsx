import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Tous les projets - Lodgic',
  description:
    'Une sélection de réalisations web et mobile accompagnées de leur contexte, de leurs défis et de leurs résultats concrets.',
}

const ACCENT_BY_CATEGORY: Record<string, { dot: string; gradient: string; bg: string; text: string }> = {
  'Application mobile': {
    dot: 'bg-[#0EA5E9]',
    gradient: 'from-[#e8f0ff] via-[#f3f7ff] to-white',
    bg: 'bg-[#0EA5E9]/10',
    text: 'text-[#0EA5E9]',
  },
  'SaaS interne': {
    dot: 'bg-[#6366F1]',
    gradient: 'from-[#ece8ff] via-[#f3effd] to-white',
    bg: 'bg-[#6366F1]/10',
    text: 'text-[#6366F1]',
  },
  'Site web': {
    dot: 'bg-[#F43F5E]',
    gradient: 'from-[#fde7ec] via-[#fcf0f0] to-white',
    bg: 'bg-[#F43F5E]/10',
    text: 'text-[#F43F5E]',
  },
}

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-gradient-to-br from-[#f6f7fc] via-white to-[#eaf0ff] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#001F45]/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#DBFF00]/20 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-inter font-medium text-[#162869]/70 hover:text-[#001F45] transition-colors"
          >
            <span aria-hidden>←</span> Retour à l'accueil
          </Link>
          <p className="mt-8 text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/60">
            Nos réalisations
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] leading-tight tracking-tight text-balance">
            Tous les projets livrés par Lodgic.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[#162869]/85 font-inter">
            Applications mobiles, plateformes SaaS et sites e-commerce — voici un aperçu des projets
            sur lesquels nous avons travaillé.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => {
              const accent = ACCENT_BY_CATEGORY[project.category] ?? ACCENT_BY_CATEGORY['Site web']
              return (
                <Link
                  key={project.slug}
                  href={`/projets/${project.slug}`}
                  className="group relative flex flex-col rounded-2xl bg-white ring-1 ring-[#001F45]/10 overflow-hidden transition-smooth hover:ring-[#001F45]/20 hover:shadow-elevated hover:-translate-y-1"
                >
                  <div className={`relative h-44 bg-gradient-to-br ${accent.gradient}`}>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-sofia-bold text-[#001F45] shadow-sm">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden />
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 text-[11px] font-inter font-medium text-[#001F45]/70">
                      {project.year}
                    </div>
                    <div className={`absolute inset-x-6 bottom-4 h-16 rounded-xl ${accent.bg} ring-1 ring-white/60`} />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h2 className="text-xl md:text-2xl font-sofia-bold text-[#001F45] leading-tight group-hover:text-[#0b2b63] transition-colors">
                      {project.name}
                    </h2>
                    <p className="mt-3 text-[15px] text-[#162869]/85 font-inter leading-relaxed">
                      {project.description}
                    </p>

                    <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-[#001F45]/5 pt-5">
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider text-[#162869]/60 font-inter font-semibold">
                          Durée
                        </dt>
                        <dd className="mt-1 text-sm font-sofia-bold text-[#001F45]">{project.duration}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider text-[#162869]/60 font-inter font-semibold">
                          Impact
                        </dt>
                        <dd className="mt-1 text-sm font-sofia-bold text-[#001F45]">
                          {project.metrics[0]?.value}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider text-[#162869]/60 font-inter font-semibold">
                          Stack
                        </dt>
                        <dd className="mt-1 text-sm font-sofia-bold text-[#001F45] truncate">
                          {project.stack[0]}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 pt-5 border-t border-[#001F45]/5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-sofia-bold text-[#001F45]">
                        Découvrir ce projet
                        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                          →
                        </span>
                      </span>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${accent.bg} ${accent.text} group-hover:bg-[#001F45] group-hover:text-white transition-colors`}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L9.21 6.03a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.178-3.22H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#001F45] p-8 md:p-12 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#DBFF00]/20 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/70">
                  Prêt à lancer le vôtre ?
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-sofia-bold text-balance">
                  Parlons de votre projet — première réponse sous 24 h.
                </h2>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-sofia-bold text-sm text-[#001F45] hover:bg-white/90 transition-smooth self-start md:self-auto"
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
