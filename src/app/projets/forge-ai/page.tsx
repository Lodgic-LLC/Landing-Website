
import React from "react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Forge AI - Marketplace NFT | Lodgic",
    description: "Découvrez comment nous avons développé Forge AI, une plateforme de génération et d'achat/vente de NFT combinant l'IA générative et la technologie blockchain.",
}

export default function ForgeAIProject() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-block px-3 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6">
                            Web3
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
                            Forge AI — Marketplace NFT
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mb-10">
                            Une plateforme innovante combinant l'IA générative et la technologie blockchain pour créer et échanger des NFT uniques
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">React.js</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">Node.js</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">Python</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">IPFS</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">xAI</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">Solana</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image principale */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto -mt-32 relative z-20 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/forge-main.png"
                            alt="Interface principale de Forge AI"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Aperçu du projet */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Aperçu du projet</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Forge AI est une plateforme révolutionnaire qui permet aux utilisateurs de créer des NFT uniques à partir de simples descriptions textuelles, puis de les vendre sur une marketplace intégrée. Notre mission était de développer une solution qui démocratise la création artistique numérique en combinant l'IA générative et la technologie blockchain.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            La plateforme offre une expérience utilisateur intuitive, permettant même aux novices en matière de NFT et de crypto-monnaies de participer facilement à cet écosystème en pleine expansion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Le défi */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Le défi</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Forge AI avait besoin d'une plateforme permettant aux utilisateurs de créer des NFT uniques à partir de simples descriptions textuelles, puis de les vendre sur une marketplace intégrée. Le défi était de combiner l'IA générative, la technologie blockchain et une expérience utilisateur intuitive.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous devions relever plusieurs défis techniques majeurs :
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                            <li>Intégrer des modèles d'IA générative avancés capables de transformer du texte en images de haute qualité</li>
                            <li>Développer une infrastructure blockchain sécurisée pour le minting des NFT</li>
                            <li>Créer une marketplace fluide et intuitive pour l'achat et la vente</li>
                            <li>Assurer la sécurité des transactions et la protection des droits de propriété intellectuelle</li>
                            <li>Concevoir une interface utilisateur accessible aux novices en matière de NFT et de crypto-monnaies</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Notre solution */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Notre solution</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous avons développé une plateforme complète intégrant des modèles d'IA avancés pour la génération d'images, une infrastructure blockchain sécurisée pour le minting des NFT, et une marketplace fluide pour l'achat et la vente. L'interface utilisateur a été conçue pour être accessible même aux utilisateurs novices en matière de NFT et de crypto-monnaies.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Génération d'images par IA</h3>
                                </div>
                                <p className="text-gray-700">
                                    Intégration de modèles d'IA avancés permettant de transformer des descriptions textuelles en images uniques et de haute qualité.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Infrastructure blockchain</h3>
                                </div>
                                <p className="text-gray-700">
                                    Développement d'une infrastructure blockchain sécurisée sur Solana pour le minting des NFT, garantissant l'authenticité et la propriété des œuvres.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Marketplace intégrée</h3>
                                </div>
                                <p className="text-gray-700">
                                    Création d'une marketplace intuitive permettant aux utilisateurs d'acheter, de vendre et d'enchérir sur des NFT, avec un système de paiement sécurisé.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Gestion des utilisateurs</h3>
                                </div>
                                <p className="text-gray-700">
                                    Mise en place d'un système complet de gestion des comptes utilisateurs, avec authentification sécurisée et portefeuille intégré.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galerie d'images */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center space-x-4 mb-12 justify-center">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Aperçu de la plateforme</h2>
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/forge-generation.png"
                                    alt="Interface de génération de NFT"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Outil de génération de NFT par IA avec prompt textuel</p>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/forge-marketplace.png"
                                    alt="Marketplace Forge AI"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Marketplace permettant l'achat et la vente des NFT générés</p>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden shadow-lg md:col-span-2">
                                <img
                                    src="/images/forge-mint.png"
                                    alt="Processus de minting"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Interface de minting des NFT sur la blockchain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet innovant ?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Contactez-nous dès aujourd'hui pour discuter de votre vision et découvrir comment nous pouvons vous aider à la concrétiser.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Nous contacter
                            </Link>
                            <Link
                                href="/projets"
                                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition-colors shadow-lg"
                            >
                                Voir d'autres projets
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}