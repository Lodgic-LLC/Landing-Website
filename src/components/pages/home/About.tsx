import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'

/** Déposer le portrait ici (format portrait, ~1200×1500 px) : il s'affiche automatiquement au prochain build. */
const PORTRAIT_SRC = '/portrait-yann.jpg'
const hasPortrait = fs.existsSync(path.join(process.cwd(), 'public', PORTRAIT_SRC))

const credentials = [
  { label: 'Parcours', value: '5 ans en production · spatial et aéronautique' },
  { label: 'Formation', value: 'Ingénieur diplômé en informatique' },
  { label: 'Technologies', value: 'React · Next.js · React Native · Node.js' },
  { label: 'Zone', value: 'Toulouse · à distance partout en France' },
]

/** Ce que cinq ans en environnement critique laissent comme réflexes. */
const habits = [
  {
    tag: 'Réflexe 01',
    title: 'Je teste avant de livrer',
    text: "Dans l'aéro, on ne découvre pas un bug en production. Je garde cette habitude, même pour un site vitrine.",
  },
  {
    tag: 'Réflexe 02',
    title: "J'écris ce que je fais",
    text: 'Un projet non documenté est un projet perdu quand son auteur part. Le vôtre est documenté dès le premier jour.',
  },
  {
    tag: 'Réflexe 03',
    title: 'Je mesure au lieu de supposer',
    text: 'Temps de chargement, erreurs, usage réel : des chiffres, pas des impressions. Vous les recevez à la livraison.',
  },
]

const guarantees = [
  {
    theme: 'Fiabilité',
    items: [
      'Les parcours importants sont testés automatiquement',
      'Un bug est corrigé à sa source, pas contourné',
      'Les erreurs en production me sont signalées avant que vous les voyiez',
    ],
  },
  {
    theme: 'Montée en charge',
    items: [
      'Base de données conçue pour grandir avec vous',
      'Temps de chargement mesurés, pas supposés',
      'Hébergement dimensionné à votre usage réel',
    ],
  },
  {
    theme: 'Sécurité et données',
    items: [
      "Droits d'accès vérifiés côté serveur, pas seulement à l'écran",
      'Données personnelles traitées selon le RGPD',
      'Mots de passe et clés jamais écrits dans le code',
    ],
  },
  {
    theme: 'Reprise et propriété',
    items: [
      'Code lisible et documenté pour un autre développeur',
      'Vous êtes propriétaire du code et de tous les accès',
      'Historique complet de chaque modification',
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#23211F] py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Identité */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Portrait + fiche */}
          <div className="order-last lg:order-first">
            <figure className="overflow-hidden rounded-xl border border-[#45403A] bg-[#33302C]">
              {hasPortrait ? (
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={PORTRAIT_SRC}
                    alt="Yann Rouquié, ingénieur en informatique et développeur à Toulouse"
                    fill
                    sizes="(max-width: 1024px) 92vw, 36vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/5] w-full p-3">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#5A544C]">
                    <span className="font-sofia-bold text-6xl text-white/20">YR</span>
                    <span className="mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                      Portrait à venir
                    </span>
                  </div>
                </div>
              )}
              <figcaption className="border-t border-[#45403A] px-5 py-3">
                <p className="font-sofia-bold text-white">Yann Rouquié</p>
                <p className="text-xs text-white/55 font-inter">Ingénieur en informatique · Toulouse</p>
                <a
                  href="https://linkedin.com/in/yann-rouquie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-inter text-white/60 underline underline-offset-2 hover:text-[#E08A63]"
                >
                  Mon parcours sur LinkedIn
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </figcaption>
            </figure>

            <dl className="mt-5 space-y-4 rounded-xl border border-[#45403A] bg-[#33302C] p-5">
              {credentials.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] font-inter font-semibold uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-sofia-bold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="eyebrow eyebrow-left">Qui je suis</p>
            <h2
              id="about-heading"
              className="mt-3 text-4xl md:text-5xl font-sofia-bold text-white tracking-tight text-balance"
            >
              Yann Rouquié,
              <br className="hidden sm:block" /> ingénieur en informatique.
            </h2>
            <div className="mt-6 space-y-5 font-inter text-lg leading-relaxed text-white/75">
              <p>
                J&apos;ai passé cinq ans à développer des logiciels en production dans le{' '}
                <strong className="font-sofia-bold text-white">spatial et l&apos;aéronautique</strong> :
                architecture, applications métier, back-end et front-end, traitement de
                données, optimisation et automatisation. Des secteurs où on ne livre pas
                quelque chose qui « marche à peu près ».
              </p>
              <p>
                J&apos;ai quitté ce monde-là pour travailler avec des entreprises d&apos;ici.
                J&apos;applique les mêmes exigences à un site vitrine de cinq pages qu&apos;à un
                outil interne : c&apos;est la seule façon que je connaisse de développer.
              </p>
              <p>
                Je travaille seul, et c&apos;est volontaire. La personne à qui vous expliquez
                votre besoin est celle qui écrit le code, qui vous répond quand quelque chose
                cloche, et qui sera encore là dans six mois.
              </p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#45403A] bg-[#45403A] sm:grid-cols-3">
              {habits.map((h) => (
                <div key={h.title} className="bg-[#33302C] p-5">
                  <p className="mono text-[10px] uppercase tracking-[0.14em] text-[#E08A63]">
                    {h.tag}
                  </p>
                  <p className="mt-2.5 font-sofia-bold text-[15px] text-white">{h.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65 font-inter">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ce que vous obtenez */}
        <div className="mt-16 border-t border-[#45403A] pt-12 md:mt-20 md:pt-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-sofia-bold text-white tracking-tight text-balance">
              Ce que vous obtenez, quel que soit le projet
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/70 font-inter">
              Ce ne sont pas des options. C&apos;est la façon dont je travaille sur chaque
              site, application ou logiciel que je livre — même les petits.
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-[#45403A] bg-[#45403A] sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.theme} className="bg-[#23211F] p-6">
                <p className="mono text-[10px] uppercase tracking-[0.14em] text-[#E08A63]">{g.theme}</p>
                <ul className="mt-4 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#E08A63]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm leading-relaxed text-white/80 font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
