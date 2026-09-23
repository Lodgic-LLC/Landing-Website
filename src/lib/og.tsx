import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

/** Dimensions recommandées pour les aperçus de partage (LinkedIn, WhatsApp, X…). */
export const TAILLE_OG = { width: 1200, height: 630 }

const police = (fichier: string) => readFile(join(process.cwd(), 'src/fonts', fichier))

/**
 * Image de partage aux couleurs du site : le logo texte, un titre,
 * un sous-titre et la signature. Générée à la construction du site.
 */
export async function imagePartage({ titre, sousTitre }: { titre: string; sousTitre: string }) {
  const [gras, normal] = await Promise.all([
    police('PlusJakartaSans-Bold.ttf'),
    police('PlusJakartaSans-Regular.ttf'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          backgroundColor: '#F8F6F2',
          color: '#2E2B28',
          fontFamily: 'Plus Jakarta Sans',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, backgroundColor: '#C2542D' }} />
          <div style={{ fontSize: 40, fontWeight: 700 }}>Lodgic</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: 1020,
            }}
          >
            {titre}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: '#6B655D', maxWidth: 980 }}>
            {sousTitre}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid #E6E1D8',
            paddingTop: 26,
            fontSize: 24,
            color: '#6B655D',
          }}
        >
          <div style={{ display: 'flex' }}>Yann · Ingénieur en informatique · Toulouse</div>
          <div style={{ display: 'flex', color: '#C2542D', fontWeight: 700 }}>lodgic-dev.com</div>
        </div>
      </div>
    ),
    {
      ...TAILLE_OG,
      fonts: [
        { name: 'Plus Jakarta Sans', data: gras, weight: 700, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: normal, weight: 400, style: 'normal' },
      ],
    },
  )
}
