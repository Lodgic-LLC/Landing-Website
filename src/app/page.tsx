import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Hero from '@/components/pages/home/Hero'
import { TrackingSection } from '@/components/analytics/AnalyticsProvider'
import { PageTracker } from '@/components/analytics/PageTracker'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/site'

const About = dynamic(() => import('@/components/pages/home/About'))
const Services = dynamic(() => import('@/components/pages/home/Services'))
const Method = dynamic(() => import('@/components/pages/home/Method'))
const SuccessStories = dynamic(() => import('@/components/pages/home/SuccessStories'))
const FAQ = dynamic(() => import('@/components/pages/home/FAQ'))
const AdvancedTracker = dynamic(() => import('@/components/analytics/AdvancedTracker').then((m) => m.AdvancedTracker))

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
      <StructuredData id="home-structured-data" data={homeSchema} />
      <PageTracker
        pageName="Home"
        pageCategory="landing_page"
        additionalData={{
          page_type: 'homepage',
          business_type: 'web_and_mobile_development',
          location: 'toulouse',
        }}
      />
      <AdvancedTracker
        pageName="Home"
        enableExitIntent={true}
        enableMouseTracking={true}
        enableIdleTracking={true}
        enablePerformanceTracking={true}
        idleTimeout={45000}
        mouseTrackingThreshold={300}
      />
      <main>
        <TrackingSection sectionName="hero" trackOnView={true} trackTimeSpent={true}>
          <Hero />
        </TrackingSection>

        {/* 1) Ce que j'ai livré — les preuves d'abord */}
        <TrackingSection sectionName="realisations" trackOnView={true} trackTimeSpent={true}>
          <SuccessStories />
        </TrackingSection>

        {/* 2) Ce que je fais */}
        <TrackingSection sectionName="services" trackOnView={true} trackTimeSpent={true}>
          <Services />
        </TrackingSection>

        {/* 3) Qui je suis et pourquoi un ingénieur */}
        <TrackingSection sectionName="about" trackOnView={true} trackTimeSpent={true}>
          <About />
        </TrackingSection>

        {/* 4) Comment ça se passe */}
        <TrackingSection sectionName="methode" trackOnView={true} trackTimeSpent={true}>
          <Method />
        </TrackingSection>

        {/* 5) Contact */}
        <TrackingSection sectionName="contact" trackOnView={true} trackTimeSpent={true}>
          <FAQ />
        </TrackingSection>
      </main>
    </>
  )
}
