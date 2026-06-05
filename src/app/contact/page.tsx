import type { Metadata } from 'next'
import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import StructuredData from '@/components/seo/StructuredData'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import ContactForm from './_components/ContactForm'
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  OPENING_HOURS,
  POSTAL_CODE,
  SITE_NAME,
  SITE_URL,
  STREET_ADDRESS,
} from '@/lib/site'

const PAGE_PATH = '/contact'

export const metadata: Metadata = {
  title: 'Contact — Agence Lodgic à Toulouse',
  description: `Contactez Lodgic, agence de développement web et mobile à Toulouse. Adresse, téléphone, email et formulaire pour cadrer votre projet d'application ou de site web sur mesure.`,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: 'Contact — Agence Lodgic à Toulouse',
    description: 'Contactez Lodgic à Toulouse pour discuter de votre projet web, mobile ou logiciel sur mesure.',
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

const fullAddress = [STREET_ADDRESS, [POSTAL_CODE, ADDRESS_LOCALITY].filter(Boolean).join(' ')]
  .filter(Boolean)
  .join(', ')

const mapsQuery = STREET_ADDRESS
  ? encodeURIComponent(`${STREET_ADDRESS}, ${POSTAL_CODE} ${ADDRESS_LOCALITY}`)
  : encodeURIComponent(`Lodgic, ${ADDRESS_LOCALITY}`)

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
      <StructuredData id="contact-structured-data" data={contactSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      <main className="bg-[#f6f7fc] min-h-screen pt-28 pb-20 md:pt-36">
        <div className="max-w-7xl mx-auto px-6">
          <header className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#001F45]/10 bg-white px-4 py-1.5 text-sm font-semibold text-[#001F45]">
              Contact
            </span>
            <h1 className="mt-5 font-sofia-bold text-4xl md:text-5xl text-[#001F45] leading-tight">
              Discutons de votre projet.
            </h1>
            <p className="mt-5 text-lg text-[#1f3556] leading-relaxed">
              Une idée d'application, un site web à refondre ou un logiciel sur mesure ? Écrivez-nous, passez nous voir
              ou planifiez un appel, nous revenons vers vous sous 24 heures ouvrées.
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[#001F45]/10 bg-white p-6 shadow-soft">
                <h2 className="font-sofia-bold text-2xl text-[#001F45]">Coordonnées</h2>
                <ul className="mt-4 space-y-4 text-[#2d4567]">
                  {fullAddress && (
                    <li className="flex gap-3">
                      <FaMapMarkerAlt className="mt-1 h-5 w-5 text-[#001F45]" aria-hidden />
                      <div>
                        <p className="font-semibold text-[#001F45]">Adresse</p>
                        <address className="not-italic">
                          {STREET_ADDRESS && <span className="block">{STREET_ADDRESS}</span>}
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
                    <FaPhoneAlt className="mt-1 h-5 w-5 text-[#001F45]" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#001F45]">Téléphone</p>
                      <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="hover:text-[#001F45] underline-offset-2 hover:underline"
                      >
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaEnvelope className="mt-1 h-5 w-5 text-[#001F45]" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#001F45]">Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="hover:text-[#001F45] underline-offset-2 hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  {OPENING_HOURS.length > 0 && (
                    <li className="flex gap-3">
                      <FaClock className="mt-1 h-5 w-5 text-[#001F45]" aria-hidden />
                      <div>
                        <p className="font-semibold text-[#001F45]">Horaires</p>
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
                  <Link
                    href="/rendez-vous"
                    className="rounded-md bg-[#001F45] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001F45]/90 transition-colors"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#001F45]/10 bg-white shadow-soft">
                <iframe
                  title={`Localisation de ${SITE_NAME} à ${ADDRESS_LOCALITY}`}
                  src={
                    GEO_LATITUDE && GEO_LONGITUDE
                      ? `https://maps.google.com/maps?q=${GEO_LATITUDE},${GEO_LONGITUDE}&z=16&output=embed`
                      : `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`
                  }
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>

            <section className="rounded-2xl border border-[#001F45]/10 bg-white p-6 md:p-8 shadow-soft">
              <h2 className="font-sofia-bold text-2xl text-[#001F45]">Écrivez-nous</h2>
              <p className="mt-2 text-[#2d4567]">
                Décrivez brièvement votre projet : nous revenons vers vous avec une première lecture sous 24 heures
                ouvrées.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
