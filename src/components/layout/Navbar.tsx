'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ]

  // Vérifier si l'écran est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px est le breakpoint md dans Tailwind
    }
    
    // Vérifier au chargement
    checkIfMobile()
    
    // Ajouter un écouteur pour les changements de taille d'écran
    window.addEventListener('resize', checkIfMobile)
    
    // Nettoyer l'écouteur
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop
    const scrollingDown = currentScrollPos > lastScrollTop
    const scrollThreshold = 10

    // Toujours visible en haut de page
    if (currentScrollPos < 50) {
      setIsVisible(true)
    }
    // Masquer lors du défilement vers le bas, afficher lors du défilement vers le haut
    else if (Math.abs(currentScrollPos - lastScrollTop) > scrollThreshold) {
      setIsVisible(!scrollingDown)
    }

    setScrollPosition(currentScrollPos)
    setLastScrollTop(currentScrollPos)
  }, [lastScrollTop])

  // Initialiser la position de défilement au chargement
  useEffect(() => {
    // Définir la position de défilement initiale
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', handleScroll)

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Vérifier si un lien est actif
  const isActive = (path: string) => {
    return pathname === path
  }

  // Forcer la transparence sur la page d'accueil en haut de page, seulement sur desktop
  const isHomePage = pathname === '/'
  const shouldBeTransparent = isHomePage && scrollPosition <= 50 && !isMobile

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${shouldBeTransparent ? 'py-5 bg-transparent' : 'py-3 shadow-lg bg-white backdrop-blur-sm'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Accueil Lodgic">
              <img src="/favicon.ico" alt="Logo Lodgic" className="w-8 h-8 mr-2" />
              <span
                className={`font-inter-bold text-2xl ${
                  shouldBeTransparent
                    ? 'text-white'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
                }`}
              >
                Lodgic
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centré */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-1 lg:space-x-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-inter-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? shouldBeTransparent
                        ? 'text-white bg-white/20 backdrop-blur-sm'
                        : 'text-blue-600 bg-blue-50'
                      : shouldBeTransparent
                      ? 'text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bouton Prendre RDV - À droite */}
          <div className="hidden md:block">
            <Link
              href="/rendez-vous"
              className={`px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-sm lg:text-base font-inter-medium flex items-center ${
                shouldBeTransparent
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Prendre RDV
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              aria-expanded={isMenuOpen}
              onClick={handleToggleMenu}
              aria-label="Menu principal"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 border-t shadow-inner bg-white border-gray-100 pt-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-4 py-3 rounded-md text-base font-inter-medium transition-all duration-200 ${
                isActive(item.path)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 pb-4">
            <Link
              href="/rendez-vous"
              className="flex items-center justify-center w-full px-4 py-3 rounded-md shadow-sm transition-colors font-inter-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
