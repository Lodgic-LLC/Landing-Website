import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lodgic-dev.com'),
  title: {
    default: 'Développeur Application Mobile Toulouse - Lodgic',
    template: '%s | Lodgic',
  },
  keywords: [
    'Développeur Application Mobile Toulouse',
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
    'Développeur Application Mobile à Toulouse : Lodgic conçoit des applications mobiles (Android & iOS) et web sur mesure pour entrepreneurs et startups.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Lodgic - Développeur Application Mobile Toulouse",
    description:
      "Agence spécialisée dans la conception d'applications mobiles (Android & iOS) et web sur mesure pour les entrepreneurs et startups à Toulouse.",
    images: '/FullLogo_Transparent_NoBuffer.png',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lodgic - Développeur Application Mobile Toulouse",
    description:
      "Agence spécialisée dans la conception d'applications mobiles (Android & iOS) et web sur mesure pour les entrepreneurs et startups à Toulouse.",
    images: '/FullLogo_Transparent.png',
    creator: '@lodgic',
    site: '@lodgic',
  },
  other: {
    'instagram:card': 'summary_large_image',
    'instagram:title': "Lodgic - Développeur Application Mobile Toulouse",
    'instagram:description':
      "Agence spécialisée dans la conception d'applications mobiles (Android & iOS) et web sur mesure pour les entrepreneurs et startups à Toulouse.",
    'instagram:image': '/FullLogo_Transparent.png',
    'whatsapp:card': 'summary_large_image',
    'whatsapp:title': "Lodgic - Développeur Application Mobile Toulouse",
    'whatsapp:description':
      "Agence spécialisée dans la conception d'applications mobiles (Android & iOS) et web sur mesure pour les entrepreneurs et startups à Toulouse.",
    'whatsapp:image': '/FullLogo_Transparent.png',
    'og:logo': '/FullLogo_Transparent.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="overflow-x-hidden overscroll-none">
      <head>
        {/* Scripts Iubenda pour la gestion des cookies */}
        <Script id="iubenda-config" strategy="afterInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":3950256,"cookiePolicyId":94594353,"lang":"fr","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script src="https://cs.iubenda.com/autoblocking/3950256.js" strategy="afterInteractive" />
        <Script src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="afterInteractive" />
        <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" charSet="UTF-8" async />

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
      </head>
      <body className={`${inter.variable} bg-white min-h-screen overflow-x-hidden overscroll-none antialiased`}>
        <div className="relative w-full overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
