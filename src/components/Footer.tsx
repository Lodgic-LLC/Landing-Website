'use client'

import Link from 'next/link'
import { PAGES_SERVICE } from '@/content/pages-service'
import { PROJETS } from '@/content/projets'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  GOOGLE_BUSINESS_URL,
} from '@/lib/site'

/**
 * Pied de page compact : il référence chaque page du site, pour qu'aucune ne
 * dépende d'un seul lien. Les colonnes se remplissent depuis les fichiers de
 * contenu : ajouter une prestation ou un projet suffit à l'y faire apparaître.
 */
const SITE = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Services', href: '/#services' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'Qui je suis', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

/** Titres raccourcis : le nom complet des pages de service est trop long ici. */
const NOM_COURT: Record<string, string> = {
  'creation-site-internet-toulouse': 'Création de site internet',
  'developpement-application-mobile-toulouse': 'Application mobile',
  'logiciel-sur-mesure-toulouse': 'Logiciel sur mesure',
  'developpeur-react-native-toulouse': 'Développeur React Native',
  'developpement-application-ios-android': 'Application iOS et Android',
}

function Colonne({
  titre,
  liens,
}: {
  titre: string
  liens: { label: string; href: string }[]
}) {
  return (
    <div>
      <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-white/45">
        {titre}
      </p>
      <ul className="mt-3 space-y-2">
        {liens.map((lien) => (
          <li key={lien.href}>
            <Link
              href={lien.href}
              className="text-sm font-inter text-white/75 transition-colors hover:text-[#E08A63]"
            >
              {lien.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const annee = new Date().getFullYear()

  /** Rouvre la fenêtre de préférences du bandeau cookies. */
  async function ouvrirPreferencesCookies() {
    const cc = await import('vanilla-cookieconsent')
    const CookieConsent = cc.default ?? cc
    CookieConsent.showPreferences()
  }

  const prestations = PAGES_SERVICE.map((page) => ({
    label: NOM_COURT[page.slug] ?? page.name,
    href: `/${page.slug}`,
  }))

  const projets = [
    ...PROJETS.filter((p) => p.href.startsWith('/')).map((p) => ({ label: p.name, href: p.href })),
    { label: 'Toutes mes réalisations', href: '/realisations' },
  ]

  return (
    <footer className="border-t border-[#45403A] bg-[#23211F] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4 md:gap-10">
          {/* Identité et contact */}
          <div>
            <Link href="/" aria-label="Accueil Lodgic" className="group flex items-center gap-2">
              <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-[3px] bg-[#C2542D]" />
              <span className="font-sofia-bold text-xl text-white transition-colors group-hover:text-[#E08A63]">
                Lodgic
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60 font-inter">
              Yann, ingénieur en informatique à Toulouse. Sites web, applications mobiles et
              logiciels sur mesure.
            </p>
            <div className="mt-4 space-y-1.5 text-sm font-inter">
              <a href={`mailto:${CONTACT_EMAIL}`} className="block text-white/75 transition-colors hover:text-[#E08A63]">
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="block text-white/75 transition-colors hover:text-[#E08A63]">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <Colonne titre="Le site" liens={SITE} />
          <Colonne titre="Prestations" liens={prestations} />
          <Colonne titre="Réalisations" liens={projets} />
        </div>

        {/* Bas de page : mentions, cookies, réseaux */}
        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs font-inter text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {annee} Lodgic · Toulouse, Occitanie</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="transition-colors hover:text-white">
              Politique de confidentialité
            </Link>
            <button type="button" onClick={ouvrirPreferencesCookies} className="transition-colors hover:text-white">
              Gérer les cookies
            </button>
            {GOOGLE_BUSINESS_URL && (
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Fiche Google
              </a>
            )}
            <a
              href="https://linkedin.com/company/lodgic-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Lodgic"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/15 transition-colors hover:bg-[#C2542D] hover:text-white hover:ring-[#C2542D]"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554V14.87c0-1.332-.025-3.045-1.857-3.045-1.86 0-2.144 1.45-2.144 2.95v5.677H9.339V9h3.413v1.561h.049c.476-.9 1.636-1.85 3.368-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.115 20.452H3.558V9h3.557v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
