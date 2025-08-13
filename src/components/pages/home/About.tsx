'use client'

import { FaCheckCircle, FaUsers, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { blogPosts } from '@/data/blog/posts'

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const projectsScrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: 'Marie Dubois',
      company: 'E-commerce Solutions',
      role: 'Directrice Marketing',
      content:
        "L'équipe a transformé notre vision en une application mobile exceptionnelle. Leur approche personnalisée et leur expertise technique ont dépassé nos attentes.",
      rating: 5,
    },
    {
      name: 'Pierre Martin',
      company: 'TechStart',
      role: 'CEO',
      content: 'Un accompagnement de qualité. Yann et Mathéo ont su comprendre nos besoins du début à la fin..',
      rating: 5,
    },
    {
      name: 'Sophie Laurent',
      company: 'Digital Agency',
      role: 'Chef de Projet',
      content:
        'Professionnalisme, réactivité et expertise technique au rendez-vous. Notre site web dépasse maintenant nos concurrents en termes de performance.',
      rating: 5,
    },
    {
      name: 'Thomas Rousseau',
      company: 'InnovateCorp',
      role: 'CTO',
      content:
        'Une équipe qui maîtrise parfaitement les technologies modernes. Ils ont su intégrer des fonctionnalités complexes tout en gardant une interface intuitive.',
      rating: 5,
    },
    {
      name: 'Camille Moreau',
      company: 'StartupLab',
      role: 'Fondatrice',
      content:
        'Grâce à leur expertise, nous avons pu lancer notre MVP en temps record. Un suivi personnalisé qui fait vraiment la différence.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change automatiquement toutes les 5 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="py-10 bg-[#f6f7fc] relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bricolage-grotesque-bold text-[#000f45] mb-4">
              Qui sommes-nous ?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#000f45] to-[#162869] mx-auto rounded-full mb-6"></div>
            <p className="text-lg font-inter text-[#162869] max-w-3xl mx-auto leading-relaxed">
              Une équipe à taille humaine, proche de vous et de vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-[#FFFFFF] p-6 md:p-8 border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group">
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
                    Yann Jerome
                  </h3>
                  <p className="text-[#162869] font-inter font-medium">Relation client / Développeur Mobile</p>
                </div>
              </div>

              <p className="text-[#162869] font-inter mb-6 leading-relaxed text-sm sm:text-base">
                <span className="md:hidden">
                  Votre interlocuteur privilégié pour comprendre vos besoins et assurer le suivi de votre projet.
                </span>
                <span className="hidden md:inline">
                  Yann est votre interlocuteur privilégié tout au long de votre projet. Il analyse vos besoins,
                  coordonne le développement et assure un suivi personnalisé pour garantir que votre vision se
                  concrétise parfaitement.
                </span>
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Analyse et compréhension de vos besoins
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Suivi personnalisé de votre projet
                  </span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-[#000f45] mt-0.5 flex-shrink-0 group-hover:text-[#162869] transition-colors" />
                  <span className="ml-3 text-[#162869] font-inter group-hover:text-[#000f45] transition-colors">
                    Coordination avec l'équipe technique
                  </span>
                </div>
              </div>
            </div>

            {/* Mathéo Katbie */}
            <div className="bg-[#FFFFFF] p-6 md:p-8 border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group">
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
                  <p className="text-[#162869] font-inter font-medium">Développeur Full-Stack</p>
                </div>
              </div>

              <p className="text-[#162869] font-inter mb-6 leading-relaxed text-sm sm:text-base">
                <span className="md:hidden">
                  Expert technique qui transforme vos idées en solutions digitales performantes.
                </span>
                <span className="hidden md:inline">
                  Mathéo apporte son expertise technique pour transformer vos idées en réalité. Son approche couvre
                  l'ensemble du développement, du back-end au front-end, pour des applications performantes et faciles à
                  utiliser.
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
      <section>
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bricolage-grotesque-bold text-[#000f45] mb-4">
                Ce que disent nos clients
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#000f45] to-[#162869] mx-auto rounded-full mb-6"></div>
              <p className="text-lg font-inter text-[#162869] max-w-3xl mx-auto leading-relaxed">
                Découvrez les retours de nos clients satisfaits qui nous font confiance pour leurs projets digitaux.
              </p>
            </div>

            {/* Carrousel de témoignages */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-200 relative overflow-hidden">
                {/* Témoignage actuel */}
                <div className="text-center">
                  {/* Étoiles */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="w-6 h-6 text-yellow-400 mx-1" />
                    ))}
                  </div>

                  {/* Contenu du témoignage */}
                  <blockquote className="text-lg md:text-xl font-inter text-[#162869] mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Informations du client */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#000f45]/20 to-[#162869]/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-[#000f45]" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bricolage-grotesque-bold text-[#000f45] mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-[#162869] font-inter font-medium">{testimonials[currentTestimonial].role}</p>
                    <p className="text-[#162869] font-inter text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                {/* Boutons de navigation (style rond classique) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#000f45] hover:bg-[#000f45] hover:text-white transition-all duration-300 border border-gray-200 cursor-pointer"
                    aria-label="Témoignage précédent"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6">
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#000f45] hover:bg-[#000f45] hover:text-white transition-all duration-300 border border-gray-200 cursor-pointer"
                    aria-label="Témoignage suivant"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Indicateurs de pagination */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentTestimonial ? 'bg-[#000f45] scale-125' : 'bg-gray-300 hover:bg-[#162869]'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
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
            <h2 className="text-3xl md:text-4xl font-bricolage-grotesque-bold text-[#000f45] mb-4">Notre blog</h2>
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
                    <button
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
                    </button>
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
