import { etapes } from '@/content/accueil'

export default function Method() {
  return <section id="methode" className="section-space bg-[#F4F6F7]" aria-labelledby="method-title">
    <div className="container-site">
      <p className="eyebrow">Méthode</p><h2 id="method-title" className="title-section mt-4 max-w-xl">Quatre étapes, du besoin à la mise en ligne.</h2>
      <ol className="method-steps">{etapes.map(step => <li key={step.n}><span className="step-number">{step.n}</span><div><h3 className="mt-3 text-xl max-[479px]:mt-0">{step.title}</h3><p className="mt-3 text-base text-[#59666E]">{step.text}</p><p className="mt-5 text-sm"><span className="block font-semibold text-[#246B66]">À cette étape</span>{step.livrable}</p></div></li>)}</ol>
      <div className="mt-10 grid gap-4 border-t border-[#DCE3E6] pt-7 md:grid-cols-[1fr_2fr]"><h3 className="text-xl">Et après la mise en ligne ?</h3><p className="max-w-3xl text-base text-[#59666E]">Nous précisons le suivi dont vous avez besoin : mises à jour, corrections et évolutions. Le périmètre et le coût de la maintenance sont définis séparément, pour savoir quelles interventions sont couvertes.</p></div>
    </div>
  </section>
}
