import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import Formulaire from '@/components/Formulaire'
import Galerie from '@/components/Galerie'
import AnneauxLighthouse from '@/components/AnneauxLighthouse'
import CadreTelephone from '@/components/CadreTelephone'
import { PROJETS } from '@/content/projets'
import { SITE_URL } from '@/lib/site'

const PATH = '/projets/alliance-travaux'
const projet = PROJETS.find((p) => p.name === 'Alliance-TRAVAUX')!
const NAME = 'Alliance-TRAVAUX — refonte du site d’un collectif d’artisans à Toulouse'
const DESCRIPTION =
  "Étude de cas : refonte complète en deux semaines du site d'un collectif d'artisans toulousains. Affichage passé de 5,8 s à 0,7 s, 100/100 en SEO, 31 pages, référencement local sur 16 communes, pensé pour le téléphone."

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  keywords: [
    'refonte site internet artisan Toulouse',
    'site internet artisan',
    'création site vitrine Toulouse',
    'référencement local Toulouse',
    'développeur web Toulouse',
  ],
  openGraph: {
    title: NAME,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: projet.name,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    creator: { '@id': `${SITE_URL}/#person` },
  }
  const mesures = projet.measured!

  return (
    <main>
      <JsonLd id="projet-alliance-travaux" data={schema} />
      <JsonLd
        data={filAriane([
          { name: 'Accueil', url: SITE_URL },
          { name: 'Réalisations', url: `${SITE_URL}/realisations` },
          { name: projet.name, url: `${SITE_URL}${PATH}` },
        ])}
      />

      {/* Présentation */}
      <section className="border-b border-[#E6E1D8] bg-[#F8F6F2] pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-inter text-[#6B655D] transition-colors hover:text-[#2E2B28]"
          >
            <span aria-hidden>←</span> Toutes mes réalisations
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow eyebrow-left">{projet.sector}</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance">
                {projet.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#6B655D] font-inter">
                Le site d’un collectif d’artisans de Toulouse et Colomiers, repris de zéro :
                structure, contenus, référencement local et vitesse. Douze pages métier, seize
                communes, un formulaire de devis partout, et un site qui s’affiche en moins
                d’une seconde sur téléphone.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={projet.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-5 py-2.5 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
                >
                  Voir le site en ligne
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
                {projet.duration && (
                  <p className="text-sm font-inter text-[#6B655D]">
                    <span className="font-sofia-bold text-[#2E2B28]">Livré en {projet.duration.value}</span>,{' '}
                    {projet.duration.label}
                  </p>
                )}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#E6E1D8]">
              {(projet.detailMetrics ?? projet.metrics).map((c) => (
                <div key={c.label} className="bg-white px-3 py-5 text-center">
                  <dt className="sr-only">{c.label}</dt>
                  <dd>
                    <span className="block font-sofia-bold text-3xl text-[#B54A26]">{c.value}</span>
                    <span className="mt-1 block text-[11px] leading-tight text-[#6B655D] font-inter">{c.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Le besoin et la réponse */}
      {projet.etude && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">Le besoin</p>
              <ul className="mt-4 space-y-2.5">
                {projet.etude.besoin.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#6B655D] font-inter">
                    <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B655D]/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#B54A26]">Ma prestation</p>
              <ul className="mt-4 space-y-2.5">
                {projet.etude.prestation.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#2E2B28] font-inter">
                    <svg className="mt-[5px] h-3.5 w-3.5 shrink-0 text-[#B54A26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Mesures */}
      <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-12 md:py-16" aria-labelledby="mesures">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="mesures" className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight">
            Mesuré, pas promis
          </h2>
          <p className="mt-3 max-w-2xl text-[#6B655D] font-inter">
            Les scores de Google Lighthouse sur la page d’accueil, sur téléphone et sur ordinateur.
            N’importe qui peut refaire la mesure.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#E6E1D8] bg-white">
            <div className="grid gap-8 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-8">
              <div>
                <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-[#A34322]">{mesures.label}</p>
                <p className="mt-2 flex items-baseline gap-3 font-sofia-bold">
                  <span className="text-2xl text-[#6B655D] line-through decoration-[#C2542D]/50">{mesures.before}</span>
                  <svg className="h-4 w-4 self-center text-[#B54A26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className="text-4xl text-[#B54A26]">{mesures.after}</span>
                </p>
                <p className="mt-1 text-sm text-[#6B655D] font-inter">huit fois plus vite qu’avant</p>
              </div>
              <AnneauxLighthouse scores={mesures.scores} />
            </div>

            {mesures.vitals && (
              <dl className="grid grid-cols-2 gap-px border-t border-[#E6E1D8] bg-[#E6E1D8] sm:grid-cols-5">
                {mesures.vitals.map((v) => (
                  <div key={v.name} className="bg-[#F8F6F2] px-4 py-3">
                    <dd className="mono text-lg font-semibold text-[#2E2B28]">{v.value}</dd>
                    <dt className="mt-0.5 text-[11px] leading-tight font-inter text-[#6B655D]">{v.name}</dt>
                  </div>
                ))}
              </dl>
            )}
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-[#E6E1D8] px-6 py-3 text-sm font-inter text-[#6B655D]">
              Vérifiable publiquement avec l’outil de Google :
              <a
                href={mesures.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-inter font-semibold text-[#B54A26] hover:text-[#A34322]"
              >
                Voir la mesure PageSpeed
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Captures : ordinateur et téléphone */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="captures">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="captures" className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight">
            Le site en images
          </h2>
          <p className="mt-3 text-[#6B655D] font-inter">
            Sur ordinateur et sur téléphone, d’où viennent 80 % des visites.
          </p>
          <div className="mt-8">
            <Galerie screens={projet.screens} url={projet.url} priority />
          </div>

          {projet.mobileScreens && (
            <div className="mt-12">
              <h3 className="text-xl font-sofia-bold text-[#2E2B28]">Sur téléphone</h3>
              <p className="mt-2 text-sm text-[#6B655D] font-inter">
                Appel et devis toujours à portée de pouce, quelle que soit la page.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
                {projet.mobileScreens.map((ecran) => (
                  <CadreTelephone key={ecran.src} src={ecran.src} alt={ecran.alt} caption={ecran.caption} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ce que j'ai développé */}
      <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-12 md:py-16" aria-labelledby="developpe">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="developpe" className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight">
            Ce que j’ai développé
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#E6E1D8] md:grid-cols-2 lg:grid-cols-3">
            {projet.features.map((f) => (
              <li key={f.title} className="bg-white p-6">
                <p className="font-sofia-bold text-[15px] text-[#2E2B28]">{f.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B655D] font-inter">{f.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="text-xl font-sofia-bold text-[#2E2B28]">Résultats après développement</h3>
            <ul className="mt-5 grid gap-px overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#E6E1D8] sm:grid-cols-2 lg:grid-cols-4">
              {projet.resultats.map((r) => (
                <li key={r.title} className="bg-white p-6">
                  <p className="font-sofia-bold text-3xl text-[#B54A26]">{r.value}</p>
                  <p className="mt-2 font-sofia-bold text-[15px] text-[#2E2B28]">{r.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6B655D] font-inter">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[#E6E1D8] bg-white py-12 md:py-16" aria-labelledby="contact-projet">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <h2 id="contact-projet" className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance">
              Un site à refaire, vous aussi ?
            </h2>
            <p className="mt-4 leading-relaxed text-[#6B655D] font-inter">
              Décrivez-le en quelques lignes, même approximatives. Je vous réponds sous 24 heures
              avec un premier avis.
            </p>
          </div>
          <Formulaire source="projet-alliance-travaux" />
        </div>
      </section>
    </main>
  )
}
