import Image from "next/image";
import Link from "next/link";

const project = {
  name: "BewasBeen",
  category: "EdTech · Apprentissage de l'anglais",
  href: "/projets/bewasbeen",
  bg: "#0D1B2A",
  accent: "#4F9CF9",
  glow: "rgba(79,156,249,0.25)",
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
};

export default function SuccessStories() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#F5F8FC] py-24 md:py-32"
      aria-labelledby="realisations-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#0F2647]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-[#2E8FFF]/20 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F2647]/50 font-inter">
            Étude de cas
          </p>
          <h2
            id="realisations-heading"
            className="mt-2 text-4xl font-sofia-bold text-[#0F2647] md:text-5xl text-balance"
          >
            Une réalisation, de l&apos;idée à la mise en ligne
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[#475D80]/75 font-inter">
            Plutôt qu&apos;un catalogue, un projet raconté en détail : le problème posé, les
            décisions techniques prises et ce que la plateforme fait aujourd&apos;hui.
          </p>
        </div>

        <article
          className="relative overflow-hidden rounded-3xl shadow-elevated"
          style={{ backgroundColor: project.bg }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 90% -10%, ${project.glow} 0%, transparent 55%), radial-gradient(circle at -10% 110%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
            }}
          />

          <div className="relative z-10 grid items-start gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
            {/* Colonne texte */}
            <div className="flex flex-col">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: project.accent }}
              >
                {project.category}
              </p>
              <h3 className="mt-2 text-4xl font-sofia-bold text-white md:text-5xl">
                {project.name}
              </h3>

              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/80 font-inter">
                {project.intro}
              </p>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 font-inter">
                    Le besoin
                  </dt>
                  <dd className="mt-2 text-sm md:text-base leading-relaxed text-white/75 font-inter">
                    {project.challenge}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 font-inter">
                    Ma réponse
                  </dt>
                  <dd className="mt-2 text-sm md:text-base leading-relaxed text-white/75 font-inter">
                    {project.answer}
                  </dd>
                </div>
              </dl>

              <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                {project.highlights.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <div>
                      <p className="text-[15px] font-sofia-bold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65 font-inter">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2E8FFF] px-6 py-3 text-sm font-inter font-semibold text-white transition-smooth hover:bg-[#1B6FD4]"
                >
                  Voir l&apos;étude de cas
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-inter font-medium text-white/85 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne visuels */}
            <div className="flex flex-col gap-5 lg:gap-6">
              {project.screens.map((screen, index) => (
                <figure key={screen.src} className="group">
                  <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/8 px-3 py-2 backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <div className="mx-2 flex-1 truncate rounded bg-white/10 px-3 py-0.5 text-[9px] font-inter text-white/40">
                        bewasbeen.com
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
      </div>
    </section>
  );
}
