"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const services = [
    {
      title: "Développement d'applications mobiles",
      description: "Nous créons des applications mobiles innovantes, évolutives et sécurisées, parfaitement alignées avec la vision de votre entreprise et vos objectifs commerciaux."
    },
    {
      title: "Systèmes distribués",
      description: "Architecture et développement de systèmes distribués robustes pour gérer la charge et assurer la scalabilité de vos applications."
    },
    {
      title: "Intelligence artificielle",
      description: "Intégration de solutions d'IA avancées pour automatiser vos processus et améliorer l'expérience utilisateur."
    },
    {
      title: "Commerce électronique",
      description: "Développement de plateformes e-commerce complètes avec des fonctionnalités avancées de gestion et de paiement."
    },
    {
      title: "UI/UX design",
      description: "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur exceptionnelles pour vos applications."
    },
    {
      title: "Assurance qualité",
      description: "Tests complets et assurance qualité pour garantir la fiabilité et la performance de vos solutions logicielles."
    },
    {
      title: "Analyse de données",
      description: "Solutions d'analyse de données pour transformer vos données en insights exploitables et prendre de meilleures décisions."
    },
    {
      title: "Cloud & DevOps",
      description: "Déploiement et gestion d'infrastructures cloud avec des pratiques DevOps pour optimiser vos opérations."
    }
  ];

  const images = [
    "https://picsum.photos/id/1015/1200/800",
    "https://picsum.photos/id/1005/1200/800",
    "https://picsum.photos/id/1040/1200/800",
    "https://picsum.photos/id/1025/1200/800",
    "https://picsum.photos/id/1039/1200/800",
    "https://picsum.photos/id/1050/1200/800",
    "https://picsum.photos/id/1060/1200/800",
    "https://picsum.photos/id/1074/1200/800"
  ] as const;

  // Préchargement des images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Certaines images n\'ont pas pu être préchargées:', error);
        setImagesLoaded(true); // On continue même si certaines images échouent
      }
    };

    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 font-bricolage-grotesque-bold">
          Services de développement logiciel complet
        </h2>
        <p className="text-lg max-w-4xl mx-auto font-inter-regular">
          Nous servons en tant que partenaire technologique de bout en bout, offrant des solutions logicielles de haute qualité
          en nous appuyant sur une expertise technique approfondie et une compréhension profonde du domaine commercial.
        </p>
      </div>

      {/* Section Services en accordion - Full Width */}
      <div className="w-full">
        <div>

          {/* Accordion des services */}
          <div className="flex flex-col lg:flex-row min-h-[500px] border border-gray-200 overflow-hidden">
            {services.map((service, idx) => {
              const isActive = idx === currentSlide;
              const isFirst = idx === 0;
              const isLast = idx === services.length - 1;
              
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                    isActive 
                      ? 'lg:flex-[10] flex-1 bg-[#001F45] text-white shadow-2xl z-10' 
                      : 'lg:flex-[1] flex-1 bg-white text-gray-700 hover:shadow-lg'
                  } ${
                    !isLast ? 'border-r border-gray-200' : ''
                  } ${
                    !isFirst && !isActive ? 'lg:border-l-0' : ''
                  }`}
                  onClick={() => goToSlide(idx)}
                >
                  {/* Contenu réduit (quand inactif) */}
                  {!isActive && (
                    <div className="h-full flex lg:flex-col items-center justify-center p-6 lg:p-4">
                      <span className="text-2xl lg:text-xl bottom-0 absolute mb-2 lg:mb-4">+</span>
                      <span className="lg:transform lg:-rotate-90 lg:whitespace-nowrap text-center text-sm font-inter-regular">
                        {service.title}
                      </span>
                    </div>
                  )}

                  {/* Contenu élargi (quand actif) */}
                  {isActive && (
                    <div 
                      className="h-full grid lg:grid-cols-2 min-h-[400px] lg:min-h-[500px] opacity-0 animate-fadeIn"
                      style={{
                        animation: 'fadeIn 0.4s ease-out 0.2s forwards'
                      }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden h-48 lg:h-full">
                        {imagesLoaded ? (
                          <img
                            src={images[idx]}
                            alt={service.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-300 animate-pulse flex items-center justify-center">
                            <span className="text-gray-500">Chargement...</span>
                          </div>
                        )}
                      </div>

                      {/* Contenu détaillé */}
                      <div className="p-6 lg:p-10 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bricolage-grotesque-bold mb-4 ">
                            {service.title}
                          </h3>
                          <p className="text-white/80 font-inter-regular mb-6">
                            {service.description}
                          </p>
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors duration-300"
                          >
                            Voir le service
                            <span aria-hidden>↗</span>
                          </button>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8">
                          <div className="h-px bg-white/20 flex-1 mr-6" />
                          <div className="flex gap-3">
                            <button
                              aria-label="Précédent"
                              onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                              }}
                              className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                              <FaChevronLeft />
                            </button>
                            <button
                              aria-label="Suivant"
                              onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                              }}
                              className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                              <FaChevronRight />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation mobile supplémentaire */}
          <div className="lg:hidden mt-6 flex justify-center gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'bg-[#001F45] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au service ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
