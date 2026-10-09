import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogContent from '@/components/BlogContent'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { CONSEILS_FAQ } from '@/content/conseils-faq'
import { getAllArticles, getArticle } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllArticles().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const url = `${SITE_URL}/blog/${slug}`
  const image = article.imageUrl?.startsWith('/') ? `${SITE_URL}${article.imageUrl}` : article.imageUrl

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | Lodgic`,
      description: article.summary,
      url,
      type: 'article',
      locale: 'fr_FR',
      images: image ? [{ url: image, alt: article.imageAlt ?? article.title }] : undefined,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  const url = `${SITE_URL}/blog/${slug}`
  const questions = CONSEILS_FAQ[slug] ?? []
  const related = getAllArticles().filter((item) => item.slug !== slug).slice(0, 3)

  return <main className="article-page">
    <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: 'Conseils', url: `${SITE_URL}/blog` }, { name: article.title, url }])} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.summary, mainEntityOfPage: url, inLanguage: 'fr-FR', author: { '@id': `${SITE_URL}/#person` }, publisher: { '@id': `${SITE_URL}/#organization` } }} />
    <article>
      <header className="article-header border-b border-[#DCE3E6] bg-[#F4F6F7] py-14 md:py-20">
        <div className="container-site article-heading">
          <div>
          <nav aria-label="Fil d’Ariane" className="flex flex-wrap items-center gap-2 text-sm text-[#59666E]"><Link href="/" className="hover:text-[#246B66]">Accueil</Link><span aria-hidden="true">/</span><Link href="/blog" className="hover:text-[#246B66]">Conseils</Link></nav>
          <p className="eyebrow mt-9">{article.category}</p>
          <h1 className="title-hero mt-4">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#59666E]">{article.summary}</p>
          <p className="mt-7 text-sm text-[#59666E]">Par <span className="font-semibold text-[#17232A]">Yann, développeur web et mobile</span></p>
          </div>
          {article.imageUrl && <div className="article-cover"><Image src={article.imageUrl.startsWith('/') ? article.imageUrl : '/images/rodeo-project-management-software-m9HQzdoK9u8-unsplash.jpg'} alt="" fill priority sizes="(max-width: 767px) 90vw, 36vw" className="object-cover" /></div>}
        </div>
      </header>
      <div className="article-reading container-site max-w-4xl py-12 md:py-20">
        <BlogContent content={article.content} />
        {questions.length > 0 && <section className="mt-16 border-t border-[#DCE3E6] pt-10" aria-labelledby="article-faq-title">
          <h2 id="article-faq-title" className="title-section">Questions fréquentes</h2>
          <div className="mt-7 border-t border-[#DCE3E6]">{questions.map(({ question, answer }) => <details key={question} className="border-b border-[#DCE3E6] py-5"><summary className="flex items-center justify-between gap-4 font-semibold"><span>{question}</span><span aria-hidden="true" className="text-2xl text-[#246B66]">+</span></summary><p className="mt-4 max-w-3xl text-base leading-relaxed text-[#59666E]">{answer}</p></details>)}</div>
        </section>}
        <div className="mt-14 border-t border-[#DCE3E6] pt-8"><Link href="/blog" className="text-link text-base"><span aria-hidden="true">←</span> Tous les conseils</Link></div>
      </div>
    </article>
    <section className="section-space bg-[#F4F6F7]" aria-labelledby="related-title"><div className="container-site"><h2 id="related-title" className="title-section">À lire aussi</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="related-article rounded-lg border border-[#DCE3E6] bg-white p-6 hover:border-[#246B66]"><span className="related-cover"><Image src={item.imageUrl?.startsWith('/') ? item.imageUrl : '/images/rodeo-project-management-software-m9HQzdoK9u8-unsplash.jpg'} alt="" width={600} height={340} sizes="(max-width: 767px) 90vw, 30vw" /></span><span className="text-sm font-semibold text-[#246B66]">{item.category}</span><span className="mt-3 block font-heading text-xl leading-snug">{item.title}</span></Link>)}</div></div></section>
  </main>
}
