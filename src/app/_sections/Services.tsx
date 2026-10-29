import Link from 'next/link'
import ServiceVisual from '@/components/ServiceVisual'
import { services } from '@/content/accueil'
import { PAGES_SERVICE } from '@/content/pages-service'

export default function Services() {
  return <section id="services" className="section-space" aria-labelledby="services-title"><div className="container-site service-layout">
    <div className="section-intro"><div><p className="eyebrow">Ce que je construis</p><h2 id="services-title" className="title-section mt-4">Trois formats. Un besoin concret à résoudre.</h2></div><p>Nous choisissons le format selon vos utilisateurs, vos contraintes et votre budget. Chaque proposition décrit sa première version.</p></div>
    <div className="service-entries">{services.map((service,index) => {
      const price = PAGES_SERVICE.find(page => `/${page.slug}` === service.href)?.hero.badges.find(badge => badge.includes('€'))
      return <article key={service.href} className="service-entry">
        <ServiceVisual index={index} />
        <p className="service-format">{service.format}</p><h3>{service.title}</h3><p>{service.description}</p>
        <p className="service-output">{service.outcome}</p><p className="service-price">{price}<span> · périmètre à définir</span></p>
        <Link href={service.href} className="text-link" data-track="service" data-location="offres">{service.cta}<span aria-hidden="true">→</span></Link>
      </article>
    })}</div>
  <div className="service-next"><p>Le format est encore ouvert ? <strong>Commençons par le parcours qui compte.</strong></p><Link href="#premiere-version" className="text-link">Voir un exemple de cadrage <span aria-hidden="true">↓</span></Link></div></div></section>
}
