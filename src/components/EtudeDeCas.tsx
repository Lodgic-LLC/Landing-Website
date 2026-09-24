import Link from 'next/link'
import Galerie from '@/components/Galerie'
import AnneauxLighthouse from '@/components/AnneauxLighthouse'
import type { Projet } from '@/content/projets'

export default function EtudeDeCas({
  project,
  index,
  total,
}: {
  project: Projet
  index: number
  /** Nombre total de projets, pour la numérotation « 01 / 02 ». */
  total: number
}) {
  const Cta = project.external ? "a" : Link;
  const ctaProps = project.external
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: project.href };

  return (
    <article className="overflow-hidden rounded-xl border border-[#DCE3E6] bg-white">
      {/* En-tête */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[#DCE3E6] bg-[#F4F6F7] px-6 py-5 md:px-8">
        <div>
          <p className="text-[11px] font-body font-semibold uppercase tracking-[0.16em] text-[#246B66]">
            {project.category}<span className="mt-1 block text-sm font-normal normal-case tracking-normal text-[#59666E]">{project.context}</span>
          </p>
          <h3 className="mt-1.5 text-2xl md:text-3xl font-heading text-[#17232A]">
            {project.name}
          </h3>
        </div>
        <p className="mono text-xs text-[#59666E]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Colonne gauche : le travail */}
        <div className="p-6 md:p-8 lg:border-r lg:border-[#DCE3E6]">
          <p className="text-[15px] leading-relaxed text-[#59666E] font-body">
            {project.summary}
          </p>

          {/* Chiffres */}
          <dl
            className={`mt-6 grid gap-px overflow-hidden rounded-lg border border-[#DCE3E6] bg-[#DCE3E6] ${
              (project.detailMetrics ?? project.metrics).length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'
            }`}
          >
            {(project.detailMetrics ?? project.metrics).map((m) => (
              <div key={m.label} className="bg-white px-3 py-3.5 text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-heading text-2xl text-[#246B66]">{m.value}</span>
                  <span className="mt-0.5 block text-[11px] leading-tight text-[#59666E] font-body">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Mesure avant / après */}
          {project.measured && (
            <div className="mt-6 overflow-hidden rounded-lg border border-[#DCE3E6]">
              <div className="bg-[#EDF4F3] px-5 py-4">
                <div>
                  <p className="text-[11px] font-body font-semibold uppercase tracking-[0.14em] text-[#1C5753]">
                    {project.measured.label}
                  </p>
                  <p className="mt-1.5 flex items-baseline gap-2.5 font-heading">
                    <span className="text-lg text-[#59666E] line-through decoration-[#246B66]/50">
                      {project.measured.before}
                    </span>
                    <svg className="h-3.5 w-3.5 text-[#246B66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-2xl text-[#246B66]">{project.measured.after}</span>
                  </p>
                </div>
                <div className="mt-4 border-t border-[#246B66]/15 pt-4">
                  <AnneauxLighthouse taille="sm" scores={project.measured.scores} className="grid grid-cols-3 gap-x-2 gap-y-3 sm:grid-cols-6" />
                </div>
              </div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-[#DCE3E6] bg-white px-5 py-2.5 text-xs font-body text-[#59666E]">
                Vérifiable publiquement avec l’outil de Google :
                <a
                  href={project.measured.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-[#246B66] hover:text-[#1C5753]"
                >
                  Voir la mesure PageSpeed
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </p>
            </div>
          )}

          {/* Fonctionnalités développées */}
          <p className="mt-7 text-[11px] font-body font-semibold uppercase tracking-[0.16em] text-[#59666E]">
            Ce que j&apos;ai développé
          </p>
          <ul className="mt-4 space-y-4">
            {project.features.slice(0, 3).map((f) => (
              <li key={f.title} className="border-l-2 border-[#DCE3E6] pl-4">
                <p className="font-heading text-[15px] text-[#17232A]">{f.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#59666E] font-body">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne droite : visuel + décision technique */}
        <div className="flex flex-col p-6 md:p-8">
          <Galerie
            screens={project.screens}
            url={project.url}
            priority={index === 0}
          />
          {project.duration && (
            <p className="mt-4 flex items-baseline gap-2 text-sm font-body text-[#59666E]">
              <span className="font-heading text-[#17232A]">Livré en {project.duration.value}</span>
              {project.duration.label}
            </p>
          )}

          {/* Résultats après développement */}
          <div className="mt-6 rounded-lg bg-[#F4F6F7] p-5">
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-[#246B66]">
              Résultats après développement
            </p>
            <ul className="mt-3 space-y-2.5">
              {project.resultats.map((r) => (
                <li key={r.title} className="flex items-baseline gap-3">
                  <span className="w-14 shrink-0 font-heading text-lg leading-none text-[#246B66]">{r.value}</span>
                  <span className="text-sm text-[#17232A] font-body">{r.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.quote && (
            <figure className="mt-6 border-l-2 border-[#246B66] pl-4">
              <blockquote className="text-[15px] italic leading-relaxed text-[#17232A] font-body">
                « {project.quote.text} »
              </blockquote>
              <figcaption className="mt-2 text-xs font-body text-[#59666E]">
                <span className="font-heading not-italic text-[#17232A]">{project.quote.author}</span>
                {", "}
                {project.quote.role}
              </figcaption>
            </figure>
          )}

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-[#DCE3E6] bg-white px-2.5 py-1 mono text-[11px] text-[#59666E]"
                >
                  {t}
                </span>
              ))}
            </div>
            <Cta
              {...ctaProps}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#246B66] px-5 py-2.5 text-sm font-body font-semibold text-white transition-colors hover:bg-[#1C5753]"
            >
              {project.external ? "Voir le site en ligne" : "Voir l'étude complète"}
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
