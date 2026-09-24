import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { PAGES_SERVICE } from '@/content/pages-service'

// Ne pas annoncer une date de modification sans date réelle propre à chaque page.
const route = (path: string) => ({
  url: path ? `${SITE_URL}/${path}` : SITE_URL,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    route(''),
    route('realisations'),
    route('contact'),
    route('preparer-son-projet'),
    route('projets/alliance-travaux'),
    route('projets/bewasbeen'),
    ...PAGES_SERVICE.map((page) => route(page.slug)),
  ]
}
