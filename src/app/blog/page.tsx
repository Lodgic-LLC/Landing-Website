import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { blogPosts } from '@/data/blog/posts'
import { FaChevronRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Blog - Actualités et Conseils Web par Lodgic',
  description:
    'Explorez nos articles sur le développement web, le design, le SEO et les dernières tendances technologiques pour améliorer votre présence en ligne.',
  alternates: {
    canonical: 'https://lodgic-dev.com/blog',
  },
  openGraph: {
    title: 'Blog - Actualités et Conseils Web par Lodgic',
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
    title: 'Blog - Actualités et Conseils Web par Lodgic',
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 pt-24 md:pt-32 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="350" r="400" fill="white" fillOpacity="0.1" />
            <circle cx="1100" cy="150" r="200" fill="white" fillOpacity="0.1" />
            <circle cx="300" cy="650" r="250" fill="white" fillOpacity="0.1" />

            {/* Points lumineux */}
            <g opacity="0.5">
              {[...Array(20)].map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="white"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-20 md:pb-24">
            {/* Contenu gauche */}
            <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Notre{' '}
                <span className="bg-gradient-to-r from-blue-200 to-white text-transparent bg-clip-text">Blog</span> Tech
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                Explorez nos articles sur le développement web, le design, le SEO et les dernières tendances
                technologiques pour améliorer votre présence en ligne.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Contactez-nous
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center group"
                >
                  Découvrir nos services
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image à droite - Hidden on mobile, visible on tablet and up */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 hidden sm:block">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470"
                    alt="Blog et actualités technologiques"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                </div>

                {/* Élément décoratif derrière l'image */}
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-blue-300/20 -z-10"></div>

                {/* Points flottants autour de l'image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-blue-300/40 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos derniers articles</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">
              Découvrez nos réflexions et conseils sur les dernières tendances technologiques et les meilleures
              pratiques de développement.
            </p>
          </div>

          <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative h-56 md:h-64">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white/90 text-sm mb-2">
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>
                  </div>
                </Link>

                <div className="p-5 md:p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gray-50">
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{post.summary}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center group/link"
                    >
                      Lire la suite
                      <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Points lumineux */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-white rounded-full opacity-20"></div>

          {/* Cercles abstraits */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border border-white/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vous avez une question ou un projet ?</h2>
            <p className="text-white/90 text-lg mb-8">
              Notre équipe est prête à vous accompagner dans la réalisation de vos projets web et mobiles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/rendez-vous"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Prendre rendez-vous
                <FaChevronRight className="inline-block ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
