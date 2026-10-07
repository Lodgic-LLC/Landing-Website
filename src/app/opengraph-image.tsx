import { imagePartage, TAILLE_OG } from '@/lib/og'

export const alt = 'Yann Rouquie, ingénieur informatique freelance à Toulouse | Lodgic'
export const size = TAILLE_OG
export const contentType = 'image/png'

/** Image de partage par défaut, utilisée par toutes les pages sans image dédiée. */
export default function Image() {
  return imagePartage({
    titre: 'Ingénieur informatique freelance',
    sousTitre: 'Applications mobiles, sites web et outils métier conçus par Yann Rouquie.',
  })
}
