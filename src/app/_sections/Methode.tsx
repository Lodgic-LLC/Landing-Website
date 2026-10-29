import Link from 'next/link'
import { methode } from '@/content/parcours'

export default function Method({ detailed = false }: { detailed?: boolean }) {
  return <section id="methode" className="section-space" aria-labelledby="method-title"><div className="container-site method-layout">
    <div className="method-process">
      <div className="method-intro"><p className="eyebrow">Du besoin à la livraison</p><h2 id="method-title" className="title-section mt-4">Vous avancez par décisions. Pas à l’aveugle.</h2><p className="mt-5 text-[#59666E]">Chaque étape précise ce qui doit être validé avant d’engager la suivante.</p>{!detailed && <Link href="/methode" className="text-link mt-6">Voir le déroulement complet <span aria-hidden="true">→</span></Link>}</div>
      <div className="brand-method-steps">{methode.steps.map((step,index) => <details key={step.title} className="brand-method-step" open={detailed || index === 0}>
        <summary><span className="method-number">0{index+1}</span><h3>{step.title}</h3><span className="method-toggle" aria-hidden="true">+</span></summary>
        <div className="method-step-copy"><p>{step.text}</p><p className="method-step-output"><strong>Ce que vous obtenez :</strong> {step.livrable}</p>{detailed && <><p className="mt-4"><strong>Votre rôle :</strong> {step.client}</p><p className="mt-3"><strong>La décision :</strong> {step.decision}</p></>}</div>
      </details>)}</div>
    </div>
  </div></section>
}
