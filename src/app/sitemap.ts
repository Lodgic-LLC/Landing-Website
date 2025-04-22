import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lodgic-dev.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://lodgic-dev.com/services',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://lodgic-dev.com/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://lodgic-dev.com/projets',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://lodgic-dev.com/rendez-vous',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://lodgic-dev.com/a-propos',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://lodgic-dev.com/politique-confidentialite',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://lodgic-dev.com/projets/houseguard',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://lodgic-dev.com/projets/coinfinder',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://lodgic-dev.com/projets/forge-ai',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

  ]
}
