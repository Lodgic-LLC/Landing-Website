import Link from 'next/link'

export default function About({ fond = 'blanc' }: { fond?: 'blanc' | 'creme' }) {
  return <section id="about" className={`section-space ${fond === 'blanc' ? 'bg-white' : 'bg-[#F4F6F7]'}`} aria-labelledby="about-title">
    <div className="container-site grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
      <div>
        <p className="eyebrow">À propos</p>
        <h2 id="about-title" className="title-section mt-4">Je suis Yann, le développeur derrière Lodgic.</h2>
        <p className="mt-6 max-w-md text-xl leading-relaxed text-[#17232A]">J’ai passé cinq ans à développer des logiciels pour le spatial et l’aéronautique. Aujourd’hui, je conçois et construis des projets web et mobiles avec mes clients, de la première discussion à la livraison.</p>
        <Link href="/realisations" className="text-link mt-8 text-base">Voir deux projets livrés <span aria-hidden>→</span></Link>
      </div>
      <dl className="border-t border-[#DCE3E6]">
        <div className="grid gap-2 border-b border-[#DCE3E6] py-6 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="font-semibold text-[#17232A]">Avant</dt>
          <dd className="text-[#59666E]">Cinq ans de développement logiciel pour le spatial et l’aéronautique.</dd>
        </div>
        <div className="grid gap-2 border-b border-[#DCE3E6] py-6 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="font-semibold text-[#17232A]">Aujourd’hui</dt>
          <dd className="text-[#59666E]">Je conçois des sites, des applications mobiles et des outils métier depuis Toulouse, avec React, Next.js et React Native.</dd>
        </div>
        <div className="grid gap-2 border-b border-[#DCE3E6] py-6 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="font-semibold text-[#17232A]">Avec vous</dt>
          <dd className="text-[#59666E]">Je vous dis ce que je construirais d’abord, ce que je laisserais pour plus tard et ce que chaque choix change au devis.</dd>
        </div>
      </dl>
    </div>
  </section>
}
