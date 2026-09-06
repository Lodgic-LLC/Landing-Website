'use client'

import Link from 'next/link'
import { FiSmartphone, FiGlobe, FiLayers, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: FiSmartphone,
    title: 'Applications mobiles',
    description:
      "Des applications iOS et Android pensées pour vos utilisateurs, en React Native : une seule base de code, deux plateformes.",
    items: ['Publication App Store & Play Store', 'Notifications, hors-ligne, paiement', 'Reprise d\'une app existante'],
  },
  {
    icon: FiGlobe,
    title: 'Sites & plateformes web',
    description:
      "Sites vitrines, plateformes métier ou espaces clients développés sur mesure en Next.js, rapides et référencés.",
    items: ['Site vitrine orienté conversion', 'Espace client ou back-office', 'SEO technique et performance'],
  },
  {
    icon: FiLayers,
    title: 'Logiciels métier',
    description:
      "CRM, back-offices et outils internes taillés pour vos processus, pas pour un modèle générique.",
    items: ['Automatisation de tâches répétitives', 'Connexion à vos outils existants', 'Tableaux de bord et exports'],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F6F2] py-20 md:py-28 border-t border-[#E6E1D8]"
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

                <h3 className="text-[1.4rem] md:text-2xl font-sofia-bold text-[#2E2B28] mb-3">
                  {service.title}
                </h3>

                <p className="mb-5 text-[#6B655D] font-inter text-[15px] leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-auto space-y-2 border-t border-[#E6E1D8] pt-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#2E2B28] font-inter">
                      <svg className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#C2542D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

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
