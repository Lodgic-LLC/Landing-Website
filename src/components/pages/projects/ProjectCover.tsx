import Image from 'next/image'

import ProjectMockup from './ProjectMockup'
import type { Project } from '@/data/projects'

interface ProjectCoverProps {
  project: Project
  priority?: boolean
  sizes?: string
  className?: string
}

/**
 * Affiche la "cover" d'un projet dans une carte au ratio 16/10.
 * - Si `cover.src` est défini : image plein cadre optimisée.
 * - Sinon : aperçu réduit du variant CSS dans un frame gradient.
 */
export default function ProjectCover({
  project,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 520px',
  className = '',
}: ProjectCoverProps) {
  return (
    <div
      className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden ${className}`}
    >
      {project.cover.src ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes={sizes}
          className="object-cover object-top opacity-95 group-hover:scale-[1.02] transition-transform duration-300"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-[200px] w-[200px] rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 h-[200px] w-[200px] rounded-full bg-black/10 blur-3xl"
          />
          <div className="absolute inset-0 p-5 md:p-7 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
            <ProjectMockup
              mockup={{
                kind: 'browser',
                variant: project.cover.variant,
                alt: project.cover.alt,
                caption: '',
              }}
              priority={priority}
            />
          </div>
        </>
      )}
    </div>
  )
}
