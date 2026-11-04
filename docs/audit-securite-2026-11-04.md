# Audit de sécurité — 4 novembre 2026

## Périmètre

Revue des dépendances npm verrouillées, des avis officiels Next.js et React, des fichiers suivis par Git et des points d'entrée du site (formulaire de contact, contenu MDX et en-têtes HTTP).

## Correctifs appliqués

- Next.js 16.4.3 → 16.4.5. Cette version corrige plusieurs vulnérabilités de cache, de traitement des réponses et d'optimisation des images publiées le 3 novembre : https://github.com/vercel/next.js/releases/tag/v16.4.5
- React et React DOM 19.2.8 → 19.3.1. L'avis React Server Components recommande les versions corrigées 19.2.9 ou 19.3.1 : https://github.com/react/react/security/advisories/GHSA-xqc2-xf4c-x3h3
- Le formulaire de contact limite désormais à 12 000 octets la lecture effective du corps de chaque requête, y compris sans en-tête `Content-Length`. Il refuse également les types de contenu qui ne sont pas `application/json`.

## Vérifications

- `npm audit --json` : 0 vulnérabilité connue parmi 497 dépendances déclarées, après mise à jour.
- `npm run check` et `npm run build` : réussis.
- Requêtes locales au formulaire : envoi avec honeypot accepté, JSON invalide refusé en 400, corps trop volumineux refusé en 413 avec et sans `Content-Length`.
- Recherche de secrets usuels dans les fichiers suivis : aucun résultat.

## Points à suivre

- Le formulaire public peut toujours recevoir des requêtes automatisées répétées : le honeypot ne remplace pas une limitation de débit durable. Une règle de limitation au niveau de l'hébergement ou du pare-feu applicatif est recommandée, car une limite en mémoire serait inefficace entre plusieurs instances serveur.
- La politique CSP autorise les scripts intégrés (`unsafe-inline`). Un durcissement par nonce ou empreintes demanderait une adaptation du rendu statique et des scripts tiers.
- `npm audit signatures` n'a pas pu terminer : la clé publique associée à la signature de `eslint-plugin-jsx-a11y@6.10.2` est expirée. Ce résultat n'est pas une alerte de vulnérabilité du paquet.

Cette revue porte sur les vulnérabilités connues et les chemins de code inspectés à cette date ; elle ne garantit pas l'absence de vulnérabilité inconnue.
