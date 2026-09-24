import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

interface SeoMetadataInput {
  path: string
  title: string
  description: string
}

/** Métadonnées complètes d'une page d'atterrissage : canonique, Open Graph, Twitter. */
export function buildSeoMetadata({ path, title, description }: SeoMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
