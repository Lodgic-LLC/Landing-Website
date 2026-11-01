import Link from 'next/link'
import { services } from '@/content/accueil'
import { besoinsServices, cadeauApplicationMobile } from '@/content/choix-projet'

export default function Services() {
  return <section id="services" className="section-space bg-[#F4F6F7]" aria-labelledby="services-title">
    <div className="container-site service-layout">
      <div className="service-intro"><p className="eyebrow">Services</p><h2 id="services-title" className="title-section mt-4 max-w-sm">Sites web, applications mobiles et outils métier.</h2><p className="mt-5 max-w-sm text-[#59666E]">Le premier échange sert à préciser l’usage, les fonctions nécessaires et ce qui peut attendre.</p></div>
      <div className="service-entries">{services.map((service, index) => <article key={service.title} className="service-entry">
        <p className="service-need">{besoinsServices[index].besoin}</p>
        <h3 className="text-2xl">{service.title}</h3>
        <p className="mt-3 max-w-xl text-[#59666E]">{service.description}</p>
        {service.href === '/developpement-application-mobile-toulouse' && <div className="service-gift">
          <p className="service-gift-label">{cadeauApplicationMobile.label}</p>
          <p className="service-gift-title">{cadeauApplicationMobile.title}</p>
          <p className="service-gift-description">{cadeauApplicationMobile.description}</p>
        </div>}
        <details className="service-choice"><summary>Est-ce le bon format pour moi ?</summary><p>{besoinsServices[index].question}</p><p><strong>À cadrer ensemble :</strong> {besoinsServices[index].resultat}</p></details>
        <Link href={service.href} className="text-link mt-4 text-base">{service.cta}<span aria-hidden>→</span></Link>
      </article>)}</div>
      <nav className="service-more" aria-label="Pour approfondir votre projet d’application mobile">
        <span>Pour votre application mobile</span>
        <Link href="/prix-application-mobile" className="text-link text-base">Quel budget prévoir ? <span aria-hidden>→</span></Link>
        <Link href="/reprise-application-mobile" className="text-link text-base">Reprendre une application existante <span aria-hidden>→</span></Link>
      </nav>
    </div>
  </section>
}
