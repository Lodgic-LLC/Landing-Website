# Audit Apple Design — 2 novembre 2026

Audit du site local sur la branche `dev`, fondé sur le skill `apple-design` d’Emil Kowalski. Les textes, les réalisations et les données commerciales restent inchangés. L’identité éditoriale existante (vert, tons crème, titres serif) est conservée : les principes du skill servent la réponse des interactions, la lisibilité et l’accès au contenu.

## Périmètre

35 pages parcourues dans le navigateur : accueil, réalisations, deux études de cas, cinq prestations, prix, reprise, préparation de projet, contact, index du blog, 17 articles et quatre pages légales. Contrôles de débordement horizontal et de titre principal sur chacune, aux largeurs CSS effectivement mesurées de 355 et 1309 px. Contrôle complémentaire du menu tablette à 800 px. Inspection visuelle ciblée de l’accueil, du contact, de la galerie et des menus.

## Problèmes corrigés

| Constat | Correction | Principe du skill |
| --- | --- | --- |
| L’accueil commence transparent et attend une animation de 600–820 ms avant d’être complètement lisible. | Suppression de l’animation d’arrivée du premier écran. | Réponse immédiate, retenue. |
| Un balayage dans la galerie ne produit aucun déplacement avant le relâchement ; les captures sont ensuite remplacées brutalement. | Défilement horizontal natif avec points d’arrêt CSS, élan du navigateur et interruption naturelle. Les vignettes et les touches fléchées, Début et Fin restent disponibles. | Manipulation directe, continuité, contrôle. |
| Le menu mobile apparaît en glissant mais disparaît instantanément. | Entrée et sortie suivant le même axe avec transitions discrètes du dialogue natif. Aucun délai JavaScript ne bloque l’entrée utilisateur. | Cohérence spatiale. |
| Descriptions de prestations, aide au choix, offre associée, détails du parcours professionnel et suivi après livraison sont masqués sur téléphone. | Restauration de ces contenus et du paragraphe sur la propriété du code et des comptes. | Simplicité et accès à l’information. |
| Certains textes courants mobiles descendent à 14–15 px. | Paragraphes principaux de l’accueil et des projets ramenés à 1 rem ; descriptions des services à 16 px. | Lisibilité. |
| La surbrillance tactile est supprimée globalement ; les boutons hors du contenu principal ne réagissent pas uniformément. | Surbrillance tactile et retour à l’appui sur les commandes principales. Liens du menu ordinateur d’au moins 44 px de hauteur. | Retour immédiat. |
| Les styles des flèches affectent aussi les libellés dans des éléments `span`, empêchant leur rétrécissement. | Styles de mouvement et de non-rétrécissement limités aux éléments décoratifs `aria-hidden`. | Robustesse du texte. |
| Les surfaces floutées ignorent la réduction de transparence et le contraste renforcé ; certains effets de survol subsistent en mouvement réduit. | Surfaces opaques et bordures renforcées selon les préférences ; suppression des déplacements concernés en mouvement réduit. | Adaptation aux préférences. |
| Les champs requis autres que l’e-mail ne sont validés qu’à l’envoi. | Validation à la sortie du champ, maintien du focus sur la première erreur et état occupé annoncé. Identifiants propres à chaque instance du formulaire. | Retour d’erreur contextualisé. |
| Le nettoyage des révélations au défilement laisse les classes de masquage en place. | Retrait des classes au nettoyage et réinitialisation liée au chemin courant. | Prévisibilité et visibilité. |

## Vérifications

- 35/35 pages : un titre H1 et aucun débordement horizontal global aux deux largeurs contrôlées.
- Menu mobile : ouverture, fermeture, Échap et retour du focus au bouton Menu vérifiés.
- Menu tablette : ouverture vérifiée à 800 px.
- Accordéons mobiles : les quatre étapes de la méthode et la première réponse de la FAQ s’ouvrent ; aucun débordement horizontal après ouverture.
- Menu ordinateur : ouverture vérifiée ; six cibles mesurées à 44 px de hauteur.
- Galerie Alliance-TRAVAUX : navigation par vignette et touches Début/Fin ; dernière capture et état sélectionné confirmés, puis retour à la première.
- Formulaire : soumission vide bloquée, trois erreurs exposées et focus sur le nom ; adresse invalide signalée avant envoi. Aucun message envoyé.
- `npm run check` : ESLint et TypeScript réussis.
- Compilation de production avec `npm run build -- --webpack` : réussie, 45 sorties statiques générées. Webpack utilisé après un plantage du cache Turbopack en développement ; aucune configuration de compilation du projet modifiée.
- `git diff --check` : réussi.

## Limites

Le contrôle visuel couvre les gabarits et les interactions principales ; les 35 pages ont fait l’objet de contrôles de structure et de débordement, pas d’une revue manuelle de chaque pixel. Les préférences de contraste, transparence et mouvement sont traitées dans le code mais n’ont pas été émulées dans le navigateur disponible. Le geste tactile natif reste à éprouver sur un téléphone physique. Pas de mesure Lighthouse nouvelle, de certification WCAG, de test avec lecteur d’écran ni de vérification de la réception réelle FormSubmit. Aucun déploiement effectué.

Les trois suppressions de documents déjà présentes au début de l’audit n’ont pas été modifiées. Le fichier `AGENTS.md` à la racine a été généré automatiquement par Next.js pendant le démarrage local.
