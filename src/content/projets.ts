/**
 * Les réalisations présentées sur le site.
 *
 * L'accueil en montre un aperçu, /realisations les détaille.
 */

export type Projet = {
  name: string;
  sector: string;
  /** Page du site à ouvrir depuis les cartes (étude de cas ou site externe) */
  href: string;
  /** Domaine affiché dans la barre du navigateur simulé */
  url?: string;
  /** Adresse publique du site livré */
  siteUrl?: string;
  external: boolean;
  summary: string;
  /** Délai de livraison, quand il vaut la peine d'être dit */
  duration?: { value: string; label: string };
  /** Phrase courte sous les scores de la carte d'accueil */
  mention?: string;
  /** Vues sur téléphone, présentées dans des cadres */
  mobileScreens?: { src: string; alt: string; caption: string }[];
  /** Le besoin du client et la prestation livrée, en points courts, pour la page dédiée */
  etude?: { besoin: string[]; prestation: string[] };
  /** Trois chiffres clés, affichés sur la carte de l'accueil */
  metrics: { value: string; label: string }[];
  /** Chiffres détaillés de l'étude de cas ; à défaut, les chiffres clés sont repris */
  detailMetrics?: { value: string; label: string }[];
  /** Mesure avant/après, avec sa source */
  measured?: {
    label: string;
    before: string;
    after: string;
    /** Scores Lighthouse, sur 100 sauf mention */
    scores: { name: string; value: string; couleur?: 'vert' | 'orange' | 'rouge' }[];
    /** Métriques de chargement (Core Web Vitals) */
    vitals?: { name: string; value: string }[];
    /** Adresse publique de la mesure, pour que chacun puisse la vérifier */
    sourceUrl: string;
  };
  /** Mot du client, une fois obtenu */
  quote?: { text: string; author: string; role: string };
  /** Briques techniques réellement construites */
  features: { title: string; text: string }[];
  /** Ce que le développement a changé, chiffre en tête */
  resultats: { value: string; title: string; text: string }[];
  stack: string[];
  screens: { src: string; alt: string; caption: string }[];
};

export const PROJETS: Projet[] = [
  {
    name: "Alliance-TRAVAUX",
    sector: "Rénovation & travaux · Toulouse",
    href: "/projets/alliance-travaux",
    url: "alliance-travaux.fr",
    siteUrl: "https://alliance-travaux.fr",
    external: false,
    summary:
      "Refonte complète du site d'un collectif d'artisans toulousains, livrée en deux semaines.",
    duration: { value: "2 semaines", label: "de la commande à la mise en ligne" },
    mention: "Optimisé pour la navigation agentique",
    mobileScreens: [
      { src: "/projets/alliance-travaux/at_mobile_accueil.jpg", alt: "Page d'accueil d'Alliance-TRAVAUX sur téléphone", caption: "Accueil" },
      { src: "/projets/alliance-travaux/at_mobile_metiers.jpg", alt: "Grille des corps de métier sur téléphone", caption: "Les métiers" },
      { src: "/projets/alliance-travaux/at_mobile_page_metier.jpg", alt: "Page métier maçonnerie sur téléphone", caption: "Une page métier" },
      { src: "/projets/alliance-travaux/at_mobile_devis.jpg", alt: "Formulaire de devis sur téléphone", caption: "Le devis" },
    ],
    etude: {
      besoin: [
        "5,8 secondes pour afficher la page d'accueil",
        "Ni les métiers ni les communes d'intervention mis en avant",
        "Peu lisible sur téléphone, d'où viennent 80 % des visites",
        "Trop peu de demandes de devis",
      ],
      prestation: [
        "Refonte complète, livrée en deux semaines",
        "Une page par métier, référencement local sur 16 communes",
        "Formulaire de devis accessible depuis chaque écran",
        "Construit pour le téléphone d'abord, mesuré à la livraison",
      ],
    },
    metrics: [
      { value: "0,7 s", label: "affichage de l'accueil" },
      { value: "100", label: "score SEO Google" },
      { value: "3/3", label: "navigation agentique" },
    ],
    detailMetrics: [
      { value: "31", label: "pages en ligne" },
      { value: "16", label: "communes ciblées" },
      { value: "12", label: "pages métier" },
      { value: "0", label: "vulnérabilité connue" },
    ],
    measured: {
      label: "Affichage de la page d'accueil",
      before: "5,8 s",
      after: "0,7 s",
      scores: [
        { name: "Performance mobile", value: "88", couleur: "vert" },
        { name: "Performance ordinateur", value: "98" },
        { name: "Accessibilité", value: "96" },
        { name: "Bonnes pratiques", value: "100" },
        { name: "SEO", value: "100" },
        { name: "Navigation agentique", value: "3/3" },
      ],
      vitals: [
        { name: "Premier affichage", value: "0,7 s" },
        { name: "Plus grand élément affiché", value: "0,7 s" },
        { name: "Blocage du fil principal", value: "0 ms" },
        { name: "Décalage de mise en page", value: "0,002" },
        { name: "Indice de vitesse", value: "1,4 s" },
      ],
      sourceUrl: "https://pagespeed.web.dev/analysis/https-alliance-travaux-fr/2a096bnzjq?hl=fr&form_factor=desktop",
    },
    features: [
      {
        title: "Structure repensée pour la conversion",
        text: "12 pages métier et 3 pages service générées depuis un même schéma. Chaque parcours mène au devis.",
      },
      {
        title: "Formulaire de devis",
        text: "Accessible depuis chaque section, avec validation des champs et confirmation immédiate.",
      },
      {
        title: "Référencement local repris de zéro",
        text: "Balisage Schema.org complet sur 16 communes de l'agglomération. Résultat : 100/100 au SEO technique.",
      },
      {
        title: "Pensé pour le téléphone d'abord",
        text: "80 % des visites viennent d'un téléphone. Chaque page a été construite et mesurée sur mobile : 88/100 en performance, affichage sous la seconde en 4G, boutons d'appel et de devis accessibles au pouce.",
      },
      {
        title: "Lisible par les assistants IA",
        text: "3/3 aux contrôles Lighthouse de navigation agentique : un assistant comme ChatGPT ou Gemini peut parcourir le site, comprendre chaque métier et chaque commune, et mener un visiteur jusqu'au formulaire de devis. Quand on demande un artisan à Toulouse à une IA, le site peut être lu et cité.",
      },
      {
        title: "Sécurité remise à niveau",
        text: "Identifiants sortis du code, formulaire protégé, dépendances mises à jour : 0 vulnérabilité connue à l'audit des dépendances.",
      },
    ],
    resultats: [
      {
        value: "0,7 s",
        title: "Temps d'affichage divisé par huit",
        text: "À 5,8 s, un visiteur sur deux partait avant de voir la page. Elle s'affiche maintenant en moins d'une seconde.",
      },
      {
        value: "3/3",
        title: "Navigation agentique",
        text: "Les assistants IA lisent le site, le citent et peuvent guider un client jusqu'au formulaire de devis.",
      },
      {
        value: "80 %",
        title: "Mobile pensé pour convertir",
        text: "Huit visites sur dix viennent d'un téléphone : appel et devis restent à portée de pouce sur chaque page.",
      },
      {
        value: "100",
        title: "Référencement optimisé",
        text: "Une page par métier et 16 communes balisées : le collectif remonte sur les recherches « métier + commune ».",
      },
    ],
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
    siteUrl: "https://bewasbeen.com",
    external: false,
    summary:
      "Plateforme pédagogique : espace enseignant, classes et suivi individuel des élèves.",
    metrics: [
      { value: "+200", label: "classes créées" },
      { value: "+2 000", label: "exercices réalisés" },
      { value: "3", label: "modes d'entraînement" },
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
    resultats: [
      {
        value: "0",
        title: "Compte élève requis",
        text: "Un code court ou un QR code projeté au tableau suffit. Aucun identifiant créé : pas de friction en cours, pas de données de mineurs à gérer.",
      },
    ],
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
