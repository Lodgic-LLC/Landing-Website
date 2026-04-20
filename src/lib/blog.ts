import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'
import type { BlogPost, BlogPostMeta } from '@/types/blog'

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

type BlogCategory = BlogPost['category']

interface BlogFrontmatter {
  slug?: string
  title?: string
  date?: string
  author?: string
  summary?: string
  imageUrl?: string
  imageAlt?: string
  tags?: string[]
  category?: string
  popular?: boolean
}

const allowedCategories: BlogCategory[] = ['Développement', 'Design', 'SEO', 'Mobile', 'Web']

const normalizeCategory = (value: string | undefined): BlogCategory => {
  if (!value) return 'Web'
  return allowedCategories.includes(value as BlogCategory) ? (value as BlogCategory) : 'Web'
}

const isMarkdownFile = (filename: string): boolean => {
  return (filename.endsWith('.md') || filename.endsWith('.mdx')) && filename.toLowerCase() !== 'readme.md'
}

const ensureBlogDirectoryExists = (): void => {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true })
  }
}

const looksLikeHtml = (body: string): boolean => {
  return /<\w+[\s>\/]/.test(body.trim().slice(0, 200))
}

const renderContent = (body: string): string => {
  if (looksLikeHtml(body)) {
    return body
  }
  return marked.parse(body, { async: false }) as string
}

const parseMarkdownFile = (filename: string): BlogPost => {
  const slugFromFile = filename.replace(/\.(md|mdx)$/i, '')
  const filePath = path.join(BLOG_CONTENT_DIR, filename)
  const rawFile = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(rawFile)
  const frontmatter = data as BlogFrontmatter

  const html = renderContent(content)

  return {
    slug: frontmatter.slug ?? slugFromFile,
    title: frontmatter.title ?? slugFromFile,
    date: frontmatter.date ?? new Date().toISOString().slice(0, 10),
    author: frontmatter.author ?? "L'équipe Lodgic",
    summary: frontmatter.summary ?? '',
    imageUrl: frontmatter.imageUrl ?? '/images/hero-app-development.jpg',
    imageAlt: frontmatter.imageAlt ?? frontmatter.title ?? slugFromFile,
    tags: frontmatter.tags ?? [],
    category: normalizeCategory(frontmatter.category),
    popular: Boolean(frontmatter.popular),
    content: html,
  }
}

const toMeta = (post: BlogPost): BlogPostMeta => {
  const { content: _content, ...meta } = post
  void _content
  return meta
}

const sortByDateDesc = <T extends { date: string }>(items: T[]): T[] => {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

let cachedPosts: BlogPost[] | null = null

const loadAllPosts = (): BlogPost[] => {
  if (cachedPosts) return cachedPosts

  ensureBlogDirectoryExists()
  const files = fs.readdirSync(BLOG_CONTENT_DIR).filter(isMarkdownFile)
  const posts = sortByDateDesc(files.map(parseMarkdownFile))

  if (process.env.NODE_ENV === 'production') {
    cachedPosts = posts
  }

  return posts
}

export const getAllPosts = (): BlogPostMeta[] => {
  return loadAllPosts().map(toMeta)
}

export const getAllPostsFull = (): BlogPost[] => {
  return loadAllPosts()
}

export const getPostBySlug = (slug: string): BlogPost | null => {
  const post = loadAllPosts().find((p) => p.slug === slug)
  return post ?? null
}

export interface PaginatedPosts {
  posts: BlogPostMeta[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

export interface PaginationOptions {
  excludeSlugs?: string[]
}

export const getPaginatedPosts = (
  page: number,
  perPage: number,
  options: PaginationOptions = {}
): PaginatedPosts => {
  const excluded = new Set(options.excludeSlugs ?? [])
  const allMeta = getAllPosts().filter((p) => !excluded.has(p.slug))
  const total = allMeta.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * perPage
  const posts = allMeta.slice(start, start + perPage)

  return { posts, total, page: safePage, perPage, totalPages }
}

export const getPopularPosts = (): BlogPostMeta[] => {
  return getAllPosts().filter((p) => p.popular === true)
}

export const getAllSlugs = (): string[] => {
  return loadAllPosts().map((p) => p.slug)
}
