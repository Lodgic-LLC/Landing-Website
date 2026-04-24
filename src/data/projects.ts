export type Project = {
  slug: string
  name: string
  category: string
  description: string
  client: string
  year: string
  duration: string
  stack: string[]
  needs: string[]
  solutions: string[]
  metrics: Array<{ value: string; label: string }>
  highlights: string[]
  challenge: string
  solution: string
  result: string
}

export const projects: Project[] = [
  {
    slug: 'houseguard-gestion-locative',
    name: 'HouseGuard - Gestion locative',
    category: 'Application mobile',
    client: 'Bailleurs independants et agences immobilieres',
    year: '2026',
    duration: '10 semaines',
    stack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
    needs: [
      'Centraliser les biens, loyers et incidents dans une seule application.',
      'Fluidifier la communication entre proprietaires et locataires.',
      'Suivre les paiements avec alertes automatiques.',
    ],
    solutions: [
      'Application mobile iOS et Android avec espaces proprietaire et locataire.',
      'Timeline des incidents avec suivi des statuts en temps reel.',
      'Module de paiements et relances automatiques.',
      'Tableau de bord avec indicateurs de gestion locative.',
    ],
    metrics: [
      { value: '-61 %', label: 'Temps de suivi administratif' },
      { value: '89 %', label: 'Adoption proprietaires' },
      { value: '240', label: 'Lots suivis' },
    ],
    highlights: [
      'Reduction des echanges mails grace a une messagerie contextuelle.',
      'Visibilite complete sur les loyers impayes et actions en cours.',
      'Meilleure satisfaction des locataires grace a la reactivite.',
    ],
    description:
      'Application mobile pour proprietaires et locataires : incidents, loyers et notifications.',
    challenge:
      'Centraliser la gestion des loyers, incidents et echanges proprietaire-locataire dans une interface simple.',
    solution:
      'Conception d une application mobile avec tableau de bord, suivi des paiements, tickets incidents et notifications.',
    result:
      'Une gestion plus fluide pour les proprietaires, une meilleure reactivite et moins de frictions dans la relation locative.',
  },
  {
    slug: 'application-gestion-rh',
    name: 'Application de gestion RH',
    category: 'SaaS interne',
    client: 'PME de services B2B · 180 collaborateurs',
    year: '2026',
    duration: '12 semaines',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    needs: [
      'Centraliser demandes de conges, notes de frais et onboarding dans un seul outil.',
      'Donner aux managers une visibilite temps reel sur leurs equipes.',
      'Automatiser les validations et les relances.',
      'Exporter facilement les donnees pour la paie et la comptabilite.',
    ],
    solutions: [
      'Application SaaS sur mesure avec trois espaces : collaborateur, manager, RH.',
      'Workflow de validation parametrable (simple, double, conditionnel).',
      'Dashboard temps reel avec KPIs (conges poses, solde, demandes en attente).',
      'Exports PDF / Excel + connecteurs SSO Google, Slack et outil de paie.',
    ],
    metrics: [
      { value: '-75 %', label: 'Temps de traitement' },
      { value: '92 %', label: 'Adoption equipe' },
      { value: '180', label: 'Utilisateurs actifs' },
    ],
    highlights: [
      'Temps de traitement des demandes divise par 4.',
      'Onboarding d un nouveau collaborateur ramene a 15 minutes.',
      'Adoption de 92 % des collaborateurs des la premiere semaine.',
    ],
    description:
      'Centraliser les demandes RH (conges, notes de frais, onboarding) dans une seule interface claire.',
    challenge:
      'Les processus RH etaient eparpilles entre Excel, mails et un vieil outil desuet.',
    solution:
      'Un SaaS RH unifie pour piloter les demandes, validations et exports metier.',
    result:
      'Moins de charge manuelle, une meilleure visibilite manager et des cycles de validation plus rapides.',
  },
]

export const getAllProjectSlugs = () => projects.map((project) => project.slug)

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)
