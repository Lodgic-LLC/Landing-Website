'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaCode, FaRocket } from 'react-icons/fa'

const About = () => {
  return (
    <>
      <section className="py-24 bg-[#f6f7fc] relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-5 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider"
            >
              Notre Agence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#000f45] mb-6"
            >
              L'expertise technique au service de votre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#001F45]">réussite</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
              </span>{' '}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-inter text-[#162869]/80 max-w-3xl mx-auto leading-relaxed"
            >
              Lodgic est composée d'experts passionnés par le développement logiciel. Nous allions rigueur technique et compréhension fine de vos enjeux métiers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-auto md:auto-rows-[340px]">
            
            {/* TUILE 1 : Principale (Grande) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-[#001F45] rounded-[2rem] p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between shadow-xl"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DBFF00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#DBFF00] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(219,255,0,0.3)]">
                  <FaCode className="w-6 h-6 text-[#001F45]" />
                </div>
                <h3 className="text-3xl md:text-5xl font-sofia-bold text-white mb-6 leading-tight">
                  Ingénierie Logicielle <br className="hidden md:block" />Sur-Mesure
                </h3>
                <p className="text-white/80 font-inter text-lg max-w-xl mb-10 leading-relaxed mix-blend-lighten">
                  Notre cœur de métier. Nous transformons vos spécifications en code robuste, scalable et maintenable. Du front-end pixel-perfect interactif au back-end ultra-performant.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10 mt-auto bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                {[
                  "Architectures Web & Cloud",
                  "Méthodologie Clean Code",
                  "APIs & Microservices",
                  "Interfaces immersives modernes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-white/90">
                    <FaCheckCircle className="text-[#DBFF00] mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TUILE 2 : Stratégie (Petite, haut droite) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 md:row-span-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              <div className="w-12 h-12 bg-[#001F45]/5 rounded-xl flex items-center justify-center mb-6 text-[#001F45] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#001F45] group-hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-sofia-bold text-[#001F45] mb-4">
                Direction de Projet & Stratégie
              </h3>
              <p className="text-[#162869]/70 font-inter text-sm md:text-base leading-relaxed">
                Analyse détaillée de vos besoins, audit SI et pilotage Agile. Nous posons les fondations stratégiques pour garantir le ROI et la viabilité à long terme de votre produit.
              </p>
              
              <div className="mt-auto pt-6">
                <div className="h-1 w-12 bg-[#DBFF00] rounded-full group-hover:w-full transition-all duration-500 delay-100" />
              </div>
            </motion.div>

            {/* TUILE 3 : Performance (Petite, bas droite) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#f0f2f9] to-[#ffffff] rounded-[2rem] p-8 border border-white hover:border-[#DBFF00]/50 transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-[#001F45] shadow-sm group-hover:scale-110 transition-transform duration-500">
                <FaRocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-sofia-bold text-[#001F45] mb-4">
                Performance & DevSecOps
              </h3>
              <p className="text-[#162869]/70 font-inter text-sm md:text-base leading-relaxed">
                Optimisation constante des temps de réponse, sécurité par design dès l'architecture et déploiements automatisés sans couture avec le cloud.
              </p>
              
              <div className="mt-auto pt-6 flex gap-2">
                <span className="px-3 py-1 bg-[#001F45]/5 text-[#001F45] text-xs font-semibold rounded-lg">CI/CD</span>
                <span className="px-3 py-1 bg-[#001F45]/5 text-[#001F45] text-xs font-semibold rounded-lg">Cloud</span>
                <span className="px-3 py-1 bg-[#001F45]/5 text-[#001F45] text-xs font-semibold rounded-lg">Sécurité</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
