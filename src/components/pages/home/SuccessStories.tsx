"use client"

import React from "react"
import Link from "next/link"

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
            description: "Application web de suivi et d'analyse de cryptomonnaies en temps réel",
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
            title: "NexusPay - Application Bancaire Mobile",
            description: "Application mobile de gestion financière et de paiement sécurisée pour particuliers et professionnels",
            image: "/images/banking-1.png",
            link: "/projets/nexuspay",
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

                    {/* Projets en format magazine professionnel */}
                    <div className="space-y-16">
                        {successCases.map((caseItem, index) => (
                            <div
                                key={caseItem.id}
                                className="group"
                                data-aos="fade-up"
                                data-aos-delay={(index) * 100}
                            >
                                <Link href={caseItem.link} className="block">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                                        {/* Image du projet */}
                                        <div className="lg:w-1/2 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                src={caseItem.image}
                                                alt={caseItem.title}
                                                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                                                style={{ height: '400px' }}
                                            />
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="px-3 py-1.5 bg-white shadow-md rounded-full text-xs font-semibold text-gray-800">
                                                    {caseItem.id === 1 ? "Web3" : caseItem.id === 2 ? "Finance" : "Mobile"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Contenu du projet */}
                                        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {caseItem.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6 text-lg">
                                                    {caseItem.description}
                                                </p>

                                                {/* Points clés */}
                                                <div className="space-y-4 mb-8">
                                                    {caseItem.items.map((item) => (
                                                        <div key={item.id} className="flex items-start">
                                                            <div className="flex-shrink-0 p-1.5 bg-blue-50 rounded-lg mr-3">
                                                                {item.icon}
                                                            </div>
                                                            <p className="text-gray-700">{item.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div className="mt-auto">
                                                <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                                                    Découvrir ce projet
                                                    <svg
                                                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}