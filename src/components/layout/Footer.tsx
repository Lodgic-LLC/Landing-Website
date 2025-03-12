import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-16 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-600/3 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-indigo-600/3 rounded-full blur-[100px] -z-0"></div>

      {/* Bouton Prendre RDV flottant pour mobile */}
      <div className="sm:hidden fixed bottom-4 left-4 z-50">
        <Link
          href="/rendez-vous"
          className="flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base font-medium"
          tabIndex={0}
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
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Prendre RDV
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section principale du footer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-16">
          {/* Logo et description */}
          <div className="col-span-2 sm:col-span-1 space-y-4 sm:space-y-7 mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="bg-white/10 p-2 sm:p-2.5 rounded-lg mr-3">
                <img src="/favicon.ico" alt="Logo Lodgic" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">
                Lodgic
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed tracking-wide">
              Solutions digitales sur mesure pour transformer vos idées en expériences numériques exceptionnelles.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-1 sm:pt-2">
              <a
                href="https://twitter.com/lodgic"
                className="bg-gray-800 p-2 sm:p-2.5 rounded-full text-gray-400 hover:text-white transition-all duration-300 group"
                aria-label="Twitter"
                tabIndex={0}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/lodgic"
                className="bg-gray-800 p-2 sm:p-2.5 rounded-full text-gray-400 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
                tabIndex={0}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages - Disposition en 2 colonnes sur mobile */}
          <div className="col-span-1 space-y-4 sm:space-y-7">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-10 sm:w-14 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></span>
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group text-xs sm:text-sm"
                  tabIndex={0}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500 mr-1.5 sm:mr-2.5 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">Accueil</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group text-xs sm:text-sm"
                  tabIndex={0}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-indigo-500 mr-1.5 sm:mr-2.5 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">À propos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group text-xs sm:text-sm"
                  tabIndex={0}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 mr-1.5 sm:mr-2.5 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group text-xs sm:text-sm"
                  tabIndex={0}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500 mr-1.5 sm:mr-2.5 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rendez-vous"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group text-xs sm:text-sm"
                  tabIndex={0}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-indigo-500 mr-1.5 sm:mr-2.5 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">Rendez-vous</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Version compacte sur mobile */}
          <div className="col-span-1 space-y-4 sm:space-y-7">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-10 sm:w-14 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></span>
            </h3>
            <ul className="space-y-3 sm:space-y-5">
              <li className="flex items-start group">
                <div className="bg-gray-800 p-1.5 sm:p-2.5 rounded-lg mr-2 sm:mr-3.5 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <svg
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5 sm:mb-1 font-medium">Email</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    tabIndex={0}
                  >
                    <span>Nous contacter</span>
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1 sm:ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-800 p-1.5 sm:p-2.5 rounded-lg mr-2 sm:mr-3.5 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <svg
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5 sm:mb-1 font-medium">Adresse</p>
                  <span className="text-gray-400 text-xs sm:text-sm">Toulouse, France</span>
                </div>
              </li>
              <li className="hidden sm:block mt-4 sm:mt-8">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center px-3 py-1.5 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xs sm:text-sm"
                  tabIndex={0}
                >
                  <span className="font-medium">Prendre RDV</span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre horizontale et copyright */}
        <div className="pt-4 sm:pt-8 border-t border-gray-800 flex flex-row flex-wrap justify-between items-center gap-y-3">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} <span className="text-gray-400">Lodgic</span>. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            <Link
              href="/politique-confidentialite"
              className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors"
              tabIndex={0}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
