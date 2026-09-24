import Link from 'next/link'
import JsonLd, { faq } from '@/components/JsonLd'

const questions = [
  { question: 'Mon projet est encore peu défini. Par où commencer ?', answer: 'Décrivez qui utilisera le site ou l’application, ce que ces personnes doivent pouvoir faire et ce qui existe déjà. Cela suffit pour commencer l’échange. Je vous aide ensuite à choisir les fonctions à développer en premier.' },
  { question: 'Peut-on commencer par une version plus petite ?', answer: 'Oui. Je peux isoler avec vous un premier usage et reporter les fonctions secondaires. Le devis décrit ce qui entre dans cette version et ce qui reste pour une étape suivante.' },
  { question: 'Puis-je faire reprendre un site ou une application existante ?', answer: 'Présentez-moi la version actuelle et les difficultés rencontrées. L’état du code, les accès disponibles et les dépendances permettent de déterminer ce qui peut être conservé. Le périmètre de la reprise se définit après cet examen.' },
  { question: 'Qu’est-ce que je récupère à la livraison ?', answer: 'Le code, vos données et la documentation prévus au devis. Les comptes d’hébergement, de domaine et de publication sur les stores sont à votre nom quand le projet en a besoin ; vous en gardez les accès. Je vérifie avec vous les parcours convenus et je vous remets les éléments prévus.' },
  { question: 'Comment se passe le suivi après la mise en ligne ?', answer: 'Je définis avec vous les besoins de maintenance : mises à jour, corrections et surveillance des services concernés. Les nouvelles fonctions sont chiffrées séparément. Le devis ou le contrat de suivi précise les interventions couvertes.' },
  { question: 'Faut-il être à Toulouse ou connaître la technique ?', answer: 'Je travaille depuis Toulouse et également à distance. Vous apportez votre connaissance du métier ; je vous explique les choix techniques et leurs conséquences sur le budget, les délais et l’usage.' },
]

export default function Questions() {
  return <section className="section-space bg-[#F4F6F7]" aria-labelledby="questions-title">
    <JsonLd data={faq(questions)} />
    <div className="container-site grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
      <div><p className="eyebrow">Avant de commencer</p><h2 id="questions-title" className="title-section mt-4">Vos questions avant de lancer un projet.</h2><p className="mt-5 text-[#59666E]">Le premier échange sert aussi à vérifier que le projet est assez défini pour être chiffré.</p><Link href="/preparer-son-projet" className="text-link mt-6 text-base">Préparer mon projet <span aria-hidden>→</span></Link></div>
      <div className="border-t border-[#DCE3E6]">{questions.map(item => <details key={item.question} className="group border-b border-[#DCE3E6] py-5"><summary className="flex list-none items-center justify-between gap-5 font-semibold [&::-webkit-details-marker]:hidden">{item.question}<span aria-hidden className="text-2xl text-[#246B66] group-open:hidden">+</span><span aria-hidden className="hidden text-2xl text-[#246B66] group-open:block">−</span></summary><p className="mt-3 text-base leading-relaxed text-[#59666E]">{item.answer}</p></details>)}</div>
    </div>
  </section>
}
