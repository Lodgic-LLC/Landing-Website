/** Le parcours commercial de Lodgic : besoins, décisions et engagements réels. */
export const projectKinds = [
  { value: 'site', label: 'Créer ou améliorer un site web' },
  { value: 'application', label: 'Créer une application mobile' },
  { value: 'outil', label: 'Construire un outil métier' },
  { value: 'reprise', label: 'Reprendre un projet existant' },
  { value: 'cadrage', label: 'Je ne sais pas encore quel format choisir' },
] as const
export type ProjectKind = typeof projectKinds[number]['value']
export const isProjectKind = (value: unknown): value is ProjectKind => projectKinds.some(kind => kind.value === value)
export const contactHref = (kind: ProjectKind) => `/contact?projet=${kind}`
export const CONTACT_CTA = 'Faire le point sur mon projet'

export const situations = [
  { title: 'Votre site explique mal ce que vous faites.', text: 'Vos visiteurs doivent comprendre votre offre, voir ce que vous avez déjà réalisé et trouver comment vous contacter.', link: 'Revoir le parcours de mon site', href: '/creation-site-internet-toulouse', tag: 'Présenter & convaincre' },
  { title: 'Votre idée d’application prend toute la place.', text: 'Il faut choisir l’usage à tester en premier, les fonctions indispensables et ce qui peut attendre une prochaine version.', link: 'Définir ma première application', href: '/developpement-application-mobile-toulouse', tag: 'Créer & tester' },
  { title: 'Votre équipe travaille entre plusieurs fichiers.', text: 'Des informations ressaisies, des versions qui se croisent : partons d’une tâche précise à simplifier.', link: 'Réunir mes outils métier', href: '/logiciel-sur-mesure-toulouse', tag: 'Simplifier & relier' },
  { title: 'Un projet existe, mais il n’avance plus.', text: 'Code, prototype ou application publiée : examinons ce qui peut être conservé avant de décider de reconstruire.', link: 'Faire reprendre mon application', href: '/reprise-application-mobile', tag: 'Débloquer & faire évoluer' },
]

export const cadre = [
  { title: 'Le périmètre est écrit avant de développer.', text: 'Fonctions, livrables, étapes de validation et prix figurent au devis. Un ajout se discute avec son impact sur le budget et le planning.' },
  { title: 'Vous testez ce qui est en train de se construire.', text: 'Les présentations et validations prévues au devis permettent de vérifier les parcours au fil du projet, avec vos retours métier.' },
  { title: 'Les comptes nécessaires sont à votre nom.', text: 'Hébergement, domaine et comptes de publication selon le projet. Le devis précise le code, les accès, la documentation et les droits transmis.' },
  { title: 'La suite a son propre périmètre.', text: 'Hébergement, services tiers, maintenance et nouvelles fonctions sont distingués du développement initial. Vous savez ce qui reste à prévoir.' },
]

export const methode = {
  eyebrow: 'La méthode Lodgic',
  title: 'Un projet clair avant le code. Des étapes visibles ensuite.',
  description: 'Vous connaissez votre métier. Je transforme ce besoin en parcours, puis en logiciel. À chaque étape, nous savons ce qu’il faut décider, ce qui sera livré et ce qui reste à vérifier.',
  steps: [
    { title: 'Cadrer l’usage', text: 'Nous partons d’une situation réelle : qui utilise le projet, pour faire quoi, avec quelles contraintes. L’existant et les alternatives font partie de la discussion.', livrable: 'Les usages prioritaires et les points à clarifier.', client: 'Vous apportez vos exemples, vos outils actuels et vos contraintes.', decision: 'Choisir le premier parcours utile et les fonctions à reporter.' },
    { title: 'Définir la première version', text: 'Je formalise les fonctions, les livrables, les étapes et le budget. Les écrans et les critères de validation prévus au devis permettent de partager la même vision.', livrable: 'Un devis détaillé, un planning et les étapes de validation.', client: 'Vous validez le périmètre et identifiez la personne qui donne les retours.', decision: 'Savoir ce qui est compris, ce qui ne l’est pas et ce qui fait varier le prix.' },
    { title: 'Construire et faire tester', text: 'Je développe les parcours convenus et vous présente une version de travail. Nous vérifions les usages réels, puis corrigeons les écarts avant la livraison.', livrable: 'Des écrans validés et une version à tester.', client: 'Vous testez avec les cas de votre activité et regroupez vos retours.', decision: 'Valider le fonctionnement plutôt qu’une simple capture d’écran.' },
    { title: 'Livrer et transmettre', text: 'Après validation, je prépare la mise en ligne et la passation prévue. Pour une application mobile, la publication reste soumise à l’examen des stores.', livrable: 'Le code, les accès et la documentation prévus au devis.', client: 'Vous conservez les comptes nécessaires et validez la réception.', decision: 'Distinguer la livraison, les frais de fonctionnement et le suivi à organiser.' },
  ],
}

export const contact = {
  eyebrow: 'Le premier échange',
  title: 'Parlons de ce qui doit mieux fonctionner.',
  description: 'Une idée, un site à refaire ou une application bloquée ? Décrivez le besoin avec vos mots. Vous échangez directement avec Yann, le développeur qui prendra en charge votre projet.',
  reassurance: 'Pas besoin d’un cahier des charges complet. Un usage, un lien vers l’existant et vos contraintes donnent déjà un point de départ.',
  next: [
    { title: 'Je prends connaissance de votre besoin.', text: 'Votre message sert à comprendre l’usage, l’existant et les premières questions à éclaircir.' },
    { title: 'Nous précisons la prochaine étape.', text: 'Selon le projet : un échange, des informations à compléter ou un examen technique à définir ensemble.' },
    { title: 'Vous décidez sur un périmètre écrit.', text: 'Si le projet peut être chiffré, une proposition précise les livrables, le budget et le planning. Envoyer un message ne lance pas les travaux.' },
  ],
}

export const decisionResources = [
  { title: 'Quel format pour mon besoin ?', text: 'Site, application ou outil interne : trois questions pour choisir un point de départ.', href: '/preparer-son-projet', label: 'M’orienter', tag: 'Choisir' },
  { title: 'Qu’est-ce qui fait varier le budget ?', text: 'Première version, connexions, publication et maintenance : comprendre les postes avant de comparer.', href: '/prix-application-mobile', label: 'Comprendre le budget', tag: 'Chiffrer' },
  { title: 'Mon application peut-elle être reprise ?', text: 'Les accès à réunir et ce qu’il faut examiner pour arbitrer entre correction et refonte.', href: '/reprise-application-mobile', label: 'Examiner une reprise', tag: 'Débloquer' },
]

export interface ServiceDecision {
  kind: ProjectKind
  title: string
  fit: string[]
  alternative: string
  firstVersion: string[]
  scope: string
  costs: string
  evidence?: { title: string; text: string; href: string; label: string }
}
const mobileDecision: ServiceDecision = {
  kind: 'application', title: 'Une app se justifie par un usage qui revient.',
  fit: ['Vos utilisateurs reviennent pour une action précise sur téléphone.', 'Un parcours mobile est difficile à réaliser dans vos outils actuels.', 'Vous pouvez identifier une première version et les personnes qui la testeront.'],
  alternative: 'Pour une visite ponctuelle ou un contenu à consulter depuis un lien, un site mobile peut suffire. Ce choix se fait avant le développement.',
  firstVersion: ['Un parcours prioritaire et les écrans qui le rendent possible.', 'Les accès et échanges de données nécessaires à ce parcours.', 'Les tests convenus et la préparation de la publication.'],
  scope: 'Les paiements, notifications, usages hors connexion ou interfaces d’administration sont à cadrer selon le besoin ; ils ne sont pas ajoutés automatiquement.',
  costs: 'Comptes de publication, hébergement, services tiers et suivi après lancement sont à distinguer du développement. Le devis précise leur prise en charge.',
  evidence: { title: 'Voir comment je construis un parcours utilisateur.', text: 'BewasBeen est une application web pédagogique. Elle illustre mon travail sur les rôles et les parcours ; ce n’est pas une référence d’application native publiée sur les stores.', href: '/projets/bewasbeen', label: 'Examiner cette réalisation web' },
}
export const serviceDecisions: Record<string, ServiceDecision> = {
  'creation-site-internet-toulouse': {
    kind: 'site', title: 'Vos visiteurs doivent comprendre avant de vous contacter.',
    fit: ['Votre activité est difficile à comprendre sur le site actuel.', 'Vos réalisations et vos prestations sont dispersées ou peu visibles.', 'Sur téléphone, demander un devis ou vous appeler est trop compliqué.'],
    alternative: 'Si vos pages répondent déjà au besoin, une correction ciblée peut suffire. Une refonte complète se décide à partir des problèmes observés.',
    firstVersion: ['Des pages structurées autour de votre offre et de vos preuves.', 'Un parcours de contact ou de devis testé sur téléphone.', 'Les contenus modifiables et la passation prévus au devis.'],
    scope: 'Une boutique, un espace client ou une connexion à un logiciel métier demandent un périmètre spécifique. La visibilité commerciale dépend aussi de votre offre et de votre acquisition.',
    costs: 'Nom de domaine, hébergement, contenus à produire et maintenance sont détaillés dans la proposition. Le prix de départ ne couvre pas tous les projets.',
  },
  'developpement-application-mobile-toulouse': mobileDecision,
  'logiciel-sur-mesure-toulouse': {
    kind: 'outil', title: 'Commençons par la tâche qui ralentit votre équipe.',
    fit: ['La même information est saisie dans plusieurs outils.', 'Les rôles et les versions des fichiers deviennent difficiles à suivre.', 'Votre processus métier nécessite un parcours que vos outils ne couvrent pas.'],
    alternative: 'Un logiciel existant ou un meilleur paramétrage peut répondre au besoin. Le sur-mesure se justifie quand le processus et ses contraintes le demandent.',
    firstVersion: ['Un processus défini avec ses utilisateurs et leurs droits.', 'Un espace partagé pour les informations nécessaires.', 'Les imports, exports ou connexions retenus dans le périmètre.'],
    scope: 'La reprise des données et les connexions dépendent de leur qualité et des possibilités des outils existants. Elles se vérifient avant de fixer le périmètre.',
    costs: 'Hébergement, services connectés, accompagnement des utilisateurs et maintenance sont à prévoir selon le fonctionnement retenu.',
  },
  'developpeur-react-native-toulouse': { ...mobileDecision, title: 'Un renfort pour un projet React Native à cadrer ou à reprendre.', alternative: 'Avant une reprise, je vérifie les versions, les dépendances, le code et les accès. Partager une technologie ne suffit pas à garantir qu’une base est reprenable.', kind: 'reprise' },
  'developpement-application-ios-android': { ...mobileDecision, title: 'La publication se prépare avec le produit.', alternative: 'Une application disponible dans les stores implique des comptes, des tests et des mises à jour. Si l’usage ne nécessite pas d’installation, nous pouvons examiner une solution web.' },
}

export const homeQuestions = [
  { question: 'Mon idée n’est pas encore précise. Est-ce trop tôt ?', answer: 'Non. Expliquez à qui vous voulez rendre service et quelle action doit devenir plus simple. Nous identifions les questions à résoudre avant un devis. Vous pouvez aussi utiliser le guide de préparation sans laisser vos coordonnées.' },
  { question: 'Pourquoi ne pas commencer par toutes les fonctionnalités ?', answer: 'Une première version centrée sur un usage permet de vérifier le parcours avec ses utilisateurs. Les fonctions reportées restent identifiées ; elles ne font pas partie du premier devis tant qu’elles ne sont pas retenues.' },
  { question: 'Quel budget et quel délai prévoir ?', answer: 'Les repères actuels sont de 1 500 € pour un site vitrine et de 4 000 € pour une application mobile ou un outil métier. Un site prend habituellement 1 à 3 semaines et une application 2 à 4 mois, selon le périmètre, les contenus et les validations. Seule la proposition décrit le prix et le planning de votre projet.' },
  { question: 'Pouvez-vous reprendre un projet existant ?', answer: 'Oui, après examen de ce qui existe. Les accès, le code, les dépendances et les parcours à préserver permettent de choisir entre correction, reprise partielle et refonte. Un prototype ne garantit pas qu’il soit prêt à être publié.' },
  { question: 'Que récupère-t-on à la livraison ?', answer: 'Les éléments prévus au devis : code, accès, documentation et mise en ligne selon le projet. Les comptes nécessaires sont ouverts à votre nom. Les droits transmis et les licences des composants tiers sont précisés dans le cadre convenu.' },
  { question: 'La maintenance est-elle comprise ?', answer: 'Uniquement lorsqu’elle est prévue dans la proposition ou dans un accord distinct. Les frais récurrents, les corrections et les nouvelles fonctions sont distingués pour que vous puissiez anticiper la suite.' },
  { question: 'Dois-je être à Toulouse ?', answer: 'Je suis basé à Toulouse et je travaille aussi à distance. Vous échangez directement avec moi. Nous convenons des étapes de présentation et de validation dans le planning.' },
]
