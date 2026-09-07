const credentials = [
  { label: 'Formation', value: 'Ingénieur diplômé en informatique' },
  { label: 'Technologies', value: 'React · Next.js · React Native · Node.js' },
  { label: 'Zone', value: 'Toulouse · à distance partout en France' },
]

const comparison = [
  {
    theme: 'Quand ça casse',
    generated: "Le bug est renvoyé à l'IA en espérant une correction, souvent au prix d'une régression ailleurs.",
    engineered: "Je lis la pile d'appels, j'isole la cause et je corrige à la source, avec un test qui empêche le retour du bug.",
  },
  {
    theme: 'Quand ça grandit',
    generated: "Ce qui tient à 50 utilisateurs s'effondre à 5 000 : requêtes en boucle, absence d'index, tout recalculé.",
    engineered: 'Modèle de données, index et cache pensés avant la première ligne. La montée en charge est prévue, pas subie.',
  },
  {
    theme: 'Sécurité et données',
    generated: "Contrôles d'accès côté navigateur, secrets exposés, données personnelles sans base légale.",
    engineered: 'Autorisations vérifiées côté serveur, secrets isolés, traitement conforme au RGPD. Traité au cadrage.',
  },
  {
    theme: 'Dans six mois',
    generated: 'Personne ne sait comment le projet fonctionne. Une évolution revient souvent à tout réécrire.',
    engineered: "Architecture documentée, code typé et testé. Vous pouvez reprendre le projet, avec moi ou avec quelqu'un d'autre.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#23211F] py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Identité */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow eyebrow-left">Qui je suis</p>
            <h2
              id="about-heading"
              className="mt-3 text-4xl md:text-5xl font-sofia-bold text-white tracking-tight text-balance"
            >
              Yann Rouquié,
              <br className="hidden sm:block" /> ingénieur en informatique.
            </h2>
            <div className="mt-6 space-y-5 font-inter text-lg leading-relaxed text-white/75">
              <p>
                Je conçois et développe des sites, des applications et des logiciels sur
                mesure depuis Toulouse, pour des entreprises locales et des porteurs de
                projet. Je travaille seul : la personne à qui vous expliquez votre besoin
                est celle qui écrit le code.
              </p>
              <p>
                Une formation d&apos;ingénieur, concrètement, ça sert à quoi ? À savoir{' '}
                <strong className="font-sofia-bold text-white">pourquoi</strong> une solution
                tient — quand les données grossissent, quand deux personnes modifient la
                même fiche en même temps, quand la facture d&apos;hébergement arrive. Et à
                pouvoir la corriger dans six mois sans tout refaire.
              </p>
              <p>
                J&apos;utilise les outils d&apos;IA au quotidien, comme tout développeur sérieux.
                Ils écrivent vite ; ils ne répondent de rien. Juger ce qu&apos;ils produisent,
                le tester et le maintenir, c&apos;est mon métier.
              </p>
            </div>
          </div>

          <dl className="space-y-5 self-start rounded-xl border border-[#45403A] bg-[#33302C] p-6">
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

        {/* Comparaison */}
        <div className="mt-16 border-t border-[#45403A] pt-12 md:mt-20 md:pt-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-sofia-bold text-white tracking-tight text-balance">
              L&apos;IA écrit du code. Elle ne répond pas de ce qu&apos;elle écrit.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/70 font-inter">
              J&apos;utilise moi-même ces outils tous les jours : ils font gagner un temps réel.
              La différence est dans la capacité à juger ce qui sort, à en répondre en
              production et à le maintenir.
            </p>
          </div>

          <div className="mt-9 overflow-hidden rounded-xl border border-[#45403A]">
            <div className="hidden md:grid md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] border-b border-[#45403A] bg-[#33302C]">
              <div className="px-5 py-3" />
              <div className="px-5 py-3">
                <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-white/45">
                  Code généré sans expertise
                </p>
              </div>
              <div className="border-l border-[#45403A] px-5 py-3">
                <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-[#E08A63]">
                  Développé par un ingénieur
                </p>
              </div>
            </div>

            {comparison.map((row, index) => (
              <div
                key={row.theme}
                className={`grid md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.2fr)_minmax(0,1.2fr)] ${
                  index > 0 ? 'border-t border-[#45403A]' : ''
                }`}
              >
                <div className="px-5 pt-5 pb-1 md:py-5">
                  <p className="font-sofia-bold text-white text-[15px]">{row.theme}</p>
                </div>
                <div className="px-5 py-3 md:py-5">
                  <p className="md:hidden mb-1.5 text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-white/40">
                    Sans expertise
                  </p>
                  <p className="text-sm leading-relaxed text-white/55 font-inter">{row.generated}</p>
                </div>
                <div className="border-t border-[#45403A] bg-[#2B2724] px-5 py-3 md:border-t-0 md:border-l md:py-5">
                  <p className="md:hidden mb-1.5 text-[11px] font-inter font-semibold uppercase tracking-[0.14em] text-[#E08A63]">
                    Avec un ingénieur
                  </p>
                  <p className="text-sm leading-relaxed text-white/85 font-inter">{row.engineered}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
