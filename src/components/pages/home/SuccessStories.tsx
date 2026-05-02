"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Application mobile",
    title: "Gestion locative",
    description:
      "Deux espaces dédiés — propriétaire et locataire — pour centraliser les loyers, les biens et les incidents en temps réel.",
    tags: ["React Native", "iOS & Android"],
    href: "/projets/gestion-locative",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#f6f7fc] py-24 md:py-32"
      aria-labelledby="realisations-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#001F45]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-[#DBFF00]/20 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block rounded-full border border-[#001F45]/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#001F45]/60 shadow-sm">
            Nos réalisations
          </span>
          <h2
            id="realisations-heading"
            className="mt-5 text-4xl font-sofia-bold text-[#001F45] md:text-5xl"
          >
            Ce que nous avons bâti.
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col divide-y divide-[#001F45]/8">
          {projects.map((project, index) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={project.href}
                className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-8 md:py-10"
              >
                {/* Number */}
                <span className="shrink-0 text-sm font-sofia-bold text-[#001F45]/20 sm:w-10">
                  {project.num}
                </span>

                {/* Category */}
                <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-widest text-[#001F45]/40 sm:block sm:w-36">
                  {project.category}
                </span>

                {/* Title + description */}
                <div className="flex-1">
                  <h3 className="text-2xl font-sofia-bold text-[#001F45] transition-colors duration-300 group-hover:text-[#0b2b63] md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm font-inter text-[#162869]/70">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#001F45]/10 bg-white px-3 py-1 text-xs font-inter text-[#001F45]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <span className="flex shrink-0 items-center gap-2 self-start rounded-xl border border-[#001F45]/15 bg-white px-5 py-2.5 text-sm font-sofia-bold text-[#001F45] shadow-soft transition-all duration-300 group-hover:border-[#001F45] group-hover:bg-[#001F45] group-hover:text-white sm:self-auto">
                  En savoir plus
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
