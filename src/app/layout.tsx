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
    default: "Développeur d'Applications Mobile Toulouse | Lodgic",
    template: '%s | Lodgic',
  },
  keywords: [
    'lodgic',
    'dev',
    'lodgic-dev',
    'Conceptioon application mobile',
    'application web',
    'application mobile moderne',
    'application web réactive',
    'application mobile réactive',
    'application web performante',
    'application mobile performante',
    'application web et mobile',
    'application web et mobile modernes',
    'application web et mobile réactifs',
    'application web et mobile performants',
    'développement web',
    'développement mobile',
    'développement mobile moderne',
    'développement web réactif',
    'développement mobile réactif',
    'conception de site web',
    'création de site web',
    'développement site web',
    'développeur site web',
    'création de site web professionnel',
    'création de site internet sur mesure',
    'agence de création de sites internet',
    'agence développement mobile',
    'agence application mobile',
    'développement application',
    'développer une application',
    'développement mobile',
    'développement application mobile',
    'conception application web',
    'refonte de site internet',
    'création application',
    'agence création application mobile',
    'agence developpement application mobile',
    'entreprise développement application mobile',
    'creation application',
    'créer une application',
    'création application mobile',
    'créer une application mobile',
    'creation application mobile',
    'developpeur application mobile',
    'développeur application mobile',
    'creer une application',
    'developpeur application',
    'agence de developpement application mobile',
    'conception application mobile',
    'creer une application mobile',
    'developper une application',
    'agence developpement application',
    'développeur d application mobile',
    'développer une application mobile',
    'digitalisation des entreprises',
    'agence développement application mobile',
    'application mobile sur mesure',
    'transformation numérique entreprise',
    'entreprise de developpement d application',
    'developpement mobile',
    'developper application android',
    'devis création application mobile',
    'développeur application mobile freelance',
    'agence de conception de site web',
    'developper application',
    'création de logiciel sur mesure',
    'developpement applications mobiles',
    'concepteur d application mobile',
    'developpement application',
    'créer une application android',
    'développer une application android',
    'développeur application',
    'conception de site web responsive',
    'création de site e-commerce clé en main',
    'développement application web',
    'développement logiciel sur mesure',
    'créer un application',
    'société création application mobile',
    'société développement application mobile',
    'développement application web sur mesure',
    'développement application sur mesure',
    'développement application mobile sur mesure',
    'meilleur site pour créer un site web',
    'agence de création d application mobile',
    'agence de développement application mobile',
    'developpeur application web et mobile',
    'devis developpement application',
    'développement application mobile entreprise',
    'développement application mobile e-commerce',
    'refonte application mobile',
    'développement de logiciel métier',
    'création application mobile professionnelle',
    'solutions digitales pour PME',
    'développement de site web sécurisé',
    'développeur site web Toulouse',
    'développeur mobile Toulouse',
    'création application iOS et Android',
    'création application iOS',
    'création application Android',
    'création application mobile React Native',
    'développement application native iOS/Android',
    'application mobile avec paiement intégré',
    'conception application mobile ergonomique',
    'création application mobile sur-mesure pour entreprise',
    'développement de site web avec IA intégrée',
    'conception application mobile intuitive',
    'développement application mobile avec géolocalisation',
    'création de site internet optimisé pour le SEO',
    'intégration de chatbots dans une application mobile',
    'application mobile avec abonnement intégré',
    'développement de site web avec marketplace intégrée',
    'développeur application mobile Toulouse',
    'création de site vitrine moderne',
    'création de landing page optimisée',
    'automatisation des process métiers',
    'développeur application web Toulouse',
    "développement d'application mobile",
    "développement d'application web",
    "conception d'application",
    "création d'application",
    "conception d'application mobile",
    "création d'application mobile",
    "conception d'application ios",
    "conception d'application android",
    'développement application multiplateforme',
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
    images: '/FullLogo_Transparent_NoBuffer.png',
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
    <html lang="fr" className="overflow-x-hidden overscroll-none">
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
