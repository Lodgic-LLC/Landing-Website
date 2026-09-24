import Link from 'next/link'
import { services } from '@/content/accueil'

export default function Services() {
  return <section id="services" className="section-space bg-[#F4F6F7]" aria-labelledby="services-title">
    <div className="container-site service-layout">
      <div><p className="eyebrow">Services</p><h2 id="services-title" className="title-section mt-4 max-w-sm">Sites web, applications mobiles et outils métier.</h2><p className="mt-5 max-w-sm text-[#59666E]">Le premier échange sert à préciser l’usage, les fonctions nécessaires et ce qui peut attendre.</p></div>
      <div>{services.map(service => <article key={service.title} className="service-entry"><h3 className="text-2xl">{service.title}</h3><p className="mt-3 max-w-xl text-[#59666E]">{service.description}</p><Link href={service.href} className="text-link mt-4 text-base">{service.cta}<span aria-hidden>→</span></Link></article>)}</div>
    </div>
  </section>
}
