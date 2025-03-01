import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-18 md:py-18 lg:py-18 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Texte et CTA - Côté gauche */}
        <div
          className="w-full md:w-1/2 mb-16 md:mb-0 z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="font-inter-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
            Développement d'
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              applications web
            </span>{" "}
            et{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              mobile
            </span>{" "}
            sur mesure
          </h1>

          <p className="font-inter-regular text-gray-600 mb-8 max-w-lg text-lg md:text-xl leading-relaxed">
            Expertise technique, design innovant et accompagnement personnalisé
            pour concrétiser vos projets digitaux.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="font-inter-medium bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1 duration-300 flex items-center"
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
              to="/services"
              className="font-inter-medium border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>

        {/* Illustration - Côté droit */}
        <div
          className="w-full md:w-1/2 flex justify-center relative"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Cercles décoratifs subtils */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-100 opacity-20 -top-10 -right-10 animate-pulse-slow"></div>
          <div className="absolute w-56 h-56 rounded-full bg-indigo-200 opacity-20 bottom-10 -left-10 animate-pulse-slow animation-delay-2000"></div>

          <div className="relative w-full max-w-lg z-10">
            {/* Fond avec effet de profondeur */}
            <div className="absolute inset-0 bg-white rounded-xl transform rotate-3 translate-x-2 translate-y-2 shadow-lg opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl transform rotate-1 translate-x-1 translate-y-1 shadow-md"></div>

            {/* Contenu de l'illustration */}
            <div className="relative bg-white rounded-xl p-8 shadow-xl overflow-hidden border border-gray-100">
              {/* Illustration professionnelle */}
              <div className="flex flex-col items-center">
                {/* En-tête */}
                <div className="w-full flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-inter-bold text-gray-900">
                        Lodgic
                      </h3>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500">
                          Solutions numériques
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs font-medium">
                      Web
                    </span>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-md text-xs font-medium">
                      Mobile
                    </span>
                  </div>
                </div>

                {/* Plateformes mises en avant */}
                <div className="w-full grid grid-cols-3 gap-4 mb-6">
                  {/* iOS */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7101 19.5C17.8801 20.74 17.0001 22 15.6601 22C14.3201 22 13.8901 21.15 12.3301 21.15C10.7701 21.15 10.3001 22 9.00009 22C7.70009 22 6.80009 20.8 5.90009 19.5C4.00009 17 2.60009 12.45 4.50009 9.39C5.40009 7.85 7.00009 6.8 8.70009 6.8C10.1001 6.8 11.5001 7.65 12.4401 7.65C13.3901 7.65 15.0001 6.7 16.6001 6.7C18.1001 6.7 19.6001 7.55 20.5001 8.9C17.4001 10.5 18.0001 15.05 21.1001 16C20.3001 17.45 19.5001 18.75 18.7101 19.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.5 3.00001C12.82 4.20001 12.14 5.40001 11.14 6.20001C10.14 7.00001 8.84 7.50001 8.12 7.40001C7.76 6.20001 8.50 5.00001 9.44 4.30001C10.38 3.60001 11.68 3.10001 12.5 3.00001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-blue-700">
                      iOS
                    </span>
                  </div>

                  {/* Android */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                      <svg
                        className="w-8 h-8 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5239 15.5239V8.47613C17.5239 7.82424 17.0046 7.30487 16.3527 7.30487H7.64729C6.99541 7.30487 6.47604 7.82424 6.47604 8.47613V15.5239C6.47604 16.1758 6.99541 16.6951 7.64729 16.6951H16.3527C17.0046 16.6951 17.5239 16.1758 17.5239 15.5239Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.30487 9.64729V14.3527C5.30487 14.6787 5.04087 14.9427 4.71487 14.9427C4.38887 14.9427 4.12488 14.6787 4.12488 14.3527V9.64729C4.12488 9.32129 4.38887 9.0573 4.71487 9.0573C5.04087 9.0573 5.30487 9.32129 5.30487 9.64729Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.8751 9.64729V14.3527C19.8751 14.6787 19.6111 14.9427 19.2851 14.9427C18.9591 14.9427 18.6951 14.6787 18.6951 14.3527V9.64729C18.6951 9.32129 18.9591 9.0573 19.2851 9.0573C19.6111 9.0573 19.8751 9.32129 19.8751 9.64729Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.41681 4.7144L10.1328 5.43039C10.3608 5.65839 10.3608 6.02239 10.1328 6.25039C10.0188 6.36439 9.87281 6.42139 9.72681 6.42139C9.58081 6.42139 9.43481 6.36439 9.32081 6.25039L8.48081 5.41039C8.25281 5.18239 8.25281 4.81839 8.48081 4.59039C8.70881 4.36239 9.07281 4.36239 9.30081 4.59039H9.41681V4.7144Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.6792 6.25039C14.5652 6.36439 14.4192 6.42139 14.2732 6.42139C14.1272 6.42139 13.9812 6.36439 13.8672 6.25039C13.6392 6.02239 13.6392 5.65839 13.8672 5.43039L14.5832 4.7144V4.59039C14.8112 4.36239 15.1752 4.36239 15.4032 4.59039C15.6312 4.81839 15.6312 5.18239 15.4032 5.41039L14.6792 6.25039Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 19.0573C12.326 19.0573 12.59 19.3213 12.59 19.6473V21.4143C12.59 21.7403 12.326 22.0043 12 22.0043C11.674 22.0043 11.41 21.7403 11.41 21.4143V19.6473C11.41 19.3213 11.674 19.0573 12 19.0573Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.47613 19.0573C8.80213 19.0573 9.06613 19.3213 9.06613 19.6473V21.4143C9.06613 21.7403 8.80213 22.0043 8.47613 22.0043C8.15013 22.0043 7.88613 21.7403 7.88613 21.4143V19.6473C7.88613 19.3213 8.15013 19.0573 8.47613 19.0573Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.5239 19.0573C15.8499 19.0573 16.1139 19.3213 16.1139 19.6473V21.4143C16.1139 21.7403 15.8499 22.0043 15.5239 22.0043C15.1979 22.0043 14.9339 21.7403 14.9339 21.4143V19.6473C14.9339 19.3213 15.1979 19.0573 15.5239 19.0573Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 2C14.4853 2 16.5 4.01472 16.5 6.5V6.75H7.5V6.5C7.5 4.01472 9.51472 2 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-green-700">
                      Android
                    </span>
                  </div>

                  {/* Web */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                      <svg
                        className="w-8 h-8 text-indigo-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12H22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-indigo-700">
                      Web
                    </span>
                  </div>
                </div>

                {/* Dispositifs */}
                <div className="relative w-full h-64 mb-6">
                  {/* Écran d'ordinateur */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[85%] h-48 bg-gray-900 rounded-lg p-2 shadow-xl z-10 overflow-hidden">
                    {/* Barre d'adresse */}
                    <div className="flex items-center h-6 bg-gray-800 rounded-md px-2 mb-1">
                      <div className="flex space-x-1 mr-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono bg-gray-700 rounded px-2 py-0.5 flex-grow text-center">
                        www.lodgic-dev.com
                      </div>
                    </div>

                    {/* Interface web */}
                    <div className="bg-white rounded-md p-2 h-[calc(100%-24px)]">
                      {/* Navigation */}
                      <div className="flex justify-between items-center mb-2 border-b pb-1">
                        <div className="flex space-x-3">
                          <div className="w-12 h-2 bg-blue-500 rounded-sm"></div>
                          <div className="w-12 h-2 bg-gray-200 rounded-sm"></div>
                          <div className="w-12 h-2 bg-gray-200 rounded-sm"></div>
                        </div>
                        <div className="w-6 h-2 bg-blue-500 rounded-full"></div>
                      </div>

                      {/* Contenu */}
                      <div className="flex space-x-2">
                        <div className="w-1/3">
                          <div className="w-full h-3 bg-gray-100 rounded mb-1"></div>
                          <div className="w-full h-20 bg-blue-50 rounded"></div>
                        </div>
                        <div className="w-2/3">
                          <div className="w-full h-3 bg-gray-100 rounded mb-1"></div>
                          <div className="grid grid-cols-2 gap-1">
                            <div className="bg-blue-50 rounded h-4 mb-1"></div>
                            <div className="bg-blue-50 rounded h-4 mb-1"></div>
                            <div className="bg-blue-50 rounded h-4 mb-1"></div>
                            <div className="bg-blue-50 rounded h-4 mb-1"></div>
                            <div className="bg-blue-50 rounded h-4 mb-1"></div>
                            <div className="bg-blue-50 rounded h-4 mb-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Smartphone iOS */}
                  <div className="absolute right-6 bottom-0 w-28 h-52 bg-gray-900 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 z-20">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-800 rounded-b-lg"></div>

                    {/* Écran */}
                    <div className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 p-2">
                      {/* Barre d'état */}
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-[8px] text-white">9:41</div>
                        <div className="flex space-x-1">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                          </svg>
                          <svg
                            className="w-2 h-2 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                          </svg>
                        </div>
                      </div>

                      {/* App UI */}
                      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-1 mb-1">
                        <div className="h-1.5 w-12 bg-white rounded-sm mb-1"></div>
                        <div className="h-1.5 w-16 bg-white bg-opacity-60 rounded-sm"></div>
                      </div>

                      <div className="grid grid-cols-3 gap-1 mt-2">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-md aspect-square flex items-center justify-center"
                          >
                            <div className="w-3 h-3 rounded-sm bg-white bg-opacity-80"></div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom bar */}
                      <div className="absolute bottom-2 left-2 right-2 h-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-around px-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-md bg-white bg-opacity-80"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Smartphone Android */}
                  <div className="absolute left-6 bottom-0 w-28 h-52 bg-gray-900 rounded-xl overflow-hidden shadow-xl border-4 border-gray-800 z-20">
                    {/* Barre de statut Android */}
                    <div className="h-4 bg-gray-800 flex justify-end items-center px-1">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-70"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-70"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-70"></div>
                      </div>
                    </div>

                    {/* Écran */}
                    <div className="h-[calc(100%-16px)] bg-gradient-to-br from-green-500 to-teal-600 p-2">
                      {/* App UI */}
                      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-1 mb-2">
                        <div className="h-1.5 w-14 bg-white rounded-sm"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-1 mb-2">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-md p-1 col-span-2">
                          <div className="h-1.5 w-10 bg-white rounded-sm mb-1"></div>
                          <div className="h-1.5 w-16 bg-white bg-opacity-60 rounded-sm"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-md aspect-square"
                          ></div>
                        ))}
                      </div>

                      {/* Navigation Android */}
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-800 flex items-center justify-around px-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-2 h-2 border-l-2 border-b-2 border-white transform -rotate-45"></div>
                        </div>
                        <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-3 h-3 border-2 border-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bannière de confiance */}
                <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-4 text-white">
                  <div className="flex items-center mb-2">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium">
                      Solutions fiables et personnalisées
                    </span>
                  </div>
                  <p className="text-xs text-white text-opacity-90">
                    Applications multiplateformes IOS, Android et Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white w-full"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
      ></div>
    </section>
  );
};

export default Hero;
