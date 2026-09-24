import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return <section className="bg-white pt-14 pb-16 md:pt-20 md:pb-24" aria-labelledby="hero-title">
    <div className="container-site hero-layout">
      <div>
        <p className="mb-5 text-base font-semibold text-[#246B66]">Yann, ingénieur indépendant</p>
        <h1 id="hero-title" className="title-hero max-w-[18ch]">Développeur d’applications web et mobiles à Toulouse.</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#59666E] md:text-xl">Je crée des sites web, des applications mobiles et des outils métier. Du cadrage à la mise en ligne, vous échangez directement avec moi.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
          <Link href="/contact" className="btn-primary">Parlons de votre projet <span aria-hidden>↗</span></Link>
          <Link href="/realisations" className="text-link text-base">Voir mes réalisations</Link>
        </div>
      </div>
      <figure className="min-w-0">
        <Link href="/projets/bewasbeen" className="block rounded-[10px] bg-[#F4F6F7] p-4 md:p-7" aria-label="Découvrir le projet BewasBeen">
          <Image src="/projets/bewasbeen/bwb_professor_dashboard.jpg" alt="Espace enseignant de BewasBeen : classes et listes de verbes" width={1960} height={1069} priority sizes="(max-width: 767px) 90vw, 52vw" className="w-full rounded-md border border-[#DCE3E6] shadow-[0_12px_32px_-16px_rgba(23,35,42,.2)]" />
        </Link>
        <figcaption className="mt-4 flex flex-wrap justify-between gap-1 text-sm text-[#59666E]"><span><strong className="font-semibold text-[#17232A]">BewasBeen</strong>, espace enseignant</span><span>Conception et développement Next.js</span></figcaption>
      </figure>
    </div>
  </section>
}
