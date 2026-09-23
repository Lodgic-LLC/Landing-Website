import { imagePartage, TAILLE_OG } from '@/lib/og'

export const alt = 'Yann, développeur web, mobile et logiciel à Toulouse — Lodgic'
export const size = TAILLE_OG
export const contentType = 'image/png'

/** Image de partage par défaut, utilisée par toutes les pages sans image dédiée. */
export default function Image() {
  return imagePartage({
    titre: 'Confiez votre projet à un ingénieur.',
    sousTitre: 'Sites web, applications mobiles et logiciels sur mesure, du cadrage à la mise en ligne.',
  })
}
