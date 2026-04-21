'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaMobile,
  FaPalette,
  FaGlobe,
  FaCogs,
  FaRocket,
  FaCheckCircle,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Service {
  title: string
  shortTitle: string
  description: string
  highlights: string[]
  icon: IconType
  accent: string
  ringBorderColor: string
}

const services: Service[] = [
  {
    title: 'Ingénierie Logicielle Sur-Mesure',
    shortTitle: 'Software',
    description: 'Développement Back-end et Front-end robuste, scalé pour les hautes performances.',
    highlights: [
      'Architecture Microservices et Serverless',
      'Code maintenable, testé et documenté',
      'Intégrations d\'API',
    ],
    icon: FaCogs,
    accent: 'bg-white text-[#001F45]',
    ringBorderColor: 'border-[#001F45]'
  },
  {
    title: 'Stratégie Web & SaaS',
    shortTitle: 'Web App',
    description: 'Solutions cloud pour digitaliser vos processus internes ou votre offre de services.',
    highlights: [
      'Back-offices et tableaux de bord',
      'Gestion financière SaaS',
      'Infrastructures évolutives',
    ],
    icon: FaGlobe,
    accent: 'bg-white text-[#001F45]',
    ringBorderColor: 'border-[#001F45]'
  },
  {
    title: 'UI/UX Design',
    shortTitle: 'Design',
    description: 'Conception d\'interfaces intuitives, maximisant la productivité métier.',
    highlights: [
      'Design Systems sur-mesure',
      'Tests utilisateurs interactifs',
      'Optimisation des flux',
    ],
    icon: FaPalette,
    accent: 'bg-white text-[#001F45]',
    ringBorderColor: 'border-[#001F45]'
  },
  {
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud',
    description: 'Infrastructures garantissant sécurité, disponibilité et déploiements continus.',
    highlights: [
      'AWS, Azure, GCP',
      'CI/CD automatisé',
      'Monitoring temps réel',
    ],
    icon: FaRocket,
    accent: 'bg-white text-[#001F45]',
    ringBorderColor: 'border-[#001F45]'
  },
  {
    title: 'Mobile Sur-Mesure',
    shortTitle: 'Mobile',
    description: 'Création d\'applications iOS et Android avec une fluidité exceptionnelle.',
    highlights: [
      'React Native et Flutter',
      'Guidelines Apple/Google',
      'Capteurs natifs',
    ],
    icon: FaMobile,
    accent: 'bg-white text-[#001F45]',
    ringBorderColor: 'border-[#001F45]'
  },
]

// Pentagon positions mapping (0 = top, goes clockwise)
// 0: top center
// 1: top right
// 2: bottom right
// 3: bottom left
// 4: top left
const positions = [
  { top: '0%', left: '50%' }, // 0
  { top: '38%', left: '97.5%' }, // 1
  { top: '90.5%', left: '79.4%' }, // 2
  { top: '90.5%', left: '20.6%' }, // 3
  { top: '38%', left: '2.5%' }, // 4
]

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f8faff] to-white pt-24 pb-32 overflow-x-hidden sm:overflow-visible" id="services">
      {/* Background Decor strictly contained */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff]/60 via-[#c8d9ff]/40 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-20 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-[#DBFF00]/15 via-[#eaf2ff]/40 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        
        {/* Left Side: Title & Info */}
        <div className="lg:w-1/2 text-center lg:text-left z-10 pt-10">
          <span className="inline-block px-3 py-1 mb-5 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider">
            Notre Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#000f45] mb-6 text-balance">
            Une galaxie de {' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#001F45]">talents</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#0EA5E9]/50 to-[#0EA5E9]/10 transform -skew-x-12 z-0" />
            </span>
          </h2>
          <p className="text-base md:text-lg font-inter text-[#162869]/80 leading-relaxed">
            Applications web et mobiles, interfaces UI/UX et architectures cloud : nous concevons des solutions logicielles sur-mesure, pensées pour accélérer votre transition digitale et soutenir vos ambitions.
          </p>
        </div>

        {/* Right Side: Pentagon interactive map */}
        <div className="lg:w-1/2 w-full flex justify-center py-10 relative">
          
          {/* Constrain pentagon size carefully on mobile vs desktop */}
          <div className="relative w-full max-w-[320px] aspect-square mx-auto md:max-w-[400px]">
            
            {/* Pentagon lines (connect the dots) */}
            <svg className="absolute inset-0 w-full h-full text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon 
                points="50,0 97.5,38 79.4,90.5 20.6,90.5 2.5,38" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                strokeDasharray="2 2"
              />
              {/* Optional: lines to center */}
              <line x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 2"/>
              <line x1="50" y1="50" x2="97.5" y2="38" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 2"/>
              <line x1="50" y1="50" x2="79.4" y2="90.5" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 2"/>
              <line x1="50" y1="50" x2="20.6" y2="90.5" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 2"/>
              <line x1="50" y1="50" x2="2.5" y2="38" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 2"/>
            </svg>

            {/* Central anchor node (static) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 z-10 transition-transform duration-500 hover:scale-110">
              <span className="font-sofia-bold text-[#001F45] text-lg">Lodgic</span>
            </div>

            {/* 5 Nodes */}
            {services.map((svc, idx) => {
              const Icon = svc.icon
              const isHovered = hoveredIdx === idx
              const pos = positions[idx]
              
              // Smart positioning to avoid overflow on left/right/top/bottom
              const popupClass = 
                idx === 0 ? "top-[120%] left-1/2 -translate-x-1/2 origin-top" : 
                idx === 1 ? "top-[120%] right-0 md:top-1/2 md:right-[150%] md:-translate-y-1/2 md:origin-right origin-top-right whitespace-normal" : 
                idx === 2 ? "bottom-[120%] -right-4 sm:-right-8 md:bottom-[70%] md:right-[120%] origin-bottom-right" : 
                idx === 3 ? "bottom-[120%] -left-4 sm:-left-8 md:bottom-[70%] md:left-[120%] origin-bottom-left" : 
                "top-[120%] left-0 md:top-1/2 md:left-[150%] md:-translate-y-1/2 md:origin-left origin-top-left" 
              
              return (
                <div 
                  key={svc.title}
                  className={`absolute group ${isHovered ? 'z-50' : 'z-20'}`}
                  style={{ top: pos.top, left: pos.left }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setHoveredIdx(isHovered ? null : idx)} // Tap support for mobile
                >
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    
                    {/* The Node Icon Bubble Wrapper */}
                    <div className="relative">
                      {/* Pulsation loop to encourage clicking */}
                      {!isHovered && (
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-60 border-2 ${svc.ringBorderColor}`} style={{ animationDuration: '2.5s' }}></div>
                      )}
                      
                      {/* The Node Icon Bubble */}
                      <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full ${svc.accent} flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 border-4 border-white ${isHovered ? 'scale-110 ring-4' : 'hover:scale-105 ring-0'} ${svc.ringBorderColor}`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                    </div>

                    {/* Pop-up Card */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
                          transition={{ duration: 0.2 }}
                          className={`absolute ${popupClass} w-[250px] sm:w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_15px_40px_rgba(0,31,69,0.12)] border border-gray-100 p-4 sm:p-5 pointer-events-none sm:pointer-events-auto z-50`}
                        >
                          {/* Caret indicating direction (optional, can be complex in CSS, skipped here for clean look) */}
                          
                          <div className={`w-10 h-10 rounded-xl ${svc.accent} flex items-center justify-center shadow-sm mb-4`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <h4 className="font-sofia-bold text-[#001F45] text-lg leading-tight mb-2">
                            {svc.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed font-inter">
                            {svc.description}
                          </p>

                          <ul className="space-y-2">
                            {svc.highlights.map((hlt) => (
                              <li key={hlt} className="flex items-start gap-2 text-xs text-gray-700 font-inter">
                                <FaCheckCircle className="w-3.5 h-3.5 mt-0.5 text-[#0EA5E9] flex-shrink-0" />
                                <span>{hlt}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
