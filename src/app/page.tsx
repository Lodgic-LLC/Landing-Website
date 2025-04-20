import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Hero from '@/components/pages/home/Hero'
import TechStack from '@/components/pages/home/TechStack'

const Features = dynamic(() => import('@/components/pages/home/Features'))
const Process = dynamic(() => import('@/components/pages/home/Process'))
const SuccessStories = dynamic(() => import('@/components/pages/home/SuccessStories'))
const ProjectCTA = dynamic(() => import('@/components/pages/home/ProjectCTA'))
const FAQ = dynamic(() => import('@/components/pages/home/FAQ'))

export const metadata: Metadata = {
  title: 'Développeur Application Mobile Toulouse - Lodgic',
  description:
    "Besoin d'un Développeur d'Application Mobile à Toulouse ? Lodgic crée des applications mobiles sur mesure (React Native, Expo) pour startups, entreprises et particuliers.",
  alternates: {
    canonical: 'https://lodgic-dev.com',
  },
  openGraph: {
    title: 'Développeur Application Mobile Toulouse - Lodgic',
    description:
      "Lodgic, développeur d'application mobile à Toulouse, transforme votre idée en application performante (React Native, Expo).",
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: "Développeur d'Application Mobile à Toulouse Lodgic - ",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
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
            "@type": "LocalBusiness",
            "name": "Lodgic",
            "image": "https://lodgic-dev.com/FullLogo_Transparent.png",
            "url": "https://lodgic-dev.com",
            "description": "Lodgic est votre développeur d'application mobile à Toulouse, spécialisé en React Native et Expo pour créer des solutions sur mesure.",
            "email": "lodgic.dev@gmail.com",
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
              "https://github.com/lodgic-llc",
              "https://linkedin.com/company/lodgic-dev",
              "https://x.com/lodgic-dev"
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
        <Features />
        <Process />
        <SuccessStories />
        <TechStack />
        <ProjectCTA />
        <FAQ />
      </main>
    </>
  )
}
