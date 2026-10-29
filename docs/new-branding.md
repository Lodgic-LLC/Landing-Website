# Refonte Lodgic — feature/new-branding

Branche créée depuis `dev`. Cette version remplace la première adaptation essentiellement graphique par une refonte du positionnement, des offres et du parcours de décision.

## Analyse source

- [Audit détaillé de ForgeOne et adaptations](audit-forgeone-strategie.md).
- [Inventaire des 75 pages publiques examinées](forgeone-inventaire.md).

Le principe retenu : aider le visiteur à choisir une prochaine étape compréhensible. Aucun gain de conversion n’est présenté comme démontré sans données.

## Ce qui change

- Accueil : situations métier, première version utile, preuves contextualisées, services, méthode, responsabilités, budget et ressources pour décider.
- Cinq pages de prestations : situations adaptées, alternatives, périmètre, dépenses complémentaires, réalisation pertinente et prochaine étape contextualisée.
- Nouvelle page `/methode` : livrables, rôle du client, validations, accès et suivi après livraison.
- Guide de préparation : orientation interactive sans inscription, trois questions, quatre pistes et accès direct aux prestations. Trame existante conservée.
- Contact : deux champs indispensables, informations complémentaires facultatives, type de projet transmis depuis le guide ou les prestations, suite du premier échange expliquée.
- Formulaire : identifiants uniques, focus sur la première erreur, protection contre les doubles envois simultanés, succès applicatif exigé avant conversion.
- Blog et projets : liens vers la préparation et la prestation pertinente. Contenus préexistants conservés.
- Mesure : interactions marquées et événements du guide/formulaire soumis au consentement existant, sans contenu des messages dans les événements.
- Identité : vert profond, ivoire, tilleul et Manrope locale ; hiérarchie commune, captures de projets réels, descriptions disponibles sur mobile.
- Référencement : URL conservées, méthode dans le sitemap, données structurées de service et ressources publiques actualisées.

Aucun nouveau service externe ni dépendance. Tarifs de départ existants conservés. Les modalités définitives restent celles du devis. Pas de reprise des actifs ou des preuves commerciales de ForgeOne.

## Validation du 29 octobre 2026

- `npm run check` : ESLint et TypeScript.
- `node --test tests/parcours.test.mjs` : 18 combinaisons d’orientation, réponses incomplètes et acceptation/refus des réponses du service de formulaire.
- `npm run build -- --webpack` : compilation de production et génération de 46 pages ; `/contact` rendu à la demande pour prendre en compte le type de projet. Webpack utilisé à cause de la restriction locale rencontrée avec Turbopack.
- Vérification HTTP depuis 12 pages représentatives : 41 destinations internes, aucune erreur et aucune ancre manquante.
- Navigateur : accueil, prestations, méthode et contact sur ordinateur et téléphone ; huit pages à 320 px sans débordement horizontal, avec un H1 unique. Aucun message d’erreur console observé sur ces parcours.
- Guide : recommandations métier et web, réinitialisation, lien vers le contact et sélection préremplie vérifiés. Formulaire vide : erreurs affichées et focus email. Aucun email réel envoyé ; la livraison externe n’est donc pas testée de bout en bout.
- Contraste du panneau de prestations corrigé après contrôle visuel.
- `git diff --check`.

Le build signale une vulnérabilité connue de la version Next.js installée. Après son rappel, la relance termine avec succès ; la mise à jour de sécurité reste à traiter. Les résultats commerciaux, Core Web Vitals terrain et l’attribution publicitaire ne sont pas validés par ces contrôles locaux.

Les six articles MDX, la page de prix et le document d’audit Search Console déjà modifiés avant cette tâche restent hors du commit de refonte. Aucun push, fusion ou déploiement réalisé.
