export default function ProjectCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
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

      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>

      {/* Formes SVG en arrière-plan */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Cercles et formes abstraites */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
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
            fillOpacity="0.2"
          />

          {/* Cercle supérieur droit */}
          <circle
            cx="1100"
            cy="150"
            r="150"
            fill="url(#gradient2)"
            fillOpacity="0.2"
          />

          {/* Cercle inférieur gauche */}
          <circle
            cx="300"
            cy="650"
            r="200"
            fill="url(#gradient3)"
            fillOpacity="0.2"
          />

          {/* Forme abstraite 1 */}
          <path
            d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
            fill="url(#gradient4)"
            fillOpacity="0.15"
          />

          {/* Définition des dégradés */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 rounded-lg bg-white/10 transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 right-1/4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 md:w-24 h-20 md:h-24 rounded-lg bg-white/5 transform -rotate-12"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
            data-aos="fade-up"
          >
            Vous avez un projet digital à concrétiser ?
          </h2>

          <p
            className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Notre équipe d'experts est prête à transformer votre vision en une
            solution digitale performante et adaptée à vos objectifs business.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-6 mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded-md border-2 border-white hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-lg group"
              aria-label="Prendre rendez-vous pour discuter de votre projet"
            >
              Estimer mon projet
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 text-white font-medium px-8 py-4 rounded-md border border-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              aria-label="Découvrir l'ensemble de nos services proposés"
            >
              Voir nos réalisations
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
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
