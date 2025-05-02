'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight, FaSearch, FaFilter } from 'react-icons/fa'
import { BlogPost } from '@/types/blog'

// Types pour les filtres
type Category = 'Tous' | 'Développement' | 'Design' | 'SEO' | 'Mobile' | 'Web'
type SortOption = 'date' | 'title'

interface BlogFiltersProps {
  blogPosts: BlogPost[]
}

const BlogFilters = ({ blogPosts }: BlogFiltersProps) => {
  // États pour les filtres
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>('Tous')
  const [sortBy, setSortBy] = useState<SortOption>('date')

  // Extraction des catégories uniques
  const categories: Category[] = ['Tous', 'Développement', 'Design', 'SEO', 'Mobile', 'Web']

  // Filtrage et tri des articles
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        if (sortBy === 'date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        }
        return a.title.localeCompare(b.title)
      })
  }, [searchQuery, selectedCategory, sortBy, blogPosts])

  return (
    <>
      {/* Filtres et Recherche Section */}
      <section className="py-8 bg-white border-b border-gray-100  shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                aria-label="Rechercher un article"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as Category)}
                  className="px-3 py-2 rounded-lg border focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  aria-label="Filtrer par catégorie"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 rounded-lg border focus:outline-none border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                aria-label="Trier les articles"
              >
                <option value="date">Plus récent</option>
                <option value="title">A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid Section - Amélioré */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos derniers articles</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">
              Découvrez nos réflexions et conseils sur les dernières tendances technologiques et les meilleures
              pratiques de développement.
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun article trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          ) : (
            <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block overflow-hidden relative h-56 md:h-64"
                    aria-label={`Lire l'article : ${post.title}`}
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600/80 rounded-full mb-2">
                        {post.category}
                      </span>
                      <h2 className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h2>
                    </div>
                  </Link>

                  <div className="p-5 md:p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gray-50">
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{post.summary}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {post.author}
                        </span>
                        <span className="text-sm text-gray-400">
                          {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center group/link"
                        aria-label={`Lire la suite de l'article : ${post.title}`}
                      >
                        Lire la suite
                        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogFilters
