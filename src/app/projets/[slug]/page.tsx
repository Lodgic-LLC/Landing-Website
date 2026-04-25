import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowRight, FaArrowLeft, FaCheck } from 'react-icons/fa'

import { getAllProjectSlugs, getProjectBySlug, projects } from '@/data/projects'
import ProjectMockup from '@/components/pages/projects/ProjectMockup'
import ProjectCover from '@/components/pages/projects/ProjectCover'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false
export const revalidate = 3600

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const title = `${project.name} — Projet ${project.category} · Lodgic`
  const description = `${project.tagline} ${project.description}`
  const url = `https://lodgic-dev.com/projets/${project.slug}`
  const ogImage = project.cover.src ?? '/lodgic-banner.png'

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Lodgic',
      locale: 'fr_FR',
      type: 'article',
      images: [{ url: ogImage, alt: project.cover.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2)
  const additionalMockups = project.mockups.slice(1)

  // JSON-LD CreativeWork pour le SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: `https://lodgic-dev.com/projets/${project.slug}`,
    ...(project.cover.src
      ? { image: `https://lodgic-dev.com${project.cover.src}` }
      : {}),
    dateCreated: project.year,
    genre: project.category,
    keywords: project.stack.join(', '),
    creator: {
      '@type': 'Organization',
      name: 'Lodgic',
      url: 'https://lodgic-dev.com',
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://lodgic-dev.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projets',
        item: 'https://lodgic-dev.com/projets',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.name,
        item: `https://lodgic-dev.com/projets/${project.slug}`,
      },
    ],
  }

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article>
        {/* Retour */}
        <div className="container-editorial mb-6">
          <Link
            href="/projets"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-smooth"
          >
            <FaArrowLeft className="h-3 w-3" aria-hidden />
            Tous les projets
          </Link>
        </div>

        {/* Hero */}
        <header className="container-editorial">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
            {project.category}
          </span>
          <h1 className="display-h1 text-balance">{project.name}</h1>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-3xl">
            {project.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--color-border)] pt-6">
            <div>
              <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted-faint)]">
                Client
              </dt>
              <dd className="mt-1 text-[14px] text-[var(--color-ink)]">
                {project.client.profile}
              </dd>
            </div>
            <div>
              <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted-faint)]">
                Année
              </dt>
              <dd className="mt-1 text-[14px] text-[var(--color-ink)]">{project.year}</dd>
            </div>
            <div>
              <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted-faint)]">
                Durée
              </dt>
              <dd className="mt-1 text-[14px] text-[var(--color-ink)]">{project.duration}</dd>
            </div>
            <div>
              <dt className="text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted-faint)]">
                Stack
              </dt>
              <dd className="mt-1 text-[14px] text-[var(--color-ink)]">
                {project.stack.slice(0, 3).join(' · ')}
                {project.stack.length > 3 ? '…' : ''}
              </dd>
            </div>
          </dl>
        </header>

        {/* Visuel principal */}
        <section className="container-editorial mt-14">
          <div
            className={`relative rounded-3xl bg-gradient-to-br ${project.gradient} p-6 md:p-10 overflow-hidden`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-white/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -left-20 h-[320px] w-[320px] rounded-full bg-black/10 blur-3xl"
            />
            <div className="relative">
              {project.mockups[0].kind === 'phone' ? (
                <div className="flex justify-center py-6">
                  <ProjectMockup mockup={project.mockups[0]} priority />
                </div>
              ) : (
                <ProjectMockup mockup={project.mockups[0]} priority />
              )}
            </div>
          </div>
        </section>

        {/* Contexte & besoins */}
        <section className="container-editorial mt-20 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
                Contexte
              </span>
              <h2 className="display-h2 text-balance">Le point de départ.</h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--color-muted)]">
                {project.client.context}
              </p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="display-h3">Besoins du client</h3>
              <ul className="mt-4 space-y-3">
                {project.needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-brand-ink)] flex-shrink-0"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mt-20 md:mt-24 py-16 md:py-20 bg-[var(--color-page)] border-y border-[var(--color-border)]">
          <div className="container-editorial">
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
                Notre réponse
              </span>
              <h2 className="display-h2 text-balance">La solution mise en place.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.solutions.map((solution, index) => (
                <div
                  key={solution}
                  className="card-std p-6 md:p-7 flex gap-4 items-start bg-white"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-semibold flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-[15px] leading-relaxed text-[var(--color-ink)]">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie maquettes */}
        {additionalMockups.length > 0 && (
          <section className="container-editorial mt-20 md:mt-24">
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
                Maquettes
              </span>
              <h2 className="display-h2 text-balance">Un aperçu de l’interface.</h2>
            </div>

            {project.mockups[0].kind === 'phone' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 items-start">
                {additionalMockups.map((mockup, i) => (
                  <ProjectMockup
                    key={`${mockup.src}-${i}`}
                    mockup={mockup}
                    sizes="(max-width: 768px) 45vw, 260px"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                {additionalMockups.map((mockup, i) => (
                  <ProjectMockup
                    key={`${mockup.src}-${i}`}
                    mockup={mockup}
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Résultats */}
        <section className="mt-20 md:mt-24 py-16 md:py-20 bg-[var(--color-page)] border-y border-[var(--color-border)]">
          <div className="container-editorial">
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
                Résultat
              </span>
              <h2 className="display-h2 text-balance">Ce que ça a changé.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-white border border-[var(--color-border)] p-6 md:p-7"
                >
                  <p className="text-[34px] md:text-[40px] leading-none font-semibold tracking-tight text-[var(--color-brand-ink)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[14px] text-[var(--color-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand-ink)] text-white flex-shrink-0">
                    <FaCheck className="h-2.5 w-2.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stack */}
        <section className="container-editorial mt-20 md:mt-24">
          <div className="max-w-2xl mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
              Stack technique
            </span>
            <h2 className="display-h2 text-balance">Les technologies utilisées.</h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-border-soft)] text-[13px] font-medium text-[var(--color-ink)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="container-editorial mt-20 md:mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-brand)] px-7 py-10 md:px-14 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="display-h2 text-balance" style={{ color: '#ffffff' }}>
                  Un projet similaire en tête ?
                </h2>
                <p
                  className="mt-4 text-[16px] md:text-[17px] leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  On vous répond sous 24&nbsp;h pour en discuter, sans engagement.
                </p>
              </div>
              <Link href="/#contact" className="btn-on-brand text-[var(--color-brand)]">
                Démarrer mon projet
                <FaArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Autres projets */}
        {otherProjects.length > 0 && (
          <section className="container-editorial mt-20 md:mt-24">
            <div className="flex items-end justify-between mb-8">
              <h2 className="display-h2">Autres réalisations.</h2>
              <Link
                href="/projets"
                className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brand-ink)] hover:gap-2.5 transition-all"
              >
                Tout voir
                <FaArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {otherProjects.map((other) => (
                <Link
                  key={other.slug}
                  href={`/projets/${other.slug}`}
                  className="card-std group overflow-hidden"
                  aria-label={`Voir le projet ${other.name}`}
                >
                  <ProjectCover project={other} />
                  <div className="p-6 md:p-7">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[var(--color-page-warm)] border border-[var(--color-border)] text-[12px] font-medium text-[var(--color-muted)] mb-3">
                      {other.category}
                    </span>
                    <h3 className="text-[18px] md:text-[19px] font-semibold text-[var(--color-ink)] tracking-tight mb-2">
                      {other.name}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-[var(--color-muted)]">
                      {other.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  )
}
