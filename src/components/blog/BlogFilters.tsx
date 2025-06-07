"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaUserCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { BlogPost } from "@/types/blog";

// Types pour les filtres
type Category = "Tous" | "Développement" | "Design" | "SEO" | "Mobile" | "Web";
type SortOption = "date" | "title";

interface BlogFiltersProps {
  blogPosts: BlogPost[];
}

const BlogFilters = ({ blogPosts }: BlogFiltersProps) => {
  // États pour les filtres
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous");
  const [sortBy, setSortBy] = useState<SortOption>("date");

  // Extraction des catégories uniques
  const categories: Category[] = [
    "Tous",
    "Développement",
    "Design",
    "SEO",
    "Mobile",
    "Web",
  ];

  // Filtrage et tri des articles
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "Tous" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.title.localeCompare(b.title);
      });
  }, [searchQuery, selectedCategory, sortBy, blogPosts]);

  return (
    <>
      {/* Section des filtres et articles avec vagues */}
      <section className="bg-[#FFFFFF] relative">
        {" "}
        {/* Fond blanc, position relative pour les vagues */}
        {/* Vague Supérieure */}
        {/* Contenu principal de la section */}
        <div className="relative z-[1] container mx-auto px-4 max-w-7xl py-16 md:py-20 ">
          {" "}
          {/* mt/mb ajustés pour l'espace des vagues, z-index pour être au-dessus */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Nos derniers articles
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-[#374151]">
              Découvrez nos réflexions et conseils sur les dernières tendances
              technologiques et les meilleures pratiques de développement.
            </p>

            {/* Conteneur pour la recherche et les filtres (design épuré) */}
            <div className="mt-8 mb-12 max-w-4xl mx-auto">
              {/* Conteneur Flex pour Recherche et Filtres */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                {/* Barre de recherche */}
                <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22]/70 transition-colors duration-200 shadow-sm placeholder:text-[#6B7280] text-[#111827] bg-white"
                    aria-label="Rechercher un article"
                  />
                  <FaSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <FaFilter className="text-[#6B7280]" />
                    <select
                      value={selectedCategory}
                      onChange={(e) =>
                        setSelectedCategory(e.target.value as Category)
                      }
                      className="px-3 py-2.5 rounded-md border border-[#D1D5DB] bg-white focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22]/70 transition-colors duration-200 shadow-sm text-[#111827]"
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
                    className="px-3 py-2.5 rounded-md border border-[#D1D5DB] bg-white focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22]/70 transition-colors duration-200 shadow-sm text-[#111827]"
                    aria-label="Trier les articles"
                  >
                    <option value="date">Plus récent</option>
                    <option value="title">A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-500">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#E0E0E0] bg-[#FAF3E0]/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:border-[#E67E22]/60"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block overflow-hidden relative h-56 md:h-60"
                    aria-label={`Lire l'article : ${post.title}`}
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.imageAlt || post.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 via-[#2C3E50]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#E67E22] bg-[#E67E22]/10 rounded-full mb-2 group-hover:bg-[#E67E22]/20 transition-colors">
                        {post.category}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-[#FFFFFF] group-hover:text-[#FAF3E0] transition-colors duration-200 line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                    </div>
                  </Link>

                  <div className="p-4 md:p-5 flex flex-col flex-grow bg-white">
                    <p className="text-[#374151] mb-4 flex-grow line-clamp-3 text-sm md:text-base leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#EEEEEE]">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1.5 text-xs md:text-sm text-[#6B7280]">
                        <span className="flex items-center">
                          <FaUserCircle className="w-3.5 h-3.5 mr-1.5 text-[#E67E22]" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <FaCalendarAlt className="w-3.5 h-3.5 mr-1.5 text-[#E67E22]" />
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#E67E22] hover:text-[#E67E22]/80 font-semibold text-sm inline-flex items-center group/link"
                        aria-label={`Lire la suite de l'article : ${post.title}`}
                      >
                        Lire plus
                        <FaChevronRight className="w-3 h-3 ml-1.5 transform group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
        {/* Vague Inférieure */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block"
            style={{ height: "80px", width: "calc(100% + 1.3px)" }} // Hauteur de la vague et correction pour anti-aliasing
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,50 C360,120 1080,0 1440,50 L1440,100 L0,100 Z"
              fill="#FAF3E0"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default BlogFilters;
