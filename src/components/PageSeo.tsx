/**
 * Gabarit des pages d'atterrissage (une par service).
 *
 *   PageSeo      la page complète : bandeau, expertises, FAQ, réalisations, contact
 *   Bandeau      le haut de page : titre, description, badges, maquette
 *   Expertises   les six cartes détaillant la prestation
 *
 * La maquette décorative est dans MaquetteNavigateur.tsx.
 */

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import MaquetteNavigateur from './MaquetteNavigateur'
import type { PageService } from '@/content/pages-service'
import JsonLd, { filAriane, faq } from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'

/** Rend un texte où **ce qui est entre astérisques** apparaît en gras. */
function Texte({ children }: { children: string }) {
  return (
    <>
      {children.split(/(\*\*[^*]+\*\*)/g).map((bout, i) =>
        bout.startsWith('**') && bout.endsWith('**') ? (
          <strong key={i} className="font-sofia-bold">
            {bout.slice(2, -2)}
          </strong>
        ) : (
          bout
        ),
      )}
    </>
  )
}

interface SeoHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  badges: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };

}

function Bandeau({
  eyebrow,
  title,
  highlight,
  description,
  badges,
  primaryCta = { label: "Expliquer mon projet", href: "/contact" },
  secondaryCta = { label: "Voir mes réalisations", href: "/realisations" },
}: SeoHeroProps) {
  return (
    <section className="w-full min-h-screen bg-[#F8F6F2] pt-24 md:pt-36 pb-32 md:pb-44 overflow-hidden relative flex flex-col justify-center">
      {/* Decor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(194,84,45,0.08),transparent_60%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Left column */}
          <div className="lg:col-span-6 xl:col-span-6 pt-10">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[#2E2B28]/15 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-inter font-semibold uppercase tracking-wider text-[#2E2B28]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2542D] shadow-[0_0_10px_rgba(194,84,45,0.9)]" />
              {eyebrow}
            </span>

            <h1
              className="font-sofia-bold heading text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.05] mt-6 mb-4 text-[#2E2B28]"
            >
              {title}
            </h1>

            <h2
              className="font-sofia-bold text-[#B54A26] text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight"
            >
              {highlight}
            </h2>

            <div
              className="lead text-lg sm:text-xl max-w-2xl mb-8 text-[#2E2B28]"
            >
              <Texte>{description}</Texte>
            </div>

            <ul
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3.5 py-1.5 border border-[#2E2B28]/10 text-sm font-inter text-[#2E2B28] shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C2542D]" />
                  {badge}
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href={primaryCta.href}
                className="btn-primary inline-flex items-center gap-3"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center text-[#2E2B28] font-sofia-bold border border-[#2E2B28]/10 rounded-md px-5 py-3 hover:border-[#2E2B28]/30 hover:bg-[#2E2B28]/5 transition-smooth"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right column - visual */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative h-full min-h-[520px] w-full">
            <div className="relative w-full max-w-xl aspect-square">
              {/* Glow halos */}

              <MaquetteNavigateur />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface SeoExpertiseCard {
  num: string
  title: string
  body: string
  bullets: string[]
}

export interface SeoCrossLink {
  title: string
  href: string
  description: string
}

interface SeoExpertiseProps {
  eyebrow: string
  heading: string
  intro: string
  cards: SeoExpertiseCard[]
  closing?: string[]
  crossLinks?: SeoCrossLink[]
  ctaLabel?: string
  ctaHref?: string
}

function Expertises({
  eyebrow,
  heading,
  intro,
  cards,
  closing,
  crossLinks,
  ctaLabel = 'Discuter de votre projet',
  ctaHref = '/contact',
}: SeoExpertiseProps) {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decor */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center rounded-full border border-[#2E2B28]/15 bg-white px-3 py-1 text-xs font-inter font-semibold uppercase tracking-wider text-[#2E2B28]">
              {eyebrow}
            </span>
            <h2 className="mt-5 font-sofia-bold text-3xl md:text-5xl text-[#2E2B28] leading-[1.1]">
              <Texte>{heading}</Texte>
            </h2>
          </div>

          <div
            className="lg:col-span-5"
          >
            <p className="text-lg font-inter text-[#6B655D]/80 leading-relaxed">
              <Texte>{intro}</Texte>
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative rounded-2xl border border-[#2E2B28]/10 bg-white p-7 shadow-soft hover:shadow-[0_25px_60px_-25px_rgba(35,33,31,0.18)] transition-shadow duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C2542D]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="flex items-center gap-3 mb-4 relative">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#2E2B28] text-white text-xs font-sofia-bold tracking-wider px-2">
                  {card.num}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2E2B28]/15 to-transparent" />
              </div>
              <h3 className="font-sofia-bold text-xl md:text-2xl text-[#2E2B28] leading-snug">{card.title}</h3>
              <p className="mt-3 text-[#6B655D] font-inter leading-relaxed">
                <Texte>{card.body}</Texte>
              </p>
              <ul className="mt-5 space-y-2">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm font-inter text-[#2E2B28]">
                    <FaCheck className="mt-1 h-3 w-3 text-[#B54A26] flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Closing paragraph + CTA */}
        {(closing || crossLinks) && (
          <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start">
            {closing && (
              <div
                className="lg:col-span-7 rounded-2xl bg-[#F8F6F2] border border-[#2E2B28]/10 p-8 md:p-10"
              >
                <div className="text-[#2E2B28] font-inter leading-relaxed text-base md:text-lg">
                  {closing.map((paragraphe, i) => (
                    <p key={i} className={i > 0 ? 'mt-4' : undefined}>
                      <Texte>{paragraphe}</Texte>
                    </p>
                  ))}
                </div>
                <Link
                  href={ctaHref}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2E2B28] px-6 py-3 text-sm font-sofia-bold text-white hover:bg-[#A34322] transition-smooth"
                >
                  {ctaLabel}
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}

            {crossLinks && crossLinks.length > 0 && (
              <div
                className="lg:col-span-5 space-y-3"
              >
                <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#2E2B28]/60">
                  Aller plus loin
                </p>
                {crossLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl border border-[#2E2B28]/10 bg-white p-4 hover:border-[#2E2B28]/30 hover:bg-[#F8F6F2] transition-smooth group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-sofia-bold text-base text-[#2E2B28]">{link.title}</p>
                        <p className="mt-1 text-sm text-[#6B655D] font-inter leading-relaxed">{link.description}</p>
                      </div>
                      <FaArrowRight className="mt-1 h-3 w-3 text-[#2E2B28]/50 group-hover:text-[#2E2B28] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

const About = dynamic(() => import('@/app/_sections/APropos'))
const SuccessStories = dynamic(() => import('@/app/_sections/Realisations'))
const Contact = dynamic(() => import('@/app/_sections/Contact'))

export interface SeoFaq {
  question: string
  answer: string
}

export default function PageSeo({ page }: { page: PageService }) {
  const { name, description, hero, expertise, faqs } = page
  const path = `/${page.slug}`
  const url = `${SITE_URL}${path}`
  const trackingKeyword = page.slug.replace(/-/g, '_')
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <JsonLd id={`seo-${trackingKeyword}-webpage`} data={pageSchema} />
      <JsonLd data={filAriane([{ name: 'Accueil', url: SITE_URL }, { name, url }])} />
      <JsonLd data={faq(faqs)} />
      <main>
          <Bandeau
            primaryCta={{ label: 'Expliquer mon projet', href: '/contact' }}
            secondaryCta={{ label: 'Voir mes réalisations', href: '/realisations' }}
            {...hero}
          />

          <Expertises ctaLabel="Expliquer mon projet" ctaHref="/contact" {...expertise} />

          <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-20 md:py-24" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-6">
              <p className="eyebrow eyebrow-left">Questions fréquentes</p>
              <h2
                id="faq-heading"
                className="mt-3 text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
              >
                Ce qu’on me demande le plus souvent
              </h2>
              <div className="mt-8 divide-y divide-[#E6E1D8] overflow-hidden rounded-xl border border-[#E6E1D8] bg-white">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group px-6 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-sofia-bold text-[#2E2B28] [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        aria-hidden
                        className="mono shrink-0 text-lg leading-none text-[#B54A26] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#6B655D] font-inter">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <SuccessStories />

          <About fond="creme" />

          <Contact fond="blanc" />
      </main>
    </>
  )
}
