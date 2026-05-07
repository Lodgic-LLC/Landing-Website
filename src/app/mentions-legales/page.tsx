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
    <section className="w-full bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="font-bricolage-grotesque-bold text-[#001F45] text-3xl md:text-4xl lg:text-5xl mb-4">
            Mentions légales
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-xl shadow-xl border border-[#001F45]/10 space-y-8">
          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#001F45] text-2xl">
              Éditeur du site
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Lodgic
              <br />
              Toulouse, Occitanie
              <br />
              Email : contact@lodgic-dev.com
              <br />
              Téléphone : 06 52 46 87 50
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bricolage-grotesque-bold text-[#001F45] text-2xl">
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
            <h2 className="font-bricolage-grotesque-bold text-[#001F45] text-2xl">
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
