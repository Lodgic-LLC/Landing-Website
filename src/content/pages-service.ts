/**
 * Contenus des pages de service (une par prestation).
 *
 * Ajouter une page = ajouter une entrée ici : la route, les métadonnées et
 * la mise en page sont générées automatiquement par app/[service]/page.tsx.
 *
 * Dans les textes, **ce qui est entre doubles astérisques** s'affiche en gras.
 */

export interface Carte {
  num: string
  title: string
  body: string
  bullets: string[]
}

export interface PageService {
  /** Dernier segment de l'URL */
  slug: string
  name: string
  description: string
  keywords: string[]
  hero: {
    eyebrow: string
    title: string
    highlight: string
    description: string
    badges: string[]
  }
  expertise: {
    eyebrow: string
    heading: string
    intro: string
    cards: Carte[]
    closing: string[]
    crossLinks: { title: string; href: string; description: string }[]
  }
  faqs: { question: string; answer: string }[]
}

export const PAGES_SERVICE: PageService[] = [
  {
    slug: 'creation-site-internet-toulouse',
    name: 'Création de site internet à Toulouse',
    description:
        'Développeur indépendant à Toulouse : je crée des sites internet sur mesure à partir de 1 500 €. Pages de service, formulaire de contact, textes modifiables et performances mesurées à la livraison.',
    keywords: [
        'création site internet Toulouse',
        'création site web Toulouse',
        'développeur web Toulouse',
        'site vitrine Toulouse',
        'refonte site internet Toulouse',
        'freelance web Toulouse',
        'prix site internet',
    ],
    hero: {
      eyebrow: 'Site internet',
      title: 'Création de site internet à Toulouse',
      highlight: 'Un site que vos clients comprennent et que vous pouvez modifier.',
      description:
        'Je conçois un ensemble de pages cohérentes pour présenter votre activité et transformer les visites en demandes. Je prévois un accès direct au contact ou au devis, puis je mesure le chargement sur téléphone à la livraison. **À partir de 1 500 €**.',
      badges: ['À partir de 1 500 €', '1 à 3 semaines', 'Performances mesurées', 'Textes modifiables'],
    },
    expertise: {
      eyebrow: 'Ce que comprend un site',
      heading: 'Ce qui entre dans la création du site.',
      intro:
        'Le nombre de pages ne suffit pas à définir un projet. Je détaille ici la structure, les accès au contact, les mesures et ce que vous pourrez modifier vous-même.',
      cards: [
        {
          num: '01',
          title: 'Un parcours vers le contact',
          body:
        'La première page présente votre métier, vos clients et le moyen de vous joindre. Je définis ce parcours avant de travailler les détails visuels.',
          bullets: [
        'Message clair dès le premier écran',
        'Téléphone et formulaire toujours accessibles',
        'Preuves visibles : réalisations, avis, garanties',
        'Parcours testé sur téléphone',
          ],
        },
        {
          num: '02',
          title: 'Pages lisibles par les moteurs de recherche',
          body:
        'Je donne à chaque prestation importante une page identifiable, avec des titres précis et des données structurées lorsque c’est pertinent. Je vous explique aussi le rôle de votre fiche Google.',
          bullets: [
        'Une page par prestation importante',
        'Données structurées (Schema.org)',
        'Vitesse mesurée, pas promise',
        'Conseils pour votre fiche Google Business',
          ],
        },
        {
          num: '03',
          title: 'Rapide, surtout sur téléphone',
          body:
        'Je construis les pages pour les petits écrans et je contrôle leur chargement à la livraison. Le projet Alliance-TRAVAUX est passé de 5,8 s à 0,7 s sur la mesure publiée.',
          bullets: [
        'Images compressées automatiquement',
        'Pas de scripts inutiles',
        'Score de performance vérifié à la livraison',
        'Hébergement en Europe',
          ],
        },
        {
          num: '04',
          title: 'Vous gardez la main',
          body:
        'Changer un prix, ajouter une photo ou publier une actualité : je prévois ces modifications dès le départ. Je vous montre comment les faire à la livraison.',
          bullets: [
        'Édition des textes et des images',
        'Formation incluse',
        'Pas d’abonnement obligatoire',
        'Je reste disponible pour les gros changements',
          ],
        },
        {
          num: '05',
          title: 'Formulaire de contact ou de devis',
          body:
        'Le formulaire recueille les informations utiles à votre premier échange et transmet la demande dans votre boîte mail.',
          bullets: [
        'Questions adaptées à votre métier',
        'Réception par e-mail immédiate',
        'Protection contre le spam',
        'Consentement RGPD intégré',
          ],
        },
        {
          num: '06',
          title: 'Refonte d’un site existant',
          body:
        'Si le site existant doit être remplacé, je relève ses pages utiles et ses adresses avant la refonte. Je prépare des redirections pour éviter les erreurs lors du changement.',
          bullets: [
        'Audit de l’existant',
        'Redirections des anciennes adresses',
        'Reprise du nom de domaine et des e-mails',
        'Migration des contenus utiles',
          ],
        },
      ],
      closing: [
        'Un site vitrine démarre à **1 500 €** et se livre en **1 à 3 semaines** pour le périmètre défini au devis. Le prix dépend du nombre de pages et des fonctions (prise de rendez-vous, espace client, catalogue) : il est fixé par écrit après un premier échange.',
        'Le site d’**Alliance-TRAVAUX**, un collectif d’artisans toulousains, est un exemple de ce que je livre : 31 pages, formulaire de devis, référencement local sur 16 communes.',
      ],
      crossLinks: [
        {
          title: 'Logiciel sur mesure à Toulouse',
          href: '/logiciel-sur-mesure-toulouse',
          description: 'Quand il vous faut un outil de gestion, pas seulement une vitrine.',
        },
        {
          title: 'Développement d’application mobile à Toulouse',
          href: '/developpement-application-mobile-toulouse',
          description: 'Si votre projet a besoin d’une application installée sur le téléphone.',
        },
      ],
    },
    faqs: [
      {
        question: 'Combien coûte un site internet ?',
        answer:
        'À partir de 1 500 € pour un ensemble de pages cohérentes, avec un parcours vers le contact. Une prise de rendez-vous, un espace client ou un catalogue modifient le périmètre ; je vous donne un prix ferme par écrit après un premier échange.',
      },
      {
        question: 'Combien de temps pour créer un site ?',
        answer:
        'Entre 1 et 3 semaines pour un site vitrine, à partir du moment où j’ai vos textes et vos photos. Vous voyez le site avancer sur un lien privé et vous corrigez au fur et à mesure.',
      },
      {
        question: 'Serai-je premier sur Google ?',
        answer:
        'Aucune place ne peut être garantie. Je travaille la structure des pages, leur vitesse et les données structurées quand elles sont utiles. Je vous indique aussi les informations à renseigner sur votre fiche Google Business.',
      },
      {
        question: 'Pourrai-je modifier le site moi-même ?',
        answer:
        'Oui. Textes, images, actualités : vous les modifiez sans me solliciter, et je vous forme à la livraison. Pour les changements de structure ou les nouvelles fonctions, je reste disponible et je chiffre à chaque fois.',
      },
    ],
  },
  {
    slug: 'developpement-application-mobile-toulouse',
    name: 'Développement d\'application mobile à Toulouse',
    description:
        'Développeur indépendant à Toulouse, ingénieur en informatique : je conçois et développe votre application iPhone et Android, de l\'idée à la publication sur les stores. À partir de 4 000 €, prix fixé par écrit avant de commencer.',
    keywords: [
        'développement application mobile Toulouse',
        'développeur application mobile Toulouse',
        'création application mobile Toulouse',
        'application iOS Android Toulouse',
        'développeur mobile freelance Toulouse',
        'prix application mobile',
    ],
    hero: {
      eyebrow: 'Application mobile',
      title: 'Développement d\'application mobile à Toulouse',
      highlight: 'Une application sur iPhone et Android, du cadrage à la publication.',
      description:
        'Je définis les parcours avec vous, développe l’application pour **iPhone et Android**, la teste sur appareil et la publie sur **le Google Play Store et l’App Store**. Le périmètre et le prix sont écrits avant le code.',
      badges: ['iPhone et Android', 'À partir de 4 000 €', '2 à 4 mois', 'Google Play Store et App Store', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Ce que comprend le développement',
      heading: 'Du premier écran à la publication.',
      intro:
        'Une application comprend l’interface, les données, les tests et les comptes de publication. Voici les étapes que je chiffre pendant le cadrage.',
      cards: [
        {
          num: '01',
          title: 'Cadrage et maquettes',
          body:
        'Je classe avec vous les fonctions par ordre d’importance. Je dessine les écrans principaux avant de coder : vous validez le parcours avant le développement.',
          bullets: [
        'Périmètre écrit et validé ensemble',
        'Maquettes des écrans clés',
        'Estimation ferme et planning',
        'Fonctions prévues après le lancement',
          ],
        },
        {
          num: '02',
          title: 'Développement iPhone et Android',
          body:
        'Je développe en React Native pour partager une base de code entre iPhone et Android. Les différences propres à chaque plateforme sont traitées dans l’interface et les tests.',
          bullets: [
        'Un code, deux plateformes',
        'Interface adaptée à chaque système',
        'Fonctionne quand le réseau manque',
        'Notifications, appareil photo, GPS',
          ],
        },
        {
          num: '03',
          title: 'Serveur et données',
          body:
        'Une application, c’est aussi un serveur qui stocke les comptes, les données et les fichiers. Je le construis et je l’héberge en Europe, avec des sauvegardes automatiques.',
          bullets: [
        'Comptes utilisateurs et droits d’accès',
        'Base de données PostgreSQL',
        'Hébergement en Europe et droits d’accès définis',
        'Sauvegardes quotidiennes',
          ],
        },
        {
          num: '04',
          title: 'Publication sur les stores',
          body:
        'Créer les comptes développeur Apple et Google, préparer la fiche, passer la validation d’Apple : je m’en occupe, et je vous explique ce que vous devrez garder à jour ensuite.',
          bullets: [
        'Comptes App Store et Google Play à votre nom',
        'Fiche, captures et description',
        'Validation Apple et corrections éventuelles',
        'Mises à jour publiées pour vous',
          ],
        },
        {
          num: '05',
          title: 'Tests sur de vrais téléphones',
          body:
        'Une app qui marche sur un simulateur n’est pas une app qui marche. Je teste sur des appareils réels, anciens et récents, et vous testez chaque semaine sur votre propre téléphone.',
          bullets: [
        'Version test installable chaque semaine',
        'iPhone et Android, anciens modèles inclus',
        'Parcours critiques testés automatiquement',
        'Suivi des plantages après publication',
          ],
        },
        {
          num: '06',
          title: 'Reprise d’une application existante',
          body:
        'Votre app existe déjà mais plus personne ne sait la maintenir ? Je l’audite, je vous dis ce qui est récupérable et je chiffre la reprise ou la refonte. Vous pouvez comparer les deux options.',
          bullets: [
        'Audit du code et des dépendances',
        'Remise à niveau iOS et Android',
        'Reprise ou refonte, chiffrées toutes les deux',
        'Passation documentée',
          ],
        },
      ],
      closing: [
        'Une application mobile démarre à **4 000 €** et se livre en **2 à 4 mois**, publication sur le Google Play Store et l’App Store comprise dans le périmètre prévu. Le montant exact est fixé par écrit après le cadrage, avant la première ligne de code. Il ne change ensuite que si vous modifiez le périmètre.',
        'Je suis basé à Toulouse : je peux vous rencontrer pour le cadrage, puis poursuivre les échanges en visio et vous donner accès aux versions de test sur votre téléphone. Je travaille aussi entièrement à distance pour des clients ailleurs en France.',
      ],
      crossLinks: [
        {
          title: 'Développeur React Native à Toulouse',
          href: '/developpeur-react-native-toulouse',
          description: 'Pourquoi un seul code pour iPhone et Android, et quand je le déconseille.',
        },
        {
          title: 'Application iOS et Android',
          href: '/developpement-application-ios-android',
          description: 'Tout ce qu’il faut pour être publié sur l’App Store et Google Play, et y rester.',
        },
        {
          title: 'Logiciel sur mesure à Toulouse',
          href: '/logiciel-sur-mesure-toulouse',
          description: 'Quand le besoin est un outil de gestion plutôt qu’une application grand public.',
        },
      ],
    },
    faqs: [
      {
        question: 'Combien coûte une application mobile ?',
        answer:
        'À partir de 4 000 € pour une application iPhone et Android, avec publication sur le Google Play Store et l’App Store. Le prix dépend du nombre d’écrans, des fonctions (paiement, notifications, hors-ligne) et du serveur nécessaire. Il est fixé par écrit après le cadrage.',
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
        'À vous. Les comptes App Store, Google Play, hébergement et autres services nécessaires sont ouverts à votre nom. Vous conservez leurs accès, vos données et le code livré avec sa documentation. Le devis détaille la cession des droits sur les créations propres au projet et les licences des composants tiers.',
      },
    ],
  },
  {
    slug: 'logiciel-sur-mesure-toulouse',
    name: 'Logiciel sur mesure à Toulouse',
    description:
        'Développeur indépendant à Toulouse : je conçois des outils internes sur mesure pour centraliser vos informations, relier vos services et réduire les ressaisies au quotidien. À partir de 4 000 €.',
    keywords: [
        'logiciel sur mesure Toulouse',
        'développement logiciel sur mesure',
        'logiciel métier Toulouse',
        'application web sur mesure Toulouse',
        'outil de gestion sur mesure',
        'développeur logiciel Toulouse',
    ],
    hero: {
      eyebrow: 'Logiciel métier',
      title: 'Logiciel sur mesure à Toulouse',
      highlight: 'Une solution interne construite autour du travail de votre équipe.',
      description:
        'Je pars de vos fichiers et de votre manière de travailler pour centraliser les informations, relier les outils nécessaires et réduire les tâches répétitives. L’objectif est de faire gagner du temps à votre équipe au quotidien. **À partir de 4 000 €**.',
      badges: ['À partir de 4 000 €', 'Remplace les tableurs', 'Connecté à vos outils', 'Accessible partout', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Ce que comprend un logiciel métier',
      heading: 'Comment je construis un logiciel métier.',
      intro:
        'Je commence par regarder les tâches répétées, les documents utilisés et les cas particuliers. Le périmètre se décide à partir de ce travail, pas d’une liste de fonctions standard.',
      cards: [
        {
          num: '01',
          title: 'Comprendre votre façon de travailler',
          body:
        'Je commence par observer votre manière de travailler : les fichiers, les étapes et les cas particuliers. L’outil doit correspondre à votre processus.',
          bullets: [
        'Observation de l’existant',
        'Liste des tâches répétitives',
        'Cas particuliers identifiés dès le départ',
        'Périmètre écrit et validé',
          ],
        },
        {
          num: '02',
          title: 'Un outil web, accessible partout',
          body:
        'Le logiciel s’ouvre dans un navigateur, au bureau, chez un client ou depuis le téléphone. Rien à installer, et tout le monde voit les mêmes données à jour.',
          bullets: [
        'Aucune installation',
        'Bureau, tablette, téléphone',
        'Données à jour pour tous, en temps réel',
        'Version mobile si le terrain l’exige',
          ],
        },
        {
          num: '03',
          title: 'Connecté à ce que vous utilisez déjà',
          body:
        'Comptabilité, agenda, e-mail, outil de devis : le logiciel échange avec vos outils actuels au lieu de vous faire tout ressaisir.',
          bullets: [
        'Import de vos fichiers existants',
        'Export vers votre comptable',
        'Envoi automatique d’e-mails et de documents',
        'Connexion aux services que vous utilisez',
          ],
        },
        {
          num: '04',
          title: 'Qui voit quoi',
          body:
        'Un salarié ne voit pas les mêmes choses qu’un associé ; un client encore moins. Je définis avec vous les rôles et je les applique côté serveur, pas seulement à l’écran.',
          bullets: [
        'Rôles et droits d’accès',
        'Espace client séparé si besoin',
        'Historique de qui a modifié quoi',
        'Collecte et durée de conservation des données définies au cadrage',
          ],
        },
        {
          num: '05',
          title: 'Voir clair dans votre activité',
          body:
        'Combien de dossiers en cours, lesquels traînent, ce qui a été facturé ce mois : un tableau de bord qui répond aux questions que vous vous posez vraiment, et des exports pour le reste.',
          bullets: [
        'Tableau de bord sur vos indicateurs',
        'Exports Excel et PDF',
        'Alertes sur les retards',
        'Recherche et filtres rapides',
          ],
        },
        {
          num: '06',
          title: 'Faire évoluer le logiciel',
          body:
        'Votre activité change, l’outil doit suivre. Je documente la structure du logiciel pour préparer ses évolutions. Chaque ajout fait l’objet d’une analyse et d’un chiffrage.',
          bullets: [
        'Ajouts par étapes, chiffrés à chaque fois',
        'Code documenté, reprenable par un autre',
        'Vous êtes propriétaire du code et des données',
        'Sauvegardes automatiques',
          ],
        },
      ],
      closing: [
        'Un logiciel métier démarre à **4 000 €**. Le prix dépend des tâches à réunir, des données à reprendre et des connexions avec vos outils existants. Je fixe le périmètre et le planning par écrit, puis je livre par étapes pour que votre équipe puisse utiliser les fonctions prioritaires.',
        '**BewasBeen**, une plateforme pour enseignants avec gestion de classes, exercices et suivi par élève, montre ce type de construction : des rôles distincts, des données structurées et des exports pour un usage quotidien par des personnes qui ne sont pas informaticiennes.',
      ],
      crossLinks: [
        {
          title: 'Création de site internet à Toulouse',
          href: '/creation-site-internet-toulouse',
          description: 'Pour être trouvé et contacté, avant d’outiller l’interne.',
        },
        {
          title: 'Développement d’application mobile à Toulouse',
          href: '/developpement-application-mobile-toulouse',
          description: 'Quand vos équipes ont besoin de l’outil sur le terrain, dans la poche.',
        },
      ],
    },
    faqs: [
      {
        question: 'Un logiciel sur mesure, n’est-ce pas trop cher pour une petite entreprise ?',
        answer:
        'Un outil métier démarre à 4 000 €. Pour estimer l’intérêt du projet, je relève avec vous le temps passé en ressaisies et le coût de vos outils actuels.',
      },
      {
        question: 'Pourquoi ne pas prendre un logiciel du commerce ?',
        answer:
        'Si un logiciel existant couvre votre besoin, je vous le dirai au premier échange. Je propose du sur mesure quand vos processus exigent des fonctions ou des connexions que ces outils ne proposent pas.',
      },
      {
        question: 'Combien de temps faut-il ?',
        answer:
        'Le planning est défini sur mesure après le cadrage. Il dépend des fonctions, des données à reprendre et des outils à connecter. Je livre par étapes pour que votre équipe puisse utiliser les fonctions prioritaires.',
      },
      {
        question: 'Que devient le logiciel si vous arrêtez ?',
        answer:
        'Il continue de fonctionner : vous êtes propriétaire du code, des données et des accès à l’hébergement. Le code est documenté et construit avec des technologies répandues, pour qu’un autre développeur puisse le reprendre.',
      },
    ],
  },
  {
    slug: 'developpeur-react-native-toulouse',
    name: 'Développeur React Native à Toulouse',
    description:
        'Ingénieur indépendant à Toulouse, spécialisé React Native et Expo : une application iPhone et Android à partir d\'un seul code. Je vous explique ce que ça vous fait gagner, et les cas où je vous le déconseille.',
    keywords: [
        'développeur React Native Toulouse',
        'freelance React Native Toulouse',
        'application React Native',
        'développeur Expo Toulouse',
        'application cross-platform Toulouse',
        'reprise application React Native',
    ],
    hero: {
      eyebrow: 'React Native',
      title: 'Développeur React Native à Toulouse',
      highlight: 'Une base de code partagée entre iPhone et Android.',
      description:
        'React Native permet de partager la majeure partie du code entre **iPhone et Android**. Je l’utilise lorsque les besoins des deux plateformes sont proches ; je signale dès le cadrage les fonctions qui demandent du code natif.',
      badges: ['React Native et Expo', 'TypeScript', 'iPhone et Android', 'Reprise d’app existante'],
    },
    expertise: {
      eyebrow: 'Pourquoi React Native',
      heading: 'Ce que permet la base de code partagée.',
      intro:
        'Le partage du code réduit le travail à dupliquer entre iPhone et Android. Les économies réelles dépendent des fonctions natives et des différences d’interface du projet.',
      cards: [
        {
          num: '01',
          title: 'Un code pour les deux',
          body:
        'Chaque écran est développé une fois et fonctionne sur iPhone et Android. Une correction ou une nouvelle fonction sort des deux côtés le même jour.',
          bullets: [
        'Budget et délai réduits',
        'Mêmes fonctions sur les deux stores',
        'Une seule base à maintenir',
        'Sorties simultanées',
          ],
        },
        {
          num: '02',
          title: 'Correctifs en quelques minutes',
          body:
        'Expo permet de diffuser certains correctifs compatibles avec la version installée. Les changements natifs passent par une nouvelle publication, selon les règles des stores.',
          bullets: [
        'Mode de publication adapté au correctif',
        'Retour en arrière possible',
        'Versions store pour les gros changements',
        'Historique de chaque publication',
          ],
        },
        {
          num: '03',
          title: 'Ce que vos utilisateurs voient',
          body:
        'Boutons, listes, transitions : React Native utilise les composants réels de chaque système. L’application se comporte comme une app iPhone sur iPhone et comme une app Android sur Android.',
          bullets: [
        'Composants natifs, pas une page web déguisée',
        'Gestes et animations adaptés à l’usage',
        'Règles de chaque plateforme respectées',
        'Fonctionne hors connexion',
          ],
        },
        {
          num: '04',
          title: 'Accès à tout le téléphone',
          body:
        'Appareil photo, GPS, notifications, Bluetooth, Face ID : tout ce que le téléphone sait faire est accessible. Quand un besoin très précis sort du cadre, j’écris le pont natif nécessaire.',
          bullets: [
        'Caméra, GPS, notifications, biométrie',
        'Paiement intégré',
        'Modules natifs sur mesure si besoin',
        'Compatible tablettes',
          ],
        },
        {
          num: '05',
          title: 'Quand je le déconseille',
          body:
        'Jeu en 3D, traitement vidéo lourd, application très liée à une seule plateforme : là, le développement natif pur est plus adapté. Je vous le dirai au cadrage, et je vous orienterai vers la bonne personne.',
          bullets: [
        'Jeux et 3D en temps réel',
        'Traitement vidéo ou audio intensif',
        'Intégrations système très spécifiques',
        'Je vous oriente plutôt que de forcer',
          ],
        },
        {
          num: '06',
          title: 'Reprise d’une app React Native',
          body:
        'Vous avez déjà une application React Native développée par quelqu’un d’autre ? Je l’audite et vérifie si ses dépendances peuvent être mises à jour. Je vous indique ensuite si une reprise est possible ou si une refonte est nécessaire.',
          bullets: [
        'Audit du code et des versions',
        'Mise à jour Expo et React Native',
        'Reprise de la publication sur les stores',
        'Documentation pour la suite',
          ],
        },
      ],
      closing: [
        'Je développe en **React Native et TypeScript**, avec un serveur Node.js et PostgreSQL derrière quand l’application en a besoin. C’est la même stack que sur le web : je peux livrer une application et son espace d’administration avec une seule logique, et un seul interlocuteur.',
        'Une application React Native démarre à **4 000 €** et se livre en **2 à 4 mois**. Le prix est fixé par écrit au cadrage.',
      ],
      crossLinks: [
        {
          title: 'Développement d’application mobile à Toulouse',
          href: '/developpement-application-mobile-toulouse',
          description: 'Les six chantiers d’une application, du cadrage à la publication.',
        },
        {
          title: 'Application iOS et Android',
          href: '/developpement-application-ios-android',
          description: 'Comptes développeur, règles d’Apple, fiche store : ce qu’il faut pour être publié.',
        },
        {
          title: 'Création de site internet à Toulouse',
          href: '/creation-site-internet-toulouse',
          description: 'Quand un site bien fait suffit, avant de penser application.',
        },
      ],
    },
    faqs: [
      {
        question: 'React Native, c’est moins bien qu’une « vraie » application ?',
        answer:
        'React Native produit une application installée depuis les stores et utilise les composants du téléphone. Certains besoins, comme la 3D intensive ou un traitement vidéo lourd, demandent une étude spécifique au cadrage.',
      },
      {
        question: 'Peut-on publier sur l’App Store et Google Play avec React Native ?',
        answer:
        'Oui, exactement comme n’importe quelle application. Je m’occupe des comptes développeur, de la fiche et de la validation d’Apple. Les mises à jour importantes passent par les stores ; les petits correctifs peuvent être déployés directement.',
      },
      {
        question: 'Que se passe-t-il quand Apple ou Google change quelque chose ?',
        answer:
        'Le suivi comprend les mises à jour prévues au contrat. Je vérifie les évolutions des systèmes et des stores, puis je chiffre les adaptations nécessaires.',
      },
      {
        question: 'Un autre développeur pourra-t-il reprendre l’application ?',
        answer:
        'Oui. React Native et TypeScript sont parmi les technologies les plus répandues : le code est lisible, documenté, et vous en êtes propriétaire. Votre application ne dépend pas de moi pour exister.',
      },
    ],
  },
  {
    slug: 'developpement-application-ios-android',
    name: 'Développement d\'application iOS et Android',
    description:
        'Publier une application sur l\'App Store et Google Play : ce que ça implique, ce que je prends en charge, et ce que vous devrez garder à jour. Développeur indépendant à Toulouse, ingénieur en informatique.',
    keywords: [
        'développement application iOS Android',
        'publier application App Store',
        'publier application Google Play',
        'développeur iOS Toulouse',
        'développeur Android Toulouse',
        'validation App Store',
    ],
    hero: {
      eyebrow: 'App Store et Google Play',
      title: 'Développement d\'application iOS et Android',
      highlight: 'Je prépare l’application et ses comptes de publication.',
      description:
        'Je prépare les comptes, les fiches des stores, les tests et la soumission. Après publication, les mises à jour iOS et Android sont à prévoir dans le suivi.',
      badges: ['App Store', 'Google Play', 'Validation Apple', 'Mises à jour iOS et Android', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Publier, et rester publié',
      heading: 'Les étapes de publication sur les stores.',
      intro:
        'La publication fait partie du périmètre : comptes développeur, fiches, permissions, tests sur appareils et réponses aux éventuelles demandes des stores.',
      cards: [
        {
          num: '01',
          title: 'Comptes développeur',
          body:
        'Apple et Google exigent chacun un compte et des frais. Je vous accompagne dans leur création à votre nom ou à celui de votre entreprise : vous restez titulaire des comptes et gardez les accès.',
          bullets: [
        'Compte Apple Developer à votre nom',
        'Compte Google Play à votre nom',
        'Frais réglés directement aux plateformes',
        'Vous gardez les accès administrateur',
          ],
        },
        {
          num: '02',
          title: 'Les règles d’Apple et de Google',
          body:
        'Je vérifie les règles de publication dès la conception : permissions, suppression de compte et paiements, selon les fonctions prévues. Je traite les demandes des stores si elles arrivent.',
          bullets: [
        'Règles de l’App Store appliquées dès la conception',
        'Textes de permissions rédigés correctement',
        'Paiement conforme aux règles des stores',
        'Réponses aux refus, s’il y en a',
          ],
        },
        {
          num: '03',
          title: 'iPhone et Android ne se ressemblent pas',
          body:
        'Bouton retour, menus, notifications, partage : chaque système a ses habitudes. Je respecte celles de chacun, pour que l’application paraisse naturelle à vos utilisateurs des deux côtés.',
          bullets: [
        'Navigation propre à chaque système',
        'Notifications configurées pour iOS et Android',
        'Partage, appareil photo, fichiers',
        'Tailles d’écran et tablettes',
          ],
        },
        {
          num: '04',
          title: 'Tests sur de vrais appareils',
          body:
        'Un simulateur ne dit pas si l’app rame sur un Android à 150 €. Je teste sur des téléphones réels, récents et anciens, et vous recevez une version test installable sur le vôtre.',
          bullets: [
        'Version test TestFlight et Android',
        'Appareils anciens et récents',
        'Réseau lent et mode avion',
        'Suivi des plantages après publication',
          ],
        },
        {
          num: '05',
          title: 'Fiche store et visibilité',
          body:
        'Je prépare avec vous le nom, les captures, la description et les mots-clés demandés par les stores.',
          bullets: [
        'Captures d’écran par appareil',
        'Description et mots-clés',
        'Icône et visuels aux bons formats',
        'Fiche en français, et en anglais si besoin',
          ],
        },
        {
          num: '06',
          title: 'Entretenir l’application',
          body:
        'iOS, Android et les exigences des stores évoluent. Le suivi sert à vérifier la compatibilité de l’application et à planifier les adaptations nécessaires.',
          bullets: [
        'Mises à jour annuelles iOS et Android',
        'Dépendances tenues à jour',
        'Alertes de plantage traitées',
        'Périmètre et coût du suivi définis par écrit',
          ],
        },
      ],
      closing: [
        'Je développe en **React Native**, ce qui me permet de livrer les deux versions à partir d’un seul code. La page dédiée explique ce choix. Une application sur les deux stores démarre à **4 000 €** et se livre en **2 à 4 mois**, avec un prix fixé par écrit avant de commencer.',
        'Basé à Toulouse, je travaille aussi bien sur place qu’à distance.',
      ],
      crossLinks: [
        {
          title: 'Développement d’application mobile à Toulouse',
          href: '/developpement-application-mobile-toulouse',
          description: 'Les six chantiers d’une application, du cadrage à la publication.',
        },
        {
          title: 'Développeur React Native à Toulouse',
          href: '/developpeur-react-native-toulouse',
          description: 'Pourquoi un seul code pour les deux plateformes, et quand je le déconseille.',
        },
        {
          title: 'Logiciel sur mesure à Toulouse',
          href: '/logiciel-sur-mesure-toulouse',
          description: 'Quand le besoin est un outil interne plutôt qu’une application publique.',
        },
      ],
    },
    faqs: [
      {
        question: 'Combien de temps prend la validation par Apple ?',
        answer:
        'En général un à trois jours, parfois plus si Apple demande des précisions. Je prépare l’application pour éviter les motifs de refus les plus fréquents, et je réponds aux éventuelles demandes d’Apple à votre place.',
      },
      {
        question: 'Dois-je créer moi-même les comptes développeur ?',
        answer:
        'Je vous accompagne dans leur création. Ils sont ouverts à votre nom ou à celui de votre entreprise, et vous en gardez les accès. Les frais en vigueur sont réglés directement aux plateformes.',
      },
      {
        question: 'Que se passe-t-il si Apple refuse l’application ?',
        answer:
        'Je lis le motif du refus, corrige ce qui relève de mon travail et soumets une nouvelle version. Les éventuelles demandes des stores sont suivies jusqu’à la publication.',
      },
      {
        question: 'Combien coûte le maintien d’une application chaque année ?',
        answer:
        'Cela dépend de l’application ; je le chiffre au cadrage et vous le connaissez avant de signer. Le suivi couvre les mises à jour iOS et Android annuelles, les dépendances et les corrections, plus les frais de compte Apple et Google.',
      },
    ],
  },
]

export const trouverPageService = (slug: string) =>
  PAGES_SERVICE.find((page) => page.slug === slug)
