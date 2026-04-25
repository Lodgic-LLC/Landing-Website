'use client'

const stack = ['React', 'Next.js', 'React Native', 'Node.js', 'Flutter', 'AWS', 'TypeScript']

export default function ProjectCTA() {
  return (
    <section className="bg-white border-y border-[var(--color-border)] py-6">
      <div className="container-editorial">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <span className="text-[13px] font-medium uppercase tracking-wider text-[var(--color-muted-faint)]">
            Stack
          </span>
          <span className="h-3 w-px bg-[var(--color-border-soft)]" aria-hidden />
          {stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--color-page-warm)] border border-[var(--color-border)] text-[13px] font-medium text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
