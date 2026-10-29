import Link from 'next/link'
import { cadre } from '@/content/parcours'

export default function Cadre() {
  return <section id="cadre" className="section-space cadre-section" aria-labelledby="cadre-title"><div className="container-site">
    <div className="section-intro"><div><p className="eyebrow">Travailler ensemble</p><h2 id="cadre-title" className="title-section mt-4">Vous savez ce que vous validez. Et ce que vous récupérez.</h2></div><p>Le projet doit rester compréhensible, même sans connaître le développement. Voici le cadre que nous précisons ensemble.</p></div>
    <div className="cadre-grid">{cadre.map((item,index) => <article key={item.title}><span className="cadre-number" aria-hidden="true">0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    <Link href="/methode#cadre-detail" className="text-link mt-8">Voir les validations, les accès et le suivi <span aria-hidden="true">→</span></Link>
  </div></section>
}
