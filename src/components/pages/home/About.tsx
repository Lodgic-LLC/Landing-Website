'use client'

import { FaCheckCircle } from 'react-icons/fa'

const About = () => {
  return (
    <>
      <section className="py-10 bg-[#f6f7fc] relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-3 py-1 mb-5 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider">
              Notre Agence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#000f45] mb-6">
              L'expertise technique au service de votre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#001F45]">réussite</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
              </span>{' '}
            </h2>
            <p className="text-lg font-inter text-[#162869]/80 max-w-3xl mx-auto leading-relaxed">
              Lodgic est composée d'experts passionnés par le développement logiciel. Nous allions rigueur technique et compréhension fine de vos enjeux métiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-[#FFFFFF] p-8 md:p-10 border border-gray-200 hover:border-[#000f45]/30 hover:shadow-xl transition-all group">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-8">
                <div className="relative w-16 h-16 mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0 bg-[#001F45]/5 rounded-xl flex items-center justify-center text-[#001F45]">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-sofia-bold text-[#000f45] group-hover:text-[#162869] transition-colors">
                    Direction de Projet & Conseil
                  </h3>
                </div>
              </div>

              <p className="text-[#162869]/80 font-inter mb-8 leading-relaxed text-sm md:text-base">
                Nous analysons vos processus pour concevoir une architecture logicielle adaptée. Notre approche privilégie la viabilité à long terme et le ROI de vos investissements technologiques.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#DBFF00] mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-[#162869] font-inter font-medium text-sm">
                    Analyse des besoins et audit technique approfondi
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#DBFF00] mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-[#162869] font-inter font-medium text-sm">
                    Définition d'architectures scalables et sécurisées
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#DBFF00] mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-[#162869] font-inter font-medium text-sm">
                    Pilotage Agile assurant transparence et respect des délais
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-8 md:p-10 border border-gray-200 hover:border-[#000f45]/30 hover:shadow-xl transition-all group">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-8">
                <div className="relative w-16 h-16 mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0 bg-[#001F45]/5 rounded-xl flex items-center justify-center text-[#001F45]">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-sofia-bold text-[#000f45] group-hover:text-[#162869] transition-colors">
                    Ingénierie Logicielle
                  </h3>
                </div>
              </div>

              <p className="text-[#162869]/80 font-inter mb-8 leading-relaxed text-sm md:text-base">
                Nos développeurs transforment les spécifications en code robuste. Nous appliquons les principes du Clean Code et des tests automatisés pour garantir des applications performantes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#DBFF00] mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-[#162869] font-inter font-medium text-sm">
                    Développement Front-end et Back-end sur-mesure
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#DBFF00] mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-[#162869] font-inter font-medium text-sm">
                    Intégration d'API complexes et systèmes tiers
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#DBFF00] mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-[#162869] font-inter font-medium text-sm">
                    Optimisation des performances et de la sécurité (DevSecOps)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
