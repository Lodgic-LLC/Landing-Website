'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { orientProject, type Answers } from '@/lib/orientation'
import { orientationResults } from '@/content/orientation'
import { contactHref } from '@/content/parcours'
import { trackClick } from '@/lib/analytics'

const questions = [
  { key: 'audience', title: 'À qui le projet rend-il service ?', options: [{ value: 'public', label: 'Des visiteurs qui découvrent mon activité' }, { value: 'clients', label: 'Mes clients ou des utilisateurs qui reviennent' }, { value: 'equipe', label: 'Mon équipe, dans son travail quotidien' }] },
  { key: 'usage', title: 'Quel usage est le plus important ?', options: [{ value: 'ponctuel', label: 'Consulter une information ou faire une demande' }, { value: 'regulier', label: 'Retrouver un espace ou répéter une action' }, { value: 'telephone', label: 'Utiliser des fonctions du téléphone ou travailler sur le terrain' }] },
  { key: 'existing', title: 'Quel est votre point de départ ?', options: [{ value: 'nouveau', label: 'Le projet est à créer' }, { value: 'existant', label: 'Un site, une application ou un prototype existe' }] },
] as const

export default function ProjectOrientation() {
  const id = useId()
  const [answers, setAnswers] = useState<Answers>({ audience: '', usage: '', existing: '' })
  const [showResult, setShowResult] = useState(false)
  const kind = orientProject(answers)
  const result = kind ? orientationResults[kind] : null

  return <section id="orientation" className="project-orientation" aria-labelledby={`${id}-title`}>
    <div><p className="eyebrow">Outil de préparation · sans inscription</p><h2 id={`${id}-title`} className="title-section mt-4">Quel point de départ pour votre projet ?</h2><p className="mt-4">Trois réponses pour ouvrir la bonne discussion. Ce guide propose une piste, pas un diagnostic technique ni un devis. Vos réponses restent dans cette page.</p></div>
    <form onSubmit={event => { event.preventDefault(); if (kind) { setShowResult(true); trackClick('orientation-result', { project_type: kind }) } }}>
      {questions.map((question,index) => <fieldset key={question.key}><legend><span>0{index+1}</span>{question.title}</legend><div className="orientation-options">{question.options.map(option => <label key={option.value}><input type="radio" name={`${id}-${question.key}`} value={option.value} checked={answers[question.key] === option.value} onChange={() => { setAnswers(previous => ({ ...previous, [question.key]: option.value })); setShowResult(false) }} required /><span>{option.label}</span></label>)}</div></fieldset>)}
      <button className="btn-primary" type="submit">Voir mon point de départ <span aria-hidden="true">→</span></button>
    </form>
    <div aria-live="polite" aria-atomic="true">{showResult && result && kind && <div className="orientation-result"><p className="eyebrow">Une piste à valider ensemble</p><h3>{result.title}</h3><p>{result.text}</p><p><strong>La question à préparer :</strong> {result.check}</p><div className="journey-actions"><Link href={result.href} className="text-link" data-track="service" data-location="orientation">{result.next} <span aria-hidden="true">→</span></Link><Link href={contactHref(kind)} className="btn-primary" data-track="contact" data-location="orientation">En parler avec Yann <span aria-hidden="true">↗</span></Link></div><button type="button" className="orientation-reset" onClick={() => { setAnswers({audience:'',usage:'',existing:''}); setShowResult(false) }}>Recommencer</button></div>}</div>
    <noscript><p>Vous pouvez aussi examiner directement les prestations ci-dessous, ou télécharger la trame de préparation.</p></noscript>
    <nav className="orientation-direct" aria-label="Choisir directement une prestation"><Link href="/creation-site-internet-toulouse">Site web</Link><Link href="/developpement-application-mobile-toulouse">Application mobile</Link><Link href="/logiciel-sur-mesure-toulouse">Outil métier</Link><Link href="/reprise-application-mobile">Reprise de projet</Link></nav>
  </section>
}
