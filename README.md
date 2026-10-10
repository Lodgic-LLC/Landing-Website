# Lodgic

Site vitrine de Lodgic, développé avec Next.js 16, React et TypeScript. Les textes et les données sont séparés des composants qui les affichent.

## Démarrer en local

~~~bash
npm ci
cp .env.example .env.local
npm run dev
~~~

Ouvrir http://localhost:3000. Si le port est occupé, Next.js peut en choisir un autre.

Le formulaire fonctionne avec FormSubmit. Renseigner NEXT_PUBLIC_FORM_ENDPOINT dans .env.local avec l’adresse Ajax du destinataire activé, sous la forme https://formsubmit.co/ajax/IDENTIFIANT. Sans cette variable, le formulaire affiche un message d’indisponibilité et propose l’adresse e-mail de contact. GOOGLE_SITE_VERIFICATION est facultatif en local ; il sert à la vérification du domaine dans Google Search Console. Ces variables doivent également être définies dans l’environnement du déploiement lorsqu’elles sont utilisées.

## Organisation

- src/app : routes, métadonnées et assemblage des pages. La page d’accueil assemble les sections de src/app/_sections.
- src/content : données éditoriales des prestations, projets et sections de l’accueil.
- content/blog : articles MDX et leurs métadonnées.
- src/components : composants de présentation et éléments interactifs réutilisés.
- src/lib : lecture des articles, constantes du site, SEO et suivi des événements.
- src/app/globals.css : styles partagés et styles des sections.
- public : images et autres fichiers statiques.

Les pages de prestation proviennent de src/content/pages-service.ts et sont rendues par src/app/[service]/page.tsx avec src/components/PageSeo.tsx. L’entrée d’une prestation fournit aussi ses métadonnées et son éventuel projet illustratif. Les articles sont lus par src/lib/blog.ts, puis affichés sur /blog et /blog/[slug]. Le sitemap reprend ces deux catalogues.

Pour ajouter un article, créer un fichier MDX dans content/blog avec slug, title, date, summary et category. Les catégories connues sont regroupées par thème sur /blog ; une nouvelle catégorie apparaît dans « Autres articles » jusqu’à son classement. Pour ajouter une réalisation détaillée, compléter src/content/projets.ts et créer sa route sous src/app/projets.

## Consentement et statistiques

La bannière de cookies est gérée par CookieConsentBanner. ConsentScripts ne charge Google Analytics, Google Ads et Ahrefs que pour les catégories acceptées. ConsentVercelAnalytics suit l’accord pour Vercel Analytics. Le bouton du pied de page rouvre les préférences.

## Vérifications

~~~bash
npm run check
npm run build
~~~

npm run check exécute ESLint et la vérification TypeScript. Avant un déploiement, vérifier aussi les pages principales sur ordinateur et téléphone ainsi que le formulaire avec un destinataire FormSubmit activé.

## Google Search Console

Le site publie /robots.txt et /sitemap.xml. Pour la vérification par balise HTML, définir GOOGLE_SITE_VERIFICATION avec le seul jeton fourni par Google, puis redéployer. Envoyer ensuite https://www.lodgic-dev.com/sitemap.xml dans Search Console.
