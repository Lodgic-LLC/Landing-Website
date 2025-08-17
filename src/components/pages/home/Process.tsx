'use client'

import React, { useState } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import EstimateModal from './EstimateModal'

export default function Process() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    { name: 'Sites web', hasArrow: true },
    { name: 'Applications mobiles', hasArrow: true },
    { name: 'E-commerce', hasArrow: false },
    { name: 'Gestion de projet', hasArrow: false },
    { name: 'SAAS', hasArrow: false },
    { name: 'Site Vitrine', hasArrow: false },
    { name: 'Maintenance & support', hasArrow: false },
    { name: 'Optimisation SEO', hasArrow: false },
    { name: 'Gestion des données', hasArrow: false },
  ]

  return (
    <section className="py-20 bg-white" id="devis">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bricolage-grotesque-bold text-[#000f45] mb-6">
            Ce que nous{' '}
            <span className="relative">
              <span className="relative z-10">créons</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
            </span>{' '}
            pour vous
          </h2>
          <p className="text-base md:text-lg max-w-4xl mx-auto font-inter text-[#162869]/80 leading-relaxed">
            Nous développons des sites web, des applications mobiles et des outils en ligne qui aident votre entreprise
            à mieux fonctionner et à attirer plus de clients.
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
                <span className="text-sm font-medium  transition-colors duration-300 font-inter-regular">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Estimer mon devis avec flèches */}
        <div className="mt-20 w-full flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Flèche du haut - rotation de 90° pour pointer vers le bas */}
            <img
              src="/images/hand-draw-arrow.png"
              alt=""
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 rotate-90 w-12 h-12 md:w-16 md:h-16 opacity-80"
            />

            {/* Flèche de droite - rotation de 180° pour pointer vers la gauche */}
            <img
              src="/images/hand-draw-arrow.png"
              alt=""
              className="absolute right-[-4rem] md:right-[-5rem] top-1/2 transform -translate-y-1/2 rotate-180 w-12 h-12 md:w-16 md:h-16 opacity-80"
            />

            {/* Flèche du bas - rotation de -90° pour pointer vers le haut */}
            <img
              src="/images/hand-draw-arrow.png"
              alt=""
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 rotate-[-90deg] w-12 h-12 md:w-16 md:h-16 opacity-80"
            />

            {/* Flèche de gauche - rotation de 0° pour pointer vers la droite */}
            <img
              src="/images/hand-draw-arrow.png"
              alt=""
              className="absolute left-[-4rem] md:left-[-5rem] top-1/2 transform -translate-y-1/2 rotate-0 w-12 h-12 md:w-16 md:h-16 opacity-80"
            />

            {/* Bouton principal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block border border-black
              text-black text-lg md:text-xl px-8 py-4 rounded-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-bricolage-grotesque-regular font-bold duration-300 cursor-pointer bg-[#DBFF00] hover:bg-[#c4e600] relative z-10"
            >
              Estimer mon devis en 1 min
            </button>
          </div>
        </div>

        {/* Modal d'estimation */}
        <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}
