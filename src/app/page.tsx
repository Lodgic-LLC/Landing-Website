import FAQ from '@/components/pages/home/FAQ'
import Features from '@/components/pages/home/Features'
import Hero from '@/components/pages/home/Hero'
import Process from '@/components/pages/home/Process'
import ProjectCTA from '@/components/pages/home/ProjectCTA'
import SuccessStories from '@/components/pages/home/SuccessStories'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Développeurs Application Mobile Toulouse - Lodgic",
  description:
    'Lodgic est une agence de développement web et mobile spécialisée dans la création de sites et applications mobiles modernes, réactifs et performants.',
  alternates: {
    canonical: 'https://lodgic-dev.com',
  },
  openGraph: {
    title: "Agence de développement d'applications mobiles - Lodgic",
    description:
      'Lodgic est une agence de développement web et mobile spécialisée dans la création de sites et applications mobiles modernes, réactifs et performants.',
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - Agence de développement web et mobile',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lodgic",
            "url": "https://lodgic-dev.com",
            "logo": "https://lodgic-dev.com/FullLogo_Transparent.png",
            "description": "Agence de développement web et mobile spécialisée dans la création de sites et applications mobiles modernes, réactifs et performants.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulouse",
              "addressRegion": "Occitanie",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact.lodgic@gmail.com"
            },
          }
        `}
      </Script>
      <div>
        <Hero />
        <Features />
        <Process />
        <ProjectCTA />
        <SuccessStories />
        <FAQ />
      </div>
    </>
  )
}
