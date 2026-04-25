'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const stats = [
  { label: '+30 projets livrés', tone: 'brand' as const },
  { label: '3 j de délai de réponse', tone: 'standard' as const },
  { label: '100 % sur mesure', tone: 'standard' as const },
]

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[var(--color-brand-50)]/60 via-white to-white pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Colonne gauche (8/12 ≈ 2/3) */}
          <div className="lg:col-span-8">
            {/* Badge avec point pulsant */}
            <span className="animate-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-border-soft)] text-[var(--color-muted)] text-[13px] font-medium">
              <span className="pulse-dot" aria-hidden />
              Développeurs Toulousains
            </span>

            {/* H1 */}
            <h1 className="animate-fade-up-delay-1 display-h1 mt-6 text-balance">
              On code l&apos;application qui fait{' '}
              <span className="italic text-[var(--color-brand-ink)]">avancer</span> votre business.
            </h1>

            {/* Sous-titre */}
            <p className="animate-fade-up-delay-2 mt-5 text-[17px] md:text-[18px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
              Web, mobile, SaaS — de l&apos;idée au lancement. Yann et Mathéo vous accompagnent
              à chaque étape, avec un suivi humain et sans jargon inutile.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3">
              <Link href="/#contact" className="btn-brand text-white">
                Démarrer un projet
                <FaArrowRight className="h-3 w-3" aria-hidden />
              </Link>
              <Link href="/#projets" className="btn-outline">
                Voir nos réalisations
              </Link>
            </div>
          </div>

          {/* Colonne droite : photo + stats en overlay (4/12 ≈ 1/3) */}
          <div className="animate-fade-up-delay-2 lg:col-span-4 relative">
            {/* Photo Yann & Mathéo */}
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:max-w-none">
              {/* Arrière-plan décoratif doux */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[var(--color-brand-100)] via-[var(--color-brand-50)] to-white"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[28px] border border-[var(--color-border)]"
              />

              {/* Mathéo en arrière */}
              <div className="absolute bottom-0 left-[15%] z-10 h-[88%]">
                <Image
                  src="/images/matheo.png"
                  alt="Mathéo"
                  width={500}
                  height={750}
                  className="h-full w-auto object-contain object-bottom drop-shadow-lg"
                  priority
                />
              </div>

              {/* Yann devant */}
              <div className="absolute bottom-0 right-[5%] z-20 h-[95%]">
                <Image
                  src="/images/yann.png"
                  alt="Yann"
                  width={500}
                  height={750}
                  className="h-full w-auto object-contain object-bottom drop-shadow-lg"
                  priority
                />
              </div>

              {/* Stats flottantes — desktop overlay, mobile en dessous */}
              <div className="hidden lg:flex absolute -left-20 xl:-left-24 top-1/2 -translate-y-1/2 z-30 flex-col gap-2.5 w-[210px]">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`animate-fade-up-delay-${i + 3} rounded-2xl px-4 py-3 text-[13px] font-medium shadow-soft ${
                      stat.tone === 'brand'
                        ? 'bg-[var(--color-brand)] text-white border border-[var(--color-brand)]'
                        : 'bg-white text-[var(--color-ink)] border border-[var(--color-border)]'
                    }`}
                  >
                    {stat.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats mobiles / tablette — dessous la photo */}
            <div className="lg:hidden mt-6 flex flex-wrap justify-center gap-2.5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium ${
                    stat.tone === 'brand'
                      ? 'bg-[var(--color-brand)] text-white'
                      : 'bg-white text-[var(--color-ink)] border border-[var(--color-border-soft)]'
                  }`}
                >
                  {stat.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
