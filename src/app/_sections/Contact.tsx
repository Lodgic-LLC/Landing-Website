import Link from 'next/link'
import Formulaire from '@/components/Formulaire'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'
import { contact, CONTACT_CTA } from '@/content/parcours'

export default function Contact({ fond = 'blanc', source = 'accueil' }: { fond?: 'blanc' | 'creme'; source?: string }) {
  return <section id="contact" className={`contact-section section-space ${fond === 'blanc' ? 'bg-white' : 'bg-[#F4F6F7]'}`} aria-labelledby="contact-title">
    <div className="container-site grid gap-10 md:grid-cols-[.85fr_1fr] md:gap-24">
      <div><p className="eyebrow">{contact.eyebrow}</p><h2 id="contact-title" className="title-section mt-4">{contact.title}</h2><p className="mt-5 max-w-md text-[#59666E]">{contact.description}</p><p className="mt-4 text-base text-[#59666E]">{contact.reassurance}</p><Link href="/contact" className="text-link mt-5" data-track="contact" data-location={source}>Ce qui se passe après mon message <span aria-hidden="true">→</span></Link><div className="mt-8 space-y-3"><a href={`mailto:${CONTACT_EMAIL}`} className="text-link" data-track="email" data-location={source}>{CONTACT_EMAIL}</a><a href={`tel:${CONTACT_PHONE}`} className="block w-fit text-[#59666E] hover:underline" data-track="telephone" data-location={source}>{CONTACT_PHONE_DISPLAY}</a></div></div>
      <Link href="/contact" className="home-mobile-contact btn-primary" data-track="contact" data-location={source}>{CONTACT_CTA} <span aria-hidden="true">↗</span></Link>
      <div className="contact-form-panel"><Formulaire source={source} submitLabel="Envoyer mon projet à Yann" /></div>
    </div>
  </section>
}
