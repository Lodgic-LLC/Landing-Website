import type { Metadata } from 'next'
import PageLegale, { type SectionLegale } from '@/components/PageLegale'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site lodgic-dev.com : éditeur, hébergeur et propriété intellectuelle.',
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false, follow: true },
}

/** Repère visuel pour une information encore à fournir. */
const AComp = ({ children }: { children: string }) => (
  <span className="rounded bg-[#FBEFE9] px-2 py-0.5 font-semibold text-[#A34322]">{children}</span>
)

const sections: SectionLegale[] = [
  {
    titre: 'Éditeur du site',
    contenu: (
      <>
        Yann Rouquié, entrepreneur individuel exerçant sous le nom commercial Lodgic
        <br />
        Entreprise individuelle (régime de la micro-entreprise)
        <br />
        {/* TODO : remplacer par les 9 chiffres du SIREN avant la mise en ligne */}
        SIREN : <AComp>à compléter</AComp>
        <br />
        Toulouse, Occitanie, France
        <br />
        Email : {CONTACT_EMAIL}
        <br />
        Téléphone : {CONTACT_PHONE_DISPLAY}
        <br />
        Directeur de la publication : Yann Rouquié
      </>
    ),
  },
  {
    titre: 'TVA',
    paragraphes: ['TVA non applicable, article 293 B du Code général des impôts.'],
  },
  {
    titre: 'Hébergement',
    contenu: (
      <>
        Le site est hébergé par Vercel Inc.
        <br />
        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
      </>
    ),
  },
  {
    titre: 'Médiation de la consommation',
    contenu: (
      <>
        Conformément à l&apos;article L.612-1 du Code de la consommation, tout client
        particulier peut recourir gratuitement à un médiateur de la consommation en vue de la
        résolution amiable d&apos;un litige.{' '}
        {/* TODO : adhérer à un médiateur et indiquer ici son nom, son adresse et son site */}
        <AComp>Médiateur à désigner</AComp>
      </>
    ),
  },
  {
    titre: 'Propriété intellectuelle',
    paragraphes: [
      "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) est protégé par le droit d'auteur. Toute reproduction, représentation ou diffusion, même partielle, est interdite sans autorisation préalable.",
    ],
  },
]

export default function Page() {
  return <PageLegale titre="Mentions légales" sections={sections} />
}
