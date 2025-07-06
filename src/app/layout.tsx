import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Script from 'next/script'
import { WebVitals } from './web-vitals'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lodgic',
  image: 'https://lodgic-dev.com/FullLogo_Transparent.png',
  url: 'https://lodgic-dev.com',
  email: 'lodgicdev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressRegion: 'Occitanie',
    addressCountry: 'FR',
  },
  sameAs: ['https://github.com/lodgic-llc', 'https://linkedin.com/company/lodgic-dev', 'https://x.com/lodgic-dev'],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lodgic-dev.com'),
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
  authors: [{ name: 'Lodgic', url: 'https://lodgic-dev.com' }],
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
  verification: {
    google: 'your-google-verification-code', // À remplacer par votre code de vérification
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Développeur Application Mobile Toulouse - Lodgic',
    description:
      "Besoin d'un Développeur d'Application Mobile à Toulouse ? Lodgic crée des applications mobiles sur mesure pour startups, entreprises et particuliers.",
    images: '/FullLogo_Transparent_NoBuffer.png',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lodgic-dev.com',
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
    'og:url': 'https://lodgic-dev.com',
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
        {/* Scripts Iubenda pour la gestion des cookies */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

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
      <body className={`${inter.variable} font-inter bg-gray-50 text-gray-800`}>
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
      </body>
    </html>
  )
}
