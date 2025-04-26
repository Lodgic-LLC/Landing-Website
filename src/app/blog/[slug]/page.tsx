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
import TableOfContents from '@/components/blog/TableOfContents' // Import the new TOC component

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
    openGraph: {
      title: post.title,
      description: post.summary,
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
    },
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

  // --- Process HTML Content for TOC --- START
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
      // Ensure uniqueness if needed (simple counter for now)
      const originalId = id
      while (headings.some((h) => h.id === id)) {
        headingIndex++
        id = `${originalId}-${headingIndex}`
      }
      headingIndex = 0 // Reset for next base id

      headings.push({ id, text, level: 2 })
      // Add the id attribute to the h2 element in the DOM object
      h2.attribs = { ...h2.attribs, id }
    }
  })
  // Render the modified DOM back to an HTML string
  const processedContent = render(dom)
  // --- Process HTML Content for TOC --- END

  return (
    // Container keeps max-width for overall structure including TOC space
    <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 max-w-7xl">
      <div className="lg:flex lg:flex-row lg:gap-12 xl:gap-16">
        {' '}
        {/* Added larger gap for xl */}
        {/* Table of Contents - Fixed width, sticky */}
        {/* Adjust w-64 or w-72 based on preference */}
        {/* Main Article Content Wrapper - Remove min-w-0 */}
        <div className="flex-1">
          {/* Article centered within its wrapper */}
          <article className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
            {' '}
            {/* Centered article */}
            <header className="mb-8 md:mb-10 text-center">
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
            <div className="mb-8 md:mb-10">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
                priority
              />
            </div>
            {/* Use the processed content with IDs */}
            <div
              className="prose prose-lg lg:prose-xl max-w-none mx-auto
                        prose-pre:overflow-x-auto /* Allow horizontal scroll for code blocks */
                        prose-headings:scroll-mt-24 /* Offset for sticky header */
                        prose-headings:text-gray-800 prose-headings:font-semibold
                        prose-p:text-gray-700 prose-p:leading-relaxed
                        prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:transition-colors
                        prose-strong:text-gray-800
                        prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                        prose-ol:list-decimal prose-ol:pl-6 prose-li:my-1
                        prose-img:rounded-md prose-img:shadow-sm prose-img:border prose-img:border-gray-100"
              dangerouslySetInnerHTML={{ __html: processedContent }} // Use processed content
            />
          </article>
        </div>
      </div>
    </div>
  )
}

export default PostPage
