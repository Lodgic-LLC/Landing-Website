'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-editorial">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-brand)] px-7 py-10 md:px-14 md:py-14">
          {/* Détails décoratifs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-20 h-[320px] w-[320px] rounded-full bg-black/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className="display-h2 text-balance"
                style={{ color: '#ffffff' }}
              >
                Votre projet mérite un vrai interlocuteur.
              </h2>
              <p
                className="mt-4 text-[16px] md:text-[17px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                Pas un formulaire. On répond sous 24&nbsp;h pour un premier échange sans
                engagement.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/#contact"
                className="btn-on-brand text-[var(--color-brand)]"
              >
                Prendre contact
                <FaArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
