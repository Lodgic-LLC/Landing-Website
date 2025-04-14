'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

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
    { name: 'Projets', path: '/projets' },
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

  // Navbar toujours avec fond blanc, même en haut de la page
  const isHomePage = pathname === '/'
  const isScrolled = scrollPosition > 50

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-white backdrop-blur-sm shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Accueil Lodgic">
              <div className="h-9 w-9 relative mr-2">
                <Image
                  src="/FullLogo_Transparent_NoBuffer.png"
                  alt="Logo Lodgic"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-xl text-gray-800">Lodgic</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-gray-800 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton Contact */}
          <div className="hidden md:flex items-center">
            <Link
              href="/rendez-vous"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md"
            >
              <span className="flex items-center">
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
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-gray-600 hover:text-gray-800 hover:bg-gray-50"
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
          isMenuOpen ? 'max-h-[330px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-md border-t border-gray-100">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                isActive(item.path) ? 'text-gray-800 bg-gray-100' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/rendez-vous"
              className="flex items-center justify-center w-full px-4 py-3 rounded-md text-base font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
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
