import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Hero from '@/components/pages/home/Hero'
import { TrackingSection } from '@/components/analytics/AnalyticsProvider'
import { PageTracker } from '@/components/analytics/PageTracker'
import { AdvancedTracker } from '@/components/analytics/AdvancedTracker'

const About = dynamic(() => import('@/components/pages/home/About'))
const SuccessStories = dynamic(() => import('@/components/pages/home/SuccessStories'))
const Process = dynamic(() => import('@/components/pages/home/Process'))
const FAQ = dynamic(() => import('@/components/pages/home/FAQ'))

export const metadata: Metadata = {
  title: 'Développeur Web et Mobile Toulouse - Lodgic',
  description:
    "Besoin d'un Développeur Web et Mobile à Toulouse ? Lodgic crée des sites web et applications mobiles sur mesure pour startups, entreprises et particuliers.",
  alternates: {
    canonical: 'https://lodgic-dev.com',
  },
  openGraph: {
    title: 'Développeur Web et Mobile Toulouse - Lodgic',
    description:
      "Lodgic, développeur web et mobile à Toulouse, transforme votre idée en site web ou application performante (React.js, Next.js, React Native). Expertise et accompagnement.",
    url: 'https://lodgic-dev.com',
    siteName: 'Lodgic Dev',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: "Développeur Web et Mobile à Toulouse Lodgic",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Développeur Web et Mobile Toulouse',
    'Agence développement web et mobile Toulouse',
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
    'Agence web et mobile Toulouse',
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
    'agence développement',
    'Toulouse',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Web et Mobile Toulouse - Lodgic',
    description:
      "Besoin d'un Développeur Web et Mobile à Toulouse ? Lodgic crée des sites web et applications mobiles sur mesure (React.js, Next.js, React Native).",
    images: ['https://lodgic-dev.com/FullLogo_Transparent.png'],
  },
}

export default function Home() {
  return (
    <>
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

        {/* 1) Qui sommes-nous */}
        <TrackingSection sectionName="about" trackOnView={true} trackTimeSpent={true}>
          <About />
        </TrackingSection>

        {/* 2) Nos réalisations */}
        <TrackingSection sectionName="realisations" trackOnView={true} trackTimeSpent={true}>
          <SuccessStories />
        </TrackingSection>

        {/* 3) Découvrir notre offre */}
        <TrackingSection sectionName="offre" trackOnView={true} trackTimeSpent={true}>
          <Process />
        </TrackingSection>

        {/* 4) Une question ? / Contact */}
        <TrackingSection sectionName="faq" trackOnView={true} trackTimeSpent={true}>
          <FAQ />
        </TrackingSection>
      </main>
    </>
  )
}
