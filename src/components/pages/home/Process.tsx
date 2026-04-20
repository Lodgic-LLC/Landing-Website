'use client'

import React from 'react'
import {
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaCloud,
  FaStore,
  FaTools,
  FaSearch,
  FaDatabase,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Service {
  name: string
  icon: IconType
}

export default function Process() {
  const services: Service[] = [
    { name: 'Sites web', icon: FaGlobe },
    { name: 'Applications mobiles', icon: FaMobileAlt },
    { name: 'E-commerce', icon: FaShoppingCart },
    { name: 'SAAS', icon: FaCloud },
    { name: 'Site vitrine', icon: FaStore },
    { name: 'Maintenance & support', icon: FaTools },
    { name: 'Optimisation SEO', icon: FaSearch },
    { name: 'Gestion des données', icon: FaDatabase },
  ]

  return (
    <section className="py-24 bg-white" id="devis">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-5 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bricolage-grotesque-bold text-[#000f45] mb-6 text-balance">
            Ce que nous{' '}
            <span className="relative">
              <span className="relative z-10">créons</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0" />
            </span>{' '}
            pour vous
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto font-inter text-[#162869]/80 leading-relaxed">
            Sites web, applications mobiles et outils sur mesure pour vous aider à concrétiser votre projet
            et à développer votre activité.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-200/80 bg-white hover:border-[#001F45]/20 hover:shadow-soft transition-smooth cursor-pointer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#001F45]/5 text-[#001F45] group-hover:bg-[#DBFF00] group-hover:text-[#001F45] transition-smooth">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="font-inter font-semibold text-[#001F45] text-sm md:text-base leading-snug">
                  {service.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
