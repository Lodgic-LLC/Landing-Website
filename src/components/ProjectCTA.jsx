import React from 'react'

const ProjectCTA = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/footer-img.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-indigo-900/90"></div>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 rounded-lg bg-white/10 transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 right-1/4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 md:w-24 h-20 md:h-24 rounded-lg bg-white/5 transform -rotate-12"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8" data-aos="fade-up">
            Vous avez un projet ? Parlons-en dès aujourd'hui !
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8" data-aos="fade-up" data-aos-delay="100">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="Obtenir un devis gratuit"
            >
              Obtenir un devis gratuit
            </a>
            <a
              href="/portfolio"
              className="inline-block bg-blue-600 text-white font-medium px-6 sm:px-8 py-3 rounded-full border border-white/30 hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="Découvrir nos réalisations"
            >
              Découvrir nos réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCTA
