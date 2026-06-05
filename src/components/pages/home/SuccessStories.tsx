"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: ("APP" | "SITE" | "LOGICIEL")[];
  href: string;
  mockup: string;
  bg: string;
  accent: string;
  glow: string;
  mockupType?: "mobile" | "desktop";
};

const mobileProjects: Project[] = [
  {
    slug: "hiking",
    name: "Montiva",
    category: "Randonnée & Outdoor",
    description:
      "Application mobile de randonnée pour explorer les sentiers, planifier ses sorties et suivre ses parcours en temps réel.",
    tags: ["APP"],
    href: "/projets/hiking",
    mockup: "/projets/hiking/accueil.svg",
    bg: "#1F4D3A",
    accent: "#F08020",
    glow: "rgba(240,128,32,0.22)",
    mockupType: "mobile",
  },
  {
    slug: "driveapp",
    name: "Fleetly",
    category: "Location de véhicules",
    description:
      "Plateforme mobile de location de voitures : catalogue temps réel, réservation guidée et suivi des trajets en quelques tapes.",
    tags: ["APP"],
    href: "/projets/driveapp",
    mockup: "/projets/driveapp/accueil.svg",
    bg: "#101820",
    accent: "#E63946",
    glow: "rgba(230,57,70,0.28)",
    mockupType: "mobile",
  },
  {
    slug: "comptabilite",
    name: "Klevr",
    category: "Comptabilité & cabinet",
    description:
      "Application mobile pour experts-comptables et clients : tableau de bord, dossiers, documents et messagerie centralisés.",
    tags: ["APP"],
    href: "/projets/comptabilite",
    mockup: "/projets/comptabilite/accueil.svg",
    bg: "#0F2540",
    accent: "#2DD4BF",
    glow: "rgba(45,212,191,0.24)",
    mockupType: "mobile",
  },
];

const webProjects: Project[] = [
  {
    slug: "bewasbeen",
    name: "BewasBeen",
    category: "EdTech · Anglais",
    description:
      "Plateforme web pédagogique pour l'apprentissage des verbes irréguliers anglais : exercices interactifs, tableau de bord enseignant, codes de classe et suivi des élèves.",
    tags: ["SITE"],
    href: "/projets/bewasbeen",
    mockup: "/projets/bewasbeen/bwb_landing_page.png",
    bg: "#0D1B2A",
    accent: "#4F9CF9",
    glow: "rgba(79,156,249,0.25)",
    mockupType: "desktop",
  },
];

function MobileProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group relative flex h-[520px] flex-col overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl md:h-[560px]"
      style={{ backgroundColor: project.bg }}
      aria-label={`Voir le projet ${project.name}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 85% -5%, ${project.glow} 0%, transparent 55%), radial-gradient(circle at -10% 110%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex items-start justify-between gap-4 p-6">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: project.accent }}>
            {project.category}
          </p>
          <h3 className="mt-1.5 text-3xl font-sofia-bold text-white md:text-[2rem]">
            {project.name}
          </h3>
        </div>
        <div className="flex flex-shrink-0 flex-wrap justify-end gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-6">
        <p className="line-clamp-3 text-sm leading-relaxed text-white/80 font-inter">
          {project.description}
        </p>
      </div>

      <div className="pointer-events-none relative mt-auto h-[300px] w-full">
        <div className="absolute bottom-0 left-1/2 h-full w-[95%] -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">
          <Image
            src={project.mockup}
            alt={`Aperçu de ${project.name}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>

      <div
        className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#001F45] opacity-0 shadow-lg transition-all duration-500 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
        aria-hidden
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function WebProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group relative flex flex-col overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{ backgroundColor: project.bg }}
      aria-label={`Voir le projet ${project.name}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 85% -5%, ${project.glow} 0%, transparent 55%), radial-gradient(circle at -10% 110%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-4 p-6 pb-4">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: project.accent }}>
            {project.category}
          </p>
          <h3 className="mt-1.5 text-3xl font-sofia-bold text-white md:text-[2rem]">
            {project.name}
          </h3>
        </div>
        <div className="flex flex-shrink-0 flex-wrap justify-end gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-6 pb-6">
        <p className="line-clamp-2 text-sm leading-relaxed text-white/80 font-inter">
          {project.description}
        </p>
      </div>

      {/* Browser mockup */}
      <div className="relative z-10 mx-5 mb-5 overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 bg-white/8 px-3 py-2 backdrop-blur-sm border-b border-white/8">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <div className="mx-2 flex-1 rounded bg-white/10 px-3 py-0.5 text-[9px] font-inter text-white/40 truncate">
            {project.name.toLowerCase().replace(/\s+/g, '')}.com
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.mockup}
            alt={`Aperçu de ${project.name}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 60vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div
        className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#001F45] opacity-0 shadow-lg transition-all duration-500 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
        aria-hidden
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  if (project.mockupType === "desktop") return <WebProjectCard project={project} />;
  return <MobileProjectCard project={project} />;
}

export default function SuccessStories() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#f6f7fc] py-24 md:py-32"
      aria-labelledby="realisations-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#001F45]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-[#DBFF00]/20 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Applications mobiles */}
        <div className="mb-14">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#001F45]/50 font-inter">Réalisations</p>
              <h2
                id="realisations-heading"
                className="mt-2 text-4xl font-sofia-bold text-[#001F45] md:text-5xl"
              >
                Applications mobiles
              </h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Séparateur */}
        <div className="my-16 h-px w-full bg-[#001F45]/10" />

        {/* Sites & plateformes web */}
        <div>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#001F45]/50 font-inter">Réalisations</p>
              <h2 className="mt-2 text-4xl font-sofia-bold text-[#001F45] md:text-5xl">
                Sites & plateformes web
              </h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
