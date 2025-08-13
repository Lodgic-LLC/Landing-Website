import Link from 'next/link'
import { FaChevronRight, FaHome, FaEnvelope } from 'react-icons/fa'

export default function NotFound() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 overflow-hidden relative min-h-screen flex items-center">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-[#DBFF00]/20 to-[#001F45]/10 blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Numéro 404 avec style amélioré */}
        <div className="mb-8">
          <h1 className="font-bricolage-grotesque-bold text-[#001F45] text-8xl sm:text-9xl md:text-[10rem] leading-none mb-4 opacity-90">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DBFF00] to-[#DBFF00]/60 mx-auto mb-8"></div>
        </div>

        {/* Titre et description */}
        <h2 className="font-bricolage-grotesque-bold text-[#001F45] text-2xl sm:text-3xl md:text-4xl mb-6">
          Page non trouvée
        </h2>
        <p className="font-inter text-[#162869] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 opacity-90">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Mais ne vous inquiétez pas, nous sommes là
          pour vous aider à retrouver votre chemin !
        </p>

        {/* Points utiles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-[#001F45]">
            <div className="w-2 h-2 bg-[#DBFF00] rounded-full"></div>
            <span className="font-inter text-sm font-medium">Vérifiez l'URL saisie</span>
          </div>
          <div className="flex items-center gap-2 text-[#001F45]">
            <div className="w-2 h-2 bg-[#DBFF00] rounded-full"></div>
            <span className="font-inter text-sm font-medium">Retournez à l'accueil</span>
          </div>
        </div>

        {/* Boutons d'action avec le style de la homepage */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#001F45] to-[#0b2b63] px-8 py-4 text-white font-inter font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
            aria-label="Retour à l'accueil"
          >
            <FaHome className="mr-2" aria-hidden />
            Retour à l'accueil
            <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center rounded-xl border-2 border-[#001F45] px-8 py-4 text-[#001F45] font-inter font-semibold hover:bg-[#DBFF00] hover:text-[#001F45] hover:border-[#DBFF00] transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#001F45]"
            aria-label="Nous contacter"
          >
            <FaEnvelope className="mr-2" aria-hidden />
            Nous contacter
          </Link>
        </div>

        {/* Message d'aide supplémentaire */}
        <div className="mt-16 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-[#001F45]/10">
          <p className="font-inter text-[#162869] text-sm leading-relaxed">
            Vous cherchez quelque chose de spécifique ?
            <Link
              href="/#services"
              className="text-[#001F45] hover:text-[#DBFF00] font-semibold ml-1 transition-colors"
            >
              Découvrez nos services
            </Link>{' '}
            ou
            <Link href="/#contact" className="text-[#001F45] hover:text-[#DBFF00] font-semibold ml-1 transition-colors">
              contactez-nous directement
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Dégradé vers le blanc en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
    </section>
  )
}
