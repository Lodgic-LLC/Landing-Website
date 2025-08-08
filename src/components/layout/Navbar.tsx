'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Services', path: '/#services' },
    { name: 'Lodgic Conseils', path: '/#blog' },
    { name: 'À propos', path: '/#about' },
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

  // Initialiser la position de défilement au chargement (simplified)
  useEffect(() => {
    const handleSimpleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    // Définir la position de défilement initiale
    handleSimpleScroll()

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', handleSimpleScroll)

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('scroll', handleSimpleScroll)
  }, []) // Dependency array is now empty as handleScroll is removed

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
        isScrolled ? 'bg-white border-b border-gray-100' : 'bg-[#f6f7fc] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Accueil Lodgic">
              <span className="font-bricolage-grotesque-bold text-[#001F45] text-3xl">Lodgic</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-inter-regular leading-6 text-[16px] transition-all duration-200 ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contact">
              <span className="px-3 py-3  text-sm font-bricolage-grotesque-bold leading-6 [30px] text-[16px] transition-all duration-200 text-[#001F45] border border-[#001F45] hover:bg-[#001F45] hover:text-white">
                Nous Contacter
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-gray-700 hover:text-blue-600 hover:bg-blue-50"
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
          isMenuOpen ? 'max-h-[440px] opacity-100 border-b border-gray-200' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-md">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                isActive(item.path) ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/#contact"
              className="flex items-center justify-center w-full px-4 py-3 text-base font-semibold transition-colors bg-white text-[#001F45] hover:bg-[#001F45] border border-[#001F45] hover:text-white shadow-sm"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
