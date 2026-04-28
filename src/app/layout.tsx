import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Script from 'next/script'
import { WebVitals } from './web-vitals'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '@/components/seo/StructuredData'
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon_bgblanc.png`,
      image: `${SITE_URL}/lodgic-banner.png`,
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toulouse',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: 'Toulouse' },
        { '@type': 'AdministrativeArea', name: 'Occitanie' },
        { '@type': 'Country', name: 'France' },
      ],
      sameAs: [
        'https://github.com/lodgic-llc',
        'https://linkedin.com/company/lodgic-dev',
        'https://x.com/lodgic-dev',
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Developpement application mobile sur mesure',
            serviceType: 'Developpement application mobile',
            areaServed: 'Toulouse, Occitanie, France',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creation site web sur mesure',
            serviceType: 'Developpement web',
            areaServed: 'Toulouse, Occitanie, France',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Lodgic Dev',
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
    default: 'Développeur Application Mobile Toulouse - Lodgic',
    template: '%s | Lodgic',
  },
  keywords: [
    'Développeur Application Mobile Toulouse',
    'Développeurs Applications Mobile Toulouse',
    'Agence développement mobile Toulouse',
    'Création application mobile Toulouse',
    'Développeur mobile Toulouse',
    'Application mobile sur mesure Toulouse',
    'Développement application Android Toulouse',
    'Développement application iOS Toulouse',
    'Développeur React Native Toulouse',
    'Agence web et mobile Toulouse',
    'Freelance développeur mobile Toulouse',
    'Lodgic',
    'développement application mobile',
    'création application mobile',
    'application mobile sur mesure',
    'développement application web',
    'agence développement mobile',
    'développeur application mobile',
    'développement Android',
    'développement iOS',
  ],
  description:
    "Besoin d'un Développeur d'Application Mobile à Toulouse ? Lodgic crée des applications mobiles sur mesure pour startups, entreprises et particuliers.",
  authors: [{ name: 'Lodgic', url: SITE_URL }],
  creator: 'Lodgic',
  publisher: 'Lodgic',
  category: 'Développement Mobile',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Développeur Application Mobile Toulouse - Lodgic',
    description:
      "Besoin d'un Développeur d'Application Mobile à Toulouse ? Lodgic crée des applications mobiles sur mesure pour startups, entreprises et particuliers.",
    images: '/lodgic-banner.png',
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Lodgic Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Application Mobile Toulouse - Lodgic',
    description:
      "Besoin d'un Développeur d'Application Mobile à Toulouse ? Lodgic crée des applications mobiles sur mesure pour startups, entreprises et particuliers.",
    images: '/lodgic-banner.png',
    creator: '@lodgic',
    site: '@lodgic',
  },
  other: {
    'instagram:card': 'summary_large_image',
    'instagram:title': 'Développeur Application Mobile Toulouse - Lodgic',
    'instagram:description':
      "Lodgic, développeur d'application mobile à Toulouse, transforme votre idée en application performante (React Native, Expo).",
    'instagram:image': '/lodgic-banner.png',
    'whatsapp:card': 'summary_large_image',
    'whatsapp:title': 'Développeur Application Mobile Toulouse - Lodgic',
    'whatsapp:description':
      "Lodgic, développeur d'application mobile à Toulouse, transforme votre idée en application performante (React Native, Expo).",
    'whatsapp:image': '/lodgic-banner.png',
    'og:image': '/lodgic-banner.png',
    'og:url': SITE_URL,
    'og:site_name': 'Lodgic Dev',
    'og:locale': 'fr_FR',
    'og:type': 'website',
    'og:title': 'Développeur Application Mobile Toulouse - Lodgic',
    'og:description':
      "Lodgic, développeur d'application mobile à Toulouse, transforme votre idée en application performante (React Native, Expo).",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="" suppressHydrationWarning>
      <head>
        <StructuredData id="site-structured-data" data={structuredData} />
        <link rel="alternate" type="text/markdown" href={`${SITE_URL}/llms.txt`} />
        <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} />

        {/* Google Analytics et Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LV93937W8D" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LV93937W8D');
            gtag('config', 'AW-16908078298', {
              'send_page_view': false
            });
          `}
        </Script>

        {/* Ahrefs Analytics Script */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="NwAOnm/5ns2EDAKe8YmE8g"
          strategy="afterInteractive"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${plusJakartaSans.variable} font-inter bg-gray-50 text-gray-800`}
      >
        <WebVitals />
        <AnalyticsProvider
          config={{
            debug: process.env.NODE_ENV === 'development',
            enableAutoTracking: true,
            scrollThreshold: 25,
            timeThreshold: 10,
            exitIntentEnabled: true,
          }}
        >
          <div className="relative w-full">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  )
}
