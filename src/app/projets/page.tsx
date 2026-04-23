import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { projects } from '@/data/projects'
import ProjectCover from '@/components/pages/projects/ProjectCover'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projets & réalisations — Lodgic',
  description:
    'Découvrez les réalisations Lodgic : applications mobiles, plateformes web3, sites web sur mesure. HouseGuard, Forge, CoinFinder et plus.',
  alternates: { canonical: 'https://lodgic-dev.com/projets' },
  openGraph: {
    title: 'Projets & réalisations — Lodgic',
    description:
      'Applications mobiles, SaaS, e-commerce et plateformes web sur mesure — quelques projets livrés par Lodgic.',
    url: 'https://lodgic-dev.com/projets',
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'website',
    images: ['/lodgic-banner.png'],
  },
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://lodgic-dev.com/projets/${project.slug}`,
    name: project.name,
  })),
}

export default function ProjetsIndexPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="container-editorial">
        <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
          Réalisations
        </span>
        <h1 className="display-h1 text-balance max-w-3xl">
          Des projets concrets, livrés et utilisés au quotidien.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          Applications mobiles, plateformes web3 et sites sur mesure — chaque projet est pensé
          pour répondre à un besoin clair et durer dans le temps.
        </p>
      </section>

      <section className="container-editorial mt-14 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="card-std group overflow-hidden"
              aria-label={`Voir le projet ${project.name}`}
            >
              <ProjectCover project={project} priority={index < 2} />

              <div className="p-6 md:p-7">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[var(--color-page-warm)] border border-[var(--color-border)] text-[12px] font-medium text-[var(--color-muted)] mb-3">
                  {project.category}
                </span>
                <h2 className="text-[18px] md:text-[19px] font-semibold text-[var(--color-ink)] mb-2 tracking-tight">
                  {project.name}
                </h2>
                <p className="text-[14.5px] leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brand-ink)] group-hover:gap-2.5 transition-all">
                  Voir le projet
                  <FaArrowRight className="h-3 w-3" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-20 md:mt-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-brand)] px-7 py-10 md:px-14 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="display-h2 text-balance" style={{ color: '#ffffff' }}>
                Votre projet pourrait être le prochain.
              </h2>
              <p
                className="mt-4 text-[16px] md:text-[17px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                On revient vers vous sous 24&nbsp;h pour en discuter, sans engagement.
              </p>
            </div>
            <Link href="/#contact" className="btn-on-brand text-[var(--color-brand)]">
              Démarrer un projet
              <FaArrowRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
