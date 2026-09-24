import { presentation } from '@/content/accueil'
import Link from 'next/link'

export default function About({ fond = 'blanc' }: { fond?: 'blanc' | 'creme' }) {
  return <section id="about" className={`section-space ${fond === 'blanc' ? 'bg-white' : 'bg-[#F4F6F7]'}`} aria-labelledby="about-title">
    <div className="container-site grid gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-20">
      <div><p className="eyebrow">À propos</p><h2 id="about-title" className="title-section mt-4 max-w-xl">Je conçois et développe chaque projet moi-même.</h2></div>
      <div className="border-l-2 border-[#DCE3E6] pl-6 md:pl-9">
        {presentation.map((text, index) => <p key={text} className={`${index > 0 ? 'mt-5 ' : ''}max-w-2xl text-[#59666E]`}>{text}</p>)}
        <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-[#DCE3E6] pt-6">
          <div><p className="font-semibold text-[#17232A]">Yann</p><p className="mt-1 text-sm text-[#59666E]">Ingénieur informatique indépendant à Toulouse</p></div>
          <Link href="/realisations" className="text-link text-base">Voir mes projets <span aria-hidden>→</span></Link>
        </div>
      </div>
    </div>
  </section>
}
