import type { Metadata } from 'next'
import OffreClient from './_components/OffreClient'

export const metadata: Metadata = {
  title: 'Application clé en main en 45 jours — Offre Startup · Lodgic',
  description:
    "Offre Lodgic pour startups et entrepreneurs : votre application livrée en 45 jours, avec 3 mois de maintenance inclus. Paiement au résultat.",
  alternates: { canonical: 'https://lodgic-dev.com/offre' },
  openGraph: {
    title: 'Application clé en main en 45 jours — Lodgic',
    description:
      "De l'idée à l'app en production en 45 jours. Délai garanti, paiement au résultat et accompagnement complet.",
    url: 'https://lodgic-dev.com/offre',
    siteName: 'Lodgic',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function OffrePage() {
  return <OffreClient />
}
