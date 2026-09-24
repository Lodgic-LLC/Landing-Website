import type { Metadata } from 'next'
import Link from 'next/link'
import PageLegale, { type SectionLegale } from '@/components/PageLegale'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Quelles données Lodgic reçoit depuis son site, pourquoi et comment exercer vos droits.',
  alternates: { canonical: `${SITE_URL}/politique-confidentialite` },
  robots: { index: false, follow: true },
}

const email = <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a>

const sections: SectionLegale[] = [
  {
    titre: 'Responsable du traitement',
    contenu: <>Yann Rouquie, entrepreneur individuel (Lodgic), 2 impasse Pierre Maurand, 31400 Toulouse. Contact : {email}. Les autres coordonnées figurent dans les <Link href="/mentions-legales" className="text-link">mentions légales</Link>.</>,
  },
  {
    titre: 'Demandes de contact et de devis',
    paragraphes: [
      'Lorsque vous utilisez le formulaire, les champs marqués d’un astérisque sont nécessaires pour traiter votre demande : selon le formulaire, votre nom, votre adresse e-mail et votre message. Le téléphone et le sujet sont facultatifs lorsqu’ils sont proposés. Vous pouvez aussi me contacter directement.',
      'Ces informations servent à répondre à votre message, étudier votre projet et, si vous le demandez, préparer un devis. Sans les informations nécessaires, je ne peux pas répondre ou établir ce devis. Le fondement du traitement est la prise de mesures précontractuelles à votre demande et, pour les autres échanges, mon intérêt légitime à répondre aux sollicitations reçues.',
      'Le formulaire comporte un champ technique masqué destiné à limiter les messages automatisés. Aucun compte utilisateur n’est créé sur ce site.',
    ],
  },
  {
    titre: 'Destinataires et prestataires',
    paragraphes: [
      'J’accède aux demandes reçues. Vercel héberge le site ; l’envoi du formulaire passe par FormSubmit et la messagerie utilisée pour recevoir et répondre aux messages. Ces prestataires traitent les informations nécessaires à leurs services. Les données ne sont pas vendues.',
      'Les services de mesure d’audience et de publicité indiqués ci-dessous ne sont chargés que selon vos choix de cookies. Ils peuvent recevoir des données de navigation et des événements tels qu’une visite de page ou l’envoi du formulaire. Le contenu de votre message n’est pas envoyé dans ces événements par le code du site.',
    ],
  },
  {
    titre: 'Mesure d’audience et publicité',
    paragraphes: [
      'Après votre accord pour la mesure d’audience, le site peut charger Google Analytics, Ahrefs Analytics et Vercel Analytics. Ces outils servent à connaître la fréquentation et l’usage des pages. Après votre accord pour le marketing, Google Ads peut mesurer les demandes liées aux annonces.',
      'Vous pouvez refuser ces finalités séparément, puis modifier ou retirer votre choix depuis « Gérer les cookies » dans le pied de page. La politique de cookies détaille les catégories et les traceurs connus.',
    ],
  },
  {
    titre: 'Durées de conservation',
    paragraphes: [
      'Les messages liés à une demande sans suite sont conservés pour le suivi des échanges, au maximum trois ans après le dernier contact, puis supprimés ou archivés lorsque la loi le justifie. Si un contrat est conclu, les documents et échanges nécessaires à son exécution et aux obligations comptables suivent les durées légales applicables.',
      'Les durées propres aux outils d’audience dépendent de leurs réglages. Le choix exprimé dans le bandeau de cookies est conservé au plus six mois sur votre appareil ; vous pouvez le modifier avant cette échéance.',
    ],
  },
  {
    titre: 'Transferts hors de l’Espace économique européen',
    paragraphes: ['Vercel est établi aux États-Unis. Les autres prestataires peuvent également traiter des données depuis ce pays ou d’autres pays hors de l’Espace économique européen. Le détail des lieux et des garanties dépend des services et des options effectivement utilisés.'],
  },
  {
    titre: 'Vos droits',
    contenu: <>Vous pouvez demander l’accès à vos données, leur rectification, leur effacement ou la limitation de leur traitement, et vous opposer à un traitement fondé sur l’intérêt légitime. La portabilité s’applique dans les cas prévus par la réglementation. Vous pouvez retirer à tout moment le consentement donné pour les traceurs. Pour exercer vos droits, écrivez à {email}. Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-link">CNIL</a>.</>,
  },
  {
    titre: 'Mise à jour',
    contenu: <>Cette page décrit les traitements liés au site dans sa version actuelle. Elle sera actualisée si les formulaires ou les outils utilisés changent. Consultez également la <Link href="/cookies" className="text-link">politique de cookies</Link>.</>,
  },
]

export default function Page() {
  return <PageLegale titre="Politique de confidentialité" miseAJour="23 septembre 2026" sections={sections} />
}
