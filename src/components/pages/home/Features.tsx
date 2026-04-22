'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiTarget,
  FiPenTool,
  FiCode,
  FiServer,
  FiRefreshCw
} from 'react-icons/fi'

const steps = [
  {
    id: '01',
    title: 'Stratégie & Idéation',
    description: "Analyse de marché, définition des objectifs et feuille de route claire pour un produit viable et centré sur l'utilisateur.",
    icon: FiTarget,
    pos: { left: '50%', top: '10%' },
    labelPos: 'bottom-[130%] left-1/2 -translate-x-1/2 text-center'
  },
  {
    id: '02',
    title: 'Conception UI/UX',
    description: "Création de maquettes interactives et de parcours utilisateurs itératifs pour maximiser l'engagement et fluidifier l'expérience.",
    icon: FiPenTool,
    pos: { left: '88%', top: '38%' },
    labelPos: 'left-[130%] top-1/2 -translate-y-1/2 text-left'
  },
  {
    id: '03',
    title: 'Ingénierie & Code',
    description: "Développement robuste en architectures modernes (Microservices, Serverless) garantissant scalabilité et haute performance.",
    icon: FiCode,
    pos: { left: '73.5%', top: '82.4%' },
    labelPos: 'top-[130%] left-1/2 -translate-x-1/2 text-center'
  },
  {
    id: '04',
    title: 'Déploiement Cloud',
    description: "Mise en production automatisée (CI/CD) sur des infrastructures sécurisées et hautement disponibles.",
    icon: FiServer,
    pos: { left: '26.5%', top: '82.4%' },
    labelPos: 'top-[130%] left-1/2 -translate-x-1/2 text-center'
  },
  {
    id: '05',
    title: 'Évolution Continue',
    description: "Analyse des données analytiques, itérations et mises à jour constantes pour faire grandir et optimiser votre produit jour après jour.",
    icon: FiRefreshCw,
    pos: { left: '12%', top: '38%' },
    labelPos: 'right-[130%] top-1/2 -translate-y-1/2 text-right'
  }
]

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] overflow-hidden" id="expertises">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Context & Active Step Details */}
          <div className="lg:w-5/12 w-full flex flex-col pt-10">
            <span className="text-[#0EA5E9] font-sofia-bold uppercase tracking-wider text-sm mb-3 block">
              Cycle de vie produit
            </span>
            <h2 className="text-3xl md:text-5xl font-sofia-bold text-[#001F45] mb-6 leading-tight">
              Un produit vivant, en amélioration <span className="relative inline-block text-[#001F45]">
                constante
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#0EA5E9]/20 transform -skew-x-12 -z-10" />
              </span>.
            </h2>
            <p className="text-lg font-inter text-[#162869]/70 mb-10 leading-relaxed">
              Nous ne livrons pas de simples "projets". Nous concevons des plateformes technologiques pensées pour évoluer, s'adapter et grandir avec votre entreprise.
            </p>

            {/* Active Step Panel */}
            <div className="relative bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,31,69,0.06)] border border-gray-100 min-h-[220px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-sofia-bold text-[#0EA5E9]/20">
                      {steps[activeIdx].id}
                    </span>
                    <h3 className="text-2xl font-sofia-bold text-[#001F45]">
                      {steps[activeIdx].title}
                    </h3>
                  </div>
                  <p className="text-[#162869]/80 font-inter text-base md:text-lg leading-relaxed">
                    {steps[activeIdx].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Circular Interactive Map */}
          <div className="lg:w-7/12 w-full flex justify-center items-center py-10 relative">
            <div 
              className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              {/* Outer Orbit Track */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-gray-200 animate-[spin_40s_linear_infinite]" />
              
              {/* Active Orbit Glow */}
              <div className="absolute inset-8 rounded-full border-2 border-transparent">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <motion.circle 
                    cx="50" 
                    cy="50" 
                    r="49" 
                    fill="none" 
                    stroke="#0EA5E9" 
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 400" }}
                    animate={{ strokeDasharray: `${(activeIdx + 1) * 61} 400` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="opacity-50"
                  />
                </svg>
              </div>

              {/* Center Abstract Graphic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-tr from-[#F8FAFC] to-[#E0F2FE] flex items-center justify-center shadow-inner z-0">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-100">
                  <motion.div
                    key={activeIdx}
                    initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.4 }}
                  >
                    {React.createElement(steps[activeIdx].icon, { className: "w-8 h-8 text-[#0EA5E9]" })}
                  </motion.div>
                </div>
              </div>

              {/* The 5 Nodes on the Orbit */}
              {steps.map((step, idx) => {
                const Icon = step.icon
                const isActive = activeIdx === idx
                
                return (
                  <div
                    key={step.id}
                    className="absolute z-10"
                    style={{ left: step.pos.left, top: step.pos.top }}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group cursor-pointer" onClick={() => setActiveIdx(idx)}>
                      
                      {/* Active ping ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-[#0EA5E9] animate-ping opacity-30" style={{ animationDuration: '2s' }}></div>
                      )}
                      
                      {/* Node Circle */}
                      <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg border-4 transition-all duration-500 ${
                        isActive 
                          ? 'bg-[#0EA5E9] border-white scale-125 z-50 text-white' 
                          : 'bg-white border-gray-100 text-[#001F45] hover:border-[#0EA5E9] hover:scale-110'
                      }`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>

                      {/* Desktop Labels (Floating near nodes) */}
                      <div className={`absolute hidden md:block w-32 px-2 ${step.labelPos} transition-opacity duration-300 ${
                        isActive ? 'opacity-100 font-sofia-bold' : 'opacity-40 font-inter group-hover:opacity-80'
                      }`}>
                        <span className={`text-sm ${isActive ? 'text-[#0EA5E9]' : 'text-[#001F45]'}`}>
                          {step.title}
                        </span>
                      </div>

                    </div>
                  </div>
                )
              })}

            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
