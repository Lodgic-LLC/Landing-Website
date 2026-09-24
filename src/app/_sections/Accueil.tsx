import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return <section className="bg-white pt-14 pb-16 md:pt-20 md:pb-24" aria-labelledby="hero-title">
    <div className="container-site hero-layout">
      <div>
        <p className="mb-5 text-base font-semibold text-[#246B66]">Yann, ingénieur indépendant</p>
        <h1 id="hero-title" className="title-hero max-w-[18ch]">Développeur d’applications mobiles et web à Toulouse.</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#59666E] md:text-xl">Je développe des applications iOS et Android, ainsi que des sites web et des outils métier. Du premier contact à la mise en ligne, vous échangez directement avec moi.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
          <Link href="/contact" className="btn-primary">Parlons de votre projet <span aria-hidden>↗</span></Link>
          <Link href="/realisations" className="text-link text-base">Voir mes réalisations</Link>
        </div>
      </div>

      <figure className="hero-showcase min-w-0">
        <Link href="/projets/alliance-travaux" className="hero-showcase-link" aria-label="Découvrir le projet Alliance-TRAVAUX">
          <Image src="/projets/alliance-travaux/at_accueil.jpg" alt="Page d’accueil du site Alliance-TRAVAUX sur ordinateur" width={1960} height={1069} priority sizes="(max-width: 767px) 90vw, 52vw" className="hero-showcase-desktop" />
          <span className="hero-showcase-phone" aria-hidden="true">
            <Image src="/projets/alliance-travaux/at_mobile_accueil.jpg" alt="" width={780} height={1688} sizes="(max-width: 767px) 28vw, 160px" className="w-full" />
          </span>
        </Link>
        <figcaption className="hero-showcase-caption text-sm text-[#59666E]"><strong className="font-semibold text-[#17232A]">Alliance-TRAVAUX</strong>, site web pour un collectif d’artisans à Toulouse.</figcaption>
      </figure>
    </div>
  </section>
}
