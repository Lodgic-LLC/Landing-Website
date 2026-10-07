import Link from 'next/link'
import { getAllArticles } from '@/lib/blog'

export default function ConseilsSection() {
  const articles = getAllArticles().slice(0, 3)

  return <section className="section-space bg-white" aria-labelledby="conseils-title">
    <div className="container-site">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><p className="eyebrow">Conseils</p><h2 id="conseils-title" className="title-section mt-4 max-w-xl">Des articles pour avancer dans votre projet.</h2><p className="mt-5 max-w-2xl text-[#59666E]">Retrouvez mes repères sur les applications mobiles, le web et les choix à faire avant de développer.</p></div>
        <Link href="/blog" className="text-link text-base">Tous les conseils <span aria-hidden="true">→</span></Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{articles.map((article) => <article key={article.slug} className="flex flex-col rounded-lg border border-[#DCE3E6] p-6 transition-colors hover:border-[#246B66]"><p className="text-sm font-semibold text-[#246B66]">{article.category}</p><h3 className="mt-4 text-xl leading-snug"><Link href={`/blog/${article.slug}`} className="hover:text-[#246B66]">{article.title}</Link></h3><p className="mt-4 flex-1 text-base leading-relaxed text-[#59666E]">{article.summary}</p><Link href={`/blog/${article.slug}`} className="text-link mt-6 text-base">Lire l’article <span aria-hidden="true">→</span></Link></article>)}</div>
    </div>
  </section>
}
