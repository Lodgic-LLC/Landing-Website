export type ProjectMockupKind = 'browser' | 'phone'

export type ProjectMockupVariant =
  | 'hr-dashboard'
  | 'hr-leaves'
  | 'hr-expenses'
  | 'hr-mobile'
  | 'shop-storefront'
  | 'shop-product'
  | 'shop-checkout'
  | 'shop-mobile'

export interface ProjectMockup {
  kind: ProjectMockupKind
  /** Image réelle (prioritaire si fournie) */
  src?: string
  /** Variant CSS rendu si pas d'image */
  variant?: ProjectMockupVariant
  alt: string
  caption: string
}

export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  gradient: string
  cover: {
    src?: string
    variant?: ProjectMockupVariant
    alt: string
  }
  client: {
    profile: string
    context: string
  }
  needs: string[]
  solutions: string[]
  results: string[]
  metrics: ProjectMetric[]
  stack: string[]
  mockups: ProjectMockup[]
  duration: string
  year: string
}

export const projects: Project[] = [
  {
    slug: 'houseguard-gestion-locative',
    name: 'HouseGuard — Gestion locative simplifiée',
    category: 'Application mobile',
    tagline:
      'Une application mobile pour connecter propriétaires et locataires autour de la gestion des biens.',
    description:
      'App iOS & Android qui centralise les biens, les signalements d’incidents et les paiements entre bailleurs et locataires.',
    gradient: 'from-indigo-500 via-indigo-400 to-violet-400',
    cover: {
      src: '/images/house-proprietaire.png',
      alt: 'Écran d’accueil propriétaire HouseGuard',
    },
    client: {
      profile: 'Bailleurs indépendants & petits gestionnaires immobiliers',
      context:
        'La gestion locative quotidienne se faisait par SMS, appels et mails. Les propriétaires n’avaient aucune visibilité centralisée sur leurs biens et les locataires galéraient pour signaler un incident ou retrouver leurs documents.',
    },
    needs: [
      'Un seul endroit pour suivre les biens, les locataires et les signalements',
      'Permettre aux locataires de signaler un incident en quelques secondes',
      'Centraliser les paiements de loyer et les documents associés',
      'Des notifications temps réel pour ne rien manquer côté bailleur',
    ],
    solutions: [
      'Application mobile native (React Native) avec deux espaces dédiés : propriétaire et locataire',
      'Flux de signalement d’incident avec photo, priorité et fil de discussion',
      'Dashboard propriétaire : revenus, biens, locataires, alertes en un coup d’œil',
      'Notifications push segmentées + gestion des documents (quittances, baux)',
    ],
    results: [
      'Signalement d’un incident ramené à moins de 30 secondes',
      'Revenus locatifs suivis automatiquement, plus de tableaux Excel manuels',
      'Propriétaires alertés en temps réel dès qu’un problème est signalé',
    ],
    metrics: [
      { value: '-70 %', label: 'Temps de gestion' },
      { value: '< 30 s', label: 'Pour signaler un incident' },
      { value: '4.8/5', label: 'Retours utilisateurs' },
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Stripe', 'Node.js'],
    mockups: [
      {
        kind: 'phone',
        src: '/images/house-proprietaire.png',
        alt: 'Tableau de bord propriétaire HouseGuard avec total des loyers et signalements',
        caption: 'Dashboard propriétaire',
      },
      {
        kind: 'phone',
        src: '/images/house-locataire.png',
        alt: 'Accueil locataire HouseGuard',
        caption: 'Espace locataire',
      },
      {
        kind: 'phone',
        src: '/images/house-problem-locataire.png',
        alt: 'Écran de signalement d’incident HouseGuard',
        caption: 'Signaler un incident',
      },
      {
        kind: 'phone',
        src: '/images/house-biens.png',
        alt: 'Liste des biens immobiliers HouseGuard',
        caption: 'Liste des biens',
      },
      {
        kind: 'phone',
        src: '/images/house-notif-proprietaire.png',
        alt: 'Notifications propriétaire HouseGuard',
        caption: 'Notifications propriétaire',
      },
      {
        kind: 'phone',
        src: '/images/house-parametres.png',
        alt: 'Paramètres de l’application HouseGuard',
        caption: 'Paramètres & profil',
      },
    ],
    duration: '10 semaines',
    year: '2024',
  },
  {
    slug: 'application-gestion-rh',
    name: 'Application de gestion RH',
    category: 'SaaS interne',
    tagline:
      'Centraliser les demandes RH (congés, notes de frais, onboarding) dans une seule interface claire.',
    description:
      'Plateforme SaaS sur mesure pour automatiser les processus RH d’une PME : congés, notes de frais, documents et reporting.',
    gradient: 'from-indigo-600 via-blue-500 to-sky-500',
    cover: {
      variant: 'hr-dashboard',
      alt: 'Dashboard RH avec indicateurs de congés et demandes en attente',
    },
    client: {
      profile: 'PME de services B2B · 180 collaborateurs',
      context:
        'Les processus RH étaient éparpillés entre Excel, mails et un vieil outil désuet. L’équipe RH passait près de deux jours par semaine à consolider les demandes et relancer les managers pour les validations.',
    },
    needs: [
      'Centraliser demandes de congés, notes de frais et onboarding dans un seul outil',
      'Donner aux managers une visibilité temps réel sur leurs équipes',
      'Automatiser les validations et les relances',
      'Exporter facilement les données pour la paie et la comptabilité',
    ],
    solutions: [
      'Application SaaS sur mesure avec trois espaces : collaborateur, manager, RH',
      'Workflow de validation paramétrable (simple, double, conditionnel)',
      'Dashboard temps réel avec KPIs (congés posés, solde, demandes en attente)',
      'Exports PDF / Excel + connecteurs SSO Google, Slack et outil de paie',
    ],
    results: [
      'Temps de traitement des demandes divisé par 4',
      'Onboarding d’un nouveau collaborateur ramené à 15 minutes',
      'Adoption de 92 % des collaborateurs dès la première semaine',
    ],
    metrics: [
      { value: '-75 %', label: 'Temps de traitement' },
      { value: '92 %', label: 'Adoption équipe' },
      { value: '180', label: 'Utilisateurs actifs' },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    mockups: [
      {
        kind: 'browser',
        variant: 'hr-dashboard',
        alt: 'Dashboard RH principal avec indicateurs et demandes',
        caption: 'Vue RH — pilotage en un coup d’œil',
      },
      {
        kind: 'browser',
        variant: 'hr-leaves',
        alt: 'Calendrier des congés de l’équipe',
        caption: 'Calendrier des congés',
      },
      {
        kind: 'browser',
        variant: 'hr-expenses',
        alt: 'Liste des notes de frais à valider',
        caption: 'Notes de frais à valider',
      },
      {
        kind: 'phone',
        variant: 'hr-mobile',
        alt: 'Version mobile de l’application RH',
        caption: 'Application mobile collaborateur',
      },
    ],
    duration: '12 semaines',
    year: '2024',
  },
  {
    slug: 'site-e-commerce-sur-mesure',
    name: 'Site e-commerce sur mesure',
    category: 'E-commerce',
    tagline: 'Une boutique en ligne rapide, SEO-ready et pensée pour convertir.',
    description:
      'Boutique Next.js headless performante, avec catalogue avancé, paiement Stripe et expérience de marque travaillée.',
    gradient: 'from-stone-300 via-stone-200 to-amber-100',
    cover: {
      variant: 'shop-storefront',
      alt: 'Page d’accueil d’une boutique en ligne avec grille de produits',
    },
    client: {
      profile: 'Marque DTC · mode & accessoires · 15 personnes',
      context:
        'La marque utilisait une plateforme tout-en-un peu flexible. Les performances plafonnaient, la customisation était limitée et le taux de conversion stagnait malgré un trafic en croissance.',
    },
    needs: [
      'Gagner en vitesse d’affichage et en score Core Web Vitals',
      'Proposer une vraie expérience de marque (design, storytelling produit)',
      'Gérer un catalogue avec variantes, stock multi-entrepôts et promotions',
      'Paiement sécurisé en plusieurs fois et intégrations marketing',
    ],
    solutions: [
      'Stack headless : front Next.js + back e-commerce via API + CMS',
      'Pages produit riches : galerie, variantes, avis, cross-sell, livraison estimée',
      'Tunnel d’achat optimisé en 2 étapes, Stripe + Apple / Google Pay',
      'Intégrations Meta Ads, Google Shopping, Klaviyo pour l’emailing',
    ],
    results: [
      '+38 % de taux de conversion vs ancienne plateforme',
      'Score Lighthouse 98+ sur mobile',
      'Temps de chargement divisé par 3',
    ],
    metrics: [
      { value: '+38 %', label: 'Taux de conversion' },
      { value: '98+', label: 'Score Lighthouse' },
      { value: 'x3', label: 'Vitesse de chargement' },
    ],
    stack: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Algolia', 'Vercel'],
    mockups: [
      {
        kind: 'browser',
        variant: 'shop-storefront',
        alt: 'Page d’accueil boutique avec hero et grille produits',
        caption: 'Page d’accueil boutique',
      },
      {
        kind: 'browser',
        variant: 'shop-product',
        alt: 'Fiche produit avec galerie et variantes',
        caption: 'Fiche produit',
      },
      {
        kind: 'browser',
        variant: 'shop-checkout',
        alt: 'Tunnel de paiement en ligne',
        caption: 'Paiement en 2 étapes',
      },
      {
        kind: 'phone',
        variant: 'shop-mobile',
        alt: 'Version mobile de la boutique en ligne',
        caption: 'Version mobile',
      },
    ],
    duration: '10 semaines',
    year: '2024',
  },
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

export const getAllProjectSlugs = (): string[] => projects.map((p) => p.slug)
