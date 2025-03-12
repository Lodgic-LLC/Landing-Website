export default function ProjectCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Vague en haut pour transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Background gradient - Exactement comme le Hero */}
      <div className="absolute inset-0 z-0 bg-blue-600"></div>

      {/* Formes SVG en arrière-plan - Plus détaillées comme dans le Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Cercles et formes abstraites */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grand cercle central */}
          <circle cx="720" cy="400" r="400" fill="url(#gradient1)" fillOpacity="0.2" />

          {/* Cercle supérieur droit */}
          <circle cx="1100" cy="150" r="200" fill="url(#gradient2)" fillOpacity="0.15" />

          {/* Cercle inférieur gauche */}
          <circle cx="300" cy="650" r="250" fill="url(#gradient3)" fillOpacity="0.15" />

          {/* Forme abstraite 1 */}
          <path
            d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
            fill="url(#gradient4)"
            fillOpacity="0.1"
          />

          {/* Forme abstraite 2 */}
          <path
            d="M1600,0 C1400,100 1200,50 1000,150 C800,250 600,100 400,200 C200,300 0,200 -200,100 L-200,-100 L1600,-100 Z"
            fill="url(#gradient5)"
            fillOpacity="0.1"
          />

          {/* Éléments géométriques supplémentaires */}
          <circle cx="200" cy="200" r="50" fill="#4F46E5" fillOpacity="0.1" />
          <circle cx="1300" cy="300" r="70" fill="#4F46E5" fillOpacity="0.08" />
          <rect
            x="600"
            y="100"
            width="100"
            height="100"
            rx="20"
            transform="rotate(30 600 100)"
            fill="#4F46E5"
            fillOpacity="0.07"
          />
          <rect
            x="1000"
            y="500"
            width="80"
            height="80"
            rx="15"
            transform="rotate(-15 1000 500)"
            fill="#4F46E5"
            fillOpacity="0.07"
          />

          {/* Définition des dégradés - Identiques au Hero */}
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
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
        </svg>

        {/* Points lumineux et particules */}
        <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-indigo-200 rounded-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="font-inter-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6"
            data-aos="fade-up"
          >
            Transformez votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white">
              vision digitale
            </span>{' '}
            en réalité
          </h2>

          <p
            className="font-inter-regular text-white text-opacity-90 mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Nos experts en développement d'applications sur mesure vous accompagnent de la conception au déploiement de
            votre solution.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="/contact"
              className="font-inter-medium bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
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
            </a>
            <a
              href="/services"
              className="font-inter-medium border border-slate-300 text-white px-8 py-4 rounded-md hover:border-white transition-all duration-300 flex items-center group shadow-md"
            >
              Découvrir nos services
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Vague en bas pour transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
