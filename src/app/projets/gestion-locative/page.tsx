import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBell,
  FaBolt,
  FaCheckCircle,
  FaHome,
  FaUserCheck,
} from "react-icons/fa";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbStructuredData from "@/components/seo/BreadcrumbStructuredData";
import { SITE_URL } from "@/lib/site";

const screenGroups = [
  {
    label: "Espace Propriétaire",
    description:
      "Pilotez vos biens, vos loyers et vos incidents depuis un seul tableau de bord.",
    screens: [
      {
        src: "/images/house-proprietaire.png",
        alt: "Dashboard propriétaire — total des loyers et accès rapide",
        caption: "Dashboard",
      },
      {
        src: "/images/house-biens.png",
        alt: "Liste des biens avec statut d'occupation",
        caption: "Mes biens",
      },
      {
        src: "/images/house-notif-proprietaire.png",
        alt: "Notifications propriétaire — échéances et interventions",
        caption: "Notifications",
      },
    ],
  },
  {
    label: "Espace Locataire",
    description:
      "Payez, signalez un problème et suivez vos activités en quelques secondes.",
    screens: [
      {
        src: "/images/house-locataire.png",
        alt: "Dashboard locataire — loyer à venir et activités récentes",
        caption: "Dashboard",
      },
      {
        src: "/images/house-notif-locataire.png",
        alt: "Notifications locataire avec actions rapides",
        caption: "Notifications",
      },
      {
        src: "/images/house-problem-locataire.png",
        alt: "Signalement d'un problème avec photo",
        caption: "Signalement",
      },
      {
        src: "/images/house-parametres.png",
        alt: "Paramètres du compte locataire",
        caption: "Paramètres",
      },
    ],
  },
];

const features = [
  "Tableaux de bord différenciés propriétaire / locataire",
  "Gestion des biens, occupants et statuts",
  "Signalements avec pièces jointes et suivi",
  "Historique des paiements et échéances",
  "Notifications contextuelles et actionnables",
  "UX claire pensée pour un usage quotidien",
];

export const metadata: Metadata = {
  title: "Projet — Gestion locative propriétaire & locataire",
  description:
    "Application mobile de gestion locative avec espaces propriétaire et locataire : loyers, biens, signalements et notifications en temps réel.",
  alternates: { canonical: `${SITE_URL}/projets/gestion-locative` },
  openGraph: {
    title: "Gestion locative propriétaire & locataire — Lodgic",
    description:
      "App mobile pour propriétaires et locataires : loyers, biens, incidents et notifications en temps réel.",
    url: `${SITE_URL}/projets/gestion-locative`,
    siteName: "Lodgic",
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: "Projet gestion locative Lodgic",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function GestionLocativePage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Gestion locative propriétaire & locataire",
    description: metadata.description,
    url: `${SITE_URL}/projets/gestion-locative`,
    creator: { "@type": "Organization", name: "Lodgic" },
  };

  const breadcrumbItems = [
    { name: "Accueil", url: SITE_URL },
    { name: "Projets", url: `${SITE_URL}/projets/gestion-locative` },
    { name: "Gestion locative", url: `${SITE_URL}/projets/gestion-locative` },
  ];

  return (
    <main className="bg-white">
      <StructuredData id="project-gestion-locative" data={projectSchema} />
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f6f7fc] via-white to-[#eaf0ff] pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#001F45]/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#DBFF00]/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-inter font-medium text-[#162869]/70 hover:text-[#001F45] transition-colors"
          >
            <span aria-hidden>←</span> Retour à l&apos;accueil
          </Link>
          <p className="mt-6 text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/60">
            Projet mobile
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] leading-tight text-balance">
            Gestion locative : propriétaire & locataire dans une seule app.
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[#162869]/85 font-inter leading-relaxed">
            Une application mobile dédiée à la gestion locative qui centralise
            les loyers, les biens et les incidents. Le propriétaire pilote ses
            logements et ses revenus, tandis que le locataire paie, signale un
            problème et reçoit des notifications claires.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React Native",
              "iOS & Android",
              "Notifications",
              "Paiements",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#001F45]/10 bg-white px-3 py-1 text-xs font-inter text-[#001F45]/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context cards ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FaHome,
                title: "Côté propriétaire",
                desc: "Suivi centralisé des biens, loyers et incidents avec statuts clairs et alertes automatiques.",
              },
              {
                icon: FaUserCheck,
                title: "Côté locataire",
                desc: "Paiement du loyer en un clic, signalements simplifiés et notifications actionnables.",
              },
              {
                icon: FaBell,
                title: "Notifications utiles",
                desc: "Rappels d'échéance, interventions planifiées et changements de statut en temps réel.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#001F45]/10 bg-white p-6 shadow-soft"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#DBFF00]/20 text-[#001F45]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="text-lg font-sofia-bold text-[#001F45]">
                  {title}
                </h2>
                <p className="mt-2 text-sm font-inter text-[#162869]/80">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots grouped by space ── */}
      <section className="bg-[#f6f7fc] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {screenGroups.map((group) => (
            <div key={group.label}>
              {/* Group header */}
              <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#001F45]/40">
                    Écrans
                  </span>
                  <h2 className="mt-1 text-2xl font-sofia-bold text-[#001F45] md:text-3xl">
                    {group.label}
                  </h2>
                </div>
                <p className="max-w-sm text-sm font-inter text-[#162869]/70">
                  {group.description}
                </p>
              </div>

              {/* Horizontal screenshots row */}
              <div
                className={[
                  "grid gap-4 md:gap-5",
                  group.screens.length === 3
                    ? "grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-4",
                ].join(" ")}
              >
                {group.screens.map((screen) => (
                  <div key={screen.src} className="flex flex-col gap-3">
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "9/19.5" }}
                    >
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <p className="text-center text-xs font-inter font-medium text-[#001F45]/50">
                      {screen.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#001F45]/40">
                Fonctionnalités
              </span>
              <h2 className="mt-2 text-2xl font-sofia-bold text-[#001F45] md:text-3xl">
                Ce que l&apos;app permet de faire.
              </h2>
              <p className="mt-3 text-sm font-inter text-[#162869]/75">
                Un périmètre fonctionnel pensé pour couvrir les besoins du
                quotidien, sans complexité inutile.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-[#001F45]/8 bg-[#f6f7fc] px-4 py-3"
                  >
                    <FaCheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA5E9]"
                      aria-hidden
                    />
                    <span className="text-sm font-inter text-[#162869]/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#001F45] px-5 py-4 text-white">
                <FaBolt
                  className="h-4 w-4 shrink-0 text-[#DBFF00]"
                  aria-hidden
                />
                <p className="text-sm font-inter text-white/85">
                  Conçu pour être utilisé au quotidien, sans friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#001F45] p-8 text-white md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#DBFF00]/20 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/60">
                  Un projet similaire ?
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-sofia-bold text-balance">
                  Parlons de votre application mobile.
                </h2>
              </div>
              <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 self-start rounded-lg bg-[#DBFF00] px-6 py-3 text-sm font-sofia-bold text-[#001F45] transition-smooth hover:bg-white md:self-auto"
              >
                Démarrer un projet
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
