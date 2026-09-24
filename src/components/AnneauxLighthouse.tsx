/**
 * Scores affichés en anneaux, aux couleurs de l'outil Google Lighthouse
 * (vert à partir de 90, orange de 50 à 89, rouge en dessous).
 *
 * Une valeur peut être un score sur 100 (« 98 ») ou une fraction (« 3/3 »).
 */
export interface ScoreAnneau {
  name: string
  value: string
  /** Couleur imposée, quand on ne veut pas suivre le barème Lighthouse. */
  couleur?: 'vert' | 'orange' | 'rouge'
}

const pourcentage = (value: string) => {
  const fraction = value.match(/^(\d+)\s*\/\s*(\d+)$/)
  if (fraction) return (Number(fraction[1]) / Number(fraction[2])) * 100
  const n = Number(value.replace(',', '.'))
  return Number.isFinite(n) ? n : 0
}

const PALETTE = {
  vert: { trait: '#0CCE6B', fond: '#E6F4EA', texte: '#0A7D3A' },
  orange: { trait: '#FFA400', fond: '#FEF7E0', texte: '#B25E00' },
  rouge: { trait: '#FF4E42', fond: '#FCE8E6', texte: '#B3261E' },
}

const couleurs = (pct: number, imposee?: keyof typeof PALETTE) => {
  if (imposee) return PALETTE[imposee]
  if (pct >= 90) return PALETTE.vert
  if (pct >= 50) return PALETTE.orange
  return PALETTE.rouge
}

export default function AnneauxLighthouse({
  scores,
  taille = 'md',
  className,
}: {
  scores: ScoreAnneau[]
  /** sm : carte d'accueil ; md : page de détail */
  taille?: 'sm' | 'md'
  /** Disposition de la grille ; par défaut, une colonne par score sur écran large. */
  className?: string
}) {
  const dim = taille === 'sm' ? 52 : 68
  const trait = taille === 'sm' ? 4 : 5
  const rayon = (dim - trait) / 2
  const circonference = 2 * Math.PI * rayon

  return (
    <dl
      className={
        className ??
        (taille === 'sm' ? 'grid grid-cols-4 gap-x-2 gap-y-3' : 'grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-6')
      }
    >
      {scores.map((score) => {
        const pct = pourcentage(score.value)
        const c = couleurs(pct, score.couleur)
        return (
          <div key={score.name} className="flex flex-col items-center text-center">
            <dd className="order-first relative" style={{ width: dim, height: dim }}>
              <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`} aria-hidden>
                <circle cx={dim / 2} cy={dim / 2} r={rayon} fill={c.fond} stroke={c.fond} strokeWidth={trait} />
                <circle
                  cx={dim / 2}
                  cy={dim / 2}
                  r={rayon}
                  fill="none"
                  stroke={c.trait}
                  strokeWidth={trait}
                  strokeLinecap="round"
                  strokeDasharray={circonference}
                  strokeDashoffset={circonference * (1 - pct / 100)}
                  transform={`rotate(-90 ${dim / 2} ${dim / 2})`}
                />
              </svg>
              <span
                className={`absolute inset-0 flex items-center justify-center mono font-semibold ${taille === 'sm' ? 'text-[13px]' : 'text-base'}`}
                style={{ color: c.texte }}
              >
                {score.value}
              </span>
            </dd>
            <dt
              className={`mt-1.5 leading-tight text-[#59666E] font-body ${taille === 'sm' ? 'text-[10px]' : 'text-[11px]'}`}
            >
              {score.name}
            </dt>
          </div>
        )
      })}
    </dl>
  )
}
