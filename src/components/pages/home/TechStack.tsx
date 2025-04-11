'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const technologies = [
    {
        name: 'React Native',
        logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        description: "Framework JavaScript pour le développement d'applications mobiles multiplateformes performantes",
        color: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        name: 'Expo',
        logo: 'https://cdn.worldvectorlogo.com/logos/expo-1.svg',
        description: "Plateforme et ensemble d'outils facilitant le développement et le déploiement d'applications React Native",
        color: 'bg-gray-50',
        textColor: 'text-gray-800',
    },
    {
        name: 'Prisma',
        logo: 'https://cdn.worldvectorlogo.com/logos/prisma-4.svg',
        description: "ORM moderne pour Node.js et TypeScript simplifiant les interactions avec les bases de données",
        color: 'bg-indigo-50',
        textColor: 'text-indigo-600',
    },
    {
        name: 'NestJS',
        logo: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg',
        description: "Framework Node.js progressif pour la construction d'API backend évolutives et maintenables",
        color: 'bg-red-50',
        textColor: 'text-red-600',
    },
]

export default function TechStack() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Notre stack technologique
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nous utilisons les technologies les plus modernes et performantes pour développer vos applications mobiles,
                        garantissant ainsi qualité, maintenabilité et évolutivité.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${tech.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-[100px] -z-10 transition-all duration-300 group-hover:bg-white/30"></div>

                            <div className="flex items-center mb-4">
                                <div className="relative w-12 h-12 mr-4">
                                    <Image
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className={`text-xl font-bold ${tech.textColor}`}>{tech.name}</h3>
                            </div>

                            <p className="text-gray-700">{tech.description}</p>

                            <div className="mt-4 pt-4 border-t border-gray-200/50 flex justify-between items-center">
                                <span className={`text-sm font-medium ${tech.textColor}`}>En savoir plus</span>
                                <svg
                                    className={`w-5 h-5 ${tech.textColor} transform group-hover:translate-x-1 transition-transform`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-inner">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Un écosystème complet et intégré
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Cette combinaison technologique nous permet de développer des applications
                                robustes de A à Z, du backend performant à l'interface utilisateur fluide,
                                tout en garantissant une expérience de développement optimale et des délais réduits.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Développement cross-platform: une base de code, deux plateformes (iOS & Android)",
                                    "API RESTful sécurisées et évolutives avec NestJS",
                                    "Gestion de données efficace et typée avec Prisma",
                                    "Déploiement et mises à jour simplifiés via Expo"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="ml-3 text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/3">
                            <div className="relative h-60 w-full md:h-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-full h-full max-w-xs mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 rounded-full blur-3xl"></div>
                                        <div className="relative h-full flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-4">
                                                {technologies.map((tech) => (
                                                    <div
                                                        key={`icon-${tech.name}`}
                                                        className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                                                    >
                                                        <div className="relative w-10 h-10 md:w-14 md:h-14 mx-auto">
                                                            <Image
                                                                src={tech.logo}
                                                                alt={tech.name}
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 