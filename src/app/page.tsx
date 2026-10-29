import React from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/app/_sections/Accueil'
import DecisionResources from '@/components/DecisionResources'
import Situations from '@/app/_sections/Situations'
import ProjectWorkshop from '@/components/ProjectWorkshop'
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
    "Yann, développeur web et mobile à Toulouse. Un projet cadré, une première version utile et des livrables définis : sites web, applications et outils métier.",
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
      <main className="home-page">
        <Hero />
        <Situations />
        <SuccessStories />
        <Services />
        <ProjectWorkshop />
        <Method />
        <Budget />
        <About fond="blanc" />
        <DecisionResources />
        <Questions />
        <Contact fond="blanc" />
      </main>
    </>
  )
}
