import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import Formulaire, { FULL_FIELDS } from '@/components/Formulaire'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, SITE_URL } from '@/lib/site'
import { contact, isProjectKind } from '@/content/parcours'
import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({ path: '/contact', title: 'Parler de votre projet avec Yann, développeur à Toulouse', description: 'Site, application, outil métier ou reprise : décrivez votre besoin à Yann. Découvrez les étapes après votre message et les informations utiles pour commencer.' })
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ projet?: string | string[] }> }) {
  const { projet } = await searchParams
  const initialProject = isProjectKind(projet) ? projet : undefined
  return <main className="contact-page section-space">
    <JsonLd data={filAriane([{name:'Accueil',url:SITE_URL},{name:'Contact',url:SITE_URL+'/contact'}])} />
    <div className="container-site contact-conversation">
      <div><p className="eyebrow">{contact.eyebrow}</p><h1 className="title-hero mt-4">{contact.title}</h1><p className="journey-lead">{contact.description}</p><p className="mt-5 text-[#59666E]">{contact.reassurance}</p><ol className="contact-next">{contact.next.map((step,index) => <li key={step.title}><span>0{index+1}</span><div><h2>{step.title}</h2><p>{step.text}</p></div></li>)}</ol></div>
      <section className="contact-form-panel" aria-labelledby="contact-form-title"><p className="eyebrow">Directement à Yann</p><h2 id="contact-form-title" className="text-2xl mt-3">Quel est votre projet ?</h2><p className="mt-3 mb-7 text-base text-[#59666E]">Votre e-mail et quelques lignes suffisent. Les autres informations sont facultatives.</p><Formulaire key={initialProject ?? 'general'} initialProject={initialProject} source="page-contact" fields={FULL_FIELDS} submitLabel="Envoyer mon projet à Yann" /></section>
    </div>
    <section className="container-site contact-alternatives" aria-labelledby="contact-alternatives-title"><div><h2 id="contact-alternatives-title">Vous préférez un contact direct ?</h2><p>Depuis Toulouse, pour vos projets sur place ou à distance.</p></div><div><a href={`mailto:${CONTACT_EMAIL}`} className="text-link" data-track="email" data-location="contact">{CONTACT_EMAIL}</a><a href={`tel:${CONTACT_PHONE}`} className="text-link" data-track="telephone" data-location="contact">{CONTACT_PHONE_DISPLAY}</a></div></section>
    <div className="container-site mt-10"><Link href="/preparer-son-projet" className="text-link">Encore trop tôt pour écrire ? Préparer mon projet sans inscription <span aria-hidden="true">→</span></Link></div>
  </main>
}
