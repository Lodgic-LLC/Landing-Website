import { FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=lodgic&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_z6sHyOvSQaWKGq_JF4-bweWFxtHmpsGggN00m6NE9p61FmCV6F_2wR0CG-3AVOwl7ETec0%3D'

export default function AvisGoogle({ compact = false }: { compact?: boolean }) {
  if (compact) return <aside id="avis-google" aria-label="Extrait de l’avis Google de Cyrille" className="project-review-preview">
    <div className="project-review-preview-intro">
      <p className="eyebrow">Retour d’expérience client</p>
      <h3 className="mt-2 text-2xl">Le projet vu par Cyrille</h3>
      <p className="mt-2 text-sm text-[#59666E]">Alliance-TRAVAUX</p>
    </div>
    <div className="project-review-preview-content">
      <div className="project-review-heading">
        <span className="project-review-avatar" aria-hidden="true">C</span>
        <div className="project-review-author">
          <p className="font-semibold">Cyrille</p>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex gap-0.5 text-[#F4B400]" role="img" aria-label="Cinq étoiles sur cinq">
              {Array.from({ length: 5 }, (_, index) => <FaStar key={index} aria-hidden="true" className="h-4 w-4" />)}
            </div>
            <span className="text-sm text-[#59666E]">Avis Google</span>
          </div>
        </div>
        <FcGoogle aria-hidden="true" className="ml-auto h-6 w-6 shrink-0" />
      </div>
      <blockquote cite={GOOGLE_REVIEWS_URL} className="project-review-text text-base leading-relaxed text-[#1D2930]">
        « Très bonne expérience avec Yann qui a su s’adapter à ma demande pour une mise à jour en profondeur de mon site vitrine. »
      </blockquote>
      <Link href="/realisations#avis-google" className="project-review-link">Lire l’avis complet <span aria-hidden="true">→</span></Link>
    </div>
  </aside>

  return <aside id="avis-google" aria-label="Avis Google de Cyrille sur Alliance-TRAVAUX" className="project-review">
    <div className="project-review-heading">
      <span className="project-review-avatar" aria-hidden="true">C</span>
      <div className="project-review-author">
        <p className="font-semibold">Cyrille</p>
        <div className="mt-1 flex items-center gap-2">
          <div className="flex gap-0.5 text-[#F4B400]" role="img" aria-label="Cinq étoiles sur cinq">
            {Array.from({ length: 5 }, (_, index) => <FaStar key={index} aria-hidden="true" className="h-4 w-4" />)}
          </div>
          <span className="text-sm text-[#59666E]">Avis Google</span>
        </div>
      </div>
      <FcGoogle aria-hidden="true" className="ml-auto h-6 w-6 shrink-0" />
    </div>
    <blockquote cite={GOOGLE_REVIEWS_URL} className="project-review-text text-base leading-relaxed text-[#1D2930]">
      <p>Très bonne expérience avec Yann qui a su s’adapter à ma demande pour une mise à jour en profondeur de mon site vitrine.</p>
      <p className="mt-3">J’ai particulièrement apprécié son excellente expertise technique et sa pugnacité à résoudre les petits problèmes rencontrés.</p>
      <p className="mt-3">Site livré dans un délai court, avec un bon niveau de disponibilité et de réactivité, le tout pour un tarif que je qualifierai de raisonnable.</p>
    </blockquote>
    <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="project-review-link">Voir l’avis sur Google <span aria-hidden="true">↗</span></a>
  </aside>
}
