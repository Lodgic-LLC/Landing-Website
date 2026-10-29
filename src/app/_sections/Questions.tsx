import Link from 'next/link'
import JsonLd, { faq } from '@/components/JsonLd'

import { homeQuestions as questions } from '@/content/parcours'

export default function Questions() {
  return <section id="questions" className="questions-section section-space bg-[#F4F6F7]" aria-labelledby="questions-title">
    <JsonLd data={faq(questions)} />
    <div className="container-site grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
      <div><p className="eyebrow">Avant de commencer</p><h2 id="questions-title" className="title-section mt-4">Vos questions avant de lancer un projet.</h2><p className="mt-5 text-[#59666E]">Le premier échange sert aussi à vérifier que le projet est assez défini pour être chiffré.</p><Link href="/preparer-son-projet" className="text-link mt-6 text-base">Préparer mon projet <span aria-hidden>→</span></Link></div>
      <div><div className="border-t border-[#DCE3E6]">{questions.map(item => <details key={item.question} className="faq-item group border-b border-[#DCE3E6] py-5"><summary className="flex list-none items-center justify-between gap-5 font-semibold [&::-webkit-details-marker]:hidden">{item.question}<span aria-hidden className="text-2xl text-[#246B66] group-open:hidden">+</span><span aria-hidden className="hidden text-2xl text-[#246B66] group-open:block">−</span></summary><p className="mt-3 text-base leading-relaxed text-[#59666E]">{item.answer}</p></details>)}</div><Link href="/reprise-application-mobile" className="text-link mt-6 text-base">Comment se passe la reprise d’une application ? <span aria-hidden>→</span></Link></div>
    </div>
  </section>
}
