import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/app/_sections/Contact'
import JsonLd, { filAriane, faq } from '@/components/JsonLd'
import type { PageService } from '@/content/pages-service'
import { SITE_URL } from '@/lib/site'

function Texte({ children }: { children: string }) {
  return <>{children.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith('**') ? <strong key={index} className="font-semibold text-[#17232A]">{part.slice(2,-2)}</strong> : part)}</>
}

export default function PageSeo({ page }: { page: PageService }) {
  const { hero, expertise, faqs } = page
  const url = SITE_URL + '/' + page.slug
  const project = page.slug === 'creation-site-internet-toulouse'
    ? { name: 'Alliance-TRAVAUX', href: '/projets/alliance-travaux', src: '/projets/alliance-travaux/at_accueil.jpg', text: '31 pages, un parcours vers le devis et un affichage mesuré à 0,7 s après la refonte.' }
    : page.slug === 'logiciel-sur-mesure-toulouse'
      ? { name: 'BewasBeen', href: '/projets/bewasbeen', src: '/projets/bewasbeen/bwb_professor_dashboard.jpg', text: 'Classes, exercices et suivi individuel réunis dans un espace enseignant.' }
      : null
  return <main>
    <JsonLd data={filAriane([{name:'Accueil',url:SITE_URL},{name:page.name,url}])} />
    <JsonLd data={faq(faqs)} />
    <section className="section-space bg-[#F4F6F7]">
      <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20 lg:items-center">
        <div><p className="eyebrow">{hero.eyebrow}</p><h1 className="title-hero mt-4 max-w-3xl">{hero.title}</h1><p className="mt-6 text-xl font-semibold">{hero.highlight}</p><p className="mt-4 max-w-2xl text-[#59666E]"><Texte>{hero.description}</Texte></p><Link href="/contact" className="btn-primary mt-7">Parlons de votre projet <span aria-hidden>↗</span></Link></div>
        <aside className="border-l-2 border-[#DCE3E6] pl-7"><p className="font-heading text-xl">Repères pour votre projet</p><ul className="mt-5 space-y-3 text-[#59666E]">{hero.badges.map(badge => <li key={badge}>{badge}</li>)}</ul></aside>
      </div>
    </section>
    <section className="section-space">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:gap-20"><div><p className="eyebrow">{expertise.eyebrow}</p><h2 className="title-section mt-4"><Texte>{expertise.heading}</Texte></h2></div><p className="self-end text-[#59666E]"><Texte>{expertise.intro}</Texte></p></div>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">{expertise.cards.map(card => <article key={card.title} className="border-t border-[#DCE3E6] pt-6"><h3 className="text-2xl">{card.title}</h3><p className="mt-3 text-[#59666E]"><Texte>{card.body}</Texte></p><ul className="mt-4 list-disc space-y-1 pl-5 text-base text-[#59666E] marker:text-[#246B66]">{card.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
        <div className="mt-14 rounded-lg bg-[#F4F6F7] p-7 md:p-10"><h3 className="text-2xl">Budget et périmètre</h3><div className="mt-4 max-w-3xl space-y-4 text-[#59666E]">{expertise.closing.map(text => <p key={text}><Texte>{text}</Texte></p>)}</div></div>
      </div>
    </section>
    {project && <section className="pb-16 md:pb-24"><div className="container-site grid items-center gap-8 md:grid-cols-2 md:gap-16"><Link href={project.href} className="project-visual"><Image src={project.src} alt={`Interface de ${project.name}`} width={1960} height={1069} sizes="(max-width:767px) 90vw, 48vw" className="h-auto w-full" /></Link><div><p className="eyebrow">Un exemple livré</p><h2 className="title-section mt-3">{project.name}</h2><p className="mt-4 text-[#59666E]">{project.text}</p><Link href={project.href} className="text-link mt-5">Lire l’étude de cas <span aria-hidden>→</span></Link></div></div></section>}
    <section className="section-space bg-[#F4F6F7]"><div className="container-site grid gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20"><h2 className="title-section">Questions sur cette prestation.</h2><div className="border-t border-[#DCE3E6]">{faqs.map(item => <details key={item.question} className="group border-b border-[#DCE3E6] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold [&::-webkit-details-marker]:hidden">{item.question}<span aria-hidden className="text-2xl text-[#246B66] group-open:hidden">+</span><span aria-hidden className="hidden text-2xl text-[#246B66] group-open:block">−</span></summary><p className="mt-3 text-base leading-relaxed text-[#59666E]">{item.answer}</p></details>)}</div></div></section>
    <Contact />
    <nav className="container-site mb-16 border-t border-[#DCE3E6] pt-7" aria-label="Autres prestations"><p className="text-sm text-[#59666E]">Autres prestations</p><div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">{expertise.crossLinks.map(link => <Link key={link.href} href={link.href} className="text-link text-base">{link.title}</Link>)}</div></nav>
  </main>
}
