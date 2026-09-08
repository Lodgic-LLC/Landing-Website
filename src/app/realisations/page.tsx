import type { Metadata } from 'next'
import JsonLd, { filAriane } from '@/components/JsonLd'
import EtudeDeCas from '@/components/EtudeDeCas'
import Formulaire from '@/components/Formulaire'
import { PROJETS } from '@/content/projets'
import { SITE_URL } from '@/lib/site'

const PATH = '/realisations'
const NAME = 'Réalisations'
const DESCRIPTION =
  "Les sites et applications que j'ai conçus et développés : fonctionnalités livrées, décisions techniques et résultats mesurés."

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `${NAME} — Lodgic`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main>
      <JsonLd
        data={filAriane([
          { name: 'Accueil', url: SITE_URL },
          { name: NAME, url: `${SITE_URL}${PATH}` },
        ])}
      />

      <section className="border-b border-[#E6E1D8] bg-[#F8F6F2] pt-32 pb-14 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow eyebrow-left">Réalisations</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance">
            Ce que j&apos;ai construit, brique par brique
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6B655D] font-inter">
            Les fonctionnalités développées, les décisions techniques derrière, et les
            résultats mesurés.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {PROJETS.map((projet, i) => (
            <EtudeDeCas key={projet.name} project={projet} index={i} total={PROJETS.length} />
          ))}
        </div>
      </section>

      <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-16 md:py-20" aria-labelledby="contact-realisations">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <h2
              id="contact-realisations"
              className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
            >
              Un projet dans le même esprit ?
            </h2>
            <p className="mt-4 leading-relaxed text-[#6B655D] font-inter">
              Décrivez-le en quelques lignes, même approximatives. Je vous réponds sous
              24 heures avec un premier avis.
            </p>
          </div>
          <Formulaire source="page-realisations" />
        </div>
      </section>
    </main>
  )
}
