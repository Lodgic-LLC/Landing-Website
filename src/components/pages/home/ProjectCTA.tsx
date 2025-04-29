import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function ProjectCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Points lumineux */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-white rounded-full opacity-20"></div>

        {/* Cercles abstraits */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border border-white/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Contenu gauche */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Envie de concrétiser votre projet ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Discutons de votre idée et transformons-la en une application
              mobile concrète.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
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
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center group"
              >
                Découvrir nos services
                <FaChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image à droite - Hidden on mobile, visible on tablet and up */}
          <div className="w-full lg:w-1/2 relative hidden sm:block">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510"
                alt="Équipe de développement mobile en discussion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center"
                quality={85}
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>

              {/* Overlay avec formulaire simplifié */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-blue-900/80 to-blue-900/50">
                <h3 className="text-white text-lg font-medium mb-3">
                  Contactez-nous
                </h3>
                <div className="flex gap-3">
                  <Link
                    href="/rendez-vous"
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all flex-grow text-center text-sm"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-300/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
