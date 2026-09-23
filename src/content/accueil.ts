/**
 * Contenus de la page d'accueil.
 *
 * Pour modifier un texte du site, c'est ici : seul ce qui est entre
 * guillemets change, la mise en page reste dans les composants.
 */

/** Ce sur quoi je m'engage, affiché sous l'accroche. */
export const engagements = [
  'Prix transparent avant de commencer',
  'Conseils et optimisation de l’architecture',
  'Présentation régulière de l’avancée des développements',
  'Vous êtes propriétaire : le code et les accès vous appartiennent',
]

/**
 * Images du bandeau d'accueil : une grande, deux vignettes.
 */
export const galerieAccueil = {
  /** Libellé affiché au-dessus de la galerie. */
  intitule: 'Dernier projet livré',
  /** Page de l'étude de cas. */
  href: '/projets/alliance-travaux',
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
      legende: '12 pages métier',
    },
    {
      src: '/projets/alliance-travaux/at_page_metier.jpg',
      alt: 'Page métier maçonnerie du site Alliance-TRAVAUX',
      legende: 'Page métier',
    },
  ],
}

export type NomIcone = 'web' | 'mobile' | 'logiciel'

export const services: {
  icone: NomIcone
  title: string
  href: string
  /** Le délai habituel, affiché en étiquette. */
  delai: string
  /** Une phrase : à qui ça sert. */
  description: string
  /** Trois points courts. */
  items: string[]
  /** Texte du bouton, propre à la catégorie. */
  cta: string
}[] = [
  {
    icone: 'web',
    title: 'Sites web',
    href: '/creation-site-internet-toulouse',
    delai: '3 à 5 semaines',
    description: 'Pour être trouvé sur Google et transformer un visiteur en client.',
    items: ['Site vitrine ou catalogue', 'Formulaire de contact ou de devis', 'Vous modifiez vos textes'],
    cta: 'Créer mon site',
  },
  {
    icone: 'mobile',
    title: 'Applications mobiles',
    href: '/developpement-application-mobile-toulouse',
    delai: '2 à 4 mois',
    description: 'Pour vos clients ou vos équipes, sur iPhone et Android.',
    items: ['Publiée sur les stores', 'Notifications et paiement', 'Reprise de l’existant'],
    cta: 'Lancer mon application',
  },
  {
    icone: 'logiciel',
    title: 'Logiciels métier',
    href: '/logiciel-sur-mesure-toulouse',
    delai: 'Selon le projet',
    description: 'Pour remplacer les tableurs partagés et les ressaisies.',
    items: ['Planning et suivi de dossiers', 'Connecté à vos outils', 'Du bureau comme du terrain'],
    cta: 'Étudier mon besoin',
  },
]

/** Deux phrases de présentation, affichées sous le titre. */
export const presentation = [
  'Cinq ans à développer des logiciels en production dans le spatial et l’aéronautique, des secteurs où rien ne se livre « à peu près ».',
  'Je travaille seul : la personne qui cadre votre projet est celle qui écrit le code, et qui sera encore là dans six mois.',
]

/** Quatre faits, affichés sur une ligne. */
export const ficheIdentite = [
  { label: 'Parcours', value: '5 ans en production, spatial et aéronautique' },
  { label: 'Formation', value: 'Ingénieur diplômé en informatique' },
  { label: 'Technologies', value: 'React · Next.js · React Native · Node.js' },
  { label: 'Zone', value: 'Toulouse, et à distance partout en France' },
]

/** Ce que vous obtenez quel que soit le projet : une garantie par thème. */
export const garanties = [
  { theme: 'Fiabilité', text: 'Les parcours importants sont testés automatiquement avant chaque livraison.' },
  { theme: 'Montée en charge', text: 'Base de données et hébergement dimensionnés pour grandir avec vous.' },
  { theme: 'Sécurité', text: 'Droits vérifiés côté serveur, données personnelles traitées selon le RGPD.' },
  { theme: 'Propriété', text: 'Le code, la documentation et tous les accès vous appartiennent.' },
]

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
