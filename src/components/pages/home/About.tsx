'use client'

import { FaCheckCircle, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { blogPosts } from '@/data/blog/posts'
import Link from 'next/link'
import { useState, useRef } from 'react'

const About = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const projectsScrollRef = useRef<HTMLDivElement>(null)

  // Fonctions pour le carousel de projets
  const scrollToProject = (direction: 'left' | 'right') => {
    if (projectsScrollRef.current) {
      const cardWidth = 320 // largeur approximative d'une carte + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      projectsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const nextProject = () => {
    scrollToProject('right')
    setCurrentProjectIndex((prev) => Math.min(prev + 1, blogPosts.length - 1))
  }

  const prevProject = () => {
    scrollToProject('left')
    setCurrentProjectIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <>
      <section className="py-10 bg-[#f6f7fc] relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bricolage-grotesque-bold text-[#000f45] mb-4">
              Qui{' '}
              <span className="relative">
                <span className="relative z-10">sommes-nous</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
              </span>{' '}
              ?
            </h2>
            <p className="text-lg font-inter text-[#162869] max-w-3xl mx-auto leading-relaxed">
              Une équipe à taille humaine, proche de vous et de vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-[#FFFFFF] p-6 md:p-8 border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group cursor-pointer">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6">
                <div className="relative w-20 h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#000f45]/80 to-[#162869]/60 group-hover:from-[#000f45] group-hover:to-[#162869]/70 transition-all duration-300 shadow-md"></div>
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#000f45] transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bricolage-grotesque-bold text-[#000f45] group-hover:text-[#162869] transition-colors">
                    Yann Rouquie
                  </h3>
                  <p className="text-[#162869] font-inter font-medium">Relation client et webdesigner</p>
                </div>
              </div>

              <p className="text-[#162869] font-inter mb-6 leading-relaxed text-sm sm:text-base">
                <span className="md:hidden">
                  Votre interlocuteur privilégié pour comprendre vos besoins et assurer le suivi de votre projet.
                </span>
                <span className="hidden md:inline">
                  Yann est votre interlocuteur tout au long du projet. Il analyse vos besoins,
                   et assure un suivi personnalisé pour garantir que votre application soit parfaitement adaptée à vos besoins.
                </span>
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Conseils et suivi de votre projet
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Validation du cahier des charges avant développement
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Présentation des maquettes et des fonctionnalités
                  </span>
                </div>
              </div>
            </div>

            {/* Mathéo Katbie */}
            <div className="bg-[#FFFFFF] p-6 md:p-8 border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group cursor-pointer">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6">
                <div className="relative w-20 h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#000f45]/80 to-[#162869]/60 group-hover:from-[#000f45] group-hover:to-[#162869]/70 transition-all duration-300 shadow-md"></div>
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#000f45] transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bricolage-grotesque-bold text-[#000f45] group-hover:text-[#162869] transition-colors">
                    Mathéo Katbie
                  </h3>
                  <p className="text-[#162869] font-inter font-medium">Expert en développement web et mobile</p>
                </div>
              </div>

              <p className="text-[#162869] font-inter mb-6 leading-relaxed text-sm sm:text-base">
                <span className="hidden md:inline">
                Mathéo transforme vos idées en réalité. Son expertise couvre l’ensemble du développement, du back-end au front-end, pour créer des applications performantes, sécurisées et simples à utiliser.
                </span>
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Développement d'applications web et mobiles
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Intégration d'API et services tiers
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Optimisation des performances et de la sécurité
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets Réalisés - Carousel */}
      <section className="py-16 bg-white" id="blog">
        <div className="w-full ">
          {/* En-tête */}
          <div className="text-center mb-12 pr-6">
            <h2 className="text-3xl md:text-4xl font-bricolage-grotesque-bold text-[#000f45] mb-4">
              Lodgic{' '}
              <span className="relative">
                <span className="relative z-10">Conseils</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
              </span>
            </h2>
            <p className="font-inter text-[#162869]">
              Explorez notre blog pour découvrir les dernières tendances et insights sur le développement web et mobile.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative ">
            {/* Boutons de navigation (style barre verticale jaune) */}
            <button
              onClick={prevProject}
              className="absolute inset-y-0 left-0 z-10 w-10 md:w-12 bg-[#DBFF00] hover:bg-[#d4ff00] text-black flex items-center justify-center duration-200 focus:outline-none cursor-pointer"
              aria-label="Projet précédent"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute inset-y-0 right-0 z-10 w-10 md:w-12 bg-[#DBFF00] hover:bg-[#d4ff00] text-black flex items-center justify-center duration-200 focus:outline-none cursor-pointer"
              aria-label="Projet suivant"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Projects Container */}
            <div
              ref={projectsScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pl-12 pr-12 py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className="flex-shrink-0 w-80 bg-white rounded-none overflow-hidden border border-transparent  transition-all duration-300 group hover:cursor-pointer"
                >
                  <div className="relative h-[180px] md:h-[180px] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.imageAlt || post.title}
                      loading="lazy"
                      className="w-full h-[160px] object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="mb-2">
                      <span className="text-[12px] uppercase tracking-wide text-gray-500 font-inter">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bricolage-grotesque-regualr text-[#0b143d] text-xl md:text-2xl leading-snug mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#162869]/80 font-inter text-sm mb-4 line-clamp-2">{post.summary}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-inter font-medium text-[#0b57d0] hover:underline focus:outline-none cursor-pointer"
                      aria-label={`Explorer l'article ${post.title}`}
                    >
                      Explorer
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
