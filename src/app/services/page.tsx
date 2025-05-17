import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaMobile,
  FaCode,
  FaPlug,
  FaTools,
  FaChevronRight,
  FaShieldAlt,
  FaPaintBrush,
  FaRocket,
  FaClipboardList,
  FaCalendarAlt,
  FaEnvelope,
  FaCheckCircle,
} from 'react-icons/fa'
import React from 'react'

export const metadata: Metadata = {
  title: 'Services de Développement Mobile - Lodgic',
  description:
    'Découvrez nos services de développement mobile natif iOS et Android pour créer des applications performantes et innovantes',
  alternates: {
    canonical: 'https://lodgic-dev.com/services',
  },
  openGraph: {
    title: 'Services de Développement Mobile - Lodgic',
    description:
      'Découvrez nos services de développement mobile natif iOS et Android pour créer des applications performantes et innovantes',
    url: 'https://lodgic-dev.com/services',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic Services Mobile',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'développement mobile',
    'applications iOS',
    'applications Android',
    'React Native',
    'développeur applications mobiles',
    'création application sur mesure',
    'applications natives',
    'développement app',
    'intégration API',
    'services web',
    'Lodgic services',
    'développement Toulouse',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Services de Développement Mobile - Lodgic',
    description:
      'Découvrez nos services de développement mobile natif iOS et Android pour créer des applications performantes et innovantes',
    images: ['https://lodgic-dev.com/FullLogo_Transparent.png'],
  },
}

// This is the App Router equivalent of getStaticProps
// It makes this page statically generated at build time for better SEO
export const revalidate = 3600 // Revalidate this page every hour

export default function Services() {
  const mainServices = [
    {
      id: 1,
      icon: <FaMobile className="h-10 w-10 text-[#E67E22]" />,
      title: 'Applications iOS natives',
      description:
        'Nous développons des applications iOS natives , optimisées pour iPhone et iPad, offrant une expérience utilisateur fluide et performante.',
      gradientColor: 'from-[#E67E22]/70 to-[#E67E22]/40',
      delay: 100,
      features: [
        'Applications pour iPhone (iOS) et Android',
        'Intégration de services externes (paiement, réservation, etc.) et ajout de vos fonctionnalités',
        "Publication sur l'App Store et Google Play",
        'Interface utilisateur soignée et intuitive',
      ],
      image: '/svg/ios.svg',
      tech: ['React Native', 'JavaScript', 'Swift', 'UIKit'],
    },
    {
      id: 2,
      icon: <FaCode className="h-10 w-10 text-[#A3B18A]" />,
      title: 'Applications Android natives',
      description:
        "Nous créons des applications Android natives en Kotlin ou Java, optimisées pour une large gamme d'appareils Android.",
      gradientColor: 'from-[#A3B18A]/70 to-[#A3B18A]/40',
      delay: 200,
      features: [
        'Optimisé pour le référencement naturel (SEO) sur Google Play',
        'Intégration de services externes (paiement, réservation, etc.)',
        'Notifications push et fonctionnalités avancées',
        'Tests rigoureux sur multiples appareils',
      ],
      image: '/svg/android.svg',
      tech: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose'],
    },
    {
      id: 3,
      icon: <FaPlug className="h-10 w-10 text-[#2C3E50]" />,
      title: 'Connexion de vos outils et services numériques',
      description:
        "Nous relions vos différents logiciels et services pour qu'ils communiquent entre eux, automatisant l'échange d'informations et optimisant vos processus.",
      gradientColor: 'from-[#2C3E50]/70 to-[#2C3E50]/40',
      delay: 300,
      features: [
        'Connexion entre vos différents logiciels (CRM, ERP, etc.)',
        'Intégration avec des services externes (paiement, API tierces)',
        "Automatisation de l'échange d'informations et des workflows",
        "Création d'API REST robustes et sécurisées",
      ],
      image: '/svg/server.svg',
      tech: ['NestJS', 'Node.js', 'Stripe', 'API REST', 'GraphQL', 'Prisma'],
    },
    {
      id: 4,
      icon: <FaTools className="h-10 w-10 text-[#E67E22]" />,
      title: 'Assistance et amélioration continue',
      description:
        "Nous assurons le suivi, la maintenance et l'évolution de vos applications mobiles et web dans le temps pour garantir leur pérennité et leur performance.",
      gradientColor: 'from-[#FAF3E0]/30 to-[#FAF3E0]/10',
      delay: 400,
      features: [
        'Protection contre les risques de sécurité et mises à jour',
        'Assistance technique réactive en cas de problème',
        'Sauvegarde régulière de vos données et monitoring',
        'Optimisation continue des performances',
      ],
      image: '/svg/computer.svg',
      tech: ['GitHub', 'GitLab CI/CD', 'Docker', 'AWS', 'Sentry'],
    },
  ]

  const methodologySteps = [
    {
      id: 1,
      icon: <FaClipboardList className="w-8 h-8 text-[#E67E22]" />,
      title: 'Stratégie & Conseil',
      description:
        "Analyse de vos besoins, définition des objectifs et élaboration d'une feuille de route claire pour votre projet.",
    },
    {
      id: 2,
      icon: <FaPaintBrush className="w-8 h-8 text-[#E67E22]" />,
      title: 'Design UX/UI',
      description:
        "Conception d'interfaces utilisateur intuitives et esthétiques, centrées sur l'expérience de vos utilisateurs.",
    },
    {
      id: 3,
      icon: <FaCode className="w-8 h-8 text-[#E67E22]" />,
      title: 'Développement Agile',
      description: 'Développement itératif et flexible, avec des livraisons régulières pour un feedback continu.',
    },
    {
      id: 4,
      icon: <FaRocket className="w-8 h-8 text-[#E67E22]" />,
      title: 'Déploiement & Maintenance',
      description:
        'Mise en production de votre application et suivi continu pour assurer sa performance et son évolution.',
    },
  ]

  const FeaturePoint = ({ text }: { text: string }) => (
    <div className="flex items-start group">
      <div className="flex-shrink-0 mt-1 mr-3">
        <FaCheckCircle className="h-5 w-5 text-[#E67E22] group-hover:text-[#2C3E50] transition-colors" />
      </div>
      <p className="text-[#374151] group-hover:text-[#111827] transition-colors">{text}</p>
    </div>
  )

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#FFFFFF] pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="200" cy="100" r="300" fill="#E67E22" fillOpacity="0.05" />
            <circle cx="1200" cy="700" r="250" fill="#E67E22" fillOpacity="0.05" />
            <path d="M-200 400 Q400 200 720 400 T1600 400" stroke="#E67E22" strokeOpacity="0.03" strokeWidth="100" />
            {/* Points lumineux */}
            <g opacity="0.8">
              {[...Array(25)].map((_, i) => (
                <circle
                  key={`hero-dot-${i}`}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="#2C3E50"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Contenu gauche */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2C3E50] leading-tight mb-6">
                Des <span className="text-[#E67E22]">Solutions Digitales</span> pour Votre Succès
              </h1>

              <p className="text-[#374151] text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                De la conception d'applications mobiles performantes à l'intégration de systèmes complexes, Lodgic est
                votre partenaire technologique pour concrétiser vos ambitions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-[#E67E22] text-[#FFFFFF] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#E67E22]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center text-lg"
                >
                  <FaRocket className="w-5 h-5 mr-2.5" />
                  Lancer mon Projet
                </Link>
                <Link
                  href="/a-propos"
                  className="border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#2C3E50]/10 hover:border-[#2C3E50] transition-all flex items-center group text-lg"
                >
                  Qui sommes-nous ?
                  <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Image à droite - Apparaît sur les grands écrans */}
            <div className="w-full lg:w-2/5 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/svg/services.svg"
                    alt="Équipe travaillant sur des solutions digitales"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                    priority
                  />
                </div>
                {/* Éléments décoratifs supplémentaires */}
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#E67E22]/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-[#E67E22]/30 rounded-full animate-ping-slow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z" fill="#FAF3E0" />
          </svg>
        </div>
      </section>

      {/* Section des services principaux */}
      {mainServices.map((service, index) => (
        <section
          key={service.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-[#FAF3E0]' : 'bg-[#FFFFFF]'} overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Contenu textuel */}
              <div className="lg:w-1/2">
                <div className="mb-6 lg:mb-8 flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.gradientColor} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {React.cloneElement(service.icon, { className: 'h-10 w-10 text-[#FFFFFF]' })}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">{service.title}</h2>
                  </div>
                </div>

                <p className="text-[#374151] text-lg mb-8 leading-relaxed">{service.description}</p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <FeaturePoint key={i} text={feature} />
                  ))}
                </div>

                {service.tech && service.tech.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-semibold text-[#111827] mb-3 flex items-center text-lg">
                      <svg className="w-6 h-6 mr-2.5 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Technologies Clés
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {service.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="bg-[#E67E22]/20 text-[#E67E22] text-sm font-medium px-3 py-1.5 rounded-md shadow-sm hover:bg-[#E67E22]/30 transition-colors"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-[#E67E22] text-[#FFFFFF] rounded-lg shadow-md hover:bg-[#E67E22]/90 transition-colors font-semibold text-lg group"
                >
                  Obtenir un Devis Personnalisé
                  <FaChevronRight className="ml-2.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full group">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border-2 border-transparent">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-contain p-4 sm:p-6"
                      quality={85}
                      loading={service.id === 1 ? 'eager' : 'lazy'}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${service.gradientColor} opacity-20 group-hover:opacity-10 transition-opacity`}
                    ></div>
                  </div>

                  {/* Éléments décoratifs */}
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? '-bottom-5 -right-5' : '-bottom-5 -left-5'
                    } w-28 h-28 bg-gradient-to-br ${
                      service.gradientColor
                    } rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-all duration-300 transform group-hover:rotate-12`}
                  ></div>
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? '-top-5 -left-5' : '-top-5 -right-5'
                    } w-16 h-16 bg-[#FAF3E0]/70 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="250" r="300" fill="#FFFFFF" />
            <circle cx="100" cy="100" r="150" fill="#FFFFFF" />
            <circle cx="1300" cy="400" r="200" fill="#FFFFFF" />
          </svg>
          {/* Points lumineux */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#FFFFFF]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-[#FFFFFF]/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#FFFFFF]/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Notre équipe d'experts est prête à vous écouter et à transformer votre vision en une solution digitale
              percutante. Contactez-nous dès aujourd'hui !
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link
                href="/rendez-vous"
                className="bg-[#FFFFFF] text-[#2C3E50] px-8 py-4 rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center text-lg w-full sm:w-auto justify-center"
              >
                <FaCalendarAlt className="w-5 h-5 mr-2.5" />
                Prendre un Rendez-vous
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#FFFFFF]/80 text-[#FFFFFF] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF] transition-all flex items-center text-lg w-full sm:w-auto justify-center group"
              >
                <FaEnvelope className="w-5 h-5 mr-2.5" />
                Nous Contacter
                <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform hidden sm:inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Méthodologie */}
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">
          {/* En-tête de section */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] mb-5">
              Notre Approche Sur Mesure
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-[#374151] leading-relaxed">
              Nous adoptons une méthodologie agile et collaborative, centrée sur vos besoins, pour garantir la réussite
              de chaque projet, de la conception initiale au déploiement final et au-delà.
            </p>
          </div>

          {/* Cartes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {methodologySteps.map((step) => (
              <div
                key={step.id}
                className="bg-[#FAF3E0]/50 rounded-xl shadow-lg p-6 md:p-8 border border-[#FAF3E0] hover:border-[#E67E22]/50 transition-all duration-300 transform hover:-translate-y-2 group hover:shadow-2xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E67E22]/20 to-[#E67E22]/10 group-hover:from-[#E67E22] group-hover:to-[#E67E22]/70 transition-all duration-300 shadow-md">
                    {React.cloneElement(step.icon, {
                      className: 'w-8 h-8 text-[#E67E22] group-hover:text-[#FFFFFF] transition-colors duration-300',
                    })}
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#111827] mb-3 text-center group-hover:text-[#E67E22] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#374151] text-center leading-relaxed text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 md:mt-20">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/80 text-[#FFFFFF] rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-semibold text-lg group"
            >
              Discutons de Votre Projet
              <FaRocket className="ml-2.5 w-5 h-5 transform group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
