/**
 * Contenus de la page d'accueil.
 *
 * Pour modifier un texte du site, c'est ici : seul ce qui est entre
 * guillemets change, la mise en page reste dans les composants.
 */

// —— Accueil
export const preuves = [
  "5 ans en production dans le spatial et l'aéronautique",
  "Un seul interlocuteur, du devis à la mise en ligne",
  "Réponse sous 24 heures",
];

// —— Accueil
/**
 * Images du bandeau d'accueil : une grande, trois vignettes.
 * Toutes mènent à la section « Réalisations ».
 */
export const galerieAccueil = {
  principale: {
    src: '/projets/alliance-travaux/at_accueil.jpg',
    alt: "Page d'accueil du site Alliance-TRAVAUX",
    titre: 'Alliance-TRAVAUX',
    legende: 'Collectif d’artisans, Toulouse — refonte complète',
  },
  vignettes: [
    {
      src: '/projets/alliance-travaux/at_metiers.jpg',
      alt: 'Grille des douze corps de métier du site Alliance-TRAVAUX',
      legende: '12 métiers',
    },
    {
      src: '/projets/bewasbeen/bwb_professor_dashboard.jpg',
      alt: 'Tableau de bord enseignant de la plateforme BewasBeen',
      legende: 'BewasBeen',
    },
  ],
}

// —— Services
export type NomIcone = 'web' | 'mobile' | 'logiciel'

export const services: {
  icone: NomIcone
  title: string
  price: string
  href: string
  description: string
  items: string[]
}[] = [
  {
    icone: 'web',
    title: 'Sites web',
    href: '/creation-site-internet-toulouse',
    price: 'À partir de 1 500 €',
    description:
      "Site vitrine, prise de rendez-vous, espace client. Rapide, trouvé sur Google, et que vous faites évoluer vous-même.",
    items: [
      'Conçu pour être trouvé sur Google',
      'Formulaire de contact ou de devis',
      'Vous modifiez vos textes vous-même',
    ],
  },
  {
    icone: 'mobile',
    title: 'Applications mobiles',
    href: '/developpement-application-mobile-toulouse',
    price: 'À partir de 6 000 €',
    description:
      "iOS et Android à partir d'un seul code, publiée sur les stores. Pour vos clients ou vos équipes.",
    items: [
      'Publication App Store et Google Play',
      'Notifications, mode hors-ligne, paiement',
      "Reprise ou refonte d'une application existante",
    ],
  },
  {
    icone: 'logiciel',
    title: 'Logiciels métier',
    href: '/logiciel-sur-mesure-toulouse',
    price: 'À partir de 4 000 €',
    description:
      "Planning, suivi de dossiers, devis, tableau de bord. À la place des tableurs et des ressaisies.",
    items: [
      'Remplace vos fichiers Excel partagés',
      'Connecté à vos outils actuels',
      'Accessible du bureau comme du terrain',
    ],
  },
]

// —— APropos
export const ficheIdentite = [
  { label: 'Parcours', value: '5 ans en production · spatial et aéronautique' },
  { label: 'Formation', value: 'Ingénieur diplômé en informatique' },
  { label: 'Technologies', value: 'React · Next.js · React Native · Node.js' },
  { label: 'Zone', value: 'Toulouse · à distance partout en France' },
]

// —— APropos

/** Ce que cinq ans en environnement critique laissent comme réflexes. */
export const reflexes = [
  {
    tag: 'Réflexe 01',
    title: 'Je teste avant de livrer',
    text: "Dans l'aéro, on ne découvre pas un bug en production.",
  },
  {
    tag: 'Réflexe 02',
    title: "J'écris ce que je fais",
    text: 'Un projet non documenté est perdu quand son auteur part.',
  },
  {
    tag: 'Réflexe 03',
    title: 'Je mesure au lieu de supposer',
    text: 'Chargement, erreurs, usage réel : des chiffres, pas des impressions.',
  },
]

// —— APropos
export const garanties = [
  {
    theme: 'Fiabilité',
    items: [
      'Les parcours importants sont testés automatiquement',
      'Un bug est corrigé à sa source, pas contourné',
      'Les erreurs en production me sont signalées avant que vous les voyiez',
    ],
  },
  {
    theme: 'Montée en charge',
    items: [
      'Base de données conçue pour grandir avec vous',
      'Temps de chargement mesurés, pas supposés',
      'Hébergement dimensionné à votre usage réel',
    ],
  },
  {
    theme: 'Sécurité et données',
    items: [
      "Droits d'accès vérifiés côté serveur, pas seulement à l'écran",
      'Données personnelles traitées selon le RGPD',
      'Mots de passe et clés jamais écrits dans le code',
    ],
  },
  {
    theme: 'Reprise et propriété',
    items: [
      'Code lisible et documenté pour un autre développeur',
      'Vous êtes propriétaire du code et de tous les accès',
      'Historique complet de chaque modification',
    ],
  },
]

// —— Methode
export const etapes = [
  {
    n: '01',
    title: 'Premier échange',
    duration: '30 minutes',
    text: "Vous expliquez ce que vous voulez obtenir. Je vous dis ce qui est réaliste.",
  },
  {
    n: '02',
    title: 'Cadrage écrit',
    duration: '3 à 5 jours',
    text: "Périmètre, choix techniques, planning et prix. Vous validez avant que je commence.",
  },
  {
    n: '03',
    title: 'Développement',
    duration: 'Selon le projet',
    text: "Vous testez chaque semaine sur un lien privé. Les ajustements se font au fil de l'eau.",
  },
  {
    n: '04',
    title: 'Mise en ligne',
    duration: '1 semaine',
    text: "Vous recevez les accès, la documentation et le code. Le projet vous appartient.",
  },
]

// —— Contact
export const reassurance = [
  {
    title: 'Un échange, pas un devis automatique',
    text: "Vous repartez avec un avis honnête, même si la bonne réponse n'est pas de développer.",
  },
  {
    title: 'Réponse sous 24 heures',
    text: "C'est moi qui réponds, et moi qui développerai ensuite.",
  },
  {
    title: 'Un cadrage avant de chiffrer',
    text: 'Périmètre et budget posés à l’écrit avant la première ligne de code.',
  },
]
