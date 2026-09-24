import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { WebVitals } from '@/components/WebVitals'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import ConsentScripts from '@/components/ConsentScripts'
import ConsentVercelAnalytics from '@/components/ConsentVercelAnalytics'
import JsonLd from '@/components/JsonLd'
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GOOGLE_BUSINESS_URL,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  OPENING_HOURS,
  OWNER_NAME,
  OWNER_TITLE,
  POSTAL_CODE,
  PRICE_RANGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  STREET_ADDRESS,
  WIKIDATA_QID,
} from '@/lib/site'

const bodyFont = localFont({ src: '../fonts/SourceSans3.ttf', variable: '--font-source', display: 'swap' })
const headingFont = localFont({ src: '../fonts/Manrope.ttf', variable: '--font-manrope', display: 'swap' })
const postalAddress: Record<string, string> = {
  '@type': 'PostalAddress',
  streetAddress: STREET_ADDRESS,
  addressLocality: ADDRESS_LOCALITY,
  addressRegion: ADDRESS_REGION,
  addressCountry: ADDRESS_COUNTRY,
}
if (POSTAL_CODE) postalAddress.postalCode = POSTAL_CODE

const organizationNode: Record<string, unknown> = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/web-app-manifest-512x512.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  priceRange: PRICE_RANGE,
  address: postalAddress,
  areaServed: [
    { '@type': 'City', name: 'Toulouse' },
    { '@type': 'AdministrativeArea', name: 'Occitanie' },
    { '@type': 'Country', name: 'France' },
  ],
  founder: { '@id': `${SITE_URL}/#person` },
  employee: { '@id': `${SITE_URL}/#person` },
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
  sameAs: [
    ...SOCIAL_PROFILES,
    ...(GOOGLE_BUSINESS_URL ? [GOOGLE_BUSINESS_URL] : []),
    ...(WIKIDATA_QID ? [`https://www.wikidata.org/entity/${WIKIDATA_QID}`] : []),
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Création de site internet sur mesure', serviceType: 'Développement web', areaServed: 'Toulouse, Occitanie, France' },
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 1500, priceCurrency: 'EUR' },
      url: `${SITE_URL}/creation-site-internet-toulouse`,
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: "Développement d'application mobile iOS et Android", serviceType: 'Développement application mobile', areaServed: 'Toulouse, Occitanie, France' },
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 4000, priceCurrency: 'EUR' },
      url: `${SITE_URL}/developpement-application-mobile-toulouse`,
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Développement de logiciel métier sur mesure', serviceType: 'Développement logiciel', areaServed: 'Toulouse, Occitanie, France' },
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 4000, priceCurrency: 'EUR' },
      url: `${SITE_URL}/logiciel-sur-mesure-toulouse`,
    },
  ],
}

if (GEO_LATITUDE && GEO_LONGITUDE) {
  organizationNode.geo = {
    '@type': 'GeoCoordinates',
    latitude: GEO_LATITUDE,
    longitude: GEO_LONGITUDE,
  }
}

if (OPENING_HOURS.length > 0) {
  organizationNode.openingHoursSpecification = OPENING_HOURS.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.dayOfWeek,
    opens: slot.opens,
    closes: slot.closes,
  }))
}

const personNode = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: OWNER_NAME,
  jobTitle: OWNER_TITLE,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  address: postalAddress,
  knowsAbout: ['Next.js', 'React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationNode,
    personNode,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'fr-FR',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Développeur d’applications mobiles iOS/Android et web à Toulouse | Lodgic',
    template: '%s | Lodgic',
  },
  description:
    SITE_DESCRIPTION,
  authors: [{ name: 'Yann', url: SITE_URL }],
  creator: 'Yann',
  publisher: 'Lodgic',
  category: 'Développement web et mobile',
  classification: 'Business',
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png?v=2', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Développeur d’applications mobiles iOS/Android et web à Toulouse | Lodgic',
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur d’applications mobiles iOS/Android et web à Toulouse | Lodgic',
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <JsonLd id="site-structured-data" data={structuredData} />
        <link rel="alternate" type="text/markdown" href={`${SITE_URL}/llms.txt`} />
        <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} />

        {/* Consent-gated analytics/scripts are injected client-side */}
      </head>
      <body
        suppressHydrationWarning
        className={`${bodyFont.variable} ${headingFont.variable} bg-white text-[#17232A]`}
      >
        <CookieConsentBanner />
        <ConsentScripts />
        <WebVitals />
          <div className="relative w-full">
            <Navbar />
            {children}
            <Footer />
          </div>
        <ConsentVercelAnalytics />
      </body>
    </html>
  )
}
