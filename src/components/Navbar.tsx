'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'
import { trackClick } from '@/lib/analytics'

const mainLinks = [
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'Conseils', href: '/blog' },
  { label: 'À propos', href: '/#about' },
]

const services = [
  { label: 'Application mobile', href: '/developpement-application-mobile-toulouse' },
  { label: 'Site internet', href: '/creation-site-internet-toulouse' },
  { label: 'Logiciel sur mesure', href: '/logiciel-sur-mesure-toulouse' },
]

const applicationLinks = [
  { label: 'Prix d’une application', href: '/prix-application-mobile' },
  { label: 'Reprise d’une application', href: '/reprise-application-mobile' },
]

function Chevron() {
  return <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m3 5 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const mobileButton = useRef<HTMLButtonElement>(null)
  const servicesButton = useRef<HTMLButtonElement>(null)
  const servicesContainer = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const onServicePage = [...services, ...applicationLinks].some(link => link.href === pathname)

  useEffect(() => {
    if (!mobileOpen && !servicesOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (servicesOpen) {
        setServicesOpen(false)
        servicesButton.current?.focus()
      } else {
        setMobileOpen(false)
        mobileButton.current?.focus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (servicesOpen && !servicesContainer.current?.contains(event.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
    }
  }, [mobileOpen, servicesOpen])

  return <header className="sticky top-0 z-50 border-b border-[#DCE3E6] bg-white">
    <nav className="container-site flex h-20 items-center justify-between gap-5" aria-label="Navigation principale">
      <Link href="/" onClick={() => { setMobileOpen(false); setServicesOpen(false) }} className="brand-link flex shrink-0 items-baseline gap-2.5" aria-label="Lodgic, accueil">
        <span className="brand-name font-heading text-2xl text-[#17232A]">Lodgic</span>
        <span className="hidden text-sm text-[#59666E] xl:inline">Yann, développeur à Toulouse</span>
      </Link>

      <div className="hidden items-center gap-5 lg:flex xl:gap-6">
        <div ref={servicesContainer} className="relative">
          <button
            ref={servicesButton}
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="desktop-services-menu"
            onClick={() => setServicesOpen(value => !value)}
            className={`nav-link gap-1 whitespace-nowrap text-[15px] ${onServicePage || servicesOpen ? 'text-[#246B66]' : 'text-[#59666E]'}`}
          >Services <span className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}><Chevron /></span></button>
          {servicesOpen && <div id="desktop-services-menu" className="absolute left-0 top-full z-50 w-72 rounded-b-md border border-[#DCE3E6] bg-white p-3 shadow-lg">
            <p className="px-3 pb-1 text-xs font-semibold text-[#59666E]">Prestations</p>
            {services.map(link => <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)} aria-current={pathname === link.href ? 'page' : undefined} className="block rounded px-3 py-2 text-sm text-[#17232A] hover:bg-[#EDF4F3] focus-visible:bg-[#EDF4F3]">{link.label}</Link>)}
            <p className="mx-3 mt-3 border-t border-[#DCE3E6] pt-3 text-xs font-semibold text-[#59666E]">Pour votre application</p>
            {applicationLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)} aria-current={pathname === link.href ? 'page' : undefined} className="block rounded px-3 py-2 text-sm text-[#17232A] hover:bg-[#EDF4F3] focus-visible:bg-[#EDF4F3]">{link.label}</Link>)}
            <Link href="/#budget" onClick={() => setServicesOpen(false)} className="mt-2 block rounded bg-[#F4F6F7] px-3 py-2 text-sm font-semibold text-[#246B66] hover:bg-[#EDF4F3]">Tarifs et délais <span aria-hidden>→</span></Link>
          </div>}
        </div>
        {mainLinks.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="nav-link whitespace-nowrap text-[15px] text-[#59666E]">{link.label}</Link>)}
      </div>

      <div className="hidden shrink-0 items-center gap-4 lg:flex">
        <a href={`tel:${CONTACT_PHONE}`} onClick={() => trackClick('telephone-navbar')} className="whitespace-nowrap text-sm font-semibold text-[#17232A] hover:text-[#246B66]">{CONTACT_PHONE_DISPLAY}</a>
        <Link href="/contact" className="btn-primary whitespace-nowrap text-sm">Contact</Link>
      </div>

      <button ref={mobileButton} type="button" onClick={() => setMobileOpen(value => !value)} className="rounded-md border border-[#DCE3E6] px-4 py-2 text-base lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-menu">{mobileOpen ? 'Fermer' : 'Menu'}</button>
    </nav>

    {mobileOpen && <nav id="mobile-menu" aria-label="Navigation mobile" className="container-site max-h-[calc(100dvh-5rem)] overflow-y-auto pb-6 lg:hidden">
      <details className="group border-t border-[#DCE3E6]">
        <summary className="flex list-none items-center justify-between py-3 font-semibold [&::-webkit-details-marker]:hidden">Services <span className="transition-transform group-open:rotate-180"><Chevron /></span></summary>
        <div className="mb-3 border-l-2 border-[#DCE3E6] pl-4">
          <Link href="/#services" onClick={() => setMobileOpen(false)} className="block py-2 text-base text-[#59666E]">Tous les services</Link>
          {services.map(link => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 text-base text-[#59666E]">{link.label}</Link>)}
          <p className="mt-3 pt-2 text-sm font-semibold text-[#59666E]">Pour votre application</p>
          {applicationLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 text-base text-[#59666E]">{link.label}</Link>)}
          <Link href="/#budget" onClick={() => setMobileOpen(false)} className="block py-2 text-base text-[#59666E]">Tarifs et délais</Link>
        </div>
      </details>
      {mainLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block border-t border-[#DCE3E6] py-3">{link.label}</Link>)}
      <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-4 w-full">Parler de mon projet</Link>
      <a href={`tel:${CONTACT_PHONE}`} onClick={() => { trackClick('telephone-navbar'); setMobileOpen(false) }} className="mt-4 block text-center text-base text-[#59666E]">{CONTACT_PHONE_DISPLAY}</a>
    </nav>}
  </header>
}
