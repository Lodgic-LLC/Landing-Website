"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaServer } from "react-icons/fa";

const services = [
  {
    num: "01",
    title: "Conseil & Conception",
    description:
      "Nous prenons le temps de comprendre votre métier. Avant d'écrire la moindre ligne de code, nous validons vos besoins et dessinons les plans de votre future application.",
    icon: FaProjectDiagram,
    tags: [
      "Étude du besoin",
      "Choix des bons outils",
      "Maquettes",
      "Accompagnement",
    ],
  },
  {
    num: "02",
    title: "Développement Sur-Mesure",
    description:
      "Nous créons des applications rapides, belles et faciles à utiliser. Nous construisons une base technique très solide pour que votre produit puisse évoluer avec votre entreprise.",
    icon: FaLaptopCode,
    tags: [
      "Interfaces modernes",
      "Systèmes fiables",
      "Travail de qualité",
      "Tests approfondis",
    ],
  },
  {
    num: "03",
    title: "Mise en ligne & Sécurité",
    description:
      "Nous gérons la publication de votre outil sur internet en toute sécurité. Nous assurons ensuite la surveillance technique pour garantir qu'il reste rapide et protégé 24h/24.",
    icon: FaServer,
    tags: [
      "Mises à jour fluides",
      "Hébergement Cloud",
      "Surveillance continue",
      "Protection des données",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#000F2E] py-32"
      aria-labelledby="about-heading"
    >
      {/* ── Aurora gradient orbs ── */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-[#DBFF00] opacity-[0.07] blur-[180px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#0EA5E9] opacity-[0.09] blur-[180px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 25, -25, 0], y: [0, 30, -10, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DBFF00] opacity-[0.04] blur-[200px]"
      />

      {/* ── Dot grid overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Vignette edges ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,transparent_60%,#000F2E_100%)]"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#DBFF00]">
              Notre ADN
            </span>

            <h2
              id="about-heading"
              className="mb-6 text-4xl font-sofia-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              Nous bâtissons les systèmes{" "}
              <span className="relative inline-block">
                qui feront votre futur.
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-10 h-4 w-full bg-[#DBFF00] opacity-80"
                />
              </span>
            </h2>

            <p className="font-inter text-lg leading-relaxed text-white/50 md:text-xl">
              Nous ne livrons pas simplement du code — nous construisons des{" "}
              <span className="text-white/80 font-semibold">
                fondations digitales solides
              </span>{" "}
              qui grandissent avec votre entreprise. Chaque décision est pensée
              pour durer.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20 flex items-center justify-center gap-12 md:gap-24"
        >
          <div className="group cursor-default text-center">
            <p className="text-5xl font-sofia-bold text-white transition-transform duration-300 group-hover:scale-110 md:text-6xl">
              100
              <span className="text-[#DBFF00] drop-shadow-[0_0_14px_rgba(219,255,0,0.6)]">
                %
              </span>
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/30">
              Sur-Mesure
            </p>
          </div>

          <div className="h-14 w-px bg-white/10 md:h-20" />

          <div className="group cursor-default text-center">
            <p className="text-5xl font-sofia-bold text-white transition-transform duration-300 group-hover:scale-110 md:text-6xl">
              &lt;1
              <span className="text-[#DBFF00] drop-shadow-[0_0_14px_rgba(219,255,0,0.6)]">
                s
              </span>
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/30">
              Performances
            </p>
          </div>

          <div className="h-14 w-px bg-white/10 md:h-20" />

          <div className="group cursor-default text-center">
            <p className="text-5xl font-sofia-bold text-white transition-transform duration-300 group-hover:scale-110 md:text-6xl">
              24
              <span className="text-[#DBFF00] drop-shadow-[0_0_14px_rgba(219,255,0,0.6)]">
                /7
              </span>
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/30">
              Disponibilité
            </p>
          </div>
        </motion.div>

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
                    <Icon className="h-6 w-6 text-white/40 transition-colors duration-500 group-hover:text-[#000F2E]" />
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
