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
  title: 'Lodgic',
  description: 'Lodgic est une agence de développement web et mobile',
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
