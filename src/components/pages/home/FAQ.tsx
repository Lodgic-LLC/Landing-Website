import HomeProjectForm from '@/components/forms/HomeProjectForm'

const reassurance = [
  {
    title: 'Un échange, pas un devis automatique',
    text: "On commence par comprendre votre besoin. Vous repartez avec un avis honnête, même si votre projet ne nous concerne pas.",
  },
  {
    title: 'Réponse sous 24 heures',
    text: 'Un interlocuteur unique vous répond directement, du premier message jusqu’à la mise en ligne.',
  },
  {
    title: 'Un cadrage avant de chiffrer',
    text: 'Périmètre, contraintes et budget sont posés à l’écrit avant tout développement. Pas de mauvaise surprise en cours de route.',
  },
]

export default function FAQ() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden border-t border-gray-200"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-1/2 lg:pr-8 lg:border-r lg:border-gray-300 flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofia-bold text-[rgb(0,15,69)] mb-6 text-balance">
                Discuter de mon projet
              </h2>
              <p className="text-gray-600 mb-10 font-inter text-lg leading-relaxed">
                Vous avez une idée d&apos;application ou un projet en tête ? Prenez contact
                avec nous pour en discuter.
              </p>

              <ul className="space-y-7">
                {reassurance.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#001F45] text-[#DBFF00]"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-sofia-bold text-[#001F45] text-[17px]">{item.title}</p>
                      <p className="mt-1.5 text-gray-600 font-inter leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 font-inter">
                  Vous préférez écrire directement ?
                </p>
                <a
                  href="mailto:contact@lodgic-dev.com"
                  className="mt-1 inline-block font-sofia-bold text-[#001F45] hover:text-[#0EA5E9] transition-colors"
                >
                  contact@lodgic-dev.com
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-8 flex-grow">
              <HomeProjectForm source="FAQ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
