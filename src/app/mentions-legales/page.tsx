import type { Metadata } from 'next'
import Link from 'next/link'
import PageLegale, { type SectionLegale } from '@/components/PageLegale'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Éditeur, coordonnées et hébergement du site lodgic-dev.com.',
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false, follow: true },
}

const sections: SectionLegale[] = [
  {
    titre: 'Éditeur du site',
    contenu: <>
      Yann Rouquie, entrepreneur individuel (EI), exerçant sous le nom Lodgic.<br />
      Adresse professionnelle : 2 impasse Pierre Maurand, 31400 Toulouse, France.<br />
      SIREN et immatriculation au RCS de Toulouse : 934 616 053. SIRET : 934 616 053 00013.<br />
      E-mail : <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a>.<br />
      Téléphone : {CONTACT_PHONE_DISPLAY}.<br />
      Directeur de la publication : Yann Rouquie.
    </>,
  },
  { titre: 'TVA', paragraphes: ['TVA non applicable, article 293 B du Code général des impôts (franchise en base de TVA).'] },
  {
    titre: 'Hébergement',
    contenu: <>Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.<br />Téléphone publié dans les mentions de Vercel pour les demandes relatives aux droits d’auteur : +1 559 288 7060.<br />Site de l’hébergeur : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-link">vercel.com</a>.</>,
  },
  {
    titre: 'Données personnelles et cookies',
    contenu: <>Le traitement des données recueillies sur le site est décrit dans la <Link href="/politique-confidentialite" className="text-link">politique de confidentialité</Link>. Les traceurs et la gestion de vos choix sont détaillés dans la <Link href="/cookies" className="text-link">politique de cookies</Link>.</>,
  },
  {
    titre: 'Propriété intellectuelle',
    paragraphes: ['Les textes et créations propres à Lodgic sont protégés par le droit de la propriété intellectuelle. Les marques, noms et captures des projets présentés restent la propriété de leurs titulaires. Toute réutilisation requiert l’autorisation du titulaire des droits concerné.'],
  },
  {
    titre: 'Contact et litiges',
    contenu: <>Pour toute question relative au site ou à une prestation, écrivez à <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a>. Les conditions de réalisation d’un projet sont précisées dans le devis et les <Link href="/conditions-generales-de-vente" className="text-link">conditions générales de vente</Link>, qui présentent aussi les démarches de réclamation et l’état de la désignation d’un médiateur.</>,
  },
]

export default function Page() {
  return <PageLegale titre="Mentions légales" miseAJour="23 septembre 2026" sections={sections} />
}
