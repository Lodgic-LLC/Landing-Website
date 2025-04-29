import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FaArrowRight, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

export const metadata: Metadata = {
  title: "A Propos - Lodgic",
  description:
    "Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale",
  alternates: {
    canonical: "https://lodgic-dev.com/a-propos",
  },
  openGraph: {
    title: "A Propos - Lodgic",
    description:
      "Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale",
    url: "https://lodgic-dev.com/a-propos",
    siteName: "Lodgic",
    images: [
      {
        url: "https://lodgic-dev.com/FullLogo_Transparent.png",
        width: 1200,
        height: 630,
        alt: "Lodgic - À propos de nous",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  keywords: [
    "à propos",
    "Lodgic",
    "équipe de développement",
    "agence mobile Toulouse",
    "expertise développement",
    "histoire Lodgic",
    "valeurs entreprise",
    "développeur mobile",
    "expertise technique",
    "services numériques",
    "transformation digitale",
    "développement sur mesure",
  ],
  twitter: {
    card: "summary_large_image",
    title: "A Propos - Lodgic",
    description:
      "Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale",
    images: ["https://lodgic-dev.com/FullLogo_Transparent.png"],
  },
};

export default function APropos() {
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
          <div className="flex flex-col lg:flex-row items-center gap-10 pb-20 md:pb-24">
            {/* Contenu gauche */}
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Créons ensemble
                <span className="block bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">
                  l'application qu'il vous faut
                </span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                Chez Lodgic, On vous accompagne pas à pas, de l'idée au
                lancement concret de votre application.
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
                  Contactez-nous
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center group"
                >
                  Nos services
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
              <div className="relative w-full">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470"
                    alt="Notre approche de développement"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-blue-300/20 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-blue-300/40 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous ?
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe à taille humaine, proche de vous et de vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Yann Rouquie */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="12" cy="8" r="5" fill="currentColor" />
                      <path
                        d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Yann Rouquie
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Relation client / Développeur Mobile
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Yann est votre interlocuteur principal tout au long de votre
                projet. Il analyse vos besoins et objectifs pour créer un cahier
                des charges précis qui servira de base à la réalisation.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Analyse et compréhension de vos besoins
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Suivi et coordination du développement
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Accompagnement post-lancement et évolutions
                  </span>
                </div>
              </div>
            </div>

            {/* Mathéo Katbie */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="12" cy="8" r="5" fill="currentColor" />
                      <path
                        d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Mathéo Katbie
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Développeur Full-Stack Web & Mobile
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Mathéo donne vie à votre projet avec des solutions techniques
                robustes et intuitives. Son expertise couvre l'ensemble du
                développement, du back-end au front-end, pour des applications
                performantes et faciles à utiliser.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Développement d'applications web et mobiles
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Intégration d'API et services tiers
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    Optimisation des performances et de la sécurité
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Équipe étendue */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-5xl mx-auto shadow-md border border-blue-100/50">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                  <FaUsers className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Une équipe adaptable à vos besoins
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour les projets d'envergure ou nécessitant des compétences
                  spécifiques, nous collaborons avec notre réseau de
                  développeurs spécialisés (UI/UX designers, experts en
                  sécurité, développeurs mobiles natifs, etc.). Cette
                  flexibilité nous permet de constituer l'équipe idéale pour
                  votre projet, quelle que soit sa taille ou sa complexité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Envie d'en savoir plus sur notre façon de travailler ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Découvrez nos services ou contactez-nous pour discuter de votre
              projet digital.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Découvrir nos services
                <FaArrowRight className="inline-block ml-2" />
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
    </>
  );
}
