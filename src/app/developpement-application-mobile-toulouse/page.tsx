import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { TrackingSection } from '@/components/analytics/AnalyticsProvider'
import { PageTracker } from '@/components/analytics/PageTracker'
import StructuredData from '@/components/seo/StructuredData'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import SeoHero from '@/components/pages/seo-landing/SeoHero'
import SeoExpertise from '@/components/pages/seo-landing/SeoExpertise'
import { SITE_URL } from '@/lib/site'

const About = dynamic(() => import('@/components/pages/home/About'))
const SuccessStories = dynamic(() => import('@/components/pages/home/SuccessStories'))
const FAQ = dynamic(() => import('@/components/pages/home/FAQ'))

const PAGE_PATH = '/developpement-application-mobile-toulouse'

export const metadata: Metadata = {
  title: 'Développement application mobile à Toulouse',
  description:
    "Développement application mobile à Toulouse : agence Lodgic conçoit et développe vos applications iOS et Android sur mesure pour startups, PME et grands comptes en région toulousaine.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Développement application mobile à Toulouse - Lodgic',
    description:
      "Lodgic, agence de développement application mobile à Toulouse. iOS, Android, React Native : du cadrage produit à la mise en production.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Lodgic',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Développement application mobile à Toulouse - Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Développement application mobile à Toulouse',
    'Agence développement application mobile Toulouse',
    'Création application mobile Toulouse',
    'Développeur mobile Toulouse',
    'Application iOS Toulouse',
    'Application Android Toulouse',
    'Application React Native Toulouse',
    'Développement application sur mesure Toulouse',
    'Freelance développeur mobile Toulouse',
    'Agence mobile Haute-Garonne',
    'Développement app mobile Occitanie',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Développement application mobile à Toulouse - Lodgic',
    description:
      "Développement application mobile à Toulouse : iOS, Android, React Native. Lodgic accompagne vos projets de A à Z.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
}

export default function DeveloppementApplicationMobileToulousePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Développement application mobile à Toulouse - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Développement application mobile à Toulouse', url: `${SITE_URL}${PAGE_PATH}` },
  ]

  return (
    <>
      <StructuredData id="seo-toulouse-mobile-webpage" data={pageSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <PageTracker
        pageName="SEO - Mobile Toulouse"
        pageCategory="seo_landing"
        additionalData={{ page_type: 'seo_landing', target_keyword: 'developpement_application_mobile_toulouse' }}
      />
      <main>
        <TrackingSection sectionName="hero" trackOnView={true} trackTimeSpent={true}>
          <SeoHero
            eyebrow="Agence mobile · Toulouse"
            title="Développement application mobile à Toulouse"
            highlight="iOS, Android et cross-platform sur mesure"
            description={
              <>
                Lodgic est une <strong>agence de développement application mobile à Toulouse</strong>. Nous concevons
                des applications natives iOS, Android et hybrides React Native pour les startups, PME et grands comptes
                de la région toulousaine et d'Occitanie.
              </>
            }
            badges={[
              'iOS · Swift / SwiftUI',
              'Android · Kotlin',
              'React Native · Expo',
              'Cadrage produit',
              'Présence à Toulouse',
            ]}
            visual="devices"
          />
        </TrackingSection>

        <TrackingSection sectionName="expertise" trackOnView={true} trackTimeSpent={true}>
          <SeoExpertise
            eyebrow="Notre expertise mobile à Toulouse"
            heading={
              <>
                Une agence mobile <span className="text-[#0EA5E9]">implantée à Toulouse</span>, pour vos projets iOS et
                Android.
              </>
            }
            intro={
              <>
                Du quartier des Carmes à la Cité de l'espace, nous accompagnons les acteurs toulousains dans la{' '}
                <strong>création d'application mobile sur mesure</strong>. Réunions sur place, échanges en français,
                équipe à proximité : on travaille avec vous, pas pour vous.
              </>
            }
            cards={[
              {
                num: 'Mobile native',
                title: 'Applications iOS & Android natives',
                body: (
                  <>
                    Quand la performance et l'accès aux capteurs comptent (BLE, ARKit, paiement Apple Pay), nous
                    développons en <strong>Swift</strong> pour iOS et en <strong>Kotlin</strong> pour Android. Vous
                    obtenez une expérience fluide sur chaque plateforme.
                  </>
                ),
                bullets: [
                  'Swift / SwiftUI pour iOS',
                  'Kotlin / Jetpack Compose pour Android',
                  'Push notifications, géolocalisation, paiements',
                  'Publication App Store et Google Play',
                ],
              },
              {
                num: 'Cross-platform',
                title: 'Applications React Native & Expo',
                body: (
                  <>
                    Pour réduire le coût et accélérer le time-to-market, le <strong>développement React Native</strong>{' '}
                    permet de partager 90% du code entre iOS et Android, sans sacrifier la qualité de l'expérience.
                  </>
                ),
                bullets: [
                  'React Native / Expo / TypeScript',
                  'Build OTA et déploiement continu',
                  'Modules natifs sur mesure',
                  'Compatible iPhone, iPad et Android',
                ],
              },
              {
                num: 'Cadrage',
                title: 'Cadrage produit & UX mobile',
                body: (
                  <>
                    Avant la première ligne de code : ateliers de cadrage à Toulouse, parcours utilisateurs, maquettes
                    interactives Figma et priorisation MVP. On valide ce qui compte vraiment pour vos utilisateurs.
                  </>
                ),
                bullets: [
                  'Ateliers de cadrage en présentiel à Toulouse',
                  'Wireframes & prototypes Figma',
                  'User flows et architecture de l\'information',
                  'Roadmap MVP réaliste',
                ],
              },
              {
                num: 'Backend',
                title: 'API, backend et infrastructure cloud',
                body: (
                  <>
                    Une application mobile, c'est aussi un backend solide. Nous construisons des API <strong>NestJS</strong>,{' '}
                    <strong>Prisma</strong> et bases <strong>PostgreSQL</strong> hébergées sur Vercel, AWS ou Scaleway.
                  </>
                ),
                bullets: [
                  'API REST & GraphQL',
                  'Authentification, paiements Stripe',
                  'Hébergement EU & RGPD',
                  'CI/CD et monitoring',
                ],
              },
              {
                num: 'Stores',
                title: 'Publication App Store & Google Play',
                body: (
                  <>
                    Configuration des comptes développeurs, fiches store optimisées (ASO), screenshots, soumission et
                    suivi des review Apple & Google. Vous publiez sereinement.
                  </>
                ),
                bullets: [
                  'Apple Developer Program',
                  'Google Play Console',
                  'ASO et fiches store optimisées',
                  'Réponse aux review Apple/Google',
                ],
              },
              {
                num: 'Maintenance',
                title: 'TMA et évolution continue',
                body: (
                  <>
                    Une <strong>application mobile à Toulouse</strong> ne s'arrête pas à la mise en ligne. Nous assurons
                    la TMA, les mises à jour iOS/Android annuelles et l'évolution de votre produit.
                  </>
                ),
                bullets: [
                  'Maintenance corrective & évolutive',
                  'Suivi crash et analytics',
                  'Mises à jour iOS / Android',
                  'Astreinte sur incident',
                ],
              },
            ]}
            closing={
              <>
                <p>
                  Le <strong>développement d'une application mobile à Toulouse</strong> ne se résume pas à coder un
                  écran de connexion. Il faut comprendre votre métier, vos contraintes réglementaires (RGPD, paiements
                  PCI-DSS, accessibilité RGAA), et choisir la bonne stack avant la première sprint planning.
                </p>
                <p>
                  Notre méthode : un <strong>atelier de cadrage gratuit</strong> dans nos bureaux ou les vôtres, à
                  Toulouse intra-muros ou en périphérie (Blagnac, Colomiers, Labège, Balma). Vous repartez avec une
                  estimation budgétaire, un planning, et le bon framework — natif, React Native ou Flutter selon vos
                  besoins.
                </p>
                <p>
                  Lodgic intervient pour des projets <strong>application iOS</strong>, <strong>application Android</strong>,
                  applications hybrides <strong>React Native</strong>, mais aussi sur la partie backend, web et
                  infrastructure cloud associée. Une seule équipe, basée à Toulouse, pour toute la chaîne.
                </p>
              </>
            }
            crossLinks={[
              {
                title: 'Création application mobile sur mesure',
                href: '/creation-application-mobile-sur-mesure',
                description: 'Notre approche du développement 100% personnalisé pour startups et PME.',
              },
              {
                title: 'Développeur React Native Toulouse',
                href: '/developpeur-react-native-toulouse',
                description: 'Pourquoi choisir React Native pour réduire les coûts et accélérer le time-to-market.',
              },
              {
                title: 'Application iOS et Android',
                href: '/developpement-application-ios-android',
                description: 'iOS Swift, Android Kotlin ou cross-platform : choisir la bonne approche.',
              },
            ]}
          />
        </TrackingSection>


        <TrackingSection sectionName="about" trackOnView={true} trackTimeSpent={true}>
          <About />
        </TrackingSection>

        <TrackingSection sectionName="realisations" trackOnView={true} trackTimeSpent={true}>
          <SuccessStories />
        </TrackingSection>

        <TrackingSection sectionName="faq" trackOnView={true} trackTimeSpent={true}>
          <FAQ />
        </TrackingSection>
      </main>
    </>
  )
}
