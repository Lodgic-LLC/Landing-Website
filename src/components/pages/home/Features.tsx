'use client'
import React, { useState, useEffect, useMemo } from 'react'
import NextImage from 'next/image'
import { FaChevronLeft, FaChevronRight, FaMobile, FaServer, FaPalette, FaGlobe, FaCogs, FaRocket } from 'react-icons/fa'
import { blogPosts } from '@/data/blog/posts'

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const services = [
    {
      title: "Développement d'applications mobiles",
      description:
        'Nous créons des applications mobiles innovantes, évolutives et sécurisées, parfaitement alignées avec la vision de votre entreprise et vos objectifs commerciaux.',
      icon: FaMobile,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
    },
    {
      title: 'Développement de sites web',
      description:
        'Création de sites web modernes, responsives et optimisés SEO, allant des sites vitrines aux applications web complexes avec des technologies de pointe.',
      icon: FaGlobe,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    },
    {
      title: 'UI/UX design',
      description:
        "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur exceptionnelles pour vos applications.",
      icon: FaPalette,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
    },
    {
      title: 'Maintenance',
      description:
        'Services de maintenance continue, mises à jour et optimisation de vos applications pour garantir leur performance et leur fiabilité dans le temps.',
      icon: FaCogs,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50'
    },
    {
      title: 'Déploiement',
      description:
        'Déploiement sécurisé et automatisé de vos applications avec des pratiques DevOps modernes pour un lancement rapide et fiable.',
      icon: FaRocket,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    },

 
  ]

  const images = useMemo(() => {
    const urls = blogPosts.map((post) => post.imageUrl).filter(Boolean)

    if (urls.length === 0) {
      return Array(services.length).fill('/images/hero-app-development.jpg') as string[]
    }

    const result: string[] = []
    for (let index = 0; index < services.length; index += 1) {
      result.push(urls[index % urls.length] as string)
    }
    return result
  }, [services.length])

  // Préchargement des images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.warn("Certaines images n'ont pas pu être préchargées:", error)
        setImagesLoaded(true)
      }
    }

    preloadImages()
  }, [images])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 pb-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bricolage-grotesque-bold text-[#000f45] mb-6">
            Développement d'applications{' '}
            <span className="relative">
              <span className="relative z-10">web et mobiles</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
            </span>
          </h2>
          
          <p className="text-base md:text-lg max-w-4xl mx-auto font-inter text-[#162869]/80 leading-relaxed">
            Nous servons en tant que partenaire technologique de bout en bout, offrant des solutions logicielles de haute
            qualité en nous appuyant sur une expertise technique approfondie et une compréhension profonde du domaine
            commercial.
          </p>
        </div>

        {/* Services Grid - Hidden on mobile */}
            

        {/* Section détaillée du service actif - Full width on mobile */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Image */}
            <div className="relative overflow-hidden h-64 lg:h-full">
              {imagesLoaded ? (
                <NextImage
                  src={images[currentSlide]}
                  alt={services[currentSlide].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                  <span className="text-gray-500">Chargement...</span>
                </div>
              )}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Contenu détaillé */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${services[currentSlide].color} text-white flex-shrink-0`}>
                    {React.createElement(services[currentSlide].icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bricolage-grotesque-bold text-[#001F45]">
                    {services[currentSlide].title}
                  </h3>
                </div>
                
                <p className="text-[#162869]/80 font-inter leading-relaxed text-lg mb-8">
                  {services[currentSlide].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-inter text-[#162869]/60">
                    {currentSlide + 1} / {services.length}
                  </span>
                  <div className="flex gap-2">
                    {services.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentSlide 
                            ? 'bg-[#001F45] scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Aller au service ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    aria-label="Précédent"
                    onClick={prevSlide}
                    className="h-12 w-12 grid place-items-center rounded-xl bg-gray-100 hover:bg-[#001F45] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    aria-label="Suivant"
                    onClick={nextSlide}
                    className="h-12 w-12 grid place-items-center rounded-xl bg-gray-100 hover:bg-[#001F45] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
