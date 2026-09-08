/**
 * Les réalisations présentées sur le site.
 *
 * L'accueil en montre un aperçu, /realisations les détaille.
 */

export type Projet = {
  name: string;
  sector: string;
  href: string;
  url?: string;
  external: boolean;
  summary: string;
  /** Chiffres vérifiables du projet livré */
  metrics: { value: string; label: string }[];
  /** Mesure avant/après, avec sa source */
  measured?: {
    label: string;
    before: string;
    after: string;
    scores: { name: string; value: string }[];
    source: string;
  };
  /** Mot du client, une fois obtenu */
  quote?: { text: string; author: string; role: string };
  /** Briques techniques réellement construites */
  features: { title: string; text: string }[];
  /** Décision d'architecture notable */
  architecture: { title: string; text: string };
  stack: string[];
  screens: { src: string; alt: string; caption: string }[];
};

export const PROJETS: Projet[] = [
  {
    name: "Alliance-TRAVAUX",
    sector: "Rénovation & travaux · Toulouse",
    href: "https://alliance-travaux.fr",
    url: "alliance-travaux.fr",
    external: true,
    summary:
      "Refonte complète du site d'un collectif d'artisans toulousains.",
    metrics: [
      { value: "23", label: "pages générées" },
      { value: "22", label: "communes ciblées" },
      { value: "12", label: "métiers référencés" },
    ],
    measured: {
      label: "Affichage de la page d'accueil",
      before: "5,8 s",
      after: "0,7 s",
      scores: [
        { name: "Performance", value: "88" },
        { name: "Accessibilité", value: "93" },
        { name: "Bonnes pratiques", value: "96" },
        { name: "SEO", value: "100" },
      ],
      source: "Google PageSpeed Insights, 7 septembre 2026",
    },
    features: [
      {
        title: "Structure repensée pour la conversion",
        text: "12 pages métier et 4 pages service générées depuis un même schéma. Chaque parcours mène au devis.",
      },
      {
        title: "Formulaire de devis",
        text: "Accessible depuis chaque section, avec validation des champs et confirmation immédiate.",
      },
      {
        title: "Référencement local repris de zéro",
        text: "Balisage Schema.org complet sur 22 communes. Résultat : 100/100 au SEO technique.",
      },
      {
        title: "Sécurité remise à niveau",
        text: "Identifiants sortis du code, formulaire protégé, dépendances mises à jour.",
      },
    ],
    architecture: {
      title: "Divisé par huit le temps d'affichage",
      text: "5,8 secondes, c'est un visiteur sur deux qui part avant de voir la page. Chargement découpé, images compressées, superflu supprimé.",
    },
    stack: ["React", "Vite", "React Router", "Schema.org"],
    screens: [
      {
        src: "/projets/alliance-travaux/at_accueil.jpg",
        alt: "Page d'accueil du site Alliance-TRAVAUX",
        caption: "Page d'accueil : preuves et devis dès le premier écran",
      },
      {
        src: "/projets/alliance-travaux/at_metiers.jpg",
        alt: "Grille des douze corps de métier du site Alliance-TRAVAUX",
        caption: "Les 12 pages métier, générées depuis un même schéma",
      },
      {
        src: "/projets/alliance-travaux/at_page_metier.jpg",
        alt: "Page métier maçonnerie du site Alliance-TRAVAUX",
        caption: "Une page métier : titre local, sommaire, appel à l'action",
      },
      {
        src: "/projets/alliance-travaux/at_services.jpg",
        alt: "Page des formules d'accompagnement du site Alliance-TRAVAUX",
        caption: "Les formules d'accompagnement",
      },
      {
        src: "/projets/alliance-travaux/at_devis.jpg",
        alt: "Formulaire de demande de devis du site Alliance-TRAVAUX",
        caption: "Le formulaire de devis et la zone d'intervention",
      },
    ],
  },
  {
    name: "BewasBeen",
    sector: "EdTech · Apprentissage de l'anglais",
    href: "/projets/bewasbeen",
    url: "bewasbeen.com",
    external: false,
    summary:
      "Plateforme pédagogique : espace enseignant, classes et suivi individuel des élèves.",
    metrics: [
      { value: "3", label: "moteurs d'exercice" },
      { value: "2", label: "rôles applicatifs" },
      { value: "0", label: "compte élève requis" },
    ],
    features: [
      {
        title: "Trois moteurs d'exercice",
        text: "Glisser-déposer, clavier et audio. La difficulté s'ajuste aux réponses de l'élève.",
      },
      {
        title: "Espace enseignant",
        text: "Classes, listes de verbes personnalisées, suivi par élève : réussite, temps passé, historique.",
      },
      {
        title: "Exports PDF et CSV",
        text: "Rapports par classe ou par élève, pour les bulletins et les réunions parents-professeurs.",
      },
    ],
    architecture: {
      title: "Accès élève sans compte",
      text: "Un code court ou un QR code projeté au tableau suffit. Aucun identifiant créé : pas de friction en cours, pas de données de mineurs à gérer.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    screens: [
      {
        src: "/projets/bewasbeen/bwb_professor_dashboard.jpg",
        alt: "Tableau de bord enseignant de BewasBeen",
        caption: "Tableau de bord enseignant",
      },
      {
        src: "/projets/bewasbeen/bwb_play_modes.jpg",
        alt: "Choix du mode d'exercice sur BewasBeen",
        caption: "Les trois modes d'entraînement",
      },
      {
        src: "/projets/bewasbeen/bwb_create_class.jpg",
        alt: "Création d'une classe avec code d'accès sur BewasBeen",
        caption: "Création d'une classe et code d'accès",
      },
    ],
  },
];
