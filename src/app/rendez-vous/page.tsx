import type { Metadata } from 'next'
import RendezVousRefonteContent from '@/components/pages/rendez-vous/RendezVousRefonteContent'
import StructuredData from '@/components/seo/StructuredData'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Rendez-vous projet web et mobile',
  description:
    'Réservez un entretien découverte gratuit avec Lodgic pour cadrer votre projet de site web, application mobile ou logiciel sur mesure.',
  alternates: {
    canonical: `${SITE_URL}/rendez-vous`,
  },
  openGraph: {
    title: 'Rendez-vous projet web et mobile - Lodgic',
    description:
      'Planifiez un rendez-vous gratuit de 45 minutes avec Lodgic pour parler de votre projet digital.',
    url: `${SITE_URL}/rendez-vous`,
    siteName: 'Lodgic',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Rendez-vous projet web et mobile Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

const RendezVousPage = () => {
  const rendezVousSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/rendez-vous#webpage`,
    url: `${SITE_URL}/rendez-vous`,
    name: 'Rendez-vous projet web et mobile - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE_URL}/rendez-vous#booking-widget`,
      name: 'Réserver un entretien découverte',
    },
    inLanguage: 'fr-FR',
  }

  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Rendez-vous', url: `${SITE_URL}/rendez-vous` },
  ]

  return (
    <>
      <StructuredData id="rendez-vous-structured-data" data={rendezVousSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <RendezVousRefonteContent />
    </>
  )
}

export default RendezVousPage
