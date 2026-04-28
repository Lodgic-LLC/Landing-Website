'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaBolt, FaMobileAlt, FaLayerGroup } from 'react-icons/fa'
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
    <section id="realisations" className="relative py-24 md:py-32 bg-[#f6f7fc] overflow-hidden">
      {/* Halos décoratifs discrets */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#001F45]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[600px] w-[600px] rounded-full bg-[#DBFF00]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-6 rounded-full bg-[#001F45]/5 text-[#001F45] font-inter text-xs font-semibold uppercase tracking-wider"
          >
            Nos réalisations
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-[#001F45] pb-2 mb-6"
          >
            Des projets livrés, <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">utilisés au quotidien</span>
              <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#DBFF00]/60 transform -skew-x-12 z-0" />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#162869]/70 font-inter max-w-2xl mx-auto leading-relaxed"
          >
            SaaS, applications métiers ou plateformes mobiles : notre objectif est simple. 
            Créer des outils fiables qui transforment la façon dont vos utilisateurs travaillent.
          </motion.p>
        </div>

        {/* Projets */}
        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => {
            const Poster = POSTERS[project.poster]
            const Icon = project.icon
            const isEven = index % 2 === 0

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out CSS
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
              >
                
                {/* Image / Visuel (Mise en valeur) */}
                <div className="w-full lg:w-1/2 relative perspective-1000">
                  <Link 
                    href={project.link}
                    className="block relative w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-lg group-hover:shadow-[0_20px_60px_-15px_rgba(0,31,69,0.2)] transition-shadow duration-700 bg-white"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${ACCENT_GRADIENTS[project.accent]} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center transform-gpu"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      style={{ perspective: 1000 }}
                    >
                      <Poster />
                    </motion.div>

                    {/* Tag / Badges Flottants */}
                    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex gap-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-sofia-bold text-[#001F45] shadow-sm">
                        <span className={`inline-block h-2 w-2 rounded-full ${ACCENT_DOT[project.accent]}`} aria-hidden />
                        {project.category}
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Contenu Textuel */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${ACCENT_ICON_BG[project.accent]} shadow-sm`}>
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-inter font-bold text-[#001F45]/30 bg-[#001F45]/5 px-3 py-1 rounded-lg">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-sofia-bold text-[#001F45] mb-6 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-[#162869]/70 font-inter leading-relaxed mb-10 max-w-xl">
                    {project.description}
                  </p>

                  {/* Highlights (Liste à puces) */}
                  <ul className="space-y-4 mb-12">
                    {project.highlights.map((h, i) => (
                      <motion.li 
                        key={h.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                        className="flex items-center gap-4 text-base font-inter font-medium text-[#162869]/90"
                      >
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ${ACCENT_RING[project.accent]} bg-white shadow-sm`}>
                          <span className={`h-2.5 w-2.5 rounded-full ${ACCENT_DOT[project.accent]}`} />
                        </span>
                        {h.text}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bouton de découverte du projet (Animé au hover) */}
                  <Link 
                    href={project.link}
                    className="inline-flex items-center gap-4 group/btn self-start"
                  >
                    <span className="text-base font-sofia-bold text-[#001F45] relative">
                      Découvrir l'étude de cas
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#DBFF00] origin-left scale-x-0 transition-transform duration-300 group-hover/btn:scale-x-100" />
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#001F45]/10 bg-white text-[#001F45] shadow-sm transition-all duration-300 group-hover/btn:bg-[#001F45] group-hover/btn:text-white group-hover/btn:border-transparent group-hover/btn:ml-2">
                       <FaArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bloc atelier express */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 rounded-[2.5rem] bg-[#001F45] relative overflow-hidden p-8 md:p-12 lg:p-14 shadow-2xl"
        >
          <div aria-hidden className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-[#DBFF00]/15 blur-[95px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-16 left-8 h-60 w-60 rounded-full bg-[#0EA5E9]/20 blur-[95px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-inter font-semibold uppercase tracking-wider text-white/65 mb-4 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <FaBolt className="h-3 w-3 text-[#DBFF00]" aria-hidden />
                Atelier express
              </div>
              <h3 className="text-3xl md:text-4xl font-sofia-bold text-white leading-tight">
                20 minutes pour cadrer votre application, sans jargon.
              </h3>
              <p className="mt-4 text-white/75 font-inter max-w-xl">
                Vous repartez avec une vision claire: quoi lancer en premier, avec quelle techno et dans quel ordre.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="space-y-3">
                  {[
                    'Objectifs et priorites',
                    'Choix techno adapte',
                    'Plan de lancement concret',
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DBFF00] text-[#001F45] text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-sm font-inter text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-[#DBFF00] px-6 py-4 hover:bg-white transition-colors duration-300 shadow-[0_0_35px_rgba(219,255,0,0.2)]"
              >
                <span className="text-[#001F45] font-sofia-bold text-lg whitespace-nowrap">Parler du projet</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#001F45]/10 text-[#001F45] transition-transform duration-300 group-hover:bg-[#001F45] group-hover:text-white group-hover:translate-x-1">
                  <FaArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
