export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  imageUrl: string
  imageAlt: string
  content: string // ou utiliser un type plus spécifique si vous parsez du Markdown
}
