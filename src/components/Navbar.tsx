'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'
import { trackClick } from '@/lib/analytics'

const links = [
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Sites web', href: '/creation-site-internet-toulouse' },
  { label: 'Applications', href: '/developpement-application-mobile-toulouse' },
  { label: 'Outils métier', href: '/logiciel-sur-mesure-toulouse' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  return <header className="sticky top-0 z-50 border-b border-[#DCE3E6] bg-white" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); button.current?.focus() } }}>
    <nav className="container-site flex h-20 items-center justify-between gap-5" aria-label="Navigation principale">
      <Link href="/" onClick={() => setOpen(false)} className="font-heading flex items-center gap-2.5 text-2xl" aria-label="Lodgic, accueil"><span aria-hidden className="h-2.5 w-2.5 rounded-sm bg-[#246B66]" />Lodgic</Link>
      <div className="hidden items-center gap-6 lg:flex">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="text-base text-[#59666E] hover:text-[#246B66] aria-[current=page]:text-[#246B66]">{link.label}</Link>)}</div>
      <div className="hidden lg:block"><Link href="/contact" className="btn-primary text-base">Demander un devis <span aria-hidden>↗</span></Link></div>
      <button ref={button} onClick={() => setOpen(!open)} className="rounded-md border border-[#DCE3E6] px-4 py-2 text-base lg:hidden" aria-expanded={open} aria-controls="mobile-menu">{open ? 'Fermer' : 'Menu'}</button>
    </nav>
    {open && <nav id="mobile-menu" aria-label="Navigation mobile" className="container-site pb-6 lg:hidden">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-t border-[#DCE3E6] py-3">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">Demander un devis</Link><a href={`tel:${CONTACT_PHONE}`} onClick={() => trackClick('telephone-navbar')} className="mt-4 block text-center text-base text-[#59666E]">{CONTACT_PHONE_DISPLAY}</a></nav>}
  </header>
}
