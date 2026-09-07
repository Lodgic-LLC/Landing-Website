import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PAGES_SERVICE } from "@/content/pages-service";

const BUILD_DATE = new Date();

const route = (
  path: string,
  priority: number,
  changeFrequency: "weekly" | "monthly" | "yearly" = "monthly",
) => ({
  url: path ? `${SITE_URL}/${path}` : SITE_URL,
  lastModified: BUILD_DATE,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    route("", 1.0, "weekly"),
    route("contact", 0.9),
    route("projets/bewasbeen", 0.8),
    ...PAGES_SERVICE.map((page) => route(page.slug, 0.85)),
    route("politique-confidentialite", 0.4, "yearly"),
    route("mentions-legales", 0.4, "yearly"),
  ];
}
