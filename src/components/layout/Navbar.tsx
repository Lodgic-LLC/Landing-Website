'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Mon appli en 45j', path: '/offre' },
    { name: 'Lodgic Conseils', path: '/blog' },
    { name: 'IA', path: '/intelligence-artificielle' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 12)

      // Ignore tiny fluctuations
      if (Math.abs(currentY - lastScrollY.current) < 6) return

      if (currentY > lastScrollY.current && currentY > 80) {
        // Scrolling down → hide
        setVisible(false)
        setIsMenuOpen(false)
      } else {
        // Scrolling up → show
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path

  return (
    /* Outer container — full width, pointer-events off so it doesn't block page content */
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <motion.div
        animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto w-full max-w-3xl"
      >
        {/* Dock pill */}
        <nav
          aria-label="Navigation principale"
          className={`flex items-center justify-between gap-3 rounded-full px-4 py-2.5 transition-all duration-300 ${
            atTop
              ? 'bg-white/60 backdrop-blur border border-white/40 shadow-sm'
              : 'bg-white/90 backdrop-blur-lg border border-[#001F45]/10 shadow-[0_8px_32px_rgba(0,31,69,0.12)]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2 group" aria-label="Accueil Lodgic">
            <Image
              src="/icon_bgtransparent.png"
              alt=""
              width={30}
              height={30}
              priority
              className="h-[30px] w-[30px] object-contain"
              aria-hidden="true"
            />
            <span className="font-sofia-bold text-[#001F45] text-xl leading-none group-hover:text-[#0b2b63] transition-colors">
              Lodgic
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-3 py-1.5 rounded-full text-sm font-inter font-medium transition-smooth ${
                  isActive(item.path)
                    ? 'bg-[#001F45]/8 text-[#001F45]'
                    : 'text-[#001F45]/65 hover:text-[#001F45] hover:bg-[#001F45]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-[#001F45] px-4 py-2 text-sm font-inter font-semibold text-white hover:bg-[#0b2b63] transition-smooth"
            >
              Une question ?
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-[#001F45]/6 text-[#001F45] hover:bg-[#001F45]/10 transition-smooth"
              aria-expanded={isMenuOpen}
              aria-label="Menu principal"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 6, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-1 overflow-hidden rounded-2xl border border-[#001F45]/10 bg-white/95 backdrop-blur-lg p-2 shadow-[0_8px_32px_rgba(0,31,69,0.12)]"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block rounded-xl px-4 py-3 text-sm font-inter font-medium transition-smooth ${
                    isActive(item.path)
                      ? 'bg-[#001F45]/6 text-[#001F45]'
                      : 'text-[#001F45]/70 hover:bg-[#001F45]/5 hover:text-[#001F45]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-1 border-t border-[#001F45]/6 pt-1">
                <Link
                  href="/contact"
                  className="block rounded-xl bg-[#001F45] px-4 py-3 text-center text-sm font-inter font-semibold text-white hover:bg-[#0b2b63] transition-smooth"
                >
                  Une question ?
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
