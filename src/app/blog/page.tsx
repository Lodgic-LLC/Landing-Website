import type { Metadata } from 'next'
import Image from 'next/image'
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

function coverFor(article: Article) {
  return article.imageUrl?.startsWith('/') ? article.imageUrl : '/images/rodeo-project-management-software-m9HQzdoK9u8-unsplash.jpg'
}

function DateArticle({ article }: { article: Article }) {
  if (!article.date) return null
  const date = new Date(`${article.date}T12:00:00`)
  return <time dateTime={article.date}>{new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)}</time>
}

function ArticleCard({ article }: { article: Article }) {
  const href = `/blog/${article.slug}`
  return <article className="blog-card">
    <Link href={href} className="blog-card-cover" aria-label={`Lire : ${article.title}`}>
      <Image src={coverFor(article)} alt="" fill sizes="(max-width: 559px) 90vw, (max-width: 1023px) 44vw, 30vw" className="object-cover" />
    </Link>
    <div className="blog-card-meta"><span>{article.category}</span><DateArticle article={article} /></div>
    <h4 className="blog-card-title"><Link href={href}>{article.title}</Link></h4>
    <p className="blog-card-summary">{article.summary}</p>
    <Link href={href} className="blog-card-link">Lire l’article <span aria-hidden="true">↗</span></Link>
  </article>
}

export default function Page() {
  const articles = getAllArticles()
  const [featured, ...remaining] = articles
  const knownCategories = new Set<string>(themes.flatMap((theme) => theme.categories))
  const unclassified = remaining.filter((article) => !knownCategories.has(article.category))
  const groups = [
    ...themes.map((theme) => ({
      id: theme.id,
      label: theme.label,
      articles: remaining.filter((article) => (theme.categories as readonly string[]).includes(article.category)),
    })),
    ...(unclassified.length ? [{ id: 'autres', label: 'Autres articles', articles: unclassified }] : []),
  ]
  const visibleGroups = groups.filter((group) => group.articles.length > 0)

  return <main className="blog-page">
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
      <div className="container-site blog-feature">
        <Link href={`/blog/${featured.slug}`} className="blog-feature-cover" data-reveal aria-label={`Lire : ${featured.title}`}>
          <Image src={coverFor(featured)} alt="" fill priority sizes="(max-width: 767px) 90vw, 55vw" className="object-cover" />
        </Link>
        <div className="blog-feature-content">
          <p className="eyebrow">À la une</p>
          <div className="blog-card-meta"><span>{featured.category}</span><DateArticle article={featured} /></div>
          <h2 id="blog-feature-title"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
          <p>{featured.summary}</p>
          <Link href={`/blog/${featured.slug}`} className="text-link mt-7 text-base">Lire l’article <span aria-hidden="true">→</span></Link>
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
          {visibleGroups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.label} <span>{group.articles.length}</span></a>)}
        </nav>
        {visibleGroups.map((group) => <section key={group.id} id={group.id} className="blog-topic" aria-labelledby={`${group.id}-title`}>
          <div className="blog-topic-heading"><h3 id={`${group.id}-title`}>{group.label}</h3><span>{group.articles.length} {group.articles.length === 1 ? 'article' : 'articles'}</span></div>
          <div className="blog-card-grid">{group.articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
        </section>)}
      </div>
    </section>
  </main>
}
