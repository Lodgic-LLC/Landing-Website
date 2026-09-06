const comparison = [
  {
    theme: 'Quand ça casse',
    generated:
      "Le code a été produit sans être compris. Le bug est renvoyé à l'IA en espérant une correction, souvent au prix d'une régression ailleurs.",
    engineered:
      "Je lis la pile d'appels, j'isole la cause et je corrige à la source. Un correctif, une explication, un test qui empêche le retour du bug.",
  },
  {
    theme: 'Quand ça grandit',
    generated:
      "Ce qui tient à 50 utilisateurs s'effondre à 5 000 : requêtes en boucle, absence d'index, tout recalculé à chaque affichage.",
    engineered:
      'Le modèle de données, les index et le cache sont pensés avant la première ligne. La montée en charge est une hypothèse de conception, pas une surprise.',
  },
  {
    theme: 'Sécurité et données',
    generated:
      "Contrôles d'accès posés côté navigateur, secrets exposés, données personnelles collectées sans base légale.",
    engineered:
      "Autorisations vérifiées côté serveur, secrets isolés, traitement des données conforme au RGPD. Sujets traités au cadrage, pas après l'incident.",
  },
  {
    theme: 'Dans six mois',
    generated:
      'Personne ne sait comment le projet fonctionne. Faire évoluer une fonctionnalité revient souvent à tout réécrire.',
    engineered:
      "Architecture documentée, code typé et testé, historique lisible. Vous pouvez reprendre le projet, avec moi ou avec quelqu'un d'autre.",
  },
]

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#F8F6F2] py-20 md:py-28 border-t border-[#E6E1D8]"
      aria-labelledby="expertise-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.22em] text-[#C2542D]">
            Pourquoi un ingénieur
          </p>
          <h2
            id="expertise-heading"
            className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
          >
            L&apos;IA écrit du code. Elle ne répond pas de ce qu&apos;elle écrit.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6B655D] font-inter">
            J&apos;utilise moi-même ces outils tous les jours : ils font gagner un temps réel.
            La différence n&apos;est pas là. Elle est dans la capacité à juger ce qui sort,
            à en répondre en production et à le maintenir dans la durée.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#E6E1D8] bg-white shadow-soft">
          <div className="hidden md:grid md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] border-b border-[#E6E1D8] bg-[#F8F6F2]">
            <div className="px-6 py-4" />
            <div className="px-6 py-4">
              <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
                Code généré sans expertise
              </p>
            </div>
            <div className="border-l border-[#E6E1D8] bg-[#FBEFE9] px-6 py-4">
              <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#A34322]">
                Développé par un ingénieur
              </p>
            </div>
          </div>

          {comparison.map((row, index) => (
            <div
              key={row.theme}
              className={`grid md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] ${
                index > 0 ? 'border-t border-[#E6E1D8]' : ''
              }`}
            >
              <div className="px-6 pt-6 pb-2 md:py-6">
                <p className="font-sofia-bold text-[#2E2B28]">{row.theme}</p>
              </div>

              <div className="px-6 py-4 md:py-6">
                <p className="md:hidden mb-2 text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#6B655D]">
                  Sans expertise
                </p>
                <div className="flex gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#A79F94]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  <p className="text-[15px] leading-relaxed text-[#6B655D] font-inter">
                    {row.generated}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E6E1D8] bg-[#FBEFE9]/45 px-6 py-4 md:border-t-0 md:border-l md:py-6">
                <p className="md:hidden mb-2 text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-[#A34322]">
                  Avec un ingénieur
                </p>
                <div className="flex gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#C2542D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="text-[15px] leading-relaxed text-[#2E2B28] font-inter">
                    {row.engineered}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#6B655D] font-inter">
          Un prototype généré en une soirée peut suffire à valider une idée. Pour un produit
          que vous allez exploiter, facturer et faire évoluer, c&apos;est une autre exigence.
        </p>
      </div>
    </section>
  )
}
