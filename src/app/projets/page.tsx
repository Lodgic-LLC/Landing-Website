import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FaArrowRight, FaCode, FaBrain, FaMobileAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Nos Projets - Lodgic",
  description:
    "Découvrez nos réalisations récentes en matière de développement d'applications mobiles et web. Études de cas et projets concrets.",
  alternates: {
    canonical: "https://lodgic-dev.com/projets",
  },
  keywords: [
    "projets",
    "portfolio",
    "réalisations",
    "études de cas",
    "applications mobiles",
    "développement web",
    "applications iOS",
    "applications Android",
    "Lodgic projets",
    "projets réussis",
    "applications sur mesure",
    "HouseGuard",
    "Forge AI",
    "CoinFinder",
  ],
  openGraph: {
    title: "Nos Projets - Lodgic",
    description:
      "Découvrez nos réalisations récentes en matière de développement d'applications mobiles et web. Études de cas et projets concrets.",
    url: "https://lodgic-dev.com/projets",
    siteName: "Lodgic",
    images: [
      {
        url: "https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png",
        width: 1200,
        height: 630,
        alt: "Lodgic Projects",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const projects = [
  {
    id: 1,
    title: "HouseGuard",
    subtitle: "Gestion Immobilière Simplifiée",
    description:
      "Application mobile de gestion locative pour propriétaires et gestionnaires immobiliers",
    image: "/images/house-proprietaire.png",
    tech: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    icon: <FaMobileAlt className="text-blue-600 w-8 h-8" />,
    color: "bg-blue-50 border-blue-200",
    link: "/projets/houseguard",
    features: [
      "Gestion de biens immobiliers",
      "Suivi des paiements de loyer",
      "Communication propriétaire-locataire",
      "Déclaration et suivi des sinistres",
    ],
  },
  {
    id: 2,
    title: "Forge AI",
    subtitle: "Marketplace NFT",
    description:
      "Plateforme de génération et achat/vente de NFT utilisant l'IA générative",
    image: "/images/forge-main.png",
    tech: ["React.js", "Next.js", "Solana", "OpenAI API", "Web3.js", "IPFS"],
    icon: <FaBrain className="text-indigo-600 w-8 h-8" />,
    color: "bg-indigo-50 border-indigo-200",
    link: "/projets/forge-ai",
    features: [
      "Développement d'une marketplace",
      "Génération de NFT via IA",
      "Création/gestion des comptes utilisateur",
      "Intégration blockchain (Solana)",
    ],
  },
  {
    id: 3,
    title: "CoinFinder",
    subtitle: "Plateforme Crypto",
    description:
      "Application web de suivi et d'analyse de cryptomonnaies en temps réel",
    image: "/images/coinfinder.png",
    tech: [
      "React.js",
      "Express",
      "AWS",
      "Supabase",
      "TradingView API",
      "WebSockets",
    ],
    icon: <FaCode className="text-emerald-600 w-8 h-8" />,
    color: "bg-emerald-50 border-emerald-200",
    link: "/projets/coinfinder",
    features: [
      "Interface de suivis de cryptomonnaies",
      "Système de paiement automatisé",
      "Dashboard de suivis du portefeuille",
      "Alertes et notifications personnalisées",
    ],
  },
];

export default function Projects() {
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
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Nos{" "}
                <span className="bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">
                  Réalisations
                </span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Découvrez nos projets récents et apprenez comment nous aidons
                nos clients à développer des applications performantes et
                innovantes.
              </p>

              <div className="w-20 h-1.5 bg-white mx-auto lg:mx-0 rounded-full mb-8"></div>
            </div>

            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative w-full">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1470"
                    alt="Code sur un ordinateur portable avec un smartphone à côté, illustrant le développement d'applications mobiles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-blue-300/20 -z-10"></div>
                <div className="absolute -top-3 -left-3 w-7 h-7 bg-blue-400/30 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 -right-3 w-5 h-5 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute bottom-0 left-1/4 w-4 h-4 bg-blue-300/40 rounded-full blur-sm"></div>
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

      {/* Section des projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                {/* Image du projet */}
                <div
                  className={`w-full lg:w-1/2 order-2 ${
                    index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  } flex items-center justify-center`}
                >
                  {project.id === 1 ? (
                    // Special three-phone mockup for HouseGuard
                    <div className="flex justify-center items-center w-full h-full p-4">
                      <div className="flex space-x-[-20px] sm:space-x-[-30px] transform scale-90 sm:scale-100">
                        {/* Phone 1 (left) */}
                        <div className="relative transform -rotate-6 z-10 shadow-lg rounded-xl sm:rounded-2xl">
                          <div className="w-28 sm:w-36 h-56 sm:h-64 bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white">
                            <img
                              src="/images/house-proprietaire.png"
                              alt="HouseGuard - Vue propriétaire"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {/* Phone 2 (center) */}
                        <div className="relative transform z-20 scale-110 shadow-xl rounded-xl sm:rounded-2xl">
                          <div className="w-28 sm:w-36 h-56 sm:h-64 bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white">
                            <img
                              src="/images/house-parametres.png"
                              alt="HouseGuard - Dashboard"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {/* Phone 3 (right) */}
                        <div className="relative transform rotate-6 z-10 shadow-lg rounded-xl sm:rounded-2xl">
                          <div className="w-28 sm:w-36 h-56 sm:h-64 bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white">
                            <img
                              src="/images/house-locataire.png"
                              alt="HouseGuard - Vue locataire"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard image display for other projects
                    <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={90}
                          priority={project.id === 1} // Keep priority for first image load if needed elsewhere
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                      </div>
                      {/* Badge with the logo - Keep it for other projects */}
                      <div className="absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                        {project.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contenu du projet */}
                <div
                  className={`lg:w-1/2 order-1 ${
                    index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-xl font-semibold text-blue-600">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-lg text-gray-700">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">
                        Fonctionnalités clés :
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
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
                            <span className="ml-2 text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={project.link}
                      className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all`}
                    >
                      Voir le projet
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
              Vous avez un projet en tête ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Discutons ensemble de votre projet et voyons comment nous pouvons
              vous aider à le concrétiser.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/rendez-vous"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Prendre rendez-vous
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
