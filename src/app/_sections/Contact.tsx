import Formulaire from '@/components/Formulaire'
import { reassurance } from '@/content/accueil'

export default function FAQ() {
  return (
    <section
      className="relative py-14 md:py-20 bg-[#F8F6F2] overflow-hidden border-t border-[#E6E1D8]"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-1/2 lg:pr-8 lg:border-r lg:border-[#E6E1D8] flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofia-bold text-[#2E2B28] mb-6 text-balance">
                Expliquez-moi votre projet
              </h2>
              <p className="text-[#6B655D] mb-10 font-inter text-lg leading-relaxed">
                Décrivez-le en quelques lignes, même approximatives. Réponse sous 24 heures.
              </p>

              <ul className="space-y-7">
                {reassurance.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2542D] text-white"
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
                      <p className="font-sofia-bold text-[#2E2B28] text-[17px]">{item.title}</p>
                      <p className="mt-1.5 text-[#6B655D] font-inter leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-[#E6E1D8] pt-6">
                <p className="text-sm text-[#6B655D] font-inter">
                  Vous préférez écrire directement ?
                </p>
                <a
                  href="mailto:contact@lodgic-dev.com"
                  className="mt-1 inline-block font-sofia-bold text-[#2E2B28] hover:text-[#C2542D] transition-colors"
                >
                  contact@lodgic-dev.com
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-8 flex-grow">
              <Formulaire source="accueil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
