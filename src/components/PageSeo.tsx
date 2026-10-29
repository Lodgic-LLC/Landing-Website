import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/app/_sections/Contact'
import JsonLd, { filAriane, faq } from '@/components/JsonLd'
import type { PageService } from '@/content/pages-service'
import { SITE_URL } from '@/lib/site'
import { serviceDecisions, contactHref, type ServiceDecision } from '@/content/parcours'

function Texte({ children }: { children: string }) {
  return <>
    {children.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
      part.startsWith('**')
        ? <strong key={index} className="font-semibold text-[#17232A]">{part.slice(2, -2)}</strong>
        : part
    )}
  </>
}

function ServiceHero({ hero, decision }: { hero: PageService['hero']; decision: ServiceDecision }) {
  return <section className="service-hero section-space bg-[#F4F6F7]">
    <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20 lg:items-center">
      <div>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="title-hero mt-4 max-w-3xl">{hero.highlight}</h1>
        <p className="service-location mt-6">{hero.title}</p>
        <p className="mt-4 max-w-2xl text-[#59666E]"><Texte>{hero.description}</Texte></p>
        <Link href={contactHref(decision.kind)} className="btn-primary mt-7" data-track="contact" data-location="service-hero">Faire le point sur ce projet <span aria-hidden>↗</span></Link>
      </div>
      <aside className="service-scope-panel">
        <p className="font-heading text-xl">Repères pour votre projet</p>
        <ul className="mt-5 space-y-3 text-[#59666E]">
          {hero.badges.map((badge) => <li key={badge}>{badge}</li>)}
        </ul><Link href="#perimetre" className="text-link mt-6">Voir le périmètre et les frais <span aria-hidden="true">↓</span></Link>
      </aside>
    </div>
  </section>
}

function ServiceExpertise({ expertise }: { expertise: PageService['expertise'] }) {
  return <section className="service-detail section-space">
    <div className="container-site">
      <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <p className="eyebrow">{expertise.eyebrow}</p>
          <h2 className="title-section mt-4"><Texte>{expertise.heading}</Texte></h2>
        </div>
        <p className="self-end text-[#59666E]"><Texte>{expertise.intro}</Texte></p>
      </div>
      <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {expertise.cards.map((card) => <article key={card.title} className="border-t border-[#DCE3E6] pt-6">
          <h3 className="text-2xl">{card.title}</h3>
          <p className="mt-3 text-[#59666E]"><Texte>{card.body}</Texte></p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base text-[#59666E] marker:text-[#246B66]">
            {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </article>)}
      </div>
      <div className="mt-14 rounded-lg bg-[#F4F6F7] p-7 md:p-10">
        <h3 className="text-2xl">Budget et périmètre</h3>
        <div className="mt-4 max-w-3xl space-y-4 text-[#59666E]">
          {expertise.closing.map((text) => <p key={text}><Texte>{text}</Texte></p>)}
        </div>
      </div>
    </div>
  </section>
}

function ProjectExample({ project }: { project: NonNullable<PageService['project']> }) {
  return <section className="service-proof section-space">
    <div className="container-site grid items-center gap-8 md:grid-cols-2 md:gap-16">
      <Link href={project.href} className="project-visual">
        <Image src={project.src} alt={'Interface de ' + project.name} width={1960} height={1069} sizes="(max-width:767px) 90vw, 48vw" className="h-auto w-full" />
      </Link>
      <div>
        <p className="eyebrow">Un exemple livré</p>
        <h2 className="title-section mt-3">{project.name}</h2>
        <p className="mt-4 text-[#59666E]">{project.text}</p>
        <Link href={project.href} className="text-link mt-5">Lire l’étude de cas <span aria-hidden>→</span></Link>
      </div>
    </div>
  </section>
}

function ServiceQuestions({ faqs }: { faqs: PageService['faqs'] }) {
  return <section className="section-space bg-[#F4F6F7]">
    <div className="container-site grid gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20">
      <h2 className="title-section">Questions sur cette prestation.</h2>
      <div className="border-t border-[#DCE3E6]">
        {faqs.map((item) => <details key={item.question} className="group border-b border-[#DCE3E6] py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold [&::-webkit-details-marker]:hidden">
            {item.question}
            <span aria-hidden className="text-2xl text-[#246B66] group-open:hidden">+</span>
            <span aria-hidden className="hidden text-2xl text-[#246B66] group-open:block">−</span>
          </summary>
          <p className="mt-3 text-base leading-relaxed text-[#59666E]">{item.answer}</p>
        </details>)}
      </div>
    </div>
  </section>
}

function OtherServices({ links }: { links: PageService['expertise']['crossLinks'] }) {
  return <nav className="container-site mb-16 border-t border-[#DCE3E6] pt-7" aria-label="Autres prestations">
    <p className="text-sm text-[#59666E]">Autres prestations</p>
    <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
      {links.map((link) => <Link key={link.href} href={link.href} className="text-link text-base">{link.title}</Link>)}
    </div>
  </nav>
}

export default function PageSeo({ page }: { page: PageService }) {
  const decision = serviceDecisions[page.slug]
  const url = SITE_URL + '/' + page.slug

  return <main className="service-page">
    <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: page.name, url }])} />
    <JsonLd data={faq(page.faqs)} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: page.name, description: page.description, url, provider: { '@id': `${SITE_URL}/#organization` }, areaServed: 'France' }} />
    <ServiceHero hero={page.hero} decision={decision} />
    <section className="section-space service-fit"><div className="container-site ownership-layout"><div><p className="eyebrow">Est-ce le bon point de départ ?</p><h2 className="title-section mt-4">{decision.title}</h2></div><div><ul className="plain-checklist">{decision.fit.map(item => <li key={item}>{item}</li>)}</ul><p className="decision-alternative">{decision.alternative}</p><Link href="/preparer-son-projet#orientation" className="text-link mt-5">Comparer les formats pour mon besoin <span aria-hidden="true">→</span></Link></div></div></section>
    {page.project ? <ProjectExample project={page.project} /> : decision.evidence && <aside className="service-evidence container-site"><p className="eyebrow">Une réalisation à examiner</p><h2 className="title-section mt-4">{decision.evidence.title}</h2><p className="mt-5">{decision.evidence.text}</p><Link href={decision.evidence.href} className="text-link mt-5" data-track="case-study" data-location="service">{decision.evidence.label} <span aria-hidden="true">→</span></Link></aside>}
    <section id="perimetre" className="section-space service-scope"><div className="container-site"><p className="eyebrow">La première version</p><h2 className="title-section mt-4">Un périmètre à définir ensemble.</h2><div className="scope-grid"><div><h3>Le socle à cadrer</h3><ul className="plain-checklist">{decision.firstVersion.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>Ce qui dépend du projet</h3><p>{decision.scope}</p><h3 className="mt-7">Les frais à distinguer</h3><p>{decision.costs}</p></div></div><Link href={contactHref(decision.kind)} className="btn-primary mt-8" data-track="contact" data-location="service-perimetre">Décrire mon besoin <span aria-hidden="true">↗</span></Link></div></section>
    <ServiceExpertise expertise={page.expertise} />
    <section className="container-site service-method-link"><div><p className="eyebrow">Comment nous avançons</p><h2>Cadrage, première version, tests, livraison.</h2><p>Les décisions, votre rôle et les livrables sont détaillés à chaque étape.</p></div><Link href="/methode" className="text-link">Voir la méthode <span aria-hidden="true">→</span></Link></section>
    <ServiceQuestions faqs={page.faqs} />
    <Contact source={`service-${decision.kind}`} />
    <OtherServices links={page.expertise.crossLinks} />
  </main>
}
