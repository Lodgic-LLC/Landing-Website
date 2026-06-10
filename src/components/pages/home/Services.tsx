'use client'

import Link from 'next/link'
import { FiCpu, FiCode, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: FiCpu,
    title: 'Intégration IA',
    description:
      "Nous aidons à intégrer l'IA dans votre entreprise en mettant en place des automatisations et des solutions personnalisées selon le besoin de vos clients et collaborateurs.",
    href: '/integration-ia',
    cta: 'En savoir plus',
  },
  {
    icon: FiCode,
    title: 'Développement web et mobile',
    description:
      "Nous développons sur-mesure vos applications ou site web. Cela peut être un CRM, un site vitrine, une application simple ou complexe, on relève tous les défis.",
    href: null,
    cta: null,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-32 border-t border-[#001F45]/5"
      aria-labelledby="services-heading"
    >
      {/* Halos décoratifs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#0EA5E9]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#DBFF00]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[#0EA5E9] font-sofia-bold uppercase tracking-wider text-sm mb-3 block">
            Ce que nous faisons
          </span>
          <h2
            id="services-heading"
            className="text-4xl md:text-6xl font-sofia-bold text-[#001F45] tracking-tight"
          >
            Nos services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group relative flex flex-col rounded-3xl border border-[#001F45]/10 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,31,69,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,31,69,0.12)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#001F45] text-[#DBFF00]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl md:text-3xl font-sofia-bold text-[#001F45] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#162869]/75 font-inter text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>

                {service.href && service.cta && (
                  <div className="mt-8 pt-2">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#001F45] px-6 py-3 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#0b2b63]"
                    >
                      {service.cta}
                      <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#001F45] px-8 py-4 text-base font-inter font-semibold text-white transition-colors hover:bg-[#0b2b63]"
          >
            Demander un entretien
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
