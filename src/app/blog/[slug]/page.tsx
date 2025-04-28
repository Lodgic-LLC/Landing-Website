import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata, ResolvingMetadata } from 'next'
import { blogPosts, getPostBySlug } from '@/data/blog/posts'
import { BlogPost } from '@/types/blog'
import { parseDocument } from 'htmlparser2' // Parser
import * as domutils from 'domutils' // DOM utilities (use namespace import)
import { Element, Node } from 'domhandler' // Import specific types for nodes
import render from 'dom-serializer' // To render back to HTML string
import CodeBlockHighlighter from '@/components/blog/CodeBlockHighlighter' // Import the new Client Component
import Script from 'next/script'
import TableOfContents from '@/components/blog/TableOfContents' // Reverted to default import

// Import a Prism theme (e.g., Tomorrow Night)
// Ideally, import this in your global layout.tsx or main CSS file
import 'prismjs/themes/prism-tomorrow.css'

// Define a specific type for the page props
interface BlogPageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> // Make searchParams a Promise type as well
}

interface Heading {
  id: string
  text: string
  level: number // To potentially handle h3 later
}

// Function to sanitize text for ID generation
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

// Génère les métadonnées dynamiques pour le SEO
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }, // Update the type for params
  parent: ResolvingMetadata
): Promise<Metadata> {
  const paramsValue = await params // Await the promise
  const post = await getPostBySlug(paramsValue.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${post.title} | Blog Lodgic`,
    description: post.summary,
    alternates: {
      canonical: `https://lodgic-dev.com/blog/${paramsValue.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://lodgic-dev.com/blog/${paramsValue.slug}`,
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

// Génère les chemins statiques pour chaque article au build time
export async function generateStaticParams() {
  return blogPosts
    .map((post) => ({
      slug: post.slug,
    }))
    .map((params) => Promise.resolve(params))
}

// Le composant de la page de l'article
const PostPage = async (props: BlogPageProps) => {
  // Use the new interface
  const { params } = props // Destructure params inside the function
  const paramsValue = await params // Await the promise to get the actual params
  const post = await getPostBySlug(paramsValue.slug)

  if (!post) {
    notFound()
  }

  // --- Process HTML Content for IDs (Server-side) --- START
  const headings: Heading[] = []
  const dom = parseDocument(post.content)
  const h2Elements = domutils.findAll(
    (elem: Node): elem is Element => elem instanceof Element && elem.name === 'h2',
    dom.children
  )
  let headingIndex = 0

  h2Elements.forEach((h2: Element) => {
    const text = domutils.textContent(h2).trim()
    if (text) {
      let id = slugify(text)
      const originalId = id
      while (headings.some((h) => h.id === id)) {
        headingIndex++
        id = `${originalId}-${headingIndex}`
      }
      headingIndex = 0
      headings.push({ id, text, level: 2 })
      h2.attribs = { ...h2.attribs, id }
    }
  })
  const processedContent = render(dom) // Content with IDs added
  // --- Process HTML Content for IDs (Server-side) --- END

  // --- LD-JSON Schema (Server-side) --- START
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
    dateModified: new Date(post.date).toISOString(), // Or use a lastUpdated field if available
    articleBody: post.summary, // Keep it concise for schema
    ...(post.tags && { keywords: post.tags.join(', ') }),
  }
  // --- LD-JSON Schema (Server-side) --- END

  return (
    <>
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />

      {/* Apply a subtle background to the whole page container */}
      <div className="bg-slate-50">

        {/* Container principal pour l'article - Utilisation de Flexbox pour gérer la disposition */}
        {/* Ajout de 'relative' pour le positionnement potentiel d'enfants absolus si nécessaire */}
        {/* Ajout de 'xl:flex xl:gap-8' pour activer Flexbox et l'espacement sur les grands écrans */}
        <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28 max-w-7xl relative xl:flex xl:gap-8">

          {/* Sommaire sticky à gauche sur les grands écrans - Maintenant DANS le container Flex */}
          {/* Ajustement de la largeur et position sticky */}
          {/* 'flex-shrink-0' empêche le sommaire de rétrécir */}
          {/* La hauteur est limitée pour permettre le scroll interne si besoin : h-[calc(100vh-theme(spacing.24)-theme(spacing.28))] correspond à la hauteur de la vue moins le top offset et un peu de padding bas */}
          <div className="hidden xl:block sticky top-24 z-10 w-60 xl:w-72 flex-shrink-0 self-start h-[calc(100vh-theme(spacing.24)-theme(spacing.28))] overflow-y-auto">
            <aside className="pr-4"> {/* Ajout de padding droit pour espacer le texte de la scrollbar */}
              <TableOfContents headings={headings} />
            </aside>
          </div>

          {/* Contenu principal de l'article - Prend l'espace restant */}
          {/* 'flex-grow' permet à l'article de prendre l'espace disponible */}
          {/* max-w-none xl:max-w-4xl pour contrôler la largeur max spécifiquement ici */}
          <article className="bg-white p-8 sm:p-10 md:p-12 rounded-lg shadow-lg border border-gray-200 flex-grow max-w-none xl:max-w-4xl mx-auto xl:mx-0">
            {/* Increased bottom margin */}
            <header className="mb-10 md:mb-12 text-center xl:text-left"> {/* Ajustement alignement texte sur grand écran */}
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-gray-500 text-sm">
                Publié le{' '}
                {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}{' '}
                par {post.author}
              </p>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center group"
                >
                  <span className="mr-1 transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>
                  Retour au blog
                </Link>
              </div>
            </header>
            {/* Increased bottom margin */}
            <div className="mb-10 md:mb-12">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
                priority // Keep priority for LCP
              />
            </div>
            {/* Use the Client Component for rendering and highlighting */}
            <CodeBlockHighlighter htmlContent={processedContent} />
          </article>

        </div>
      </div>
    </>
  )
}

export default PostPage
