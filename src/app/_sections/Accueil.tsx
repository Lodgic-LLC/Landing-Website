import Image from 'next/image'
import Link from 'next/link'
import { accueil, etapes } from '@/content/accueil'
import { PROJETS } from '@/content/projets'

export default function Hero() {
  const projet = PROJETS[0]
  return <section className="home-hero brand-hero" aria-labelledby="hero-title">
    <div className="container-site hero-layout">
      <div className="hero-copy">
        <p className="hero-introduction"><span aria-hidden="true" />{accueil.introduction}</p>
        <h1 id="hero-title" className="title-hero">{accueil.title.map((line, index) => <span key={line} className={index === 1 ? 'hero-highlight' : undefined}>{line}{index < accueil.title.length - 1 ? ' ' : ''}</span>)}</h1>
        <p className="hero-description">{accueil.description}</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn-primary">{accueil.contact} <span aria-hidden="true">↗</span></Link>
          <Link href="#realisations" className="text-link">{accueil.projets} <span aria-hidden="true">↓</span></Link>
        </div>
        <ul className="hero-assurances">{accueil.cadre.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
      </div>
      <div className="hero-workspace">
        <div className="workspace-heading"><span className="workspace-wordmark">Lodgic<span aria-hidden="true"> /</span></span><span className="workspace-label">Réalisations</span></div>
        <figure className="workspace-project">
          <Link href={projet.href} aria-label="Découvrir le projet Alliance-TRAVAUX" className="workspace-image">
            <div className="workspace-browser" aria-hidden="true"><span>● ● ●</span><span>{projet.url}</span><span>↗</span></div>
            <Image src={projet.screens[0].src} alt={projet.screens[0].alt} width={1960} height={1069} sizes="(max-width: 767px) 90vw, 44vw" preload />
          </Link>
          <figcaption><span><strong>{projet.name}</strong><span>{projet.category} · {projet.context}</span></span><Link href={projet.href} aria-label="Voir l’étude de cas Alliance-TRAVAUX">↗</Link></figcaption>
        </figure>
        {projet.measured && <Link href={projet.href} className="workspace-result"><span>{projet.measured.label}</span><strong><span>{projet.measured.before}</span><span aria-label="à"> → </span>{projet.measured.after}</strong></Link>}
        <a href="#methode" className="workspace-method"><span>Du premier échange à la mise en ligne.</span><ol>{etapes.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span>{step.title}</li>)}</ol></a>
      </div>
    </div>
    <div className="container-site hero-projects" aria-label="Projets livrés"><span>Projets livrés</span>{PROJETS.map(projet => <Link key={projet.href} href={projet.href}><strong>{projet.name}</strong><span>{projet.category}</span><span aria-hidden="true">↗</span></Link>)}</div>
  </section>
}
