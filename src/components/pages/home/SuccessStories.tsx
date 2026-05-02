"use client";

import { motion } from "framer-motion";
import { FaCode, FaBolt, FaHandshake } from "react-icons/fa";

const pillars = [
  {
    num: "01",
    icon: FaCode,
    title: "Expertise React Native",
    description:
      "Maîtrise complète de l'écosystème React Native — de l'architecture à la publication sur les stores. Nous garantissons des apps performantes, maintenables et scalables.",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "API REST",
    ],
  },
  {
    num: "02",
    icon: FaBolt,
    title: "Méthode agile & rapide",
    description:
      "Sprints hebdomadaires, livrables réguliers et MVP en main en quelques semaines. Notre méthode éprouvée garantit des délais tenus et un produit aligné sur vos besoins réels.",
    tags: [
      "Sprints courts",
      "MVP d'abord",
      "Itérations",
      "Tests continus",
      "Livrables clairs",
    ],
  },
  {
    num: "03",
    icon: FaHandshake,
    title: "Accompagnement complet",
    description:
      "De la première maquette jusqu'à la maintenance post-lancement, nous sommes à vos côtés à chaque étape. Un seul interlocuteur, une vision partagée, un produit qui vous ressemble.",
    tags: [
      "UX/UI Design",
      "Conseil stratégique",
      "Maintenance",
      "Formation",
      "Support dédié",
    ],
  },
];

const stats = [
  { value: "5", suffix: "+", label: "Ans d'expérience" },
  { value: "20", suffix: "+", label: "Apps livrées" },
  { value: "100", suffix: "%", label: "React Native" },
  { value: "2", suffix: "-en-1", label: "iOS & Android" },
];

export default function SuccessStories() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#f6f7fc] py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      {/* ── Halos décoratifs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#001F45]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-[#DBFF00]/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 flex flex-col items-center text-center md:mb-20"
        >
          <span className="mb-5 inline-block rounded-full border border-[#001F45]/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#001F45]/70 shadow-sm">
            Notre expérience
          </span>
          <h2
            id="experience-heading"
            className="mb-6 max-w-3xl text-4xl font-sofia-bold leading-tight text-[#001F45] md:text-5xl lg:text-6xl"
          >
            5 ans à façonner{" "}
            <span className="relative inline-block">
              des apps qui durent.
              <span
                aria-hidden
                className="absolute bottom-1 left-0 -z-10 h-4 w-full bg-[#DBFF00] opacity-80"
              />
            </span>
          </h2>
          <p className="max-w-2xl font-inter text-lg leading-relaxed text-[#162869]/75 md:text-xl">
            Depuis 2020, nous concevons et développons des applications mobiles
            pour des startups, entrepreneurs et PME. Notre expérience couvre
            l&apos;ensemble du cycle de vie d&apos;une app — du premier
            wireframe jusqu&apos;à la maintenance post-lancement.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-2xl border border-[#001F45]/5 bg-white px-6 py-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <p className="text-4xl font-sofia-bold text-[#001F45] md:text-5xl">
                {stat.value}
                <span className="text-[#DBFF00] drop-shadow-[0_0_8px_rgba(219,255,0,0.5)]">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#162869]/50">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Separator ── */}
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-[#001F45]/10 to-transparent md:mb-20" />

        {/* ── Pillar cards ── */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 55,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#001F45]/5 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-[#001F45]/10 hover:shadow-elevated md:p-10"
              >
                {/* Glow jaune interne au hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#DBFF00] opacity-0 blur-[50px] transition-opacity duration-700 group-hover:opacity-30"
                />

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-5xl font-sofia-bold text-[#001F45]/[0.04] transition-colors duration-500 group-hover:text-[#001F45]/10">
                    {pillar.num}
                  </span>
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#001F45]/10 bg-[#f6f7fc] transition-all duration-500 group-hover:border-transparent group-hover:bg-[#DBFF00] group-hover:shadow-[0_0_20px_rgba(219,255,0,0.4)]"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5 text-[#001F45]/50 transition-colors duration-500 group-hover:text-[#001F45]" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-sofia-bold text-[#001F45] md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="flex-grow font-inter text-base leading-relaxed text-[#162869]/70 md:text-lg">
                  {pillar.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-[#001F45]/5 pt-7">
                  {pillar.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#001F45]/10 bg-[#f6f7fc] px-3 py-1.5 font-inter text-xs text-[#001F45]/50 transition-colors group-hover:border-[#001F45]/20 group-hover:bg-white group-hover:text-[#001F45]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
