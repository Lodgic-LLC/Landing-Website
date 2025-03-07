export default async function sitemap() {
  return [
    {
      url: 'https://lodgic-dev.com',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://lodgic-dev.com/services',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://lodgic-dev.com/contact',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://lodgic-dev.com/rendez-vous',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://lodgic-dev.com/a-propos',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://lodgic-dev.com/politique-confidentialite',
      lastModified: new Date().toISOString(),
    },
  ]
}
