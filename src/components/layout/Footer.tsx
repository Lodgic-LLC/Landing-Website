import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/#projets', label: 'Projets' },
  { href: '/#about', label: 'À propos' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://linkedin.com/company/lodgic-dev',
    label: 'LinkedIn',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Lodgic-LLC',
    label: 'GitHub',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.858 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-[var(--color-border)]">
      <div className="container-editorial py-12 md:py-16">
        {/* Haut : logo + nav */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Accueil Lodgic">
              <span className="text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">
                Lod<span className="text-[var(--color-brand-ink)]">g</span>ic
              </span>
            </Link>
            <p className="mt-2 text-[14px] text-[var(--color-muted)]">
              Toulouse, France — on bosse aussi à distance.
            </p>
          </div>

          <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Ligne de séparation */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--color-muted-faint)]">
            © {currentYear} Lodgic. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/politique-confidentialite"
              className="text-[13px] text-[var(--color-muted-faint)] hover:text-[var(--color-ink)] transition-smooth"
            >
              Politique de confidentialité
            </Link>

            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-[var(--color-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-smooth"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
