import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaMobile, FaCode, FaPlug, FaTools, FaChevronRight } from 'react-icons/fa'

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
      icon: <FaMobile className="h-8 w-8 text-blue-600" />,
      title: 'Applications iOS natives',
      description: 'Nous développons des applications iOS natives , optimisées pour iPhone et iPad.',
      color: 'from-blue-200 to-indigo-300',
      delay: 100,
      features: [
        'Applications pour iPhone (iOS) et Android',
        'Intégration de services externes (paiement, réservation, etc.) et ajout de vos fonctionnalités',
        "Publication sur l'App Store et Google Play",
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470',
    },
    {
      id: 2,
      icon: <FaCode className="h-8 w-8 text-blue-600" />,
      title: 'Applications Android natives',
      description:
        'Nous créons des applications Android natives en Kotlin, optimisées pour tous les appareils Android.',
      color: 'from-purple-200 to-pink-300',
      delay: 200,
      features: [
        'Optimisé pour le référencement naturel (SEO) sur Google',
        'Intégration de services externes (paiement, réservation, etc.) et ajout de vos fonctionnalités',
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374',
    },
    {
      id: 3,
      icon: <FaPlug className="h-8 w-8 text-blue-600" />,
      title: 'Connexion de vos outils et services numériques',
      description:
        "Nous relions vos différents logiciels et services pour qu'ils communiquent entre eux, automatisation de l'échange d'informations.",
      color: 'from-green-200 to-teal-300',
      delay: 300,
      features: [
        'Connexion entre vos différents logiciels',
        'Intégration avec des services externes (paiement, réservation, etc.)',
        "Automatisation de l'échange d'informations",
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1374',
    },
    {
      id: 4,
      icon: <FaTools className="h-8 w-8 text-blue-600" />,
      title: 'Assistance et amélioration continue',
      description: "Nous assurons le suivi, la maintenance et l'évolution de vos applications mobiles dans le temps.",
      color: 'from-yellow-200 to-amber-300',
      delay: 400,
      features: [
        'Protection contre les risques de sécurité',
        'Assistance en cas de problème',
        'Sauvegarde régulière de vos données',
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470',
    },
  ]

  const FeaturePoint = ({ text }: { text: string }) => (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="ml-3 text-gray-600">{text}</p>
    </div>
  )

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 pt-24 md:pt-32 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="350" r="400" fill="white" fillOpacity="0.1" />
            <circle cx="1100" cy="150" r="200" fill="white" fillOpacity="0.1" />
            <circle cx="300" cy="650" r="250" fill="white" fillOpacity="0.1" />

            {/* Points lumineux */}
            <g opacity="0.5">
              {[...Array(20)].map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="white"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-20 md:pb-24">
            {/* Contenu gauche */}
            <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Applications Mobiles{' '}
                <span className="bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">
                  iOS & Android
                </span>{' '}
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                Vous n'avez pas les compétences pour développer votre application ? Lodgic vous accompagne de la
                conception à la mise en ligne de votre projet.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Discuter de mon projet
                </Link>
                <Link
                  href="/a-propos"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center group"
                >
                  En savoir plus sur Lodgic
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image à droite - Hidden on mobile, visible on tablet and up */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 hidden sm:block">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1442"
                    alt="Application mobile développement"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>Notre Blog

                {/* Élément décoratif derrière l'image */}
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-blue-300/20 -z-10"></div>

                {/* Points flottants autour de l'image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-blue-300/40 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Section des services principaux */}
      {mainServices.map((service, index) => (
        <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Contenu textuel */}
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center shadow-md mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <FeaturePoint key={i} text={feature} />
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      />
                    </svg>
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.id === 1 && (
                      <>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          React Native
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          Javascript
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          UIKit
                        </span>
                      </>
                    )}
                    {service.id === 2 && (
                      <>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          Tailwind CSS
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          Android SDK
                        </span>
                      </>
                    )}
                    {service.id === 3 && (
                      <>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          NestJS
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          Stripe
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          API REST
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          Prisma
                        </span>
                      </>
                    )}
                    {service.id === 4 && (
                      <>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          GitHub
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          CI/CD
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          Docker
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                          AWS
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Demander un devis gratuit
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 hidden sm:block">
                <div className="relative w-full ">
                  <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                      quality={85}
                      loading={service.id === 1 ? 'eager' : 'lazy'}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
                  </div>

                  {/* Éléments décoratifs */}
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                    } w-24 h-24 ${service.color} rounded-xl opacity-50`}
                  ></div>
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? '-top-4 -left-4' : '-top-4 -right-4'
                    } w-12 h-12 bg-blue-200 rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Points lumineux */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-white rounded-full opacity-20"></div>

          {/* Cercles abstraits */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border border-white/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre idée en réalité ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Discutons ensemble de votre projet et trouvons la solution idéale pour répondre à vos besoins spécifiques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/rendez-vous"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Prendre rendez-vous
                <FaChevronRight className="inline-block ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Méthodologie */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* En-tête de section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre approche de développement</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">
              Nous combinons nos expertises pour donner vie à votre vision et créer des applications mobiles qui se
              démarquent.
            </p>
          </div>

          {/* Cartes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carte 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-blue-100 transition-all hover:shadow-lg group">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                Stratégie / Conseils
              </h3>
              <p className="text-gray-600 text-center">
                Nous développons une stratégie adaptée à votre projet, de la définition des besoins à la planification
                de la solution.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-blue-100 transition-all hover:shadow-lg group">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                Design
              </h3>
              <p className="text-gray-600 text-center">
                Nous créons une expérience utilisateur intuitive et une interface graphique moderne qui reflète votre
                identité.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-blue-100 transition-all hover:shadow-lg group">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                Développement
              </h3>
              <p className="text-gray-600 text-center">
                Nous développons votre application avec une architecture robuste et un code propre et optimisé.
              </p>
            </div>

            {/* Carte 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-blue-100 transition-all hover:shadow-lg group">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                Maintenance
              </h3>
              <p className="text-gray-600 text-center">
                Nous assurons le suivi et la maintenance continue de votre application pour garantir sa performance et
                son évolution.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Discuter de votre projet
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
