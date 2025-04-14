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
  title: "Développeur Application Mobile Toulouse - Lodgic",
  description:
    "Besoin d'un Développeur d'Application Mobile à Toulouse ? Lodgic crée des applications mobiles sur mesure (React Native, Expo) pour startups et entreprises.",
  alternates: {
    canonical: 'https://lodgic-dev.com',
  },
  openGraph: {
    title: "Développeur Application Mobile Toulouse - Lodgic",
    description:
      "Lodgic, développeur d'application mobile à Toulouse, transforme votre idée en application performante (React Native, Expo). Expertise et accompagnement.",
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: "Lodgic - Développeur d'Application Mobile à Toulouse",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
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
    'React Native',
    'Expo',
    'Prisma',
    'NestJS',
    'application mobile',
    'développeur application',
    'agence développement',
    'Toulouse',
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
            "image": "https://lodgic-dev.com/FullLogo_Transparent.png",
            "url": "https://lodgic-dev.com",
            "description": "Lodgic est votre développeur d'application mobile à Toulouse, spécialisé en React Native et Expo pour créer des solutions sur mesure.",
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
