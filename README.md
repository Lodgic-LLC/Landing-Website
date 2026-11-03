# Lodgic

Site vitrine de Lodgic, développé avec Next.js 16, React et TypeScript. Les textes et les données sont séparés des composants qui les affichent.

## Démarrer en local

~~~bash
npm ci
cp .env.example .env.local
npm run dev
~~~

Ouvrir http://localhost:3000. Si le port est occupé, Next.js peut en choisir un autre.

Le formulaire envoie les demandes via la boîte professionnelle Hostinger depuis la route serveur `/api/contact`. Dans `.env.local`, renseigner `SMTP_PASSWORD` avec le mot de passe de la boîte `contact@lodgic-dev.com` (ou un mot de passe d’application Hostinger) ; `SMTP_USER`, `SMTP_HOST` et `SMTP_PORT` sont indiqués dans `.env.example`. Pour Titan Email, utiliser `smtp.titan.email` comme serveur. Le mot de passe ne doit jamais être ajouté au dépôt ; définir les mêmes variables dans l’environnement du déploiement Vercel. `GOOGLE_SITE_VERIFICATION` est facultatif en local ; il sert à la vérification du domaine dans Google Search Console.

## Organisation

- src/app : routes, métadonnées et assemblage des pages. La page d’accueil assemble les sections de src/app/_sections.
- src/content : données éditoriales des prestations, projets et sections de l’accueil.
- content/blog : articles MDX et leurs métadonnées.
- src/components : composants de présentation et éléments interactifs réutilisés.
- src/lib : lecture des articles, constantes du site, SEO et suivi des événements.
- src/fonts : polices du site, versions pour les images de partage et licences ; voir son README pour la régénération.
- src/app/globals.css : styles partagés et styles des sections.
- public/images : illustrations des articles ; public/projets : captures des réalisations.
- public/ressources : document téléchargeable ; les autres fichiers de public comprennent les icônes, manifestes et vérifications des moteurs de recherche.
- docs : analyses et décisions sur le contenu et le référencement.
- .agents : consignes de travail destinées aux assistants de code.

Les pages de prestation proviennent de src/content/pages-service.ts et sont rendues par src/app/[service]/page.tsx avec src/components/PageSeo.tsx. L’entrée d’une prestation fournit aussi ses métadonnées et son éventuel projet illustratif. Les articles sont lus par src/lib/blog.ts, puis affichés sur /blog et /blog/[slug]. Le sitemap reprend ces deux catalogues.

Pour ajouter un article, créer un fichier MDX dans content/blog avec slug, title, date, summary et category. Les catégories connues sont regroupées par thème sur /blog ; une nouvelle catégorie apparaît dans « Autres articles » jusqu’à son classement. Pour ajouter une réalisation détaillée, compléter src/content/projets.ts et créer sa route sous src/app/projets.

## Consentement et statistiques

La bannière de cookies est gérée par CookieConsentBanner. ConsentScripts ne charge Google Analytics, Google Ads et Ahrefs que pour les catégories acceptées. ConsentVercelAnalytics suit l’accord pour Vercel Analytics. Le bouton du pied de page rouvre les préférences.

## Vérifications

~~~bash
npm run check
npm run build
npm audit
~~~

npm run check exécute ESLint et la vérification TypeScript ; npm audit contrôle les dépendances auprès du registre npm. Avant un déploiement, vérifier aussi les pages principales sur ordinateur et téléphone ainsi que la réception d’un message de test dans la boîte Hostinger.

## Google Search Console

Le site publie /robots.txt et /sitemap.xml. Pour la vérification par balise HTML, définir GOOGLE_SITE_VERIFICATION avec le seul jeton fourni par Google, puis redéployer. Envoyer ensuite https://www.lodgic-dev.com/sitemap.xml dans Search Console.
