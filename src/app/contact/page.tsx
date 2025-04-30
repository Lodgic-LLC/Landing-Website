import ContactForm from "@/components/pages/contact/ContactForm";
import { Metadata } from "next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact - Lodgic",
  description:
    "Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider",
  alternates: {
    canonical: "https://lodgic-dev.com/contact",
  },
  openGraph: {
    title: "Contact - Lodgic",
    description:
      "Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider",
    url: "https://lodgic-dev.com/contact",
    siteName: "Lodgic",
    images: [
      {
        url: "https://lodgic-dev.com/FullLogo_Transparent.png",
        width: 1200,
        height: 630,
        alt: "Contactez-nous - Lodgic",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  keywords: [
    "contact",
    "Lodgic",
    "agence développement",
    "développeur mobile",
    "nous contacter",
    "devis application mobile",
    "projet numérique",
    "demande information",
    "consultation projet",
    "Toulouse développeur",
    "développement application",
    "formulaire contact",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Contact - Lodgic",
    description:
      "Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider",
    images: ["https://lodgic-dev.com/FullLogo_Transparent.png"],
  },
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden relative">
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
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Entrons en{" "}
                <span className="bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">
                  contact
                </span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Nous sommes à votre écoute pour échanger sur votre projet et
                répondre à toutes vos questions.
              </p>

              <div className="w-20 h-1.5 bg-white mx-auto lg:mx-0 rounded-full mb-8"></div>
            </div>

            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative w-full">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470"
                    alt="Deux professionnels souriants collaborant sur un projet avec Lodgic"
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

      {/* Section Principale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Carte de contact - Colonne Gauche */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 sticky top-24">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-6 h-1 bg-blue-600 mr-3 rounded-full"></div>
                      Nos coordonnées
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaEnvelope className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Email
                        </h3>
                        <a
                          href="mailto:lodgicdev@gmail.com"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          lodgicdev@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaPhone className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Téléphone
                        </h3>
                        <p className="text-gray-700">
                          Disponible sur rendez-vous
                        </p>
                        <Link
                          href="/rendez-vous"
                          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center mt-1"
                        >
                          Prendre rendez-vous
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Localisation
                        </h3>
                        <p className="text-gray-700">Toulouse, France</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Travail à distance sur toute la France et à
                          l'international
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaClock className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Horaires
                        </h3>
                        <p className="text-gray-700">
                          Lundi - Vendredi : 9h - 18h
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          Réponse sous 24h ouvrées
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Localisation
                    </h3>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.0598028624!2d1.3629132758433282!3d43.60080324959764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1692440665349!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact - Colonne Droite */}
            <div className="lg:col-span-2">
              <ContactForm />

              {/* Section FAQ */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-6 h-1 bg-blue-600 mr-3 rounded-full"></div>
                  Questions fréquentes
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Quels types de projets acceptez-vous ?
                    </h3>
                    <p className="text-gray-700">
                      Nous développons principalement des applications web et
                      mobile sur-mesure pour les particuliers, entreprises et
                      startups. Nous travaillons avec des projets de toutes
                      tailles, du site vitrine à l'application complexe avec
                      backend et API.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Comment se déroule une collaboration ?
                    </h3>
                    <p className="text-gray-700">
                      Après un premier contact, nous organisons un appel
                      découverte pour comprendre votre projet. Nous vous
                      présentons ensuite une proposition détaillée incluant
                      planning, budget et méthodologie. Une fois validée, nous
                      commençons le développement avec des points réguliers.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Quels sont vos délais moyens de réalisation ?
                    </h3>
                    <p className="text-gray-700">
                      Les délais varient selon la complexité du projet. Un site
                      vitrine peut être réalisé en quelques jours/semaines,
                      tandis qu'une application complète nécessite plus de
                      temps. Nous établissons ensemble un planning réaliste dès
                      le début du projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Vous préférez programmer un appel ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous proposons également des créneaux de rendez-vous téléphoniques
            pour discuter plus en détail de votre projet.
          </p>
          <Link
            href="/rendez-vous"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Planifier un rendez-vous
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
