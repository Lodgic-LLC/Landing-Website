import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C3E50] text-[#FAF3E0] pt-10 pb-24 sm:pt-16 sm:pb-10 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 sm:mb-16">
          <div className="md:col-span-1 space-y-5 text-center md:text-left">
            <Link href="/" className="inline-flex items-center group justify-center md:justify-start">
              <span className="font-bricolage-grotesque-regular text-3xl text-[#FAF3E0] group-hover:text-blue-600 transition-colors duration-300">
                Lodgic
              </span>
            </Link>
            <p className="text-[#FAF3E0]/70 text-sm leading-relaxed font-inter-regular">
              On transforme vos idées en applications mobiles et web sur mesure. Basés à Toulouse, prêts à collaborer où
              que vous soyez.
            </p>
            <div className="flex space-x-3 pt-2 justify-center md:justify-start">
              {[
                // Array for social links for easier management
                {
                  href: 'https://twitter.com/lodgicdev',
                  label: 'Twitter',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  ),
                },
                {
                  href: 'https://linkedin.com/company/lodgic-dev',
                  label: 'LinkedIn',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://github.com/Lodgic-LLC',
                  label: 'GitHub',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.858 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3e5265] p-2.5 rounded-full text-[#FAF3E0]/70 hover:text-blue-600 hover:bg-blue-600/20 transition-all duration-300 group"
                  aria-label={social.label}
                  tabIndex={0}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-[#FAF3E0] font-bricolage-grotesque-regular text-lg mb-4">Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-[#FAF3E0]/70 hover:text-blue-600 transition-colors text-sm font-inter-regular"
                      tabIndex={0}
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-[#FAF3E0]/70 hover:text-blue-600 transition-colors text-sm font-inter-regular"
                      tabIndex={0}
                    >
                      Nos services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="text-[#FAF3E0]/70 hover:text-blue-600 transition-colors text-sm font-inter-regular"
                      tabIndex={0}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-[#FAF3E0]/70 hover:text-blue-600 transition-colors text-sm font-inter-regular"
                      tabIndex={0}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[#FAF3E0]/70 hover:text-blue-600 transition-colors text-sm font-inter-regular"
                      tabIndex={0}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#FAF3E0] font-bricolage-grotesque-regular text-lg mb-4">Nous contacter</h3>
                <ul className="space-y-4">
                  <li className="flex items-start group justify-center sm:justify-start">
                    <div className="bg-[#3e5265] p-2.5 rounded-lg mr-3.5 group-hover:bg-blue-600/20 transition-colors duration-300 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#FAF3E0]/70 group-hover:text-blue-600 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#FAF3E0]/60 mb-0.5 font-medium font-inter-regular">Par email</p>
                      <a
                        href="mailto:lodgicdev@gmail.com"
                        className="inline-flex items-center text-[#FAF3E0]/80 hover:text-blue-600 transition-colors text-sm group font-inter-regular"
                      >
                        <span>lodgicdev@gmail.com</span>
                        <svg
                          className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group justify-center sm:justify-start">
                    <div className="bg-[#3e5265] p-2.5 rounded-lg mr-3.5 group-hover:bg-blue-600/20 transition-colors duration-300 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#FAF3E0]/70 group-hover:text-blue-600 transition-colors"
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
                      <p className="text-xs text-[#FAF3E0]/60 mb-0.5 font-medium font-inter-regular">Localisation</p>
                      <span className="text-[#FAF3E0]/80 text-sm font-inter-regular">Toulouse, Occitanie, France</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-[#FAF3E0]/10 flex flex-col sm:flex-row justify-between items-center gap-y-4">
          <p className="text-[#FAF3E0]/60 text-xs sm:text-sm text-center sm:text-left font-inter-regular">
            © {currentYear} <span className="text-[#FAF3E0]/80 font-semibold">Lodgic</span>. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2">
            <Link
              href="/politique-confidentialite"
              className="text-[#FAF3E0]/60 hover:text-blue-600 text-xs sm:text-sm transition-colors font-inter-regular"
              tabIndex={0}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
