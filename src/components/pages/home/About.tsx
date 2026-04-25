'use client'

interface TeamMember {
  initial: string
  name: string
  role: string
  description: string
  tone: 'brand' | 'red'
}

const team: TeamMember[] = [
  {
    initial: 'Y',
    name: 'Yann',
    role: 'Votre interlocuteur principal',
    description:
      "Il vous accompagne du premier échange jusqu'à la mise en production. Spécialiste du développement mobile et web moderne, il traduit votre besoin en solution simple.",
    tone: 'brand',
  },
  {
    initial: 'M',
    name: 'Mathéo',
    role: 'Lead développeur produit',
    description:
      'Il prend en charge la structure technique, la qualité du code et la performance. Son objectif : livrer un produit fiable, rapide et maintenable dans la durée.',
    tone: 'red',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--color-page)]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
            L&apos;équipe
          </span>
          <h2 className="display-h2 text-balance">Deux développeurs, un seul interlocuteur.</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)]">
            Pas de chef de projet intermédiaire, pas de service commercial : vous échangez
            directement avec ceux qui codent votre produit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {team.map((member) => {
            const avatarClass =
              member.tone === 'brand'
                ? 'bg-[var(--color-brand)] text-white'
                : 'bg-[var(--color-accent-soft)] text-[var(--color-accent-red)]'

            return (
              <article key={member.name} className="card-std p-7 md:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-[22px] font-semibold tracking-tight ${avatarClass}`}
                    aria-hidden
                  >
                    {member.initial}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-[var(--color-ink)] tracking-tight leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[14px] font-medium text-[var(--color-brand-ink)] mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {member.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
