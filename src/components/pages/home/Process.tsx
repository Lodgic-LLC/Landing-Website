import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { projects } from '@/data/projects'
import ProjectCover from '@/components/pages/projects/ProjectCover'

export default function Process() {
  return (
    <section id="projets" className="py-20 md:py-28 bg-white">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
              Réalisations
            </span>
            <h2 className="display-h2 text-balance">Quelques projets récents.</h2>
          </div>
          <Link
            href="/projets"
            className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brand-ink)] hover:gap-2.5 transition-all"
          >
            Voir tous les projets
            <FaArrowRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="card-std group overflow-hidden"
              aria-label={`Voir le projet ${project.name}`}
            >
              <ProjectCover project={project} priority={index === 0} />

              <div className="p-6 md:p-7">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[var(--color-page-warm)] border border-[var(--color-border)] text-[12px] font-medium text-[var(--color-muted)] mb-3">
                  {project.category}
                </span>
                <h3 className="text-[18px] md:text-[19px] font-semibold text-[var(--color-ink)] mb-2 tracking-tight">
                  {project.name}
                </h3>
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

        <div className="md:hidden mt-8 text-center">
          <Link
            href="/projets"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-brand-ink)]"
          >
            Voir tous les projets
            <FaArrowRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
