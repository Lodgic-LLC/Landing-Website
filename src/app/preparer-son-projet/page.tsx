import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Préparer un projet de site ou d’application',
  description: 'Les informations utiles pour cadrer votre site, application ou outil métier avec Yann. Une trame à télécharger et des exemples tirés des projets Lodgic.',
  alternates: { canonical: `${SITE_URL}/preparer-son-projet` },
}

const sujets = [
  { title: 'L’usage à rendre possible', text: 'Qui utilisera le projet ? Que doit pouvoir faire cette personne ? Décrivez une situation réelle plutôt qu’une liste de technologies.', example: 'Pour BewasBeen : un enseignant prépare des exercices et consulte les résultats de sa classe.' },
  { title: 'La première version', text: 'Séparez ce qui est indispensable au premier usage de ce qui peut attendre. Pour chaque fonction, précisez comment vous saurez qu’elle fonctionne.', example: 'Exemple de critère : un élève saisit son code de classe et accède aux exercices sans créer de compte individuel.' },
  { title: 'Ce qui existe déjà', text: 'Indiquez si vous avez un site, du code, des fichiers à reprendre, une charte graphique ou des contenus. Listez aussi les outils avec lesquels le projet doit échanger.', example: 'Pour une refonte, le lien du site actuel et quelques parcours à améliorer donnent un premier point de départ.' },
  { title: 'Les contraintes', text: 'Précisez la date souhaitée, ce qui la motive et votre enveloppe si elle est définie. Mentionnez les appareils utilisés, les rôles des utilisateurs et les données auxquelles chacun doit accéder.', example: 'Une date de lancement imposée conduit parfois à réduire le périmètre de la première version.' },
  { title: 'La manière de vérifier le résultat', text: 'Choisissez des critères observables : une tâche accomplie, une saisie supprimée, une page qui se charge mieux. Les mesures doivent garder leur contexte.', example: 'Pour Alliance-TRAVAUX, l’étude de cas présente le temps d’affichage avant et après la refonte, ainsi que les rapports de performance.' },
  { title: 'La vie du projet après livraison', text: 'Qui modifiera les contenus ? Qui utilisera les accès d’administration ? Quels éléments devront être entretenus ? Ces réponses servent à définir la passation et le suivi.', example: 'Hébergement, services externes et maintenance sont à prévoir en plus du développement initial.' },
]

export default function PreparerSonProjet() {
  return <main>
    <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name: 'Préparer son projet', url: `${SITE_URL}/preparer-son-projet` }])} />
    <header className="section-space bg-[#F4F6F7]"><div className="container-site max-w-4xl"><p className="eyebrow">Guide pratique de Yann</p><h1 className="title-hero mt-4">Avant de développer, préciser le besoin.</h1><p className="mt-6 max-w-2xl text-xl text-[#59666E]">Quelques réponses écrites suffisent pour préparer notre échange. Vous pouvez laisser les points encore ouverts : cette trame sert à poser les questions, pas à tout résoudre seul.</p><a href="/ressources/trame-projet-lodgic.txt" download className="text-link mt-7">Télécharger la trame à remplir <span className="text-sm font-normal">TXT</span><span aria-hidden>↓</span></a></div></header>
    <div className="container-site section-space max-w-4xl"><div className="space-y-12">{sujets.map(item => <section key={item.title} className="border-t border-[#DCE3E6] pt-7"><h2 className="text-2xl md:text-3xl">{item.title}</h2><p className="mt-4 text-[#59666E]">{item.text}</p><p className="mt-5 border-l-2 border-[#246B66] pl-5 text-base text-[#59666E]">{item.example}</p></section>)}</div>
      <aside className="mt-14 border-t border-[#DCE3E6] pt-8"><h2 className="text-2xl">Voir ces questions dans des projets livrés.</h2><div className="mt-5 flex flex-wrap gap-6"><Link href="/projets/alliance-travaux" className="text-link">Alliance-TRAVAUX →</Link><Link href="/projets/bewasbeen" className="text-link">BewasBeen →</Link></div></aside>
      <section className="mt-14 bg-[#F4F6F7] p-7 md:p-10"><h2 className="text-2xl">Vous avez déjà quelques réponses ?</h2><p className="mt-4 text-[#59666E]">Reprenez les points utiles dans votre message. Un document complet n’est pas nécessaire pour me contacter.</p><Link href="/contact" className="btn-primary mt-6">Présenter mon projet <span aria-hidden>↗</span></Link></section>
    </div>
  </main>
}
