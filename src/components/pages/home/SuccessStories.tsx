import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  sector: string;
  href: string;
  url?: string;
  external: boolean;
  summary: string;
  /** Chiffres vérifiables du projet livré */
  metrics: { value: string; label: string }[];
  /** Mesure avant/après, avec sa source */
  measured?: {
    label: string;
    before: string;
    after: string;
    scores: { name: string; value: string }[];
    source: string;
  };
  /** Mot du client, une fois obtenu */
  quote?: { text: string; author: string; role: string };
  /** Briques techniques réellement construites */
  features: { title: string; text: string }[];
  /** Décision d'architecture notable */
  architecture: { title: string; text: string };
  stack: string[];
  screen: { src: string; alt: string; caption: string };
};

const projects: Project[] = [
  {
    name: "Alliance-TRAVAUX",
    sector: "Rénovation & travaux · Toulouse",
    href: "https://alliance-travaux.fr",
    url: "alliance-travaux.fr",
    external: true,
    summary:
      "Refonte complète du site d'un collectif d'artisans toulousains : structure repensée pour la conversion, contenu et référencement local retravaillés, performances remises à niveau.",
    metrics: [
      { value: "23", label: "pages générées" },
      { value: "22", label: "communes ciblées" },
      { value: "12", label: "métiers référencés" },
    ],
    measured: {
      label: "Affichage de la page d'accueil",
      before: "5,8 s",
      after: "0,7 s",
      scores: [
        { name: "Performance", value: "88" },
        { name: "Accessibilité", value: "93" },
        { name: "Bonnes pratiques", value: "96" },
        { name: "SEO", value: "100" },
      ],
      source: "Google PageSpeed Insights, 7 septembre 2026",
    },
    features: [
      {
        title: "Structure repensée pour la conversion",
        text: "Douze pages métier et quatre pages service générées depuis un même schéma de données, avec navigation croisée. Chaque parcours mène au devis, du premier écran à la dernière section.",
      },
      {
        title: "Formulaire de demande de devis",
        text: "Validation des champs, états de chargement et message de confirmation, envoi par un service d'e-mail transactionnel — accessible depuis chaque section du site, avec le téléphone en second recours.",
      },
      {
        title: "Référencement local repris de zéro",
        text: "Balisage Schema.org complet — HomeAndConstructionBusiness, catalogue des six prestations, FAQ et zone d'intervention sur 22 communes. Résultat mesuré : 100/100 au SEO technique sur PageSpeed.",
      },
      {
        title: "Sécurité et dépendances remises à niveau",
        text: "Accès et identifiants sortis du code et placés côté serveur, formulaire protégé contre les envois automatisés, bibliothèques mises à jour vers des versions sans vulnérabilité connue.",
      },
    ],
    architecture: {
      title: "Divisé par huit le temps d'affichage",
      text: "Le site mettait 5,8 secondes à afficher son contenu principal — un visiteur sur deux part avant. J'ai découpé le chargement par domaine, compressé les images et supprimé le superflu : l'affichage tombe à 0,7 seconde.",
    },
    stack: ["React", "Vite", "React Router", "Schema.org"],
    screen: {
      src: "/projets/alliance-travaux/at_accueil.jpg",
      alt: "Page d'accueil du site Alliance-TRAVAUX",
      caption: "Page d'accueil et accès au formulaire de devis",
    },
  },
  {
    name: "BewasBeen",
    sector: "EdTech · Apprentissage de l'anglais",
    href: "/projets/bewasbeen",
    url: "bewasbeen.com",
    external: false,
    summary:
      "Une plateforme pédagogique complète : espace enseignant, gestion de classes, trois moteurs d'exercices et suivi individuel des élèves.",
    metrics: [
      { value: "3", label: "moteurs d'exercice" },
      { value: "2", label: "rôles applicatifs" },
      { value: "0", label: "compte élève requis" },
    ],
    features: [
      {
        title: "Trois moteurs d'exercice",
        text: "Glisser-déposer, saisie clavier et reconnaissance audio. Chaque mode a sa propre logique de validation et de correction, avec une difficulté qui s'ajuste aux réponses de l'élève.",
      },
      {
        title: "Espace enseignant et gestion de classes",
        text: "Création de classes, composition de listes de verbes personnalisées ou à partir de modèles, affectation aux groupes, et suivi par élève : taux de réussite par verbe, temps passé, historique des tentatives.",
      },
      {
        title: "Exports PDF et CSV",
        text: "Génération de rapports par classe ou par élève pour les bulletins et les réunions parents-professeurs, produits côté serveur à partir des sessions enregistrées.",
      },
    ],
    architecture: {
      title: "Accès élève sans authentification",
      text: "Plutôt qu'un compte par élève, une session s'ouvre via un code court ou un QR code projeté au tableau. Le modèle de données rattache les résultats à la classe et à l'élève sans jamais créer d'identifiants — moins de friction en cours, et pas de données de mineurs à gérer.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    screen: {
      src: "/projets/bewasbeen/bwb_professor_dashboard.png",
      alt: "Tableau de bord enseignant de BewasBeen",
      caption: "Tableau de bord enseignant",
    },
  },
];

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const Cta = project.external ? "a" : Link;
  const ctaProps = project.external
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: project.href };

  return (
    <article className="overflow-hidden rounded-xl border border-[#E6E1D8] bg-white">
      {/* En-tête */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[#E6E1D8] bg-[#F8F6F2] px-6 py-5 md:px-8">
        <div>
          <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#C2542D]">
            {project.sector}
          </p>
          <h3 className="mt-1.5 text-2xl md:text-3xl font-sofia-bold text-[#2E2B28]">
            {project.name}
          </h3>
        </div>
        <p className="mono text-xs text-[#6B655D]">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Colonne gauche : le travail */}
        <div className="p-6 md:p-8 lg:border-r lg:border-[#E6E1D8]">
          <p className="text-[15px] leading-relaxed text-[#6B655D] font-inter">
            {project.summary}
          </p>

          {/* Chiffres */}
          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-[#E6E1D8] bg-[#E6E1D8]">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-white px-3 py-3.5 text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-sofia-bold text-2xl text-[#C2542D]">{m.value}</span>
                  <span className="mt-0.5 block text-[11px] leading-tight text-[#6B655D] font-inter">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Mesure avant / après */}
          {project.measured && (
            <div className="mt-6 overflow-hidden rounded-lg border border-[#E6E1D8]">
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 bg-[#FBEFE9] px-5 py-4">
                <div>
                  <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-[#A34322]">
                    {project.measured.label}
                  </p>
                  <p className="mt-1.5 flex items-baseline gap-2.5 font-sofia-bold">
                    <span className="text-lg text-[#6B655D] line-through decoration-[#C2542D]/50">
                      {project.measured.before}
                    </span>
                    <svg className="h-3.5 w-3.5 text-[#C2542D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-2xl text-[#C2542D]">{project.measured.after}</span>
                  </p>
                </div>
                <dl className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.measured.scores.map((sc) => (
                    <div key={sc.name} className="text-center">
                      <dt className="text-[10px] font-inter text-[#6B655D]">{sc.name}</dt>
                      <dd className="mono text-base font-semibold text-[#2E2B28]">{sc.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="border-t border-[#E6E1D8] bg-white px-5 py-2 text-[11px] font-inter text-[#6B655D]">
                {project.measured.source} — vérifiable publiquement
              </p>
            </div>
          )}

          {/* Fonctionnalités développées */}
          <p className="mt-7 text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
            Ce que j&apos;ai développé
          </p>
          <ul className="mt-4 space-y-4">
            {project.features.map((f) => (
              <li key={f.title} className="border-l-2 border-[#E6E1D8] pl-4">
                <p className="font-sofia-bold text-[15px] text-[#2E2B28]">{f.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6B655D] font-inter">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne droite : visuel + décision technique */}
        <div className="flex flex-col p-6 md:p-8">
          <figure>
            <div className="overflow-hidden rounded-lg border border-[#E6E1D8]">
              <div className="flex items-center gap-1.5 border-b border-[#E6E1D8] bg-[#F8F6F2] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#2E2B28]/15" />
                <span className="h-2 w-2 rounded-full bg-[#2E2B28]/15" />
                <span className="h-2 w-2 rounded-full bg-[#2E2B28]/15" />
                <div className="mx-2 flex-1 truncate rounded bg-white px-3 py-0.5 mono text-[9px] text-[#6B655D]">
                  {project.url}
                </div>
              </div>
              <div className="relative aspect-[2940/1604] w-full bg-[#F8F6F2]">
                <Image
                  src={project.screen.src}
                  alt={project.screen.alt}
                  fill
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="(max-width: 1024px) 92vw, 45vw"
                  className="object-contain object-top"
                />
              </div>
            </div>
            <figcaption className="mt-2 text-xs text-[#6B655D] font-inter">
              {project.screen.caption}
            </figcaption>
          </figure>

          {/* Décision d'architecture */}
          <div className="mt-6 rounded-lg bg-[#F8F6F2] p-5">
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-[#C2542D]">
              Décision technique
            </p>
            <p className="mt-2 font-sofia-bold text-[15px] text-[#2E2B28]">
              {project.architecture.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#6B655D] font-inter">
              {project.architecture.text}
            </p>
          </div>

          {project.quote && (
            <figure className="mt-6 border-l-2 border-[#C2542D] pl-4">
              <blockquote className="text-[15px] italic leading-relaxed text-[#2E2B28] font-inter">
                « {project.quote.text} »
              </blockquote>
              <figcaption className="mt-2 text-xs font-inter text-[#6B655D]">
                <span className="font-sofia-bold not-italic text-[#2E2B28]">{project.quote.author}</span>
                {" — "}
                {project.quote.role}
              </figcaption>
            </figure>
          )}

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-[#E6E1D8] bg-white px-2.5 py-1 mono text-[11px] text-[#6B655D]"
                >
                  {t}
                </span>
              ))}
            </div>
            <Cta
              {...ctaProps}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-5 py-2.5 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
            >
              {project.external ? "Voir le site en ligne" : "Voir l'étude de cas"}
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {project.external ? <path d="M7 17L17 7M7 7h10v10" /> : <path d="M5 12h14M12 5l7 7-7 7" />}
              </svg>
            </Cta>
          </div>
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
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow eyebrow-left">Réalisations</p>
          <h2
            id="realisations-heading"
            className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
          >
            Ce que j&apos;ai construit, brique par brique
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6B655D] font-inter">
            Pas des captures d&apos;écran commentées : les fonctionnalités réellement
            développées, les décisions d&apos;architecture derrière, et ce que ça donne en
            production.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <CaseStudy key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
