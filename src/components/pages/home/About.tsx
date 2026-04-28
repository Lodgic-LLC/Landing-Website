'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaLaptopCode, FaProjectDiagram, FaServer } from 'react-icons/fa'

const services = [
  {
    num: "01",
    title: "Conseil & Conception",
    description: "Nous prenons le temps de comprendre votre métier. Avant d'écrire la moindre ligne de code, nous validons vos besoins et dessinons les plans de votre future application.",
    icon: FaProjectDiagram,
    tags: ["Étude du besoin", "Choix des bons outils", "Maquettes", "Accompagnement"]
  },
  {
    num: "02",
    title: "Développement Sur-Mesure",
    description: "Nous créons des applications rapides, belles et faciles à utiliser. Nous construisons une base technique très solide pour que votre produit puisse évoluer avec votre entreprise.",
    icon: FaLaptopCode,
    tags: ["Interfaces modernes", "Systèmes fiables", "Travail de qualité", "Tests approfondis"]
  },
  {
    num: "03",
    title: "Mise en ligne & Sécurité",
    description: "Nous gérons la publication de votre outil sur internet en toute sécurité. Nous assurons ensuite la surveillance technique pour garantir qu'il reste rapide et protégé 24h/24.",
    icon: FaServer,
    tags: ["Mises à jour fluides", "Hébergement Cloud", "Surveillance continue", "Protection des données"]
  }
]

const About = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  })

  // Léger parallax sur la colonne de gauche
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section className="py-24 bg-[#000F2E] relative overflow-hidden" id="about">
      {/* Lumières de fond pour l'effet "Impressive Tech" */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#DBFF00]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#001F45]/80 rounded-full blur-[120px] -z-10" />

      {/* Grille Interactive de fond */}
      {/* 1. Lignes de la grille (comme dans le Footer) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />
      {/* 2. Cellules interactives au survol */}
      <div 
        className="absolute inset-0 z-0 flex flex-wrap overflow-hidden" 
        style={{ 
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', 
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' 
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 600 }).map((_, i) => (
          <div 
            key={i} 
            className="w-16 h-16 pointer-events-auto hover:bg-[#DBFF00]/15 transition-colors duration-500 ease-out"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pointer-events-none" ref={scrollRef}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Colonne de gauche - Sticky "Manifesto" */}
          <div className="lg:w-5/12 flex flex-col relative z-20 pointer-events-auto">
            <motion.div 
              style={{ y }} 
              className="lg:sticky lg:top-32"
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#DBFF00]/10 text-[#DBFF00] font-inter text-xs font-semibold uppercase tracking-widest border border-[#DBFF00]/20">
                Notre ADN
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-white mb-8 leading-tight">
                Nous bâtissons les systèmes qui feront votre <span className="text-[#DBFF00]">futur.</span>
              </h2>
              
              <p className="text-lg font-inter text-white/60 mb-8 leading-relaxed max-w-md">
                Lodgic allie rigueur technique et vision business. Notre équipe accompagne votre transformation numérique de la page blanche jusqu'à la mise en orbite.
              </p>

              {/* Ligne très minimaliste */}
              <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-8" />

              <div className="grid grid-cols-2 gap-8 max-w-sm">
                <div>
                  <h4 className="text-3xl font-sofia-bold text-white mb-2">100<span className="text-[#DBFF00]">%</span></h4>
                  <p className="text-sm text-white/50 uppercase tracking-wide">Sur-Mesure</p>
                </div>
                <div>
                  <h4 className="text-3xl font-sofia-bold text-white mb-2">&lt;1<span className="text-[#DBFF00]">s</span></h4>
                  <p className="text-sm text-white/50 uppercase tracking-wide">Performances</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Colonne de droite - Scrolling Cards minimalistes */}
          <div className="lg:w-7/12 flex flex-col gap-8 relative z-20 pointer-events-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.7, type: "spring", stiffness: 50 }}
                  className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-colors overflow-hidden"
                >
                  {/* Effet Reveal local (Glow interne) */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBFF00]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-sofia-regular text-white/10 group-hover:text-[#DBFF00]/40 transition-colors duration-500">
                        {service.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-sofia-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#DBFF00]/30 group-hover:bg-[#DBFF00]/10 transition-colors duration-500">
                      <Icon className="text-white/60 group-hover:text-[#DBFF00] w-5 h-5 transition-colors" />
                    </div>
                  </div>

                  <p className="text-white/70 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-2xl relative z-10">
                    {service.description}
                  </p>

                  {/* Ligne très fine de séparation */}
                  <div className="w-full h-px bg-white/5 mb-8 relative">
                    <div className="absolute top-0 left-0 h-full bg-[#DBFF00] w-0 group-hover:w-1/3 transition-all duration-700 ease-out" />
                  </div>

                  <div className="flex flex-wrap gap-3 relative z-10">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-sm font-inter text-white/50 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10 group-hover:text-white/80 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
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
