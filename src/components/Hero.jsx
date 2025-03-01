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
          className="w-full md:w-1/2 flex justify-center relative scale-90"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Cercles décoratifs */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-200 opacity-20 -top-10 -right-10 animate-pulse-slow"></div>
          <div className="absolute w-56 h-56 rounded-full bg-indigo-300 opacity-20 bottom-10 -left-10 animate-pulse-slow animation-delay-2000"></div>

          <div className="relative w-full max-w-lg z-10">
            {/* Fond avec effet de profondeur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl transform rotate-1 translate-x-1 translate-y-1 opacity-40"></div>

            {/* Contenu de l'illustration */}
            <div className="relative bg-white rounded-xl p-6 shadow-xl overflow-hidden border border-gray-100">
              {/* Illustration professionnelle orientée mobile */}
              <div className="flex flex-col items-center">
                {/* Titre de l'app */}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-inter-bold text-gray-900">
                    Développement d'Applications
                  </h3>
                  <div className="flex justify-center items-center mt-2 space-x-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      iOS
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                      Android
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium">
                      Web
                    </span>
                  </div>
                </div>

                {/* Conteneur principal des dispositifs */}
                <div className="relative w-full h-80 mb-6">
                  {/* Écran d'ordinateur en arrière-plan */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-[90%] h-48 bg-gray-800 rounded-lg p-3 shadow-xl z-0">
                    {/* Barre d'adresse */}
                    <div className="flex items-center mb-2 bg-gray-700 rounded-md px-2 py-1">
                      <div className="flex space-x-1 mr-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs text-gray-300 font-mono flex-grow text-center">
                        www.lodgic-dev.com
                      </div>
                    </div>

                    {/* Interface web */}
                    <div className="bg-white rounded-md p-2 h-32">
                      {/* Navigation */}
                      <div className="flex justify-between items-center mb-3 border-b pb-2">
                        <div className="flex space-x-2">
                          <div className="w-16 h-3 bg-blue-500 rounded-sm"></div>
                          <div className="w-16 h-3 bg-gray-200 rounded-sm"></div>
                          <div className="w-16 h-3 bg-gray-200 rounded-sm"></div>
                        </div>
                        <div className="w-6 h-3 bg-blue-500 rounded-full"></div>
                      </div>

                      {/* Contenu */}
                      <div className="flex space-x-3">
                        <div className="w-1/3">
                          <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                          <div className="w-full h-16 bg-blue-50 rounded"></div>
                        </div>
                        <div className="w-2/3">
                          <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-50 rounded h-7"></div>
                            <div className="bg-blue-50 rounded h-7"></div>
                            <div className="bg-blue-50 rounded h-7"></div>
                            <div className="bg-blue-50 rounded h-7"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dispositifs mobiles - modifiés pour ressembler à des iPhones */}
                  <div className="absolute left-1/2 top-32 transform -translate-x-1/2 flex justify-center items-end space-x-12 z-10">
                    {/* iPhone principal */}
                    <div className="w-36 h-64 bg-gray-800 rounded-3xl overflow-hidden shadow-xl border-8 border-gray-700 flex flex-col transform -rotate-6">
                      {/* Encoche iPhone */}
                      <div className="h-6 bg-black relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-6 bg-black rounded-b-xl"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-10 h-2 bg-gray-900 rounded-lg"></div>
                      </div>
                      <div className="flex-grow bg-gradient-to-br from-blue-500 to-blue-600 p-2 relative">
                        {/* Interface iOS */}
                        <div className="absolute top-2 left-2 right-2 h-8 bg-white bg-opacity-90 rounded-lg flex items-center px-2">
                          <div className="w-full h-3 bg-blue-200 rounded-full"></div>
                        </div>

                        <div className="mt-12 grid grid-cols-4 gap-2">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-white bg-opacity-80 rounded-xl aspect-square flex items-center justify-center"
                            >
                              <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Dock iOS */}
                        <div className="absolute bottom-2 left-2 right-2 h-12 bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl flex items-center justify-around px-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-10 h-10 rounded-xl bg-white bg-opacity-80 flex items-center justify-center"
                            >
                              <div
                                className="w-5 h-5 rounded-md"
                                style={{
                                  backgroundColor: [
                                    "#3b82f6",
                                    "#ef4444",
                                    "#10b981",
                                    "#8b5cf6",
                                  ][i],
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* iPhone secondaire */}
                    <div className="w-36 h-64 bg-gray-800 rounded-3xl overflow-hidden shadow-xl border-8 border-gray-700 flex flex-col transform rotate-6">
                      {/* Encoche iPhone */}
                      <div className="h-6 bg-black relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-6 bg-black rounded-b-xl"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-10 h-2 bg-gray-900 rounded-lg"></div>
                      </div>
                      <div className="flex-grow bg-gradient-to-br from-indigo-500 to-purple-600 p-2 relative">
                        {/* Interface iOS - écran d'accueil alternatif */}
                        <div className="absolute top-2 left-2 right-2 h-6 flex justify-between items-center">
                          <div className="text-xs text-white font-medium">
                            9:41
                          </div>
                          <div className="flex space-x-1">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                            </svg>
                          </div>
                        </div>

                        {/* Widgets iOS */}
                        <div className="mt-10 space-y-2">
                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-2">
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-xs font-medium text-white">
                                Météo
                              </div>
                              <div className="text-xs text-white">21°</div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-[10px] text-white opacity-80">
                                Paris
                              </div>
                              <svg
                                className="w-4 h-4 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <circle cx="12" cy="12" r="5" />
                              </svg>
                            </div>
                          </div>

                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-2">
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-xs font-medium text-white">
                                Calendrier
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <div className="text-[10px] text-white opacity-80">
                                Réunion: 14:00
                              </div>
                            </div>
                          </div>

                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-2">
                            <div className="flex items-center justify-between mb-1">
                              <div className="text-xs font-medium text-white">
                                Activité
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-full h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                                <div className="h-full bg-green-400 w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Dock iOS */}
                        <div className="absolute bottom-2 left-2 right-2 h-12 bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl flex items-center justify-around px-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-10 h-10 rounded-xl bg-white bg-opacity-80 flex items-center justify-center"
                            >
                              <div
                                className="w-5 h-5 rounded-md"
                                style={{
                                  backgroundColor: [
                                    "#8b5cf6",
                                    "#10b981",
                                    "#ef4444",
                                    "#3b82f6",
                                  ][i],
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>

                {/* Caractéristiques avec nouvelles icônes et textes */}
                <div className="w-full grid grid-cols-3 gap-4 mb-8 mt-2">
                  {/* Icône iOS avec texte */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7101 19.5C17.8801 20.74 17.0001 22 15.6601 22C14.3201 22 13.8901 21.15 12.3301 21.15C10.7701 21.15 10.3001 22 9.00009 22C7.70009 22 6.80009 20.8 5.90009 19.5C4.00009 17 2.60009 12.45 4.50009 9.39C5.40009 7.85 7.00009 6.8 8.70009 6.8C10.1001 6.8 11.5001 7.65 12.4401 7.65C13.3901 7.65 15.0001 6.7 16.6001 6.7C18.1001 6.7 19.6001 7.55 20.5001 8.9C17.4001 10.5 18.0001 15.05 21.1001 16C20.3001 17.45 19.5001 18.75 18.7101 19.5Z"
                          fill="#3B82F6"
                        />
                        <path
                          d="M12.5 3.00001C12.82 4.20001 12.14 5.40001 11.14 6.20001C10.14 7.00001 8.84 7.50001 8.12 7.40001C7.76 6.20001 8.50 5.00001 9.44 4.30001C10.38 3.60001 11.68 3.10001 12.5 3.00001Z"
                          fill="#3B82F6"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-blue-700">
                      iOS
                    </span>
                  </div>

                  {/* Icône Android avec texte */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5239 15.5239V8.47613C17.5239 7.82424 17.0046 7.30487 16.3527 7.30487H7.64729C6.99541 7.30487 6.47604 7.82424 6.47604 8.47613V15.5239C6.47604 16.1758 6.99541 16.6951 7.64729 16.6951H16.3527C17.0046 16.6951 17.5239 16.1758 17.5239 15.5239Z"
                          fill="#10B981"
                        />
                        <path
                          d="M5.30487 9.64729V14.3527C5.30487 14.6787 5.04087 14.9427 4.71487 14.9427C4.38887 14.9427 4.12488 14.6787 4.12488 14.3527V9.64729C4.12488 9.32129 4.38887 9.0573 4.71487 9.0573C5.04087 9.0573 5.30487 9.32129 5.30487 9.64729Z"
                          fill="#10B981"
                        />
                        <path
                          d="M19.8751 9.64729V14.3527C19.8751 14.6787 19.6111 14.9427 19.2851 14.9427C18.9591 14.9427 18.6951 14.6787 18.6951 14.3527V9.64729C18.6951 9.32129 18.9591 9.0573 19.2851 9.0573C19.6111 9.0573 19.8751 9.32129 19.8751 9.64729Z"
                          fill="#10B981"
                        />
                        <path
                          d="M9.41681 4.7144L10.1328 5.43039C10.3608 5.65839 10.3608 6.02239 10.1328 6.25039C10.0188 6.36439 9.87281 6.42139 9.72681 6.42139C9.58081 6.42139 9.43481 6.36439 9.32081 6.25039L8.48081 5.41039C8.25281 5.18239 8.25281 4.81839 8.48081 4.59039C8.70881 4.36239 9.07281 4.36239 9.30081 4.59039H9.41681V4.7144Z"
                          fill="#10B981"
                        />
                        <path
                          d="M14.6792 6.25039C14.5652 6.36439 14.4192 6.42139 14.2732 6.42139C14.1272 6.42139 13.9812 6.36439 13.8672 6.25039C13.6392 6.02239 13.6392 5.65839 13.8672 5.43039L14.5832 4.7144V4.59039C14.8112 4.36239 15.1752 4.36239 15.4032 4.59039C15.6312 4.81839 15.6312 5.18239 15.4032 5.41039L14.6792 6.25039Z"
                          fill="#10B981"
                        />
                        <path
                          d="M12 19.0573C12.326 19.0573 12.59 19.3213 12.59 19.6473V21.4143C12.59 21.7403 12.326 22.0043 12 22.0043C11.674 22.0043 11.41 21.7403 11.41 21.4143V19.6473C11.41 19.3213 11.674 19.0573 12 19.0573Z"
                          fill="#10B981"
                        />
                        <path
                          d="M8.47613 19.0573C8.80213 19.0573 9.06613 19.3213 9.06613 19.6473V21.4143C9.06613 21.7403 8.80213 22.0043 8.47613 22.0043C8.15013 22.0043 7.88613 21.7403 7.88613 21.4143V19.6473C7.88613 19.3213 8.15013 19.0573 8.47613 19.0573Z"
                          fill="#10B981"
                        />
                        <path
                          d="M15.5239 19.0573C15.8499 19.0573 16.1139 19.3213 16.1139 19.6473V21.4143C16.1139 21.7403 15.8499 22.0043 15.5239 22.0043C15.1979 22.0043 14.9339 21.7403 14.9339 21.4143V19.6473C14.9339 19.3213 15.1979 19.0573 15.5239 19.0573Z"
                          fill="#10B981"
                        />
                        <path
                          d="M12 2C14.4853 2 16.5 4.01472 16.5 6.5V6.75H7.5V6.5C7.5 4.01472 9.51472 2 12 2Z"
                          fill="#10B981"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-green-700">
                      Android
                    </span>
                  </div>

                  {/* Icône Web avec texte */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#6366F1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12H22"
                          stroke="#6366F1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                          stroke="#6366F1"
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

                {/* Indicateurs de performance */}
                <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span className="font-medium">
                        De l'idée à la réalisation
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-white text-opacity-90 mb-2">
                    Applications sur mesure pour tous les appareils
                  </p>
                  <div className="flex justify-between text-xs">
                    <span>iOS</span>
                    <span>Android</span>
                    <span>Web</span>
                  </div>
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
