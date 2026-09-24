import { notFound } from 'next/navigation'
import { imagePartage, TAILLE_OG } from '@/lib/og'
import { PAGES_SERVICE, trouverPageService } from '@/content/pages-service'

export const alt = 'Lodgic : développeur web, mobile et logiciel à Toulouse'
export const size = TAILLE_OG
export const contentType = 'image/png'

export function generateStaticParams() {
  return PAGES_SERVICE.map((page) => ({ service: page.slug }))
}

/** Une image de partage par page de service : son titre et sa promesse. */
export default async function Image({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const page = trouverPageService(service)
  if (!page) notFound()

  const promesse = page.hero.highlight
  return imagePartage({
    titre: page.name,
    sousTitre: promesse.charAt(0).toUpperCase() + promesse.slice(1).replace(/[.]+$/, '') + '.',
  })
}
