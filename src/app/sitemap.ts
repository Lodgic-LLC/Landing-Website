import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog/posts' // Import blog posts

const BASE_URL = 'https://lodgic-dev.com' // Define base URL

export default function sitemap(): MetadataRoute.Sitemap {
  // Get blog post routes
  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projets`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rendez-vous`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/a-propos`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/projets/houseguard`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projets/coinfinder`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projets/forge-ai`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  // Combine and return all routes
  return [...staticRoutes, ...blogPostRoutes]
}
