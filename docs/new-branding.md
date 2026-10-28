# Nouvelle identité Lodgic

Branche : `feature/new-branding`, créée depuis `dev`.

## Référence et interprétation

Site examiné le 28 octobre 2026 : https://www.forgeone.fr/

ForgeOne articule un premier écran fortement contrasté, une proposition immédiatement lisible, des preuves visibles, une méthode détaillée et des appels au contact répétés. Ces dispositifs facilitent la compréhension de l’offre et réduisent l’incertitude avant le contact. Ce sont des hypothèses de conception : nous n’avons pas accès à ses statistiques de conversion.

## Adaptation

- Vert profond, accent tilleul et ivoire : prolonger les couleurs de Lodgic avec davantage de contraste. La typographie Manrope, déjà locale, devient la famille des titres.
- Premier écran : conserver le positionnement et les textes de Yann ; présenter Alliance-TRAVAUX avec une capture réelle et sa mesure existante, reliée à l’étude de cas.
- Preuves : mettre en évidence les deux projets existants et conserver le témoignage attribué à Cyrille. Aucun logo, avis ou résultat de ForgeOne n’est repris.
- Services : trois cartes avec pictogrammes, descriptions et liens vers les prestations existantes.
- Méthode : quatre étapes numérotées avec des accordéons HTML natifs, accessibles au clavier sans JavaScript supplémentaire. La méthode précède la présentation personnelle.
- Mobile : conserver la navigation et rendre visibles les descriptions de services, mesures et explications tarifaires auparavant masquées. Les boutons de contact continuent d’utiliser le parcours existant.

Les textes commerciaux, tarifs, coordonnées, liens SEO et ressources de vérification sont conservés. Les styles de composition sont limités à l’accueil ; titres, boutons et en-tête partagent les fondations de marque sur les autres pages. Aucun service externe ni dépendance ajouté.

## Validation

- `npm run check` : lint et TypeScript.
- `npm run build -- --webpack` : compilation de production, génération des 45 pages réussie. Le build Turbopack par défaut rencontre une restriction locale de création de processus/port ; configuration du projet inchangée.
- Contrôles navigateur : accueil ordinateur et téléphone, absence de débordement mobile, ouverture des étapes et menu mobile.
- `git diff --check`.

Les modifications préexistantes du blog et de la page prix ne font pas partie de cette refonte.

Le build final a également signalé une vulnérabilité connue dans la version installée de Next.js. Il termine avec succès après ce rappel. Une mise à jour de sécurité reste à traiter séparément de la refonte graphique.
