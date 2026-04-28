import type { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Développement application iOS et Android',
  description:
    "Découvrez les différences entre développement application iOS et Android : Swift, Android Studio, coûts, maintenance et stratégie produit.",
  keywords: [
    'Développement application iOS et Android',
    'Développement iOS Swift',
    'Développement Android Studio',
  ],
  alternates: {
    canonical: `${SITE_URL}/developpement-application-mobile/apple-android`,
  },
  openGraph: {
    title: 'Développement application iOS et Android - Lodgic',
    description:
      "Comprendre les choix techniques entre Apple et Android pour orienter votre création application mobile sur mesure.",
    url: `${SITE_URL}/developpement-application-mobile/apple-android`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function AppleAndroidPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Développement application iOS et Android : quelles différences ?',
    mainEntityOfPage: `${SITE_URL}/developpement-application-mobile/apple-android`,
    author: { '@type': 'Organization', name: 'Lodgic' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
    about: ['Développement application iOS et Android', 'Swift', 'Android Studio'],
  }

  return (
    <>
      <StructuredData id="ios-android-article-schema" data={schema} />
      <main className="bg-[#f6f7fc] min-h-screen pt-28 pb-20 md:pt-36">
        <div className="max-w-5xl mx-auto px-6">
          <header>
            <h1 className="font-sofia-bold text-4xl md:text-5xl text-[#001F45]">
              Développement application iOS et Android : Swift vs Android Studio
            </h1>
            <p className="mt-5 text-lg text-[#243b5a] leading-relaxed">
              Quand vous visez une application native, vous devez souvent distinguer deux mondes : iOS côté Apple
              (Swift/Xcode) et Android côté Google (Kotlin/Android Studio). Les règles UX, les validations store et
              les cycles de release diffèrent.
            </p>
          </header>

          <section className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl bg-white border border-[#001F45]/10 p-6">
              <h2 className="font-sofia-bold text-2xl text-[#001F45]">Côté Apple (Swift)</h2>
              <ul className="mt-3 space-y-2 text-[#2d4567]">
                <li>- Environnement très contrôlé</li>
                <li>- Directives App Store strictes</li>
                <li>- Parc appareil plus homogène</li>
                <li>- Très bonne stabilité sur iPhone/iPad</li>
              </ul>
            </article>
            <article className="rounded-xl bg-white border border-[#001F45]/10 p-6">
              <h2 className="font-sofia-bold text-2xl text-[#001F45]">Côté Android (Android Studio)</h2>
              <ul className="mt-3 space-y-2 text-[#2d4567]">
                <li>- Forte variété d'appareils</li>
                <li>- Plus de scénarios de test à couvrir</li>
                <li>- Publication flexible sur Play Store</li>
                <li>- Excellente base pour adresser un marché large</li>
              </ul>
            </article>
          </section>

          <section className="mt-8 rounded-2xl border border-[#001F45]/10 bg-white p-6">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Quel impact sur votre projet ?</h2>
            <p className="mt-3 text-[#2d4567] leading-relaxed">
              Le budget et le planning dépendent du niveau de personnalisation, des intégrations tierces et de votre
              besoin de synchronisation entre plateformes. Pour une création application mobile sur mesure, un cadrage
              amont reste la meilleure façon de choisir entre natif complet ou approche cross-platform.
            </p>
          </section>

          <section className="mt-6 rounded-2xl border border-[#0EA5E9]/20 bg-[#f8fbff] p-6">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Comment choisir simplement ?</h2>
            <ul className="mt-4 space-y-3 text-[#2d4567]">
              <li>
                - Si votre audience est surtout iPhone au lancement, commencer par iOS peut accélérer la première mise
                en marché.
              </li>
              <li>
                - Si vous ciblez un volume large et des profils d'appareils variés, Android est souvent stratégique.
              </li>
              <li>
                - Si vous devez sortir sur les deux stores rapidement, il faut comparer natif et cross-platform selon
                votre budget.
              </li>
            </ul>
          </section>

          <section className="mt-6 rounded-2xl border border-[#001F45]/10 bg-white p-6">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Vulgarisation rapide</h2>
            <p className="mt-3 text-[#2d4567] leading-relaxed">
              Pensez iOS et Android comme deux maisons voisines avec des règles de construction différentes. Le design
              global peut se ressembler, mais les fondations techniques et les vérifications avant publication ne sont
              pas les mêmes. Plus votre application est complexe, plus ces différences impactent le coût final.
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
