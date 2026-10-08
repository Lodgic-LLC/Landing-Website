import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export const metadata = buildSeoMetadata({
  path: '/reprise-application-mobile',
  title: 'Reprise d’application mobile existante : audit, correction ou refonte',
  description: 'Votre application iOS ou Android est bloquée, inachevée ou difficile à maintenir ? Yann examine le code et les accès, puis chiffre une reprise ou une refonte selon ce qui est récupérable.',
})

const cas = [
  { title: 'L’application est déjà publiée', text: 'Une mise à jour ne passe plus, une fonction se dégrade ou le prestataire initial n’est plus disponible. Je vérifie le code, les dépendances et les accès aux comptes de publication avant de proposer une intervention.' },
  { title: 'Un prototype existe, mais il bloque', text: 'Le projet a peut-être été commencé avec un générateur comme Bolt ou Lovable, ou par un autre développeur. Je regarde ce qui fonctionne réellement : authentification, données, sécurité, tests et possibilité de déploiement.' },
  { title: 'Il ne reste que des maquettes ou des fichiers', text: 'Si le code ne peut pas être repris tel quel, les parcours et les contenus peuvent encore servir. Je sépare ce qui est réutilisable de ce qui doit être reconstruit avant de chiffrer.' },
]

export default function RepriseApplicationMobile() {
  return <main>
    <JsonLd data={filAriane([
      { name: 'Accueil', url: SITE_URL },
      { name: 'Reprise d’application mobile', url: `${SITE_URL}/reprise-application-mobile` },
    ])} />

    <header className="border-b border-[#DCE3E6] bg-[#F4F6F7] py-20 md:py-28">
      <div className="container-site max-w-5xl">
        <p className="eyebrow">Application existante</p>
        <h1 className="title-hero mt-5 max-w-4xl">Reprendre une application mobile sans repartir de zéro par réflexe.</h1>
        <p className="mt-7 max-w-3xl text-xl text-[#59666E]">Votre application est en ligne, en développement ou encore au stade du prototype. Je commence par examiner l’existant pour savoir ce qui peut être conservé, corrigé ou reconstruit.</p>
        <Link href="/contact" className="btn-primary mt-8">Décrire mon application <span aria-hidden>↗</span></Link>
      </div>
    </header>

    <section className="section-space" aria-labelledby="reprise-situations">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,.38fr)_minmax(0,.62fr)] lg:gap-20">
        <div><p className="eyebrow">Situations fréquentes</p><h2 id="reprise-situations" className="title-section mt-4">À quel stade en est votre projet ?</h2></div>
        <div className="border-t border-[#DCE3E6]">
          {cas.map(item => <article key={item.title} className="border-b border-[#DCE3E6] py-8 first:pt-0 lg:first:pt-8"><h3 className="text-2xl">{item.title}</h3><p className="mt-4 text-[#59666E]">{item.text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#F4F6F7]" aria-labelledby="reprise-examen">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,.52fr)_minmax(0,.48fr)] lg:gap-20">
        <div>
          <p className="eyebrow">Premier examen</p>
          <h2 id="reprise-examen" className="title-section mt-4">Ce que je regarde avant de donner un prix.</h2>
          <p className="mt-5 text-[#59666E]">Un devis de reprise sans accès au projet serait peu fiable. L’examen permet de distinguer une correction ciblée, une remise à niveau et une refonte.</p>
        </div>
        <dl className="border-t border-[#DCE3E6]">
          {[
            { term: 'Le code et ses dépendances', detail: 'Technologie utilisée, possibilités de mise à jour, erreurs connues et tests disponibles.' },
            { term: 'Les comptes et les données', detail: 'Dépôt de code, hébergement, base de données et comptes Apple ou Google : qui en possède les accès ?' },
            { term: 'Les parcours à préserver', detail: 'Ce qui marche aujourd’hui, ce que les utilisateurs attendent et ce qui doit changer en priorité.' },
          ].map(item => <div key={item.term} className="border-b border-[#DCE3E6] py-5"><dt className="font-semibold text-[#17232A]">{item.term}</dt><dd className="mt-2 text-base text-[#59666E]">{item.detail}</dd></div>)}
        </dl>
      </div>
    </section>

    <section className="section-space" aria-labelledby="reprise-decision">
      <div className="container-site max-w-5xl">
        <p className="eyebrow">Après l’examen</p>
        <h2 id="reprise-decision" className="title-section mt-4">Une décision expliquée, puis un périmètre écrit.</h2>
        <div className="mt-9 grid gap-8 border-t border-[#DCE3E6] pt-7 md:grid-cols-2 md:gap-14">
          <div><h3 className="text-2xl">Reprendre</h3><p className="mt-3 text-[#59666E]">Quand la base est saine, je conserve le code utile et chiffre les corrections, les mises à jour et les nouveaux écrans nécessaires.</p></div>
          <div><h3 className="text-2xl">Reconstruire une partie ou l’ensemble</h3><p className="mt-3 text-[#59666E]">Quand la reprise coûterait plus cher ou laisserait des problèmes majeurs, je l’explique et propose une refonte avec un nouveau périmètre. La décision vous appartient.</p></div>
        </div>
        <div className="mt-12 border-t border-[#DCE3E6] pt-7">
          <p className="max-w-3xl text-[#59666E]">Pour un premier échange, envoyez le lien de l’application ou du prototype, ce qui bloque, et les accès dont vous disposez. Évitez d’envoyer des mots de passe dans le formulaire : nous conviendrons d’un partage adapté si un examen technique est nécessaire.</p>
          <Link href="/contact" className="btn-primary mt-7">Parler de la reprise <span aria-hidden>↗</span></Link>
          <p className="mt-7 text-base text-[#59666E]">Vous partez de zéro ? <Link href="/developpement-application-mobile-toulouse" className="text-link">Voir la création d’application mobile <span aria-hidden>→</span></Link></p>
        </div>
      </div>
    </section>
  </main>
}
