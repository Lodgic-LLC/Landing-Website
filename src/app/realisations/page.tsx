import type { Metadata } from 'next'
import JsonLd, { filAriane } from '@/components/JsonLd'
import Realisations from '@/app/_sections/Realisations'
import Contact from '@/app/_sections/Contact'
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
    title: `${NAME} | Lodgic`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Page() {
  return <main>
    <JsonLd data={filAriane([{name:'Accueil',url:SITE_URL},{name:NAME,url:SITE_URL+PATH}])} />
    <section className="bg-[#F4F6F7] py-16 md:py-20"><div className="container-site"><p className="eyebrow">Réalisations</p><h1 className="title-hero mt-4 max-w-3xl">Des projets livrés,<br />du travail à découvrir.</h1><p className="mt-6 max-w-2xl text-xl text-[#59666E]">Un site pour un collectif d’artisans et une plateforme pédagogique. Voici les interfaces, mon intervention et les résultats disponibles.</p></div></section>
    <Realisations introduction={false} />
    <Contact fond="creme" />
  </main>
}
