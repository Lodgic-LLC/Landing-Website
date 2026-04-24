import Link from 'next/link'
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaMobileAlt,
  FaLayerGroup,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Highlight = { id: string; text: string }

type Project = {
  id: number
  slug: string
  title: string
  category: string
  description: string
  year: string
  icon: IconType
  accent: 'blue' | 'indigo' | 'rose'
  highlights: Highlight[]
  link: string
  poster: 'house' | 'rh' | 'shop'
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'houseguard-gestion-locative',
    title: 'HouseGuard',
    category: 'Application mobile',
    description:
      'App iOS et Android pour propriétaires et locataires : gestion des biens, des incidents et des paiements.',
    year: '2026',
    icon: FaMobileAlt,
    accent: 'blue',
    poster: 'house',
    highlights: [
      { id: 'h1', text: 'Suivi biens, locataires, signalements' },
      { id: 'h2', text: 'Paiements et loyers centralisés' },
      { id: 'h3', text: 'Messagerie propriétaire ↔ locataire' },
    ],
    link: '/projets/houseguard-gestion-locative',
  },
  {
    id: 2,
    slug: 'application-gestion-rh',
    title: 'Application RH',
    category: 'SaaS interne',
    description:
      'Plateforme web sur mesure : congés, notes de frais, onboarding — une seule interface pour toute l’équipe RH.',
    year: '2026',
    icon: FaLayerGroup,
    accent: 'indigo',
    poster: 'rh',
    highlights: [
      { id: 'r1', text: 'Workflow de validation paramétrable' },
      { id: 'r2', text: 'Dashboard RH temps réel' },
      { id: 'r3', text: 'Exports paie & comptabilité' },
    ],
    link: '/projets/application-gestion-rh',
  },
]

const ACCENT_GRADIENTS: Record<Project['accent'], string> = {
  blue: 'from-[#e8f0ff] via-[#f3f7ff] to-[#f6f7fc]',
  indigo: 'from-[#ece8ff] via-[#f3effd] to-[#f6f7fc]',
  rose: 'from-[#fde7ec] via-[#fcf0f0] to-[#f6f7fc]',
}

const ACCENT_DOT: Record<Project['accent'], string> = {
  blue: 'bg-[#0EA5E9]',
  indigo: 'bg-[#6366F1]',
  rose: 'bg-[#F43F5E]',
}

const ACCENT_RING: Record<Project['accent'], string> = {
  blue: 'ring-[#0EA5E9]/15',
  indigo: 'ring-[#6366F1]/15',
  rose: 'ring-[#F43F5E]/15',
}

const ACCENT_ICON_BG: Record<Project['accent'], string> = {
  blue: 'bg-[#0EA5E9]/10 text-[#0EA5E9]',
  indigo: 'bg-[#6366F1]/10 text-[#6366F1]',
  rose: 'bg-[#F43F5E]/10 text-[#F43F5E]',
}

const HousePoster = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative flex items-end gap-[-8px] translate-y-3">
      <div className="relative -rotate-6 translate-y-4">
        <div className="w-[72px] h-[140px] rounded-[18px] border-[3px] border-[#0b1f3f] bg-white shadow-lg overflow-hidden p-1.5">
          <div className="h-full rounded-[10px] bg-[#f6f7fc] p-1.5">
            <div className="h-1 w-6 rounded-full bg-[#001F45]/30 mx-auto" />
            <div className="mt-2 h-2 w-10 rounded bg-[#001F45]/70" />
            <div className="mt-1 h-1.5 w-14 rounded bg-[#001F45]/20" />
            <div className="mt-2 rounded bg-[#001F45] h-5" />
            <div className="mt-2 h-1.5 w-full rounded bg-[#001F45]/10" />
            <div className="mt-1 h-1.5 w-3/4 rounded bg-[#001F45]/10" />
          </div>
        </div>
      </div>
      <div className="relative z-10 scale-110">
        <div className="w-[80px] h-[160px] rounded-[20px] border-[3px] border-[#001F45] bg-white shadow-xl overflow-hidden p-1.5">
          <div className="h-full rounded-[12px] bg-gradient-to-b from-[#eaf0ff] to-white p-2">
            <div className="h-1 w-8 rounded-full bg-[#001F45]/40 mx-auto" />
            <div className="mt-2 h-2 w-12 rounded bg-[#001F45]/80" />
            <div className="mt-0.5 h-1.5 w-16 rounded bg-[#001F45]/30" />
            <div className="mt-2 rounded-lg bg-[#001F45] p-1.5">
              <div className="h-1.5 w-8 rounded bg-white/60" />
              <div className="mt-1 h-2 w-10 rounded bg-white" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1">
              <div className="h-6 rounded bg-[#001F45]/10" />
              <div className="h-6 rounded bg-[#DBFF00]/60" />
            </div>
            <div className="mt-1.5 h-1.5 w-full rounded bg-[#001F45]/10" />
            <div className="mt-1 h-1.5 w-2/3 rounded bg-[#001F45]/10" />
          </div>
        </div>
      </div>
      <div className="relative rotate-6 translate-y-4">
        <div className="w-[72px] h-[140px] rounded-[18px] border-[3px] border-[#0b1f3f] bg-white shadow-lg overflow-hidden p-1.5">
          <div className="h-full rounded-[10px] bg-[#f6f7fc] p-1.5">
            <div className="h-1 w-6 rounded-full bg-[#001F45]/30 mx-auto" />
            <div className="mt-2 h-2 w-12 rounded bg-[#001F45]/70" />
            <div className="mt-2 rounded bg-white ring-1 ring-[#001F45]/10 h-5" />
            <div className="mt-1 rounded bg-white ring-1 ring-[#001F45]/10 h-5" />
            <div className="mt-1 rounded bg-white ring-1 ring-[#001F45]/10 h-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const RhPoster = () => (
  <div className="absolute inset-0 flex items-center justify-center p-6">
    <div className="relative w-full max-w-[320px]">
      {/* Browser frame */}
      <div className="rounded-xl border border-[#001F45]/10 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7fc] border-b border-[#001F45]/10">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="ml-2 h-2 w-24 rounded bg-white ring-1 ring-[#001F45]/10" />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 w-24 rounded bg-[#001F45]" />
              <div className="mt-1 h-2 w-16 rounded bg-[#001F45]/30" />
            </div>
            <div className="h-6 w-16 rounded-md bg-[#001F45]" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {['12', '48', '27', '3'].map((v, i) => (
              <div key={i} className="rounded border border-[#001F45]/10 p-1.5">
                <div className="h-1.5 w-full rounded bg-[#001F45]/20" />
                <div className="mt-1 h-3 w-6 rounded bg-[#001F45]" />
              </div>
            ))}
          </div>
          <div className="mt-3 rounded border border-[#001F45]/10 p-2 space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-[#001F45]/30" />
                <div className="h-2 w-12 rounded bg-[#001F45]/15" />
                <div className="h-2 w-10 rounded bg-[#6366F1]/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating KPI card */}
      <div className="absolute -right-3 -bottom-3 rounded-lg border border-[#001F45]/10 bg-white shadow-lg p-2.5">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
            ↑
          </span>
          <div>
            <div className="h-2 w-12 rounded bg-[#001F45]" />
            <div className="mt-1 h-1.5 w-10 rounded bg-[#001F45]/30" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ShopPoster = () => (
  <div className="absolute inset-0 flex items-center justify-center p-6">
    <div className="relative w-full max-w-[320px]">
      <div className="rounded-xl border border-[#001F45]/10 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7fc] border-b border-[#001F45]/10">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="ml-2 h-2 w-24 rounded bg-white ring-1 ring-[#001F45]/10" />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-20 rounded bg-[#001F45]" />
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#001F45]/30" />
              <span className="h-2 w-2 rounded-full bg-[#001F45]/30" />
              <span className="h-2 w-2 rounded-full bg-[#001F45]/30" />
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-gradient-to-br from-[#fde7ec] via-[#fcf0f0] to-white p-3">
            <div className="h-2 w-16 rounded bg-[#F43F5E]/80" />
            <div className="mt-1.5 h-3 w-24 rounded bg-[#001F45]" />
            <div className="mt-1 h-2 w-20 rounded bg-[#001F45]/40" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded border border-[#001F45]/10 p-1.5">
                <div className="h-10 rounded bg-[#f6f7fc]" />
                <div className="mt-1 h-1.5 w-full rounded bg-[#001F45]/20" />
                <div className="mt-1 h-1.5 w-2/3 rounded bg-[#001F45]/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating cart badge */}
      <div className="absolute -right-3 -top-3 rounded-full bg-[#F43F5E] text-white text-[10px] font-semibold h-8 px-3 inline-flex items-center gap-1.5 shadow-lg">
        <span>Panier</span>
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#F43F5E] text-[10px]">
          2
        </span>
      </div>
    </div>
  </div>
)

const POSTERS: Record<Project['poster'], () => React.ReactNode> = {
  house: HousePoster,
  rh: RhPoster,
  shop: ShopPoster,
}

export default function SuccessStories() {
  return (
    <section id="realisations" className="relative py-20 md:py-28 bg-[#f6f7fc] overflow-hidden">
      {/* Halos décoratifs discrets */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#001F45]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#DBFF00]/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#162869]/70">
              Nos réalisations
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45] text-balance">
              Des projets livrés, <br className="hidden md:inline" />
              utilisés au quotidien.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#162869]/80 font-inter">
              Applications mobiles, plateformes SaaS et sites sur-mesure — chaque projet est pensé
              pour résoudre un vrai besoin métier.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {projects.map((project) => {
            const Poster = POSTERS[project.poster]
            const Icon = project.icon
            return (
              <Link
                key={project.id}
                href={project.link}
                aria-label={`Découvrir le projet ${project.title}`}
                className="group relative flex flex-col rounded-2xl bg-white border border-[#001F45]/10 overflow-hidden transition-smooth hover:border-[#001F45]/20 hover:shadow-elevated hover:-translate-y-1"
              >
                {/* Poster */}
                <div
                  className={`relative h-52 md:h-60 bg-gradient-to-br ${ACCENT_GRADIENTS[project.accent]} overflow-hidden`}
                >
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-sofia-bold text-[#001F45] shadow-sm">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${ACCENT_DOT[project.accent]}`} aria-hidden />
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 z-10 text-[11px] font-inter font-medium text-[#001F45]/70">
                    {project.year}
                  </div>
                  <Poster />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${ACCENT_ICON_BG[project.accent]}`}>
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-sofia-bold text-[#001F45] leading-tight group-hover:text-[#0b2b63] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-[15px] text-[#162869]/85 font-inter leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((h) => (
                      <li key={h.id} className="flex items-start gap-2.5 text-sm text-[#162869]/90 font-inter">
                        <span className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ring-1 ${ACCENT_RING[project.accent]} bg-white`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOT[project.accent]}`} />
                        </span>
                        <span>{h.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-[#001F45]/5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-sofia-bold text-[#001F45]">
                      Découvrir ce projet
                      <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f7fc] text-[#001F45] group-hover:bg-[#001F45] group-hover:text-white transition-colors">
                      <FaBolt className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA bas de section */}
        <div className="mt-14 md:mt-20 rounded-3xl bg-[#001F45] text-white p-8 md:p-12 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#DBFF00]/20 blur-3xl"
          />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-inter font-semibold uppercase tracking-wider text-white/70">
                <FaChartLine className="h-3 w-3" aria-hidden />
                Prêt à lancer le vôtre ?
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-sofia-bold text-white text-balance">
                Chaque grand projet commence par une simple conversation.
              </h3>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-[#001F45] px-6 py-3 font-sofia-bold text-sm hover:bg-white/90 transition-smooth self-start md:self-auto"
            >
              Discutons-en
              <FaArrowRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
