import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPaginatedPosts, getPopularPosts } from '@/lib/blog'

const POSTS_PER_PAGE = 9

export const metadata: Metadata = {
  title: 'Lodgic Conseils - Blog développement web et mobile',
  description:
    "Découvrez les articles de Lodgic sur le développement web, mobile, le design, le SEO et les bonnes pratiques pour lancer vos projets digitaux.",
  alternates: {
    canonical: 'https://lodgic-dev.com/blog',
  },
  openGraph: {
    title: 'Lodgic Conseils - Blog Lodgic',
    description:
      "Articles, guides et retours d'expérience de l'équipe Lodgic sur le web, le mobile, le design et le SEO.",
    url: 'https://lodgic-dev.com/blog',
    siteName: 'Lodgic',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lodgic Conseils - Blog Lodgic',
    description:
      "Articles, guides et retours d'expérience sur le web, le mobile, le design et le SEO.",
  },
}

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const parsePage = (value: string | string[] | undefined): number => {
  if (!value) return 1
  const raw = Array.isArray(value) ? value[0] : value
  const parsed = Number.parseInt(raw ?? '1', 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1
}

const buildPageLink = (page: number): string => (page <= 1 ? '/blog' : `/blog?page=${page}`)

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams
  const requestedPage = parsePage(params.page)

  const allPosts = getAllPosts()
  const featuredPost = allPosts[0]
  const excludeSlugs = featuredPost ? [featuredPost.slug] : []

  const { posts, totalPages, page } = getPaginatedPosts(requestedPage, POSTS_PER_PAGE, {
    excludeSlugs,
  })
  const popularPosts = getPopularPosts().filter((p) => p.slug !== featuredPost?.slug)

  const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1)

  return (
    <div className="bg-[#f6f7fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bricolage-grotesque-bold text-[#000f45] mb-4">
            Lodgic{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Conseils</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 transform -skew-x-12 z-0"></span>
            </span>
          </h1>
          <p className="text-lg font-inter text-[#162869] max-w-2xl mx-auto">
            Articles, guides et retours d&apos;expérience sur le développement web, mobile, le design et le SEO.
          </p>
        </header>

        {featuredPost && page === 1 && (
          <section className="mb-14 md:mb-20" aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="sr-only">
              Article à la une
            </h2>
            <article className="bg-white border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all group">
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <div className="relative w-full aspect-[16/7] overflow-hidden">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.imageAlt || featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#000f45] bg-[#DBFF00] rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-[#162869]/80 font-inter">
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bricolage-grotesque-bold text-[#000f45] mb-4 leading-tight group-hover:text-[#162869] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[#162869] font-inter text-base md:text-lg mb-6 max-w-3xl">
                    {featuredPost.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-base font-inter font-semibold text-[#0b57d0] group-hover:underline">
                    Lire l&apos;article
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <section className="lg:col-span-8" aria-labelledby="posts-heading">
            <h2
              id="posts-heading"
              className="text-2xl md:text-3xl font-bricolage-grotesque-bold text-[#000f45] mb-8"
            >
              Tous les articles
            </h2>

            {posts.length === 0 ? (
              <div className="bg-white border border-gray-200 p-8 text-center">
                <p className="text-[#162869] font-inter">Aucun article pour le moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border border-gray-200 hover:border-[#000f45]/50 hover:shadow-xl transition-all duration-300 group flex flex-col"
                  >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                      <div className="relative w-full aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.imageAlt || post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 md:p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs uppercase tracking-wide text-[#000f45] font-semibold font-inter">
                            {post.category}
                          </span>
                          <span className="text-xs text-[#162869]/70 font-inter">
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bricolage-grotesque-bold text-[#0b143d] leading-snug mb-3 line-clamp-2 group-hover:text-[#162869] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#162869]/80 font-inter line-clamp-3 mb-4 flex-grow">
                          {post.summary}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-inter font-medium text-[#0b57d0] group-hover:underline mt-auto">
                          Lire l&apos;article
                          <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav
                className="flex items-center justify-center gap-2 mt-12 flex-wrap"
                aria-label="Pagination"
              >
                {page > 1 && (
                  <Link
                    href={buildPageLink(page - 1)}
                    className="px-4 py-2 border border-[#000f45]/30 text-[#000f45] font-inter text-sm hover:bg-[#000f45] hover:text-white transition-colors"
                    aria-label="Page précédente"
                  >
                    Précédent
                  </Link>
                )}
                {pageNumbers.map((n) => {
                  const isActive = n === page
                  return (
                    <Link
                      key={n}
                      href={buildPageLink(n)}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Page ${n}`}
                      className={`px-4 py-2 text-sm font-inter border transition-colors ${
                        isActive
                          ? 'bg-[#000f45] text-white border-[#000f45]'
                          : 'bg-white text-[#000f45] border-[#000f45]/30 hover:bg-[#000f45] hover:text-white'
                      }`}
                    >
                      {n}
                    </Link>
                  )
                })}
                {page < totalPages && (
                  <Link
                    href={buildPageLink(page + 1)}
                    className="px-4 py-2 border border-[#000f45]/30 text-[#000f45] font-inter text-sm hover:bg-[#000f45] hover:text-white transition-colors"
                    aria-label="Page suivante"
                  >
                    Suivant
                  </Link>
                )}
              </nav>
            )}
          </section>

          <aside className="lg:col-span-4" aria-labelledby="popular-heading">
            <div className="sticky top-24 bg-white border border-gray-200 p-6 md:p-8">
              <h2
                id="popular-heading"
                className="text-xl md:text-2xl font-bricolage-grotesque-bold text-[#000f45] mb-6"
              >
                Articles populaires
              </h2>
              {popularPosts.length === 0 ? (
                <p className="text-sm text-[#162869]/80 font-inter">
                  Aucun article populaire pour le moment.
                </p>
              ) : (
                <ul className="space-y-4">
                  {popularPosts.map((post) => (
                    <li key={post.slug} className="group">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block border-l-2 border-[#DBFF00] pl-4 py-1 hover:border-[#000f45] transition-colors"
                      >
                        <span className="block text-xs uppercase tracking-wide text-[#000f45]/70 font-inter mb-1">
                          {post.category}
                        </span>
                        <span className="block text-sm md:text-base font-inter font-medium text-[#0b143d] group-hover:text-[#0b57d0] transition-colors">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
