const steps = [
  {
    n: '01',
    title: 'Premier échange',
    duration: '30 minutes',
    text: "Vous m'expliquez ce que vous voulez obtenir, vos contraintes et votre budget. Je vous dis ce qui est réaliste et ce qui ne l'est pas.",
  },
  {
    n: '02',
    title: 'Cadrage écrit',
    duration: '3 à 5 jours',
    text: "Je rédige le périmètre fonctionnel, les choix techniques et le planning. Vous validez ce document avant que la moindre ligne soit écrite.",
  },
  {
    n: '03',
    title: 'Développement',
    duration: 'Selon le projet',
    text: "Vous testez le produit chaque semaine sur un lien privé. Les ajustements se font au fil de l'eau, pas le jour de la livraison.",
  },
  {
    n: '04',
    title: 'Mise en ligne',
    duration: '1 semaine',
    text: "Déploiement, mise en place du suivi et passation. Vous recevez les accès, la documentation et le code : le projet vous appartient.",
  },
]

export default function Method() {
  return (
    <section
      id="methode"
      className="bg-white py-20 md:py-28 border-t border-[#E6E1D8]"
      aria-labelledby="methode-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-left">Comment ça se passe</p>
          <h2
            id="methode-heading"
            className="mt-3 text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
          >
            Quatre étapes, et vous savez toujours où en est le projet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6B655D] font-inter">
            Pas de devis opaque ni de tunnel de plusieurs mois sans nouvelles. Le périmètre
            et le budget sont posés à l&apos;écrit avant de commencer.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[#E6E1D8] bg-[#E6E1D8] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col bg-white p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <span className="mono text-sm font-semibold text-[#C2542D]">{step.n}</span>
                <span className="text-[11px] font-inter font-medium uppercase tracking-[0.12em] text-[#6B655D]">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-sofia-bold text-[#2E2B28]">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#6B655D] font-inter">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm text-[#6B655D] font-inter">
          Un site vitrine se livre en général en 3 à 5 semaines, une application mobile en 2 à
          4 mois. Le cadrage précise le calendrier de votre projet.
        </p>
      </div>
    </section>
  )
}
