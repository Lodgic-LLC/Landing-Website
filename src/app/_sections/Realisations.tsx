import Image from 'next/image'
import Link from 'next/link'
import { PROJETS } from '@/content/projets'

export default function Realisations({ introduction = true }: { introduction?: boolean }) {
  const [alliance, bewasbeen] = PROJETS
  return <section id="realisations" className="section-space bg-white" aria-label="Projets livrés">
    <div className="container-site">
      {introduction && <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Réalisations</p><h2 className="title-section mt-4 max-w-xl">Deux projets livrés, expliqués en détail.</h2></div><Link href="/realisations" className="text-link text-base">Toutes les réalisations <span aria-hidden>→</span></Link></div>}
      <article className="project-layout">
        <Link href={alliance.href} className="project-visual" aria-label="Voir l’étude de cas Alliance-TRAVAUX"><Image src={alliance.screens[0].src} alt={alliance.screens[0].alt} width={1960} height={1069} sizes="(max-width: 767px) 90vw, 55vw" className="h-auto w-full" /></Link>
        <div>
          <p className="text-sm text-[#59666E]">Site web <span className="ml-4">Collectif d’artisans à Toulouse</span></p>
          <h3 className="mt-3 text-3xl">Alliance-TRAVAUX</h3>
          <p className="mt-4 text-[#59666E]">Refonte du site d’un collectif d’artisans à Toulouse. J’ai repris les pages métier, les parcours vers le devis et le chargement des pages.</p>
          <p className="mt-6 text-sm text-[#59666E]">Affichage de la page d’accueil</p><p className="mt-1 text-3xl font-semibold text-[#246B66]">5,8 s <span className="mx-2 text-[#59666E]" aria-label="à">→</span> 0,7 s</p>
          <dl className="metrics"><div><dt>Performance ordinateur</dt><dd>98/100</dd></div><div><dt>Accessibilité</dt><dd>96/100</dd></div></dl>
          <Link href={alliance.href} className="text-link mt-6 text-base">Voir le projet et les mesures <span aria-hidden>→</span></Link>
        </div>
      </article>
      <article className="project-layout">
        <div>
          <p className="text-sm text-[#59666E]">Application web <span className="ml-4">Apprentissage de l’anglais</span></p>
          <h3 className="mt-3 text-3xl">BewasBeen</h3>
          <p className="mt-4 text-[#59666E]">Une plateforme pour les enseignants d’anglais : création de classes, exercices et suivi des résultats. Les élèves accèdent aux exercices avec un code de classe.</p>
          <dl className="metrics"><div><dt>classes créées</dt><dd>+200</dd></div><div><dt>exercices réalisés</dt><dd>+2 000</dd></div><div><dt>modes d’entraînement</dt><dd>3</dd></div></dl>
          <Link href={bewasbeen.href} className="text-link mt-6 text-base">Découvrir la plateforme <span aria-hidden>→</span></Link>
        </div>
        <Link href={bewasbeen.href} className="project-visual" aria-label="Voir l’étude de cas BewasBeen"><Image src="/projets/bewasbeen/bwb_drag_and_drop_mode.jpg" alt="Exercice de verbes irréguliers en glisser-déposer dans BewasBeen" width={1960} height={1069} sizes="(max-width: 767px) 90vw, 55vw" className="h-auto w-full" /></Link>
      </article>
    </div>
  </section>
}
