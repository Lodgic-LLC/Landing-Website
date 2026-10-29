import Link from 'next/link'
import { decisionResources } from '@/content/parcours'

export default function DecisionResources({ compact = false }: { compact?: boolean }) {
  return <section className={`decision-resources ${compact ? 'decision-resources-compact' : 'section-space'}`} aria-labelledby="decision-title"><div className={compact ? undefined : 'container-site'}>
    <p className="eyebrow">Avant de vous engager</p><h2 id="decision-title" className="title-section mt-4">La bonne décision avant le développement.</h2>
    <div className="decision-grid">{decisionResources.map(item => <Link key={item.href} href={item.href} className="decision-card" data-track="guide" data-location="ressources"><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="text-link">{item.label} <span aria-hidden="true">→</span></span></Link>)}</div>
  </div></section>
}
