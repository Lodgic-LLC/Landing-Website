import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import FAQ from '@/components/pages/home/FAQ'
import Features from '@/components/pages/home/Features'
import Hero from '@/components/pages/home/Hero'
import Process from '@/components/pages/home/Process'
import ProjectCTA from '@/components/pages/home/ProjectCTA'
import SuccessStories from '@/components/pages/home/SuccessStories'
import TechStack from '@/components/pages/home/TechStack'

export const metadata: Metadata = {
  title: 'Développement d\'Applications Mobiles React Native | Lodgic',
  description:
    "Lodgic est une agence spécialisée dans le développement d'applications mobiles performantes avec React Native, Expo, Prisma et NestJS.",
  alternates: {
    canonical: 'https://lodgic-dev.com',
  },
  openGraph: {
    title: 'Expert en Développement d\'Applications Mobile React Native | Lodgic',
    description:
      "Transformez votre idée en application mobile performante grâce à notre expertise en React Native, Expo, Prisma et NestJS. Solutions sur mesure et accompagnement complet.",
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - Experts en Développement d\'Applications Mobile',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'développement mobile',
    'React Native',
    'Expo',
    'Prisma',
    'NestJS',
    'application mobile',
    'développeur application',
    'agence développement'
  ],
}

export default function Home() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Lodgic",
            "url": "https://lodgic-dev.com",
            "logo": "https://lodgic-dev.com/FullLogo_Transparent.png",
            "description": "Agence spécialisée dans le développement d'applications mobiles avec React Native, Expo, Prisma et NestJS.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulouse",
              "addressRegion": "Occitanie",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact.lodgic@gmail.com",
              "availableLanguage": ["French", "English"]
            },
            "sameAs": [
              "https://github.com/lodgic-dev",
              "https://linkedin.com/company/lodgic-dev"
            ],
            "knowsAbout": [
              "React Native",
              "Expo",
              "Prisma",
              "NestJS",
              "Mobile App Development",
              "Cross-platform Development"
            ]
          }
        `}
      </Script>
      <main>
        <Hero />
        <TechStack />
        <Features />
        <Process />
        <SuccessStories />
        <ProjectCTA />
        <FAQ />
      </main>
    </>
  )
}
