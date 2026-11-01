import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { PAGES_SERVICE } from '@/content/pages-service'
import { getAllArticles } from '@/lib/blog'

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
    route('prix-application-mobile'),
    route('reprise-application-mobile'),
    route('blog'),
    ...getAllArticles().map((article) => route(`blog/${article.slug}`)),
    route('projets/alliance-travaux'),
    route('projets/bewasbeen'),
    ...PAGES_SERVICE.map((page) => route(page.slug)),
  ]
}
