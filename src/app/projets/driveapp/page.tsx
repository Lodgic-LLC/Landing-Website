import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbStructuredData from "@/components/seo/BreadcrumbStructuredData";
import { SITE_URL } from "@/lib/site";
import HomeProjectForm from "@/components/forms/HomeProjectForm";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";

const APP_THEME = {
  primary: "#101820",
  primaryDeep: "#070B11",
  accent: "#E63946",
  accentSoft: "#FF6A75",
} as const;

const screens = [
  {
    src: "/projets/driveapp/accueil.svg",
    alt: "Écran d'accueil Fleetly",
    caption: "Accueil",
  },
  {
    src: "/projets/driveapp/recherche-vehicule.svg",
    alt: "Recherche d'un véhicule disponible",
    caption: "Recherche",
  },
  {
    src: "/projets/driveapp/details-vehicule.svg",
    alt: "Détails d'un véhicule",
    caption: "Détails véhicule",
  },
  {
    src: "/projets/driveapp/finaliser-reservation.svg",
    alt: "Finalisation de la réservation",
    caption: "Réservation",
  },
  {
    src: "/projets/driveapp/mes-reservations.svg",
    alt: "Liste des réservations en cours",
    caption: "Mes réservations",
  },
  {
    src: "/projets/driveapp/profil.svg",
    alt: "Profil utilisateur Fleetly",
    caption: "Profil",
  },
];

const features: FaqItem[] = [
  {
    question: "Catalogue de véhicules en temps réel",
    answer:
      "Une vue claire de la flotte disponible avec photos, caractéristiques, motorisation et tarifs. Filtres avancés par type, transmission, autonomie ou catégorie.",
  },
  {
    question: "Réservation en quelques tapes",
    answer:
      "Sélection des dates, du point de retrait et des options en un parcours guidé. Confirmation instantanée et e-mail récapitulatif automatique.",
  },
  {
    question: "Gestion centralisée des réservations",
    answer:
      "Suivi des réservations en cours, à venir et passées. Modification, annulation et prolongation gérées directement depuis l'application.",
  },
  {
    question: "Profil et historique conducteur",
    answer:
      "Permis, justificatifs et moyens de paiement enregistrés en sécurité. Historique complet des locations et des factures téléchargeables.",
  },
  {
    question: "Notifications et rappels",
    answer:
      "Confirmation de réservation, rappel de récupération du véhicule, alerte de retour et messages des équipes de gestion en temps réel.",
  },
  {
    question: "Tableau de bord exploitant",
    answer:
      "Côté gestionnaire de flotte : visualisation des véhicules, suivi des réservations, gestion des disponibilités et statistiques d'utilisation.",
  },
];

const ROOVO_KEYWORDS = [
  "application mobile location voitures",
  "app location véhicules",
  "création application autopartage",
  "développement app gestion flotte",
  "réservation véhicule mobile",
  "React Native location",
  "application iOS Android location",
  "logiciel exploitant flotte",
  "développeur application mobile Toulouse",
  "Lodgic",
];

export const metadata: Metadata = {
  title: "Fleetly — Application mobile de location de voitures iOS & Android | Lodgic Toulouse",
  description:
    "Découvrez Fleetly, application mobile de location de voitures développée par Lodgic : catalogue temps réel, réservation guidée, suivi des trajets et tableau de bord exploitant pour la gestion de flotte.",
  keywords: ROOVO_KEYWORDS,
  alternates: { canonical: `${SITE_URL}/projets/driveapp` },
  authors: [{ name: "Lodgic", url: SITE_URL }],
  category: "Application mobile",
  openGraph: {
    title: "Fleetly — Application mobile de location de voitures | Lodgic",
    description:
      "Application mobile de location de voitures : catalogue, réservation guidée, suivi et tableau de bord exploitant. Conçue par Lodgic à Toulouse.",
    url: `${SITE_URL}/projets/driveapp`,
    siteName: "Lodgic",
    images: [
      {
        url: `${SITE_URL}/lodgic-banner.png`,
        width: 1200,
        height: 630,
        alt: "Fleetly — Application mobile de location de voitures développée par Lodgic",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleetly — Application mobile de location de voitures | Lodgic",
    description:
      "Application mobile de location de voitures sur mesure : catalogue, réservation et tableau de bord exploitant.",
    images: [`${SITE_URL}/lodgic-banner.png`],
  },
};

export default function FleetlyProjectPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fleetly",
    description: metadata.description,
    url: `${SITE_URL}/projets/driveapp`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Vehicle Rental",
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
    { name: "Fleetly", url: `${SITE_URL}/projets/driveapp` },
  ];

  return (
    <main className="bg-white">
      <StructuredData id="project-driveapp" data={projectSchema} />
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
                Application mobile · Location de véhicules
              </p>
              <h1 className="mt-2 text-4xl font-sofia-bold text-[#001F45] md:text-5xl lg:text-6xl">
                Fleetly — Application mobile de location de voitures
              </h1>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#162869]/85 font-inter md:text-xl">
              Fleetly est une application mobile dédiée à la location de voitures.
              Elle centralise le catalogue, la réservation et le suivi pour les
              utilisateurs comme pour l&apos;exploitant — fluide, rapide, sans
              friction. Conçue et développée par Lodgic à Toulouse.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React Native",
                "iOS & Android",
                "Réservation",
                "Flotte",
                "Notifications",
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
                  src="/projets/driveapp/accueil.svg"
                  alt="Aperçu de l'écran d'accueil de Fleetly, application mobile de location de voitures"
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
        aria-labelledby="roovo-screens-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Écrans
            </span>
            <h2
              id="roovo-screens-heading"
              className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl"
            >
              Une expérience claire, du parcours au tableau de bord.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Chaque écran a été pensé pour aller à l&apos;essentiel et simplifier
              la prise en main.
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
        aria-labelledby="roovo-features-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#001F45]/50">
              Fonctionnalités
            </span>
            <h2
              id="roovo-features-heading"
              className="mt-3 text-3xl font-sofia-bold text-[#001F45] md:text-4xl"
            >
              Ce que Fleetly permet de faire.
            </h2>
            <p className="mt-4 text-base font-inter leading-relaxed text-[#162869]/75">
              Un périmètre fonctionnel complet pour gérer une flotte au
              quotidien, côté utilisateur comme côté exploitant.
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
                  s&apos;occupe de tout, de A à Z.
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
                source="Projet Fleetly"
                emailInputId="roovo-contact-email"
                messageInputId="roovo-contact-message"
                consentInputId="roovo-contact-consent"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
