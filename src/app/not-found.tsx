import Link from "next/link";
import { FaChevronRight, FaHome, FaEnvelope } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F5F8FC] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 overflow-hidden relative min-h-screen flex items-center">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-[#2E8FFF]/20 to-[#0F2647]/10 blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Numéro 404 avec style amélioré */}
        <div className="mb-8">
          <h1 className="font-bricolage-grotesque-bold text-[#0F2647] text-8xl sm:text-9xl md:text-[10rem] leading-none mb-4 opacity-90">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E8FFF] to-[#2E8FFF]/60 mx-auto mb-8"></div>
        </div>

        {/* Titre et description */}
        <h2 className="font-bricolage-grotesque-bold text-[#0F2647] text-2xl sm:text-3xl md:text-4xl mb-6">
          Page non trouvée
        </h2>
        <p className="font-inter text-[#475D80] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 opacity-90">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          Mais ne vous inquiétez pas, je suis là pour vous aider à retrouver
          votre chemin !
        </p>

        {/* Points utiles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-[#0F2647]">
            <div className="w-2 h-2 bg-[#2E8FFF] rounded-full"></div>
            <span className="font-inter text-sm font-medium">
              Vérifiez l'URL saisie
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#0F2647]">
            <div className="w-2 h-2 bg-[#2E8FFF] rounded-full"></div>
            <span className="font-inter text-sm font-medium">
              Retournez à l'accueil
            </span>
          </div>
        </div>

        {/* Boutons d'action avec le style de la homepage */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0F2647] to-[#1B6FD4] px-8 py-4 text-white font-inter font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F2647]"
            aria-label="Retour à l'accueil"
          >
            <FaHome className="mr-2" aria-hidden />
            Retour à l'accueil
            <FaChevronRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              aria-hidden
            />
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center rounded-xl border-2 border-[#0F2647] px-8 py-4 text-white font-inter font-semibold hover:bg-[#2E8FFF] hover:text-white hover:border-[#2E8FFF] transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F2647]"
            aria-label="Me contacter"
          >
            <FaEnvelope className="mr-2" aria-hidden />
            Me contacter
          </Link>
        </div>

        {/* Message d'aide supplémentaire */}
        <div className="mt-16 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-[#0F2647]/10">
          <p className="font-inter text-[#475D80] text-sm leading-relaxed">
            Vous cherchez quelque chose de spécifique ?
            <Link
              href="/#services"
              className="text-[#0F2647] hover:text-[#2E8FFF] font-semibold ml-1 transition-colors"
            >
              Découvrez nos services
            </Link>{" "}
            ou
            <Link
              href="/#contact"
              className="text-[#0F2647] hover:text-[#2E8FFF] font-semibold ml-1 transition-colors"
            >
              écrivez-moi directement
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Dégradé vers le blanc en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
    </section>
  );
}
