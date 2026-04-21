import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import Script from 'next/script'

import { blogPosts, getPostBySlug } from '@/data/blog/posts'
import MarkdownRenderer from '@/components/blog/MarkdownRenderer'
import TableOfContents from '@/components/blog/TableOfContents'

interface BlogPageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

interface Heading {
  id: string
  text: string
  level: number
}

const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

const stripHtmlTags = (value: string): string => value.replace(/<[^>]+>/g, '').trim()

const extractHeadings = (markdown: string): Heading[] => {
  const withoutFenced = markdown.replace(/```[\s\S]*?```/g, '').replace(/~~~[\s\S]*?~~~/g, '')

  const headings: Heading[] = []
  const seen = new Set<string>()

  const pushHeading = (rawText: string) => {
    const text = rawText.trim()
    if (!text) return
    let id = slugify(text)
    if (!id) return
    const baseId = id
    let index = 1
    while (seen.has(id)) {
      index += 1
      id = `${baseId}-${index}`
    }
    seen.add(id)
    headings.push({ id, text, level: 2 })
  }

  const mdRegex = /^##\s+(.+?)\s*#*\s*$/gm
  let match: RegExpExecArray | null
  while ((match = mdRegex.exec(withoutFenced)) !== null) {
    pushHeading(stripHtmlTags(match[1]))
  }

  const htmlRegex = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi
  while ((match = htmlRegex.exec(withoutFenced)) !== null) {
    pushHeading(stripHtmlTags(match[1]))
  }

  return headings
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Article non trouvé' }
  }

  return {
    title: `${post.title} | Blog Lodgic`,
    description: post.summary,
    alternates: {
      canonical: `https://lodgic-dev.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://lodgic-dev.com/blog/${slug}`,
      siteName: 'Lodgic',
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.imageUrl],
    },
    keywords: [
      'lodgic',
      'blog tech',
      'développement web',
      'application mobile',
      post.title.toLowerCase(),
      ...(post.tags || []),
    ],
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

const PostPage = async (props: BlogPageProps) => {
  const { params } = props
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const headings = extractHeadings(post.content)

  const articleSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lodgic-dev.com/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.summary,
    image: post.imageUrl,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lodgic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    articleBody: post.summary,
    ...(post.tags && { keywords: post.tags.join(', ') }),
  }

  return (
    <>
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />

      <div className="bg-[#f6f7fc] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28 relative xl:flex xl:gap-8">
          <div className="hidden xl:block sticky top-24 z-10 w-60 xl:w-72 flex-shrink-0 self-start h-[calc(100vh-theme(spacing.24)-theme(spacing.28))] overflow-y-auto">
            <aside className="pr-4">
              <TableOfContents headings={headings} />
            </aside>
          </div>

          <article className="bg-white rounded-none border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group flex-grow max-w-none xl:max-w-4xl mx-auto xl:mx-0">
            <header className="p-8 md:p-10 text-center xl:text-left border-b border-gray-100">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-[#000f45] bg-[#DBFF00] rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#000f45] mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-[#162869] font-inter text-lg mb-6">{post.summary}</p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-[#162869] font-inter">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#000f45]" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#000f45]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </header>

            <div className="p-8 md:p-10 pb-0">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  width={800}
                  height={450}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            <div className="p-8 md:p-10 pt-6">
              <MarkdownRenderer content={post.content} />
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default PostPage
