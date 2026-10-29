/** Exemples pédagogiques, pas des écrans clients ni des résultats mesurés. */
export const serviceVisuals = [
  { kind: 'site', label: 'Un chemin vers la demande', steps: ['Votre activité', 'Vos réalisations', 'Prendre contact'], outcome: 'Comprendre → vérifier → vous écrire' },
  { kind: 'application', label: 'Un usage qui tient dans la main', steps: ['Choisir une action', 'Retrouver son suivi', 'Revenir simplement'], outcome: 'Une première version centrée sur l’usage' },
  { kind: 'outil', label: 'Une information, au bon endroit', steps: ['Demande reçue', 'À traiter', 'Terminé'], outcome: 'Des rôles clairs, un processus partagé' },
] as const

export const workshop = {
  title: 'Avant de coder, rendons le projet concret.',
  intro: 'Une liste de fonctionnalités ne dit pas encore ce qui sera utile. Voici comment un besoin devient un périmètre que vous pouvez comprendre, tester et faire évoluer.',
  note: 'Exemples de cadrage illustratifs · aucun résultat client simulé',
  scenarios: [
    { id: 'site', label: 'Un site', need: '« Je veux que mes visiteurs me demandent un devis. »', user: 'Un prospect découvre votre activité.', first: ['Expliquer une prestation', 'Montrer une réalisation pertinente', 'Envoyer une demande depuis son téléphone'], later: 'Un espace client, si un besoin récurrent le justifie.', test: 'Un visiteur comprend l’offre et peut envoyer une demande complète.', deliverable: 'Des pages, un parcours de contact et les accès prévus au devis.', cta: 'Cadrer mon site' },
    { id: 'application', label: 'Une application', need: '« Je veux permettre à mes clients de réserver plus facilement. »', user: 'Un client revient pour réserver un créneau.', first: ['Consulter les disponibilités', 'Choisir et confirmer un créneau', 'Retrouver sa réservation'], later: 'Fidélité et parrainage, après validation du premier usage.', test: 'Un utilisateur peut réserver et retrouver sa confirmation sur son téléphone.', deliverable: 'Un parcours testable ; intégrations et publication cadrées au devis.', cta: 'Cadrer mon application' },
    { id: 'outil', label: 'Un outil métier', need: '« Nous ressaisissons les mêmes dossiers dans plusieurs fichiers. »', user: 'Une équipe suit un dossier à plusieurs.', first: ['Créer le dossier une seule fois', 'Attribuer un responsable', 'Voir le statut et les informations utiles'], later: 'Les connexions aux autres logiciels, selon les accès et les priorités.', test: 'Deux personnes retrouvent le même dossier avec les droits prévus.', deliverable: 'Un processus partagé, les rôles et une passation définis au devis.', cta: 'Cadrer mon outil' },
  ],
} as const
