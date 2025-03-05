"use client";

import React from "react";
import Link from "next/link";

interface CaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  items: Array<{
    id: string;
    icon: React.ReactNode;
    text: string;
  }>;
}

export default function SuccessStories() {
  const successCases: CaseItem[] = [
    {
      id: 1,
      title: "Forge AI - Marketplace NFT",
      description: "Plateforme de génération et achat/vente de NFT",
      image: "/images/forge-main.png",
      link: "/projets/forge-ai",
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
    },
    {
      id: 2,
      title: "CoinFinder - Plateforme Crypto",
      description:
        "Application web de suivi et d'analyse de cryptomonnaies en temps réel",
      image: "/images/coinfinder.png",
      link: "/projets/coinfinder",
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
    },
    {
      id: 3,
      title: "HouseGuard - Gestion Immobilière Simplifiée",
      description:
        "Application de gestion locative qui facilite la communication entre propriétaires et locataires",
      image: "/images/house-proprietaire.png",
      link: "/projets/houseguard",
      items: [
        {
          id: "house-1",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          ),
          text: "85% de réduction du temps de traitement des sinistres",
        },
        {
          id: "house-2",
          icon: (
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          ),
          text: "Plus de 12 000 utilisateurs actifs mensuels",
        },
        {
          id: "house-3",
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
          text: "Note moyenne de 4.8/5 sur les stores d'applications",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-2 bg-blue-50/80 px-4 py-1.5 rounded-full border border-blue-100/80">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700">
                  Études de cas
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-inter-bold text-gray-900 mb-6">
              Ils nous font{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                confiance
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Des résultats concrets qui témoignent de notre expertise et de
              notre engagement envers la réussite de nos clients
            </p>
            <div className="relative h-1 w-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse opacity-70"></div>
            </div>
          </div>

          {/* Projets en format magazine professionnel */}
          <div className="space-y-16">
            {successCases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link href={caseItem.link} className="block">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:border-blue-100/80 transform hover:-translate-y-1`}
                  >
                    {/* Image du projet */}
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-40 z-10"></div>
                      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                        <img
                          src={caseItem.image}
                          alt={caseItem.title}
                          className="w-full h-full object-contain md:object-cover object-center transform transition-transform duration-700 group-hover:scale-105 mix-blend-normal"
                        />
                      </div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm shadow-md rounded-full text-xs font-semibold text-gray-800 border border-gray-100">
                          {caseItem.id === 1
                            ? "Web3"
                            : caseItem.id === 2
                            ? "Finance"
                            : "Mobile"}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 z-20">
                        <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm shadow-md rounded-lg text-sm font-medium text-white flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Voir le projet
                        </span>
                      </div>
                    </div>

                    {/* Contenu du projet */}
                    <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/80">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                            {caseItem.id === 1
                              ? "Web3"
                              : caseItem.id === 2
                              ? "Finance"
                              : "Mobile"}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {caseItem.title}
                        </h3>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                          {caseItem.description}
                        </p>

                        {/* Points clés */}
                        <div className="space-y-5 mb-8">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">
                            Points clés du projet
                          </h4>
                          {caseItem.items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-start p-3 rounded-lg transition-all duration-300 hover:bg-blue-50/50 border border-transparent hover:border-blue-100"
                            >
                              <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg mr-4 shadow-sm">
                                {item.icon}
                              </div>
                              <div>
                                <p className="text-gray-800 font-medium">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-medium rounded-lg group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                          Découvrir ce projet
                          <svg
                            className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA global */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <Link
              href="/projets"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Voir tous nos projets
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
