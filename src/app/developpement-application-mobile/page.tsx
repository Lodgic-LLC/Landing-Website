import type { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Développement application mobile à Toulouse',
  description:
    "Développement application mobile à Toulouse : méthode, budget, choix techniques et création application mobile sur mesure pour startups et PME.",
  keywords: [
    'Développement application mobile à Toulouse',
    'Création application mobile sur mesure',
    'Agence web et mobile Toulouse',
  ],
  alternates: {
    canonical: `${SITE_URL}/developpement-application-mobile`,
  },
  openGraph: {
    title: 'Développement application mobile à Toulouse - Lodgic',
    description:
      "Comprenez les subtilités du développement application mobile à Toulouse, de la stratégie produit à la mise en production iOS et Android.",
    url: `${SITE_URL}/developpement-application-mobile`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function DeveloppementApplicationMobilePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/developpement-application-mobile#webpage`,
    url: `${SITE_URL}/developpement-application-mobile`,
    name: 'Développement application mobile à Toulouse - Lodgic',
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <StructuredData id="dev-mobile-webpage-schema" data={pageSchema} />
      <main className="bg-[#f6f7fc] min-h-screen pt-28 pb-20 md:pt-36">
        <div className="max-w-7xl mx-auto px-6">
          <header className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-[#001F45]/10 bg-white px-4 py-1.5 text-sm font-semibold text-[#001F45]">
              Guide mobile
            </span>
            <h1 className="mt-5 font-sofia-bold text-4xl md:text-5xl text-[#001F45] leading-tight">
              Développement application mobile à Toulouse : les points clés avant de lancer votre projet
            </h1>
            <p className="mt-5 text-lg text-[#1f3556] leading-relaxed max-w-3xl">
              Une création application mobile sur mesure ne se résume pas au design de quelques écrans. Il faut cadrer
              les objectifs business, choisir la bonne stack et prioriser les fonctionnalités qui apportent de la
              valeur dès la première version.
            </p>
          </header>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#001F45]/10 bg-white p-6 shadow-soft">
              <h2 className="font-sofia-bold text-2xl text-[#001F45]">Ce qui fait la différence sur un projet mobile</h2>
              <ul className="mt-4 space-y-3 text-[#2d4567]">
                <li>- Cadrage produit précis avant le développement</li>
                <li>- Priorisation d'une roadmap réaliste</li>
                <li>- UX pensée pour l'usage mobile réel</li>
                <li>- Performance et stabilité dès le MVP</li>
                <li>- Suivi analytics pour améliorer les versions suivantes</li>
              </ul>
              <p className="mt-4 text-[#2d4567] leading-relaxed">
                En version simple : mieux vaut une petite application claire, rapide et utile qu'une grosse version
                pleine d'options peu utilisées. Le bon réflexe est de lancer une V1 ciblée, puis d'améliorer avec les
                retours des vrais utilisateurs.
              </p>
            </article>

            <article className="rounded-2xl border border-[#001F45]/10 bg-white p-6 shadow-soft">
              <h2 className="font-sofia-bold text-2xl text-[#001F45]">Pourquoi se faire accompagner ?</h2>
              <p className="mt-4 text-[#2d4567] leading-relaxed">
                Une agence web et mobile Toulouse peut sécuriser les choix techniques et éviter les erreurs coûteuses
                (mauvaise stack, dette technique précoce, délais sous-estimés). L'objectif est d'aligner votre budget
                avec un plan d'exécution concret.
              </p>
            </article>
          </section>

          <section className="mt-8 rounded-2xl border border-[#001F45]/10 bg-white p-6 shadow-soft">
            <h2 className="font-sofia-bold text-2xl text-[#001F45]">Les 3 erreurs les plus fréquentes</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3 text-[#2d4567]">
              <article className="rounded-xl bg-[#f8fbff] border border-[#001F45]/10 p-4">
                <h3 className="font-sofia-bold text-lg text-[#001F45]">1. Vouloir tout faire d'un coup</h3>
                <p className="mt-2">Un périmètre trop large rallonge les délais et augmente les coûts sans garantie de résultat.</p>
              </article>
              <article className="rounded-xl bg-[#f8fbff] border border-[#001F45]/10 p-4">
                <h3 className="font-sofia-bold text-lg text-[#001F45]">2. Négliger le parcours utilisateur</h3>
                <p className="mt-2">Une app peut être techniquement bonne mais inutilisable si l'expérience est confuse.</p>
              </article>
              <article className="rounded-xl bg-[#f8fbff] border border-[#001F45]/10 p-4">
                <h3 className="font-sofia-bold text-lg text-[#001F45]">3. Oublier l'après-lancement</h3>
                <p className="mt-2">Maintenance, analytics et itérations sont essentiels pour qu'une app reste performante.</p>
              </article>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-sofia-bold text-3xl text-[#001F45]">Aller plus loin</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Link
                href="/developpement-application-mobile/apple-android"
                className="rounded-xl border border-[#001F45]/15 bg-white p-5 text-[#001F45] hover:border-[#001F45]/35 transition-smooth"
              >
                <p className="font-sofia-bold text-xl">Apple vs Android</p>
                <p className="mt-2 text-[#2d4567]">
                  Les différences entre une application iOS (Swift) et une application Android (Android Studio/Kotlin).
                </p>
              </Link>

              <Link
                href="/developpement-application-mobile/react-native-flutter"
                className="rounded-xl border border-[#001F45]/15 bg-white p-5 text-[#001F45] hover:border-[#001F45]/35 transition-smooth"
              >
                <p className="font-sofia-bold text-xl">React Native vs Flutter</p>
                <p className="mt-2 text-[#2d4567]">
                  Quel framework non natif choisir pour accélérer votre mise sur le marché sans sacrifier la qualité.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
