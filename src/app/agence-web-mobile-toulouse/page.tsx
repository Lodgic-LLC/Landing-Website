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

const PAGE_PATH = '/agence-web-mobile-toulouse'

export const metadata: Metadata = {
  title: 'Agence web et mobile Toulouse - Lodgic',
  description:
    "Agence web et mobile à Toulouse : Lodgic conçoit sites web Next.js, applications mobiles iOS / Android et SaaS sur mesure pour startups, PME et grands comptes.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Agence web et mobile Toulouse - Lodgic',
    description:
      "Agence de développement web et mobile à Toulouse. Sites Next.js, applications iOS et Android, SaaS et plateformes métier sur mesure.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Lodgic Dev',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Agence web et mobile Toulouse - Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Agence web et mobile Toulouse',
    'Agence digitale Toulouse',
    'Agence web Toulouse',
    'Agence mobile Toulouse',
    'Agence développement Toulouse',
    'Création site internet Toulouse',
    'Création application mobile Toulouse',
    'Agence Next.js Toulouse',
    'Agence React Toulouse',
    'Agence SaaS Toulouse',
    'Agence digitale Occitanie',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Agence web et mobile Toulouse - Lodgic',
    description:
      "Une seule agence à Toulouse pour votre site web et votre application mobile. Next.js, React Native, iOS, Android.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
}

export default function AgenceWebMobileToulousePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Agence web et mobile Toulouse - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <StructuredData id="seo-agence-toulouse-webpage" data={pageSchema} />
      <PageTracker
        pageName="SEO - Agence web et mobile Toulouse"
        pageCategory="seo_landing"
        additionalData={{ page_type: 'seo_landing', target_keyword: 'agence_web_mobile_toulouse' }}
      />
      <main>
        <TrackingSection sectionName="hero" trackOnView={true} trackTimeSpent={true}>
          <SeoHero
            eyebrow="Agence digitale · Toulouse"
            title="Agence web et mobile à Toulouse"
            highlight="Sites, apps et SaaS, par une seule équipe"
            description={
              <>
                Lodgic est une <strong>agence web et mobile à Toulouse</strong>. Nous concevons sites internet
                Next.js, applications iOS et Android, plateformes SaaS et logiciels métier — pour startups, PME et
                grands comptes en Occitanie comme partout en France.
              </>
            }
            badges={[
              'Sites Next.js',
              'Applications iOS / Android',
              'SaaS sur mesure',
              'Branding & UI/UX',
              'Hébergement EU & RGPD',
            ]}
            visual="agency"
          />
        </TrackingSection>

        <TrackingSection sectionName="expertise" trackOnView={true} trackTimeSpent={true}>
          <SeoExpertise
            eyebrow="Web + Mobile : un seul partenaire"
            heading={
              <>
                Une <span className="text-[#0EA5E9]">agence à Toulouse</span> qui couvre tout votre stack digital.
              </>
            }
            intro={
              <>
                Pourquoi multiplier les prestataires ? <strong>Lodgic</strong> couvre l'intégralité de votre projet
                digital : du site vitrine à l'application mobile native, en passant par le SaaS interne et le backend
                cloud.
              </>
            }
            cards={[
              {
                num: 'WEB',
                title: 'Sites web et SaaS Next.js',
                body: (
                  <>
                    Sites vitrines, e-commerce, SaaS et plateformes métier en <strong>Next.js</strong>,{' '}
                    <strong>React</strong> et <strong>TypeScript</strong>. SEO technique, Core Web Vitals au vert,
                    hébergement Vercel ou EU.
                  </>
                ),
                bullets: [
                  'Next.js 14 App Router',
                  'TailwindCSS + design system',
                  'SEO technique & schema.org',
                  'Hébergement Vercel / Scaleway',
                ],
              },
              {
                num: 'MOB',
                title: 'Applications iOS et Android',
                body: (
                  <>
                    <strong>Applications natives</strong> Swift / Kotlin ou cross-platform <strong>React Native /
                    Expo</strong>. Publication App Store et Google Play, OTA updates, monitoring crash en production.
                  </>
                ),
                bullets: [
                  'iOS / Android natifs',
                  'React Native + Expo',
                  'Publication des stores',
                  'Crashlytics & Sentry',
                ],
              },
              {
                num: 'API',
                title: 'Backend & API NestJS',
                body: (
                  <>
                    Backend <strong>NestJS</strong>, <strong>Prisma</strong> et <strong>PostgreSQL</strong> pour
                    soutenir vos sites et apps. Webhooks, paiements Stripe, intégrations CRM/ERP.
                  </>
                ),
                bullets: [
                  'NestJS / Prisma / PostgreSQL',
                  'Stripe, HubSpot, Salesforce',
                  'Authentification & SSO',
                  'CI/CD GitHub Actions',
                ],
              },
              {
                num: 'UI',
                title: 'Design UI/UX & branding',
                body: (
                  <>
                    Notre studio interne crée logos, design systems, maquettes Figma et brand guidelines. Une
                    cohérence visuelle web ↔ mobile, du logo à la dernière icône.
                  </>
                ),
                bullets: [
                  'Branding & identité visuelle',
                  'Design system Figma',
                  'Maquettes haute fidélité',
                  'Prototypes interactifs',
                ],
              },
              {
                num: 'SaaS',
                title: 'SaaS, plateformes et outils internes',
                body: (
                  <>
                    Vous voulez digitaliser un process métier ? Nous concevons des <strong>SaaS sur mesure</strong>{' '}
                    (multi-tenant, paiement abonnement, tableau de bord) et des outils internes pour vos équipes.
                  </>
                ),
                bullets: [
                  'Architecture multi-tenant',
                  'Abonnements Stripe Billing',
                  'Dashboards & exports',
                  'Outils internes RH / ops',
                ],
              },
              {
                num: 'TMA',
                title: 'TMA, hébergement & support',
                body: (
                  <>
                    Maintenance corrective et évolutive, monitoring 24/7, gestion d'incidents, mises à jour de
                    sécurité. <strong>Une seule agence à Toulouse</strong> qui reste avec vous après le lancement.
                  </>
                ),
                bullets: [
                  'TMA web & mobile',
                  'Monitoring Sentry / Datadog',
                  'Astreinte sur incident',
                  'Mises à jour de sécurité',
                ],
              },
            ]}
            closing={
              <>
                <p>
                  Travailler avec <strong>une agence web et mobile à Toulouse</strong>, c'est éviter les guerres de
                  responsabilités entre prestataires. Le bug vient-il de l'app ou du backend ? De la home Next.js ou
                  du tracking ? Avec Lodgic, on s'en occupe — on est à la fois côté web et côté mobile.
                </p>
                <p>
                  Notre équipe travaille pour des startups financées, des PME industrielles, des cabinets de conseil
                  et des collectivités. <strong>De Toulouse à Paris, Bordeaux et Montpellier</strong>, on intervient
                  partout en France, en privilégiant les rendez-vous en présentiel pour les acteurs locaux.
                </p>
                <p>
                  Vous cherchez une <strong>agence digitale à Toulouse</strong> capable de cadrer un projet, de le
                  designer, de le coder et de l'héberger ? Vous y êtes. Demandez un atelier de cadrage gratuit pour
                  discuter de votre projet, on revient vers vous sous 24h.
                </p>
              </>
            }
            crossLinks={[
              {
                title: 'Développement application mobile à Toulouse',
                href: '/developpement-application-mobile-toulouse',
                description: 'Le volet mobile de notre agence : iOS, Android et React Native.',
              },
              {
                title: 'Application iOS et Android',
                href: '/developpement-application-ios-android',
                description: 'Choisir entre développement natif et cross-platform.',
              },
              {
                title: 'Création application mobile sur mesure',
                href: '/creation-application-mobile-sur-mesure',
                description: 'Apps pensées autour de votre métier, livrées avec le code source.',
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
