'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type HeroVisual = 'devices' | 'platforms' | 'react-native' | 'tailored' | 'agency'

interface SeoHeroProps {
  eyebrow: string
  title: string
  highlight: string
  description: ReactNode
  badges: string[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  visual?: HeroVisual
}

export default function SeoHero({
  eyebrow,
  title,
  highlight,
  description,
  badges,
  primaryCta = { label: 'Demander un devis', href: '/#contact' },
  secondaryCta = { label: 'Voir nos réalisations', href: '/#realisations' },
  visual = 'devices',
}: SeoHeroProps) {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 pb-32 md:pb-44 overflow-hidden relative flex flex-col justify-center">
      {/* Decor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl opacity-70" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,255,0,0.08),transparent_60%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Left column */}
          <div className="lg:col-span-6 xl:col-span-6 pt-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#001F45]/15 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-inter font-semibold uppercase tracking-wider text-[#001F45]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#DBFF00] shadow-[0_0_10px_rgba(219,255,0,0.9)]" />
              {eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="font-sofia-bold heading text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.05] mt-6 mb-4 text-[#001F45]"
            >
              {title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-sofia-bold text-[#0EA5E9] text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight"
            >
              {highlight}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="lead text-lg sm:text-xl max-w-2xl mb-8 text-[#1f3556]"
            >
              {description}
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3.5 py-1.5 border border-[#001F45]/10 text-sm font-inter text-[#001F45] shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link href={primaryCta.href} className="btn-primary inline-flex items-center gap-3">
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center text-[#001F45] font-sofia-bold border border-[#001F45]/10 rounded-md px-5 py-3 hover:border-[#001F45]/30 hover:bg-[#001F45]/5 transition-smooth"
              >
                {secondaryCta.label}
              </Link>
            </motion.div>
          </div>

          {/* Right column - visual */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative h-full min-h-[520px] w-full">
            <div className="relative w-full max-w-xl aspect-square">
              {/* Glow halos */}
              <div className="absolute top-10 right-10 w-72 h-72 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" />
              <div
                className="absolute bottom-10 left-10 w-72 h-72 bg-[#DBFF00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"
                style={{ animationDelay: '2s' }}
              />

              <HeroVisual variant={visual} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroVisual({ variant }: { variant: HeroVisual }) {
  if (variant === 'platforms') return <PlatformsVisual />
  if (variant === 'react-native') return <ReactNativeVisual />
  if (variant === 'tailored') return <TailoredVisual />
  if (variant === 'agency') return <AgencyVisual />
  return <DevicesVisual />
}

/* ----- VISUALS ----- */

const phoneFrame =
  'rounded-[36px] border-[3px] border-[#001F45] bg-white shadow-[0_30px_80px_-20px_rgba(0,31,69,0.35)] overflow-hidden'

function DevicesVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        className="absolute z-30 w-[210px] h-[420px]"
      >
        <div className={`${phoneFrame} h-full p-3`}>
          <div className="h-full rounded-[24px] bg-gradient-to-b from-[#eaf0ff] via-white to-white p-3 flex flex-col">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-[#001F45]/40" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="h-2 w-16 rounded bg-[#001F45]/80" />
                <div className="mt-1.5 h-1.5 w-12 rounded bg-[#001F45]/30" />
              </div>
              <div className="h-7 w-7 rounded-full bg-[#001F45]" />
            </div>
            <div className="mt-4 rounded-2xl bg-[#001F45] p-3 text-white">
              <div className="h-1.5 w-10 rounded bg-white/40" />
              <div className="mt-2 h-3 w-20 rounded bg-white" />
              <div className="mt-1 h-1.5 w-14 rounded bg-white/30" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-xl bg-[#0EA5E9]/15" />
              <div className="h-14 rounded-xl bg-[#DBFF00]/60" />
              <div className="h-14 rounded-xl bg-[#001F45]/10" />
              <div className="h-14 rounded-xl bg-[#001F45]/10" />
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-full rounded bg-[#001F45]/15" />
              <div className="h-2 w-3/4 rounded bg-[#001F45]/15" />
            </div>
            <div className="mt-auto flex justify-center gap-2 pb-2">
              <div className="h-1.5 w-6 rounded-full bg-[#001F45]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#001F45]/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#001F45]/30" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        className="absolute z-40 left-[-2%] top-[8%] rounded-2xl bg-white shadow-xl border border-[#001F45]/10 px-4 py-3 flex items-center gap-3"
      >
        <span className="h-9 w-9 rounded-xl bg-[#DBFF00] flex items-center justify-center text-[#001F45] font-sofia-bold">
          +1
        </span>
        <div>
          <div className="text-xs font-inter text-[#001F45]/60">Notifications</div>
          <div className="text-sm font-sofia-bold text-[#001F45]">Nouvel utilisateur</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: 'easeOut' }}
        className="absolute z-40 right-[-4%] top-[18%] rounded-2xl bg-[#001F45] text-white shadow-xl px-4 py-3"
      >
        <div className="text-[10px] uppercase tracking-wider font-inter text-white/60">Performance</div>
        <div className="mt-1 text-2xl font-sofia-bold">98<span className="text-[#DBFF00]">/100</span></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        className="absolute z-40 right-[-2%] bottom-[10%] rounded-2xl bg-white shadow-xl border border-[#001F45]/10 px-4 py-3 max-w-[180px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] uppercase tracking-wider font-inter text-[#001F45]/60">Live</span>
        </div>
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 50, 80, 55, 95, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-[#0EA5E9]"
              style={{ height: `${h}%`, opacity: 0.4 + i * 0.08 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Tablet behind */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute z-10 right-[6%] bottom-[2%] w-[260px] h-[180px] rounded-2xl border-[3px] border-[#001F45] bg-white shadow-xl rotate-[8deg] overflow-hidden p-3"
      >
        <div className="h-full rounded-xl bg-[#f6f7fc] p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#001F45]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#001F45]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#001F45]/30" />
          </div>
          <div className="mt-2.5 h-2 w-20 rounded bg-[#001F45]" />
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            <div className="h-10 rounded bg-white border border-[#001F45]/10" />
            <div className="h-10 rounded bg-[#0EA5E9]/15" />
            <div className="h-10 rounded bg-white border border-[#001F45]/10" />
          </div>
          <div className="mt-1.5 h-1.5 w-full rounded bg-[#001F45]/10" />
          <div className="mt-1 h-1.5 w-2/3 rounded bg-[#001F45]/10" />
        </div>
      </motion.div>
    </div>
  )
}

function PlatformsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* iOS phone */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute z-20 left-[8%] top-[6%] w-[200px] h-[400px]"
      >
        <div className={`${phoneFrame} h-full p-3 relative`}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-[#001F45]" />
          <div className="h-full rounded-[24px] bg-gradient-to-b from-[#eaf0ff] via-white to-white p-3 pt-7">
            <div className="text-[9px] font-inter font-bold text-[#001F45]/40 uppercase tracking-widest">iOS · Swift</div>
            <div className="mt-2 h-3 w-24 rounded bg-[#001F45]" />
            <div className="mt-1.5 h-1.5 w-16 rounded bg-[#001F45]/30" />
            <div className="mt-3 rounded-2xl bg-[#001F45] p-3">
              <div className="h-1.5 w-10 rounded bg-white/30" />
              <div className="mt-1.5 h-2.5 w-16 rounded bg-white" />
              <div className="mt-3 flex justify-between">
                <div className="h-6 w-6 rounded-md bg-[#DBFF00]" />
                <div className="h-6 w-6 rounded-md bg-white/20" />
                <div className="h-6 w-6 rounded-md bg-white/20" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg border border-[#001F45]/10 p-2">
                <div className="h-1.5 w-12 rounded bg-[#001F45]/60" />
                <div className="mt-1 h-1 w-20 rounded bg-[#001F45]/20" />
              </div>
              <div className="rounded-lg border border-[#001F45]/10 p-2">
                <div className="h-1.5 w-14 rounded bg-[#001F45]/60" />
                <div className="mt-1 h-1 w-16 rounded bg-[#001F45]/20" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Android phone */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="absolute z-30 right-[6%] top-[10%] w-[200px] h-[400px]"
      >
        <div className={`${phoneFrame} h-full p-3 relative`}>
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#001F45]" />
          <div className="h-full rounded-[24px] bg-gradient-to-b from-[#dffde8] via-white to-white p-3 pt-6">
            <div className="text-[9px] font-inter font-bold text-emerald-700/70 uppercase tracking-widest">Android · Kotlin</div>
            <div className="mt-2 h-3 w-28 rounded bg-[#001F45]" />
            <div className="mt-1.5 h-1.5 w-20 rounded bg-[#001F45]/30" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-emerald-500/15 border border-emerald-500/20" />
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-[#001F45] p-3 text-white">
              <div className="text-[8px] uppercase tracking-wider opacity-60">Material You</div>
              <div className="mt-1 h-2 w-20 rounded bg-white" />
              <div className="mt-2 flex gap-1">
                <span className="h-1.5 flex-1 rounded bg-emerald-400" />
                <span className="h-1.5 flex-1 rounded bg-white/20" />
                <span className="h-1.5 flex-1 rounded bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, type: 'spring' }}
        className="absolute z-40 left-1/2 -translate-x-1/2 top-[2%] rounded-full bg-white shadow-xl border border-[#001F45]/10 px-4 py-2 flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-[#DBFF00] shadow-[0_0_10px_rgba(219,255,0,0.9)]" />
        <span className="text-xs font-sofia-bold text-[#001F45]">iOS &amp; Android natifs</span>
      </motion.div>

      {/* Connecting line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
        <motion.path
          d="M 110 220 Q 200 280 290 220"
          stroke="#0EA5E9"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        />
      </svg>
    </div>
  )
}

function ReactNativeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center atom logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute z-30"
      >
        <svg width="200" height="200" viewBox="-12 -12 24 24" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#0EA5E9" />
          <g stroke="#0EA5E9" strokeWidth="0.7" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="11" cy="0" r="0.8" fill="#DBFF00" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Phone left */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: -10 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="absolute z-20 left-[2%] bottom-[8%] w-[170px] h-[340px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-gradient-to-b from-[#eaf0ff] to-white p-2.5">
            <div className="text-[9px] font-mono text-[#001F45]/50">{'<App />'}</div>
            <div className="mt-2 rounded-xl bg-[#001F45] p-2.5">
              <div className="h-1.5 w-10 rounded bg-white/30" />
              <div className="mt-1 h-2 w-14 rounded bg-white" />
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#001F45]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#001F45]/15" />
              <div className="h-1.5 w-3/4 rounded bg-[#001F45]/15" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-[#0EA5E9]/15" />
              <div className="h-10 rounded bg-[#DBFF00]/50" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone right */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 10 }}
        transition={{ duration: 0.9, delay: 0.75 }}
        className="absolute z-20 right-[2%] bottom-[8%] w-[170px] h-[340px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-gradient-to-b from-[#dffde8] to-white p-2.5">
            <div className="text-[9px] font-mono text-emerald-700/60">{'export default'}</div>
            <div className="mt-2 rounded-xl bg-emerald-600 p-2.5">
              <div className="h-1.5 w-10 rounded bg-white/30" />
              <div className="mt-1 h-2 w-14 rounded bg-white" />
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#001F45]/15" />
              <div className="h-1.5 w-3/4 rounded bg-[#001F45]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#001F45]/15" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-emerald-500/15" />
              <div className="h-10 rounded bg-[#DBFF00]/50" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Code snippet badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute z-40 top-[2%] left-1/2 -translate-x-1/2 rounded-xl bg-[#001F45] text-white px-4 py-2 shadow-xl font-mono text-xs"
      >
        <span className="text-[#DBFF00]">const</span> app = <span className="text-[#0EA5E9]">React Native</span>
      </motion.div>
    </div>
  )
}

function TailoredVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Blueprint sheet */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute z-10 w-[420px] h-[420px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-full h-full rounded-2xl bg-[#001F45] p-6 shadow-2xl relative overflow-hidden">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative">
            <div className="text-[10px] font-mono text-[#DBFF00]/70 tracking-wider">PROJET-MOBILE / V1.0</div>
            <div className="mt-3 h-[2px] w-20 bg-[#DBFF00]" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="rounded border border-white/20 bg-white/5 p-2">
                  <div className="h-1.5 w-8 rounded bg-white/30" />
                  <div className="mt-2 h-12 rounded bg-white/10" />
                  <div className="mt-1.5 h-1 w-10 rounded bg-white/20" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <div className="rounded border border-[#DBFF00]/40 bg-[#DBFF00]/10 px-2 py-1 text-[10px] font-mono text-[#DBFF00]">
                CADRAGE
              </div>
              <div className="rounded border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-mono text-white/60">
                DESIGN
              </div>
              <div className="rounded border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-mono text-white/60">
                BUILD
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="absolute z-30 right-[8%] bottom-[6%] w-[180px] h-[360px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-white p-2.5 flex flex-col">
            <div className="mx-auto h-1 w-10 rounded-full bg-[#001F45]/40" />
            <div className="mt-3 rounded-xl bg-gradient-to-br from-[#DBFF00]/40 to-[#0EA5E9]/30 h-32 p-2 flex flex-col justify-between">
              <div className="text-[9px] font-sofia-bold text-[#001F45]">SUR MESURE</div>
              <div className="h-2 w-16 rounded bg-[#001F45]" />
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#001F45]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#001F45]/15" />
            </div>
            <div className="mt-auto rounded-xl bg-[#001F45] py-2 text-center text-[10px] font-sofia-bold text-white">
              Lancer
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating measurement */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute z-40 top-[8%] left-[4%] rounded-lg bg-white shadow-xl border border-[#001F45]/10 px-3 py-2"
      >
        <div className="text-[9px] uppercase font-inter text-[#001F45]/50 tracking-wider">Sur mesure</div>
        <div className="text-sm font-sofia-bold text-[#001F45]">100% personnalisé</div>
      </motion.div>
    </div>
  )
}

function AgencyVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Laptop / browser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute z-20 left-1/2 -translate-x-1/2 top-[14%] w-[440px]"
      >
        <div className="rounded-2xl border-[3px] border-[#001F45] bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#f6f7fc] border-b border-[#001F45]/10">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 h-2.5 w-40 rounded bg-white ring-1 ring-[#001F45]/10" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-32 rounded bg-[#001F45]" />
                <div className="mt-1.5 h-2 w-24 rounded bg-[#001F45]/30" />
              </div>
              <div className="h-8 w-24 rounded-md bg-[#001F45]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-[#001F45]/10 p-2.5">
                  <div className="h-2 w-12 rounded bg-[#0EA5E9]" />
                  <div className="mt-1.5 h-3 w-10 rounded bg-[#001F45]" />
                  <div className="mt-1 h-1.5 w-14 rounded bg-[#001F45]/20" />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-[#001F45]/10 p-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#DBFF00]" />
                <div className="h-2 w-32 rounded bg-[#001F45]/30" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
                <div className="h-2 w-24 rounded bg-[#001F45]/30" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <div className="h-2 w-28 rounded bg-[#001F45]/30" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone overlay */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="absolute z-30 right-[2%] bottom-[4%] w-[170px] h-[330px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-gradient-to-b from-[#eaf0ff] to-white p-2.5">
            <div className="mx-auto h-1 w-10 rounded-full bg-[#001F45]/40" />
            <div className="mt-3 h-2 w-16 rounded bg-[#001F45]" />
            <div className="mt-1 h-1.5 w-12 rounded bg-[#001F45]/30" />
            <div className="mt-3 rounded-xl bg-[#001F45] p-2.5">
              <div className="h-1.5 w-8 rounded bg-white/30" />
              <div className="mt-1.5 h-2.5 w-14 rounded bg-white" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-[#0EA5E9]/15" />
              <div className="h-10 rounded bg-[#DBFF00]/50" />
              <div className="h-10 rounded bg-[#001F45]/10" />
              <div className="h-10 rounded bg-[#001F45]/10" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stat badges */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute z-40 left-[2%] top-[6%] rounded-2xl bg-white shadow-xl border border-[#001F45]/10 px-3 py-2"
      >
        <div className="text-[10px] uppercase font-inter text-[#001F45]/50 tracking-wider">Web</div>
        <div className="text-sm font-sofia-bold text-[#001F45]">Next.js + Prisma</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.15 }}
        className="absolute z-40 left-[4%] bottom-[10%] rounded-2xl bg-[#001F45] text-white shadow-xl px-3 py-2"
      >
        <div className="text-[10px] uppercase font-inter text-white/60 tracking-wider">Mobile</div>
        <div className="text-sm font-sofia-bold">React Native + Expo</div>
      </motion.div>
    </div>
  )
}
