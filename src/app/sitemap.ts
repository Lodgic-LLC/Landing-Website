import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
    route("developpement-application-mobile-toulouse", 0.85),
    route("developpeur-react-native-toulouse", 0.85),
    route("developpement-application-ios-android", 0.85),
    route("creation-application-mobile-sur-mesure", 0.85),
    route("agence-web-mobile-toulouse", 0.85),
    route("developpement-application-mobile", 0.8),
    route("developpement-application-mobile/apple-android", 0.75),
    route("developpement-application-mobile/react-native-flutter", 0.75),
    route("politique-confidentialite", 0.4, "yearly"),
    route("mentions-legales", 0.4, "yearly"),
  ];
}
