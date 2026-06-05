import type { Metadata } from 'next'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Notre approche de l'IA",
  description:
    "Découvrez la politique d'utilisation de l'IA chez Lodgic : productivité encadrée, maîtrise architecturale, garde-fous qualité, sécurité des données et outils que nous utilisons au quotidien.",
  alternates: {
    canonical: `${SITE_URL}/intelligence-artificielle`,
  },
  openGraph: {
    title: "Notre approche de l'IA chez Lodgic",
    description:
      "Notre méthode pour utiliser l'intelligence artificielle dans le développement web et mobile, sans compromis sur la qualité, la sécurité ou la confidentialité.",
    url: `${SITE_URL}/intelligence-artificielle`,
    siteName: 'Lodgic',
    type: 'article',
    locale: 'fr_FR',
  },
}

export default function IAPolicyPage() {
  const breadcrumbItems = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Intelligence artificielle', url: `${SITE_URL}/intelligence-artificielle` },
  ]

  return (
    <main className="relative overflow-hidden bg-slate-50 text-[#001F45] pt-32 pb-24 selection:bg-[#DBFF00] selection:text-[#001F45]">
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

        {/* Intro éditoriale */}
        <section className="max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-base md:text-lg text-[#001F45]/80 font-inter leading-relaxed">
            L'arrivée des assistants IA dans le développement logiciel a profondément changé la manière dont les agences livrent un produit. Chez Lodgic, nous avons fait un choix clair : <strong className="text-[#001F45]">tirer parti de cette accélération sans en subir les pièges</strong>. L'IA ne remplace ni l'expérience d'un développeur, ni le sens du produit, ni la rigueur d'une revue de code. Elle vient simplement supprimer les heures perdues sur la plomberie répétitive pour nous permettre de concentrer notre temps là où il compte vraiment : l'architecture, la qualité, et la valeur livrée.
          </p>
          <p className="mt-5 text-base md:text-lg text-[#001F45]/80 font-inter leading-relaxed">
            Cette page documente notre politique d'utilisation de l'IA, les garde-fous que nous posons, et la manière dont nous protégeons votre code et vos données. Elle s'adresse autant aux clients qui se demandent &laquo;&nbsp;est-ce que mon application va finir copiée-collée par un robot ?&nbsp;&raquo; qu'à ceux qui veulent comprendre comment des ingénieurs expérimentés livrent des produits complexes dans les délais.
          </p>
        </section>

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
                En tant qu'ingénieurs, nous intégrons l'IA comme un levier de productivité : elle accélère les tâches répétitives et nous libère du temps pour ce qui exige vraiment notre expertise. Le résultat, c'est une vélocité accrue sans compromis sur la rigueur.
              </p>
              <p className="mt-3 text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Concrètement, l'IA prend en charge les tâches à faible enjeu cognitif : composants de base, types, schémas de données, tests unitaires de premier niveau. Ce gain — entre 20&nbsp;% et 30&nbsp;% du temps de développement — est réinvesti dans la conception, les tests sur device réel et la finition UX.
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
                L'IA ne prend jamais de décisions critiques. Nous concevons nous-mêmes la structure, l'abstraction et les concepts d'architecture de chaque application. Le code généré est façonné avec soin pour s'inscrire parfaitement dans notre vision technique unique, en gardant 100&nbsp;% le contrôle.
              </p>
              <p className="mt-3 text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Le découpage en modules, le choix de la stack (Next.js, React Native, Expo, NestJS, Prisma, PostgreSQL), les contrats d'API, la modélisation des données et les politiques de sécurité sont définis par nos développeurs avant qu'une seule ligne ne soit générée. L'IA est ensuite cantonnée à des tâches encadrées, jamais à des choix structurants.
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
                Tout code assisté par IA fait l'objet d'un examen rigoureux. Une relecture minutieuse (repassage humain) est systématiquement appliquée pour vérifier le respect strict de nos normes de sécurité, chasser les potentielles failles et garantir au mieux l'optimisation des performances.
              </p>
              <p className="mt-3 text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Notre pipeline qualité combine ESLint, Prettier, TypeScript en mode strict, une suite de tests automatisés et une revue de code humaine ligne par ligne avant chaque merge. L'IA peut écrire un brouillon ; elle ne valide jamais sa propre sortie. C'est un développeur Lodgic qui pousse en production.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#001F45]/10"></div>

          {/* Point 4 - Confidentialité */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            <div className="text-6xl md:text-8xl leading-none font-sofia-bold text-[#001F45]/5 group-hover:text-[#001F45]/15 transition-colors duration-500 will-change-colors shrink-0">
              04
            </div>
            <div className="flex-1 pt-2 md:pt-4">
              <h3 className="text-2xl md:text-3xl font-sofia-bold text-[#001F45] mb-4">Confidentialité & propriété intellectuelle</h3>
              <p className="text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Votre code et vos données ne quittent jamais un environnement maîtrisé. Nous utilisons exclusivement des plans professionnels avec <strong className="text-[#001F45]">opt-out de l'entraînement</strong> activé par défaut. Aucun secret, aucune donnée personnelle de vos utilisateurs et aucun extrait propriétaire n'est envoyé à un modèle public.
              </p>
              <p className="mt-3 text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                La propriété intellectuelle du code livré vous appartient intégralement. Nous documentons les zones où l'IA a contribué pour traçabilité, et nous n'utilisons jamais le code d'un client comme contexte pour un autre projet. Sur les sujets sensibles (santé, finance, données enfants), nous travaillons en local ou via des modèles auto-hébergés sur demande.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#001F45]/10"></div>

          {/* Point 5 - Outils */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
            <div className="text-6xl md:text-8xl leading-none font-sofia-bold text-[#001F45]/5 group-hover:text-[#001F45]/15 transition-colors duration-500 will-change-colors shrink-0">
              05
            </div>
            <div className="flex-1 pt-2 md:pt-4">
              <h3 className="text-2xl md:text-3xl font-sofia-bold text-[#001F45] mb-4">L'IA au service de l'ingénierie</h3>
              <p className="text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Nous sélectionnons des assistants IA matures pour leurs garanties contractuelles et leur qualité de sortie. Chaque outil est configuré avec une politique de rétention zéro, l'apprentissage désactivé et un périmètre d'accès limité aux dépôts du projet en cours.
              </p>
              <p className="mt-3 text-[#001F45]/70 font-inter leading-relaxed text-base md:text-lg">
                Notre posture reste celle d'ingénieurs : l'IA est un levier, pas un pilote automatique. Nous définissons les contraintes, nous évaluons les sorties, et c'est toujours un ingénieur Lodgic qui valide avant de pousser en production. Si votre infrastructure ou votre conformité l'exige, nous pouvons travailler entièrement sans assistant IA — la méthode s'adapte en conséquence.
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
            <a href="/rendez-vous" className="inline-flex h-12 items-center justify-center rounded-full bg-[#001F45] px-8 text-sm font-inter font-semibold text-white hover:bg-[#0b2b63] transition-colors">
              Prendre rendez-vous
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
