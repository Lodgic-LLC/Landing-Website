# Repartir du site de production et adapter la stratégie ForgeOne

Reprise du 1er novembre 2026, sur `feature/new-branding`.

## Base restaurée

Le commit `75ebc9f` annule les trois commits de refonte précédents. La présentation retrouve celle du site public : typographies, couleurs, navigation, compositions et captures de réalisations. Les changements SEO antérieurs et les fichiers déjà modifiés par Yann sont conservés. Le retour arrière et cette adaptation sont deux étapes séparées. Aucun déploiement n’a été effectué.

## Ce que l’analyse permet de conclure

L’accueil de [Lodgic](https://www.lodgic-dev.com/), l’[accueil de ForgeOne](https://www.forgeone.fr/) et sa page [création de site](https://www.forgeone.fr/creation-site) ont été revus pendant cette reprise. L’analyse approfondie précédente reste une source : [inventaire des 75 URL observées le 28 octobre](forgeone-inventaire.md), comprenant les pages commerciales, méthode, ressources, contact, cas clients et modèles éditoriaux. Cet inventaire est historique, pas un nouveau contrôle exhaustif du 1er novembre.

Nous pouvons identifier des mécanismes cohérents ; nous ne connaissons ni les ventes ni les taux de conversion de ForgeOne. Leur efficacité commerciale reste une hypothèse à mesurer pour Lodgic.

## Principes retenus et application

| Principe observé | Pourquoi il aide à décider | Adaptation réellement livrée |
| --- | --- | --- |
| Un positionnement qui relie les prestations à un résultat | Le visiteur reconnaît son problème avant de comparer les technologies. | Introduction de l’accueil centrée sur demandes, usages et travail d’équipe ; un besoin explicite par prestation. |
| Créer ou améliorer l’existant | Une refonte ne constitue pas toujours la bonne dépense. | Chaque service propose un repère de choix : réparation du site, web mobile plutôt qu’app, logiciel existant plutôt que sur-mesure. |
| Rendre le périmètre concret | Le visiteur comprend ce qui doit être défini avant le prix. | Cinq pages de services détaillent première version, alternative et coûts/dépendances à prévoir. Les tarifs existants restent inchangés. |
| Rapprocher la preuve de la décision | Un exemple vérifiable donne du contexte à la prestation. | L’exemple de projet, quand il existe, précède l’expertise technique. Les mesures de chargement sont qualifiées « ordinateur ». |
| Utiliser le contenu pour répondre aux objections | Un article sert la décision plutôt que la seule récence. | L’accueil sélectionne trois articles existants : format, budget, déroulement. Les trois restent visibles sur mobile. |
| Offrir une suite à la lecture | Un lecteur peut passer de l’information à la description de son cas. | Les articles proposent la préparation du projet et le contact. |
| Expliquer le premier contact | La personne sait à quoi elle s’engage et ce qui suit. | Accueil, services et page contact présentent trois étapes : comprendre, choisir la suite, décider sur devis. |

## Ce qui était déjà pertinent chez Lodgic

Le site public possède déjà des preuves réelles, un avis client, des prix de départ, une méthode, une trame de préparation et des coordonnées directes. Ces éléments sont conservés. La nouvelle adaptation les complète ; elle ne crée pas artificiellement une nouvelle gamme d’offres.

Le positionnement de ForgeOne porte sur l’acquisition. Celui de Lodgic reste le développement web, mobile et métier avec Yann comme interlocuteur. Les outils gratuits et l’audit payant de ForgeOne illustrent plusieurs degrés d’engagement ; la trame existante de Lodgic remplit ici le rôle de première aide, sans ajouter un tunnel ou collecter davantage de données.

## Limites de la transposition

Pas de reprise de marque, d’illustrations ou de textes de ForgeOne. Pas d’audit payant inventé, de chiffres de conversion, de promesse SEO, de délai de réponse garanti ou de cas natif mobile fictif. Les pages locales et sectorielles de ForgeOne ne justifient pas de multiplier des pages similaires chez Lodgic. Les choix d’indexation observés sur leurs cas clients ne sont pas reproduits.

Les couleurs et compositions de production sont conservées, sans nouvelle famille de cartes décoratives. Les ajouts utilisent des textes, séparateurs et accordéons natifs. Les routes existantes restent stables ; la route expérimentale `/methode` est retirée avec la refonte, tandis que la section de méthode d’origine demeure.

## Vérification et suite

Validation effectuée : `npm run check`, `npm run build -- --webpack` et `git diff --check` réussis. Accueil contrôlé sur ordinateur et à 390 px ; page de prestation et contact contrôlés jusqu’à 320 px, sans débordement horizontal observé. Les trois lectures sont présentes, le repère de choix s’ouvre et le formulaire reste accessible. Aucun message réel envoyé. Next.js installé signale une vulnérabilité connue : mise à jour à traiter avant publication.

Après une éventuelle publication autorisée, comparer sur des périodes et sources comparables les demandes réellement reçues, leur adéquation aux services et les pages d’entrée. Un clic n’est pas une vente. Aucune amélioration de conversion n’est revendiquée sans ces observations.
