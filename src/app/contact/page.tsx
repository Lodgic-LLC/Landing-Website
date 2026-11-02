import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd, { filAriane } from '@/components/JsonLd'
import SuiteContact from '@/components/SuiteContact'
import Formulaire, { FULL_FIELDS } from '@/components/Formulaire'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacter Yann, développeur web et mobile à Toulouse',
  description: 'Décrivez votre projet de site web, application mobile ou logiciel métier. Yann, développeur web et mobile à Toulouse, vous répond directement.',
  alternates: { canonical: SITE_URL + '/contact' },
}
export default function Page() {
  return (
    <main className="contact-page section-space">
      <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: 'Contact', url: SITE_URL + '/contact' }])} />
      <div className="container-site contact-page-layout">
        <div className="contact-page-intro">
          <p className="eyebrow">Contact</p>
          <h1 className="title-hero mt-4">Décrivez-moi votre projet.</h1>
          <p className="mt-6 text-xl text-[#59666E]">Ce que vous souhaitez créer, pour qui et avec quelles contraintes : quelques lignes suffisent pour commencer.</p>
          <p className="mt-4 text-base text-[#59666E]">Je ferai le point avec vous sur les fonctions prioritaires, les contraintes et les informations nécessaires pour établir un devis.</p>
          <Link href="/preparer-son-projet" className="text-link mt-5 text-base">Besoin d’aide pour décrire votre projet ? →</Link>
        </div>
        <section className="contact-form-panel" aria-label="Formulaire de contact">
          <Formulaire source="page-contact" fields={FULL_FIELDS} submitLabel="Envoyer mon message" headingLevel="h2" />
        </section>
        <SuiteContact headingLevel="h2" mobileDisclosure />
        <dl className="contact-details">
          <div>
            <dt>E-mail</dt>
            <dd><a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a></dd>
          </div>
          <div>
            <dt>Téléphone</dt>
            <dd><a href={`tel:${CONTACT_PHONE}`} className="text-link">{CONTACT_PHONE_DISPLAY}</a></dd>
          </div>
          <div>
            <dt>Localisation</dt>
            <dd>Toulouse, France</dd>
          </div>
        </dl>
      </div>
    </main>
  )
}
