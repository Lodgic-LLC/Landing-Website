import type { Metadata } from 'next'
import Link from 'next/link'
import PageLegale, { type SectionLegale } from '@/components/PageLegale'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: 'Conditions générales des prestations de création de sites et d’applications réalisées par Lodgic.',
  alternates: { canonical: `${SITE_URL}/conditions-generales-de-vente` },
  robots: { index: false, follow: true },
}

const email = <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">{CONTACT_EMAIL}</a>

const sections: SectionLegale[] = [
  {
    titre: 'Prestataire et prestations',
    paragraphes: ['Yann Rouquie, entrepreneur individuel (Lodgic), réalise des prestations de conception, développement, mise en ligne et, lorsqu’elles sont prévues, maintenance de sites web, applications et logiciels. Ses coordonnées et son numéro d’entreprise figurent dans les mentions légales.'],
  },
  {
    titre: 'Proposition et formation du contrat',
    paragraphes: [
      'Les tarifs affichés sur le site sont des repères de départ. Chaque projet fait l’objet d’une proposition écrite précisant les fonctions, les livrables, le calendrier estimé, le prix total en euros et les éventuels frais récurrents ou services tiers. La TVA n’est pas applicable dans le cadre de la franchise en base actuelle.',
      'Le contrat est formé lorsque le client accepte par écrit le devis ou la proposition et que les conditions particulières convenues sont remplies. En cas de différence, les conditions particulières acceptées pour le projet priment sur les présentes conditions générales.',
    ],
  },
  {
    titre: 'Réalisation et validation',
    paragraphes: [
      'Le client fournit les contenus, informations, accès et retours nécessaires à la réalisation. Les étapes de présentation, de test et de validation sont celles indiquées dans la proposition. Tout ajout ou changement de périmètre fait l’objet d’un accord sur son prix et son délai avant réalisation.',
      'Le planning commence selon les conditions précisées au devis. Un retard dans la transmission des éléments nécessaires ou une modification demandée par le client peut conduire à réviser le calendrier par écrit.',
    ],
  },
  {
    titre: 'Prix et règlement',
    paragraphes: [
      'Le devis indique le prix total et les échéances de paiement, notamment l’éventuel acompte et le solde. Les moyens de règlement et les coordonnées utiles sont indiqués sur la facture ou le devis accepté. Aucun frais non prévu n’est ajouté sans accord du client.',
      'Les frais d’hébergement, de nom de domaine, de comptes de publication et de services externes ne sont inclus que s’ils figurent explicitement dans la proposition. Les prestations de maintenance et les évolutions futures font l’objet d’un périmètre distinct.',
    ],
  },
  {
    titre: 'Livraison et droits sur les créations',
    paragraphes: [
      'La livraison comprend les éléments expressément prévus au devis : accès, code source, documentation et mise en ligne le cas échéant. Les comptes nécessaires au projet, notamment hébergement, nom de domaine et comptes de publication sur les stores, sont ouverts au nom du client quand ces services sont prévus. Le client en conserve la titularité et les accès ; Lodgic intervient avec les droits nécessaires à la prestation.',
      'Le devis ou le contrat précise la cession des droits sur les créations réalisées pour le projet. Les composants et services tiers restent soumis à leurs propres licences et conditions. Les droits du client sur ses contenus et ses données restent inchangés.',
    ],
  },
  {
    titre: 'Garanties et suivi',
    paragraphes: [
      'Les garanties légales dont bénéficie le client restent applicables. Les vérifications prévues à la livraison sont décrites dans le devis. Les demandes de correction sont à signaler par e-mail en décrivant le comportement constaté et la manière de le reproduire.',
      'L’assistance, la surveillance et les mises à jour après livraison ne sont comprises que si elles figurent dans le devis ou dans un accord de maintenance distinct. Les modalités de contact et les délais d’intervention sont précisés dans cet accord.',
    ],
  },
  {
    titre: 'Droit de rétractation des consommateurs',
    contenu: <>
      Lorsqu’un contrat de prestation est conclu à distance ou hors établissement avec un consommateur, celui-ci dispose en principe de 14 jours calendaires à compter de la conclusion du contrat pour se rétracter sans avoir à se justifier. Il peut notifier sa décision sans ambiguïté à {email} ou à l’adresse postale des <Link href="/mentions-legales" className="text-link">mentions légales</Link>. Un <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/R878" target="_blank" rel="noopener noreferrer" className="text-link">modèle de formulaire de rétractation</a> est disponible sur Service Public ; son utilisation n’est pas obligatoire.
      <br /><br />Si le consommateur demande expressément que la prestation commence avant la fin de ce délai, un montant proportionnel au travail réalisé jusqu’à la notification de la rétractation peut être dû, dans les conditions prévues par la loi. Si la prestation est entièrement exécutée avant la fin du délai, avec l’accord préalable exprès et la reconnaissance de la perte du droit de rétractation, ce droit ne peut plus être exercé. Les droits légaux applicables aux professionnels assimilés à des consommateurs sont également respectés.
    </>,
  },
  {
    titre: 'Réclamations et médiation',
    contenu: <>Pour une réclamation, contactez d’abord {email} afin de rechercher une solution amiable. Un client consommateur peut ensuite recourir gratuitement à un médiateur de la consommation selon les conditions légales. <strong>Le médiateur n’est pas encore désigné ; ses coordonnées seront ajoutées ici dès l’adhésion effectuée.</strong></>,
  },
  {
    titre: 'Données personnelles',
    contenu: <>Les données échangées dans le cadre d’une demande ou d’un projet sont traitées selon la <Link href="/politique-confidentialite" className="text-link">politique de confidentialité</Link>. Les conditions particulières du projet précisent, si nécessaire, les rôles des parties pour les données des utilisateurs de l’application réalisée.</>,
  },
]

export default function Page() {
  return <PageLegale titre="Conditions générales de vente" miseAJour="23 septembre 2026" sections={sections} />
}
