import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd, { filAriane } from '@/components/JsonLd'
import Formulaire from '@/components/Formulaire'
import Galerie from '@/components/Galerie'
import { Accordeon, type FaqItem } from '@/components/Accordeon'
import { SITE_URL } from '@/lib/site'

const PATH = '/projets/bewasbeen'
const NAME = 'BewasBeen — plateforme d’apprentissage des verbes irréguliers'
const DESCRIPTION =
  "Étude de cas : conception et développement d'une plateforme web pour l'apprentissage des verbes irréguliers anglais — espace enseignant, trois moteurs d'exercice, suivi par élève."

const chiffres = [
  { valeur: '3', libelle: 'moteurs d’exercice' },
  { valeur: '2', libelle: 'rôles applicatifs' },
  { valeur: '0', libelle: 'compte élève requis' },
]

const stack = ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma']

const screens = [
  { src: '/projets/bewasbeen/bwb_landing_page.jpg', alt: "Page d'accueil de BewasBeen", caption: 'Accueil' },
  { src: '/projets/bewasbeen/bwb_professor_dashboard.jpg', alt: 'Tableau de bord enseignant : suivi des élèves et des classes', caption: 'Tableau de bord' },
  { src: '/projets/bewasbeen/bwb_create_class.jpg', alt: "Création d'une classe avec code d'accès et QR code", caption: 'Créer une classe' },
  { src: '/projets/bewasbeen/bwb_play_modes.jpg', alt: "Sélection du mode d'exercice", caption: "Modes d'exercice" },
  { src: '/projets/bewasbeen/bwb_drag_and_drop_mode.jpg', alt: 'Exercice en glisser-déposer', caption: 'Glisser-déposer' },
  { src: '/projets/bewasbeen/bwb_typing_mode.jpg', alt: 'Exercice en saisie clavier', caption: 'Frappe clavier' },
  { src: '/projets/bewasbeen/bwb_audio_mode.jpg', alt: 'Exercice en mode audio', caption: 'Mode audio' },
  { src: '/projets/bewasbeen/bwb_create_verb_list.jpg', alt: "Création d'une liste de verbes", caption: 'Créer une liste' },
  { src: '/projets/bewasbeen/bwb_verb_list_template.jpg', alt: 'Modèles de listes de verbes', caption: 'Modèles de listes' },
]

const fonctionnalites: FaqItem[] = [
  {
    question: 'Tableau de bord enseignant',
    answer:
      "Créer des classes, inviter les élèves par code ou QR code, suivre la progression de chacun. Les résultats sont centralisés et exportables en PDF ou CSV.",
  },
  {
    question: 'Listes de verbes personnalisées',
    answer:
      "L'enseignant compose ses propres listes ou repart de modèles prêts à l'emploi, puis les assigne à une classe en quelques clics.",
  },
  {
    question: 'Trois modes d’entraînement',
    answer:
      "Glisser-déposer, saisie clavier ou reconnaissance audio. Chaque mode a sa logique de validation et ajuste sa difficulté aux réponses de l'élève.",
  },
  {
    question: 'Suivi de la progression',
    answer:
      "Chaque session est enregistrée : taux de réussite par verbe, temps passé, historique des tentatives. L'enseignant repère vite les points à renforcer.",
  },
  {
    question: 'Accès par code de classe',
    answer:
      "L'élève scanne un QR code projeté au tableau ou saisit un code court. Aucun compte à créer : la friction d'entrée est nulle.",
  },
  {
    question: 'Exports PDF et CSV',
    answer:
      "Les résultats d'une classe ou d'un élève s'exportent pour les bulletins et les réunions parents-professeurs.",
  },
]

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  keywords: [
    'plateforme apprentissage anglais',
    'verbes irréguliers anglais',
    'application web éducative',
    'développement plateforme pédagogique',
    'développeur web Toulouse',
  ],
  openGraph: {
    title: NAME,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    siteName: 'Lodgic',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'BewasBeen',
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    creator: { '@id': `${SITE_URL}/#person` },
  }

  return (
    <main>
      <JsonLd id="projet-bewasbeen" data={schema} />
      <JsonLd data={filAriane([
          { name: 'Accueil', url: SITE_URL },
          { name: 'BewasBeen', url: `${SITE_URL}${PATH}` },
        ])} />

      {/* Présentation */}
      <section className="border-b border-[#E6E1D8] bg-[#F8F6F2] pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-inter text-[#6B655D] transition-colors hover:text-[#2E2B28]"
          >
            <span aria-hidden>←</span> Toutes mes réalisations
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow eyebrow-left">EdTech · Apprentissage de l’anglais</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance">
                BewasBeen
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#6B655D] font-inter">
                Une plateforme web pour apprendre les verbes irréguliers anglais, que j’ai
                conçue et développée de bout en bout : espace enseignant, gestion de classes,
                trois moteurs d’exercice et suivi individuel des élèves.
              </p>

              <a
                href="https://bewasbeen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C2542D] px-5 py-2.5 text-sm font-inter font-semibold text-white transition-colors hover:bg-[#A34322]"
              >
                Voir le site en ligne
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {stack.map((techno) => (
                  <span
                    key={techno}
                    className="rounded border border-[#E6E1D8] bg-white px-2.5 py-1 mono text-[11px] text-[#6B655D]"
                  >
                    {techno}
                  </span>
                ))}
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-px self-start overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#E6E1D8]">
              {chiffres.map((c) => (
                <div key={c.libelle} className="bg-white px-3 py-5 text-center">
                  <dt className="sr-only">{c.libelle}</dt>
                  <dd>
                    <span className="block font-sofia-bold text-3xl text-[#C2542D]">{c.valeur}</span>
                    <span className="mt-1 block text-[11px] leading-tight text-[#6B655D] font-inter">
                      {c.libelle}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Le besoin et la réponse */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
              Le besoin
            </p>
            <p className="mt-3 leading-relaxed text-[#6B655D] font-inter">
              Les enseignants n’avaient aucun outil pour faire travailler les verbes
              irréguliers en autonomie et suivre les résultats. Les solutions existantes
              imposaient un compte à chaque élève — une friction rédhibitoire en classe.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#C2542D]">
              Ma réponse
            </p>
            <p className="mt-3 leading-relaxed text-[#2E2B28] font-inter">
              Un espace enseignant complet et un accès élève sans inscription : un QR code
              projeté au tableau ou un code court suffit. Le modèle de données rattache les
              résultats à la classe sans jamais créer d’identifiant — donc aucune donnée de
              mineur à gérer.
            </p>
          </div>
        </div>
      </section>

      {/* Captures */}
      <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-12 md:py-16" aria-labelledby="captures">
        <div className="mx-auto max-w-4xl px-6">
          <h2 id="captures" className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight">
            La plateforme en images
          </h2>
          <p className="mt-3 text-[#6B655D] font-inter">
            Du tableau de bord enseignant aux trois modes d’exercice.
          </p>
          <div className="mt-8">
            <Galerie screens={screens} url="bewasbeen.com" />
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="fonctionnalites">
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="fonctionnalites"
            className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight"
          >
            Ce que la plateforme fait
          </h2>
          <div className="mt-8">
            <Accordeon items={fonctionnalites} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-12 md:py-16" aria-labelledby="contact-projet">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <h2
              id="contact-projet"
              className="text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
            >
              Un projet du même genre ?
            </h2>
            <p className="mt-4 leading-relaxed text-[#6B655D] font-inter">
              Décrivez-le en quelques lignes, même approximatives. Je vous réponds sous
              24 heures avec un premier avis.
            </p>
          </div>
          <Formulaire source="projet-bewasbeen" />
        </div>
      </section>
    </main>
  )
}
