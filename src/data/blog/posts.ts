import 'server-only'

import { getAllPostsFull, getPostBySlug as getPostBySlugSync } from '@/lib/blog'
import type { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = getAllPostsFull()

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const post = getPostBySlugSync(slug)
  return post ?? undefined
}

export {
  getAllPosts,
  getAllPostsFull,
  getPaginatedPosts,
  getPopularPosts,
  getAllSlugs,
} from '@/lib/blog'
