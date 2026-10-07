import type { NextConfig } from 'next'

const isDevelopment = process.env.NODE_ENV === 'development'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Racine explicite : le dossier parent contient un package-lock.json parasite
  // qui fausse sinon la détection automatique de Turbopack.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  images: {
    // Toutes les images sont locales : pas de domaine distant autorisé.
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP', 'INP', 'FCP', 'TTFB'],
    scrollRestoration: true,
  },
  async redirects() {
    return [
      // Anciennes pages encore connues de Google : conserver leur valeur SEO
      // uniquement lorsqu'une page actuelle répond à la même intention.
      { source: '/agence-web-mobile-toulouse', destination: '/', permanent: true },
      { source: '/auteurs/yann-rouquie', destination: '/#about', permanent: true },
      { source: '/auteurs/equipe-lodgic', destination: '/#about', permanent: true },
      { source: '/projets/driveapp', destination: '/realisations', permanent: true },
      { source: '/projets/comptabilite', destination: '/realisations', permanent: true },
      { source: '/projets/hiking', destination: '/realisations', permanent: true },
      { source: '/projets', destination: '/realisations', permanent: true },
      { source: '/blog/combien-coute-une-application-en-2026', destination: '/developpement-application-mobile-toulouse', permanent: true },
      { source: '/blog/les-etapes-de-developpement-d-une-application-mobile', destination: '/developpement-application-mobile-toulouse', permanent: true },
      { source: '/blog/ou-trouver-un-developpeur-application-mobile', destination: '/developpement-application-mobile-toulouse', permanent: true },
      { source: '/blog/trouver-une-idee-d-appli-et-creer-un-business-plan', destination: '/preparer-son-projet', permanent: true },
      // Conserver un équivalent utile pour l'ancien guide de cadrage.
      { source: '/blog/cahier-charges-app-mobile', destination: '/preparer-son-projet', permanent: true },
      // Les autres anciens articles et la page agence n'ont pas d'équivalent : Next renvoie 404.
      { source: '/rendez-vous', destination: '/contact', permanent: true },
      { source: '/rendez-vous/:path*', destination: '/contact', permanent: true },
      // Pages SEO fusionnées ou réorientées
      { source: '/creation-application-mobile-sur-mesure', destination: '/developpement-application-mobile-toulouse', permanent: true },
      { source: '/developpement-application-mobile', destination: '/developpement-application-mobile-toulouse', permanent: true },
      { source: '/developpement-application-mobile/apple-android', destination: '/developpement-application-ios-android', permanent: true },
      { source: '/developpement-application-mobile/react-native-flutter', destination: '/developpeur-react-native-toulouse', permanent: true },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'lodgic-dev.com',
          },
        ],
        destination: 'https://www.lodgic-dev.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com https://*.vercel-insights.com https://www.googletagmanager.com https://analytics.ahrefs.com`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://formsubmit.co https://*.vercel-insights.com https://*.vercel-analytics.com https://va.vercel-scripts.com https://*.google-analytics.com https://*.googletagmanager.com https://analytics.ahrefs.com",
              "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|webp|avif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ]
  },
}

export default nextConfig
