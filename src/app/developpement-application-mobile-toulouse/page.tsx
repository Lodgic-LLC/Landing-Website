import SeoLandingPage from '@/components/pages/seo-landing/SeoLandingPage'
import { buildSeoMetadata } from '@/lib/seo'

const PATH = '/developpement-application-mobile-toulouse'
const NAME = "Développement d'application mobile à Toulouse"
const DESCRIPTION =
  "Développeur indépendant à Toulouse, ingénieur en informatique : je conçois et développe votre application iPhone et Android, de l'idée à la publication sur les stores. À partir de 6 000 €, prix fixé par écrit avant de commencer."

export const metadata = buildSeoMetadata({
  path: PATH,
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    'développement application mobile Toulouse',
    'développeur application mobile Toulouse',
    'création application mobile Toulouse',
    'application iOS Android Toulouse',
    'développeur mobile freelance Toulouse',
    'prix application mobile',
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      path={PATH}
      name={NAME}
      description={DESCRIPTION}
      trackingKeyword="developpement_application_mobile_toulouse"
      hero={{
        eyebrow: 'Application mobile · Toulouse',
        title: "Développement d'application mobile à Toulouse",
        highlight: "de l'idée à l'application publiée",
        description: (
          <>
            Vous avez une idée d’application, ou un besoin terrain que vos équipes règlent aujourd’hui avec des
            messages et des photos. Je la conçois et je la développe pour <strong>iPhone et Android</strong>, puis je
            la publie sur les stores. Un seul interlocuteur, un prix fixé à l’avance.
          </>
        ),
        badges: ['iPhone et Android', 'À partir de 6 000 €', '2 à 4 mois', 'Publication sur les stores', 'Toulouse et à distance'],
        visual: 'devices',
      }}
      expertise={{
        eyebrow: 'Ce que comprend le développement',
        heading: (
          <>
            Une application mobile, c’est <span className="text-[#C2542D]">six chantiers</span>. Je les prends tous.
          </>
        ),
        intro:
          "Beaucoup de projets d’application s’arrêtent parce qu’on n’avait budgété que l’écran. Voici ce qu’il faut réellement pour qu’une app fonctionne, soit acceptée par les stores et reste utilisable dans deux ans.",
        cards: [
          {
            num: '01',
            title: 'Cadrage et maquettes',
            body: 'On liste ce que l’application doit faire, par ordre d’importance. Je dessine les écrans principaux avant de coder : vous voyez le parcours et vous corrigez tant que c’est gratuit de le faire.',
            bullets: ['Périmètre écrit et validé ensemble', 'Maquettes des écrans clés', 'Estimation ferme et planning', 'Ce qu’on garde pour une version 2'],
          },
          {
            num: '02',
            title: 'Développement iPhone et Android',
            body: 'Je développe en React Native : un seul code pour les deux plateformes, donc un coût et un délai presque divisés par deux, sans application au rabais. Les deux versions évoluent en même temps.',
            bullets: ['Un code, deux plateformes', 'Interface adaptée à chaque système', 'Fonctionne quand le réseau manque', 'Notifications, appareil photo, GPS'],
          },
          {
            num: '03',
            title: 'Serveur et données',
            body: 'Une application, c’est aussi un serveur qui stocke les comptes, les données et les fichiers. Je le construis et je l’héberge en Europe, avec des sauvegardes automatiques.',
            bullets: ['Comptes utilisateurs et droits d’accès', 'Base de données PostgreSQL', 'Hébergement en Europe, conforme RGPD', 'Sauvegardes quotidiennes'],
          },
          {
            num: '04',
            title: 'Publication sur les stores',
            body: 'Créer les comptes développeur Apple et Google, préparer la fiche, passer la validation d’Apple : je m’en occupe, et je vous explique ce que vous devrez garder à jour ensuite.',
            bullets: ['Comptes App Store et Google Play à votre nom', 'Fiche, captures et description', 'Validation Apple et corrections éventuelles', 'Mises à jour publiées pour vous'],
          },
          {
            num: '05',
            title: 'Tests sur de vrais téléphones',
            body: 'Une app qui marche sur un simulateur n’est pas une app qui marche. Je teste sur des appareils réels, anciens et récents, et vous testez chaque semaine sur votre propre téléphone.',
            bullets: ['Version test installable chaque semaine', 'iPhone et Android, anciens modèles inclus', 'Parcours critiques testés automatiquement', 'Suivi des plantages après publication'],
          },
          {
            num: '06',
            title: 'Reprise d’une application existante',
            body: 'Votre app existe déjà mais plus personne ne sait la maintenir ? Je l’audite, je vous dis ce qui est récupérable, et je la reprends ou je la refais — en vous disant lequel coûte le moins cher.',
            bullets: ['Audit du code et des dépendances', 'Remise à niveau iOS et Android', 'Reprise ou refonte, chiffrées toutes les deux', 'Passation documentée'],
          },
        ],
        closing: (
          <>
            <p>
              Une application mobile simple démarre à <strong>6 000 €</strong> et se livre en <strong>2 à 4 mois</strong>.
              Le montant exact est fixé par écrit après le cadrage, avant la première ligne de code — il ne bouge pas en
              cours de route, sauf si vous changez le périmètre.
            </p>
            <p>
              Je suis basé à Toulouse : on peut se voir pour le cadrage, puis tout se passe en visio et sur un lien de test
              que vous ouvrez sur votre téléphone. Je travaille aussi entièrement à distance pour des clients ailleurs en
              France.
            </p>
          </>
        ),
        crossLinks: [
          { title: 'Développeur React Native à Toulouse', href: '/developpeur-react-native-toulouse', description: 'Pourquoi un seul code pour iPhone et Android, et quand je le déconseille.' },
          { title: 'Application iOS et Android', href: '/developpement-application-ios-android', description: 'Tout ce qu’il faut pour être publié sur l’App Store et Google Play, et y rester.' },
          { title: 'Logiciel sur mesure à Toulouse', href: '/logiciel-sur-mesure-toulouse', description: 'Quand le besoin est un outil de gestion plutôt qu’une application grand public.' },
        ],
      }}
      faqs={[
        {
          question: 'Combien coûte une application mobile ?',
          answer:
            'À partir de 6 000 € pour une application simple, iPhone et Android compris. Le prix dépend du nombre d’écrans, des fonctions (paiement, notifications, hors-ligne) et du serveur nécessaire. Il est fixé par écrit après le cadrage et ne change pas ensuite.',
        },
        {
          question: 'Combien de temps faut-il pour développer une application ?',
          answer:
            'Entre 2 et 4 mois pour la plupart des projets, cadrage et publication compris. Vous testez une version chaque semaine, donc vous voyez l’avancement concret dès les premières semaines.',
        },
        {
          question: 'Faut-il payer une version iPhone et une version Android ?',
          answer:
            'Non. Je développe un seul code qui produit les deux applications. Vous payez un projet, vous obtenez les deux versions, et les mises à jour sortent en même temps des deux côtés.',
        },
        {
          question: 'À qui appartient l’application à la fin ?',
          answer:
            'À vous. Les comptes développeur Apple et Google sont ouverts au nom de votre entreprise, le code vous est remis avec sa documentation, et un autre développeur peut le reprendre.',
        },
      ]}
    />
  )
}
