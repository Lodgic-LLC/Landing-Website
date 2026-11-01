import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/blog'
import { choixLectures } from '@/content/choix-projet'

const dateFormatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function ConseilsSection() {
  const allArticles = getAllArticles()
  const articles = choixLectures.flatMap(choice => {
    const article = allArticles.find(item => item.slug === choice.slug)
    return article ? [{ ...article, intention: choice.intention }] : []
  })

  return <section id="conseils" className="section-space bg-white" aria-labelledby="conseils-title">
    <div className="container-site">
      <div className="advice-intro">
        <div>
          <p className="eyebrow">Conseils</p>
          <h2 id="conseils-title" className="title-section mt-4 max-w-2xl">Trois décisions avant de vous lancer.</h2>
          <p className="mt-5 max-w-2xl text-[#59666E]">Choisir le format, comprendre le budget et savoir comment le projet va se dérouler.</p>
        </div>
        <Link href="/blog" className="text-link text-base">Tous les conseils <span aria-hidden="true">→</span></Link>
      </div>
      <div className="advice-articles">
        {articles.map((article) => <article key={article.slug} className="advice-article">
          {article.imageUrl && <Link href={`/blog/${article.slug}`} className="advice-cover" data-reveal aria-label={`Lire : ${article.title}`}>
            <Image src={article.imageUrl.startsWith('/') ? article.imageUrl : '/images/rodeo-project-management-software-m9HQzdoK9u8-unsplash.jpg'} alt="" width={720} height={480} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" />
          </Link>}
          <div className="advice-meta"><span>{article.intention}</span><time dateTime={article.date}>{dateFormatter.format(new Date(`${article.date}T12:00:00`))}</time></div>
          <h3 className="advice-article-title"><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
          <p className="advice-article-summary">{article.summary}</p>
          <Link href={`/blog/${article.slug}`} className="text-link advice-article-link text-base">Lire l’article <span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
    </div>
  </section>
}
