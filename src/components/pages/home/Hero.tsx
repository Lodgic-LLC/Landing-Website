import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-blue-600 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden relative">
      {/* Formes SVG en arrière-plan */}
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
          <circle
            cx="720"
            cy="400"
            r="400"
            fill="url(#gradient1)"
            fillOpacity="0.2"
          />

          {/* Cercle supérieur droit */}
          <circle
            cx="1100"
            cy="150"
            r="200"
            fill="url(#gradient2)"
            fillOpacity="0.15"
          />

          {/* Cercle inférieur gauche */}
          <circle
            cx="300"
            cy="650"
            r="250"
            fill="url(#gradient3)"
            fillOpacity="0.15"
          />

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
      </div>

      <div className="max-w-7xl pt-14 mx-auto px-6 relative z-10">
        {/* Contenu centré */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="font-inter-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-8">
            <span className="block mb-2">Développement</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white">
              d'applications web & mobile
            </span>
            <span className="block mt-2">sur mesure</span>
          </h1>

          <p className="font-inter-regular text-slate-200 mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Expertise technique, design innovant et accompagnement personnalisé
            pour concrétiser efficacement vos projets digitaux.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-2">
            <Link
              href="/contact"
              className="font-inter-medium bg-white text-slate-800 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
              data-aos="fade-up"
              data-aos-delay="200"
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
              className="font-inter-medium border border-slate-300 text-white px-8 py-4 rounded-md hover:border-white transition-all duration-300 flex items-center group shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Découvrir nos services
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>

          {/* SVG décoratif en dessous du contenu */}
          <div className="mt-24 flex justify-center"></div>
        </div>
      </div>

      {/* Forme SVG en bas pour transition */}
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
