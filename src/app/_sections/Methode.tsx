import { etapes } from '@/content/accueil'

export default function Method() {
  return <section id="methode" className="section-space bg-[#F4F6F7]" aria-labelledby="method-title">
    <div className="container-site">
      <p className="eyebrow">Méthode</p><h2 id="method-title" className="title-section mt-4 max-w-xl">Quatre étapes, du besoin à la mise en ligne.</h2>
      <ol className="method-steps">{etapes.map(step => <li key={step.n}>
        <span className="step-number">{step.n}</span>
        <div className="method-step-content"><h3 className="text-xl">{step.title}</h3><p className="mt-3 text-base text-[#59666E]">{step.text}</p></div>
        <p className="method-step-output text-base text-[#59666E]"><span className="mb-2 block text-sm font-semibold text-[#246B66]">À cette étape</span>{step.livrable}</p>
      </li>)}</ol>
      <div className="method-after"><h3 className="text-xl">Et après la mise en ligne ?</h3><p className="max-w-3xl text-base text-[#59666E]">Je définis avec vous le suivi nécessaire : mises à jour, corrections et évolutions. Le périmètre et le coût de la maintenance sont fixés séparément, pour préciser les interventions couvertes.</p></div>
    </div>
  </section>
}
