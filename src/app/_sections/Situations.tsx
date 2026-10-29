import Link from 'next/link'
import { situations } from '@/content/parcours'

export default function Situations() {
  return <section className="section-space situations-section" aria-labelledby="situations-title">
    <div className="container-site">
      <div className="section-intro"><div><p className="eyebrow">Votre point de départ</p><h2 id="situations-title" className="title-section mt-4">Qu’est-ce qui doit changer dans votre activité ?</h2></div><p>Le bon projet commence par un problème précis. La technologie vient ensuite.</p></div>
      <div className="situation-grid">{situations.map((item, index) => <Link className="situation-card" key={item.href} href={item.href} data-track="service" data-location="situations"><span className="situation-tag">0{index + 1} / {item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="situation-link">{item.link}<span aria-hidden="true">↗</span></span></Link>)}</div>
      <div className="orientation-strip"><p>Vous hésitez entre un site, une app et un outil interne ?</p><Link href="/preparer-son-projet#orientation" className="text-link" data-track="guide" data-location="situations">Trouver mon point de départ <span aria-hidden="true">→</span></Link><span>Trois questions · sans inscription</span></div>
    </div>
  </section>
}
