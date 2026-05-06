"use client";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#001F45] py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-sofia-bold text-white mb-10"
          >
            Qui sommes-nous
          </h2>
          <div className="space-y-6 font-inter text-lg md:text-xl leading-relaxed text-white/70">
            <p>
              Lodgic est une agence de développement d’applications mobiles basée à Toulouse, spécialisée dans la création d’apps cross-platform avec React Native. Nous accompagnons les startups, entrepreneurs et solopreneurs à chaque étape, de la conception UX/UI jusqu’au développement, en passant par le conseil stratégique et la maintenance.
            </p>
            <p>
              Chez Lodgic, nous mettons un point d’honneur à offrir un accompagnement sur-mesure, pour transformer chaque idée en produit digital fiable, scalable et prêt à conquérir votre marché !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
