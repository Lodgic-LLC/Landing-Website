import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/blog'

const dateFormatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function ConseilsSection() {
  const articles = getAllArticles().slice(0, 3)

  return <section id="conseils" className="section-space bg-white" aria-labelledby="conseils-title">
    <div className="container-site">
      <div className="advice-intro">
        <div>
          <p className="eyebrow">Conseils</p>
          <h2 id="conseils-title" className="title-section mt-4 max-w-2xl">Des articles pour avancer dans votre projet.</h2>
          <p className="mt-5 max-w-2xl text-[#59666E]">Retrouvez mes repères sur les applications mobiles, le web et les choix à faire avant de développer.</p>
        </div>
        <Link href="/blog" className="text-link text-base">Tous les conseils <span aria-hidden="true">→</span></Link>
      </div>
      <div className="advice-articles">
        {articles.map((article) => <article key={article.slug} className="advice-article" data-reveal>
          {article.imageUrl && <Link href={`/blog/${article.slug}`} className="advice-cover" aria-label={`Lire : ${article.title}`}>
            <Image src={article.imageUrl} alt={article.imageAlt || ''} width={720} height={480} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" />
          </Link>}
          <div className="advice-meta"><span>{article.category}</span><time dateTime={article.date}>{dateFormatter.format(new Date(`${article.date}T12:00:00`))}</time></div>
          <h3 className="advice-article-title"><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
          <p className="advice-article-summary">{article.summary}</p>
          <Link href={`/blog/${article.slug}`} className="text-link advice-article-link text-base">Lire l’article <span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
    </div>
  </section>
}
