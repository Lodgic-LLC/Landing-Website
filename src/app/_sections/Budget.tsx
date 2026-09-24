import Link from 'next/link'
import { PAGES_SERVICE } from '@/content/pages-service'

const prestations = [
  { slug: 'creation-site-internet-toulouse', title: 'Site vitrine', scope: 'Un ensemble de pages cohérentes, pensé pour promouvoir votre activité et convertir les visites en demandes.', delay: '1 à 3 semaines' },
  { slug: 'developpement-application-mobile-toulouse', title: 'Application mobile', scope: 'Une application sur mesure pour iPhone et Android, publiée sur le Google Play Store et l’App Store.', delay: '2 à 4 mois' },
  { slug: 'logiciel-sur-mesure-toulouse', title: 'Outil métier', scope: 'Une solution interne qui centralise vos informations, réduit les ressaisies et fait gagner du temps à votre équipe.', delay: 'Planning défini sur mesure à chaque projet' },
]

export default function Budget() {
  return (
    <section id="budget" className="section-space" aria-labelledby="budget-title">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-2 md:gap-20">
          <div><p className="eyebrow">Budget</p><h2 id="budget-title" className="title-section mt-4">Prix de départ et délais habituels.</h2></div>
          <p className="self-end text-[#59666E]">Ces prix sont des points de départ. Le nombre de pages ou d’écrans, les connexions à vos outils et les données à reprendre déterminent le devis. Le planning tient aussi compte des contenus à fournir et des validations.</p>
        </div>
        <dl className="mt-10 border-t border-[#DCE3E6]">
          {prestations.map(item => {
            const page = PAGES_SERVICE.find(page => page.slug === item.slug)!
            const price = page.hero.badges.find(badge => badge.includes('€'))
            return <div key={item.slug} className="grid gap-3 border-b border-[#DCE3E6] py-7 md:grid-cols-[1fr_1.4fr_1fr] md:gap-10">
              <dt><Link href={`/${item.slug}`} className="text-link text-xl">{item.title}<span aria-hidden>↗</span></Link></dt>
              <dd className="text-base text-[#59666E]">{item.scope}</dd>
              <dd className="md:text-right"><span className="block text-xl font-semibold">{price}</span><span className="text-base text-[#59666E]">{item.delay}</span></dd>
            </div>
          })}
        </dl>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <p className="text-base text-[#59666E]"><strong className="font-semibold text-[#1D2930]">Vous gardez la main sur votre application.</strong> Les comptes nécessaires sont ouverts à votre nom : hébergement, nom de domaine, App Store et Google Play selon le projet. Vous en conservez les accès, le code livré et vos données. Le devis distingue les frais de ces services et le suivi après livraison.</p>
          <div className="md:text-right"><Link href="/contact" className="text-link">Discuter du périmètre de mon projet <span aria-hidden>→</span></Link></div>
        </div>
      </div>
    </section>
  )
}
