'use client'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import {
  FaChevronLeft,
  FaChevronRight,
  FaMobile,
  FaPalette,
  FaGlobe,
  FaCogs,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

const serviceImages = [
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
]

interface Service {
  title: string
  shortTitle: string
  description: string
  highlights: string[]
  icon: IconType
  accent: string
}

const services: Service[] = [
  {
    title: 'Applications mobiles',
    shortTitle: 'Mobile',
    description:
      'Nous créons des applications iOS et Android sur mesure, simples à utiliser et adaptées à votre projet.',
    highlights: [
      'Navigation claire et fluide pour vos utilisateurs',
      'Application stable, rapide et agréable au quotidien',
      'Publication et suivi sur App Store et Google Play',
    ],
    icon: FaMobile,
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Sites web',
    shortTitle: 'Web',
    description:
      'Nous réalisons des sites web rapides et responsives, du site vitrine au site avec fonctionnalités avancées.',
    highlights: [
      'Structure claire pour mettre en valeur votre activité',
      'Pages optimisées pour être visibles sur Google',
      'Gestion simple de vos contenus si vous le souhaitez',
    ],
    icon: FaGlobe,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Design',
    shortTitle: 'Design',
    description:
      'Nous créons des interfaces modernes et faciles à comprendre pour offrir une bonne expérience à vos visiteurs.',
    highlights: [
      'Maquettes validées avec vous avant le développement',
      'Design cohérent avec votre image',
      'Affichage lisible sur mobile, tablette et ordinateur',
    ],
    icon: FaPalette,
    accent: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Mise en ligne',
    shortTitle: 'Déploiement',
    description:
      'Nous mettons votre projet en ligne dans de bonnes conditions, de façon fiable et sécurisée.',
    highlights: [
      'Configuration du domaine, de l\u2019hébergement et du certificat SSL',
      'Vérifications avant ouverture au public',
      'Accompagnement après lancement pour un démarrage serein',
    ],
    icon: FaRocket,
    accent: 'from-orange-500 to-red-500',
  },
  {
    title: 'Maintenance',
    shortTitle: 'Support',
    description:
      'Nous assurons le suivi de votre site ou application pour garder un service fiable dans le temps.',
    highlights: [
      'Corrections rapides en cas de souci',
      'Mises à jour régulières de sécurité',
      'Améliorations progressives selon vos besoins',
    ],
    icon: FaCogs,
    accent: 'from-[#001F45] to-[#0b2b63]',
  },
]

const AUTOPLAY_DURATION = 8000

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const images = useMemo(() => {
    const urls = serviceImages.filter(Boolean)
    if (urls.length === 0) {
      return Array(services.length).fill('/images/hero-app-development.jpg') as string[]
    }
    return Array.from({ length: services.length }, (_, i) => urls[i % urls.length] as string)
  }, [])

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
      } catch (error) {
        console.warn("Certaines images n'ont pas pu être préchargées:", error)
      } finally {
        setImagesLoaded(true)
      }
    }
    preloadImages()
  }, [images])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Autoplay avec barre de progression
  useEffect(() => {
    if (isHovered) return

    const startedAt = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - startedAt
      const p = Math.min(elapsed / AUTOPLAY_DURATION, 1)
      setProgress(p)
      if (p >= 1) {
        setCurrentSlide((prev) => (prev + 1) % services.length)
      }
    }, 50)

    return () => clearInterval(tick)
  }, [currentSlide, isHovered])

  useEffect(() => {
    setProgress(0)
  }, [currentSlide])

  const active = services[currentSlide]
  const ActiveIcon = active.icon

  return (
    <section
      className="relative bg-gradient-to-b from-white via-[#f8faff] to-white pt-24 pb-24 overflow-hidden"
      id="services"
    >
      {/* Décor de fond subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff]/60 via-[#c8d9ff]/40 to-transparent blur-3xl" />
        <div className="absolute bottom-20 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-[#DBFF00]/15 via-[#eaf2ff]/40 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-5 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bricolage-grotesque-bold text-[#000f45] mb-6 text-balance">
            Développement d&apos;applications{' '}
            <span className="relative inline-block">
              <span className="relative z-10">web et mobiles</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0" />
            </span>
          </h2>
          <p className="text-base md:text-lg font-inter text-[#162869]/80 leading-relaxed">
            Nous vous accompagnons de l&apos;idée au lancement, puis dans le suivi, avec des solutions simples,
            fiables et adaptées à vos objectifs.
          </p>
        </div>

        {/* Sélecteur de services (tabs) */}
        <div className="mb-6 md:mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isActive = idx === currentSlide
              return (
                <button
                  key={service.title}
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex-shrink-0 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-smooth cursor-pointer ${
                    isActive
                      ? 'bg-[#001F45] border-[#001F45] text-white shadow-soft'
                      : 'bg-white border-gray-200/80 text-[#001F45]/80 hover:border-[#001F45]/30 hover:text-[#001F45]'
                  }`}
                  aria-current={isActive}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-smooth ${
                      isActive ? 'bg-white/15 text-white' : 'bg-[#001F45]/5 text-[#001F45]'
                    }`}
                  >
                    <Icon className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="font-inter text-sm font-semibold whitespace-nowrap">
                    {service.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Card principale */}
        <div
          className="relative overflow-hidden rounded-3xl bg-white border border-gray-200/70 shadow-elevated"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Barre de progression autoplay */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gray-100 z-20">
            <div
              className={`h-full bg-gradient-to-r ${active.accent} transition-[width] duration-100 ease-linear`}
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="grid lg:grid-cols-[1.05fr_1fr] min-h-[540px]">
            {/* Image */}
            <div className="relative overflow-hidden h-72 lg:h-full bg-gray-100">
              {imagesLoaded ? (
                <NextImage
                  key={currentSlide}
                  src={images[currentSlide]}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover animate-[fadeIn_600ms_ease-out]"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
              )}

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001F45]/40 via-transparent to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${active.accent} mix-blend-multiply opacity-10`} />

              {/* Badge numéro */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-soft border border-white/80">
                  <span
                    className={`bg-gradient-to-r ${active.accent} bg-clip-text text-transparent font-bricolage-grotesque-bold text-sm tracking-tight`}
                  >
                    {String(currentSlide + 1).padStart(2, '0')}
                  </span>
                  <span className="font-inter text-[11px] font-semibold text-[#001F45]/80 uppercase tracking-wider">
                    {active.shortTitle}
                  </span>
                </div>
              </div>

            </div>

            {/* Contenu */}
            <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${active.accent} text-white shadow-soft`}
                  >
                    <ActiveIcon className="w-6 h-6" aria-hidden />
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 pointer-events-none" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bricolage-grotesque-bold text-[#001F45] leading-tight">
                    {active.title}
                  </h3>
                </div>

                <p className="text-[#162869]/85 font-inter leading-relaxed text-base md:text-lg mb-7">
                  {active.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {active.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#001F45]/5">
                        <FaCheckCircle className="h-3 w-3 text-[#001F45]" aria-hidden />
                      </span>
                      <span className="text-[#162869] font-inter text-[15px] leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 font-inter font-semibold text-sm text-[#001F45] hover:text-[#0b2b63] transition-smooth"
                >
                  <span className="relative">
                    Discuter de votre projet
                    <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#001F45]/30 group-hover:bg-[#001F45] transition-colors" />
                  </span>
                  <FaArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" aria-hidden />
                </Link>
              </div>

              {/* Footer navigation */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="font-inter text-sm font-medium text-[#001F45]/70 tabular-nums">
                    <span className="text-[#001F45] font-bricolage-grotesque-bold text-lg">
                      {String(currentSlide + 1).padStart(2, '0')}
                    </span>
                    <span className="mx-1.5 text-[#001F45]/30">/</span>
                    {String(services.length).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1.5">
                    {services.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentSlide ? 'w-6 bg-[#001F45]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Aller au service ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    aria-label="Service précédent"
                    onClick={prevSlide}
                    className="h-11 w-11 grid place-items-center rounded-xl border border-gray-200 bg-white text-[#001F45] hover:bg-[#001F45] hover:text-white hover:border-[#001F45] transition-smooth cursor-pointer"
                  >
                    <FaChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    aria-label="Service suivant"
                    onClick={nextSlide}
                    className="h-11 w-11 grid place-items-center rounded-xl border border-gray-200 bg-white text-[#001F45] hover:bg-[#001F45] hover:text-white hover:border-[#001F45] transition-smooth cursor-pointer"
                  >
                    <FaChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </section>
  )
}
