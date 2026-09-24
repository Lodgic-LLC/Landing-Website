import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd, { filAriane } from '@/components/JsonLd'
import Formulaire, { FULL_FIELDS } from '@/components/Formulaire'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact et devis',
  description: 'Décrivez votre projet de site web, application mobile ou outil métier. Yann, ingénieur indépendant à Toulouse, vous répond directement.',
  alternates: { canonical: SITE_URL + '/contact' },
}
export default function Page() {
  return <main className="section-space">
    <JsonLd data={filAriane([{name:'Accueil',url:SITE_URL},{name:'Contact',url:SITE_URL+'/contact'}])} />
    <div className="container-site grid gap-12 md:grid-cols-[.85fr_1fr] md:gap-24">
      <div><p className="eyebrow">Contact</p><h1 className="title-hero mt-4">Décrivez-moi votre projet.</h1><p className="mt-6 text-xl text-[#59666E]">Ce que vous souhaitez créer, pour qui et avec quelles contraintes : quelques lignes suffisent pour commencer.</p><p className="mt-4 text-base text-[#59666E]">Nous ferons le point sur les fonctions prioritaires, les contraintes et les informations nécessaires pour établir un devis.</p><Link href="/preparer-son-projet" className="text-link mt-5 text-base">Besoin d’aide pour décrire votre projet ? →</Link><dl className="mt-10 space-y-6"><div><dt className="text-sm text-[#59666E]">E-mail</dt><dd><a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a></dd></div><div><dt className="text-sm text-[#59666E]">Téléphone</dt><dd><a href={`tel:${CONTACT_PHONE}`} className="text-link">{CONTACT_PHONE_DISPLAY}</a></dd></div><div><dt className="text-sm text-[#59666E]">Localisation</dt><dd>Toulouse, France</dd></div></dl></div>
      <section className="rounded-lg bg-[#F4F6F7] p-6 md:p-9" aria-label="Formulaire de contact"><Formulaire source="page-contact" fields={FULL_FIELDS} submitLabel="Envoyer mon message" /></section>
    </div>
  </main>
}
