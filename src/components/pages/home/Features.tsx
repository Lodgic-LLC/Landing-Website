import React from 'react'
import Image from 'next/image'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Applications Mobiles Natives',
    description:
      "Développement d'applications iOS et Android performantes, offrant une expérience utilisateur fluide et intuitive.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Applications Hybrides',
    description:
      'Solutions cross-platform permettant un déploiement rapide sur iOS et Android avec une base de code unique.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Design UX/UI Moderne',
    description:
      "Interfaces élégantes, accessibles et centrées sur l'utilisateur, conçues pour maximiser l'engagement et la satisfaction.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Sécurité Renforcée',
    description:
      "Protection des données utilisateurs et conformité aux normes de sécurité les plus strictes (RGPD, OWASP).",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Haute Performance',
    description:
      "Applications optimisées pour une exécution rapide, une consommation de batterie maîtrisée et des temps de chargement minimaux.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Maintenance Continue',
    description:
      "Support technique, mises à jour régulières et évolutions pour garantir la pérennité et l'amélioration constante de votre application.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre expertise en développement d'applications
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Des solutions mobiles innovantes qui répondent aux besoins spécifiques de votre entreprise et de vos utilisateurs.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
            >
              {/* Décoration d'angle */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-[40px] -z-10 group-hover:bg-blue-100 transition-colors"></div>

              {/* Icône */}
              <div className="mb-5">{feature.icon}</div>

              {/* Contenu */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image et contenu supplémentaire */}
        <div className="mt-20 flex flex-col lg:flex-row items-center gap-10">
          {/* Image à gauche */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop"
                alt="Équipe de développement mobile"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
            {/* Élément décoratif */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-blue-200 rounded-lg -z-10"></div>
          </div>

          {/* Contenu à droite */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une approche sur-mesure pour votre projet
            </h3>
            <p className="text-gray-600 mb-6">
              Nous ne croyons pas aux solutions uniformisées. Chaque entreprise a des besoins spécifiques et
              des objectifs uniques. Notre équipe d'experts travaille en étroite collaboration avec vous pour
              comprendre vos enjeux et concevoir une application mobile qui répond parfaitement à vos attentes.
            </p>

            {/* Points clés */}
            <div className="space-y-4">
              {[
                "Analyse approfondie de vos besoins métier",
                "Conception UX/UI personnalisée selon votre identité",
                "Développement agile avec validations régulières",
                "Tests rigoureux sur tous les appareils cibles"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
