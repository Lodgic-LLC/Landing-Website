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
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Combine and return all routes
  return [...staticRoutes, ...blogPostRoutes]
}
