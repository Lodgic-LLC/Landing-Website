import type { Metadata } from 'next'
import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import JsonLd, { filAriane } from '@/components/JsonLd'
import Formulaire, { FULL_FIELDS } from '@/components/Formulaire'
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  OPENING_HOURS,
  POSTAL_CODE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'

const PAGE_PATH = '/contact'

export const metadata: Metadata = {
  title: 'Contact — Yann Rouquié, développeur à Toulouse',
  description: `Écrivez-moi pour parler de votre site, de votre application ou de votre logiciel. Téléphone, e-mail et formulaire : je réponds sous 24 heures.`,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: 'Contact — Yann Rouquié, développeur à Toulouse',
    description: 'Parlons de votre projet web, mobile ou logiciel. Réponse sous 24 heures.',
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: SITE_NAME,
    locale: 'fr_FR',
    type: 'website',
  },
}

const dayLabel: Record<string, string> = {
  Monday: 'Lundi',
  Tuesday: 'Mardi',
  Wednesday: 'Mercredi',
  Thursday: 'Jeudi',
  Friday: 'Vendredi',
  Saturday: 'Samedi',
  Sunday: 'Dimanche',
}

const formatDayRange = (days: string[]): string => {
  if (days.length === 0) return ''
  if (days.length === 1) return dayLabel[days[0]] ?? days[0]
  return `${dayLabel[days[0]] ?? days[0]} – ${dayLabel[days[days.length - 1]] ?? days[days.length - 1]}`
}

const fullAddress = [POSTAL_CODE, ADDRESS_LOCALITY].filter(Boolean).join(' ')

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Contact', url: `${SITE_URL}${PAGE_PATH}` },
  ]

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}${PAGE_PATH}#contactpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Contact — Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`,
    },
  }

  return (
    <>
      <JsonLd id="contact-structured-data" data={contactSchema} />
      <JsonLd data={filAriane(breadcrumbItems)} />

      <main className="bg-[#F8F6F2] min-h-screen pt-28 pb-20 md:pt-36">
        <div className="max-w-7xl mx-auto px-6">
          <header className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#2E2B28]/10 bg-white px-4 py-1.5 text-sm font-semibold text-[#2E2B28]">
              Contact
            </span>
            <h1 className="mt-5 font-sofia-bold text-4xl md:text-5xl text-[#2E2B28] leading-tight">
              Discutons de votre projet.
            </h1>
            <p className="mt-5 text-lg text-[#2E2B28] leading-relaxed">
              Un site à créer, une application en tête ou un logiciel qui vous manque ? Écrivez-moi, passez me voir
              ou appelez-moi : je vous réponds sous 24 heures ouvrées.
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[#2E2B28]/10 bg-white p-6 shadow-soft">
                <h2 className="font-sofia-bold text-2xl text-[#2E2B28]">Coordonnées</h2>
                <ul className="mt-4 space-y-4 text-[#6B655D]">
                  {fullAddress && (
                    <li className="flex gap-3">
                      <FaMapMarkerAlt className="mt-1 h-5 w-5 text-[#2E2B28]" aria-hidden />
                      <div>
                        <p className="font-semibold text-[#2E2B28]">Adresse</p>
                        <address className="not-italic">
                          <span className="block">
                            {[POSTAL_CODE, ADDRESS_LOCALITY].filter(Boolean).join(' ')}
                            {ADDRESS_REGION && ` · ${ADDRESS_REGION}`}
                          </span>
                          <span className="block">{ADDRESS_COUNTRY === 'FR' ? 'France' : ADDRESS_COUNTRY}</span>
                        </address>
                      </div>
                    </li>
                  )}
                  <li className="flex gap-3">
                    <FaPhoneAlt className="mt-1 h-5 w-5 text-[#2E2B28]" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#2E2B28]">Téléphone</p>
                      <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="hover:text-[#2E2B28] underline-offset-2 hover:underline"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaEnvelope className="mt-1 h-5 w-5 text-[#2E2B28]" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#2E2B28]">Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="hover:text-[#2E2B28] underline-offset-2 hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  {OPENING_HOURS.length > 0 && (
                    <li className="flex gap-3">
                      <FaClock className="mt-1 h-5 w-5 text-[#2E2B28]" aria-hidden />
                      <div>
                        <p className="font-semibold text-[#2E2B28]">Horaires</p>
                        <ul className="space-y-1">
                          {OPENING_HOURS.map((slot, idx) => (
                            <li key={idx}>
                              {formatDayRange(slot.dayOfWeek)} : {slot.opens} – {slot.closes}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="rounded-md bg-[#C2542D] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#A34322] transition-colors"
                  >
                    Appeler le {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

            </aside>

            <section className="rounded-2xl border border-[#2E2B28]/10 bg-white p-6 md:p-8 shadow-soft">
              <h2 className="font-sofia-bold text-2xl text-[#2E2B28]">Écrivez-moi</h2>
              <p className="mt-2 text-[#6B655D]">
                Décrivez brièvement votre projet : je vous réponds avec une première lecture sous 24 heures
                ouvrées.
              </p>
              <div className="mt-6">
                <Formulaire source="page-contact" fields={FULL_FIELDS} submitLabel="Envoyer ma demande" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
