import Link from 'next/link'
import Method from '@/app/_sections/Methode'
import Contact from '@/app/_sections/Contact'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { methode, cadre, CONTACT_CTA } from '@/content/parcours'
import { SITE_URL } from '@/lib/site'
import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({ path: '/methode', title: 'Méthode de développement : cadrage, tests et livraison', description: 'Comment se déroule un projet avec Yann : première version, devis, validations, tests, accès et maintenance. Votre rôle et les livrables à chaque étape.' })
export default function MethodePage() {
  return <main className="method-page">
    <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: 'Méthode', url: `${SITE_URL}/methode` }])} />
    <header className="journey-hero section-space"><div className="container-site"><p className="eyebrow">{methode.eyebrow}</p><h1 className="title-hero mt-4">{methode.title}</h1><p className="journey-lead">{methode.description}</p><div className="journey-actions"><Link href="/contact" className="btn-primary" data-track="contact" data-location="methode">{CONTACT_CTA} <span aria-hidden="true">↗</span></Link><Link href="/preparer-son-projet" className="text-link">Préparer mon besoin <span aria-hidden="true">→</span></Link></div></div></header>
    <Method detailed />
    <section id="cadre-detail" className="section-space cadre-section"><div className="container-site"><p className="eyebrow">Le cadre du projet</p><h2 className="title-section mt-4">Ce que nous mettons par écrit.</h2><div className="cadre-grid">{cadre.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><Link href="/conditions-generales-de-vente" className="text-link mt-7">Lire les conditions de prestation <span aria-hidden="true">→</span></Link></div></section>
    <section className="section-space"><div className="container-site ownership-layout"><div><p className="eyebrow">Après la livraison</p><h2 className="title-section mt-4">Un lancement se prépare. La suite aussi.</h2></div><div><p>Une mise en ligne ne supprime pas les mises à jour, les corrections ou les frais de services externes. Nous séparons ces besoins du développement initial pour choisir le suivi adapté.</p><ul className="plain-checklist"><li>Qui détient les comptes et reçoit les alertes ?</li><li>Quels services et abonnements restent nécessaires ?</li><li>Qui intervient pour une correction ou une évolution ?</li><li>Quelles validations restent à la charge de votre équipe ?</li></ul><p>Le contrat de suivi précise les interventions couvertes. Une nouvelle fonction fait l’objet d’un périmètre et d’un chiffrage distincts.</p></div></div></section>
    <Contact source="methode" />
  </main>
}
