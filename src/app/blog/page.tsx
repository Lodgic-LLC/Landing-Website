import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { blogPosts } from '@/data/blog/posts'

export const metadata: Metadata = {
  title: 'Blog | Actualités et Conseils Web par Lodgic',
  description:
    'Explorez nos articles sur le développement web, le design, le SEO et les dernières tendances technologiques pour améliorer votre présence en ligne.',
  alternates: {
    canonical: 'https://lodgic-dev.com/blog',
  },
  openGraph: {
    title: 'Blog | Actualités et Conseils Web par Lodgic',
    description:
      'Explorez nos articles sur le développement web, le design, le SEO et les dernières tendances technologiques pour améliorer votre présence en ligne.',
    url: 'https://lodgic-dev.com/blog',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Blog Lodgic - Actualités et Conseils Web',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'blog développement web',
    'conseils web',
    'tendances technologiques',
    'développement application mobile',
    'blog tech',
    'SEO',
    'design web',
    'blog Lodgic',
    'actualités tech',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Actualités et Conseils Web par Lodgic',
    description:
      'Explorez nos articles sur le développement web, le design, le SEO et les dernières tendances technologiques.',
    images: ['https://lodgic-dev.com/FullLogo_Transparent.png'],
  },
}

const BlogPage = () => {
  // Création du schéma LD-JSON pour le blog
  const blogSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Lodgic - Actualités et Conseils Web',
    description:
      'Explorez nos articles sur le développement web, le design, le SEO et les dernières tendances technologiques pour améliorer votre présence en ligne.',
    url: 'https://lodgic-dev.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Lodgic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      datePublished: new Date(post.date).toISOString(),
      author: {
        '@type': 'Person',
        name: post.author,
      },
      image: post.imageUrl,
      url: `https://lodgic-dev.com/blog/${post.slug}`,
    })),
  }

  return (
    <>
      <script
        key={'structured-data'}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}
      />

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-14">
          Notre Blog
        </h1>
        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent group-hover:from-black/50 transition-opacity duration-300"></div>
              </Link>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                    title={post.title}
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Publié le{' '}
                  {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 mt-auto font-medium text-sm inline-flex items-center group/link"
                >
                  Lire la suite
                  <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPage
