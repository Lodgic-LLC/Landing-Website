'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { workshop } from '@/content/demonstrations'
import { contactHref } from '@/content/parcours'
import { trackClick } from '@/lib/analytics'

export default function ProjectWorkshop() {
  const [selected, setSelected] = useState(0)
  const id = useId()
  const scenario = workshop.scenarios[selected]
  return <section id="premiere-version" className="section-space project-workshop" aria-labelledby={`${id}-title`}>
    <div className="container-site">
      <div className="section-intro"><div><p className="eyebrow">Le projet se précise sous vos yeux</p><h2 className="title-section mt-4" id={`${id}-title`}>{workshop.title}</h2></div><p>{workshop.intro}</p></div>
      <div className="workshop-choices" role="group" aria-label="Choisir un exemple de cadrage">{workshop.scenarios.map((item,index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls={`${id}-example`} onClick={() => { setSelected(index); trackClick('workshop-example', { project_type: item.id }) }}>{item.label}<span aria-hidden="true">↗</span></button>)}</div>
      <div className="workshop-board" id={`${id}-example`} aria-live="polite" aria-atomic="true">
        <div className="workshop-brief"><p className="eyebrow">01 / Votre besoin</p><h3>{scenario.need}</h3><p>{scenario.user}</p><div className="workshop-later"><span>À garder pour la suite</span><p>{scenario.later}</p></div></div>
        <div className="workshop-scope"><div className="workshop-sheet-top"><span>Lodgic / Première version</span><span>Exemple</span></div><h3>Un parcours à construire.</h3><ol>{scenario.first.map((step,index) => <li key={step}><span>0{index+1}</span>{step}<b aria-hidden="true">✓</b></li>)}</ol><div className="workshop-validation"><span>02 / Comment vérifier</span><p>{scenario.test}</p></div><div className="workshop-delivery"><span>03 / Ce que vous récupérez</span><p>{scenario.deliverable}</p></div></div>
      </div>
      <div className="workshop-bottom"><p>{workshop.note}</p><Link href={contactHref(scenario.id)} className="btn-primary" data-track="contact" data-location="workshop">{scenario.cta} <span aria-hidden="true">↗</span></Link></div>
      <div className="workshop-principle"><span>Le périmètre est écrit.</span><span>Vous testez les parcours.</span><span>La passation est prévue.</span><Link href="/methode#cadre-detail" className="text-link">Voir le cadre de travail →</Link></div>
    </div>
  </section>
}
