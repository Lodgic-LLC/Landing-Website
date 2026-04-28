import type { Metadata } from 'next'
import OffreClient from './_components/OffreClient'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Application clé en main en 45 jours',
  description:
    "Offre Lodgic pour startups et entrepreneurs : votre application livrée en 45 jours, avec 3 mois de maintenance inclus. Paiement au résultat.",
  alternates: { canonical: `${SITE_URL}/offre` },
  openGraph: {
    title: 'Application clé en main en 45 jours — Lodgic',
    description:
      "De l'idée à l'app en production en 45 jours. Délai garanti, paiement au résultat et accompagnement complet.",
    url: `${SITE_URL}/offre`,
    siteName: 'Lodgic',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function OffrePage() {
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/offre#service`,
    name: 'Application clé en main en 45 jours',
    serviceType: 'Développement application mobile et web',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Toulouse, Occitanie, France',
    url: `${SITE_URL}/offre`,
    description: metadata.description,
    offers: {
      '@type': 'Offer',
      name: 'Offre Startup et Entrepreneurs',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/offre`,
    },
  }

  return (
    <>
      <StructuredData id="offer-structured-data" data={offerSchema} />
      <OffreClient />
    </>
  )
}
