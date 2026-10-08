import React from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/app/_sections/Accueil'
import ConseilsSection from '@/components/ConseilsSection'
import JsonLd from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import { HOME_TITLE, SITE_URL } from '@/lib/site'

const About = dynamic(() => import('@/app/_sections/APropos'))
const Services = dynamic(() => import('@/app/_sections/Services'))
const Method = dynamic(() => import('@/app/_sections/Methode'))
const SuccessStories = dynamic(() => import('@/app/_sections/Realisations'))
const Budget = dynamic(() => import('@/app/_sections/Budget'))
const Questions = dynamic(() => import('@/app/_sections/Questions'))
const Contact = dynamic(() => import('@/app/_sections/Contact'))

export const metadata: Metadata = {
  title: HOME_TITLE,
  description:
    "Yann, développeur web et mobile à Toulouse. Je crée vos applications iOS et Android, sites web et outils métier, du cadrage à la mise en ligne.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${HOME_TITLE} | Lodgic`,
    description:
      "Yann, développeur web et mobile à Toulouse. Applications iOS et Android, sites web et outils métier.",
    url: SITE_URL,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${HOME_TITLE} | Lodgic`,
    description:
      "Yann, développeur web et mobile à Toulouse. Applications iOS et Android, sites web et outils métier.",
  },
}

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${HOME_TITLE} | Lodgic`,
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <JsonLd id="home-structured-data" data={homeSchema} />
      <ScrollReveal />
      <main>
          <Hero />

        {/* 1) Ce que j'ai livré : les preuves d'abord */}
          <SuccessStories />

        {/* 2) Ce que je fais */}
          <Services />

        {/* 3) Qui je suis */}
          <About fond="blanc" />

        {/* 4) Comment ça se passe */}
          <Method />

          <Budget />
          <ConseilsSection />
          <Questions />

        {/* 5) Contact */}
          <Contact fond="blanc" />
      </main>
    </>
  )
}
