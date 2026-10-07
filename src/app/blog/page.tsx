import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { getAllArticles } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Conseils pour vos projets web et mobile',
  description: 'Articles de Yann sur la création d’applications mobiles, le financement, le commerce et les choix techniques pour préparer un projet numérique.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title: 'Conseils pour vos projets web et mobile | Lodgic', description: 'Articles et repères pratiques de Yann pour préparer un projet numérique.', url: `${SITE_URL}/blog`, type: 'website', locale: 'fr_FR' },
}

export default function Page() {
  const articles = getAllArticles()

  return <main>
    <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: 'Conseils', url: `${SITE_URL}/blog` }])} />
    <header className="border-b border-[#DCE3E6] bg-[#F4F6F7] py-16 md:py-24">
      <div className="container-site">
        <p className="eyebrow">Conseils de Yann</p>
        <h1 className="title-hero mt-4 max-w-3xl">Des repères pour préparer votre projet numérique.</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#59666E]">Applications mobiles, sites web, financement et usages métier : retrouvez les articles de l’archive Lodgic, sans avoir besoin de connaître la technique.</p>
        <p className="mt-6 text-sm font-semibold text-[#246B66]">{articles.length} articles à découvrir</p>
      </div>
    </header>
    <section className="section-space" aria-labelledby="articles-title">
      <div className="container-site">
        <h2 id="articles-title" className="title-section">Tous les articles</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => <article key={article.slug} className="flex min-h-[280px] flex-col rounded-lg border border-[#DCE3E6] bg-white p-6 transition-colors hover:border-[#246B66] md:p-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#59666E]">
              <span className="font-semibold text-[#246B66]">{article.category}</span>
            </div>
            <h3 className="mt-5 text-xl leading-snug"><Link href={`/blog/${article.slug}`} className="hover:text-[#246B66]">{article.title}</Link></h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-[#59666E]">{article.summary}</p>
            <Link href={`/blog/${article.slug}`} className="text-link mt-6 text-base" aria-label={`Lire : ${article.title}`}>Lire l’article <span aria-hidden="true">→</span></Link>
          </article>)}
        </div>
      </div>
    </section>
  </main>
}
