import type { Metadata } from 'next'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Notre approche de l'IA | Lodgic",
  description: "Découvrez notre politique d'utilisation de l'Intelligence Artificielle : productivité décuplée, maîtrise architecturale totale et sécurité garantie.",
  alternates: {
    canonical: `${SITE_URL}/intelligence-artificielle`,
  },
}

export default function IAPolicyPage() {
  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Intelligence artificielle', url: `${SITE_URL}/intelligence-artificielle` },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-[#001F45] pt-32 pb-24 selection:bg-[#DBFF00] selection:text-[#001F45]">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      {/* Fines grilles / halos décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,31,69,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,31,69,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3b5bdb]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#DBFF00]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm font-inter font-semibold uppercase tracking-[0.2em] text-[#001F45]/60 mb-4">
            Politique & Méthodologie
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] mb-6">
            L'Intelligence Artificielle chez Lodgic
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-[#001F45]/75 font-inter">
            Nous utilisons l'IA comme un accélérateur de vélocité, sans jamais faire de compromis sur la qualité, la sécurité et la maîtrise de votre code.
          </p>
        </div>

        {/* Lignes directrices - Style Éditorial / Timeline */}
        <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
          
          {/* Point 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            <div className="text-6xl md:text-8xl leading-none font-sofia-bold text-[#001F45]/5 group-hover:text-[#001F45]/15 transition-colors duration-500 will-change-colors shrink-0">
              01
            </div>
            <div className="flex-1 pt-2 md:pt-4">
              <h3 className="text-2xl md:text-3xl font-sofia-bold text-[#001F45] mb-4">Productivité encadrée</h3>
              <p className="text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                L'IA est un outil redoutable pour générer de la base rapidement (boilerplate) et accélérer le développement. Nous l'utilisons pour réduire drastiquement les délais de livraison et vous offrir un résultat concret plus vite, tout en restant dans un cadre strictement défini par nos développeurs humains.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#001F45]/10"></div>

          {/* Point 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            <div className="text-6xl md:text-8xl leading-none font-sofia-bold text-[#001F45]/5 group-hover:text-[#001F45]/15 transition-colors duration-500 will-change-colors shrink-0">
              02
            </div>
            <div className="flex-1 pt-2 md:pt-4">
              <h3 className="text-2xl md:text-3xl font-sofia-bold text-[#001F45] mb-4">Maîtrise architecturale</h3>
              <p className="text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                L'IA ne prend jamais de décisions critiques. Nous concevons nous-mêmes la structure, l'abstraction et les concepts d'architecture de chaque application. Le code généré est façonné avec soin pour s’inscrire parfaitement dans notre vision technique unique, en gardant 100% le contrôle.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#001F45]/10"></div>

          {/* Point 3 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            <div className="text-6xl md:text-8xl leading-none font-sofia-bold text-[#001F45]/5 group-hover:text-[#001F45]/15 transition-colors duration-500 will-change-colors shrink-0">
              03
            </div>
            <div className="flex-1 pt-2 md:pt-4">
              <h3 className="text-2xl md:text-3xl font-sofia-bold text-[#001F45] mb-4">Repassage & Sécurité</h3>
              <p className="text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Tout code assisté par IA fait l’objet d'un examen rigoureux. Une relecture minutieuse (repassage humain) est systématiquement appliquée pour vérifier le respect strict de nos normes de sécurité, chasser les potentielles failles et garantir au mieux l'optimisation des performances.
              </p>
            </div>
          </div>

        </div>

        {/* Section de conclusion / Note */}
        <div className="mt-16 md:mt-24 rounded-2xl bg-white border border-[#001F45]/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-sofia-bold text-[#001F45] mb-3">Notre vision</h4>
            <p className="text-[#001F45]/75 font-inter text-sm leading-relaxed max-w-2xl">
              Nous voyons l'intelligence artificielle non pas comme un remplaçant, mais comme un <strong className="text-[#001F45]">assistant de développement ultra-performant</strong>. Elle nous permet d'être plus compétitifs pour vous, tout en maintenant l'artisanat du code, la sécurité des données et notre exigence d'excellence sur les applications livrées.
            </p>
          </div>
          <div className="shrink-0">
            <a href="/offre" className="inline-flex h-12 items-center justify-center rounded-full bg-[#001F45] px-8 text-sm font-inter font-semibold text-white hover:bg-[#0b2b63] transition-colors">
              Découvrir nos offres
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
