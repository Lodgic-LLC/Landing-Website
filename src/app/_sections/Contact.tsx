import Link from 'next/link'
import Formulaire from '@/components/Formulaire'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '@/lib/site'

export default function Contact({ fond = 'blanc' }: { fond?: 'blanc' | 'creme' }) {
  return <section id="contact" className={`section-space ${fond === 'blanc' ? 'bg-white' : 'bg-[#F4F6F7]'}`} aria-labelledby="contact-title">
    <div className="container-site grid gap-10 md:grid-cols-[.85fr_1fr] md:gap-24">
      <div><p className="eyebrow">Contact</p><h2 id="contact-title" className="title-section mt-4">Décrivez-moi votre projet en quelques lignes.</h2><p className="mt-5 max-w-md text-[#59666E]">Dites-moi ce qui doit fonctionner, pour qui et ce qui existe déjà.</p><p className="mt-4 text-base text-[#59666E]">Je ferai le point avec vous sur les fonctions prioritaires, les contraintes et les informations nécessaires pour établir un devis.</p><Link href="/preparer-son-projet" className="text-link mt-5 text-base">Besoin d’aide pour décrire votre projet ? →</Link><div className="mt-8 space-y-3"><a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a><a href={`tel:${CONTACT_PHONE}`} className="block w-fit text-[#59666E] hover:underline">{CONTACT_PHONE_DISPLAY}</a></div></div>
      <Formulaire source="accueil" submitLabel="Envoyer mon message" />
    </div>
  </section>
}
