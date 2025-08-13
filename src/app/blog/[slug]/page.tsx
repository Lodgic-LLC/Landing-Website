import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { blogPosts, getPostBySlug } from "@/data/blog/posts";
import { BlogPost } from "@/types/blog";
import { parseDocument } from "htmlparser2"; // Parser
import * as domutils from "domutils"; // DOM utilities (use namespace import)
import { Element, Node } from "domhandler"; // Import specific types for nodes
import render from "dom-serializer"; // To render back to HTML string
import CodeBlockHighlighter from "@/components/blog/CodeBlockHighlighter"; // Import the new Client Component
import Script from "next/script";
import TableOfContents from "@/components/blog/TableOfContents"; // Reverted to default import

// Define a specific type for the page props
interface BlogPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // Make searchParams a Promise type as well
}

interface Heading {
  id: string;
  text: string;
  level: number; // To potentially handle h3 later
}

// Function to sanitize text for ID generation
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, '') // Supprime les diacritiques
    .replace(/[^a-z0-9]+/g, '-') // Remplace tous les caractères non alphanumériques par un tiret
    .replace(/^-+|-+$/g, '') // Supprime les tirets au début et à la fin
    .replace(/-+/g, '-'); // Remplace les tirets multiples par un seul tiret
};

// Génère les métadonnées dynamiques pour le SEO
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }, // Update the type for params
  parent: ResolvingMetadata
): Promise<Metadata> {
  const paramsValue = await params; // Await the promise
  const post = await getPostBySlug(paramsValue.slug);

  if (!post) {
    return {
      title: "Article non trouvé",
    };
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
      siteName: "Lodgic",
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.imageUrl],
    },
    keywords: [
      "lodgic",
      "blog tech",
      "développement web",
      "application mobile",
      post.title.toLowerCase(),
      ...(post.tags || []),
    ],
  };
}

// Génère les chemins statiques pour chaque article au build time
export async function generateStaticParams() {
  return blogPosts
    .map((post) => ({
      slug: post.slug,
    }))
    .map((params) => Promise.resolve(params));
}

// Le composant de la page de l'article
const PostPage = async (props: BlogPageProps) => {
  // Use the new interface
  const { params } = props; // Destructure params inside the function
  const paramsValue = await params; // Await the promise to get the actual params
  const post = await getPostBySlug(paramsValue.slug);

  if (!post) {
    notFound();
  }

  // --- Process HTML Content for IDs (Server-side) --- START
  const headings: Heading[] = [];
  const dom = parseDocument(post.content);
  const h2Elements = domutils.findAll(
    (elem: Node): elem is Element =>
      elem instanceof Element && elem.name === "h2",
    dom.children
  );
  let headingIndex = 0;

  h2Elements.forEach((h2: Element) => {
    const text = domutils.textContent(h2).trim();
    if (text) {
      let id = slugify(text);
      const originalId = id;
      while (headings.some((h) => h.id === id)) {
        headingIndex++;
        id = `${originalId}-${headingIndex}`;
      }
      headingIndex = 0;
      headings.push({ id, text, level: 2 });
      h2.attribs = { ...h2.attribs, id };
    }
  });
  const processedContent = render(dom); // Content with IDs added
  // --- Process HTML Content for IDs (Server-side) --- END

  // --- LD-JSON Schema (Server-side) --- START
  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lodgic-dev.com/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.summary,
    image: post.imageUrl,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Lodgic",
      logo: {
        "@type": "ImageObject",
        url: "https://lodgic-dev.com/FullLogo_Transparent.png",
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(), // Or use a lastUpdated field if available
    articleBody: post.summary, // Keep it concise for schema
    ...(post.tags && { keywords: post.tags.join(", ") }),
  };
  // --- LD-JSON Schema (Server-side) --- END

  return (
    <>
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />

      {/* Page container avec style moderne */}
      <div className="bg-[#f6f7fc] min-h-screen">
        {/* Container principal pour l'article */}
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28 relative xl:flex xl:gap-8">
          {/* Sommaire sticky à gauche sur les grands écrans */}
          <div className="hidden xl:block sticky top-24 z-10 w-60 xl:w-72 flex-shrink-0 self-start h-[calc(100vh-theme(spacing.24)-theme(spacing.28))] overflow-y-auto">
            <aside className="pr-4">
              <TableOfContents headings={headings} />
            </aside>
          </div>

          {/* Contenu principal de l'article */}
          <article className="bg-white rounded-none border border-gray-200 hover:border-[#000f45]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group flex-grow max-w-none xl:max-w-4xl mx-auto xl:mx-0">
            {/* Header de l'article */}
            <header className="p-8 md:p-10 text-center xl:text-left border-b border-gray-100">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-[#000f45] bg-[#DBFF00] rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bricolage-grotesque-bold text-[#000f45] mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-[#162869] font-inter text-lg mb-6">
                {post.summary}
              </p>
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
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </header>

            {/* Image principale */}
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

            {/* Contenu de l'article */}
            <div className="p-8 md:p-10 pt-6">
              <CodeBlockHighlighter htmlContent={processedContent} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default PostPage;
