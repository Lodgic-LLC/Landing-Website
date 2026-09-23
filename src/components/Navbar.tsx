'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { trackClick } from '@/lib/analytics'
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Services', path: '/#services' },
    { name: 'Méthode', path: '/#methode' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 12)

      if (Math.abs(currentY - lastScrollY.current) < 6) return

      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false)
        setIsMenuOpen(false)
      } else {
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fermerMenu = () => setIsMenuOpen(false)

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-120px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className="pointer-events-auto w-full max-w-4xl"
      >
        <nav
          aria-label="Navigation principale"
          className={`flex items-center justify-between gap-3 rounded-full px-4 py-2.5 transition-all duration-300 ${
            atTop
              ? 'bg-white/60 backdrop-blur border border-white/40 shadow-sm'
              : 'bg-white/90 backdrop-blur-lg border border-[#2E2B28]/10 shadow-[0_8px_32px_rgba(35,33,31,0.12)]'
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2 group" aria-label="Accueil Lodgic">
            <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-[3px] bg-[#C2542D]" />
            <span className="font-sofia-bold text-[#2E2B28] text-xl leading-none group-hover:text-[#A34322] transition-colors">
              Lodgic
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            <Link
              href="/"
              className={`relative px-3 py-1.5 rounded-full text-sm font-inter font-medium transition-smooth ${
                isActive('/')
                  ? 'bg-[#2E2B28]/8 text-[#2E2B28]'
                  : 'text-[#2E2B28]/65 hover:text-[#2E2B28] hover:bg-[#2E2B28]/5'
              }`}
            >
              Accueil
            </Link>
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.name}>
                {index === 1 && <span className="h-4 w-px bg-[#2E2B28]/20" aria-hidden />}
                <Link
                  href={item.path}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-inter font-medium transition-smooth ${
                    isActive(item.path)
                      ? 'bg-[#2E2B28]/8 text-[#2E2B28]'
                      : 'text-[#2E2B28]/65 hover:text-[#2E2B28] hover:bg-[#2E2B28]/5'
                  }`}
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Téléphone : le numéro s'affiche sur grand écran, l'icône seule ailleurs. */}
            <a
              href={`tel:${CONTACT_PHONE}`}
              onClick={() => trackClick('telephone-navbar')}
              aria-label={`Appeler le ${CONTACT_PHONE_DISPLAY}`}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-[#2E2B28]/15 bg-white/70 px-3 text-sm font-inter font-semibold text-[#2E2B28] transition-smooth hover:border-[#2E2B28]/30 hover:bg-white"
            >
              <svg className="h-3.5 w-3.5 text-[#B54A26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="hidden lg:inline">{CONTACT_PHONE_DISPLAY}</span>
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-[#C2542D] px-4 py-2 text-sm font-inter font-semibold text-white hover:bg-[#A34322] transition-smooth"
            >
              Expliquer mon projet
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-[#2E2B28]/6 text-[#2E2B28] hover:bg-[#2E2B28]/10 transition-smooth"
              aria-expanded={isMenuOpen}
              aria-label="Menu principal"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`mt-1 overflow-hidden rounded-2xl border border-[#2E2B28]/10 bg-white/95 backdrop-blur-lg shadow-[0_8px_32px_rgba(35,33,31,0.12)] transition-all duration-200 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100 p-2' : 'max-h-0 opacity-0 p-0 border-transparent'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <Link
            href="/"
            className={`block rounded-xl px-4 py-3 text-sm font-inter font-medium transition-smooth ${
              isActive('/')
                ? 'bg-[#2E2B28]/6 text-[#2E2B28]'
                : 'text-[#2E2B28]/70 hover:bg-[#2E2B28]/5 hover:text-[#2E2B28]'
            }`}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={fermerMenu}
          >
            Accueil
          </Link>
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.name}>
              {index === 1 && <div className="my-1 h-px bg-[#2E2B28]/6" />}
              <Link
                href={item.path}
                className={`block rounded-xl px-4 py-3 text-sm font-inter font-medium transition-smooth ${
                  isActive(item.path)
                    ? 'bg-[#2E2B28]/6 text-[#2E2B28]'
                    : 'text-[#2E2B28]/70 hover:bg-[#2E2B28]/5 hover:text-[#2E2B28]'
                }`}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={fermerMenu}
              >
                {item.name}
              </Link>
            </React.Fragment>
          ))}
          <div className="mt-1 border-t border-[#2E2B28]/6 pt-1">
            <Link
              href="/contact"
              className="block rounded-xl bg-[#C2542D] px-4 py-3 text-center text-sm font-inter font-semibold text-white hover:bg-[#A34322] transition-smooth"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={fermerMenu}
            >
              Expliquer mon projet
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
