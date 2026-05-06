"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";

type Phase = {
  number: number;
  name: string;
  range: string;
  color: string;
  details: string;
  fullTitle: string;
  includes: string[];
};

const PHASES: Phase[] = [
  { 
    number: 1, 
    name: "Cadrage", 
    range: "J1 – J5", 
    color: "bg-blue-500",
    fullTitle: "Cadrage & Stratégie",
    details: "Nous définissons ensemble la vision de votre produit. Analyse des fonctionnalités critiques (MVP), choix techniques et établissement de la roadmap précise.",
    includes: ["Atelier de définition", "Choix de la stack technique", "Spécifications fonctionnelles"]
  },
  {
    number: 2,
    name: "Design UI/UX",
    range: "J6 – J14",
    color: "bg-violet-500",
    fullTitle: "Identité Visuelle & UX",
    details: "Création d'une interface moderne et intuitive. Nous produisons des maquettes haute-fidélité cliquables pour que vous puissiez tester le flux utilisateur avant le développement.",
    includes: ["Wireframes", "Maquettes Haute-Fidélité", "Prototype Interactif"]
  },
  {
    number: 3,
    name: "Développement",
    range: "J15 – J35",
    color: "bg-emerald-500",
    fullTitle: "Développement React Native",
    details: "Le cœur de notre métier. Nous codons votre application avec React Native pour garantir une fluidité parfaite sur iOS et Android tout en optimisant les coûts.",
    includes: ["Codebase unifiée", "Intégration API & Backend", "Sync Cloud"]
  },
  {
    number: 4,
    name: "Tests & recette",
    range: "J36 – J42",
    color: "bg-amber-500",
    fullTitle: "Assurance Qualité",
    details: "Chaque écran est passé au crible. Nous effectuons des tests de performance, de sécurité et d'ergonomie sur divers appareils mobiles réels.",
    includes: ["Tests Unitaires & E2E", "Correction de bugs", "Optimisation SEO/Perf"]
  },
  {
    number: 5,
    name: "Mise en production",
    range: "J43 – J45",
    color: "bg-lime-500",
    fullTitle: "Mise en Production",
    details: "Dernière ligne droite. Nous gérons pour vous la soumission aux stores et configurons l'environnement de production pour un déploiement sécurisé.",
    includes: ["Publication Stores", "Monitoring temps réel", "Passage de relais"]
  },
];

const METRICS = [
  { value: "45 j", label: "Délai garanti" },
  { value: "Budget fixe", label: "Défini avant de commencer le projet" },
  { value: "3 mois", label: "Maintenance incluse après livraison" },
];

const INCLUDED = [
  "1 référent dédié pour tout le suivi",
  "Réunion hebdo de suivi",
  "3 mois de maintenance compris",
  "Transfert du code source",
];

export default function Process() {
  const isMobile = useIsMobile();
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  return (
    <section
      id="offre"
      className="relative overflow-hidden py-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#001F45]/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#001F45]">
            Offre Startup & Entrepreneurs :
          </span>
          <h2 className="mt-5 text-balance text-3xl md:text-4xl lg:text-5xl font-sofia-bold text-[#001F45]">
            Votre application en 45 jours, clé en main.
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#162869]/85 font-inter">
            De l'idée à l'app en production. Délai garanti et accompagnement
            complet.
          </p>
        </div>

        {/* Metrics */}
        <div
          className="mt-10 grid grid-cols-1 gap-6 border-y border-[#001F45]/10 py-8 sm:grid-cols-3"
        >
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-sofia-bold text-[#001F45]">
                {metric.value}
              </span>
              <span className="mt-1 text-sm text-[#162869]/70 font-inter">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="mt-12">
          <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70 font-inter">
            Le planning (Survolez une étape pour explorer)
          </p>
          <div className="flex items-center justify-between gap-2 md:gap-4 mt-2 mb-4">
             <h3 className="text-xl md:text-2xl font-sofia-bold text-[#001F45]">
               5 phases sur 45 jours
             </h3>
             <div className="flex-1 h-px bg-[#001F45]/10 hidden md:block" />
          </div>

          <div className="mt-5 flex h-4 md:h-6 w-full overflow-hidden rounded-full bg-[#f6f7fc] ring-1 ring-[#001F45]/10">
            {PHASES.map((phase, index) => (
              <motion.div
                key={phase.number}
                onMouseEnter={() => setSelectedPhase(phase)}
                className={`${phase.color} relative h-full transition-all duration-300 cursor-help`}
                style={{ width: index === 2 ? '40%' : index === 1 ? '20%' : '13.333%' }}
                whileHover={{ 
                  scaleY: 1.4,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
              >
                {selectedPhase?.number === phase.number && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute inset-x-0 -bottom-1 h-1 bg-[#001F45]/30"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex w-full">
            {PHASES.map((phase, index) => (
              <div
                key={phase.number}
                onMouseEnter={() => setSelectedPhase(phase)}
                className="flex flex-col gap-2 group cursor-help pr-2"
                style={{ width: index === 2 ? '40%' : index === 1 ? '20%' : '13.333%' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full ${phase.color} shadow-sm transition-all duration-300 ${selectedPhase?.number === phase.number ? 'scale-125 ring-4 ring-[#001F45]/5' : 'group-hover:scale-110'}`}
                    aria-hidden
                  />
                  <span className={`text-[13px] md:text-sm font-sofia-bold text-[#001F45] font-inter transition-colors leading-tight ${selectedPhase?.number === phase.number ? 'text-[#0b2b63]' : 'text-[#162869]/60'}`}>
                    {phase.name}
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] text-[#162869]/40 font-inter pl-4">
                  {phase.range}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Inline Detail Expansion */}
        <div className="relative mt-10 min-h-[320px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            {selectedPhase ? (
              <motion.div
                key={selectedPhase.number}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-3xl bg-slate-50/50 border border-[#001F45]/5 p-6 md:p-10 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <motion.span 
                        layoutId={`number-${selectedPhase.number}`}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${selectedPhase.color} text-white font-sofia-bold shadow-lg shadow-${selectedPhase.color.split('-')[1]}-500/20`}
                      >
                        {selectedPhase.number}
                      </motion.span>
                      <div className="h-px w-8 bg-[#001F45]/10" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#001F45]/40 leading-none">
                        Phase : {selectedPhase.range}
                      </span>
                    </div>
                    
                    <h4 className="mt-6 text-2xl md:text-4xl font-sofia-bold text-[#001F45] tracking-tight">
                      {selectedPhase.fullTitle}
                    </h4>
                    
                    <p className="mt-4 text-base md:text-xl leading-relaxed text-[#162869]/80 font-inter max-w-2xl">
                      {selectedPhase.details}
                    </p>
                  </div>

                  <div className="md:w-80 shrink-0">
                    <div className="rounded-2xl bg-white border border-[#001F45]/5 p-6 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#001F45]/40 mb-5">
                        Livrables & Étapes
                      </p>
                      <div className="space-y-3">
                        {selectedPhase.includes.map((item, i) => (
                          <motion.div 
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            key={i} 
                            className="flex items-center gap-3"
                          >
                            <div className={`h-1.5 w-1.5 rounded-full ${selectedPhase.color}`} />
                            <span className="text-sm text-[#001F45] font-inter font-medium leading-tight">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 rounded-3xl border-2 border-dashed border-[#001F45]/5 bg-slate-50/20"
              >
                <div className="flex flex-col items-center gap-1 opacity-30">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-1 w-4 rounded-full bg-[#001F45]/40" />
                    ))}
                  </div>
                  <p className="text-[#162869] font-inter text-sm font-medium">
                    Survolez la chronologie pour découvrir les détails
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Included + CTA */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div
            className="lg:col-span-3 rounded-2xl border border-[#001F45]/10 bg-[#f6f7fc] p-6 md:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[#162869]/70 font-inter">
              Tout est inclus
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-sofia-bold text-[#001F45]">
              Ce qui est compris dans l'offre
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {INCLUDED.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[15px] text-[#001F45] font-inter"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0EA5E9]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-[#001F45]/15 bg-gradient-to-br from-white via-[#f6f7fc] to-white p-6 md:p-8 shadow-soft"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DBFF00]/30 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-col gap-3">
                <Link
                  href="/offre"
                  className="inline-flex items-center justify-center rounded-lg bg-[#001F45] px-5 py-3 text-sm font-inter font-semibold text-white transition-smooth hover:bg-[#0b2b63]"
                >
                  Découvrir l'offre complète
                  <FaArrowRight className="ml-2 h-3 w-3" aria-hidden />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-[#001F45]/20 bg-white px-5 py-3 text-sm font-inter font-semibold text-[#001F45] transition-smooth hover:border-[#001F45]/40"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
