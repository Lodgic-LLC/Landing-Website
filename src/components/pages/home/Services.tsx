'use client'

import Link from 'next/link'
import { FiSmartphone, FiGlobe, FiLayers, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: FiSmartphone,
    title: 'Applications mobiles',
    description:
      "Des applications iOS et Android pensées pour vos utilisateurs : conception, développement React Native et publication sur les stores. Une seule base de code, deux plateformes.",
  },
  {
    icon: FiGlobe,
    title: 'Sites & plateformes web',
    description:
      "Sites vitrines, plateformes métier ou espaces clients développés sur mesure en Next.js. Rapides, référencés, et pensés pour convertir vos visiteurs.",
  },
  {
    icon: FiLayers,
    title: 'Logiciels métier',
    description:
      "CRM, back-offices et outils internes taillés pour vos processus. Je pars de votre façon de travailler, pas d'un modèle générique.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F5F8FC] py-20 md:py-32 border-t border-[#0F2647]/5"
      aria-labelledby="services-heading"
    >
      {/* Halos décoratifs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#2E8FFF]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#2E8FFF]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[#2E8FFF] font-sofia-bold uppercase tracking-wider text-sm mb-3 block">
            Ce que je fais
          </span>
          <h2
            id="services-heading"
            className="text-4xl md:text-6xl font-sofia-bold text-[#0F2647] tracking-tight"
          >
            Mes services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group relative flex flex-col rounded-3xl border border-[#0F2647]/10 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(15,38,71,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,38,71,0.12)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E8FFF] text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl md:text-[1.75rem] font-sofia-bold text-[#0F2647] mb-4 text-balance">
                  {service.title}
                </h3>

                <p className="text-[#475D80]/75 font-inter text-base leading-relaxed">
                  {service.description}
                </p>

              </article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F2647] px-8 py-4 text-base font-inter font-semibold text-white transition-colors hover:bg-[#1B6FD4]"
          >
            Discuter de votre projet
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
