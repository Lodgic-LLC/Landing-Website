import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales - Lodgic',
  description:
    'Mentions légales de Lodgic : informations éditeur, hébergement et contact.',
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
}

export default function MentionsLegalesPage() {
  return (
    <section className="w-full bg-[#F8F6F2] pt-24 md:pt-36 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="font-bricolage-grotesque-bold text-[#2E2B28] text-3xl md:text-4xl lg:text-5xl mb-4">
            Mentions légales
          </h1>
          <div className="w-24 h-1 bg-[#F8F6F2]/60 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-xl shadow-xl border border-[#2E2B28]/10 space-y-8">
          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#2E2B28] text-2xl">
              Éditeur du site
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Yann Rouquié, entrepreneur individuel exerçant sous le nom commercial Lodgic
              <br />
              Entreprise individuelle (régime de la micro-entreprise)
              <br />
              SIREN : {/* TODO : remplacer par les 9 chiffres du SIREN avant la mise en ligne */}
              <span className="rounded bg-[#FBEFE9] px-2 py-0.5 font-semibold text-[#A34322]">
                à compléter
              </span>
              <br />
              Toulouse, Occitanie, France
              <br />
              Email : contact@lodgic-dev.com
              <br />
              Téléphone : 06 43 51 71 57
              <br />
              Directeur de la publication : Yann Rouquié
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#2E2B28] text-2xl">
              TVA
            </h2>
            <p className="text-[#374151] leading-relaxed">
              TVA non applicable, article 293 B du Code général des impôts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#2E2B28] text-2xl">
              Hébergement
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Le site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, États-Unis
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#2E2B28] text-2xl">
              Médiation de la consommation
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Conformément à l&apos;article L.612-1 du Code de la consommation, tout client
              particulier peut recourir gratuitement à un médiateur de la consommation en vue
              de la résolution amiable d&apos;un litige.{' '}
              <span className="rounded bg-[#FBEFE9] px-2 py-0.5 font-semibold text-[#A34322]">
                Médiateur à désigner
              </span>{' '}
              {/* TODO : adhérer à un médiateur de la consommation et indiquer ici son nom, son adresse et son site */}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#2E2B28] text-2xl">
              Propriété intellectuelle
            </h2>
            <p className="text-[#374151] leading-relaxed">
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos,
              éléments graphiques) est protégé par le droit d&apos;auteur. Toute
              reproduction, représentation ou diffusion, même partielle, est interdite
              sans autorisation préalable.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
