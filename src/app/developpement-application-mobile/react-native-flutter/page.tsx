import type { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Développeur React Native Toulouse',
  description:
    "Développeur React Native Toulouse : comparez React Native, Flutter et les frameworks non natifs pour lancer une application iOS et Android plus vite.",
  keywords: [
    'Développeur React Native Toulouse',
    'React Native Toulouse',
    'Flutter Toulouse',
    'framework mobile non natif',
  ],
  alternates: {
    canonical: `${SITE_URL}/developpement-application-mobile/react-native-flutter`,
  },
  openGraph: {
    title: 'React Native vs Flutter - Lodgic',
    description:
      "Guide pratique pour choisir entre React Native, Flutter et natif selon vos contraintes business, UX et délais.",
    url: `${SITE_URL}/developpement-application-mobile/react-native-flutter`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function ReactNativeFlutterPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'React Native, Flutter et frameworks non natifs',
    mainEntityOfPage: `${SITE_URL}/developpement-application-mobile/react-native-flutter`,
    author: { '@type': 'Organization', name: 'Lodgic' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
    about: ['Développeur React Native Toulouse', 'Flutter', 'framework non natif'],
  }

  return (
    <>
      <StructuredData id="react-native-flutter-article-schema" data={schema} />
      <main className="bg-[#f6f7fc] min-h-screen pt-28 pb-20 md:pt-36">
        <div className="max-w-5xl mx-auto px-6">
          <header>
            <h1 className="font-sofia-bold text-4xl md:text-5xl text-[#001F45]">
              React Native, Flutter et frameworks non natifs : que choisir ?
            </h1>
            <p className="mt-5 text-lg text-[#243b5a] leading-relaxed">
              Pour beaucoup d'entreprises, une base de code partagée est le meilleur compromis. Un développeur React
              Native Toulouse peut livrer rapidement une application iOS et Android tout en conservant de bonnes
              performances sur les usages classiques.
            </p>
          </header>

          <section className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl bg-white border border-[#001F45]/10 p-5">
              <h2 className="font-sofia-bold text-xl text-[#001F45]">React Native</h2>
              <p className="mt-3 text-[#2d4567]">
                Excellent choix si votre équipe maîtrise déjà JavaScript/TypeScript et souhaite un time-to-market
                rapide.
              </p>
            </article>
            <article className="rounded-xl bg-white border border-[#001F45]/10 p-5">
              <h2 className="font-sofia-bold text-xl text-[#001F45]">Flutter</h2>
              <p className="mt-3 text-[#2d4567]">
                Très bon rendu UI et cohérence visuelle, avec un écosystème solide pour des interfaces riches.
              </p>
            </article>
            <article className="rounded-xl bg-white border border-[#001F45]/10 p-5">
              <h2 className="font-sofia-bold text-xl text-[#001F45]">Natif pur</h2>
              <p className="mt-3 text-[#2d4567]">
                Pertinent pour des besoins très spécifiques en performance, hardware ou fonctionnalités avancées.
              </p>
            </article>
          </section>

          <section className="mt-6 rounded-2xl border border-[#001F45]/10 bg-white p-6">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Quelle option pour quel contexte ?</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 text-[#2d4567]">
              <article className="rounded-xl bg-[#f8fbff] border border-[#001F45]/10 p-4">
                <h3 className="font-sofia-bold text-lg text-[#001F45]">Si vous devez aller vite</h3>
                <p className="mt-2">
                  React Native est souvent très efficace pour livrer une V1 iOS + Android avec un budget maîtrisé.
                </p>
              </article>
              <article className="rounded-xl bg-[#f8fbff] border border-[#001F45]/10 p-4">
                <h3 className="font-sofia-bold text-lg text-[#001F45]">Si l'UI est centrale</h3>
                <p className="mt-2">
                  Flutter peut apporter une grande cohérence visuelle, utile pour une app orientée expérience.
                </p>
              </article>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-[#0EA5E9]/20 bg-[#0EA5E9]/8 p-6">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Recommandation pragmatique</h2>
            <p className="mt-3 text-[#2d4567] leading-relaxed">
              Le meilleur choix dépend de votre roadmap, de vos ressources internes et de vos contraintes de budget.
              Une agence web et mobile Toulouse peut vous aider à objectiver ce choix selon vos priorités business, pas
              uniquement selon la mode technique du moment.
            </p>
          </section>

          <section className="mt-6 rounded-2xl border border-[#001F45]/10 bg-white p-6">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Version vulgarisée</h2>
            <p className="mt-3 text-[#2d4567] leading-relaxed">
              React Native et Flutter sont comme une langue commune pour parler à iOS et Android en même temps. Le
              natif, lui, consiste à parler la langue de chaque plateforme séparément. La langue commune va souvent
              plus vite au démarrage ; la langue native devient pertinente quand les besoins techniques sont très
              poussés.
            </p>
          </section>

          <div className="mt-10">
            <Link
              href="/developpement-application-mobile"
              className="inline-flex items-center rounded-lg bg-[#001F45] px-5 py-3 text-white font-semibold hover:bg-[#0d2f6b] transition-smooth"
            >
              Retour au guide mobile
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
