export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  imageUrl: string
  imageAlt: string
  category: 'Développement' | 'Design' | 'SEO' | 'Mobile' | 'Web'
  popular?: boolean
  tags?: string[]
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

export type PostMeta = BlogPostMeta
export type Post = BlogPost
