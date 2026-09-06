'use client'

const credentials = [
  { label: 'Diplôme', value: "Ingénieur en informatique" },
  { label: 'Spécialités', value: 'React Native · Next.js · TypeScript' },
  { label: 'Base', value: 'Toulouse, Occitanie' },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A1628] py-20 md:py-32"
      aria-labelledby="about-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-technical opacity-100" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(46,143,255,0.16) 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(46,143,255,0.10) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.22em] text-[#2E8FFF]">
          Qui je suis
        </p>

        <h2
          id="about-heading"
          className="mt-3 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-sofia-bold text-white tracking-tight text-balance"
        >
          Ingénieur en informatique,
          <br className="hidden sm:block" /> pas générateur de code.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-6 font-inter text-lg leading-relaxed text-white/75">
            <p>
              Je m&apos;appelle Yann Rouquié. Je suis ingénieur en informatique et je conçois
              des applications web et mobiles sur mesure depuis Toulouse — de l&apos;architecture
              jusqu&apos;à la mise en production.
            </p>
            <p>
              Écrire du code n&apos;est plus la partie difficile : n&apos;importe qui peut aujourd&apos;hui
              produire un écran qui fonctionne à la démo. Ce qui reste difficile, c&apos;est de savoir
              <span className="text-white"> pourquoi </span>
une solution tient quand les données grossissent, quand deux utilisateurs écrivent
              en même temps, quand la facture d&apos;hébergement arrive — et de pouvoir la corriger
              six mois plus tard.
            </p>
            <p>
              C&apos;est exactement ce que sanctionne une formation d&apos;ingénieur : algorithmique,
              structures de données, bases de données, réseaux, sécurité. Ce sont les fondations
              qui font la différence entre un prototype et un produit que vous pouvez exploiter.
            </p>
          </div>

          <dl className="space-y-5 self-start rounded-2xl border border-[#1E3455] bg-[#12233D]/70 p-6 backdrop-blur">
            {credentials.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-white/40">
                  {item.label}
                </dt>
                <dd className="mt-1 font-sofia-bold text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
