import { imagePartage, TAILLE_OG } from '@/lib/og'

export const alt = 'Yann, développeur web et mobile à Toulouse | Lodgic'
export const size = TAILLE_OG
export const contentType = 'image/png'

/** Image de partage par défaut, utilisée par toutes les pages sans image dédiée. */
export default function Image() {
  return imagePartage({
    titre: 'Développeur web et mobile à Toulouse',
    sousTitre: 'Applications mobiles, sites web et outils métier conçus par Yann.',
  })
}
