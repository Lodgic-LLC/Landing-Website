import type { ReactNode } from 'react'

export interface SectionLegale {
  titre: string
  /** Paragraphes de la section. */
  paragraphes?: string[]
  /** Liste à puces, affichée après les paragraphes. */
  liste?: string[]
  /** Contenu libre, pour les rares cas qui demandent des liens ou du gras. */
  contenu?: ReactNode
}

interface PageLegaleProps {
  titre: string
  /** Date de dernière mise à jour, affichée sous le titre. */
  miseAJour?: string
  sections: SectionLegale[]
}

/** Gabarit commun aux mentions légales et à la politique de confidentialité. */
export default function PageLegale({ titre, miseAJour, sections }: PageLegaleProps) {
  return (
    <main className="bg-[#F8F6F2] pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight">
          {titre}
        </h1>
        {miseAJour && (
          <p className="mt-3 text-sm text-[#6B655D] font-inter">
            Dernière mise à jour : {miseAJour}
          </p>
        )}

        <div className="mt-10 space-y-10 rounded-xl border border-[#E6E1D8] bg-white p-8 md:p-10">
          {sections.map((section) => (
            <section key={section.titre}>
              <h2 className="text-xl md:text-2xl font-sofia-bold text-[#2E2B28]">
                {section.titre}
              </h2>

              {section.paragraphes?.map((texte) => (
                <p key={texte} className="mt-3 leading-relaxed text-[#6B655D] font-inter">
                  {texte}
                </p>
              ))}

              {section.liste && (
                <ul className="mt-4 space-y-2">
                  {section.liste.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2542D]"
                      />
                      <span className="leading-relaxed text-[#6B655D] font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.contenu && (
                <div className="mt-3 leading-relaxed text-[#6B655D] font-inter">
                  {section.contenu}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
