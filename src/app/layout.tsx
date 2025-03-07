import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AOSInitializer from '@/components/layout/AOSInitializer'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lodgic-dev.com'),
  title: "Lodgic - Conception d'applications web et mobiles",
  keywords: [
    'lodgic',
    'dev',
    'lodgic-dev',
    'application mobile',
    'application web',
    'application web moderne',
    'application mobile moderne',
    'application web réactive',
    'application mobile réactive',
    'application web performante',
    'application mobile performante',
    'application web et mobile',
    'application web et mobile modernes',
    'application web et mobile réactifs',
    'application web et mobile performants',
    'application web et mobile modernes, réactifs et performants',
    'développement web',
    'développement mobile',
    'développement web moderne',
    'développement mobile moderne',
    'développement web réactif',
    'développement mobile réactif',
  ],
  description:
    'Agence de développement web spécialisée dans la création de sites et applications web modernes, réactifs et performants.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Lodgic - Conception d'applications web et mobiles",
    description:
      'Agence de développement web spécialisée dans la création de site, applications web et mobiles modernes, réactifs et performants.',
    images: '/FullLogo_Transparent.png',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lodgic - Conception d'applications web et mobiles",
    description:
      'Agence de développement web spécialisée dans la création de site, applications web et mobiles modernes, réactifs et performants.',
    images: '/FullLogo_Transparent.png',
    creator: '@lodgic',
    site: '@lodgic',
  },
  other: {
    'instagram:card': 'summary_large_image',
    'instagram:title': "Lodgic - Conception d'applications web et mobiles",
    'instagram:description':
      'Agence de développement web spécialisée dans la création de site, applications web et mobiles modernes, réactifs et performants.',
    'instagram:image': '/FullLogo_Transparent.png',
    'whatsapp:card': 'summary_large_image',
    'whatsapp:title': "Lodgic - Conception d'applications web et mobiles",
    'whatsapp:description':
      'Agence de développement web spécialisée dans la création de site, applications web et mobiles modernes, réactifs et performants.',
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
    <html lang="fr" className="overflow-x-hidden">
      <head>
        {/* Scripts Iubenda pour la gestion des cookies */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":3950256,"cookiePolicyId":94594353,"lang":"fr","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script src="https://cs.iubenda.com/autoblocking/3950256.js" strategy="beforeInteractive" />
        <Script src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="beforeInteractive" />
        <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" charSet="UTF-8" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LV93937W8D" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LV93937W8D');
        `}
        </Script>
      </head>
      <body className={`${inter.variable} bg-white min-h-screen overflow-x-hidden antialiased`}>
        <AOSInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
