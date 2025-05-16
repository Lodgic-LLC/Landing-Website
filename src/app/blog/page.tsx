import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { blogPosts as rawBlogPosts } from '@/data/blog/posts'
import type { BlogPost } from '@/types/blog'
import { FaChevronRight, FaSearch, FaFilter, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'
import BlogFilters from '@/components/blog/BlogFilters'

const blogPosts = JSON.parse(JSON.stringify(rawBlogPosts))

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
  blogPost: (blogPosts as BlogPost[]).map((post: BlogPost) => ({
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

const BlogPage = () => {
  return (
    <>
      <script
        key={'structured-data'}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}
      />

      {/* Hero Section - Amélioré */}
      <section className="w-full bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 pt-28 md:pt-36 pb-20 md:pb-24 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="200" cy="100" r="300" fill="#FFFFFF" fillOpacity="0.07" />
            <circle cx="1200" cy="700" r="250" fill="#FFFFFF" fillOpacity="0.07" />
            <path d="M-200 400 Q400 200 720 400 T1600 400" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="100" />
            <g opacity="0.6">
              {[...Array(25)].map((_, i) => (
                <circle
                  key={`hero-dot-${i}`}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="#FFFFFF"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Contenu gauche */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] leading-tight mb-6">
                Nos <span className="text-[#E67E22]">Conseils</span>
                <span className="block text-4xl sm:text-5xl lg:text-5xl mt-1 sm:mt-2">
                  pour Vos Projets Web & Mobile
                </span>
              </h1>
              <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Développement, design, SEO : découvrez nos articles pour optimiser votre présence en ligne et la
                performance de vos applications.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-[#FFFFFF] text-[#2C3E50] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center text-lg"
                >
                  <FaEnvelope className="w-5 h-5 mr-2.5" />
                  Contactez-nous
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-[#FFFFFF]/80 text-[#FFFFFF] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF] transition-all flex items-center group text-lg"
                >
                  Nos Services
                  <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Image à droite */}
            <div className="w-full lg:w-2/5 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/svg/blog.svg"
                    alt="Illustration du blog Lodgic avec des idées et des articles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 to-transparent"></div>
                </div>
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#E67E22]/30 rounded-full blur-md animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-[#FFFFFF]/20 rounded-full animate-ping-slow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z" fill="#FAF3E0" />
          </svg>
        </div>
      </section>

      {/* Filtres et Articles Grid Section */}
      <section className="bg-[#FAF3E0] py-12 md:py-16">
        <BlogFilters blogPosts={blogPosts} />
      </section>

      {/* CTA Section - Amélioré */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 relative overflow-hidden">
        {/* Éléments décoratifs (style services) */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="250" r="300" fill="#FFFFFF" />
            <circle cx="100" cy="100" r="150" fill="#FFFFFF" />
            <circle cx="1300" cy="400" r="200" fill="#FFFFFF" />
          </svg>
          {/* Points lumineux (style services) */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#FFFFFF]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-[#FFFFFF]/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#FFFFFF]/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {' '}
          {/* max-w-4xl comme services CTA */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
              {' '}
              {/* Style titre comme services CTA */}
              Une Question, un Projet ? Parlons-en !
            </h2>
            <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {' '}
              {/* Style paragraphe comme services CTA */}
              Notre équipe est à votre écoute pour discuter de vos idées et transformer votre vision en réalité
              digitale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              {' '}
              {/* Style boutons comme services CTA */}
              <Link
                href="/rendez-vous"
                className="bg-[#FFFFFF] text-[#2C3E50] px-8 py-4 rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center text-lg w-full sm:w-auto justify-center"
              >
                <FaCalendarAlt className="w-5 h-5 mr-2.5" /> {/* Icône FaCalendarAlt */}
                Prendre Rendez-vous
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#FFFFFF]/80 text-[#FFFFFF] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF] transition-all flex items-center text-lg w-full sm:w-auto justify-center group"
              >
                <FaEnvelope className="w-5 h-5 mr-2.5" /> {/* Icône FaEnvelope déjà importée normalement */}
                Nous Contacter
                <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform hidden sm:inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
