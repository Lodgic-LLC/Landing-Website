import Link from 'next/link'
import FooterLeadForm from './FooterLeadForm'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#001F45] text-white">
      {/* Fines grilles / halos décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#3b5bdb]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#DBFF00]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-[#0b2b63]/40 blur-3xl"
      />

      {/* Bordure lumineuse haute */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- TOP BANNER --- */}
        <div className="pt-14 md:pt-20 pb-8 text-center">
          <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.2em] text-[#DBFF00]">
            Contactez-nous
          </p>
          <h2 className="mt-3 text-balance text-3xl md:text-5xl font-sofia-bold text-white">
            Parlons de votre projet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-white/70 font-inter">
            Un besoin, une question, un cadrage ? Laissez-nous un mot — nous revenons vers vous
            sous 24 heures.
          </p>
        </div>

        {/* --- MAIN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr_0.9fr] gap-10 lg:gap-16 pb-14 md:pb-20">
          {/* Col 1 : Lead form */}
          <div className="lg:pr-6 lg:border-r lg:border-white/10">
            <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/50">
              Contact rapide
            </p>
            <h3 className="mt-2 text-2xl md:text-3xl font-sofia-bold text-white">
              Une question ?
            </h3>
            <p className="mt-2 text-sm text-white/70 font-inter">
              Envoyez-nous un mot rapide — nous revenons vers vous sous 24 h.
            </p>
            <FooterLeadForm />
          </div>

          {/* Col 2 : Contact */}
          <div>
            <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/50">
              Nous contacter
            </p>
            <div className="mt-4 space-y-5">
              <a
                href="mailto:lodgicdev@gmail.com"
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15 text-white/90 group-hover:bg-[#DBFF00] group-hover:text-[#001F45] group-hover:ring-[#DBFF00] transition-smooth">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-white/50 font-inter">Par email</p>
                  <p className="text-[15px] font-sofia-bold text-white group-hover:text-[#DBFF00] transition-colors">
                    lodgicdev@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+33652468750" className="flex items-start gap-3 group">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15 text-white/90 group-hover:bg-[#DBFF00] group-hover:text-[#001F45] group-hover:ring-[#DBFF00] transition-smooth">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-white/50 font-inter">Par téléphone</p>
                  <p className="text-[15px] font-sofia-bold text-white group-hover:text-[#DBFF00] transition-colors">
                    06 52 46 87 50
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15 text-white/90">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-7-8-13a8 8 0 0116 0c0 6-8 13-8 13zM12 11a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-white/50 font-inter">Localisation</p>
                  <p className="text-[15px] font-sofia-bold text-white">Toulouse, Occitanie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 : Navigation */}
          <div>
            <p className="text-xs font-inter font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </p>
            <ul className="mt-4 space-y-3 text-sm font-inter">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Qui sommes-nous ?', href: '/#about' },
                { label: 'Nos réalisations', href: '/#realisations' },
                { label: 'Notre offre', href: '/offre' },
                { label: 'Lodgic Conseils', href: '/blog' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-white/75 hover:text-[#DBFF00] transition-colors group"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-white/30 group-hover:bg-[#DBFF00] transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- DIVIDER --- */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* --- BRAND STRIP --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Accueil Lodgic" className="group">
              <span className="font-sofia-bold text-2xl text-white group-hover:text-[#DBFF00] transition-colors">
                Lodgic
              </span>
            </Link>
            <span className="h-6 w-px bg-white/15" aria-hidden />
            <p className="text-sm text-white/60 font-inter">
              Applications mobiles &amp; web sur-mesure · Toulouse
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/lodgic-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Lodgic"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 text-white hover:bg-[#DBFF00] hover:text-[#001F45] hover:ring-[#DBFF00] transition-smooth"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554V14.87c0-1.332-.025-3.045-1.857-3.045-1.86 0-2.144 1.45-2.144 2.95v5.677H9.339V9h3.413v1.561h.049c.476-.9 1.636-1.85 3.368-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.115 20.452H3.558V9h3.557v11.452z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Lodgic"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 text-white hover:bg-[#DBFF00] hover:text-[#001F45] hover:ring-[#DBFF00] transition-smooth"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.104 5.657 21.272 10.438 22v-7.03H7.898V12.07h2.54V9.845c0-2.52 1.492-3.91 3.777-3.91 1.094 0 2.238.198 2.238.198v2.476h-1.26c-1.242 0-1.63.774-1.63 1.567v1.894h2.773l-.443 2.901h-2.33V22C18.343 21.272 22 17.104 22 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* --- LEGAL --- */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/55 font-inter">
          <p>© {currentYear} Lodgic. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/politique-confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
            <span className="inline-flex items-center gap-1.5">
              Fait à Toulouse
              <span aria-hidden>·</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#DBFF00]" aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
