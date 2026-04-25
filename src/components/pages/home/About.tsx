'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaSearch, FaProjectDiagram, FaCode, FaRocket } from 'react-icons/fa'

const processSteps = [
  {
    id: '01',
    title: 'Analyse & Stratégie',
    description: 'Compréhension de vos enjeux métiers et définition d’une feuille de route claire pour garantir le ROI de votre investissement.',
    icon: FaSearch,
    features: ['Audit approfondi et expression des besoins', 'Définition des KPIs et modélisation des processus', 'Conception UX/UI centrée utilisateur']
  },
  {
    id: '02',
    title: 'Architecture Technique',
    description: 'Conception de fondations scalables, sécurisées et adaptées à vos ambitions de croissance à long terme.',
    icon: FaProjectDiagram,
    features: ['Design de l’architecture logicielle et données', 'Sélection des technologies les plus pertinentes', 'Planification de la cybersécurité (Security by design)']
  },
  {
    id: '03',
    title: 'Ingénierie & Développement',
    description: 'Transformation des spécifications en code robuste et performant, en appliquant les principes du Clean Code et de l’Agilité.',
    icon: FaCode,
    features: ['Développement Front-end et Back-end sur-mesure', 'Intégration d’API complexes et de systèmes tiers', 'Tests automatisés et revues de code rigoureuses']
  },
  {
    id: '04',
    title: 'Performance & Déploiement',
    description: 'Mise en production sécurisée, optimisation des performances et maintien en conditions opérationnelles.',
    icon: FaRocket,
    features: ['Intégration et déploiement continus (CI/CD)', 'Optimisation SEO technique et Web Performance', 'Monitoring proactif et évolutions continues']
  }
]

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-20 bg-[#FAFAFA] relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-bold uppercase tracking-widest border border-[#001F45]/10">
            Notre Méthodologie
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] mb-8 leading-tight">
            Un parcours maîtrisé,<br />de l'idée au{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-[#001F45]">déploiement</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl font-inter text-[#162869]/70 leading-relaxed">
            Nous transformons vos ambitions en produits digitaux d'excellence à travers un pipeline d'ingénierie rigoureux, transparent et orienté résultats.
          </p>
        </div>

        {/* Timeline Process */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Ligne d'arrière-plan statique */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform md:-translate-x-1/2 z-0 rounded-full" />
          
          {/* Ligne animée (Progression) */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#001F45] to-[#DBFF00] transform md:-translate-x-1/2 z-10 origin-top"
            style={{ height: lineScale }}
          />

          <div className="space-y-16 md:space-y-24 relative z-20">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  
                  {/* Contenu de l'étape */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#001F45]/10 transition-all duration-300 relative group overflow-hidden">
                      
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DBFF00] to-[#001F45] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className={`flex flex-col ${isEven ? 'items-start' : 'items-start md:items-end'} mb-6`}>
                        <span className="text-[#001F45]/20 font-sofia-bold text-5xl mb-2 tracking-tighter">
                          {step.id}
                        </span>
                        <h3 className="text-2xl font-sofia-bold text-[#001F45] group-hover:text-[#162869] transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-[#162869]/70 font-inter text-base mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className={`space-y-3 flex flex-col ${isEven ? 'items-start' : 'items-start md:items-end'}`}>
                        {step.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-start gap-3 w-full ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                            <span className={`block w-1.5 h-1.5 rounded-full bg-[#DBFF00] mt-2 shrink-0 ${!isEven && 'md:order-last'}`} />
                            <span className={`text-sm font-inter text-[#162869]/90 ${!isEven && 'md:text-right'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Nœud Central */}
                  <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-white border-4 border-[#001F45] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,31,69,0.2)]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    >
                      <step.icon className="w-4 h-4 text-[#001F45]" />
                    </motion.div>
                  </div>

                  {/* Espace vide pour l'autre côté (Desktop) */}
                  <div className="hidden md:block w-1/2" />
                  
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
