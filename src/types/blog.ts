export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  imageUrl: string
  imageAlt: string
  content: string // ou utiliser un type plus spécifique si vous parsez du Markdown
  tags?: string[] // Tableau optionnel de tags pour l'article
  category: 'Développement' | 'Design' | 'SEO' | 'Mobile' | 'Web' // Catégorie de l'article
}
