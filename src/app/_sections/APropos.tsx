import Link from 'next/link'

export default function About({ fond = 'blanc' }: { fond?: 'blanc' | 'creme' }) {
  return <section id="about" className={`about-section section-space ${fond === 'blanc' ? 'bg-white' : 'bg-[#F4F6F7]'}`} aria-labelledby="about-title">
    <div className="container-site about-layout">
      <div className="about-intro">
        <p className="eyebrow">À propos</p>
        <h2 id="about-title" className="title-section mt-4">Qui suis-je ?</h2>
        <p className="about-presentation">Je suis Yann, développeur web et mobile à Toulouse. Je travaille seul sur vos projets, de la conception à la mise en ligne.</p>
        <Link href="/realisations" className="text-link mt-8 text-base">Voir mes projets <span aria-hidden>→</span></Link>
      </div>
      <dl className="about-background">
        <div className="about-experience">
          <dt>5 ans</dt>
          <dd>à développer des logiciels pour le spatial et l’aéronautique.</dd>
        </div>
        <div className="about-detail">
          <dt>Aujourd’hui</dt>
          <dd>Je crée des sites web, des applications mobiles et des outils métier avec React, Next.js et React Native.</dd>
        </div>
        <div className="about-detail">
          <dt>Avec vous</dt>
          <dd>Je définis le périmètre, écris le code et vous accompagne jusqu’à la mise en ligne. Vous échangez directement avec moi.</dd>
        </div>
      </dl>
    </div>
  </section>
}
