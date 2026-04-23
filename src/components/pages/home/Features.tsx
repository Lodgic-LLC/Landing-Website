'use client'

import Link from 'next/link'
import { FaArrowRight, FaMobileAlt, FaCode, FaPalette } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Service {
  title: string
  description: string
  icon: IconType
  variant: 'brand' | 'standard'
}

const services: Service[] = [
  {
    title: 'Applications mobiles',
    description: 'iOS et Android natives ou cross-platform. Publication App Store & Play Store.',
    icon: FaMobileAlt,
    variant: 'brand',
  },
  {
    title: 'Sites web & SaaS',
    description: 'Sites vitrines, plateformes métier et outils internes pensés pour durer.',
    icon: FaCode,
    variant: 'standard',
  },
  {
    title: 'Design & UX',
    description: 'Maquettes, prototypes et interfaces cohérentes, validées avant dev.',
    icon: FaPalette,
    variant: 'standard',
  },
]

export default function Features() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--color-page)]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
            Ce qu&apos;on fait
          </span>
          <h2 className="display-h2 text-balance">
            Des solutions concrètes, pas du blabla.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            const isBrand = service.variant === 'brand'

            return (
              <article
                key={service.title}
                className={`group relative rounded-2xl p-7 md:p-8 transition-smooth ${
                  isBrand
                    ? 'bg-[var(--color-brand)] text-white border border-[var(--color-brand)] hover:bg-[var(--color-brand-600)]'
                    : 'bg-white text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-border-soft)]'
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl mb-6 ${
                    isBrand ? 'bg-white/15 text-white' : 'bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)]'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </div>

                <h3
                  className={`text-[19px] md:text-[20px] font-semibold mb-2 tracking-tight ${
                    isBrand ? '!text-white' : 'text-[var(--color-ink)]'
                  }`}
                >
                  {service.title}
                </h3>

                <p className={`text-[15px] leading-relaxed ${isBrand ? '!text-white/85' : 'text-[var(--color-muted)]'}`}>
                  {service.description}
                </p>

                <Link
                  href="/#contact"
                  className={`mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium ${
                    isBrand ? '!text-white' : 'text-[var(--color-brand-ink)]'
                  } hover:gap-2.5 transition-all`}
                >
                  En discuter
                  <FaArrowRight className="h-3 w-3" aria-hidden />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
