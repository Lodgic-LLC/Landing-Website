"use client";
import { FaPaintBrush, FaMobileAlt, FaRocket, FaChevronRight } from "react-icons/fa";

const services = [
  {
    num: "01",
    title: "Conception UX/UI",
    subtitle: "L'expérience au service de l'engagement",
    description:
      "Nous transformons vos idées en parcours utilisateurs fluides et esthétiques. Chaque écran est conçu pour maximiser la rétention et simplifier l'usage complexe, validé par des prototypes interactifs avant tout développement.",
    icon: FaPaintBrush,
    tags: ["UX Research", "UI Design", "Design System", "Prototypage"],
    color: "#DBFF00"
  },
  {
    num: "02",
    title: "Développement Mobile",
    subtitle: "Performance native, vélocité React Native",
    description:
      "Nous développons des applications hybrides haut de gamme avec une seule codebase pour iOS et Android. Résultat : une maintenance simplifiée, des coûts optimisés et une fluidité identique au natif.",
    icon: FaMobileAlt,
    tags: ["iOS & Android", "React Native", "API Cloud", "Infrastructure"],
    color: "#3b5bdb"
  },
  {
    num: "03",
    title: "Lancement & Suivi",
    subtitle: "De la publication à la croissance",
    description:
      "Notre accompagnement ne s'arrête pas au code. Nous gérons le déploiement sur les stores (App Store / Play Store) et assurons un monitoring constant pour garantir la stabilité de votre produit.",
    icon: FaRocket,
    tags: ["ASO Opti", "Maintenance", "Analytics", "Scaling"],
    color: "#0b2b63"
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#001F45] py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DBFF00]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Simplified Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h2
              id="about-heading"
              className="text-4xl font-sofia-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
            >
              L&apos;artisanat du code <br />
              <span className="text-white/40 italic">au service de l&apos;impact.</span>
            </h2>
            <p className="max-w-md font-inter text-lg leading-relaxed text-white/50 border-l border-[#DBFF00]/30 pl-8">
              Lodgic est une agence toulousaine dédiée à l'accélération mobile. Nous fusionnons <span className="text-white">excellence technique</span> et <span className="text-white">agilité business</span> pour livrer des produits robustes en un temps record.
            </p>
          </div>
        </div>

        {/* Vertical Editorial Layout (Replacing Cards) */}
        <div className="space-y-4 md:space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative flex flex-col md:flex-row items-start md:items-center py-12 md:py-20 border-t border-white/10 hover:bg-white/[0.02] transition-colors gap-8 md:gap-20"
              >
                {/* Visual side */}
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="text-6xl md:text-9xl font-sofia-bold text-white/10 transition-colors group-hover:text-[#DBFF00]/15 shrink-0">
                    {service.num}
                  </span>
                  <div className="h-16 w-16 md:h-24 md:w-24 shrink-0 flex items-center justify-center rounded-2xl md:rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 group-hover:bg-[#DBFF00] group-hover:shadow-[0_0_40px_rgba(219,255,0,0.2)]">
                    <Icon className="h-6 w-6 md:h-10 md:w-10 text-[#DBFF00] transition-colors group-hover:text-[#001F45]" />
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[#DBFF00] text-sm font-sofia-bold uppercase tracking-tighter">
                      {service.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-sofia-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="max-w-2xl font-inter text-base md:text-lg leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action indicator (Desktop only) */}
                <div className="hidden md:flex opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#DBFF00]">
                  <FaChevronRight className="h-8 w-8" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Strip */}
        <div className="mt-20 flex flex-col items-center border-t border-white/10 pt-20 text-center">
            <h4 className="text-2xl font-sofia-bold text-white mb-6">Prêt à lancer votre projet ?</h4>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-3 bg-[#DBFF00] text-[#001F45] px-8 py-4 rounded-full font-sofia-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(219,255,0,0.3)]"
            >
              Démarrer le voyage
              <FaRocket className="h-4 w-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
