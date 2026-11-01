/** Repères commerciaux : rester dans les prestations réellement proposées par Lodgic. */
export const accueilPromesse = {
  description: 'Un site pour recevoir des demandes, une application pour vos utilisateurs ou un outil pour simplifier le travail de votre équipe. Je vous aide à choisir les fonctions utiles, puis je les développe avec vous, du premier échange à la mise en ligne.',
  reassurance: 'Un interlocuteur direct. Un périmètre et un prix validés avant le développement.',
}
export const besoinsServices = [
  { besoin: 'Présenter votre activité et faciliter le contact', resultat: 'Des pages métier, des réalisations et un parcours vers la demande.', question: 'Votre site existe déjà ? Nous examinons ce qui peut être amélioré avant de décider d’une refonte.' },
  { besoin: 'Donner à vos clients une raison de revenir', resultat: 'Une première version centrée sur un usage, avec des parcours à tester.', question: 'Un site adapté au mobile peut parfois suffire. Le choix dépend des usages et des fonctions du téléphone nécessaires.' },
  { besoin: 'Réduire les ressaisies dans votre équipe', resultat: 'Un processus partagé, avec les informations et les accès nécessaires.', question: 'Un logiciel existant peut répondre au besoin. Le sur-mesure se justifie par vos contraintes métier.' },
]
export const suiteContact = [
  { titre: 'Comprendre votre besoin', texte: 'Je lis votre message et nous précisons les utilisateurs, l’existant et les contraintes.' },
  { titre: 'Choisir la prochaine étape', texte: 'Selon le projet : compléter les informations, examiner l’existant ou définir une première version.' },
  { titre: 'Décider sur un devis', texte: 'Le périmètre, les livrables, le planning et le prix sont définis avant de commencer. Le message ne vous engage pas.' },
]
export const decisionsServices: Record<string, { besoin: string; premiereVersion: string; alternative: string; aPrevoir: string }> = {
  'creation-site-internet-toulouse': {
    besoin: 'Vos visiteurs doivent comprendre votre activité, vérifier votre savoir-faire et trouver comment vous contacter.',
    premiereVersion: 'Les pages nécessaires pour présenter l’offre, les réalisations disponibles et un parcours de demande vérifié sur téléphone.',
    alternative: 'Si la structure actuelle convient, une correction du parcours ou de certaines pages peut suffire. La refonte complète se décide après examen.',
    aPrevoir: 'Les contenus à fournir, le domaine, l’hébergement et la maintenance sont précisés au devis. Une boutique ou un espace client demande un périmètre distinct.',
  },
  'developpement-application-mobile-toulouse': {
    besoin: 'Vos utilisateurs reviennent régulièrement ou ont besoin de fonctions du téléphone pour accomplir une tâche.',
    premiereVersion: 'Un parcours prioritaire, les écrans et les données nécessaires pour le tester, puis la préparation de la publication.',
    alternative: 'Pour consulter des informations ou envoyer une demande occasionnelle, un site adapté au téléphone peut suffire.',
    aPrevoir: 'Comptes de publication, hébergement, services tiers et maintenance. La validation finale de publication appartient aux stores.',
  },
  'logiciel-sur-mesure-toulouse': {
    besoin: 'Votre équipe ressaisit des informations ou suit le même dossier dans plusieurs fichiers et outils.',
    premiereVersion: 'Un processus métier prioritaire, ses données et les droits de chaque utilisateur. Les connexions sont définies selon les outils existants.',
    alternative: 'Si un logiciel disponible couvre correctement le besoin, sa configuration peut être préférable à un développement spécifique.',
    aPrevoir: 'La reprise des données, les intégrations, l’hébergement et le suivi. Les accès et licences des outils tiers sont examinés au cadrage.',
  },
  'developpeur-react-native-toulouse': {
    besoin: 'Vous cherchez un développeur pour construire ou faire évoluer une application React Native avec un interlocuteur direct.',
    premiereVersion: 'Un lot de fonctionnalités défini après examen du produit, de son code éventuel et des appareils à prendre en charge.',
    alternative: 'Un projet existant commence par l’examen du code et des dépendances ; la réécriture n’est pas une conclusion automatique.',
    aPrevoir: 'Les accès au dépôt, aux services et aux stores ; les mises à jour des dépendances et les fonctions natives spécifiques peuvent modifier le périmètre.',
  },
  'developpement-application-ios-android': {
    besoin: 'Le même service doit être accessible aux utilisateurs iPhone et Android, avec des parcours cohérents.',
    premiereVersion: 'Un usage commun aux deux plateformes, puis les tests et ajustements propres aux appareils ciblés.',
    alternative: 'Un développement partagé ne supprime pas toutes les particularités de chaque plateforme. Les fonctions matérielles se vérifient en amont.',
    aPrevoir: 'Les comptes Apple et Google, les tests sur appareils et la maintenance. Les stores restent décisionnaires de l’acceptation.',
  },
}
export const choixLectures = [
  { slug: 'site-mobile-vs-application-mobile-ecommerce', intention: 'Choisir le format' },
  { slug: 'combien-coute-une-application-en-2026', intention: 'Prévoir le budget' },
  { slug: 'les-etapes-de-developpement-d-une-app', intention: 'Comprendre le déroulement' },
]
