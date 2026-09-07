import PageSeo from '@/components/PageSeo'
import { buildSeoMetadata } from '@/lib/seo'

const PATH = '/creation-site-internet-toulouse'
const NAME = 'Création de site internet à Toulouse'
const DESCRIPTION =
  "Développeur indépendant à Toulouse : je crée votre site internet sur mesure, rapide et trouvé sur Google, à partir de 1 500 €. Vous modifiez vos textes vous-même. Livraison en 3 à 5 semaines."

export const metadata = buildSeoMetadata({
  path: PATH,
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    'création site internet Toulouse',
    'création site web Toulouse',
    'développeur web Toulouse',
    'site vitrine Toulouse',
    'refonte site internet Toulouse',
    'freelance web Toulouse',
    'prix site internet',
  ],
})

export default function Page() {
  return (
    <PageSeo
      path={PATH}
      name={NAME}
      description={DESCRIPTION}
      trackingKeyword="creation_site_internet_toulouse"
      hero={{
        eyebrow: 'Site internet · Toulouse',
        title: 'Création de site internet à Toulouse',
        highlight: 'un site qui vous apporte des clients, pas juste une adresse',
        description: (
          <>
            Un site qui explique ce que vous faites, se charge vite sur un téléphone, remonte sur Google quand on cherche
            votre métier à Toulouse, et amène les visiteurs à vous écrire ou à vous appeler. C’est ce que je construis,
            sur mesure, <strong>à partir de 1 500 €</strong>.
          </>
        ),
        badges: ['À partir de 1 500 €', '3 à 5 semaines', 'Trouvé sur Google', 'Vous modifiez vos textes', 'Toulouse et à distance'],
        visual: 'agency',
      }}
      expertise={{
        eyebrow: 'Ce que comprend un site',
        heading: (
          <>
            Un site sérieux, ce n’est pas <span className="text-[#C2542D]">un modèle rempli en une soirée</span>.
          </>
        ),
        intro:
          'Les sites à 300 € existent. Ils se ressemblent tous, ils sont lents, et Google ne les montre à personne. Voici ce que je fais différemment, et pourquoi ça change le nombre d’appels que vous recevez.',
        cards: [
          {
            num: '01',
            title: 'Pensé pour convertir',
            body: 'Votre visiteur doit comprendre en cinq secondes ce que vous faites, pour qui, et comment vous joindre. Je construis chaque page autour de cette question, pas autour d’un joli visuel.',
            bullets: ['Message clair dès le premier écran', 'Téléphone et formulaire toujours accessibles', 'Preuves visibles : réalisations, avis, garanties', 'Parcours testé sur téléphone'],
          },
          {
            num: '02',
            title: 'Trouvé sur Google à Toulouse',
            body: 'Structure des pages, textes, vitesse, données que Google lit : je construis le site pour qu’il remonte sur « votre métier + Toulouse ». Et je vous explique quoi faire de votre fiche Google.',
            bullets: ['Une page par prestation importante', 'Données structurées (Schema.org)', 'Vitesse mesurée, pas promise', 'Conseils pour votre fiche Google Business'],
          },
          {
            num: '03',
            title: 'Rapide, surtout sur téléphone',
            body: 'Plus de la moitié de vos visiteurs viennent d’un téléphone, souvent en 4G. Un site qui met quatre secondes à s’afficher a déjà perdu. Je vérifie le temps de chargement à la livraison.',
            bullets: ['Images compressées automatiquement', 'Pas de scripts inutiles', 'Score de performance vérifié à la livraison', 'Hébergement en Europe'],
          },
          {
            num: '04',
            title: 'Vous gardez la main',
            body: 'Changer un prix, ajouter une photo, publier une actualité : vous le faites vous-même, sans me payer pour chaque virgule. Je vous forme en une heure à la livraison.',
            bullets: ['Édition des textes et des images', 'Formation incluse', 'Pas d’abonnement obligatoire', 'Je reste disponible pour les gros changements'],
          },
          {
            num: '05',
            title: 'Formulaire de contact ou de devis',
            body: 'Un formulaire qui arrive dans votre boîte mail, avec les bonnes questions posées dès le départ, pour que vous rappeliez un prospect déjà qualifié.',
            bullets: ['Questions adaptées à votre métier', 'Réception par e-mail immédiate', 'Protection contre le spam', 'Consentement RGPD intégré'],
          },
          {
            num: '06',
            title: 'Refonte d’un site existant',
            body: 'Votre site date, il n’est pas lisible sur mobile, ou l’agence qui l’a fait n’existe plus ? Je le refais en gardant ce qui marche — et vos positions Google, grâce aux redirections.',
            bullets: ['Audit de l’existant', 'Redirections pour ne rien perdre sur Google', 'Reprise du nom de domaine et des e-mails', 'Migration des contenus utiles'],
          },
        ],
        closing: (
          <>
            <p>
              Un site vitrine démarre à <strong>1 500 €</strong> et se livre en <strong>3 à 5 semaines</strong>. Le prix
              dépend du nombre de pages et des fonctions (prise de rendez-vous, espace client, catalogue) : il est fixé par
              écrit après un premier échange, et il ne bouge pas ensuite.
            </p>
            <p>
              Le site d’<strong>Alliance-TRAVAUX</strong>, un collectif d’artisans toulousains, est un exemple de ce que je
              livre : 23 pages, formulaire de devis, référencement local sur 22 communes.
            </p>
          </>
        ),
        crossLinks: [
          { title: 'Logiciel sur mesure à Toulouse', href: '/logiciel-sur-mesure-toulouse', description: 'Quand il vous faut un outil de gestion, pas seulement une vitrine.' },
          { title: 'Développement d’application mobile à Toulouse', href: '/developpement-application-mobile-toulouse', description: 'Si votre projet a besoin d’une application installée sur le téléphone.' },
        ],
      }}
      faqs={[
        {
          question: 'Combien coûte un site internet ?',
          answer:
            'À partir de 1 500 € pour un site vitrine de quelques pages avec formulaire de contact. Un site avec prise de rendez-vous, espace client ou catalogue coûte plus ; je vous donne un prix ferme par écrit après un premier échange.',
        },
        {
          question: 'Combien de temps pour créer un site ?',
          answer:
            'Entre 3 et 5 semaines pour un site vitrine, à partir du moment où j’ai vos textes et vos photos. Vous voyez le site avancer sur un lien privé et vous corrigez au fur et à mesure.',
        },
        {
          question: 'Serai-je premier sur Google ?',
          answer:
            'Personne ne peut le promettre honnêtement. Ce que je garantis : un site construit selon ce que Google attend (structure, vitesse, données structurées, une page par prestation), et des conseils pour votre fiche Google Business, qui pèse beaucoup pour une recherche locale.',
        },
        {
          question: 'Pourrai-je modifier le site moi-même ?',
          answer:
            'Oui. Textes, images, actualités : vous les modifiez sans me solliciter, et je vous forme à la livraison. Pour les changements de structure ou les nouvelles fonctions, je reste disponible et je chiffre à chaque fois.',
        },
      ]}
    />
  )
}
