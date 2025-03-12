import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lodgic - A Propos',
  description: 'Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale',
  openGraph: {
    title: 'Lodgic - A Propos',
    description: 'Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale',
    url: 'https://lodgic-dev.com/a-propos',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - À propos de nous',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function APropos() {
  return (
    <div className="pt-16">
      {/* Section Hero */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 py-24 md:py-32 overflow-hidden relative">
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

            {/* Points décoratifs */}
            <g opacity="0.3">
              <circle cx="150" cy="150" r="2" fill="white" />
              <circle cx="350" cy="250" r="2" fill="white" />
              <circle cx="550" cy="150" r="2" fill="white" />
              <circle cx="750" cy="300" r="2" fill="white" />
              <circle cx="950" cy="200" r="2" fill="white" />
              <circle cx="1150" cy="350" r="2" fill="white" />
              <circle cx="1350" cy="250" r="2" fill="white" />

              <circle cx="250" cy="350" r="2" fill="white" />
              <circle cx="450" cy="450" r="2" fill="white" />
              <circle cx="650" cy="350" r="2" fill="white" />
              <circle cx="850" cy="500" r="2" fill="white" />
              <circle cx="1050" cy="400" r="2" fill="white" />
              <circle cx="1250" cy="550" r="2" fill="white" />
            </g>

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
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative z-10">
          {/* Texte - Côté gauche */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="font-inter-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Des solutions numériques
              <br />
              <span className="text-blue-200">qui vous ressemblent</span>
            </h1>

            <p className="font-inter-regular text-white text-opacity-90 mb-8 max-w-lg text-lg leading-relaxed">
              Nous créons des applications web et mobiles simples à utiliser, adaptées à vos besoins et qui évoluent
              avec votre entreprise.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="font-inter-medium bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center"
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
              </a>
              <Link
                href="/services"
                className="font-inter-medium border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all flex items-center group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Nos services
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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

          {/* Illustration - Côté droit */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              {/* Élément décoratif */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -mr-16 -mt-16 opacity-80"></div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-inter-bold text-gray-900 mb-4">Un accompagnement de confiance</h3>

                <p className="text-gray-600 mb-6">
                  Nous vous guidons à chaque étape de votre projet, avec transparence et simplicité.
                </p>

                <div className="grid grid-cols-3 gap-4 w-full mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Écoute</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Clarté</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Réactivité</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 inline-flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    <path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zM8 7a1 1 0 000 2h2a1 1 0 000-2H8z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Cahier des charges gratuit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme SVG en bas pour transition */}
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

      {/* Section Notre Approche */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Contenu texte */}
              <div className="lg:w-1/2" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">Notre approche </h2>
                <div className="w-24 h-1 bg-blue-600 rounded-full mb-6"></div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Chez Lodgic, nous abordons chaque projet avec une méthodologie structurée et flexible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Découverte de votre projet</h3>
                      <p className="text-gray-600">
                        Nous prenons le temps de comprendre vos objectifs, votre marché et vos défis spécifiques pour
                        créer une solution adaptée a vos besoins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Conception centrée utilisateur</h3>
                      <p className="text-gray-600">
                        Nous plaçons l'expérience utilisateur au cœur de notre processus de conception.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Amélioration continue</h3>
                      <p className="text-gray-600">
                        Nous ne nous contentons pas de livrer un produit final. Nous vous accompagnons dans
                        l'amélioration continue de votre produit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-inter-bold text-gray-900">Notre méthode</h3>
                    <p className="text-gray-600 text-center mt-2">
                      Une approche structurée en 4 étapes pour garantir le succès de votre projet
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-inter-bold text-gray-900">Conseils et analyse des besoins</h4>
                        <p className="text-gray-600 text-sm">Compréhension de vos idées, besoins et objectifs.</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-inter-bold text-gray-900">Conception</h4>
                        <p className="text-gray-600 text-sm">Design centré sur l'expérience utilisateur.</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-inter-bold text-gray-900">Développement</h4>
                        <p className="text-gray-600 text-sm">Création avec des technologies modernes.</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-inter-bold text-gray-900">Suivi & Optimisation</h4>
                        <p className="text-gray-600 text-sm">
                          Suivi aprés réalisation du projet et amélioration continue de votre application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Équipe - Version améliorée */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600">Une équipe à taille humaine, proche de vous et de vos besoins.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Yann Roquie - Version améliorée */}
            <div
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4 shadow-sm">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="5" fill="currentColor" />
                    <path
                      d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-inter-bold text-gray-900">Yann Rouquie</h3>
                  <p className="text-blue-600 font-inter-medium text-sm">Relation client / Développeur Mobile</p>
                </div>
              </div>

              <div className="space-y-2 text-gray-600 text-sm">
                <p className="leading-relaxed">
                  Yann est votre interlocuteur principal tout au long de votre projet. Il analyse vos besoins et
                  objectifs pour créer un cahier des charges précis qui servira de base à la réalisation.
                </p>

                <div className="flex items-start mt-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Analyse et compréhension de vos besoins</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Suivi et coordination du développement</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Accompagnement post-lancement et évolutions</p>
                </div>
              </div>
            </div>

            {/* Mathéo Katbie - Version améliorée */}
            <div
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mr-4 shadow-sm">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="5" fill="currentColor" />
                    <path
                      d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-inter-bold text-gray-900">Mathéo Katbie</h3>
                  <p className="text-indigo-600 font-inter-medium text-sm">Développeur Full-Stack Web & Mobile</p>
                </div>
              </div>

              <div className="space-y-2 text-gray-600 text-sm">
                <p className="leading-relaxed">
                  Mathéo donne vie à votre projet avec des solutions techniques robustes et intuitives. Son expertise
                  couvre l'ensemble du développement, du back-end au front-end, pour des applications performantes et
                  faciles à utiliser.
                </p>

                <div className="flex items-start mt-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Développement d'applications web et mobiles</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Intégration d'API et services tiers</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Optimisation des performances et de la sécurité</p>
                </div>
              </div>
            </div>
          </div>

          {/* Équipe étendue - Nouveau bloc */}
          <div
            className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 max-w-4xl mx-auto shadow-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Une équipe adaptable à vos besoins</h3>
                <p className="text-gray-700">
                  Pour les projets d'envergure ou nécessitant des compétences spécifiques, nous collaborons avec notre
                  réseau de développeurs spécialisés (UI/UX designers, experts en sécurité, développeurs mobiles natifs,
                  etc.). Cette flexibilité nous permet de constituer l'équipe idéale pour votre projet, quelle que soit
                  sa taille ou sa complexité.
                </p>
              </div>
            </div>
          </div>

          {/* Ajout d'un appel à l'action secondaire */}
          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
            <p className="text-gray-600 mb-4">Envie d'en savoir plus sur notre façon de travailler ?</p>
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-inter-medium"
            >
              <span>Découvrir nos services</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
