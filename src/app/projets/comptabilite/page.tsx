import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbStructuredData from "@/components/seo/BreadcrumbStructuredData";
import { SITE_URL } from "@/lib/site";
import HomeProjectForm from "@/components/forms/HomeProjectForm";
import { FaqAccordion, type FaqItem } from "@/app/offre/_components/FaqAccordion";

const APP_THEME = {
  primary: "#0F2540",
  primaryDeep: "#08172B",
  accent: "#2DD4BF",
  accentSoft: "#7AE9D9",
} as const;

const screens = [
  {
    src: "/projets/comptabilite/accueil.svg",
    alt: "Tableau de bord Lumio",
    caption: "Accueil",
  },
  {
    src: "/projets/comptabilite/activites.svg",
    alt: "Suivi des activités comptables",
    caption: "Activités",
  },
  {
    src: "/projets/comptabilite/clients.svg",
    alt: "Gestion des clients",
    caption: "Clients",
  },
  {
    src: "/projets/comptabilite/chat.svg",
    alt: "Messagerie intégrée avec les clients",
    caption: "Messagerie",
  },
  {
    src: "/projets/comptabilite/documents.svg",
    alt: "Bibliothèque de documents comptables",
    caption: "Documents",
  },
  {
    src: "/projets/comptabilite/profil-parametres.svg",
    alt: "Profil utilisateur et paramètres",
    caption: "Profil & paramètres",
  },
];

const features: FaqItem[] = [
  {
    question: "Tableau de bord comptable centralisé",
    answer:
      "Vue synthétique des indicateurs clés : encours, échéances, factures émises et reçues, trésorerie. Tout ce qu'il faut pour piloter au quotidien, en un coup d'œil.",
  },
  {
    question: "Gestion des clients et des dossiers",
    answer:
      "Création et suivi des fiches clients, historique d'activité, statut de chaque dossier et accès rapide aux documents associés.",
  },
  {
    question: "Bibliothèque de documents",
    answer:
      "Centralisation des factures, justificatifs et bilans dans un espace sécurisé. Filtres avancés, prévisualisation et export en quelques tapes.",
  },
  {
    question: "Messagerie cabinet ↔ client",
    answer:
      "Un chat dédié par dossier pour échanger avec les clients, partager des documents et garder une trace claire des décisions prises.",
  },
  {
    question: "Suivi des activités et journal",
    answer:
      "Chaque action laisse une trace : ajout d'une pièce, validation, message envoyé. Idéal pour la traçabilité et le reporting interne.",
  },
  {
    question: "Profil et paramètres personnalisables",
    answer:
      "Préférences par utilisateur, gestion des accès, signature électronique et paramétrage des notifications selon le rôle.",
  },
];

const LUMIO_KEYWORDS = [
  "application mobile comptabilité",
  "app expert-comptable",
  "création application cabinet comptable",
  "logiciel comptabilité mobile",
  "messagerie cabinet client",
  "gestion documents comptables mobile",
  "React Native fintech",
  "application iOS Android comptabilité",
  "développeur application mobile Toulouse",
  "Lodgic",
];

export const metadata: Metadata = {
  title: "Lumio — Application mobile de comptabilité pour cabinets | Lodgic Toulouse",
  description:
    "Découvrez Lumio, application mobile de comptabilité développée par Lodgic : tableau de bord cabinet, suivi clients, documents centralisés et messagerie sécurisée iOS & Android.",
  keywords: LUMIO_KEYWORDS,
  alternates: { canonical: `${SITE_URL}/projets/comptabilite` },
  authors: [{ name: "Lodgic", url: SITE_URL }],
  category: "Application mobile",
  openGraph: {
    title: "Lumio — Application mobile de comptabilité | Lodgic",
    description:
      "Application mobile pour experts-comptables : tableau de bord, suivi clients, documents et messagerie. Conçue par Lodgic à Toulouse.",
    url: `${SITE_URL}/projets/comptabilite`,
    siteName: "Lodgic",
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: "Lumio — Application mobile de comptabilité développée par Lodgic",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumio — Application mobile de comptabilité | Lodgic",
    description:
      "Application mobile sur mesure pour experts-comptables : dossiers, documents et messagerie intégrée.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
};

export default function LumioProjectPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lumio",
    description: metadata.description,
    url: `${SITE_URL}/projets/comptabilite`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Accounting",
    operatingSystem: "iOS, Android",
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
    { name: "Lumio", url: `${SITE_URL}/projets/comptabilite` },
  ];

  return (
    <main className="bg-white">
      <StructuredData id="project-comptabilite" data={projectSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* ── Hero — Lodgic theme ── */}
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
                Application mobile · Comptabilité & cabinet
              </p>
              <h1 className="mt-2 text-4xl font-sofia-bold text-[#001F45] md:text-5xl lg:text-6xl">
                Lumio — Application mobile de comptabilité
              </h1>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#162869]/85 font-inter md:text-xl">
              Lumio est une application mobile dédiée aux experts-comptables et
              à leurs clients. Elle centralise les dossiers, les documents et
              les échanges pour fluidifier le quotidien — à la fois côté cabinet
              et côté entreprise. Conçue et développée par Lodgic à Toulouse.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React Native",
                "iOS & Android",
                "Documents",
                "Messagerie",
                "Sécurité",
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
              className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] p-4"
              style={{
                background: `linear-gradient(160deg, ${APP_THEME.primary} 0%, ${APP_THEME.primaryDeep} 100%)`,
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
                style={{ backgroundColor: `${APP_THEME.accent}50` }}
              />
              <div className="relative h-full w-full">
                <Image
                  src="/projets/comptabilite/accueil.svg"
                  alt="Aperçu de l'écran d'accueil de Lumio, application mobile de comptabilité"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screens — App theme conserved ── */}
      <section
        className="bg-[#f6f7fc] py-16 md:py-24"
        aria-labelledby="lumio-screens-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Écrans
            </span>
            <h2
              id="lumio-screens-heading"
              className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl"
            >
              Une expérience claire, du cabinet au client.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Chaque écran a été pensé pour aller à l&apos;essentiel et fluidifier
              les échanges du quotidien.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen) => (
              <div
                key={screen.src}
                className="relative overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(160deg, ${APP_THEME.primary} 0%, ${APP_THEME.primaryDeep} 100%)`,
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full blur-2xl"
                  style={{ backgroundColor: `${APP_THEME.accent}30` }}
                />
                <div className="relative aspect-square w-full">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <p className="relative mt-4 text-center text-sm font-sofia-bold text-white">
                  {screen.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features FAQ — Lodgic ── */}
      <section
        id="features"
        className="bg-white py-16 md:py-24"
        aria-labelledby="lumio-features-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Fonctionnalités
            </span>
            <h2
              id="lumio-features-heading"
              className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl"
            >
              Ce que Lumio permet de faire.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Un périmètre fonctionnel complet pour gérer les dossiers et les
              échanges, côté expert-comptable comme côté client.
            </p>
          </div>

          <FaqAccordion items={features} />
        </div>
      </section>

      {/* ── CTA — Lodgic ── */}
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
                  Donnons vie à votre application mobile.
                </h2>
                <p className="mt-3 text-sm font-inter text-white/80 md:text-base">
                  Cadrage, design, développement et mise en ligne — on
                  s&apos;occupe de tout, en 45 jours.
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

      {/* ── Contact — Lodgic ── */}
      <section id="contact-projet" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Prendre contact
            </span>
            <h2 className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl">
              Parlez-nous de votre projet.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Vous avez une idée d&apos;application mobile, de plateforme ou de
              logiciel sur mesure ? Décrivez-nous votre besoin, on revient vers
              vous sous 24h ouvrées.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Échange initial offert et sans engagement",
                "Cadrage en 45 jours, propriété complète du code",
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
                source="Projet Lumio"
                emailInputId="lumio-contact-email"
                messageInputId="lumio-contact-message"
                consentInputId="lumio-contact-consent"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
