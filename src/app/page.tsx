import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Hero from '@/app/_sections/Accueil'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'

const About = dynamic(() => import('@/app/_sections/APropos'))
const Services = dynamic(() => import('@/app/_sections/Services'))
const Method = dynamic(() => import('@/app/_sections/Methode'))
const SuccessStories = dynamic(() => import('@/app/_sections/Realisations'))
const FAQ = dynamic(() => import('@/app/_sections/Contact'))

export const metadata: Metadata = {
  title: 'Développeur web, mobile et logiciel à Toulouse',
  description:
    "Yann Rouquié, ingénieur en informatique à Toulouse. Sites web, applications mobiles et logiciels sur mesure pour TPE, PME et porteurs de projet — du cadrage à la mise en ligne.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Développeur web, mobile et logiciel à Toulouse — Lodgic',
    description:
      "Ingénieur en informatique à Toulouse, je conçois et développe des sites web et applications mobiles sur mesure (React.js, Next.js, React Native), de l'architecture à la mise en production.",
    url: SITE_URL,
    siteName: 'Lodgic',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Yann Rouquié, développeur web, mobile et logiciel à Toulouse',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Ingénieur informatique Toulouse',
    'Développeur Web et Mobile Toulouse',
    'Développeur freelance Toulouse',
    'Création site web Toulouse',
    'Création application mobile Toulouse',
    'Développeur web Toulouse',
    'Développeur mobile Toulouse',
    'Site web sur mesure Toulouse',
    'Application mobile sur mesure Toulouse',
    'Développement application Android Toulouse',
    'Développement application iOS Toulouse',
    'Développeur React.js Toulouse',
    'Développeur React Native Toulouse',
    'Logiciel sur mesure Toulouse',
    'Freelance développeur web Toulouse',
    'Freelance développeur mobile Toulouse',
    'React.js',
    'Next.js',
    'React Native',
    'Expo',
    'Prisma',
    'NestJS',
    'site web',
    'application mobile',
    'développeur web',
    'développeur application',
    'développeur mobile',
    'développeur logiciel sur mesure',
    'Toulouse',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur web, mobile et logiciel à Toulouse — Lodgic',
    description:
      "Ingénieur en informatique à Toulouse : conception et développement d'applications web et mobiles sur mesure (React.js, Next.js, React Native).",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
}

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'Developpeur Web et Mobile Toulouse - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <JsonLd id="home-structured-data" data={homeSchema} />
      <main>
          <Hero />

        {/* 1) Ce que j'ai livré — les preuves d'abord */}
          <SuccessStories />

        {/* 2) Ce que je fais */}
          <Services />

        {/* 3) Qui je suis et pourquoi un ingénieur */}
          <About />

        {/* 4) Comment ça se passe */}
          <Method />

        {/* 5) Contact */}
          <FAQ />
      </main>
    </>
  )
}
