import Link from 'next/link'
import Galerie from '@/components/Galerie'
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
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
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
          <Galerie
            screens={project.screens}
            url={project.url}
            priority={index === 0}
          />

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
