'use client'

import Link from 'next/link'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import type { ReactNode } from 'react'

export interface SeoExpertiseCard {
  num: string
  title: string
  body: ReactNode
  bullets: string[]
}

export interface SeoCrossLink {
  title: string
  href: string
  description: string
}

interface SeoExpertiseProps {
  eyebrow: string
  heading: ReactNode
  intro: ReactNode
  cards: SeoExpertiseCard[]
  closing?: ReactNode
  crossLinks?: SeoCrossLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function SeoExpertise({
  eyebrow,
  heading,
  intro,
  cards,
  closing,
  crossLinks,
  ctaLabel = 'Discuter de votre projet',
  ctaHref = '/#contact',
}: SeoExpertiseProps) {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-200px] h-[480px] w-[480px] rounded-full bg-[#C2542D]/8"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-220px] left-[-160px] h-[480px] w-[480px] rounded-full bg-[#C2542D]/15"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center rounded-full border border-[#2E2B28]/15 bg-white px-3 py-1 text-xs font-inter font-semibold uppercase tracking-wider text-[#2E2B28]">
              {eyebrow}
            </span>
            <h2 className="mt-5 font-sofia-bold text-3xl md:text-5xl text-[#2E2B28] leading-[1.1]">
              {heading}
            </h2>
          </div>

          <div
            className="lg:col-span-5"
          >
            <p className="text-lg font-inter text-[#6B655D]/80 leading-relaxed">{intro}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className="group relative rounded-2xl border border-[#2E2B28]/10 bg-white p-7 shadow-soft hover:shadow-[0_25px_60px_-25px_rgba(35,33,31,0.18)] transition-shadow duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C2542D]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="flex items-center gap-3 mb-4 relative">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#2E2B28] text-white text-xs font-sofia-bold tracking-wider px-2">
                  {card.num}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2E2B28]/15 to-transparent" />
              </div>
              <h3 className="font-sofia-bold text-xl md:text-2xl text-[#2E2B28] leading-snug">{card.title}</h3>
              <div className="mt-3 text-[#2d4567] font-inter leading-relaxed">{card.body}</div>
              <ul className="mt-5 space-y-2">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm font-inter text-[#1f3556]">
                    <FaCheck className="mt-1 h-3 w-3 text-[#C2542D] flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Closing paragraph + CTA */}
        {(closing || crossLinks) && (
          <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start">
            {closing && (
              <div
                className="lg:col-span-7 rounded-2xl bg-[#F8F6F2] border border-[#2E2B28]/10 p-8 md:p-10"
              >
                <div className="text-[#1f3556] font-inter leading-relaxed text-base md:text-lg [&>p]:mt-4 [&>p:first-child]:mt-0">
                  {closing}
                </div>
                <Link
                  href={ctaHref}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2E2B28] px-6 py-3 text-sm font-sofia-bold text-white hover:bg-[#A34322] transition-smooth"
                >
                  {ctaLabel}
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}

            {crossLinks && crossLinks.length > 0 && (
              <div
                className="lg:col-span-5 space-y-3"
              >
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#2E2B28]/60">
                  Aller plus loin
                </p>
                {crossLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl border border-[#2E2B28]/10 bg-white p-4 hover:border-[#2E2B28]/30 hover:bg-[#F8F6F2] transition-smooth group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-sofia-bold text-base text-[#2E2B28]">{link.title}</p>
                        <p className="mt-1 text-sm text-[#2d4567] font-inter leading-relaxed">{link.description}</p>
                      </div>
                      <FaArrowRight className="mt-1 h-3 w-3 text-[#2E2B28]/50 group-hover:text-[#2E2B28] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
