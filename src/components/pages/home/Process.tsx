'use client'

import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default function Process() {
  const services = [
    { name: "Sites web", hasArrow: true },
    { name: "Applications mobiles", hasArrow: true },
    { name: "E-commerce", hasArrow: false },
    { name: "Gestion de contenu", hasArrow: false },
    { name: "Marketing digital", hasArrow: false },
    { name: "Service client", hasArrow: false },
    { name: "Gestion de projet", hasArrow: false },
    { name: "Maintenance & support", hasArrow: false },
    { name: "Optimisation SEO", hasArrow: false },
    { name: "Gestion des données", hasArrow: false },
    { name: "Formation & accompagnement", hasArrow: false },
    { name: "Analyse & reporting", hasArrow: false },
    { name: "Collaboration & productivité", hasArrow: false }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bricolage-grotesque-regular"> 
            25+ années d'expertise technologique centrée sur l'entreprise
          </h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed font-inter-regular">
            Nous livrons des solutions logicielles d'entreprise qui aident les entreprises à transformer les processus métier clés, maximisant l'efficacité opérationnelle et l'agilité.
          </p>
        </div>

        {/* Services Flexbox */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 px-4 py-6 text-center hover:bg-[#DBFF00] hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-center gap-2">
                <span 
                  className="text-sm font-medium  transition-colors duration-300 font-inter-regular"
                >
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
