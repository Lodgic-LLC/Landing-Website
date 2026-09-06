import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  category: string;
  href: string;
  url?: string;
  tags: string[];
  intro: string;
  challenge: string;
  answer: string;
  highlights: { title: string; text: string }[];
  screens: { src: string; alt: string; caption: string }[];
};

const projects: Project[] = [
  {
    name: "Alliance-TRAVAUX",
    category: "Rénovation & travaux · Toulouse",
    href: "https://alliance-travaux.fr",
    url: "alliance-travaux.fr",
    tags: ["React", "Tailwind CSS", "SEO local"],
    intro:
      "Le site vitrine d'un collectif d'artisans toulousains, que j'ai conçu et développé : présentation des expertises, mise en avant des chantiers et captation de demandes de devis.",
    challenge:
      "Un collectif de maîtres d'œuvre et d'artisans devait inspirer confiance à des particuliers qui engagent plusieurs dizaines de milliers d'euros de travaux — sans site, et face à des concurrents nationaux très référencés.",
    answer:
      "J'ai construit un site orienté conversion : les réalisations et les avis clients occupent le premier écran, chaque expertise a sa section, et la demande de devis reste accessible partout. Le référencement local cible Toulouse et son agglomération.",
    highlights: [
      {
        title: "Devis en ligne comme point d'entrée",
        text: "Le parcours mène au formulaire depuis chaque section, avec le numéro de téléphone en second recours.",
      },
      {
        title: "Preuves visibles d'emblée",
        text: "Photos de chantiers, note Google et engagements affichés dès le premier écran pour lever les objections.",
      },
      {
        title: "Référencement local",
        text: "Pages structurées par expertise et données de l'entreprise balisées pour les recherches à Toulouse et alentour.",
      },
    ],
    screens: [
      {
        src: "/projets/alliance-travaux/at_accueil.jpg",
        alt: "Page d'accueil du site Alliance-TRAVAUX : rénovation clé en main à Toulouse",
        caption: "Page d'accueil",
      },
      {
        src: "/projets/alliance-travaux/at_services.jpg",
        alt: "Section des expertises du site Alliance-TRAVAUX : extension, surélévation, rénovation",
        caption: "Les expertises",
      },
    ],
  },
  {
    name: "BewasBeen",
    category: "EdTech · Apprentissage de l'anglais",
    href: "/projets/bewasbeen",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    intro:
      "Une plateforme web pédagogique pour l'apprentissage des verbes irréguliers anglais, que j'ai conçue et développée de bout en bout pour les enseignants et leurs classes.",
    challenge:
      "Les enseignants n'avaient aucun outil pour faire travailler les verbes irréguliers en autonomie et suivre les résultats. Les solutions existantes imposaient la création d'un compte à chaque élève — une friction rédhibitoire en classe.",
    answer:
      "J'ai construit un espace enseignant complet (classes, listes de verbes, suivi individuel) et un accès élève sans inscription : un QR code projeté au tableau ou un code court suffit pour rejoindre une session.",
    highlights: [
      {
        title: "Trois modes d'entraînement",
        text: "Glisser-déposer, frappe clavier et reconnaissance audio, avec une difficulté qui s'adapte à l'élève.",
      },
      {
        title: "Tableau de bord enseignant",
        text: "Progression par élève et par verbe, historique des tentatives, exports PDF et CSV pour les bulletins.",
      },
      {
        title: "Entrée en classe sans friction",
        text: "Aucun compte élève à créer : code de classe ou QR code, et l'exercice démarre.",
      },
    ],
    screens: [
      {
        src: "/projets/bewasbeen/bwb_professor_dashboard.png",
        alt: "Tableau de bord enseignant de BewasBeen : suivi des classes et des élèves",
        caption: "Tableau de bord enseignant",
      },
      {
        src: "/projets/bewasbeen/bwb_play_modes.png",
        alt: "Écran de sélection des modes d'exercice de BewasBeen",
        caption: "Modes d'exercice",
      },
    ],
  },
];

function CaseStudy({ project }: { project: Project }) {
  const external = project.href.startsWith("http");

  return (
    <article className="overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#23211F]">
      <div className="grid items-start gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        {/* Colonne texte */}
        <div className="flex flex-col">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C2542D]">
            {project.category}
          </p>
          <h3 className="mt-2 text-3xl font-sofia-bold text-white md:text-4xl">
            {project.name}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-white/80 font-inter">
            {project.intro}
          </p>

          <p className="mt-5 border-l-2 border-[#C2542D] pl-4 text-sm md:text-[15px] leading-relaxed text-white/70 font-inter">
            <span className="font-sofia-bold text-white">Le besoin — </span>
            {project.challenge}
          </p>

          <ul className="mt-6 grid gap-2.5 border-t border-white/10 pt-5">
            {project.highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-2.5">
                <svg
                  className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#C2542D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-sm leading-relaxed text-white/80 font-inter">
                  <span className="font-sofia-bold text-white">{item.title}</span>
                  {' — '}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {external ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-6 py-3 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
              >
                Voir le site en ligne
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ) : (
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-6 py-3 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
              >
                Voir l&apos;étude de cas
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/20 bg-white/8 px-2.5 py-1 text-[11px] font-inter font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne visuels */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {project.screens.slice(0, 1).map((screen, index) => (
            <figure key={screen.src} className="group">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/8 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="mx-2 flex-1 truncate rounded bg-white/10 px-3 py-0.5 text-[9px] font-inter text-white/40">
                    {project.url ?? `${project.name.toLowerCase()}.com`}
                  </div>
                </div>
                <div className="relative aspect-[2940/1604] w-full overflow-hidden bg-white/5">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    loading={index === 0 ? undefined : "lazy"}
                    sizes="(max-width: 1024px) 92vw, 45vw"
                    className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <figcaption className="mt-2.5 text-xs font-inter text-white/50">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SuccessStories() {
  return (
    <section
      id="realisations"
      className="bg-white py-20 md:py-28 border-t border-[#E6E1D8]"
      aria-labelledby="realisations-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow eyebrow-left">Études de cas</p>
          <h2
            id="realisations-heading"
            className="mt-2 text-4xl font-sofia-bold text-[#2E2B28] md:text-5xl text-balance"
          >
            Des réalisations, de l&apos;idée à la mise en ligne
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[#6B655D] font-inter">
            Plutôt qu&apos;un catalogue, des projets racontés en détail : le problème posé, les
            décisions techniques prises et ce qu&apos;ils font aujourd&apos;hui.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project) => (
            <CaseStudy key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
