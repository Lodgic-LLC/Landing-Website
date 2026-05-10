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
const Process = dynamic(() => import('@/components/pages/home/Process'))
const FAQ = dynamic(() => import('@/components/pages/home/FAQ'))

const PAGE_PATH = '/creation-application-mobile-sur-mesure'

export const metadata: Metadata = {
  title: 'Création application mobile sur mesure',
  description:
    "Création application mobile sur mesure : Lodgic, agence à Toulouse, conçoit des apps iOS, Android et React Native uniques, alignées avec votre métier et vos utilisateurs.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Création application mobile sur mesure - Lodgic',
    description:
      "Création d'application mobile sur mesure pour startups et entreprises. Cadrage, design, développement iOS/Android, mise en production et TMA.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Lodgic',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Création application mobile sur mesure - Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Création application mobile sur mesure',
    'Application mobile sur mesure Toulouse',
    'Développement application mobile sur mesure',
    'App mobile personnalisée',
    'Conception application mobile',
    'Application mobile métier',
    'Application sur mesure iOS Android',
    'Création app mobile entreprise',
    'Cahier des charges application mobile',
    'Devis application mobile sur mesure',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Création application mobile sur mesure - Lodgic',
    description:
      "Création d'application mobile sur mesure : iOS, Android, React Native. De l'idée à la mise en ligne avec Lodgic.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
}

export default function CreationApplicationMobileSurMesurePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Création application mobile sur mesure - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Création application mobile sur mesure', url: `${SITE_URL}${PAGE_PATH}` },
  ]

  return (
    <>
      <StructuredData id="seo-sur-mesure-webpage" data={pageSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <PageTracker
        pageName="SEO - Application sur mesure"
        pageCategory="seo_landing"
        additionalData={{ page_type: 'seo_landing', target_keyword: 'creation_application_mobile_sur_mesure' }}
      />
      <main>
        <TrackingSection sectionName="hero" trackOnView={true} trackTimeSpent={true}>
          <SeoHero
            eyebrow="Application mobile sur mesure"
            title="Création d'application mobile sur mesure"
            highlight="Conçue pour votre métier, pas un template"
            description={
              <>
                Lodgic accompagne la <strong>création d'application mobile sur mesure</strong> pour startups, PME et
                grandes entreprises. Une app pensée pour vos utilisateurs réels, vos workflows métier et vos enjeux
                business — pas un template recyclé.
              </>
            }
            badges={[
              '100% sur mesure',
              'Cadrage produit',
              'Design UI/UX',
              'iOS, Android, React Native',
              'Code source livré',
            ]}
            visual="tailored"
          />
        </TrackingSection>

        <TrackingSection sectionName="expertise" trackOnView={true} trackTimeSpent={true}>
          <SeoExpertise
            eyebrow="Notre méthode sur mesure"
            heading={
              <>
                Une <span className="text-[#0EA5E9]">application sur mesure</span>, c'est d'abord une bonne
                question : à quoi doit-elle servir ?
              </>
            }
            intro={
              <>
                Le <strong>développement d'une application mobile sur mesure</strong> commence avant la ligne de code.
                On comprend votre métier, on cadre la V1, puis on construit. Pas l'inverse.
              </>
            }
            cards={[
              {
                num: 'Étape 1',
                title: 'Comprendre votre métier',
                body: (
                  <>
                    Avant de parler technique, on apprend votre <strong>vocabulaire métier</strong>, vos contraintes
                    réglementaires et les frustrations actuelles de vos utilisateurs. Une application pertinente
                    commence là.
                  </>
                ),
                bullets: [
                  'Audit des process actuels',
                  'Interviews utilisateurs cibles',
                  'Cartographie des cas d\'usage',
                  'Étude concurrentielle',
                ],
              },
              {
                num: 'Étape 2',
                title: 'Designer un parcours unique',
                body: (
                  <>
                    Chaque <strong>application mobile personnalisée</strong> a son propre parcours. UX-first :
                    wireframes, prototypes Figma cliquables, tests utilisateurs avant la moindre ligne de code.
                  </>
                ),
                bullets: [
                  'User flows métier',
                  'Maquettes haute fidélité',
                  'Design system propriétaire',
                  'Tests UX itératifs',
                ],
              },
              {
                num: 'Étape 3',
                title: 'Développer une stack adaptée',
                body: (
                  <>
                    Pas de framework imposé : on choisit la techno qui correspond à votre app. <strong>iOS natif</strong>,{' '}
                    <strong>Android natif</strong>, <strong>React Native</strong> ou Flutter — ce qui sert votre projet.
                  </>
                ),
                bullets: [
                  'Stack choisie pour vos besoins',
                  'Architecture évolutive',
                  'Code propre et documenté',
                  'Tests unitaires & E2E',
                ],
              },
              {
                num: 'Étape 4',
                title: 'Intégrer vos outils existants',
                body: (
                  <>
                    Une app sur mesure se connecte à votre CRM, votre ERP, votre Stripe, votre HubSpot. Nous
                    développons les <strong>API et intégrations</strong> nécessaires pour que tout communique.
                  </>
                ),
                bullets: [
                  'Connexion CRM / ERP',
                  'Webhooks et automatisations',
                  'API privée sur mesure',
                  'Authentification SSO',
                ],
              },
              {
                num: 'Étape 5',
                title: 'Livrer avec le code source',
                body: (
                  <>
                    Votre application sur mesure vous appartient. Nous livrons le <strong>code source complet</strong>,
                    la documentation technique et les comptes développeurs Apple/Google.
                  </>
                ),
                bullets: [
                  'Code source 100% livré',
                  'Documentation technique',
                  'Repos GitHub transférés',
                  'Aucune dépendance fournisseur',
                ],
              },
              {
                num: 'Étape 6',
                title: 'Faire évoluer après le lancement',
                body: (
                  <>
                    Une <strong>app sur mesure</strong> évolue. Maintenance, nouvelles fonctionnalités, optimisation
                    des conversions — on reste à vos côtés bien après le lancement.
                  </>
                ),
                bullets: [
                  '3 mois de maintenance inclus',
                  'Itérations sur retours utilisateurs',
                  'Suivi analytics produit',
                  'Évolutions sprintées',
                ],
              },
            ]}
            closing={
              <>
                <p>
                  Pourquoi choisir une <strong>application mobile sur mesure</strong> plutôt qu'une solution toute
                  faite ? Parce que vos process métier ne ressemblent à personne d'autre. Une app générique vous
                  oblige à plier votre métier au logiciel — l'inverse de ce dont vous avez besoin.
                </p>
                <p>
                  Le <strong>coût d'une création d'application mobile sur mesure</strong> dépend du périmètre, du
                  nombre d'écrans, des intégrations et du choix natif vs cross-platform. Nous vous communiquons un{' '}
                  <strong>budget fixe avant le démarrage</strong> et un délai garanti à 45 jours pour les MVP.
                </p>
                <p>
                  Lodgic est une <strong>agence de développement application mobile à Toulouse</strong> qui intervient
                  partout en France. Que vous soyez une startup en levée de fonds, une PME en transformation digitale
                  ou un groupe avec des besoins internes, on parle votre langue avant de parler code.
                </p>
              </>
            }
            crossLinks={[
              {
                title: 'Développement application mobile à Toulouse',
                href: '/developpement-application-mobile-toulouse',
                description: 'Notre approche locale pour les projets mobiles en région toulousaine.',
              },
              {
                title: 'Application iOS et Android',
                href: '/developpement-application-ios-android',
                description: 'Choisir entre développement natif iOS, Android ou cross-platform.',
              },
              {
                title: 'Agence web et mobile à Toulouse',
                href: '/agence-web-mobile-toulouse',
                description: 'Une seule équipe pour vos projets web ET mobile.',
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
