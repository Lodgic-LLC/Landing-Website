import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import ScrollReveal from '@/components/ScrollReveal'
import { getAllArticles, type Article } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Conseils pour vos projets web et mobile',
  description: 'Articles de Yann sur la création d’applications mobiles, le financement, le commerce et les choix techniques pour préparer un projet numérique.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title: 'Conseils pour vos projets web et mobile | Lodgic', description: 'Articles et repères pratiques de Yann pour préparer un projet numérique.', url: `${SITE_URL}/blog`, type: 'website', locale: 'fr_FR' },
}

const themes = [
  { id: 'applications', label: 'Applications mobiles', categories: ['Mobile', 'Stratégie Mobile', 'Mobile & Business', 'Mobile & E-commerce', 'ECommerce', 'Stratégie digitale', 'Cosmétique', 'Sport'] },
  { id: 'financement', label: 'Budget et financement', categories: ['Finance'] },
  { id: 'intelligence-artificielle', label: 'Intelligence artificielle', categories: ['Intelligence Artificielle'] },
  { id: 'web', label: 'Web et développement', categories: ['Web'] },
] as const

function ArticleRow({ article }: { article: Article }) {
  return <article className="blog-index-item">
    <div>
      <p className="blog-index-category">{article.category}</p>
      <h4><Link href={`/blog/${article.slug}`}>{article.title}</Link></h4>
    </div>
    <p className="blog-index-summary">{article.summary}</p>
    <Link href={`/blog/${article.slug}`} className="blog-index-arrow" aria-label={`Lire : ${article.title}`}><span aria-hidden="true">↗</span></Link>
  </article>
}

export default function Page() {
  const articles = getAllArticles()
  const [featured, ...remaining] = articles
  const groups = themes.map((theme) => ({ ...theme, articles: remaining.filter((article) => (theme.categories as readonly string[]).includes(article.category)) }))

  return <main>
    <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: 'Conseils', url: `${SITE_URL}/blog` }])} />
    <ScrollReveal />
    <header className="blog-intro">
      <div className="container-site blog-intro-grid">
        <div>
          <p className="eyebrow">Le blog</p>
          <h1 className="title-hero mt-4">Des idées pour faire avancer votre projet.</h1>
        </div>
        <p>Applications mobiles, sites web, financement et usages métier : retrouvez les articles de l’archive Lodgic, sans avoir besoin de connaître la technique.</p>
      </div>
    </header>
    {featured && <section className="blog-feature-section" aria-labelledby="blog-feature-title">
      <div className="container-site blog-feature" data-reveal>
        <div className="blog-feature-label"><span className="eyebrow">À la une</span><span className="text-sm text-[#59666E]">{featured.category}</span></div>
        <div>
          <h2 id="blog-feature-title"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
          <p>{featured.summary}</p>
          <Link href={`/blog/${featured.slug}`} className="text-link mt-6 text-base">Lire l’article <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>}
    <section className="section-space" aria-labelledby="articles-title">
      <div className="container-site">
        <div className="blog-index-heading">
          <div><p className="eyebrow">Explorer les sujets</p><h2 id="articles-title" className="title-section mt-3">Parcourir les articles</h2></div>
          <p className="text-sm text-[#59666E]">{remaining.length} autres articles</p>
        </div>
        <nav className="blog-topic-nav" aria-label="Thèmes du blog">
          {groups.filter((group) => group.articles.length).map((group) => <a key={group.id} href={`#${group.id}`}>{group.label} <span>{group.articles.length}</span></a>)}
        </nav>
        {groups.filter((group) => group.articles.length).map((group) => <section key={group.id} id={group.id} className="blog-topic" aria-labelledby={`${group.id}-title`}>
          <div className="blog-topic-heading" data-reveal><h3 id={`${group.id}-title`}>{group.label}</h3><span>{group.articles.length} {group.articles.length === 1 ? 'article' : 'articles'}</span></div>
          <div className="blog-index-list">{group.articles.map((article) => <ArticleRow key={article.slug} article={article} />)}</div>
        </section>)}
      </div>
    </section>
  </main>
}
