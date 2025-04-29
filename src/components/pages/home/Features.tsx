import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Vague en haut pour transition */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Formes SVG en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Cercles et formes abstraites */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grand cercle central */}
          <circle
            cx="720"
            cy="400"
            r="300"
            fill="url(#gradient1)"
            fillOpacity="0.1"
          />

          {/* Cercle supérieur droit */}
          <circle
            cx="1100"
            cy="150"
            r="150"
            fill="url(#gradient2)"
            fillOpacity="0.1"
          />

          {/* Cercle inférieur gauche */}
          <circle
            cx="300"
            cy="650"
            r="200"
            fill="url(#gradient3)"
            fillOpacity="0.1"
          />

          {/* Forme abstraite 1 */}
          <path
            d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
            fill="url(#gradient4)"
            fillOpacity="0.05"
          />

          {/* Définition des dégradés */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter-bold text-gray-900 mb-4 sm:mb-6">
            Nous vous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              accompagnons
            </span>{" "}
            à chaque étape du développement de votre application mobile
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          De l’idée initiale jusqu’à la mise en ligne, nous sommes à vos côtés à chaque étape pour donner vie à votre projet.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-4 sm:mt-8"></div>
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-10">
          {/* Image à gauche - Hidden on mobile, visible on tablet and up */}
          <div className="w-full lg:w-1/2 relative hidden sm:block">
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Une approche sur-mesure pour votre projet
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Chaque projet a des besoins spécifiques et des objectifs uniques.
              Nous travaillons en collaboration avec vous pour comprendre vos
              enjeux et concevoir une application mobile qui répond parfaitement
              à vos attentes.
            </p>
            <ul className="space-y-3 text-base sm:text-lg text-gray-600 list-disc list-inside">
              <li>Analyse de vos objectifs et de vos besoins.</li>
              <li>Création d'un design sur mesure avec proposition de maquettes.</li>
              <li>
                Construction pas à pas de votre application, avec votre validations a chaque étape de votre projet.
              </li>
              <li>
                Tests pour assurer un fonctionnement parfait sur mobiles IOS/Android et
                tablettes.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vague en bas pour transition */}
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
            d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
