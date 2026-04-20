'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Services', path: '/#services' },
    { name: 'Lodgic Conseils', path: '/blog' },
    { name: 'À propos', path: '/#about' },
  ]

  useEffect(() => {
    const handleSimpleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    handleSimpleScroll()
    window.addEventListener('scroll', handleSimpleScroll)
    return () => window.removeEventListener('scroll', handleSimpleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const isScrolled = scrollPosition > 20

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group" aria-label="Accueil Lodgic">
              <span className="font-bricolage-grotesque-bold text-[#001F45] text-2xl md:text-3xl group-hover:text-[#0b2b63] transition-colors">
                Lodgic
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-inter font-medium transition-smooth ${
                  isActive(item.path)
                    ? 'text-[#001F45]'
                    : 'text-[#001F45]/70 hover:text-[#001F45] hover:bg-[#001F45]/5'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-1 w-1 rounded-full bg-[#DBFF00]" />
                )}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-2 inline-flex items-center justify-center rounded-lg bg-[#001F45] px-5 py-2.5 text-sm font-inter font-semibold text-white shadow-soft hover:bg-[#0b2b63] hover:shadow-elevated transition-smooth"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#001F45] text-[#001F45] hover:bg-[#001F45]/5"
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
        className={`md:hidden transition-smooth overflow-hidden ${
          isMenuOpen ? 'max-h-[440px] opacity-100 border-b border-gray-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-5 space-y-1 bg-white/95 backdrop-blur-md">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-inter font-medium transition-smooth ${
                isActive(item.path)
                  ? 'bg-[#001F45]/5 text-[#001F45]'
                  : 'text-[#001F45]/80 hover:text-[#001F45] hover:bg-[#001F45]/5'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-3">
            <Link
              href="/#contact"
              className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-inter font-semibold bg-[#001F45] text-white hover:bg-[#0b2b63] transition-smooth shadow-soft"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
