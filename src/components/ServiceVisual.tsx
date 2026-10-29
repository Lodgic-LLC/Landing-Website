import { serviceVisuals } from '@/content/demonstrations'

/** Illustration HTML/CSS : aucune métrique ni fausse notification client. */
export default function ServiceVisual({ index }: { index: number }) {
  const visual = serviceVisuals[index] ?? serviceVisuals[0]
  return <div className={`service-visual service-visual-${visual.kind}`} aria-hidden="true">
    <div className="visual-topline"><span className="visual-mark">L/</span><span>{visual.label}</span><span className="visual-dot" /></div>
    <div className="visual-canvas">
      {visual.kind === 'site' ? <div className="mini-browser"><div className="mini-chrome"><i /><i /><i /></div><div className="mini-web-content"><span className="mini-eyebrow">Votre entreprise</span><strong>Une offre claire.<br />Un contact facile.</strong><div className="mini-web-tiles"><i /><i /><i /></div><span className="mini-action">Parlons de votre projet ↗</span></div></div>
      : visual.kind === 'application' ? <div className="mini-phone"><span className="phone-notch" /><span className="mini-eyebrow">Mon espace</span><strong>Tout commence<br />par une action.</strong>{visual.steps.map((step,i) => <div className="phone-row" key={step}><span>0{i+1}</span>{step}<b>›</b></div>)}<div className="phone-nav"><i /><i /><i /></div></div>
      : <div className="mini-workflow"><div className="workflow-label">Suivi des dossiers <span>Équipe</span></div>{visual.steps.map((step,i) => <div className="workflow-row" key={step}><span className="workflow-node">{i === 2 ? '✓' : `0${i+1}`}</span><span>{step}</span><span className="workflow-line" /></div>)}</div>}
    </div>
    <div className="visual-caption"><span>↗</span>{visual.outcome}</div>
  </div>
}
