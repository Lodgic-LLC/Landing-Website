import Link from 'next/link'
import Galerie from '@/components/Galerie'
import CadreTelephone from '@/components/CadreTelephone'
import Contact from '@/app/_sections/Contact'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import type { Projet } from '@/content/projets'

export default function PageProjet({ projet }: { projet: Projet }) {
  const measures = projet.measured
  return <main>
    <JsonLd data={filAriane([{name:'Accueil',url:SITE_URL},{name:'Réalisations',url:SITE_URL+'/realisations'},{name:projet.name,url:SITE_URL+projet.href}])} />
    <JsonLd data={{'@context':'https://schema.org','@type':'CreativeWork',name:projet.name,description:projet.summary,url:SITE_URL+projet.href,creator:{'@id':SITE_URL+'/#person'}}} />
    <section className="section-space bg-[#F4F6F7]">
      <div className="container-site">
        <Link href="/realisations" className="text-link text-base"><span aria-hidden>←</span> Tous les projets</Link>
        <div className="mt-10 grid items-end gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-16">
          <div><p className="eyebrow">{projet.category}</p><p className="mt-1 text-base text-[#59666E]">{projet.context}</p><h1 className="title-hero mt-4">{projet.name}</h1><p className="mt-5 max-w-xl text-xl text-[#59666E]">{projet.summary}</p><a href={projet.siteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">Voir le site en ligne <span aria-hidden>↗</span></a></div>
          <div><p className="text-base font-semibold">Conception et développement</p><p className="mt-2 text-base text-[#59666E]">{projet.stack.join(', ')}</p>{projet.duration && <p className="mt-3 text-base text-[#59666E]">Livré en {projet.duration.value}, {projet.duration.label}.</p>}<dl className="metrics">{(projet.detailMetrics ?? projet.metrics).map(m => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}</dl></div>
        </div>
      </div>
    </section>
    {projet.etude && <section className="section-space"><div className="container-site grid gap-10 md:grid-cols-2 md:gap-20">{([{title:'Le besoin de départ',items:projet.etude.besoin},{title:'Mon intervention',items:projet.etude.prestation}]).map(block => <div key={block.title}><h2 className="text-2xl">{block.title}</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-[#59666E] marker:text-[#246B66]">{block.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></section>}
    <section className="pb-16 md:pb-24"><div className="container-site"><h2 className="title-section mb-8">Le projet en images.</h2><Galerie screens={projet.screens} url={projet.url} priority /></div></section>
    <section className="section-space bg-[#F4F6F7]"><div className="container-site grid gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-20"><h2 className="title-section">Ce que j’ai développé.</h2><div className="space-y-8">{projet.features.map(feature=><article key={feature.title}><h3 className="text-xl">{feature.title}</h3><p className="mt-3 text-[#59666E]">{feature.text}</p></article>)}</div></div></section>
    {measures ? <section className="section-space"><div className="container-site">
      <div className="grid gap-8 md:grid-cols-2 md:gap-20"><div><p className="eyebrow">Résultats mesurés</p><h2 className="title-section mt-4">De {measures.before} à {measures.after}.</h2><p className="mt-4 text-[#59666E]">Affichage de la page d’accueil avant et après la refonte. Le rapport PageSpeed disponible détaille la mesure après livraison sur ordinateur.</p><a href={measures.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-link mt-5">Consulter le rapport PageSpeed <span aria-hidden>↗</span></a></div><dl className="grid grid-cols-2 gap-6">{measures.scores.map(score=><div key={score.name} className="border-b border-[#DCE3E6] pb-4"><dt className="text-sm text-[#59666E]">{score.name}</dt><dd className="mt-2 text-3xl font-semibold text-[#246B66]">{score.value}<span className="ml-1 text-base text-[#59666E]">{score.value.includes('/')?'':'/100'}</span></dd></div>)}</dl></div>
      {measures.vitals && <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-[#DCE3E6] pt-7 md:grid-cols-5">{measures.vitals.map(vital=><div key={vital.name}><dt className="text-sm text-[#59666E]">{vital.name}</dt><dd className="mt-2 text-xl font-semibold">{vital.value}</dd></div>)}</dl>}
    </div></section> : <section className="section-space"><div className="container-site max-w-3xl"><h2 className="title-section">Un accès simple pour les élèves.</h2>{projet.resultats.map(result=><p key={result.title} className="mt-5 text-xl text-[#59666E]">{result.text}</p>)}</div></section>}
    {projet.mobileScreens && <section className="pb-16 md:pb-24"><div className="container-site"><h2 className="title-section">Le parcours sur téléphone.</h2><p className="mt-4 max-w-2xl text-[#59666E]">Les pages métier et le formulaire de devis restent accessibles depuis un petit écran.</p><div className="mt-9 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">{projet.mobileScreens.map(screen=><CadreTelephone key={screen.src} {...screen} />)}</div></div></section>}
    <Contact fond="creme" />
  </main>
}
