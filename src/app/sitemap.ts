import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog/posts";
import { getAllAuthors } from "@/data/authors";

import { SITE_URL } from "@/lib/site";

const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const authorRoutes = getAllAuthors().map((author) => ({
    url: `${SITE_URL}/auteurs/${author.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const projectRoutes = [
    {
      url: `${SITE_URL}/projets/hiking`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projets/driveapp`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projets/comptabilite`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projets/musique`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/rendez-vous`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/developpement-application-mobile`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/developpement-application-mobile/apple-android`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/developpement-application-mobile/react-native-flutter`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/developpement-application-mobile-toulouse`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/creation-application-mobile-sur-mesure`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/developpeur-react-native-toulouse`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/developpement-application-ios-android`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/agence-web-mobile-toulouse`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/intelligence-artificielle`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: blogPosts[0]?.date
        ? new Date(blogPosts[0].updatedAt ?? blogPosts[0].date).toISOString()
        : BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/politique-confidentialite`,
      lastModified: BUILD_DATE,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: BUILD_DATE,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...projectRoutes, ...blogPostRoutes, ...authorRoutes];
}
