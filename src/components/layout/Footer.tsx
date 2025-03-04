import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
            {/* Éléments décoratifs subtils */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-600/3 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-indigo-600/3 rounded-full blur-[100px] -z-0"></div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Logo et description */}
                    <div className="space-y-7">
                        <div className="flex items-center">
                            <div className="bg-white/10 p-2.5 rounded-lg mr-3">
                                <img src="/favicon.ico" alt="Logo Lodgic" className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">
                                Lodgic
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
                            Solutions digitales sur mesure pour transformer vos idées en
                            expériences numériques exceptionnelles. Nous créons des
                            applications web et mobiles innovantes qui répondent à vos besoins
                            spécifiques.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://twitter.com/lodgic"
                                className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white transition-all duration-300 group"
                                aria-label="Twitter"
                                tabIndex={0}
                            >
                                <svg
                                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/lodgic"
                                className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white transition-all duration-300 group"
                                aria-label="LinkedIn"
                                tabIndex={0}
                            >
                                <svg
                                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Pages */}
                    <div className="space-y-7">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 relative inline-block">
                            Navigation
                            <span className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></span>
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                                    tabIndex={0}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 group-hover:scale-125 transition-transform"></span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                                        Accueil
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/a-propos"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                                    tabIndex={0}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 group-hover:scale-125 transition-transform"></span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                                        À propos
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                                    tabIndex={0}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2.5 group-hover:scale-125 transition-transform"></span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                                        Services
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                                    tabIndex={0}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 group-hover:scale-125 transition-transform"></span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/rendez-vous"
                                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                                    tabIndex={0}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2.5 group-hover:scale-125 transition-transform"></span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                                        Rendez-vous
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-7">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 relative inline-block">
                            Contactez-nous
                            <span className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"></span>
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start group">
                                <div className="bg-gray-800 p-2.5 rounded-lg mr-3.5 group-hover:bg-blue-600/20 transition-colors duration-300">
                                    <svg
                                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1 font-medium">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:contact.lodgic@gmail.com"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        tabIndex={0}
                                    >
                                        contact.lodgic@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="bg-gray-800 p-2.5 rounded-lg mr-3.5 group-hover:bg-blue-600/20 transition-colors duration-300">
                                    <svg
                                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1 font-medium">
                                        Adresse
                                    </p>
                                    <span className="text-gray-400">Toulouse, France</span>
                                </div>
                            </li>
                            <li className="mt-8">
                                <Link
                                    href="/rendez-vous"
                                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    tabIndex={0}
                                >
                                    <span className="font-medium">Prendre RDV</span>
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Barre horizontale et copyright */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} <span className="text-gray-400">Lodgic SAS</span>. Tous
                        droits réservés.
                    </p>
                    <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link
                            href="/mentions-legales"
                            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                            tabIndex={0}
                        >
                            Mentions légales
                        </Link>
                        <Link
                            href="/politique-confidentialite"
                            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                            tabIndex={0}
                        >
                            Politique de confidentialité
                        </Link>
                        <Link
                            href="/cgv"
                            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                            tabIndex={0}
                        >
                            CGV
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
