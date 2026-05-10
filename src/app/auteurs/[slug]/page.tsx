import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

import StructuredData from '@/components/seo/StructuredData'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import { SITE_URL } from '@/lib/site'
import { getAllAuthors, getAuthorBySlug, getAuthorUrl } from '@/data/authors'
import { getAllPosts } from '@/lib/blog'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)

  if (!author) {
    return { title: 'Auteur non trouvé' }
  }

  return {
    title: `${author.name} — ${author.jobTitle}`,
    description: author.bio,
    alternates: { canonical: getAuthorUrl(author.slug) },
    openGraph: {
      title: `${author.name} — ${author.jobTitle} chez Lodgic`,
      description: author.bio,
      url: getAuthorUrl(author.slug),
      siteName: 'Lodgic',
      type: 'profile',
      locale: 'fr_FR',
    },
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = getAllPosts().filter((p) => {
    const postAuthorSlug = p.author
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    return postAuthorSlug === author.slug
  })

  const authorUrl = getAuthorUrl(author.slug)

  const personSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${authorUrl}#person`,
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    url: authorUrl,
    worksFor: { '@id': `${SITE_URL}/#organization` },
  }
  if (author.image) {
    personSchema.image = author.image.startsWith('http') ? author.image : `${SITE_URL}${author.image}`
  }
  if (author.sameAs && author.sameAs.length > 0) {
    personSchema.sameAs = author.sameAs
  }
  if (author.email) {
    personSchema.email = author.email
  }

  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Auteurs', url: `${SITE_URL}/auteurs` },
    { name: author.name, url: authorUrl },
  ]

  return (
    <>
      <StructuredData id="author-structured-data" data={personSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      <main className="bg-[#f6f7fc] min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-sm font-inter font-semibold uppercase tracking-[0.2em] text-[#001F45]/60 mb-4">
              Auteur
            </p>
            <h1 className="text-3xl md:text-4xl font-sofia-bold text-[#001F45] mb-2">
              {author.name}
            </h1>
            <p className="text-base text-[#162869]/80 font-inter mb-6">{author.jobTitle}</p>
            <p className="text-[#001F45]/80 font-inter leading-relaxed">{author.bio}</p>

            {author.sameAs && author.sameAs.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {author.sameAs.map((url) => {
                  const host = url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
                  return (
                    <a
                      key={url}
                      href={url}
                      rel="me noopener"
                      target="_blank"
                      className="inline-flex items-center rounded-full border border-[#001F45]/15 bg-white px-4 py-1.5 text-xs font-inter font-medium text-[#001F45] hover:border-[#001F45]/40 transition-colors"
                    >
                      {host}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {posts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-sofia-bold text-[#001F45] mb-6">
                Articles de {author.name}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <li
                    key={post.slug}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#001F45]/40 transition-colors"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-[#000f45] bg-[#DBFF00] rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-sofia-bold text-[#001F45] mb-2 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#162869]/75 font-inter">{post.summary}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </>
  )
}
