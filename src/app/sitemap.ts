import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog/posts' // Import blog posts
import { projects } from '@/data/projects'
import { SITE_URL } from '@/lib/site'

const STATIC_LAST_MODIFIED = new Date('2026-04-28T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  // Get blog post routes
  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/projets/${project.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/offre`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/rendez-vous`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/projets`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: blogPosts[0]?.date ? new Date(blogPosts[0].date).toISOString() : STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/politique-confidentialite`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/llms-full.txt`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ]

  // Combine and return all routes
  return [...staticRoutes, ...projectRoutes, ...blogPostRoutes]
}
