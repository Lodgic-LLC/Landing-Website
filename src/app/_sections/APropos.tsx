import Link from 'next/link'

export default function About({ fond = 'blanc' }: { fond?: 'blanc' | 'creme' }) {
  return <section id="about" className={`section-space ${fond === 'blanc' ? 'bg-white' : 'bg-[#F4F6F7]'}`} aria-labelledby="about-title">
    <div className="container-site grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
      <div>
        <p className="eyebrow">À propos</p>
        <h2 id="about-title" className="title-section mt-4">Qui suis-je ?</h2>
        <p className="mt-6 max-w-md text-xl leading-relaxed text-[#17232A]">Je suis Yann, ingénieur informatique indépendant à Toulouse.</p>
        <Link href="/realisations" className="text-link mt-8 text-base">Voir mes projets <span aria-hidden>→</span></Link>
      </div>
      <dl className="border-t border-[#DCE3E6]">
        <div className="grid gap-2 border-b border-[#DCE3E6] py-6 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="font-heading text-2xl text-[#246B66]">5 ans</dt>
          <dd className="text-[#59666E]">à développer des logiciels pour le spatial et l’aéronautique.</dd>
        </div>
        <div className="grid gap-2 border-b border-[#DCE3E6] py-6 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="font-semibold text-[#17232A]">Aujourd’hui</dt>
          <dd className="text-[#59666E]">Je crée des sites web, des applications mobiles et des outils métier avec React, Next.js et React Native.</dd>
        </div>
        <div className="grid gap-2 border-b border-[#DCE3E6] py-6 sm:grid-cols-[150px_1fr] sm:gap-6">
          <dt className="font-semibold text-[#17232A]">Avec vous</dt>
          <dd className="text-[#59666E]">Je définis le périmètre, écris le code et vous accompagne jusqu’à la mise en ligne. Vous échangez directement avec moi.</dd>
        </div>
      </dl>
    </div>
  </section>
}
