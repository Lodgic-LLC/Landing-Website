"use client";

import { motion } from "framer-motion";
import { FaPaintBrush, FaMobileAlt, FaRocket } from "react-icons/fa";

const services = [
  {
    num: "01",
    title: "Conception UX/UI",
    description:
      "Avant d'écrire la moindre ligne de code, nous concevons des maquettes intuitives et validées avec vous. Chaque écran est pensé pour offrir une expérience fluide et agréable à vos utilisateurs.",
    icon: FaPaintBrush,
    tags: [
      "UX Research",
      "Maquettes interactives",
      "Design system",
      "Prototypage",
    ],
  },
  {
    num: "02",
    title: "Développement React Native",
    description:
      "Une seule codebase pour iOS et Android, sans compromis sur la qualité ni la performance. Nous construisons des apps cross-platform rapides, solides et prêtes à évoluer avec votre business.",
    icon: FaMobileAlt,
    tags: [
      "iOS & Android",
      "React Native",
      "API & Backend",
      "Tests approfondis",
    ],
  },
  {
    num: "03",
    title: "Lancement & Maintenance",
    description:
      "Nous gérons la publication sur l'App Store et Google Play de A à Z. Après le lancement, nous assurons la maintenance et les mises à jour pour que votre app reste performante et à jour.",
    icon: FaRocket,
    tags: ["App Store", "Google Play", "Mises à jour", "Support continu"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#001F45] py-32"
      aria-labelledby="about-heading"
    >
      {/* ── Halos décoratifs (inspirés du footer) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#3b5bdb]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#0b2b63]/30 blur-3xl"
      />

      {/* ── Yellow halo principal (moins opaque) ── */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBFF00] blur-[130px]"
      />
      {/* Inner halo (plus concentré) */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.12, 1], opacity: [0.02, 0.05, 0.02] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBFF00] blur-[70px]"
      />

      {/* ── Grid overlay (inspiré du footer) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* ── Vignette bords (évite que le halo déborde trop) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,transparent_40%,#001F45_100%)]"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col items-center"
          >
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#DBFF00]">
              Notre ADN
            </span>

            <h2
              id="about-heading"
              className="mb-8 text-4xl font-sofia-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              De l&apos;idée à l&apos;app,{" "}
              <span className="relative inline-block whitespace-nowrap">
                en 45 jours.
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-10 h-4 w-full bg-[#DBFF00] opacity-80"
                />
              </span>
            </h2>

            <p className="font-inter text-lg leading-relaxed text-white/55 md:text-xl">
              Lodgic est une agence de développement d&apos;applications mobiles
              basée à{" "}
              <span className="font-semibold text-white/80">Toulouse</span>,
              spécialisée dans la création d&apos;apps cross-platform avec{" "}
              <span className="font-semibold text-white/80">React Native</span>.
              Nous accompagnons les startups, entrepreneurs et solopreneurs à
              chaque étape — de la conception UX/UI jusqu&apos;au développement,
              en passant par le conseil stratégique et la maintenance — pour
              transformer chaque idée en produit digital{" "}
              <span className="font-semibold text-white/80">
                fiable, scalable et prêt à conquérir votre marché.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="mb-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 50,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.07] md:p-10"
              >
                {/* Card inner glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#DBFF00] opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-10"
                />

                {/* Card header row */}
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-5xl font-sofia-bold text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.12]">
                    {service.num}
                  </span>
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-transparent group-hover:bg-[#DBFF00] group-hover:shadow-[0_0_24px_rgba(219,255,0,0.4)]"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-white/40 transition-colors duration-500 group-hover:text-[#001F45]" />
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-sofia-bold text-white md:text-2xl">
                  {service.title}
                </h3>
                <p className="font-inter flex-grow text-base leading-relaxed text-white/50 md:text-lg">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-white/[0.06] pt-8">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-inter rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/40 transition-colors group-hover:border-white/20 group-hover:text-white/60"
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
};

export default About;
