import type { Metadata } from 'next'
import Link from 'next/link'
import PageLegale, { type SectionLegale } from '@/components/PageLegale'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Comment vos données personnelles sont collectées, utilisées et conservées sur lodgic-dev.com, et comment exercer vos droits.',
  alternates: { canonical: `${SITE_URL}/politique-confidentialite` },
  robots: { index: false, follow: true },
}

const lienEmail = (
  <Link
    href={`mailto:${CONTACT_EMAIL}`}
    className="font-semibold text-[#B54A26] underline underline-offset-2 hover:text-[#A34322]"
  >
    {CONTACT_EMAIL}
  </Link>
)

const sections: SectionLegale[] = [
  {
    titre: '1. Collecte des données personnelles',
    paragraphes: ['Les données personnelles suivantes peuvent être collectées :'],
    liste: [
      'Nom et prénom',
      'Adresse email',
      'Numéro de téléphone',
      "Informations relatives à votre entreprise",
      'Données de connexion et de navigation sur le site',
    ],
    contenu: (
      <>
        Elles sont collectées lorsque vous remplissez le formulaire de contact, m&apos;écrivez
        directement, ou naviguez sur le site (via les cookies, après votre accord).
      </>
    ),
  },
  {
    titre: '2. Utilisation des données',
    paragraphes: ['Les données collectées servent à :'],
    liste: [
      'Répondre à vos demandes de contact ou d’information',
      'Établir un devis et assurer le suivi de votre projet',
      'Améliorer le site et mesurer son audience',
    ],
  },
  {
    titre: '3. Base légale du traitement',
    paragraphes: ['Le traitement de vos données repose sur :'],
    liste: [
      'Votre consentement, pour les cookies de mesure d’audience',
      'L’exécution d’un contrat ou de mesures précontractuelles, pour un devis ou un projet',
      'Mon intérêt légitime à répondre à vos demandes',
      'Le respect de mes obligations légales et comptables',
    ],
  },
  {
    titre: '4. Destinataires des données',
    paragraphes: [
      "Vos données ne sont traitées que par moi-même. Elles peuvent transiter par mes prestataires techniques — hébergement, envoi des formulaires, mesure d'audience — qui agissent selon mes instructions.",
      'Vos données ne sont ni vendues, ni louées, ni cédées à des tiers.',
    ],
  },
  {
    titre: '5. Durée de conservation',
    paragraphes: [
      "Les données sont conservées le temps nécessaire au traitement de votre demande, puis pendant la durée légale applicable — trois ans après le dernier contact pour une demande commerciale, dix ans pour les documents comptables.",
    ],
  },
  {
    titre: '6. Vos droits',
    paragraphes: [
      'Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :',
    ],
    liste: [
      'Droit d’accès à vos données',
      'Droit de rectification',
      'Droit à l’effacement (droit à l’oubli)',
      'Droit à la limitation du traitement',
      'Droit d’opposition',
      'Droit à la portabilité de vos données',
      'Droit de retirer votre consentement à tout moment',
      'Droit d’introduire une réclamation auprès de la CNIL',
    ],
    contenu: <>Pour exercer ces droits, écrivez-moi à {lienEmail}.</>,
  },
  {
    titre: '7. Cookies',
    paragraphes: [
      "Le site dépose des cookies de mesure d'audience uniquement après votre accord, demandé lors de votre première visite. Vous pouvez modifier ce choix à tout moment depuis le lien « Gérer les cookies » en bas de chaque page, ou depuis les réglages de votre navigateur.",
      "Les cookies strictement nécessaires au fonctionnement du site ne requièrent pas de consentement.",
    ],
  },
  {
    titre: '8. Modifications',
    paragraphes: [
      'Cette politique peut être modifiée à tout moment. Les changements prennent effet dès leur publication sur cette page.',
    ],
  },
  {
    titre: '9. Contact',
    contenu: <>Pour toute question relative à cette politique, écrivez-moi à {lienEmail}.</>,
  },
]

export default function Page() {
  return (
    <PageLegale
      titre="Politique de confidentialité"
      miseAJour="7 septembre 2026"
      sections={sections}
    />
  )
}
