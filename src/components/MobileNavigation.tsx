'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'

const tabs = [
  { href: '/', label: 'Accueil', icon: 'home' },
  { href: '/realisations', label: 'Projets', icon: 'projects' },
  { href: '/blog', label: 'Conseils', icon: 'articles' },
  { href: '/contact', label: 'Contact', icon: 'contact' },
] as const

const services = [
  { href: '/developpement-application-mobile-toulouse', label: 'Application mobile' },
  { href: '/creation-site-internet-toulouse', label: 'Site internet' },
  { href: '/logiciel-sur-mesure-toulouse', label: 'Logiciel sur mesure' },
]

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" /></>,
    projects: <><rect x="3" y="5" width="18" height="15" rx="3" /><path d="M8 5V3h8v2M3 11h18M10 11v3h4v-3" /></>,
    articles: <><path d="M12 5C8 2 3 4 3 4v15s5-2 9 1c4-3 9-1 9-1V4s-5-2-9 1ZM12 5v15" /></>,
    contact: <><path d="M21 11a8 8 0 0 1-8 8H7l-4 3V7a4 4 0 0 1 4-4h6a8 8 0 0 1 8 8Z" /><path d="M7 9h10M7 13h6" /></>,
    back: <path d="m14 5-7 7 7 7M7 12h14" />,
    menu: <><path d="M4 8h16M4 16h16" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  }
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export default function MobileNavigation() {
  const pathname = usePathname()
  const sheet = useRef<HTMLDialogElement>(null)
  const previousPath = useRef(pathname)
  const isProject = pathname.startsWith('/projets/')
  const isArticle = pathname.startsWith('/blog/')
  const activeTab = isProject ? '/realisations' : isArticle ? '/blog' : pathname
  const section = tabs.find(tab => tab.href === activeTab)?.label ?? (services.some(service => service.href === pathname) ? 'Services' : 'Lodgic')
  const backHref = isProject ? '/realisations' : isArticle ? '/blog' : '/'
  const close = () => sheet.current?.close()

  useEffect(() => {
    // A modal opened on a phone must release focus when switching to desktop.
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => { if (desktop.matches) sheet.current?.close() }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (previousPath.current !== pathname) sheet.current?.close()
    previousPath.current = pathname
  }, [pathname])

  useEffect(() => {
    const dialog = sheet.current
    if (!dialog) return
    // Native dialogs handle Escape and focus; this also dismisses a tap on the backdrop.
    const closeOnBackdrop = (event: MouseEvent) => {
      if (event.target !== dialog) return
      const bounds = dialog.getBoundingClientRect()
      if (event.clientY < bounds.top || event.clientX < bounds.left || event.clientX > bounds.right) dialog.close()
    }
    dialog.addEventListener('click', closeOnBackdrop)
    return () => dialog.removeEventListener('click', closeOnBackdrop)
  }, [])

  return <>
    <header className="mobile-app-header">
      {pathname === '/' ? <Link href="/" className="mobile-app-brand" aria-label="Lodgic, accueil">Lodgic<span>Yann · Toulouse</span></Link>
        : <Link href={backHref} className="mobile-app-back" aria-label={isArticle ? 'Retour aux conseils' : isProject ? 'Retour aux réalisations' : 'Retour à l’accueil'}><Icon name="back" /><span>{section}</span></Link>}
      <button type="button" className="mobile-app-menu" onClick={() => sheet.current?.showModal()} aria-haspopup="dialog" aria-controls="mobile-app-menu"><Icon name="menu" /><span>Menu</span></button>
    </header>

    <nav className="mobile-tabbar" aria-label="Navigation rapide">
      {tabs.map(tab => <Link key={tab.href} href={tab.href} aria-current={activeTab === tab.href ? pathname === tab.href ? 'page' : 'location' : undefined} onClick={close}>
        <span className="mobile-tab-icon"><Icon name={tab.icon} /></span><span>{tab.label}</span>
      </Link>)}
    </nav>

    <dialog ref={sheet} id="mobile-app-menu" className="mobile-menu-sheet" aria-labelledby="mobile-menu-title">
      <div className="mobile-sheet-heading"><h2 id="mobile-menu-title">Explorer Lodgic</h2><button type="button" onClick={close} aria-label="Fermer le menu"><Icon name="close" /></button></div>
      <nav aria-label="Services et informations">
        <p className="eyebrow">Services</p>
        <div className="mobile-sheet-services">{services.map(service => <Link key={service.href} href={service.href} onClick={close} aria-current={pathname === service.href ? 'page' : undefined}>{service.label}<span aria-hidden="true">↗</span></Link>)}</div>
        <div className="mobile-sheet-links">
          <Link href="/prix-application-mobile" onClick={close}>Prix d’une application</Link>
          <Link href="/reprise-application-mobile" onClick={close}>Reprise d’une application</Link>
          <Link href="/#about" onClick={close}>À propos</Link>
          <Link href="/#methode" onClick={close}>Méthode</Link>
          <Link href="/#budget" onClick={close}>Tarifs et délais</Link>
          <Link href="/preparer-son-projet" onClick={close}>Préparer mon projet</Link>
        </div>
        <Link href="/contact" onClick={close} className="btn-primary">Parler de mon projet <span aria-hidden="true">↗</span></Link>
        <a href={`tel:${CONTACT_PHONE}`} className="mobile-sheet-phone" onClick={close}>{CONTACT_PHONE_DISPLAY}</a>
      </nav>
    </dialog>
  </>
}
