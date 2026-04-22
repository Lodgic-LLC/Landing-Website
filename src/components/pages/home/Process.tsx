'use client'

import React from 'react'
import {
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaCloud,
  FaSearch,
  FaArrowRight,
  FaStore,
  FaTools,
  FaDatabase,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface NeedSolution {
  need: string
  solution: string
  description: string
  icon: IconType
}

export default function Process() {
  const mappings: NeedSolution[] = [
    {
      need: "Être visible et asseoir sa crédibilité",
      solution: "Site web sur-mesure",
      description: "Des plateformes vitrines performantes conçues pour valoriser votre image de marque et rassurer vos prospects.",
      icon: FaGlobe
    },
    {
      need: "Vendre ses produits directement en ligne",
      solution: "Plateforme E-commerce",
      description: "Des boutiques connectées, scalables et pensées pour maximiser le taux de conversion de vos visiteurs.",
      icon: FaShoppingCart
    },
    {
      need: "Digitaliser et automatiser son métier",
      solution: "Outils Métier & SAAS",
      description: "Des architectures cloud sur-mesure pour simplifier, sécuriser et moderniser vos processus internes complexes.",
      icon: FaCloud
    },
    {
      need: "Engager fidèlement son audience",
      solution: "Application Mobile",
      description: "Des expériences de poche, fluides et natives, pour rester au plus près des besoins quotidiens de vos utilisateurs.",
      icon: FaMobileAlt
    },
    {
      need: "Attirer un trafic qualifié et régulier",
      solution: "Acquisition & SEO",
      description: "Des fondations techniques solides pour dominer durablement les résultats des moteurs de recherche.",
      icon: FaSearch
    },
  ]

  return (
    <section className="py-24 bg-[#FAFAFA]" id="solutions">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-5 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider">
            De l'enjeu à la solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45] mb-6 text-balance">
            Vos besoins pilotent la{' '}
            <span className="relative">
              <span className="relative z-10">technologie</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0" />
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto font-inter text-[#162869]/80 leading-relaxed">
            Nous traduisons vos défis business en architectures numériques concrètes. Chaque ligne de code a pour fonction de résoudre une problématique métier.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {mappings.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-gray-100 hover:border-[#DBFF00]/50 hover:shadow-[0_8px_30px_rgb(0,31,69,0.06)] transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Ligne d'accentuation dynamique */}
                <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-[#001F45] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom ease-out" />
                
                {/* Bloc "Besoin" (Input) */}
                <div className="flex-1 md:pr-10 relative z-10">
                  <h3 className="text-xl md:text-2xl font-sofia-bold text-[#001F45] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    "{item.need}"
                  </h3>
                  <p className="text-[#162869]/70 font-inter text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {item.description}
                  </p>
                </div>

                {/* Transition / Bridge */}
                <div className="hidden lg:flex shrink-0 items-center justify-center text-gray-200 group-hover:text-[#001F45] transition-colors duration-300">
                  <FaArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
                </div>

                {/* Bloc "Solution" (Output) */}
                <div className="relative z-10 w-full lg:w-[280px] shrink-0">
                  <div className="flex items-center gap-4 bg-gray-50 group-hover:bg-[#DBFF00]/10 rounded-xl p-4 transition-colors duration-300 border border-transparent group-hover:border-[#DBFF00]/20">
                    <div className="flex items-center justify-center min-w-[3rem] h-12 rounded-lg bg-white text-[#001F45] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-inter font-semibold text-[#001F45] text-sm md:text-base leading-tight">
                      {item.solution}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
