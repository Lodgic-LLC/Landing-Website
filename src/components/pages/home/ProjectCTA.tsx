import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCTA() {
  return (
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Contenu gauche */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à concrétiser votre projet d'application mobile ?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Transformez votre idée en une application performante. Notre équipe d'experts vous accompagne à chaque étape,
              de la conception au déploiement, pour créer une solution sur mesure adaptée à vos besoins.
            </p>

            {/* Points clés */}
            <div className="mb-10 space-y-4">
              {[
                "Consultation gratuite et devis personnalisé",
                "Respect des délais et du budget fixés",
                "Solutions adaptées aux dernières technologies",
                "Support continu après le lancement"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-200 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* Image à droite */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510"
                alt="Équipe de développement mobile en discussion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center"
                quality={90}
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>

              {/* Overlay avec formulaire simplifié */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-blue-900/90 to-blue-900/60">
                <h3 className="text-white text-lg sm:text-xl font-medium mb-3 sm:mb-4">Contactez-nous dès maintenant</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex-grow text-center"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-blue-300/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
