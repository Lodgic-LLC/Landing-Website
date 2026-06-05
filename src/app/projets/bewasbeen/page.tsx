import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbStructuredData from "@/components/seo/BreadcrumbStructuredData";
import { SITE_URL } from "@/lib/site";
import HomeProjectForm from "@/components/forms/HomeProjectForm";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ScreenshotGallery } from "./_components/ScreenshotGallery";

const APP_THEME = {
  primary: "#0D1B2A",
  primaryDeep: "#07111c",
  accent: "#4F9CF9",
  accentSoft: "#93C5FD",
} as const;

const screens = [
  {
    src: "/projets/bewasbeen/bwb_landing_page.png",
    alt: "Page d'accueil BewasBeen — présentation de la plateforme",
    caption: "Accueil",
  },
  {
    src: "/projets/bewasbeen/bwb_professor_dashboard.png",
    alt: "Tableau de bord enseignant — suivi des élèves et des classes",
    caption: "Tableau de bord",
  },
  {
    src: "/projets/bewasbeen/bwb_create_class.png",
    alt: "Création d'une classe avec code d'accès et QR code",
    caption: "Créer une classe",
  },
  {
    src: "/projets/bewasbeen/bwb_play_modes.png",
    alt: "Sélection du mode d'exercice — dépôt, frappe, audio",
    caption: "Modes d'exercice",
  },
  {
    src: "/projets/bewasbeen/bwb_drag_and_drop_mode.png",
    alt: "Exercice en mode glisser-déposer — conjugaison de verbes",
    caption: "Glisser-déposer",
  },
  {
    src: "/projets/bewasbeen/bwb_typing_mode.png",
    alt: "Exercice en mode frappe clavier — saisie des formes verbales",
    caption: "Frappe clavier",
  },
  {
    src: "/projets/bewasbeen/bwb_audio_mode.png",
    alt: "Exercice en mode audio — reconnaissance des verbes à l'oreille",
    caption: "Mode audio",
  },
  {
    src: "/projets/bewasbeen/bwb_create_verb_list.png",
    alt: "Création d'une liste de verbes personnalisée",
    caption: "Créer une liste",
  },
  {
    src: "/projets/bewasbeen/bwb_verb_list_template.png",
    alt: "Modèles de listes de verbes prêts à l'emploi",
    caption: "Modèles de listes",
  },
];

const features: FaqItem[] = [
  {
    question: "Tableau de bord enseignant",
    answer:
      "Les professeurs disposent d'un espace dédié pour créer des classes, inviter des élèves via un code ou un QR code, et suivre la progression individuelle de chacun. Les résultats sont centralisés et exportables au format PDF ou CSV.",
  },
  {
    question: "Listes de verbes personnalisées",
    answer:
      "L'enseignant peut composer ses propres listes de verbes irréguliers à travailler, ou repartir de modèles prêts à l'emploi. Chaque liste est assignable à une classe en quelques clics.",
  },
  {
    question: "Trois modes d'entraînement",
    answer:
      "Les élèves s'exercent selon le mode qui leur convient : glisser-déposer les formes verbales, saisir la conjugaison au clavier, ou reconnaître les verbes à l'oreille en mode audio. Chaque mode adapte sa difficulté automatiquement.",
  },
  {
    question: "Suivi de la progression des élèves",
    answer:
      "Chaque session est enregistrée et résumée dans le tableau de bord : taux de réussite par verbe, temps passé, historique des tentatives. L'enseignant identifie rapidement les points à renforcer.",
  },
  {
    question: "Accès par code de classe et QR code",
    answer:
      "Rejoindre une classe est immédiat : l'élève scanne un QR code projeté au tableau ou entre un code court. Pas de compte élève à créer — la friction d'entrée est quasi nulle.",
  },
  {
    question: "Export et rapports",
    answer:
      "Les résultats de classe ou d'un élève en particulier sont exportables en PDF ou CSV pour les bulletins, les réunions parents-professeurs ou le simple suivi pédagogique.",
  },
];

const BWB_KEYWORDS = [
  "application apprentissage anglais",
  "verbes irréguliers anglais",
  "plateforme EdTech",
  "tableau de bord enseignant",
  "exercices interactifs anglais",
  "création application web éducative",
  "développement plateforme pédagogique",
  "Next.js TypeScript",
  "développeur web Toulouse",
  "Lodgic",
];

export const metadata: Metadata = {
  title: "BewasBeen — Plateforme EdTech d'apprentissage des verbes irréguliers anglais | Lodgic",
  description:
    "Découvrez BewasBeen, plateforme web pédagogique développée par Lodgic : exercices interactifs, tableau de bord enseignant, gestion de classes et suivi de progression pour apprendre les verbes irréguliers anglais.",
  keywords: BWB_KEYWORDS,
  alternates: { canonical: `${SITE_URL}/projets/bewasbeen` },
  authors: [{ name: "Lodgic", url: SITE_URL }],
  category: "Plateforme web",
  openGraph: {
    title: "BewasBeen — Plateforme EdTech pour les verbes irréguliers anglais | Lodgic",
    description:
      "Plateforme web pédagogique : exercices en glisser-déposer, frappe et audio, tableau de bord enseignant, gestion de classes et suivi de progression. Conçue par Lodgic à Toulouse.",
    url: `${SITE_URL}/projets/bewasbeen`,
    siteName: "Lodgic",
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: "BewasBeen — Plateforme EdTech développée par Lodgic",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BewasBeen — Plateforme EdTech | Lodgic",
    description:
      "Plateforme web pour apprendre les verbes irréguliers anglais : exercices interactifs, tableau de bord enseignant et suivi de progression.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
};

export default function BewasBeenProjectPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BewasBeen",
    description: metadata.description,
    url: "https://irregularverbsonline.com",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Language Learning",
    operatingSystem: "Web",
    inLanguage: "fr-FR",
    creator: {
      "@type": "Organization",
      name: "Lodgic",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    image: `${SITE_URL}/lodgic-banner.png`,
  };

  const breadcrumbItems = [
    { name: "Accueil", url: SITE_URL },
    { name: "Projets", url: `${SITE_URL}/#realisations` },
    { name: "BewasBeen", url: `${SITE_URL}/projets/bewasbeen` },
  ];

  return (
    <main className="bg-white">
      <StructuredData id="project-bewasbeen" data={projectSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f6f7fc] via-white to-[#eaf0ff] pt-28 pb-20 md:pt-36 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#001F45]/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#DBFF00]/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="lg:col-span-7">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-inter font-medium text-[#162869]/70 transition-colors hover:text-[#001F45]"
            >
              <span aria-hidden>←</span> Retour à l&apos;accueil
            </Link>

            <div className="mt-8">
              <p className="text-xs font-inter font-bold uppercase tracking-[0.25em] text-[#162869]/60">
                Plateforme web · EdTech · Anglais
              </p>
              <h1 className="mt-1 text-4xl font-sofia-bold text-[#001F45] md:text-5xl">
                BewasBeen — Plateforme d&apos;apprentissage des verbes irréguliers
              </h1>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#162869]/85 font-inter md:text-xl">
              BewasBeen aide les élèves à maîtriser les verbes irréguliers anglais
              à travers des exercices interactifs variés. Les enseignants gèrent
              leurs classes, composent des listes sur mesure et suivent la
              progression de chaque élève en temps réel. Une plateforme conçue et
              développée par Lodgic, disponible à{" "}
              <a
                href="https://irregularverbsonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F9CF9] underline underline-offset-2 hover:text-[#3b82f6] transition-colors"
              >
                irregularverbsonline.com
              </a>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "PostgreSQL",
                "EdTech",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#001F45]/10 bg-white px-3 py-1.5 text-xs font-inter font-medium text-[#001F45]/70 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact-projet"
                className="inline-flex items-center gap-2 rounded-xl bg-[#001F45] px-6 py-3.5 text-sm font-sofia-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2b63]"
              >
                Lancer un projet similaire
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-[#001F45]/15 bg-white px-6 py-3.5 text-sm font-sofia-bold text-[#001F45] shadow-soft transition-all duration-300 hover:border-[#001F45]/40"
              >
                Voir les fonctionnalités
              </Link>
            </div>
          </article>

          <div className="relative lg:col-span-5">
            <div
              aria-hidden
              className="absolute inset-0 -m-8 rounded-[3rem] blur-3xl"
              style={{ backgroundColor: `${APP_THEME.accent}22` }}
            />
            <div
              className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-2xl"
              style={{
                background: `linear-gradient(160deg, ${APP_THEME.primary} 0%, ${APP_THEME.primaryDeep} 100%)`,
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
                style={{ backgroundColor: `${APP_THEME.accent}40` }}
              />
              <div className="relative h-full w-full p-3">
                <Image
                  src="/projets/bewasbeen/bwb_landing_page.png"
                  alt="Aperçu de la page d'accueil de BewasBeen, plateforme d'apprentissage des verbes irréguliers"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-top rounded-xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section
        className="bg-[#f6f7fc] py-16 md:py-24"
        aria-labelledby="bwb-screens-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Aperçu
            </span>
            <h2
              id="bwb-screens-heading"
              className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl"
            >
              Une interface claire pour apprendre efficacement.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Du tableau de bord enseignant aux modes d&apos;exercice élève, chaque
              écran a été pensé pour limiter la friction et maximiser l&apos;engagement.
            </p>
          </div>

          <ScreenshotGallery screens={screens} />
        </div>
      </section>

      {/* ── Features FAQ ── */}
      <section
        id="features"
        className="bg-white py-16 md:py-24"
        aria-labelledby="bwb-features-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Fonctionnalités
            </span>
            <h2
              id="bwb-features-heading"
              className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl"
            >
              Ce que BewasBeen permet de faire.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Des outils pensés pour les enseignants et les élèves, du premier
              exercice au bilan de fin de séquence.
            </p>
          </div>

          <FaqAccordion items={features} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f6f7fc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#001F45] p-8 text-white md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#DBFF00]/25 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-inter font-bold uppercase tracking-[0.25em] text-white/60">
                  Un projet en tête ?
                </p>
                <h2 className="mt-3 text-2xl font-sofia-bold md:text-4xl">
                  Donnons vie à votre plateforme web.
                </h2>
                <p className="mt-3 text-sm font-inter text-white/80 md:text-base">
                  Design, développement et mise en ligne — on s&apos;occupe de tout,
                  de A à Z.
                </p>
              </div>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 self-start rounded-xl bg-[#DBFF00] px-6 py-3.5 text-sm font-sofia-bold text-[#001F45] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:self-auto"
              >
                Réserver un échange
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact-projet"
        className="bg-white py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Prendre contact
            </span>
            <h2 className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl">
              Parlez-nous de votre projet.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Vous avez une idée de plateforme web, d&apos;application ou de logiciel
              sur mesure ? Décrivez-nous votre besoin, on revient vers vous sous
              24h ouvrées.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Échange initial offert et sans engagement",
                "Propriété complète du code livré",
                "Une équipe dédiée, basée à Toulouse",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-inter text-[#001F45]"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#DBFF00] text-[#001F45]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#001F45]/10 bg-[#f6f7fc] p-6 shadow-soft md:p-8">
              <HomeProjectForm
                source="Projet BewasBeen"
                emailInputId="bwb-contact-email"
                messageInputId="bwb-contact-message"
                consentInputId="bwb-contact-consent"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
