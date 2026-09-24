'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'
import { trackClick } from '@/lib/analytics'

const links = [
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Services', href: '/#services' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'Tarifs', href: '/#budget' },
  { label: 'À propos', href: '/#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  return <header className="sticky top-0 z-50 border-b border-[#DCE3E6] bg-white" onKeyDown={e => {
    if (e.key === 'Escape') {
      setOpen(false)
      button.current?.focus()
    }
  }}>
    <nav className="container-site flex h-20 items-center justify-between gap-5" aria-label="Navigation principale">
      <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-baseline gap-2.5" aria-label="Lodgic, accueil">
        <span className="font-heading text-2xl text-[#17232A]">Lodgic</span>
        <span className="hidden text-sm text-[#59666E] xl:inline">Yann, développeur à Toulouse</span>
      </Link>

      <div className="hidden items-center gap-5 lg:flex xl:gap-6">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="nav-link whitespace-nowrap text-[15px] text-[#59666E]">{link.label}</Link>)}
      </div>

      <div className="hidden shrink-0 items-center gap-4 lg:flex">
        <a href={`tel:${CONTACT_PHONE}`} onClick={() => trackClick('telephone-navbar')} className="whitespace-nowrap text-sm font-semibold text-[#17232A] hover:text-[#246B66]">{CONTACT_PHONE_DISPLAY}</a>
        <a href={`tel:${CONTACT_PHONE}`} onClick={() => trackClick('appel-gratuit-navbar')} className="btn-primary whitespace-nowrap text-sm">Appel gratuit</a>
      </div>

      <button ref={button} onClick={() => setOpen(!open)} className="rounded-md border border-[#DCE3E6] px-4 py-2 text-base lg:hidden" aria-expanded={open} aria-controls="mobile-menu">{open ? 'Fermer' : 'Menu'}</button>
    </nav>

    {open && <nav id="mobile-menu" aria-label="Navigation mobile" className="container-site pb-6 lg:hidden">
      {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-t border-[#DCE3E6] py-3">{link.label}</Link>)}
      <a href={`tel:${CONTACT_PHONE}`} onClick={() => { trackClick('appel-gratuit-navbar'); setOpen(false) }} className="btn-primary mt-3 w-full">Appel gratuit</a>
      <a href={`tel:${CONTACT_PHONE}`} onClick={() => trackClick('telephone-navbar')} className="mt-4 block text-center text-base text-[#59666E]">{CONTACT_PHONE_DISPLAY}</a>
    </nav>}
  </header>
}
