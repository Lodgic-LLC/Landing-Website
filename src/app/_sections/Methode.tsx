import { etapes } from '@/content/accueil'

export default function Method() {
  return <section id="methode" className="section-space bg-[#F4F6F7]" aria-labelledby="method-title">
    <div className="container-site method-layout">
      <div className="method-process">
      <div className="method-intro"><p className="eyebrow">Méthode</p><h2 id="method-title" className="title-section mt-4 max-w-xl">Du premier échange à la mise en ligne.</h2></div>
      <div className="method-steps">{etapes.map(step => <article key={step.title} className="method-step">
        <h3 className="method-step-title text-xl">{step.title}</h3>
        <div className="method-step-copy">
          <p className="text-base text-[#59666E]">{step.text}</p>
          <p className="method-step-output text-sm text-[#59666E]"><span className="font-semibold text-[#246B66]">Ce que vous obtenez :</span> {step.livrable}</p>
        </div>
      </article>)}</div>
      </div>
      <aside className="method-after" aria-labelledby="method-after-title">
        <div><p className="eyebrow">Après la livraison</p><h3 id="method-after-title" className="mt-3 text-2xl">Votre projet continue de vivre.</h3></div>
        <div><p>Nous définissons ensemble le suivi nécessaire : mises à jour, corrections et évolutions.</p><p className="mt-4">Le périmètre, le coût et les interventions couvertes sont fixés séparément.</p></div>
      </aside>
    </div>
  </section>
}
