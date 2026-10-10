import 'server-only'

import fs from 'node:fs'
import path from 'node:path'

const articlesDirectory = path.join(process.cwd(), 'content', 'blog')

export interface Article {
  slug: string
  title: string
  date: string
  summary: string
  category: string
  imageUrl?: string
  imageAlt?: string
  content: string
}

function readArticle(filename: string): Article {
  const source = fs.readFileSync(path.join(articlesDirectory, filename), 'utf8')
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source)
  if (!frontmatter) throw new Error(`Métadonnées manquantes dans ${filename}`)
  const fields = new Map<string, string>()
  for (const line of frontmatter[1].split(/\r?\n/)) {
    const field = /^([A-Za-z][\w]*):\s*(".*")$/.exec(line)
    if (field) fields.set(field[1], JSON.parse(field[2]) as string)
  }
  const content = source.slice(frontmatter[0].length)
  const required = (name: string) => {
    const value = fields.get(name)?.trim()
    if (!value) throw new Error(`Métadonnée ${name} manquante dans ${filename}`)
    return value
  }

  return {
    slug: required('slug'),
    title: required('title'),
    date: required('date'),
    summary: required('summary'),
    category: required('category'),
    imageUrl: fields.get('imageUrl'),
    imageAlt: fields.get('imageAlt'),
    content,
  }
}

export function getAllArticles(): Article[] {
  const articles = fs.readdirSync(articlesDirectory)
    .filter((filename) => filename.endsWith('.mdx') && filename.toLowerCase() !== 'readme.mdx')
    .map(readArticle)
  const slugs = new Set<string>()
  for (const article of articles) {
    if (slugs.has(article.slug)) throw new Error(`Slug d'article en double : ${article.slug}`)
    slugs.add(article.slug)
  }
  return articles.sort((a, b) => b.date.localeCompare(a.date))
}

export function getArticle(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug)
}
