'use client'

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#001F45] py-20 md:py-32"
      aria-labelledby="about-heading"
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#DBFF00] blur-[120px] opacity-10" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[120px] opacity-10" />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2
            id="about-heading"
            className="text-4xl md:text-6xl font-sofia-bold text-white mb-16 text-center tracking-tight"
          >
            Qui sommes-nous <span className="text-[#DBFF00]">?</span>
          </h2>

          <div className="relative">
            {/* Guillemet décoratif */}
            <div className="absolute -left-4 md:-left-12 -top-8 text-6xl md:text-8xl font-sofia-bold text-[#DBFF00]/10 select-none">
              “
            </div>

            <div className="space-y-8 font-inter text-lg md:text-2xl leading-relaxed text-white/80 text-center max-w-4xl mx-auto">
              <p className="relative z-10">
                Lodgic est une agence de développement d’applications mobiles basée à Toulouse, spécialisée dans la
                création d’apps cross-platform avec React Native. Nous accompagnons les startups, entrepreneurs et
                solopreneurs à chaque étape, de la conception UX/UI jusqu’au développement, en passant par le conseil
                stratégique et la maintenance.
              </p>

              <div className="py-10 my-10 border-y border-white/10 relative group">
                <div className="absolute inset-0 bg-white/[0.02] -mx-4 rounded-3xl scale-95 group-hover:scale-100 transition-transform duration-500" />
                <p className="relative z-10 font-sofia-bold text-white text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
                  Chez Lodgic, nous mettons un point d’honneur à offrir un accompagnement sur-mesure, pour transformer
                  chaque idée en produit digital fiable, scalable et prêt à conquérir votre marché !
                </p>
              </div>
            </div>

            <div className="absolute -right-4 md:-right-12 -bottom-8 text-6xl md:text-8xl font-sofia-bold text-[#DBFF00]/10 select-none rotate-180">
              “
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
