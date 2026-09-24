import { imagePartage, TAILLE_OG } from '@/lib/og'

export const alt = 'Yann, développeur d’applications mobiles iOS et Android et web à Toulouse | Lodgic'
export const size = TAILLE_OG
export const contentType = 'image/png'

/** Image de partage par défaut, utilisée par toutes les pages sans image dédiée. */
export default function Image() {
  return imagePartage({
    titre: 'Développeur mobile et web à Toulouse',
    sousTitre: 'Applications iOS et Android, sites web et outils métier conçus par Yann.',
  })
}
