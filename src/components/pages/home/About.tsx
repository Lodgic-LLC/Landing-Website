import { FaCheckCircle, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <section className="py-20 bg-[#FAF3E0] relative overflow-hidden">
      {/* Top Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px', transform: 'translateY(0px)' }}>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="#FFFFFF" /> 
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Qui sommes-nous ?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Une équipe à taille humaine, proche de vous et de vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6">
              <div className="relative w-20 h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E67E22]/80 to-[#E67E22]/60 group-hover:from-[#E67E22] group-hover:to-[#E67E22]/70 transition-all duration-300 shadow-md"></div>
                <div className="absolute inset-1 rounded-full bg-[#FAF3E0] flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#E67E22] group-hover:text-[#FFFFFF] transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#111827] group-hover:text-[#E67E22] transition-colors">
                  
                </h3>
                <p className="text-[#E67E22] font-medium">Relation client / Développeur Mobile</p>
              </div>
            </div>

            <p className="text-[#374151] mb-6 leading-relaxed text-sm sm:text-base">
              <span className="md:hidden">Interlocuteur principal, il analyse vos besoins pour un cahier des charges précis.</span>
              <span className="hidden md:inline">Yann est votre interlocuteur principal tout au long de votre projet. Il analyse vos besoins et objectifs pour créer un cahier des charges précis qui servira de base à la réalisation.</span>
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                  Analyse et compréhension de vos besoins
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                  Suivi et coordination du développement
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                  Accompagnement post-lancement et évolutions
                </span>
              </div>
            </div>
          </div>

          {/* Mathéo Katbie */}
          <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1.5 group">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6">
              <div className="relative w-20 h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C3E50]/80 to-[#2C3E50]/60 group-hover:from-[#2C3E50] group-hover:to-[#2C3E50]/70 transition-all duration-300 shadow-md"></div>
                <div className="absolute inset-1 rounded-full bg-[#FAF3E0] flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#2C3E50] group-hover:text-[#FFFFFF] transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#111827] group-hover:text-[#E67E22] transition-colors">
                  Mathéo Katbie
                </h3>
                <p className="text-[#E67E22] font-medium">Développeur Full-Stack Web & Mobile</p>
              </div>
            </div>

            <p className="text-[#374151] mb-6 leading-relaxed text-sm sm:text-base">
              <span className="md:hidden">Donne vie à votre projet avec des solutions techniques robustes et intuitives.</span>
              <span className="hidden md:inline">Mathéo donne vie à votre projet avec des solutions techniques robustes et intuitives. Son expertise couvre l'ensemble du développement, du back-end au front-end, pour des applications performantes et faciles à utiliser.</span>
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                  Développement d'applications web et mobiles
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                  Intégration d'API et services tiers
                </span>
              </div>
              <div className="flex items-start">
                <FaCheckCircle className="h-5 w-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:text-[#2C3E50] transition-colors" />
                <span className="ml-3 text-[#374151] group-hover:text-[#111827] transition-colors">
                  Optimisation des performances et de la sécurité
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Équipe étendue */}
        <div className="bg-[#FAF3E0]/50 rounded-xl p-6 md:p-8 max-w-5xl mx-auto shadow-lg border border-[#FAF3E0] hover:border-[#E67E22]/50 hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
          <div className="flex flex-col sm:flex-row items-start text-center sm:text-left">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E67E22]/20 to-[#E67E22]/10 group-hover:from-[#E67E22] group-hover:to-[#E67E22]/70 transition-all duration-300 shadow-md rounded-full flex items-center justify-center mb-4 sm:mb-0">
                <FaUsers className="w-8 h-8 text-[#E67E22] group-hover:text-[#FFFFFF] transition-colors duration-300" />
              </div>
            </div>
            <div className="sm:ml-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#E67E22] transition-colors">
                Une équipe adaptable à vos besoins
              </h3>
              <p className="text-[#374151] leading-relaxed text-sm sm:text-base">
                <span className="md:hidden">Pour les projets d'envergure, nous collaborons avec notre réseau de développeurs spécialisés.</span>
                <span className="hidden md:inline">Pour les projets d'envergure ou nécessitant des compétences spécifiques, nous collaborons avec notre réseau de développeurs spécialisés (UI/UX designers, experts en sécurité, développeurs mobiles natifs, etc.). Cette flexibilité nous permet de constituer l'équipe idéale pour votre projet, quelle que soit sa taille ou sa complexité.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px', transform: 'translateY(1px)' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z" fill="#F5F5F0" />
        </svg>
      </div>
    </section>
  )
}

export default About; 