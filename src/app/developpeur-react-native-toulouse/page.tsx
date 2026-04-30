import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { TrackingSection } from '@/components/analytics/AnalyticsProvider'
import { PageTracker } from '@/components/analytics/PageTracker'
import StructuredData from '@/components/seo/StructuredData'
import SeoHero from '@/components/pages/seo-landing/SeoHero'
import SeoExpertise from '@/components/pages/seo-landing/SeoExpertise'
import { SITE_URL } from '@/lib/site'

const About = dynamic(() => import('@/components/pages/home/About'))
const SuccessStories = dynamic(() => import('@/components/pages/home/SuccessStories'))
const Process = dynamic(() => import('@/components/pages/home/Process'))
const FAQ = dynamic(() => import('@/components/pages/home/FAQ'))

const PAGE_PATH = '/developpeur-react-native-toulouse'

export const metadata: Metadata = {
  title: 'Développeur React Native Toulouse - Lodgic',
  description:
    "Développeur React Native à Toulouse : Lodgic conçoit des applications cross-platform iOS et Android performantes en React Native, TypeScript et Expo, avec un seul code base.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Développeur React Native Toulouse - Lodgic',
    description:
      "Agence React Native à Toulouse. Une seule équipe TypeScript pour vos applications iOS et Android, livrées en quelques semaines.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Lodgic Dev',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Développeur React Native Toulouse - Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Développeur React Native Toulouse',
    'Agence React Native Toulouse',
    'Freelance React Native Toulouse',
    'Application React Native',
    'Expo développeur Toulouse',
    'Développement cross-platform Toulouse',
    'TypeScript React Native',
    'Application iOS Android React Native',
    'Lead React Native France',
    'Refonte React Native',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur React Native Toulouse - Lodgic',
    description:
      "Lodgic, équipe React Native à Toulouse. iOS et Android avec un seul code base, en TypeScript / Expo.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
}

export default function DeveloppeurReactNativeToulousePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Développeur React Native Toulouse - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <StructuredData id="seo-react-native-webpage" data={pageSchema} />
      <PageTracker
        pageName="SEO - React Native Toulouse"
        pageCategory="seo_landing"
        additionalData={{ page_type: 'seo_landing', target_keyword: 'developpeur_react_native_toulouse' }}
      />
      <main>
        <TrackingSection sectionName="hero" trackOnView={true} trackTimeSpent={true}>
          <SeoHero
            eyebrow="React Native · TypeScript · Expo"
            title="Développeur React Native à Toulouse"
            highlight="Une seule équipe, deux apps natives"
            description={
              <>
                Vous cherchez un <strong>développeur React Native à Toulouse</strong> ? Lodgic conçoit des
                applications cross-platform iOS et Android en <strong>React Native, TypeScript et Expo</strong>. Un
                seul code, deux apps, un budget maîtrisé.
              </>
            }
            badges={['React Native 0.74+', 'Expo SDK', 'TypeScript strict', 'Reanimated', 'OTA updates']}
            visual="react-native"
          />
        </TrackingSection>

        <TrackingSection sectionName="expertise" trackOnView={true} trackTimeSpent={true}>
          <SeoExpertise
            eyebrow="Expertise React Native"
            heading={
              <>
                Pourquoi <span className="text-[#0EA5E9]">React Native</span> ? Parce qu'on ne paie pas deux fois
                la même app.
              </>
            }
            intro={
              <>
                <strong>React Native</strong> permet de partager 90% du code entre iOS et Android. Résultat : un budget
                quasi divisé par deux, une seule base de code à maintenir, et des releases simultanées sur les deux
                stores.
              </>
            }
            cards={[
              {
                num: 'RN',
                title: 'React Native + Expo : la stack moderne',
                body: (
                  <>
                    Nous travaillons sur <strong>Expo SDK</strong> et le <strong>New Architecture</strong> de React
                    Native (Fabric, TurboModules). Performance native, hot reload instantané, OTA updates sans
                    repasser par les stores.
                  </>
                ),
                bullets: [
                  'Expo SDK 50+ avec EAS Build',
                  'New Architecture (Fabric, Turbo)',
                  'Reanimated 3 pour des animations 60fps',
                  'OTA updates via EAS Update',
                ],
              },
              {
                num: 'TS',
                title: 'TypeScript strict de bout en bout',
                body: (
                  <>
                    100% TypeScript, du composant React Native à l'API NestJS. Typage partagé entre client et serveur,
                    moins de bugs en production, refactor serein.
                  </>
                ),
                bullets: [
                  'TypeScript strict mode',
                  'Validation Zod / tRPC',
                  'Types partagés client/serveur',
                  'ESLint + Prettier configurés',
                ],
              },
              {
                num: 'UI',
                title: 'UI native, animations 60fps',
                body: (
                  <>
                    React Native ne veut pas dire mauvaise UX. Avec <strong>Reanimated</strong>, gestures natifs,
                    Skia et Lottie, vos écrans sont aussi fluides qu'une app Swift ou Kotlin.
                  </>
                ),
                bullets: [
                  'Reanimated 3 + Gesture Handler',
                  'React Native Skia',
                  'Lottie pour les micro-animations',
                  'Performance audit Hermes',
                ],
              },
              {
                num: 'API',
                title: 'Backend TypeScript intégré',
                body: (
                  <>
                    Nous développons aussi votre backend en <strong>NestJS</strong>, <strong>Prisma</strong> et
                    PostgreSQL. Une seule équipe React Native + backend, hébergement EU et RGPD-friendly.
                  </>
                ),
                bullets: [
                  'NestJS / Prisma / PostgreSQL',
                  'Authentification JWT, OAuth, magic link',
                  'Hébergement Vercel, AWS, Scaleway',
                  'Webhooks Stripe & RevenueCat',
                ],
              },
              {
                num: 'CI/CD',
                title: 'EAS Build, CI/CD et stores',
                body: (
                  <>
                    Builds iOS et Android automatisés avec <strong>EAS Build</strong>, distribution interne via
                    TestFlight et Internal Testing, soumission automatique App Store et Google Play.
                  </>
                ),
                bullets: [
                  'EAS Build & EAS Submit',
                  'TestFlight + Internal Testing',
                  'Versioning sémantique automatique',
                  'GitHub Actions workflows',
                ],
              },
              {
                num: 'Audit',
                title: 'Audit & refonte React Native',
                body: (
                  <>
                    Vous avez déjà une application React Native ? Nous réalisons des <strong>audits techniques</strong>{' '}
                    (perf, sécurité, dépendances) et accompagnons vos refontes vers le New Arch.
                  </>
                ),
                bullets: [
                  'Audit perf & bundle size',
                  'Migration vers le New Arch',
                  'Mise à jour SDK Expo',
                  'Reprise de code legacy',
                ],
              },
            ]}
            closing={
              <>
                <p>
                  Pourquoi choisir un <strong>développeur React Native à Toulouse</strong> plutôt qu'une équipe offshore ?
                  Parce que la qualité d'une app mobile dépend autant de la communication que du code. À Toulouse, on
                  parle français, on travaille sur le même fuseau horaire et on peut se voir en présentiel.
                </p>
                <p>
                  React Native n'est pas un compromis. <strong>Discord, Shopify, Microsoft Office, Coinbase</strong> et
                  même certaines parties de Facebook tournent en React Native. La techno est mature, la communauté est
                  immense et le ROI est imbattable pour qui veut deux applications natives au prix d'une.
                </p>
                <p>
                  Que vous lanciez un MVP B2C, une app interne pour vos commerciaux ou une refonte complète d'une
                  application existante, notre <strong>équipe React Native à Toulouse</strong> vous accompagne du
                  cadrage à la mise en production.
                </p>
              </>
            }
            crossLinks={[
              {
                title: 'Développement application iOS et Android',
                href: '/developpement-application-ios-android',
                description: 'Comparer React Native, Flutter et le développement natif Swift / Kotlin.',
              },
              {
                title: 'Développement application mobile à Toulouse',
                href: '/developpement-application-mobile-toulouse',
                description: 'Notre offre globale mobile pour la région toulousaine.',
              },
              {
                title: 'Création application mobile sur mesure',
                href: '/creation-application-mobile-sur-mesure',
                description: 'Notre méthode pour les projets mobiles 100% personnalisés.',
              },
            ]}
          />
        </TrackingSection>

        <TrackingSection sectionName="offre" trackOnView={true} trackTimeSpent={true}>
          <Process />
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
