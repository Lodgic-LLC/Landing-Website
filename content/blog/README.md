# Blog Markdown

Chaque fichier `.md` de ce dossier devient automatiquement un article de blog.

## Format

- Nom du fichier = `slug` de l'article
- Frontmatter YAML obligatoire en haut du fichier
- Contenu en Markdown standard

## Frontmatter recommande

```yaml
---
title: "Titre de l'article"
date: "2026-04-17"
author: "Nom de l'auteur"
summary: "Resume court de l'article"
imageUrl: "https://..."
imageAlt: "Description image"
category: "Développement" # Développement | Design | SEO | Mobile | Web
tags:
  - tag1
  - tag2
---
```

## Exemple

`mon-nouvel-article.md` sera accessible sur `/blog/mon-nouvel-article`.
