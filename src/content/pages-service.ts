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
        'Développeur indépendant à Toulouse : je crée votre site internet sur mesure, rapide et trouvé sur Google, à partir de 1 500 €. Vous modifiez vos textes vous-même. Livraison en 3 à 5 semaines.',
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
      eyebrow: 'Site internet · Toulouse',
      title: 'Création de site internet à Toulouse',
      highlight: 'un site qui vous apporte des clients, pas juste une adresse',
      description:
        'Un site qui explique ce que vous faites, se charge vite sur un téléphone, remonte sur Google quand on cherche votre métier à Toulouse, et amène les visiteurs à vous écrire ou à vous appeler. C’est ce que je construis, sur mesure, **à partir de 1 500 €**.',
      badges: ['À partir de 1 500 €', '3 à 5 semaines', 'Trouvé sur Google', 'Vous modifiez vos textes', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Ce que comprend un site',
      heading: 'Un site sérieux, ce n’est pas **un modèle rempli en une soirée**.',
      intro:
        'Les sites à 300 € existent. Ils se ressemblent tous, ils sont lents, et Google ne les montre à personne. Voici ce que je fais différemment, et pourquoi ça change le nombre d’appels que vous recevez.',
      cards: [
        {
          num: '01',
          title: 'Pensé pour convertir',
          body:
        'Votre visiteur doit comprendre en cinq secondes ce que vous faites, pour qui, et comment vous joindre. Je construis chaque page autour de cette question, pas autour d’un joli visuel.',
          bullets: [
        'Message clair dès le premier écran',
        'Téléphone et formulaire toujours accessibles',
        'Preuves visibles : réalisations, avis, garanties',
        'Parcours testé sur téléphone',
          ],
        },
        {
          num: '02',
          title: 'Trouvé sur Google à Toulouse',
          body:
        'Structure des pages, textes, vitesse, données que Google lit : je construis le site pour qu’il remonte sur « votre métier + Toulouse ». Et je vous explique quoi faire de votre fiche Google.',
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
        'Plus de la moitié de vos visiteurs viennent d’un téléphone, souvent en 4G. Un site qui met quatre secondes à s’afficher a déjà perdu. Je vérifie le temps de chargement à la livraison.',
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
        'Changer un prix, ajouter une photo, publier une actualité : vous le faites vous-même, sans me payer pour chaque virgule. Je vous forme en une heure à la livraison.',
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
        'Un formulaire qui arrive dans votre boîte mail, avec les bonnes questions posées dès le départ, pour que vous rappeliez un prospect déjà qualifié.',
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
        'Votre site date, il n’est pas lisible sur mobile, ou l’agence qui l’a fait n’existe plus ? Je le refais en gardant ce qui marche — et vos positions Google, grâce aux redirections.',
          bullets: [
        'Audit de l’existant',
        'Redirections pour ne rien perdre sur Google',
        'Reprise du nom de domaine et des e-mails',
        'Migration des contenus utiles',
          ],
        },
      ],
      closing: [
        'Un site vitrine démarre à **1 500 €** et se livre en **3 à 5 semaines**. Le prix dépend du nombre de pages et des fonctions (prise de rendez-vous, espace client, catalogue) : il est fixé par écrit après un premier échange, et il ne bouge pas ensuite.',
        'Le site d’**Alliance-TRAVAUX**, un collectif d’artisans toulousains, est un exemple de ce que je livre : 25 pages, formulaire de devis, référencement local sur 16 communes.',
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
        'À partir de 1 500 € pour un site vitrine de quelques pages avec formulaire de contact. Un site avec prise de rendez-vous, espace client ou catalogue coûte plus ; je vous donne un prix ferme par écrit après un premier échange.',
      },
      {
        question: 'Combien de temps pour créer un site ?',
        answer:
        'Entre 3 et 5 semaines pour un site vitrine, à partir du moment où j’ai vos textes et vos photos. Vous voyez le site avancer sur un lien privé et vous corrigez au fur et à mesure.',
      },
      {
        question: 'Serai-je premier sur Google ?',
        answer:
        'Personne ne peut le promettre honnêtement. Ce que je garantis : un site construit selon ce que Google attend (structure, vitesse, données structurées, une page par prestation), et des conseils pour votre fiche Google Business, qui pèse beaucoup pour une recherche locale.',
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
        'Développeur indépendant à Toulouse, ingénieur en informatique : je conçois et développe votre application iPhone et Android, de l\'idée à la publication sur les stores. À partir de 6 000 €, prix fixé par écrit avant de commencer.',
    keywords: [
        'développement application mobile Toulouse',
        'développeur application mobile Toulouse',
        'création application mobile Toulouse',
        'application iOS Android Toulouse',
        'développeur mobile freelance Toulouse',
        'prix application mobile',
    ],
    hero: {
      eyebrow: 'Application mobile · Toulouse',
      title: 'Développement d\'application mobile à Toulouse',
      highlight: 'de l\'idée à l\'application publiée',
      description:
        'Vous avez une idée d’application, ou un besoin terrain que vos équipes règlent aujourd’hui avec des messages et des photos. Je la conçois et je la développe pour **iPhone et Android**, puis je la publie sur les stores. Un seul interlocuteur, un prix fixé à l’avance.',
      badges: ['iPhone et Android', 'À partir de 6 000 €', '2 à 4 mois', 'Publication sur les stores', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Ce que comprend le développement',
      heading: 'Une application mobile, c’est **six chantiers**. Je les prends tous.',
      intro:
        'Beaucoup de projets d’application s’arrêtent parce qu’on n’avait budgété que l’écran. Voici ce qu’il faut réellement pour qu’une app fonctionne, soit acceptée par les stores et reste utilisable dans deux ans.',
      cards: [
        {
          num: '01',
          title: 'Cadrage et maquettes',
          body:
        'On liste ce que l’application doit faire, par ordre d’importance. Je dessine les écrans principaux avant de coder : vous voyez le parcours et vous corrigez tant que c’est gratuit de le faire.',
          bullets: [
        'Périmètre écrit et validé ensemble',
        'Maquettes des écrans clés',
        'Estimation ferme et planning',
        'Ce qu’on garde pour une version 2',
          ],
        },
        {
          num: '02',
          title: 'Développement iPhone et Android',
          body:
        'Je développe en React Native : un seul code pour les deux plateformes, donc un coût et un délai presque divisés par deux, sans application au rabais. Les deux versions évoluent en même temps.',
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
        'Hébergement en Europe, conforme RGPD',
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
        'Votre app existe déjà mais plus personne ne sait la maintenir ? Je l’audite, je vous dis ce qui est récupérable, et je la reprends ou je la refais — en vous disant lequel coûte le moins cher.',
          bullets: [
        'Audit du code et des dépendances',
        'Remise à niveau iOS et Android',
        'Reprise ou refonte, chiffrées toutes les deux',
        'Passation documentée',
          ],
        },
      ],
      closing: [
        'Une application mobile simple démarre à **6 000 €** et se livre en **2 à 4 mois**. Le montant exact est fixé par écrit après le cadrage, avant la première ligne de code — il ne bouge pas en cours de route, sauf si vous changez le périmètre.',
        'Je suis basé à Toulouse : on peut se voir pour le cadrage, puis tout se passe en visio et sur un lien de test que vous ouvrez sur votre téléphone. Je travaille aussi entièrement à distance pour des clients ailleurs en France.',
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
        'À partir de 6 000 € pour une application simple, iPhone et Android compris. Le prix dépend du nombre d’écrans, des fonctions (paiement, notifications, hors-ligne) et du serveur nécessaire. Il est fixé par écrit après le cadrage et ne change pas ensuite.',
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
        'À vous. Les comptes développeur Apple et Google sont ouverts au nom de votre entreprise, le code vous est remis avec sa documentation, et un autre développeur peut le reprendre.',
      },
    ],
  },
  {
    slug: 'logiciel-sur-mesure-toulouse',
    name: 'Logiciel sur mesure à Toulouse',
    description:
        'Développeur indépendant à Toulouse : je conçois le logiciel métier qui remplace vos tableurs et vos ressaisies — planning, suivi de dossiers, devis, tableau de bord. À partir de 4 000 €, connecté à vos outils actuels.',
    keywords: [
        'logiciel sur mesure Toulouse',
        'développement logiciel sur mesure',
        'logiciel métier Toulouse',
        'application web sur mesure Toulouse',
        'outil de gestion sur mesure',
        'développeur logiciel Toulouse',
    ],
    hero: {
      eyebrow: 'Logiciel métier · Toulouse',
      title: 'Logiciel sur mesure à Toulouse',
      highlight: 'l’outil qui fait exactement ce que votre activité demande',
      description:
        'Vous gérez votre activité avec trois tableurs, des mails et une bonne mémoire. Ça marche, jusqu’au jour où ça ne marche plus. Je développe l’outil qui correspond à **votre façon de travailler** — pas un logiciel générique auquel il faudrait vous adapter.',
      badges: ['À partir de 4 000 €', 'Remplace les tableurs', 'Connecté à vos outils', 'Accessible partout', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Ce que comprend un logiciel métier',
      heading: 'Du tableur partagé à **l’outil qui tient la route**.',
      intro:
        'Un logiciel sur mesure n’est pas réservé aux grandes entreprises. Une TPE de cinq personnes qui perd deux heures par jour en ressaisies rentabilise le sien en quelques mois. Voici comment je procède.',
      cards: [
        {
          num: '01',
          title: 'Comprendre votre façon de travailler',
          body:
        'Je commence par observer comment vous faites aujourd’hui — les fichiers, les étapes, les cas particuliers. L’outil doit épouser votre process, pas l’inverse.',
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
        'Données personnelles conformes au RGPD',
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
          title: 'Évoluer sans tout casser',
          body:
        'Votre activité change, l’outil doit suivre. Je construis le logiciel pour qu’on puisse y ajouter une fonction dans un an sans toucher au reste — et vous en êtes propriétaire.',
          bullets: [
        'Ajouts par étapes, chiffrés à chaque fois',
        'Code documenté, reprenable par un autre',
        'Vous êtes propriétaire du code et des données',
        'Sauvegardes automatiques',
          ],
        },
      ],
      closing: [
        'Un logiciel métier démarre à **4 000 €** pour un outil simple — un suivi de dossiers avec quelques écrans, par exemple. Le prix exact est fixé par écrit après le cadrage. Je livre par étapes : vous utilisez une première version utile rapidement, et on complète ensuite.',
        '**BewasBeen**, une plateforme pour enseignants avec gestion de classes, exercices et suivi par élève, montre ce type de construction : des rôles distincts, des données structurées, des exports — et un usage quotidien par des gens qui ne sont pas informaticiens.',
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
        'Un outil simple démarre à 4 000 €. Si vous ou vos salariés perdez une heure par jour en ressaisies, en recherches dans des tableurs ou en erreurs à rattraper, faites le calcul sur un an : c’est souvent rentabilisé en quelques mois.',
      },
      {
        question: 'Pourquoi ne pas prendre un logiciel du commerce ?',
        answer:
        'Si un logiciel existant fait 90 % de ce qu’il vous faut, prenez-le — je vous le dirai au premier échange. Le sur mesure se justifie quand votre façon de travailler ne rentre dans aucune case, ou quand les abonnements cumulés coûtent plus cher qu’un outil à vous.',
      },
      {
        question: 'Combien de temps faut-il ?',
        answer:
        'Quelques semaines pour une première version utile, selon le périmètre. Je livre par étapes pour que vous commenciez à vous en servir tôt, et le cadrage fixe le calendrier précis avant de démarrer.',
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
      eyebrow: 'React Native · Toulouse',
      title: 'Développeur React Native à Toulouse',
      highlight: 'une application, deux plateformes, un seul code',
      description:
        'React Native permet de développer **une seule fois** pour iPhone et Android. C’est ce que j’utilise pour la plupart des applications que je livre — et je vous explique ici pourquoi, ce que ça vous fait gagner, et les rares cas où je vous le déconseillerais.',
      badges: ['React Native · Expo', 'TypeScript', 'iPhone et Android', 'Correctifs sans passer par les stores', 'Reprise d’app existante'],
    },
    expertise: {
      eyebrow: 'Pourquoi React Native',
      heading: 'Ce que React Native change pour vous, **concrètement**.',
      intro:
        'Ce n’est pas un choix de développeur pour se faire plaisir : c’est ce qui divise le budget et le délai par presque deux, tout en gardant une application que vos utilisateurs ne distinguent pas d’une app classique.',
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
        'Avec Expo, je peux corriger un texte ou un bug sans repasser par la validation d’Apple, qui prend parfois plusieurs jours. Vos utilisateurs ont la correction à la prochaine ouverture.',
          bullets: [
        'Petits correctifs déployés sans attente',
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
        'Gestes et animations fluides',
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
        'Vous avez déjà une application React Native développée par quelqu’un d’autre ? Je l’audite, je mets à jour ses dépendances et je reprends la maintenance — ou je vous dis honnêtement si elle est à refaire.',
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
        'Une application React Native démarre à **6 000 €** et se livre en **2 à 4 mois**. Le prix est fixé par écrit au cadrage.',
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
        'Non. React Native produit une application installée depuis les stores, qui utilise les composants réels du téléphone. Des applications utilisées par des millions de personnes sont construites ainsi. La différence se joue sur des cas très spécifiques — jeux 3D, traitement vidéo lourd — que je vous signale au cadrage.',
      },
      {
        question: 'Peut-on publier sur l’App Store et Google Play avec React Native ?',
        answer:
        'Oui, exactement comme n’importe quelle application. Je m’occupe des comptes développeur, de la fiche et de la validation d’Apple. Les mises à jour importantes passent par les stores ; les petits correctifs peuvent être déployés directement.',
      },
      {
        question: 'Que se passe-t-il quand Apple ou Google change quelque chose ?',
        answer:
        'Chaque année, les systèmes évoluent et une application doit suivre pour rester en ligne. Je prévois ces mises à jour dans le suivi, et je vous dis à l’avance ce qu’elles coûtent. Rien ne vous tombe dessus sans prévenir.',
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
      eyebrow: 'App Store et Google Play · Toulouse',
      title: 'Développement d\'application iOS et Android',
      highlight: 'et tout ce qu’il faut pour être publié',
      description:
        'Développer l’application est une chose ; la faire accepter par Apple, la publier sur Google Play et la garder en ligne malgré les mises à jour des systèmes en est une autre. Voici ce que je prends en charge, **de bout en bout**.',
      badges: ['App Store', 'Google Play', 'Validation Apple', 'Mises à jour iOS et Android', 'Toulouse et à distance'],
    },
    expertise: {
      eyebrow: 'Publier, et rester publié',
      heading: 'Ce qui se passe entre « l’app est finie » et **« l’app est dans le store »**.',
      intro:
        'C’est l’étape que les devis oublient et qui fait perdre des semaines : comptes développeur, règles d’Apple, fiches, permissions, tests sur appareils. Je la connais et je la prends en charge.',
      cards: [
        {
          num: '01',
          title: 'Comptes développeur',
          body:
        'Apple et Google exigent chacun un compte, avec des justificatifs d’entreprise et des frais. Je les crée à votre nom — l’application vous appartient, pas à moi — et je vous explique ce qu’il faut renouveler.',
          bullets: [
        'Compte Apple Developer (99 $ par an)',
        'Compte Google Play (25 $ une fois)',
        'Ouverts au nom de votre entreprise',
        'Vous gardez tous les accès',
          ],
        },
        {
          num: '02',
          title: 'Les règles d’Apple et de Google',
          body:
        'Apple refuse des applications tous les jours : bouton de suppression de compte manquant, permissions mal expliquées, paiement hors des règles. Je conçois l’application pour passer du premier coup.',
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
        'Nom, captures d’écran, description, mots-clés : la fiche fait la moitié des téléchargements. Je la prépare avec vous, en pensant à ce que vos clients tapent réellement.',
          bullets: [
        'Captures d’écran par appareil',
        'Description et mots-clés',
        'Icône et visuels aux bons formats',
        'Fiche en français, et en anglais si besoin',
          ],
        },
        {
          num: '06',
          title: 'Rester en ligne dans deux ans',
          body:
        'Chaque automne, iOS et Android changent. Une application jamais mise à jour finit par planter ou par être retirée. Je prévois ces mises à jour, et je vous dis à l’avance ce qu’elles coûtent.',
          bullets: [
        'Mises à jour annuelles iOS et Android',
        'Dépendances tenues à jour',
        'Alertes de plantage traitées',
        'Forfait de suivi clair, sans surprise',
          ],
        },
      ],
      closing: [
        'Je développe en **React Native**, ce qui me permet de livrer les deux versions à partir d’un seul code — le détail est sur la page dédiée. Le résultat : une application sur les deux stores à partir de **6 000 €**, en **2 à 4 mois**, avec un prix fixé par écrit avant de commencer.',
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
        'Non, je m’en charge, mais ils sont ouverts au nom de votre entreprise et vous en gardez les accès. Comptez 99 $ par an chez Apple et 25 $ une fois chez Google, réglés directement par vous.',
      },
      {
        question: 'Que se passe-t-il si Apple refuse l’application ?',
        answer:
        'Un refus indique précisément la règle concernée. Je corrige et je resoumets, sans coût supplémentaire pour vous quand le motif relève de mon travail. C’est rare quand les règles sont appliquées dès la conception.',
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
