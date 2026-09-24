import type { Metadata } from 'next'
import Link from 'next/link'
import PageLegale, { type SectionLegale } from '@/components/PageLegale'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: 'Traceurs utilisés sur lodgic-dev.com, finalités et gestion de vos choix.',
  alternates: { canonical: `${SITE_URL}/cookies` },
  robots: { index: false, follow: true },
}

const sections: SectionLegale[] = [
  {
    titre: 'Votre choix',
    paragraphes: [
      'Le site enregistre votre choix de cookies. La mesure d’audience et les traceurs publicitaires sont désactivés tant que vous ne les avez pas acceptés. Le refus n’empêche pas la consultation du site ni l’envoi d’un message.',
      'Le bandeau propose « Tout accepter », « Tout refuser » et « Personnaliser ». Les préférences permettent de choisir séparément la mesure d’audience et le marketing. Vous pouvez revenir sur votre choix à tout moment avec « Gérer les cookies » en bas de chaque page.',
    ],
  },
  {
    titre: 'Cookies nécessaires',
    paragraphes: ['Le traceur de choix du bandeau mémorise votre acceptation, votre refus et les catégories sélectionnées. Il sert à respecter ce choix lors des visites suivantes. Son usage ne dépend pas d’un accord préalable ; sa durée maximale est de six mois.'],
  },
  {
    titre: 'Mesure d’audience',
    paragraphes: [
      'Si vous acceptez cette catégorie, le site charge Google Analytics, Ahrefs Analytics et Vercel Analytics. Google Analytics peut notamment déposer des cookies dont le nom commence par « _ga » ou correspond à « _gid », « _gat » ou « _gac ». Ces outils peuvent aussi traiter des données de visite sans déposer de cookie.',
      'Ces mesures servent à connaître la fréquentation du site et l’usage de ses pages. Les durées des identifiants et des données dépendent des réglages des services concernés. Retirer votre choix empêche le chargement de nouveaux outils et efface les cookies connus configurés dans le gestionnaire, dans la mesure permise par le navigateur.',
    ],
  },
  {
    titre: 'Marketing',
    paragraphes: ['Si vous acceptez cette catégorie, Google Ads peut mesurer les demandes liées aux annonces. Des traceurs tels que « _gcl » ou « IDE » peuvent être associés à cette finalité. Aucun suivi publicitaire n’est chargé par le site avant cet accord.'],
  },
  {
    titre: 'En savoir plus',
    contenu: <>La <Link href="/politique-confidentialite" className="text-link">politique de confidentialité</Link> explique les données susceptibles d’être traitées, leurs destinataires et vos droits. Pour nous contacter, consultez les <Link href="/mentions-legales" className="text-link">mentions légales</Link>.</>,
  },
]

export default function Page() {
  return <PageLegale titre="Politique de cookies" miseAJour="23 septembre 2026" sections={sections} />
}
