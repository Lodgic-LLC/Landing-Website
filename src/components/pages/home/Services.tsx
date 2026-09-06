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
      className="bg-white py-20 md:py-28 border-t border-[#E6E1D8]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 md:mb-20">
          <p className="eyebrow justify-center mb-3">Ce que je fais</p>
          <h2
            id="services-heading"
            className="text-4xl md:text-6xl font-sofia-bold text-[#2E2B28] tracking-tight"
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
                className="group relative flex flex-col rounded-xl border border-[#E6E1D8] bg-white p-8 transition-colors duration-200 hover:border-[#C2542D]/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FBEFE9] text-[#C2542D]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl md:text-[1.75rem] font-sofia-bold text-[#2E2B28] mb-4 text-balance">
                  {service.title}
                </h3>

                <p className="text-[#6B655D]/75 font-inter text-base leading-relaxed">
                  {service.description}
                </p>

              </article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-8 py-4 text-base font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
          >
            Discuter de votre projet
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
