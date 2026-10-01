import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return <section className="hero-editorial pt-14 pb-16 md:pt-20 md:pb-24" aria-labelledby="hero-title">
    <div className="container-site hero-layout">
      <div>
        <p className="editorial-label mb-6">Yann Rouquie <span aria-hidden="true">/</span> Ingénieur indépendant à Toulouse</p>
        <h1 id="hero-title" className="title-hero max-w-[18ch]">Je conçois et développe votre site ou votre application à Toulouse.</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#59666E] md:text-xl">Vous me parlez de votre besoin. Je dessine les parcours, écris le code et vous montre une version à tester. Vous savez qui fait le travail, du premier échange à la mise en ligne.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
          <Link href="/contact" className="btn-primary">Décrivez-moi votre projet <span aria-hidden>↗</span></Link>
          <Link href="/realisations" className="text-link text-base">Voir ce que j’ai livré</Link>
        </div>
      </div>

      <figure className="hero-showcase min-w-0">
        <p className="editorial-label mb-4">Projet livré <span aria-hidden="true">/</span> Site web</p>
        <Link href="/projets/alliance-travaux" className="hero-showcase-link" aria-label="Découvrir le projet Alliance-TRAVAUX">
          <Image src="/projets/alliance-travaux/at_accueil.jpg" alt="Page d’accueil du site Alliance-TRAVAUX sur ordinateur" width={1960} height={1069} priority sizes="(max-width: 767px) 90vw, 52vw" className="hero-showcase-desktop" />
          <span className="hero-showcase-phone" aria-hidden="true">
            <Image src="/projets/alliance-travaux/at_mobile_accueil.jpg" alt="" width={780} height={1688} sizes="(max-width: 767px) 28vw, 160px" className="w-full" />
          </span>
        </Link>
        <figcaption className="hero-showcase-caption text-sm text-[#59666E]"><strong className="font-semibold text-[#17232A]">Alliance-TRAVAUX.</strong> Refonte des pages métier et du parcours de devis pour un collectif d’artisans toulousains. <Link href="/projets/alliance-travaux" className="underline underline-offset-4 hover:text-[#246B66]">Lire l’étude de cas</Link>.</figcaption>
      </figure>
    </div>
  </section>
}
