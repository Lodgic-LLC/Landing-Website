"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/* ─── Animated counter ──────────────────────────────────────────── */
function Counter({
  value,
  suffix = "",
  label,
  className = "",
}: {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-0.5">
        <span className="text-4xl md:text-5xl font-sofia-bold text-[#001F45] tabular-nums">
          {value}
        </span>
        {suffix && (
          <span className="text-4xl md:text-5xl font-sofia-bold text-[#001F45]">
            {suffix}
          </span>
        )}
      </div>
      <span className="mt-1.5 text-sm font-inter text-[#162869]/70">
        {label}
      </span>
    </div>
  );
}

/* ─── Fade-in wrapper ───────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}

/* ─── CTA Button ────────────────────────────────────────────────── */
function CtaButton({
  children,
  href = "/rendez-vous",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "lime";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-sofia-bold transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: `${base} bg-[#001F45] text-white hover:bg-[#0b2b63] focus:ring-[#001F45]/40`,
    secondary: `${base} border border-[#001F45]/20 bg-white text-[#001F45] hover:border-[#001F45]/40 hover:bg-[#f6f7fc]`,
    lime: `${base} bg-[#DBFF00] text-[#001F45] hover:bg-[#c8eb00] focus:ring-[#DBFF00]/40 shadow-[0_2px_16px_rgba(219,255,0,0.3)]`,
  };
  return (
    <Link href={href} className={variants[variant]}>
      {children}
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

/* ─── Section label ─────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#001F45]/10 bg-white px-3.5 py-1.5 text-xs font-inter font-semibold uppercase tracking-wider text-[#001F45]/80">
      <span className="h-1.5 w-1.5 rounded-full bg-[#DBFF00]" aria-hidden />
      {children}
    </span>
  );
}

/* ─── FAQ Accordion ─────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "Et si j\u2019ai de la maintenance après ?",
    a: "Si vous souhaitez continuer avec nous à ce moment-là, on pourra établir une tarification spécifique aux besoins de votre application.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Le coût va dépendre de la quantité de travail et de la mobilisation que cela doit demander à notre équipe, chaque projet est différent. On vous invite à prendre rendez-vous avec un membre de l\u2019équipe pour qu\u2019il juge le travail qui va être fait.",
  },
  {
    q: "Je suis une PME, est-ce que c\u2019est possible pour moi ?",
    a: "Oui, nous n\u2019imposons aucune restriction de taille ou de structure.",
  },
  {
    q: "Est-ce que c\u2019est possible si j\u2019ai déjà une application ?",
    a: "Encore mieux ! Si vous avez déjà une application et qu\u2019elle utilise les technologies sur lesquelles on est expert, on pourra apporter des fonctionnalités plus complètes, avec le garage du code en offre.",
  },
  {
    q: "Je n\u2019ai pas encore de business plan, mon idée manque de clarté. Que me conseillez-vous ?",
    a: "Je vous invite à aller sur un article de notre blog où on explique comment trouver une bonne idée et faire un business plan, on vous offre aussi des modèles guides pour ça.",
  },
  {
    q: "Est-ce que je possède le code source du projet ?",
    a: "Oui, le projet vous appartient entièrement. De plus, si à tout moment du projet, pour quelconque raison, vous voulez arrêter, l\u2019avancement sera tout de même à vous.",
  },
  {
    q: "Je n\u2019y connais rien en technologie, est-ce un problème ?",
    a: "Absolument pas ! Vous n\u2019avez pas besoin d\u2019être technique. Notre rôle est de traduire votre vision en solution concrète et de vous expliquer les choix techniques simplement, sans jargon compliqué.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-[#001F45]/10 bg-white transition-smooth hover:border-[#001F45]/20"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
            >
              <span className="text-[15px] md:text-base font-semibold text-[#001F45] font-inter">
                {item.q}
              </span>
              <span
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#f6f7fc] text-[#001F45]"
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div>
              {isOpen && (
                <div
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#162869]/85 font-inter md:px-6 md:pb-6">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Process step icons (inline SVG) ───────────────────────────── */
const STEP_ICONS = [
  // 1 — Vision / lightbulb
  <svg
    key="s1"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z" />
  </svg>,
  // 2 — Cadrage / target
  <svg
    key="s2"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // 3 — Design / pen tool
  <svg
    key="s3"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>,
  // 4 — Dev / code
  <svg
    key="s4"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // 5 — Tests / check-shield
  <svg
    key="s5"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  // 6 — Launch / rocket
  <svg
    key="s6"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
];

const STEPS = [
  {
    title: "Entretien de vision",
    desc: "Établir la faisabilité du projet et aligner les objectifs.",
  },
  {
    title: "Cadrage du MVP",
    desc: "Définir les fonctionnalités essentielles et structurer la première version.",
  },
  {
    title: "Maquettage & Design",
    desc: "Créer les wireframes puis le design pour concevoir l\u2019expérience utilisateur.",
  },
  {
    title: "Développement",
    desc: "L\u2019application est construite étape par étape avec des démos régulières.",
  },
  {
    title: "Tests & QA",
    desc: "Vérifier le bon fonctionnement et corriger les éventuels problèmes.",
  },
  {
    title: "Publication",
    desc: "Déploiement de l\u2019application sur les plateformes définies.",
  },
];

/* ─── Payment milestone visual ──────────────────────────────────── */
function PaymentTimeline() {
  const milestones = [
    { label: "1er acompte", trigger: "Maquettes & UX validées", pct: "33%" },
    { label: "2e acompte", trigger: "MVP validé", pct: "33%" },
    { label: "Solde", trigger: "Livraison du projet", pct: "34%" },
  ];
  return (
    <div className="mt-8 relative">
      {/* Track */}
      <div className="absolute top-5 left-6 right-6 h-0.5 bg-[#001F45]/10 md:left-0 md:right-0" />
      <div className="grid grid-cols-3 gap-4 relative">
        {milestones.map((m, i) => (
          <Reveal
            key={i}
            delay={i * 0.12}
            className="flex flex-col items-center text-center"
          >
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#001F45] text-white text-sm font-sofia-bold shadow-[0_0_0_4px_white,0_0_0_5px_rgba(0,31,69,0.1)]">
              {i + 1}
            </div>
            <span className="mt-3 text-sm font-sofia-bold text-[#001F45]">
              {m.label}
            </span>
            <span className="mt-1 text-xs font-inter text-[#162869]/70 max-w-[140px]">
              {m.trigger}
            </span>
            <span className="mt-2 inline-flex items-center rounded-full bg-[#DBFF00]/20 px-2.5 py-0.5 text-xs font-inter font-semibold text-[#001F45]">
              {m.pct}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ─── Maintenance items ─────────────────────────────────────────── */
const MAINT_ITEMS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    label: "Correction des bugs",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4z" />
      </svg>
    ),
    label: "Ajustements mineurs",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Support technique 5j/7",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Surveillance applicative",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN CLIENT COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function OffreClient() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* decorative bg */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#e2e8f4] via-[#edf0fa] to-white" />
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#DBFF00]/20 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#0EA5E9]/15 blur-[100px]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#001F45]/[0.03] blur-[80px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Offre Startup & Entrepreneurs</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-sofia-bold leading-[1.08] text-[#001F45] md:text-5xl lg:text-6xl">
              Mon appli en{" "}
              <span className="relative inline-block">
                45&nbsp;jours
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-[#DBFF00]/40 -skew-x-3 -z-10 rounded-sm"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg font-inter text-[#162869]/85 md:text-xl">
              Offre pour Startup et Entrepreneurs / Solopreneurs. De l&apos;idée
              à l&apos;application en production — délai garanti, accompagnement
              complet.
            </p>
          </Reveal>

          {/* Metrics strip */}
          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-1 gap-6 border-y border-[#001F45]/10 py-8 sm:grid-cols-3">
              <Counter value={45} suffix=" j" label="Délai garanti" />
              <Counter value={3} suffix=" mois" label="Maintenance offerte" />
              <Counter value={100} suffix="%" label="Propriété du code" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton href="/rendez-vous" variant="primary">
                Découvrir l&apos;offre avec un membre de l&apos;équipe
              </CtaButton>
              <CtaButton href="/#realisations" variant="secondary">
                Voir nos réalisations
              </CtaButton>
            </div>
          </Reveal>

          {/* Urgency nudge */}
          <Reveal delay={0.25}>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-inter text-[#162869]/60">
              Créneaux limités — réservez votre place ce mois-ci
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ POUR VOUS / PAS POUR VOUS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* For you */}
            <Reveal>
              <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50/50 to-white p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-sofia-bold text-[#001F45]">
                    Cette offre est faite pour vous si :
                  </h2>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Vous avez une idée d\u2019application (claire ou en cours de structuration) et vous voulez la concrétiser rapidement.",
                    "Vous souhaitez tester un marché sans attendre plusieurs mois de développement.",
                    "Vous cherchez une équipe capable de vous accompagner de A à Z : cadrage, design, développement et livraison.",
                    "Vous accordez de l\u2019importance à la vitesse d\u2019exécution, sans sacrifier la qualité.",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] font-inter text-[#162869]/90"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Not for you */}
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/40 to-white p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-sofia-bold text-[#001F45]">
                    Cette offre n&apos;est pas faite pour vous si :
                  </h2>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Vous êtes simplement curieux, sans réel projet derrière.",
                    "Vous cherchez uniquement le prix le plus bas.",
                    "Votre projet nécessite plusieurs mois de recherche et développement dès le départ.",
                    "Vous souhaitez une application extrêmement complexe dès la première version.",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] font-inter text-[#162869]/90"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Bottom note + CTA */}
          <Reveal delay={0.12}>
            <div className="mt-8 rounded-2xl border border-[#001F45]/10 bg-[#f6f7fc] p-6 md:p-8 text-center">
              <p className="text-base font-inter text-[#162869]/85 max-w-2xl mx-auto">
                L&apos;objectif ici est simple : créer une{" "}
                <strong className="text-[#001F45]">
                  version solide, rapide et exploitable
                </strong>
                . Pas une usine à gaz inutile.
              </p>
              <div className="mt-6">
                <CtaButton href="/rendez-vous">
                  Découvrir l&apos;offre avec un membre de l&apos;équipe
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ LIVRÉ EN 45J ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 md:py-24 bg-[#f6f7fc] border-y border-[#001F45]/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-[#DBFF00]/10 blur-[100px]"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <SectionLabel>Livré en 45 jours</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-sofia-bold text-[#001F45] text-balance">
              Livré en 45j, c&apos;est possible ?
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left: What 45 days means */}
            <Reveal>
              <div className="rounded-2xl border border-[#001F45]/10 bg-white p-6 md:p-8">
                <h3 className="text-xl font-sofia-bold text-[#001F45] mb-4">
                  Ce que signifient réellement ces 45 jours
                </h3>
                <p className="text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                  45 jours calendaires à partir du lancement du projet
                  (week-ends compris). Un processus structuré et une équipe
                  dédiée qui avance vite, sans dispersion.
                </p>
                <p className="mt-3 text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                  L&apos;objectif est de livrer en 45 jours une application{" "}
                  <strong className="text-[#001F45]">
                    prête à être utilisée
                  </strong>{" "}
                  (hors délai de publication sur les stores), pas un simple
                  prototype.
                </p>

                {/* Visual: 45-day bar */}
                <div className="mt-6 rounded-xl bg-[#f6f7fc] p-4">
                  <div className="flex items-center justify-between text-xs font-inter text-[#162869]/70 mb-2">
                    <span>Jour 1</span>
                    <span>Jour 45</span>
                  </div>
                  <div className="flex h-3 w-full overflow-hidden rounded-full bg-[#001F45]/5 ring-1 ring-[#001F45]/10">
                    <span
                      className="bg-blue-500 h-full origin-left"
                      style={{ flex: 1 }}
                    />
                    <span
                      className="bg-violet-500 h-full origin-left"
                      style={{ flex: 1.5 }}
                    />
                    <span
                      className="bg-emerald-500 h-full origin-left"
                      style={{ flex: 3 }}
                    />
                    <span
                      className="bg-amber-500 h-full origin-left"
                      style={{ flex: 1 }}
                    />
                    <span
                      className="bg-lime-500 h-full origin-left"
                      style={{ flex: 0.5 }}
                    />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-inter text-[#162869]/60">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Cadrage
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      Design
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Dev
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Tests
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
                      Prod
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Clean code */}
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-[#001F45]/10 bg-white p-6 md:p-8">
                <h3 className="text-xl font-sofia-bold text-[#001F45] mb-4">
                  Le code sera-t-il propre et réutilisable ?
                </h3>
                <p className="text-[15px] font-inter text-[#162869]/85 leading-relaxed mb-4">
                  Oui ! Voici pourquoi :
                </p>
                <ul className="space-y-3">
                  {[
                    "Le code est structuré et maintenable, avec des technologies modernes comme React.",
                    "Les bonnes pratiques de développement sont respectées.",
                    "L\u2019IA nous permet d\u2019automatiser les tâches répétitives et d\u2019accélérer le développement sans compromettre la qualité.",
                    'Aucun "bricolage" rapide qui bloque l\u2019évolution future.',
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] font-inter text-[#162869]/85"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0EA5E9]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                  L&apos;objectif n&apos;est pas seulement de livrer vite, mais
                  de livrer quelque chose de{" "}
                  <strong className="text-[#001F45]">
                    solide, robuste et évolutif
                  </strong>
                  , sur lequel vous pourrez continuer à construire sans repartir
                  de zéro.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Important note */}
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-amber-200/60 bg-amber-50/50 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 mt-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-base font-sofia-bold text-[#001F45]">
                    Important
                  </h4>
                  <p className="mt-1 text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                    Le délai de livraison sur l&apos;App Store et Play Store
                    peut varier. Les contrôles sont stricts et les délais ne
                    dépendent pas de nous — c&apos;est pour cela qu&apos;on ne
                    les inclut pas dans les 45j. Cependant, la publication sur
                    ces plateformes{" "}
                    <strong className="text-[#001F45]">
                      est incluse dans la prestation
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Overtime guarantee */}
          <Reveal delay={0.12}>
            <div className="mt-8 rounded-2xl border border-[#001F45]/10 bg-white p-6 md:p-8">
              <h3 className="text-xl font-sofia-bold text-[#001F45] mb-4">
                Et si cela dépasse les 45 jours ?
              </h3>
              <p className="text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                Notre engagement repose sur un cadre clair, une méthodologie
                éprouvée et une équipe dédiée. Dans la grande majorité des cas,
                les délais sont respectés.
              </p>
              <p className="mt-3 text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                Cependant, s&apos;il y a un dépassement, c&apos;est généralement
                lié à :
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Des modifications importantes demandées en cours de projet",
                  "Des validations retardées",
                  "Un changement de périmètre initial",
                ].map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] font-inter text-[#162869]/85"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#001F45]/40" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {/* Guarantee badge */}
              <div className="mt-6 flex items-center gap-4 rounded-xl bg-[#001F45]/5 border border-[#001F45]/10 p-4 text-[#001F45]">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#001F45]/10 text-[#001F45]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-sofia-bold">
                    Aucun coût supplémentaire ne vous sera facturé !
                  </p>
                  <p className="mt-0.5 text-xs font-inter text-[#001F45]/70">
                    Nous assumons ces ajustements grâce à notre expérience et à
                    notre capacité à anticiper.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <CtaButton href="/rendez-vous">
                  Découvrir l&apos;offre avec un membre de l&apos;équipe
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ 3 MOIS DE MAINTENANCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Left */}
            <div className="lg:col-span-3">
              <Reveal>
                <SectionLabel>Après la livraison</SectionLabel>
                <h2 className="mt-4 text-3xl md:text-4xl font-sofia-bold text-[#001F45] text-balance">
                  3 mois de maintenance offert
                </h2>
                <p className="mt-3 text-lg font-inter text-[#162869]/85">
                  Oui, et ce n&apos;est pas un bonus symbolique.
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h3 className="mt-8 text-lg font-sofia-bold text-[#001F45]">
                  Concrètement, cela inclut :
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {MAINT_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-[#001F45]/10 bg-white px-4 py-3 transition-smooth hover:border-[#001F45]/20 hover:shadow-soft"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9]">
                        {item.icon}
                      </span>
                      <span className="text-[15px] font-inter text-[#001F45]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                  Une application n&apos;est jamais réellement
                  &quot;terminée&quot; au moment de sa livraison mais quand les
                  premiers retours arrivent avec les utilisateurs.
                </p>
                <p className="mt-3 text-[15px] font-inter text-[#162869]/85 leading-relaxed">
                  Vous n&apos;êtes pas laissé seul après la mise en ligne. Une
                  grande partie des correctifs et mises à jour arrivent dans les{" "}
                  <strong className="text-[#001F45]">
                    3 mois après la publication
                  </strong>{" "}
                  d&apos;une application.
                </p>
              </Reveal>
            </div>

            {/* Right: visual card */}
            <Reveal delay={0.08} className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl border border-[#001F45]/10 bg-gradient-to-br from-[#001F45] to-[#0b2b63] p-6 md:p-8 h-full flex flex-col justify-center">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#DBFF00]/20 blur-[60px]"
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBFF00] text-[#001F45]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-2xl font-sofia-bold text-white">
                        3 mois
                      </p>
                      <p className="text-sm font-inter text-white/70">
                        de maintenance incluse
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Bugs corrigés rapidement",
                      "Mises à jour de sécurité",
                      "Support réactif",
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm font-inter text-white/90"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 flex-shrink-0 text-[#DBFF00]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ PAIEMENT AU RÉSULTAT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-16 md:py-24 bg-[#f6f7fc] border-y border-[#001F45]/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Modèle de paiement</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-sofia-bold text-[#001F45] text-balance">
              Paiement au résultat, c&apos;est-à-dire ?
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-5 max-w-3xl text-[15px] font-inter text-[#162869]/85 leading-relaxed">
              Lancer une application représente un investissement. Votre risque
              de votre côté est de payer pour un rendu qui ne vous satisfait pas
              et de devoir investir encore pour faire les corrections
              nécessaires. Notre risque de notre côté, c&apos;est de passer du
              temps et mobiliser notre équipe à développer un projet qui ne vous
              correspond — on est perdant aussi.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-10 text-xl font-sofia-bold text-[#001F45]">
              Notre approche
            </h3>
            <p className="mt-2 text-[15px] font-inter text-[#162869]/85 leading-relaxed max-w-3xl">
              Une partie du paiement est liée à l&apos;avancement réel du
              projet. Concrètement :
            </p>
          </Reveal>

          {/* Payment timeline visual */}
          <Reveal delay={0.14}>
            <PaymentTimeline />
          </Reveal>

          {/* What changes */}
          <Reveal delay={0.18}>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl">
              <div className="flex items-center gap-3 rounded-xl border border-[#001F45]/10 bg-white p-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-sofia-bold text-[#001F45]">
                    Moins de risque
                  </p>
                  <p className="text-xs font-inter text-[#162869]/70">
                    Vous payez au fur et à mesure des validations
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#001F45]/10 bg-white p-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-sofia-bold text-[#001F45]">
                    Plus de transparence
                  </p>
                  <p className="text-xs font-inter text-[#162869]/70">
                    Visibilité totale sur l&apos;avancement
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-[15px] font-inter text-[#162869]/85 leading-relaxed max-w-3xl">
              Le but pour nous est de passer du temps à développer quelque chose
              qui vous correspond — on y gagne du temps de toute façon !
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8">
              <CtaButton href="/rendez-vous">
                Découvrir l&apos;offre avec un membre de l&apos;équipe
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ COMMENT ÇA SE PASSE ? ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Le processus</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-sofia-bold text-[#001F45] text-balance">
              Comment ça se passe ?
            </h2>
            <p className="mt-3 max-w-2xl text-base font-inter text-[#162869]/85">
              6 étapes claires, de la première idée à la publication.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group relative rounded-2xl border border-[#001F45]/10 bg-white p-6 transition-smooth hover:border-[#001F45]/20 hover:shadow-soft h-full">
                  {/* Step number & icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#001F45] text-white text-sm font-sofia-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#001F45]/60 group-hover:text-[#0EA5E9] transition-colors">
                      {STEP_ICONS[i]}
                    </span>
                  </div>
                  <h3 className="text-base font-sofia-bold text-[#001F45]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-inter text-[#162869]/85 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-sofia-bold text-[#001F45]">
              Les questions souvent posées
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6">
              <CtaButton href="/rendez-vous" variant="lime">
                Est-ce que mon application est éligible ?
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <FaqSection />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#001F45] p-8 md:p-12 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#DBFF00]/20 blur-[80px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#0EA5E9]/15 blur-[60px]"
              />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/60">
                    Prêt à lancer votre projet ?
                  </p>
                  <h2 className="mt-3 text-2xl md:text-3xl font-sofia-bold text-white text-balance max-w-lg">
                    Chaque grand projet commence par une simple conversation.
                  </h2>
                  <p className="mt-2 text-sm font-inter text-white/70 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DBFF00] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#DBFF00]" />
                    </span>
                    Créneaux limités ce mois-ci
                  </p>
                </div>
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg bg-[#DBFF00] px-6 py-3.5 text-sm font-sofia-bold text-[#001F45] transition-smooth hover:bg-[#c8eb00] shadow-[0_4px_20px_rgba(219,255,0,0.3)]"
                >
                  Réserver un créneau
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
