import type { Metadata } from 'next'
import PageProjet from '@/components/PageProjet'
import { PROJETS } from '@/content/projets'
import { SITE_URL } from '@/lib/site'

const projet = PROJETS.find(p => p.name === 'Alliance-TRAVAUX')!
export const metadata: Metadata = {
  title: 'Alliance-TRAVAUX : étude de cas',
  description: projet.summary,
  alternates: { canonical: SITE_URL + projet.href },
  openGraph: { title: projet.name, description: projet.summary, url: SITE_URL + projet.href, type: 'article', locale: 'fr_FR' },
}
export default function Page() { return <PageProjet projet={projet} /> }
