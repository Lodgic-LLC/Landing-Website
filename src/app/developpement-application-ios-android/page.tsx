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

const PAGE_PATH = '/developpement-application-ios-android'

export const metadata: Metadata = {
  title: 'Développement application iOS et Android',
  description:
    "Développement application iOS et Android : Lodgic conçoit vos apps Swift, SwiftUI, Kotlin et Jetpack Compose, ou cross-platform React Native, depuis Toulouse.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Développement application iOS et Android - Lodgic',
    description:
      "iOS Swift, Android Kotlin ou React Native : Lodgic vous aide à choisir la bonne approche et publie votre application sur l'App Store et Google Play.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Lodgic',
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: 'Développement application iOS et Android - Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'Développement application iOS et Android',
    'Application iOS Toulouse',
    'Application Android Toulouse',
    'Développeur iOS Swift',
    'Développeur Android Kotlin',
    'App Store et Google Play',
    'Application native vs cross-platform',
    'Développeur SwiftUI',
    'Développeur Jetpack Compose',
    'Publication App Store',
    'Publication Google Play',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Développement application iOS et Android - Lodgic',
    description:
      "Application iOS native (Swift / SwiftUI) ou Android native (Kotlin / Jetpack Compose), ou React Native cross-platform.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
}

export default function DeveloppementApplicationIosAndroidPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Développement application iOS et Android - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Développement application iOS et Android', url: `${SITE_URL}${PAGE_PATH}` },
  ]

  return (
    <>
      <StructuredData id="seo-ios-android-webpage" data={pageSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <PageTracker
        pageName="SEO - iOS et Android"
        pageCategory="seo_landing"
        additionalData={{ page_type: 'seo_landing', target_keyword: 'developpement_application_ios_android' }}
      />
      <main>
        <TrackingSection sectionName="hero" trackOnView={true} trackTimeSpent={true}>
          <SeoHero
            eyebrow="iOS · Android · Cross-platform"
            title="Développement application iOS et Android"
            highlight="Native, hybride ou les deux"
            description={
              <>
                Lodgic développe vos applications <strong>iOS (Swift / SwiftUI)</strong>, <strong>Android (Kotlin /
                Jetpack Compose)</strong> et <strong>React Native</strong>. Une seule agence pour publier sur l'App
                Store et Google Play, avec la techno qui sert votre projet.
              </>
            }
            badges={[
              'Swift / SwiftUI',
              'Kotlin / Jetpack Compose',
              'React Native cross-platform',
              'App Store + Google Play',
              'TestFlight & Internal Testing',
            ]}
            visual="platforms"
          />
        </TrackingSection>

        <TrackingSection sectionName="expertise" trackOnView={true} trackTimeSpent={true}>
          <SeoExpertise
            eyebrow="iOS, Android ou les deux ?"
            heading={
              <>
                Choisir entre <span className="text-[#0EA5E9]">application native</span> et{' '}
                <span className="text-[#0EA5E9]">cross-platform</span>, sans se tromper.
              </>
            }
            intro={
              <>
                Le <strong>développement d'une application iOS et Android</strong> ne suit pas une recette unique. On
                analyse votre projet et on recommande la bonne stack — natif iOS, natif Android, React Native ou un
                mix.
              </>
            }
            cards={[
              {
                num: 'iOS',
                title: 'Application iOS native (Swift / SwiftUI)',
                body: (
                  <>
                    Pour des apps premium ou hyper performantes (audio temps réel, AR, jeux), nous développons en{' '}
                    <strong>Swift</strong> et <strong>SwiftUI</strong>. Compatible iPhone, iPad, Apple Watch et
                    CarPlay.
                  </>
                ),
                bullets: [
                  'Swift 5 / SwiftUI / UIKit',
                  'Apple Pay, Sign in with Apple',
                  'CoreData, CloudKit, HealthKit',
                  'Publication App Store',
                ],
              },
              {
                num: 'AND',
                title: 'Application Android native (Kotlin)',
                body: (
                  <>
                    Sur Android, nous travaillons en <strong>Kotlin</strong> et <strong>Jetpack Compose</strong>.
                    Material You, Material 3, support tablette et déploiement Google Play sans accroc.
                  </>
                ),
                bullets: [
                  'Kotlin / Coroutines / Flow',
                  'Jetpack Compose & Material 3',
                  'WorkManager, Room, DataStore',
                  'Publication Google Play Console',
                ],
              },
              {
                num: 'X',
                title: 'Cross-platform React Native & Flutter',
                body: (
                  <>
                    Quand l'enjeu est le time-to-market et le coût, <strong>React Native</strong> ou <strong>Flutter</strong>{' '}
                    permettent de livrer iOS et Android avec une seule équipe.
                  </>
                ),
                bullets: [
                  'React Native / Expo / TypeScript',
                  'Flutter / Dart',
                  'Modules natifs sur mesure',
                  'CI/CD partagée iOS et Android',
                ],
              },
              {
                num: 'UX',
                title: 'Design system iOS + Android',
                body: (
                  <>
                    Nous adaptons l'expérience à chaque plateforme : <strong>Human Interface Guidelines</strong> côté
                    iOS, <strong>Material Design 3</strong> côté Android. Vos utilisateurs se sentent chez eux.
                  </>
                ),
                bullets: [
                  'Human Interface Guidelines',
                  'Material Design 3',
                  'Dark mode et accessibilité',
                  'Adaptive layouts (iPad, tablette)',
                ],
              },
              {
                num: 'STORE',
                title: 'Publication App Store et Google Play',
                body: (
                  <>
                    Création des comptes développeurs Apple et Google, fiches store optimisées (ASO), screenshots,
                    soumission, gestion des reviews et conformité <strong>App Tracking Transparency / Data Safety</strong>.
                  </>
                ),
                bullets: [
                  'Apple Developer Program',
                  'Google Play Console',
                  'ASO multi-langues',
                  'Conformité ATT, Privacy Manifest, Data Safety',
                ],
              },
              {
                num: 'TEST',
                title: 'TestFlight, Internal Testing & QA',
                body: (
                  <>
                    Avant la mise en production, beta testing avec <strong>TestFlight (iOS)</strong> et <strong>Internal
                    Testing (Android)</strong>. Tests automatisés Detox, Maestro ou Appium pour les parcours critiques.
                  </>
                ),
                bullets: [
                  'TestFlight + Internal Testing',
                  'Tests E2E (Detox / Maestro)',
                  'Tests d\'accessibilité',
                  'QA manuel sur device cloud',
                ],
              },
            ]}
            closing={
              <>
                <p>
                  Faut-il développer en <strong>natif iOS et Android</strong> ou en cross-platform ? La réponse dépend
                  de quatre critères : la performance attendue, l'accès aux APIs natives, le budget et le time-to-market.
                  Pour un MVP startup, React Native sera souvent le bon choix. Pour une app qui mise sur l'expérience
                  premium, le natif s'impose.
                </p>
                <p>
                  Lodgic vous accompagne dans <strong>ce choix technique</strong>, sans religion. Notre équipe maîtrise
                  Swift, Kotlin, React Native et Flutter. Nous recommandons l'outil qui sert votre projet, pas celui
                  qu'on aimerait vendre.
                </p>
                <p>
                  Le <strong>développement d'application iOS et Android</strong> est aussi un sujet de conformité :
                  RGPD, App Tracking Transparency, Privacy Manifests Apple, Data Safety Google. Nous gérons ces
                  obligations pour que votre app passe les reviews du premier coup.
                </p>
              </>
            }
            crossLinks={[
              {
                title: 'Développeur React Native Toulouse',
                href: '/developpeur-react-native-toulouse',
                description: 'Notre expertise sur la stack cross-platform la plus mature.',
              },
              {
                title: 'Création application mobile sur mesure',
                href: '/creation-application-mobile-sur-mesure',
                description: 'Une app pensée autour de votre métier, en natif ou hybride.',
              },
              {
                title: 'Apple vs Android — guide technique',
                href: '/developpement-application-mobile/apple-android',
                description: 'Comparatif détaillé des écosystèmes iOS et Android.',
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
