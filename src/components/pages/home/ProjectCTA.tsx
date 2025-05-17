import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

export default function ProjectCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br bg-[#2C3E50] relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Points lumineux */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FAF3E0]/20 rounded-full"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-[#FAF3E0]/30 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#A3B18A]/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-[#A3B18A]/20 rounded-full"></div>

        {/* Cercles abstraits */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[#FAF3E0]/10"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border border-[#A3B18A]/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#FAF3E0]/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Contenu gauche */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-[#FAF3E0] mb-5">
              Prêts à transformer <span className="text-[#E67E22]">votre idée</span> en réalité ?
            </h2>
            <p className="text-[#FAF3E0]/90 text-md md:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              <span className="md:hidden">Discutons de votre projet et concrétisons-le ensemble.</span>
              <span className="hidden md:inline">
                On est là pour vous accompagner à chaque étape. Discutons de votre projet et voyons comment on peut vous
                aider à le concrétiser.
              </span>
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/rendez-vous"
                className="bg-[#E67E22] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center"
                aria-label="Discutons de votre projet en nous contactant"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Discutons de votre projet
              </Link>
              <Link
                href="/nos-solutions" // Assuming a page for solutions/services
                className="bg-transparent border-2 border-[#FAF3E0] text-[#FAF3E0] px-8 py-3 rounded-full font-semibold hover:bg-[#FAF3E0] hover:text-[#2C3E50] transition-all flex items-center group"
                aria-label="Explorez nos solutions pour votre projet"
              >
                Explorer nos solutions
                <FaChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#FAF3E0]/70 text-center lg:text-left">
              Un premier échange pour comprendre vos besoins, c'est gratuit et sans engagement.
            </p>
          </div>

          {/* Image à droite - Hidden on mobile, visible on tablet and up */}
          <div className="w-full lg:w-1/2 relative hidden sm:block">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/svg/contact.svg" // Placeholder - to be replaced
                alt="Illustration d'une personne contactant une équipe pour un projet"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority // Consider if priority is needed if image is below the fold
                className="object-contain object-center p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/50 to-transparent"></div>

              {/* Overlay avec formulaire simplifié */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#2C3E50]/80 to-[#2C3E50]/60">
                <h3 className="text-[#FAF3E0] text-lg font-semibold mb-3">Un projet en tête ?</h3>
                <div className="flex gap-3">
                  <Link
                    href="/rendez-vous"
                    className="bg-[#FAF3E0] text-[#2C3E50] px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex-grow text-center text-sm"
                    aria-label="Planifier un appel pour discuter de votre projet"
                  >
                    Planifier un appel
                  </Link>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#A3B18A]/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
