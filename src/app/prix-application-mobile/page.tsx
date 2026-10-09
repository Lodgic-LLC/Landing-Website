import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export const metadata = buildSeoMetadata({
  path: '/prix-application-mobile',
  title: 'Prix d’une application mobile : comment estimer votre projet',
  description: 'Une application iPhone et Android démarre à 4 000 € chez Lodgic. Ce qui entre dans le devis, les coûts à prévoir après la publication et les questions pour chiffrer votre projet.',
})

const questions = [
  {
    title: 'Quel est le premier usage à livrer ?',
    text: 'Une application qui permet une seule action utile se chiffre autrement qu’un produit avec plusieurs profils, un catalogue et une messagerie. Je distingue les fonctions nécessaires à la première version de celles qui peuvent attendre.',
    detail: 'À préciser : qui utilise l’app, pour faire quoi, et à quel moment.',
  },
  {
    title: 'Que faut-il construire derrière les écrans ?',
    text: 'Les comptes utilisateurs, les droits d’accès, les données à synchroniser et un éventuel outil d’administration demandent du travail invisible sur les maquettes. Les connexions à un logiciel existant se vérifient aussi avant de promettre un prix.',
    detail: 'À préciser : les données, les rôles et les outils déjà utilisés.',
  },
  {
    title: 'Que se passe-t-il après la publication ?',
    text: 'Les comptes Apple et Google, l’hébergement, certains services tiers et la maintenance peuvent entraîner des frais distincts du développement. Je les indique dans la proposition lorsqu’ils sont nécessaires au projet.',
    detail: 'À préciser : qui gère les contenus, les mises à jour et les accès.',
  },
]

export default function PrixApplicationMobile() {
  return <main className="practical-page pricing-page">
    <JsonLd data={filAriane([
      { name: 'Accueil', url: SITE_URL },
      { name: 'Prix d’une application mobile', url: `${SITE_URL}/prix-application-mobile` },
    ])} />

    <header className="border-b border-[#DCE3E6] bg-[#F4F6F7] py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,.6fr)] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow">Budget d’une application</p>
          <h1 className="title-hero mt-5 max-w-3xl">Combien coûte une application mobile ?</h1>
          <p className="mt-7 max-w-2xl text-xl text-[#59666E]">Le prix dépend surtout de ce que les utilisateurs doivent pouvoir faire. Voici comment je passe d’une idée à un devis que vous pouvez lire et comparer.</p>
        </div>
        <div className="border-t-2 border-[#246B66] pt-5 lg:mb-1">
          <span className="block text-sm font-semibold text-[#246B66]">Point de départ chez Lodgic</span>
          <strong className="mt-2 block font-heading text-4xl text-[#17232A]">4 000 €</strong>
          <p className="mt-3 text-base leading-relaxed text-[#59666E]">Pour une application iPhone et Android au périmètre défini. Le montant de votre projet est fixé par écrit après le cadrage.</p>
        </div>
      </div>
    </header>

    <section className="section-space" aria-labelledby="prix-compris">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,.38fr)_minmax(0,.62fr)] lg:gap-20">
        <div>
          <p className="eyebrow">Avant le devis</p>
          <h2 id="prix-compris" className="title-section mt-4">Trois questions qui font varier le prix.</h2>
          <p className="mt-5 text-[#59666E]">Le nombre d’écrans seul ne raconte pas le travail. Une même interface peut cacher des règles métier très différentes.</p>
        </div>
        <div className="border-t border-[#DCE3E6]">
          {questions.map((item) => <article key={item.title} className="border-b border-[#DCE3E6] py-8 first:pt-0 lg:first:pt-8">
            <h3 className="text-2xl">{item.title}</h3>
            <p className="mt-4 text-[#59666E]">{item.text}</p>
            <p className="mt-4 text-base font-semibold text-[#246B66]">{item.detail}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#F4F6F7]" aria-labelledby="prix-proposition">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow">La proposition</p>
          <h2 id="prix-proposition" className="title-section mt-4">Ce que vous devez pouvoir vérifier.</h2>
          <p className="mt-6 text-[#59666E]">Avant de développer, je remets un périmètre, un planning et un prix. Vous savez ce qui sera livré et ce qui reste pour une version suivante.</p>
          <Link href="/preparer-son-projet" className="text-link mt-7">Préparer les informations utiles <span aria-hidden>→</span></Link>
        </div>
        <ul className="space-y-0 border-t border-[#DCE3E6]">
          {[
            'Les parcours et fonctions inclus dans la première version',
            'Les maquettes, les tests et la publication prévus',
            'Les comptes, les accès et les éléments remis à la livraison',
            'Les services tiers et le suivi à prévoir séparément',
          ].map(item => <li key={item} className="border-b border-[#DCE3E6] py-5 text-[#17232A]">{item}</li>)}
        </ul>
      </div>
    </section>

    <section className="section-space" aria-labelledby="prix-suite">
      <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 id="prix-suite" className="title-section">Partir d’un besoin, puis chiffrer.</h2>
          <p className="mt-5 text-[#59666E]">Décrivez-moi l’utilisateur, l’action principale et ce qui existe déjà. Même si le projet n’est pas entièrement défini, cela suffit pour commencer le cadrage.</p>
          <Link href="/contact" className="btn-primary mt-7">Parler de mon application <span aria-hidden>↗</span></Link>
        </div>
        <aside className="border-t border-[#DCE3E6] pt-5 text-base text-[#59666E]">
          <p>Pour approfondir le sujet, l’<Link href="/blog/combien-coute-une-application-en-2026" className="text-link">article sur le coût d’une application <span aria-hidden>→</span></Link> compare différents types de projets.</p>
          <p className="mt-5">La page <Link href="/developpement-application-mobile-toulouse" className="text-link">développement mobile à Toulouse <span aria-hidden>→</span></Link> détaille mon travail du cadrage à la publication.</p>
        </aside>
      </div>
    </section>
  </main>
}
