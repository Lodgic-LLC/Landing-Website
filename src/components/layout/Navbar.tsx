'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navigationItems = [
  { name: 'Services', path: '/#services' },
  { name: 'Projets', path: '/projets' },
  { name: 'À propos', path: '/#about' },
  { name: 'Lodgic Conseils', path: '/blog' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleToggleMenu = () => setIsMenuOpen((v) => !v)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Accueil Lodgic">
            <span className="text-[22px] md:text-[24px] font-semibold tracking-tight text-[var(--color-ink)]">
              Lod
              <span className="text-[var(--color-brand-ink)]">g</span>
              ic
            </span>
          </Link>

          {/* Nav Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 rounded-md text-[14px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-smooth"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <Link href="/#contact" className="btn-nav text-white">
              Démarrer un projet
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-ink)] hover:bg-[var(--color-border)]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]"
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-smooth overflow-hidden ${
          isMenuOpen ? 'max-h-[440px] opacity-100 border-b border-[var(--color-border)]' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-editorial py-3 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-3 rounded-md text-[15px] font-medium text-[var(--color-ink)] hover:bg-[var(--color-brand-50)] transition-smooth"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contact" className="btn-nav text-white mt-2 w-full">
              Démarrer un projet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
