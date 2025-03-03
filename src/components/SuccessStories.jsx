import React, { useRef, useEffect, useState } from "react";

const SuccessStories = () => {
  const progressLineRef = useRef(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (progressLineRef.current) {
              progressLineRef.current.style.width = "100%";
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (progressLineRef.current) {
      observer.observe(progressLineRef.current);
    }

    return () => {
      if (progressLineRef.current) {
        observer.unobserve(progressLineRef.current);
      }
    };
  }, []);

  // Fermer le modal quand on clique sur Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Empêcher le scroll quand le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const successCases = [
    {
      id: 1,
      title: "Forge AI - Marketplace NFT",
      description: "Plateforme de génération et achat/vente de NFT ",
      image: "/images/forge-main.png",
      link: "#",
      items: [
        {
          id: "forge-1",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          ),
          text: "Développement d'une marketplace",
        },
        {
          id: "forge-2",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          ),
          text: "Génération de NFT via IA",
        },
        {
          id: "forge-3",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: "Création/gestion des comptes utilisateur",
        },
      ],
      detailedInfo: {
        challenge:
          "Forge AI avait besoin d'une plateforme permettant aux utilisateurs de créer des NFT uniques à partir de simples descriptions textuelles, puis de les vendre sur une marketplace intégrée. Le défi était de combiner l'IA générative, la technologie blockchain et une expérience utilisateur intuitive.",
        solution:
          "Nous avons développé une plateforme complète intégrant des modèles d'IA avancés pour la génération d'images, une infrastructure blockchain sécurisée pour le minting des NFT, et une marketplace fluide pour l'achat et la vente. L'interface utilisateur a été conçue pour être accessible même aux utilisateurs novices en matière de NFT et de crypto-monnaies.",
        results:
          "Depuis son lancement, Forge AI a attiré plus de 25 000 créateurs actifs, généré plus de 50 000 NFT uniques et facilité des transactions d'une valeur totale de 2,5 millions de dollars. La plateforme a également établi des partenariats avec plusieurs artistes et marques de renom pour des collections exclusives.",
        technologies: [
          "React.js",
          "Node.js",
          "Python",
          "IPFS",
          "xAI",
          "Solana",
        ],
        images: [
          {
            src: "/images/forge-main.png",
            alt: "Page d'accueil de Forge AI",
            caption: "Interface principale de la plateforme Forge AI",
          },
          {
            src: "/images/forge-generation.png",
            alt: "Interface de génération de NFT",
            caption: "Outil de génération de NFT par IA avec prompt textuel",
          },
          {
            src: "/images/forge-marketplace.png",
            alt: "Marketplace Forge AI",
            caption:
              "Marketplace permettant l'achat et la vente des NFT générés",
          },
          {
            src: "/images/forge-mint.png",
            alt: "Processus de minting",
            caption: "Interface de minting des NFT sur la blockchain",
          },
        ],
      },
    },
    {
      id: 2,
      title: "CoinFinder - Plateforme Crypto",
      description:
        "Application web de suivi et d'analyse de cryptomonnaies en temps réel",
      image: "/images/coinfinder.png",
      link: "https://coinfinder.fr",
      items: [
        {
          id: "coin-1",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          ),
          text: "Interface de suivis de cryptomonnaies",
        },
        {
          id: "coin-2",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          ),
          text: "Systeme de paiment automatisé",
        },
        {
          id: "coin-3",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: "Dashboard de suivis du portefeuille",
        },
      ],
      detailedInfo: {
        challenge:
          "CoinFinder avait besoin d'une plateforme complète permettant aux utilisateurs de suivre, d'analyser et d'investir dans les cryptomonnaies. Le défi était de créer une interface intuitive qui présente des données complexes de manière accessible, tout en intégrant des fonctionnalités de trading sécurisées et un système d'authentification robuste.",
        solution:
          "Nous avons développé une application web responsive avec un tableau de bord personnalisable, des graphiques interactifs en temps réel et un système d'alertes personnalisées. L'authentification multi-facteurs garantit la sécurité des comptes utilisateurs, tandis que l'intégration avec plusieurs exchanges permet d'exécuter des transactions directement depuis la plateforme.",
        results:
          "Depuis son lancement, CoinFinder a attiré plus de 85 000 utilisateurs actifs et traite quotidiennement plus de 200 000 requêtes d'analyse. Le volume de transactions mensuel a dépassé 30 millions d'euros, avec un taux de satisfaction utilisateur de 94%. La plateforme est devenue une référence dans l'écosystème crypto francophone.",
        technologies: [
          "React.js",
          "Express",
          "AWS",
          "Supabase",
          "TradingView API",
          "WebSockets",
        ],
        images: [
          {
            src: "/images/coinfinder-login.png",
            alt: "Page d'authentification CoinFinder",
            caption:
              "Interface d'authentification sécurisée avec validation en deux étapes",
          },
          {
            src: "/images/coinfinder-signup.png",
            alt: "Page d'inscription CoinFinder",
            caption:
              "Processus d'inscription simplifié avec vérification d'identité",
          },
          {
            src: "/images/coinfinder-paiement.png",
            alt: "Interface de paiement CoinFinder",
            caption:
              "Système de paiement sécurisé avec multiples options de cryptomonnaies",
          },
          {
            src: "/images/coinfinder.png",
            alt: "Dashboard principal CoinFinder",
            caption:
              "Tableau de bord personnalisable avec suivi en temps réel des cours",
          },
        ],
      },
    },
    {
      id: 3,
      title: "NexusPay - Application Bancaire Mobile",
      description:
        "Application mobile de gestion financière et de paiement sécurisée pour particuliers et professionnels",
      image: "/images/banking-1.png",
      link: "#",
      items: [
        {
          id: "nexus-1",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          ),
          text: "Plus de 75 000 utilisateurs actifs mensuels",
        },
        {
          id: "nexus-2",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: "Réduction de 40% du temps de traitement des transactions",
        },
        {
          id: "nexus-3",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          ),
          text: "Note moyenne de 4.8/5 sur les stores d'applications",
        },
      ],
      detailedInfo: {
        challenge:
          "NexusPay souhaitait développer une application bancaire mobile permettant de gérer les finances personnelles et professionnelles de ses utilisateurs. Il souhaitait également permettre aux utilisateurs de gérer leurs comptes bancaires, et de recevoir des notifications pour leurs transactions.",
        solution:
          "Nous avons développé une application native multi-plateforme qui répond précisément à ces besoins : un tableau de bord unifié pour la gestion des finances personnelles et professionnelles, un système de gestion de comptes bancaires avec synchronisation en temps réel, et un moteur de notifications intelligent et personnalisable pour les transactions. L'interface a été conçue selon les principes du design centré utilisateur, avec des tests d'utilisabilité à chaque étape du développement.",
        results:
          "L'application NexusPay a été téléchargée plus de 150 000 fois depuis son lancement, avec un taux de rétention de 68% après 3 mois. Elle a permis de traiter plus de 2 millions de transactions pour un volume total dépassant 500 millions d'euros. La satisfaction client a atteint 92%, et l'application a reçu plusieurs distinctions dans le secteur fintech.",
        technologies: [
          "React Native",
          "TypeScript",
          "Node.js",
          "AWS",
          "Supabase",
        ],
        images: [
          {
            src: "/images/banking-1.png",
            alt: "Écran d'accueil de NexusPay",
            caption:
              "Dashboard principal avec aperçu des comptes et transactions récentes",
          },
          {
            src: "/images/banking-2.png",
            alt: "Fonctionnalité de gestion des budgets",
            caption: "Page de gestion des budgets",
          },
          {
            src: "/images/banking-3.png",
            alt: "Page de paramètres du compte",
            caption: "Page de paramètres du compte",
          },
          {
            src: "/images/banking-4.png",
            alt: "Analyse des dépenses",
            caption: "Analyse des dépenses",
          },
          {
            src: "/images/banking-5.png",
            alt: "Page d'ajout de dépenses",
            caption: "Page d'ajout de dépenses",
          },
        ],
      },
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-inter-bold text-gray-900 mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre expertise et de
              notre engagement envers la réussite de nos clients
            </p>
            <div className="relative h-0.5 w-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </div>

          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((caseItem) => (
              <div
                key={caseItem.id}
                onClick={() => handleCaseClick(caseItem)}
                className="group bg-white rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={(caseItem.id - 1) * 100}
              >
                {/* Image et badge */}
                <div className="relative h-48">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1.5 bg-white shadow-sm rounded-full text-xs font-semibold text-gray-800">
                      {caseItem.id === 1
                        ? "Web3"
                        : caseItem.id === 2
                        ? "Finance"
                        : "Mobile"}
                    </span>
                  </div>

                  {/* Titre sur l'image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-1">
                      {caseItem.description}
                    </p>
                  </div>
                </div>

                {/* Statistiques */}
                <div className="p-4 border-t border-gray-100">
                  <div className="space-y-3">
                    {caseItem.items.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50">
                          {React.cloneElement(item.icon, {
                            className: "w-4 h-4 text-blue-600",
                          })}
                        </div>
                        <p className="text-sm text-gray-600 font-medium line-clamp-1">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Call to action */}
                  <div className="mt-4 flex justify-end">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      En savoir plus
                      <svg
                        className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal amélioré */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du modal amélioré */}
            <div className="relative h-72 bg-gray-900 overflow-hidden">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover opacity-60 transform scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>

              {/* Éléments décoratifs */}
              <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 rounded-lg bg-white/10 transform rotate-12"></div>
                <div className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white/10"></div>
                <div className="absolute top-1/2 right-1/4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-white/5"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                        {selectedCase.id === 1
                          ? "Web3"
                          : selectedCase.id === 2
                          ? "Finance"
                          : "Mobile"}
                      </span>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white"></span>
                      <span className="text-white/80 text-sm">
                        Étude de cas
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {selectedCase.title}
                    </h3>
                    <p className="text-white/80 mt-2 max-w-2xl">
                      {selectedCase.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                    aria-label="Fermer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contenu du modal */}
            <div
              className="p-8 pb-12 overflow-y-auto"
              style={{ maxHeight: "calc(90vh - 16rem)" }}
            >
              {selectedCase && selectedCase.id === 3 ? (
                <div className="space-y-12">
                  {/* Galerie mobile */}
                  <div className="flex flex-wrap justify-center gap-8">
                    {selectedCase.detailedInfo.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="relative w-56 h-[500px] transition-transform duration-300 ">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-[1.5rem]"
                          />
                          <div className="absolute inset-0 rounded-[2rem]"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-4 text-center max-w-[200px] mx-auto">
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Sections d'information */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-blue-600/10 p-2 rounded-lg mr-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-blue-200 pb-1">
                            Le défi
                          </span>
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {selectedCase.detailedInfo.challenge}
                        </p>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full"></div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-blue-600/10 p-2 rounded-lg mr-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-blue-200 pb-1">
                            Notre solution
                          </span>
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {selectedCase.detailedInfo.solution}
                        </p>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 pb-8 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-500 to-emerald-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-green-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-md transform rotate-3">
                          Impact
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-green-600/10 p-2 rounded-lg mr-3 group-hover:bg-green-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-green-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-green-200 pb-1">
                            Résultats obtenus
                          </span>
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {selectedCase.detailedInfo.results}
                        </p>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-green-200 to-transparent rounded-full"></div>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 pb-8 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-indigo-600/10 p-2 rounded-lg mr-3 group-hover:bg-indigo-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-indigo-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-indigo-200 pb-1">
                            Technologies utilisées
                          </span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCase.detailedInfo.technologies.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 shadow-sm flex items-center"
                              >
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-indigo-200 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCase?.detailedInfo ? (
                <div className="space-y-12">
                  {/* Galerie améliorée avec design professionnel */}
                  <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="relative">
                        Captures d'écran du projet
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                      </span>
                    </h3>

                    {/* Nouvelle galerie avec navigation */}
                    <div className="relative">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {selectedCase.detailedInfo.images.map(
                          (image, index) => (
                            <div
                              key={index}
                              className="group relative rounded-xl overflow-hidden shadow-xl h-auto transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                              {/* Container avec ratio d'aspect fixe */}
                              <div className="relative pb-[65%] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />

                                {/* Overlay avec dégradé amélioré */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>

                              {/* Caption avec design amélioré */}
                              <div className="p-4 pb-6 bg-white border-t border-gray-100">
                                <p className="text-gray-800 text-sm font-medium">
                                  {image.caption}
                                </p>
                                <div className="mt-2 flex items-center text-xs text-gray-500">
                                  <svg
                                    className="w-4 h-4 mr-1 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {image.alt}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sections d'information */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-blue-600/10 p-2 rounded-lg mr-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-blue-200 pb-1">
                            Le défi
                          </span>
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {selectedCase.detailedInfo.challenge}
                        </p>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full"></div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-blue-600/10 p-2 rounded-lg mr-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-blue-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-blue-200 pb-1">
                            Notre solution
                          </span>
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {selectedCase.detailedInfo.solution}
                        </p>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 pb-8 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-500 to-emerald-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-green-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-md transform rotate-3">
                          Impact
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-green-600/10 p-2 rounded-lg mr-3 group-hover:bg-green-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-green-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-green-200 pb-1">
                            Résultats obtenus
                          </span>
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {selectedCase.detailedInfo.results}
                        </p>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-green-200 to-transparent rounded-full"></div>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 pb-8 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <div className="bg-indigo-600/10 p-2 rounded-lg mr-3 group-hover:bg-indigo-600/20 transition-colors duration-300">
                            <svg
                              className="w-5 h-5 text-indigo-600 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="border-b-2 border-indigo-200 pb-1">
                            Technologies utilisées
                          </span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCase.detailedInfo.technologies.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 shadow-sm flex items-center"
                              >
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                        <div className="mt-6 w-full h-1 bg-gradient-to-r from-indigo-200 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    Détails du projet non disponibles
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;
