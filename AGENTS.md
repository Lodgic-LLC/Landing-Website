<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Lodgic — repères de travail

Ce dépôt contient le site vitrine français de Lodgic, construit avec Next.js 16, React et TypeScript. Le professionnel est basé à Toulouse. Le contenu publié, les réalisations et les avis clients doivent rester factuels.

## Lire selon la tâche

- Page d’accueil : `src/app/page.tsx`, `src/app/_sections/`, puis `src/content/accueil.ts` et `src/content/projets.ts` pour les données.
- Prestations : `src/content/pages-service.ts`, `src/app/[service]/page.tsx` et `src/components/PageSeo.tsx`.
- Blog : `content/blog/*.mdx`, `src/lib/blog.ts` et `src/app/blog/` (le classement des thèmes se trouve dans `src/app/blog/page.tsx`).
- Réalisations : `src/content/projets.ts`, `src/components/PageProjet.tsx` et les routes sous `src/app/projets/`.
- Mobile et présentation : `src/app/globals.css`, `src/app/mobile-app.css` et les composants concernés.
- Référencement : métadonnées des pages, `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts` et fichiers publics de vérification.

Le `README.md` décrit le démarrage, les variables d’environnement et l’organisation générale. Lire seulement les parties utiles à la tâche en cours.

## Règles du projet

- Pour une demande de design, conserver les textes existants sauf instruction explicite. Vérifier le résultat sur ordinateur et sur mobile.
- Modifier les données éditoriales dans `src/content/` ou `content/blog/` plutôt que les recopier dans plusieurs composants.
- Ne pas inventer de témoignage, de chiffre, de résultat commercial ou de promesse SEO. Préserver les liens et fichiers de vérification des moteurs de recherche.
- Garder `.env.local`, les permissions personnelles et les fichiers générés hors de Git. Ne supprimer une ressource publiée qu’après avoir vérifié qu’aucune page ne l’utilise.
- Travailler sur `dev`. Présenter la portée d’une nouvelle étape avant de la commencer ; une demande explicite du propriétaire vaut validation pour cette étape. Demander une validation distincte avant un push, une fusion vers `main` ou un déploiement si ces actions ne sont pas déjà demandées.

## Vérifier

Exécuter `npm run check` après une modification de code et `npm run build` après une modification des routes, contenus ou ressources livrées. Contrôler `git diff --check` et le rendu concerné avant de conclure.
