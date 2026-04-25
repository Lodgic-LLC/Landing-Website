import Image from 'next/image'

import type { ProjectMockup as ProjectMockupType, ProjectMockupVariant } from '@/data/projects'

interface ProjectMockupProps {
  mockup: ProjectMockupType
  className?: string
  priority?: boolean
  sizes?: string
}

/* ---------------------------------- Variants ---------------------------------- */

const HRDashboard = () => (
  <div className="w-full h-full bg-white flex text-[11px] text-slate-700">
    {/* Sidebar */}
    <aside className="w-[190px] border-r border-slate-200 bg-slate-50/70 flex flex-col p-3 gap-1">
      <div className="flex items-center gap-2 px-1 py-2 mb-2">
        <div className="h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-[10px]">
          RH
        </div>
        <span className="font-semibold text-slate-900">Flux RH</span>
      </div>
      {[
        { label: 'Tableau de bord', active: true },
        { label: 'Équipe' },
        { label: 'Congés' },
        { label: 'Notes de frais' },
        { label: 'Onboarding' },
        { label: 'Documents' },
        { label: 'Paramètres' },
      ].map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
            item.active ? 'bg-white text-slate-900 font-medium shadow-sm border border-slate-200' : 'text-slate-600'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${item.active ? 'bg-indigo-600' : 'bg-slate-300'}`} />
          {item.label}
        </div>
      ))}
      <div className="mt-auto flex items-center gap-2 rounded-md bg-white border border-slate-200 p-2">
        <div className="h-6 w-6 rounded-full bg-slate-200" />
        <div className="flex flex-col">
          <span className="font-medium text-slate-900 leading-tight">Camille D.</span>
          <span className="text-slate-500 text-[10px]">Responsable RH</span>
        </div>
      </div>
    </aside>

    {/* Main */}
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Topbar */}
      <header className="flex items-center justify-between px-5 py-3 border-b border-slate-200">
        <div>
          <h1 className="text-[14px] font-semibold text-slate-900 leading-tight">Bonjour, Camille</h1>
          <p className="text-slate-500">Voici ce qui se passe aujourd’hui.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-slate-100 h-6 px-3 flex items-center text-[10px] text-slate-600">Mars 2024</div>
          <div className="h-7 px-3 rounded-full bg-indigo-600 text-white flex items-center font-medium">
            Nouvelle demande
          </div>
        </div>
      </header>

      {/* KPI */}
      <div className="grid grid-cols-4 gap-3 px-5 pt-4">
        {[
          { label: 'Demandes en attente', value: '12', trend: '+3' },
          { label: 'Congés posés', value: '48', trend: '+8' },
          { label: 'Notes de frais', value: '27', trend: '−2' },
          { label: 'Nouveaux arrivants', value: '3', trend: 'ce mois' },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-slate-200 p-3 bg-white">
            <p className="text-slate-500 text-[10px]">{kpi.label}</p>
            <p className="text-[20px] font-semibold text-slate-900 leading-none mt-1">{kpi.value}</p>
            <p className="text-[10px] text-indigo-600 mt-1">{kpi.trend}</p>
          </div>
        ))}
      </div>

      {/* Chart + table */}
      <div className="grid grid-cols-5 gap-3 px-5 py-4 flex-1 overflow-hidden">
        <section className="col-span-3 rounded-lg border border-slate-200 p-3 bg-white flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="font-medium text-slate-900">Congés posés sur 6 mois</p>
            <p className="text-slate-500 text-[10px]">Équipe globale</p>
          </div>
          <svg viewBox="0 0 100 40" className="w-full h-full mt-auto" aria-hidden>
            <defs>
              <linearGradient id="hrgrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 30 L15 22 L30 26 L45 15 L60 19 L75 9 L100 13" fill="none" stroke="#4f46e5" strokeWidth="1.4" />
            <path d="M0 30 L15 22 L30 26 L45 15 L60 19 L75 9 L100 13 L100 40 L0 40 Z" fill="url(#hrgrad)" />
          </svg>
        </section>
        <section className="col-span-2 rounded-lg border border-slate-200 bg-white flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
            <p className="font-medium text-slate-900">Demandes récentes</p>
            <p className="text-slate-500 text-[10px]">Voir tout</p>
          </div>
          <ul className="flex-1 overflow-hidden">
            {[
              { name: 'Paul M.', type: 'Congés', status: 'En attente', tone: 'bg-amber-100 text-amber-700' },
              { name: 'Sarah L.', type: 'Note de frais', status: 'Validée', tone: 'bg-emerald-100 text-emerald-700' },
              { name: 'Karim B.', type: 'Télétravail', status: 'En attente', tone: 'bg-amber-100 text-amber-700' },
              { name: 'Julia R.', type: 'Congés', status: 'Refusée', tone: 'bg-rose-100 text-rose-700' },
            ].map((row) => (
              <li key={row.name} className="flex items-center justify-between px-3 py-2 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-900 leading-tight">{row.name}</p>
                    <p className="text-slate-500 text-[10px]">{row.type}</p>
                  </div>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${row.tone}`}>{row.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
)

const HRLeaves = () => (
  <div className="w-full h-full bg-white p-5 text-[11px] text-slate-700 flex flex-col overflow-hidden">
    <header className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-[14px] font-semibold text-slate-900">Calendrier des congés</h1>
        <p className="text-slate-500">Équipe Produit — mars 2024</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-slate-100 h-6 px-3 flex items-center text-slate-600">Filtrer</div>
        <div className="h-6 px-3 rounded-full bg-indigo-600 text-white flex items-center font-medium">Poser un congé</div>
      </div>
    </header>
    <div className="grid grid-cols-[120px_1fr] gap-2 flex-1 overflow-hidden">
      <div className="flex flex-col gap-1 pt-6">
        {['Paul M.', 'Sarah L.', 'Karim B.', 'Julia R.', 'Louis P.', 'Inès T.'].map((name) => (
          <div key={name} className="h-7 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-slate-200" />
            <span className="text-slate-900 text-[10.5px] truncate">{name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col overflow-hidden">
        <div
          className="grid text-[9.5px] text-slate-500 mb-1"
          style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-center">
              {i + 4}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1 flex-1">
          {[
            [{ start: 2, len: 3, tone: 'bg-indigo-500' }],
            [{ start: 7, len: 4, tone: 'bg-emerald-500' }],
            [{ start: 12, len: 2, tone: 'bg-amber-500' }],
            [{ start: 4, len: 5, tone: 'bg-indigo-500' }, { start: 14, len: 2, tone: 'bg-rose-500' }],
            [{ start: 10, len: 6, tone: 'bg-indigo-500' }],
            [{ start: 15, len: 3, tone: 'bg-emerald-500' }],
          ].map((row, i) => (
            <div
              key={i}
              className="relative h-7 bg-slate-50 rounded border border-slate-200 grid"
              style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}
            >
              {Array.from({ length: 20 }).map((_, c) => (
                <span key={c} className="border-r border-slate-100 last:border-0" />
              ))}
              {row.map((block, idx) => (
                <span
                  key={idx}
                  className={`absolute top-1 bottom-1 rounded-md ${block.tone} opacity-90`}
                  style={{
                    left: `${(block.start / 20) * 100}%`,
                    width: `${(block.len / 20) * 100}%`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3 text-[10px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-indigo-500" /> Congés
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-emerald-500" /> Télétravail
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-amber-500" /> RTT
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-rose-500" /> Maladie
          </span>
        </div>
      </div>
    </div>
  </div>
)

const HRExpenses = () => (
  <div className="w-full h-full bg-white text-[11px] text-slate-700 flex flex-col overflow-hidden">
    <header className="flex items-center justify-between px-5 py-3 border-b border-slate-200">
      <div>
        <h1 className="text-[14px] font-semibold text-slate-900">Notes de frais</h1>
        <p className="text-slate-500">12 en attente de validation</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-slate-100 h-6 px-3 flex items-center text-slate-600">Toutes</div>
        <div className="rounded-full bg-indigo-50 text-indigo-700 h-6 px-3 flex items-center font-medium">En attente</div>
        <div className="rounded-full bg-slate-100 h-6 px-3 flex items-center text-slate-600">Validées</div>
      </div>
    </header>
    <div className="flex-1 overflow-hidden">
      <div className="grid grid-cols-[1fr_110px_90px_100px_90px] text-[10px] text-slate-500 uppercase tracking-wide px-5 py-2 border-b border-slate-100">
        <span>Collaborateur</span>
        <span>Catégorie</span>
        <span>Montant</span>
        <span>Date</span>
        <span>Statut</span>
      </div>
      {[
        { name: 'Paul Martin', cat: 'Déplacement', amount: '248,90 €', date: '12 mars', status: 'En attente', tone: 'bg-amber-100 text-amber-700' },
        { name: 'Sarah Legrand', cat: 'Repas client', amount: '86,50 €', date: '12 mars', status: 'En attente', tone: 'bg-amber-100 text-amber-700' },
        { name: 'Karim Bouaziz', cat: 'Hôtel', amount: '312,00 €', date: '11 mars', status: 'Validée', tone: 'bg-emerald-100 text-emerald-700' },
        { name: 'Julia Renaud', cat: 'Fourniture', amount: '45,20 €', date: '11 mars', status: 'En attente', tone: 'bg-amber-100 text-amber-700' },
        { name: 'Louis Pernod', cat: 'Déplacement', amount: '142,00 €', date: '09 mars', status: 'Validée', tone: 'bg-emerald-100 text-emerald-700' },
        { name: 'Inès Tourneur', cat: 'Repas équipe', amount: '98,70 €', date: '08 mars', status: 'Refusée', tone: 'bg-rose-100 text-rose-700' },
      ].map((row) => (
        <div
          key={row.name}
          className="grid grid-cols-[1fr_110px_90px_100px_90px] items-center px-5 py-2.5 border-b border-slate-100 last:border-0"
        >
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-slate-200" />
            <span className="font-medium text-slate-900">{row.name}</span>
          </div>
          <span className="text-slate-600">{row.cat}</span>
          <span className="font-medium text-slate-900">{row.amount}</span>
          <span className="text-slate-500">{row.date}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full w-fit ${row.tone}`}>{row.status}</span>
        </div>
      ))}
    </div>
  </div>
)

const HRMobile = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col text-[10.5px] text-slate-700 overflow-hidden">
    <div className="bg-indigo-600 text-white p-4 pt-6">
      <p className="text-white/80 text-[10px]">Bonjour,</p>
      <p className="font-semibold text-white text-[14px]">Paul Martin</p>
      <div className="mt-3 rounded-xl bg-white/15 p-3">
        <p className="text-white/80 text-[10px]">Solde de congés</p>
        <p className="text-[20px] font-semibold leading-none mt-1">18,5 jours</p>
        <div className="mt-2 h-1.5 rounded-full bg-white/25 overflow-hidden">
          <div className="h-full w-2/3 bg-white" />
        </div>
      </div>
    </div>
    <div className="p-3 grid grid-cols-3 gap-2">
      {[
        { label: 'Poser un\ncongé' },
        { label: 'Note de\nfrais' },
        { label: 'Mes\ndocuments' },
      ].map((a) => (
        <div key={a.label} className="rounded-xl bg-white border border-slate-200 p-2.5 flex flex-col gap-1.5">
          <div className="h-6 w-6 rounded-md bg-indigo-50 border border-indigo-100" />
          <p className="whitespace-pre-line leading-tight text-slate-900 font-medium">{a.label}</p>
        </div>
      ))}
    </div>
    <div className="px-3 flex items-center justify-between">
      <p className="font-semibold text-slate-900">Demandes en cours</p>
      <p className="text-indigo-600 text-[10px]">Voir tout</p>
    </div>
    <div className="flex-1 px-3 pt-2 flex flex-col gap-2 overflow-hidden">
      {[
        { t: 'Congés — 3 jours', d: '15 au 17 mars', s: 'En attente', tone: 'bg-amber-100 text-amber-700' },
        { t: 'Note de frais', d: 'Trajet client — 248,90 €', s: 'Validée', tone: 'bg-emerald-100 text-emerald-700' },
      ].map((c) => (
        <div key={c.t} className="rounded-xl bg-white border border-slate-200 p-3">
          <div className="flex items-center justify-between mb-1">
            <p className="font-medium text-slate-900">{c.t}</p>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.tone}`}>{c.s}</span>
          </div>
          <p className="text-slate-500 text-[10px]">{c.d}</p>
        </div>
      ))}
    </div>
    <nav className="border-t border-slate-200 bg-white flex justify-around py-2.5 mt-auto">
      {['Accueil', 'Équipe', 'Docs', 'Profil'].map((n, i) => (
        <div key={n} className="flex flex-col items-center gap-0.5">
          <div className={`h-3.5 w-3.5 rounded ${i === 0 ? 'bg-indigo-600' : 'bg-slate-300'}`} />
          <span className={`text-[9px] ${i === 0 ? 'text-indigo-600 font-medium' : 'text-slate-500'}`}>{n}</span>
        </div>
      ))}
    </nav>
  </div>
)

/* ---------------------------- Shop variants ---------------------------- */

const StarRow = ({ note = 5, size = 'text-[8px]' }: { note?: number; size?: string }) => (
  <span className={`inline-flex items-center gap-0.5 ${size} text-amber-500 leading-none`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < note ? '' : 'text-stone-300'}>
        ★
      </span>
    ))}
  </span>
)

const ShopStorefront = () => (
  <div className="w-full h-full bg-white text-[10.5px] text-stone-700 flex flex-col overflow-hidden">
    {/* Top bar promo */}
    <div className="bg-stone-900 text-white text-[9px] py-1 px-5 flex items-center justify-between">
      <span>Livraison offerte dès 80 € · Retour gratuit 30 jours</span>
      <span className="flex items-center gap-2 text-stone-300">
        <span>FR ▾</span>
        <span>Aide</span>
        <span>Mon compte</span>
      </span>
    </div>
    <header className="flex items-center justify-between px-5 py-3 border-b border-stone-200">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-stone-900" />
        <span className="font-semibold text-stone-900 tracking-[0.2em] text-[11px]">ATELIER NORD</span>
      </div>
      <nav className="flex items-center gap-4 text-stone-600">
        <span className="text-stone-900 font-medium">Femme</span>
        <span>Homme</span>
        <span>Accessoires</span>
        <span>Lookbook</span>
        <span>Journal</span>
      </nav>
      <div className="flex items-center gap-3 text-stone-600">
        <span>⌕ Rechercher</span>
        <span>♡</span>
        <span className="relative">
          Panier
          <span className="absolute -top-1.5 -right-3 h-3.5 w-3.5 rounded-full bg-stone-900 text-white text-[8px] flex items-center justify-center">
            2
          </span>
        </span>
      </div>
    </header>

    {/* Sous-nav catégories */}
    <div className="flex items-center gap-4 px-5 py-2 border-b border-stone-100 text-[10px] text-stone-600 overflow-hidden">
      <span className="text-stone-900 font-medium border-b border-stone-900 pb-1.5 -mb-1.5">Nouveautés</span>
      <span>Sacs</span>
      <span>Chaussures</span>
      <span>Prêt-à-porter</span>
      <span>Accessoires</span>
      <span className="ml-auto flex items-center gap-2 text-stone-500">
        <span>Trier par · Popularité ▾</span>
        <span>Filtrer</span>
      </span>
    </div>

    {/* Hero + grille */}
    <section className="grid grid-cols-5 gap-3 px-5 py-3">
      <div className="col-span-2 rounded-xl bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100 p-4 h-44 flex flex-col justify-between relative overflow-hidden">
        <div>
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-stone-700">Printemps 2024</span>
          <p className="text-[17px] font-semibold text-stone-900 leading-tight mt-2 max-w-[190px]">
            Matières nobles,
            <br />
            coupes sculptées.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 px-3 rounded-full bg-stone-900 text-white flex items-center text-[10px] font-medium">
            Découvrir →
          </div>
          <span className="text-[10px] text-stone-600">24 pièces</span>
        </div>
        <span aria-hidden className="absolute right-2 bottom-2 h-16 w-16 rounded-full bg-amber-200/60 blur-2xl" />
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-3">
        {[
          { title: 'Sac cabas Léo', price: '149 €', tone: 'from-amber-100 via-stone-100 to-stone-200', tag: 'Nouveau', note: 5, reviews: 184 },
          { title: 'Écharpe Oslo', price: '89 €', tone: 'from-slate-100 to-slate-200', note: 4, reviews: 96 },
          { title: 'Bottines Nina', price: '239 €', tone: 'from-stone-200 to-stone-300', tag: '-20%', note: 5, reviews: 212 },
          { title: 'Ceinture Lune', price: '64 €', tone: 'from-neutral-100 to-amber-100', note: 4, reviews: 48 },
          { title: 'Pull Cachemire', price: '189 €', old: '239 €', tone: 'from-amber-100 to-orange-100', tag: 'Soldes', note: 5, reviews: 276 },
          { title: 'Chemise Lin', price: '79 €', tone: 'from-emerald-50 to-teal-100', note: 4, reviews: 132 },
        ].map((p) => (
          <div key={p.title} className="rounded-xl overflow-hidden border border-stone-200 bg-white flex flex-col">
            <div className={`relative aspect-square bg-gradient-to-br ${p.tone}`}>
              {p.tag && (
                <span
                  className={`absolute top-1.5 left-1.5 text-[8.5px] font-medium px-1.5 py-0.5 rounded ${
                    p.tag === '-20%' || p.tag === 'Soldes'
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-900 border border-stone-200'
                  }`}
                >
                  {p.tag}
                </span>
              )}
              <span className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-white/90 flex items-center justify-center text-[10px] text-stone-500">
                ♡
              </span>
            </div>
            <div className="p-2">
              <p className="text-stone-900 font-medium leading-tight truncate">{p.title}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <p className="text-stone-900 text-[10px] font-medium">{p.price}</p>
                {p.old && <p className="text-stone-400 line-through text-[9px]">{p.old}</p>}
              </div>
              <div className="mt-1 flex items-center gap-1">
                <StarRow note={p.note} />
                <span className="text-stone-400 text-[9px]">({p.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Bandeau confiance + newsletter */}
    <section className="mt-auto px-5 pb-4">
      <div className="grid grid-cols-4 gap-3 py-3 border-t border-stone-200 text-[9.5px] text-stone-600">
        {[
          { t: 'Livraison offerte', d: 'Dès 80 € en France' },
          { t: 'Retour gratuit', d: '30 jours pour changer d’avis' },
          { t: 'Paiement sécurisé', d: 'CB, Apple Pay, 3x sans frais' },
          { t: 'Service client', d: 'Réponse sous 24 h' },
        ].map((item) => (
          <div key={item.t} className="flex items-start gap-2">
            <div className="h-4 w-4 rounded-full bg-stone-900 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-stone-900 font-medium leading-tight">{item.t}</p>
              <p className="text-stone-500 leading-tight">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)

const ShopProduct = () => (
  <div className="w-full h-full bg-white text-[10.5px] text-stone-700 flex flex-col overflow-hidden">
    {/* Breadcrumb */}
    <div className="px-5 py-2 border-b border-stone-100 text-[9.5px] text-stone-500 flex items-center gap-1.5">
      <span>Accueil</span>
      <span>/</span>
      <span>Femme</span>
      <span>/</span>
      <span>Sacs</span>
      <span>/</span>
      <span className="text-stone-900 font-medium">Sac cabas Léo</span>
    </div>

    <div className="p-5 grid grid-cols-5 gap-5 flex-1 overflow-hidden">
      {/* Galerie */}
      <div className="col-span-3 flex gap-2">
        <div className="flex flex-col gap-1.5 w-12">
          {['from-amber-100 to-stone-200', 'from-stone-100 to-stone-200', 'from-neutral-100 to-amber-100', 'from-stone-200 to-stone-300'].map((g, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md bg-gradient-to-br ${g} ${
                i === 0 ? 'ring-2 ring-stone-900' : 'border border-stone-200'
              }`}
            />
          ))}
        </div>
        <div className="flex-1 rounded-2xl bg-gradient-to-br from-amber-100 via-stone-100 to-stone-200 relative overflow-hidden">
          <span className="absolute top-3 left-3 text-[9px] font-medium px-2 py-0.5 rounded bg-white text-stone-900 border border-stone-200">
            Nouveau
          </span>
          <span className="absolute top-3 right-3 h-6 w-6 rounded-full bg-white flex items-center justify-center text-stone-500">
            ♡
          </span>
          <span className="absolute bottom-3 right-3 h-6 px-2 rounded-full bg-white/90 flex items-center text-[9px] text-stone-600">
            1 / 4
          </span>
        </div>
      </div>

      {/* Détails */}
      <div className="col-span-2 flex flex-col overflow-hidden">
        <p className="text-[9px] uppercase tracking-[0.18em] text-stone-500">Atelier Nord · Maroquinerie</p>
        <h1 className="text-[18px] font-semibold text-stone-900 leading-tight mt-1">Sac cabas Léo</h1>
        <div className="flex items-center gap-2 mt-1">
          <StarRow note={5} />
          <span className="text-stone-500 text-[9.5px]">4.9 · 184 avis</span>
          <span className="text-stone-300">·</span>
          <span className="text-emerald-600 text-[9.5px] font-medium">En stock</span>
        </div>
        <div className="flex items-end gap-2 mt-3">
          <p className="text-[18px] font-semibold text-stone-900">149,00 €</p>
          <p className="text-stone-400 line-through text-[11px] mb-0.5">179,00 €</p>
          <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">−17%</span>
        </div>
        <p className="text-stone-600 mt-2 leading-relaxed text-[10px]">
          Cuir pleine fleur tanné végétal. Coutures main renforcées, anse ajustable.
          Fabriqué en France dans un atelier familial du Tarn.
        </p>

        <p className="mt-3 text-[9px] uppercase tracking-[0.15em] text-stone-500">Couleur · Sable</p>
        <div className="flex gap-2 mt-1.5">
          {[
            { c: 'bg-amber-200', on: true },
            { c: 'bg-stone-400' },
            { c: 'bg-stone-900' },
            { c: 'bg-emerald-800' },
          ].map((s, i) => (
            <span
              key={i}
              className={`h-5 w-5 rounded-full ${s.c} ${
                s.on ? 'ring-2 ring-offset-2 ring-stone-900' : 'ring-1 ring-stone-200'
              }`}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500">Taille</p>
          <p className="text-[9px] text-stone-500 underline">Guide des tailles</p>
        </div>
        <div className="flex gap-1.5 mt-1.5">
          {[
            { s: 'S' },
            { s: 'M', on: true },
            { s: 'L' },
            { s: 'XL', disabled: true },
          ].map((t) => (
            <span
              key={t.s}
              className={`h-7 w-9 rounded-md border text-[10px] flex items-center justify-center ${
                t.on
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : t.disabled
                  ? 'border-stone-200 text-stone-300 line-through'
                  : 'border-stone-200 text-stone-600'
              }`}
            >
              {t.s}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center border border-stone-200 rounded-md overflow-hidden">
            <span className="h-7 w-7 flex items-center justify-center text-stone-500">−</span>
            <span className="h-7 w-7 flex items-center justify-center text-stone-900 font-medium border-x border-stone-200">
              1
            </span>
            <span className="h-7 w-7 flex items-center justify-center text-stone-500">+</span>
          </div>
          <div className="flex-1 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-medium text-[10.5px]">
            Ajouter au panier — 149 €
          </div>
        </div>

        <div className="mt-3 rounded-md bg-stone-50 border border-stone-100 p-2 text-[9.5px] text-stone-600 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-stone-900 flex-shrink-0" />
          <span>
            Livraison estimée <span className="text-stone-900 font-medium">jeudi 28 mars</span> · Retour gratuit 30&nbsp;jours
          </span>
        </div>

        {/* Onglets */}
        <div className="mt-3 border-t border-stone-100 pt-2 flex items-center gap-4 text-[9.5px]">
          <span className="text-stone-900 font-medium border-b border-stone-900 pb-1 -mb-[1px]">Composition</span>
          <span className="text-stone-500">Entretien</span>
          <span className="text-stone-500">Livraison</span>
        </div>
      </div>
    </div>

    {/* Cross-sell */}
    <div className="px-5 pb-4 border-t border-stone-100 pt-3">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-stone-900 text-[11px]">Souvent achetés ensemble</p>
        <p className="text-stone-500 text-[9.5px]">Pack complet · économisez 15%</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[
          { title: 'Portefeuille Noé', price: '79 €', tone: 'from-stone-100 to-stone-200' },
          { title: 'Écharpe Oslo', price: '89 €', tone: 'from-slate-100 to-slate-200' },
          { title: 'Ceinture Lune', price: '64 €', tone: 'from-neutral-100 to-amber-100' },
          { title: 'Carnet Kraft', price: '24 €', tone: 'from-amber-100 to-orange-100' },
        ].map((p) => (
          <div key={p.title} className="flex items-center gap-2">
            <div className={`h-10 w-10 rounded-md bg-gradient-to-br ${p.tone} flex-shrink-0`} />
            <div className="min-w-0">
              <p className="font-medium text-stone-900 leading-tight truncate">{p.title}</p>
              <p className="text-stone-500 text-[9.5px]">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ShopCheckout = () => (
  <div className="w-full h-full bg-stone-50 text-[10.5px] text-stone-700 flex flex-col overflow-hidden">
    {/* Header minimal checkout */}
    <header className="flex items-center justify-between px-5 py-3 border-b border-stone-200 bg-white">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-stone-900" />
        <span className="font-semibold text-stone-900 tracking-[0.2em] text-[11px]">ATELIER NORD</span>
      </div>
      <div className="flex items-center gap-1.5 text-stone-500 text-[9.5px]">
        <span className="h-3 w-3 rounded-full bg-emerald-500" />
        <span>Connexion sécurisée · SSL chiffré</span>
      </div>
      <span className="text-stone-500 text-[9.5px]">Besoin d’aide ?</span>
    </header>

    {/* Stepper */}
    <div className="flex items-center justify-center gap-3 py-3 border-b border-stone-100 bg-white">
      {[
        { label: 'Panier', state: 'done' },
        { label: 'Informations', state: 'done' },
        { label: 'Livraison', state: 'active' },
        { label: 'Paiement', state: 'pending' },
      ].map((step, i, arr) => (
        <div key={step.label} className="flex items-center gap-2">
          <div
            className={`h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-medium ${
              step.state === 'done'
                ? 'bg-emerald-500 text-white'
                : step.state === 'active'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-200 text-stone-500'
            }`}
          >
            {step.state === 'done' ? '✓' : i + 1}
          </div>
          <span
            className={`text-[10px] ${
              step.state === 'active' ? 'text-stone-900 font-medium' : 'text-stone-500'
            }`}
          >
            {step.label}
          </span>
          {i < arr.length - 1 && <span className="h-px w-8 bg-stone-200 mx-1" />}
        </div>
      ))}
    </div>

    <div className="p-5 grid grid-cols-5 gap-4 flex-1 overflow-hidden">
      {/* Livraison */}
      <div className="col-span-3 flex flex-col gap-3">
        <div className="bg-white rounded-xl border border-stone-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-stone-900">Mode de livraison</p>
            <p className="text-[9.5px] text-stone-500">Livraison à Camille Durand · 7 rue des Lilas, 31000 Toulouse</p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { t: 'Point relais Mondial Relay', d: '2 à 4 jours ouvrés · 20 000 points', p: 'Offerte', on: true },
              { t: 'Livraison standard Colissimo', d: 'À domicile · 2 à 3 jours', p: '4,90 €' },
              { t: 'Livraison express Chronopost', d: 'Livré demain avant 13h', p: '9,90 €' },
            ].map((opt) => (
              <div
                key={opt.t}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  opt.on ? 'border-stone-900 bg-stone-50' : 'border-stone-200 bg-white'
                }`}
              >
                <span
                  className={`h-4 w-4 rounded-full border-2 flex-shrink-0 ${
                    opt.on ? 'border-stone-900 bg-stone-900 ring-2 ring-white' : 'border-stone-300'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-stone-900 leading-tight">{opt.t}</p>
                  <p className="text-[9.5px] text-stone-500">{opt.d}</p>
                </div>
                <p className={`text-[10px] font-medium ${opt.p === 'Offerte' ? 'text-emerald-600' : 'text-stone-900'}`}>
                  {opt.p}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-stone-200 p-4">
          <p className="font-semibold text-stone-900 mb-2">Adresse de facturation</p>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded border border-stone-900 bg-stone-900 flex items-center justify-center text-white text-[8px]">
              ✓
            </span>
            <p className="text-stone-600">Identique à l’adresse de livraison</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-stone-600 underline">← Retour aux informations</span>
          <div className="h-9 px-5 rounded-full bg-stone-900 text-white flex items-center font-medium">
            Passer au paiement →
          </div>
        </div>
      </div>

      {/* Récap */}
      <aside className="col-span-2 bg-white rounded-xl border border-stone-200 p-4 flex flex-col">
        <p className="font-semibold text-stone-900 mb-3">Votre commande · 2 articles</p>
        {[
          { n: 'Sac cabas Léo', v: 'Sable · M', p: '149,00 €', qty: 1, tone: 'from-amber-100 to-stone-200' },
          { n: 'Écharpe Oslo', v: 'Indigo', p: '89,00 €', qty: 1, tone: 'from-slate-100 to-slate-200' },
        ].map((item) => (
          <div key={item.n} className="flex items-center gap-2 py-2 border-b border-stone-100 last:border-0">
            <div className={`relative h-11 w-11 rounded-md bg-gradient-to-br ${item.tone} flex-shrink-0`}>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-stone-900 text-white text-[9px] flex items-center justify-center">
                {item.qty}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-stone-900 leading-tight truncate">{item.n}</p>
              <p className="text-[9.5px] text-stone-500">{item.v}</p>
            </div>
            <p className="font-medium text-stone-900">{item.p}</p>
          </div>
        ))}

        {/* Code promo */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-7 rounded-md border border-stone-200 bg-stone-50 flex items-center px-2 text-[10px] text-stone-500">
            Code promo <span className="ml-auto text-stone-900 font-medium">BIENVENUE10</span>
          </div>
          <div className="h-7 px-3 rounded-md border border-stone-300 text-stone-700 flex items-center text-[10px] font-medium">
            Appliquer
          </div>
        </div>

        <div className="mt-3 space-y-1 text-stone-600">
          <div className="flex justify-between">
            <span>Sous-total</span>
            <span>238,00 €</span>
          </div>
          <div className="flex justify-between">
            <span>Remise (BIENVENUE10)</span>
            <span className="text-emerald-600">−23,80 €</span>
          </div>
          <div className="flex justify-between">
            <span>Livraison point relais</span>
            <span className="text-emerald-600 font-medium">Offerte</span>
          </div>
          <div className="flex justify-between font-semibold text-stone-900 pt-2 border-t border-stone-100 mt-2">
            <span>Total TTC</span>
            <span>214,20 €</span>
          </div>
          <p className="text-[9.5px] text-stone-500">ou 3× 71,40 € sans frais avec Alma</p>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[9px] text-stone-500 bg-stone-50 rounded-md p-2 border border-stone-100">
          <span className="h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[8px]">
            🔒
          </span>
          <span>Paiement sécurisé · Visa, Mastercard, Apple Pay, Google Pay</span>
        </div>
      </aside>
    </div>
  </div>
)

const ShopMobile = () => (
  <div className="w-full h-full bg-white text-[10px] text-stone-700 flex flex-col overflow-hidden">
    <header className="px-4 pt-3 pb-2 flex items-center justify-between">
      <span className="text-stone-500 text-[10px]">☰</span>
      <span className="font-semibold text-stone-900 tracking-[0.2em] text-[11px]">ATELIER NORD</span>
      <div className="relative">
        <span className="text-stone-600">🛒</span>
        <span className="absolute -top-1 -right-2 h-3.5 w-3.5 rounded-full bg-stone-900 text-white text-[8px] flex items-center justify-center">
          2
        </span>
      </div>
    </header>

    {/* Recherche */}
    <div className="px-4">
      <div className="h-7 rounded-full bg-stone-100 border border-stone-200 flex items-center px-3 text-stone-500 text-[10px]">
        ⌕ <span className="ml-2">Rechercher un produit…</span>
      </div>
    </div>

    {/* Categories scroll */}
    <div className="flex gap-1.5 px-4 mt-2 overflow-hidden">
      {[
        { l: 'Tout', on: true },
        { l: 'Sacs' },
        { l: 'Shoes' },
        { l: 'Robes' },
        { l: 'Accessoires' },
      ].map((c) => (
        <span
          key={c.l}
          className={`h-6 px-2.5 rounded-full text-[9.5px] flex items-center ${
            c.on ? 'bg-stone-900 text-white' : 'border border-stone-200 text-stone-600'
          }`}
        >
          {c.l}
        </span>
      ))}
    </div>

    {/* Hero */}
    <div className="mx-4 mt-3 rounded-xl bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100 p-3 h-24 flex flex-col justify-end relative overflow-hidden">
      <p className="text-[9px] uppercase tracking-[0.18em] text-stone-700">Printemps 2024</p>
      <p className="text-[12.5px] font-semibold text-stone-900 leading-tight">
        Matières nobles, coupes sculptées.
      </p>
      <div className="mt-1 h-5 w-20 rounded-full bg-stone-900 text-white text-[9px] flex items-center justify-center font-medium">
        Découvrir →
      </div>
      <span aria-hidden className="absolute right-1 top-1 h-12 w-12 rounded-full bg-amber-200/70 blur-2xl" />
    </div>

    {/* Filtres rapides */}
    <div className="flex items-center justify-between px-4 mt-3">
      <p className="font-semibold text-stone-900 text-[11px]">Nouveautés</p>
      <div className="flex items-center gap-1.5 text-stone-500 text-[9px]">
        <span>Filtres</span>
        <span>· Trier ▾</span>
      </div>
    </div>

    {/* Grille produits */}
    <div className="grid grid-cols-2 gap-2.5 px-4 mt-2 flex-1 overflow-hidden">
      {[
        { title: 'Sac cabas Léo', price: '149 €', tone: 'from-amber-100 to-stone-200', tag: 'Nouveau', note: 5, reviews: 184 },
        { title: 'Écharpe Oslo', price: '89 €', tone: 'from-slate-100 to-slate-200', note: 4, reviews: 96 },
        { title: 'Bottines Nina', price: '239 €', old: '299 €', tone: 'from-stone-200 to-stone-300', tag: '-20%', note: 5, reviews: 212 },
        { title: 'Pull Cachemire', price: '189 €', tone: 'from-amber-100 to-orange-100', note: 5, reviews: 158 },
      ].map((p) => (
        <div key={p.title} className="rounded-xl border border-stone-200 overflow-hidden bg-white">
          <div className={`relative aspect-square bg-gradient-to-br ${p.tone}`}>
            {p.tag && (
              <span
                className={`absolute top-1.5 left-1.5 text-[8.5px] font-medium px-1.5 py-0.5 rounded ${
                  p.tag === '-20%' ? 'bg-stone-900 text-white' : 'bg-white text-stone-900 border border-stone-200'
                }`}
              >
                {p.tag}
              </span>
            )}
            <span className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-white/90 text-[9px] text-stone-600 flex items-center justify-center">
              ♡
            </span>
          </div>
          <div className="p-1.5">
            <p className="text-stone-900 font-medium leading-tight truncate">{p.title}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <p className="text-stone-900 text-[10px]">{p.price}</p>
              {p.old && <p className="text-stone-400 line-through text-[9px]">{p.old}</p>}
            </div>
            <div className="flex items-center gap-0.5 mt-0.5">
              <StarRow note={p.note} size="text-[7.5px]" />
              <span className="text-stone-400 text-[8.5px]">({p.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Tab bar */}
    <nav className="border-t border-stone-200 bg-white flex justify-around py-2 mt-2">
      {[
        { n: 'Accueil', active: true },
        { n: 'Shop' },
        { n: 'Wishlist' },
        { n: 'Compte' },
      ].map((t) => (
        <div key={t.n} className="flex flex-col items-center gap-0.5">
          <div className={`h-3.5 w-3.5 rounded ${t.active ? 'bg-stone-900' : 'bg-stone-300'}`} />
          <span className={`text-[8.5px] ${t.active ? 'text-stone-900 font-medium' : 'text-stone-500'}`}>{t.n}</span>
        </div>
      ))}
    </nav>
  </div>
)

/* -------------------------------- Router -------------------------------- */

const renderVariant = (variant: ProjectMockupVariant) => {
  switch (variant) {
    case 'hr-dashboard':
      return <HRDashboard />
    case 'hr-leaves':
      return <HRLeaves />
    case 'hr-expenses':
      return <HRExpenses />
    case 'hr-mobile':
      return <HRMobile />
    case 'shop-storefront':
      return <ShopStorefront />
    case 'shop-product':
      return <ShopProduct />
    case 'shop-checkout':
      return <ShopCheckout />
    case 'shop-mobile':
      return <ShopMobile />
    default:
      return null
  }
}

export default function ProjectMockup({
  mockup,
  className = '',
  priority = false,
  sizes,
}: ProjectMockupProps) {
  const hasImage = Boolean(mockup.src)

  if (mockup.kind === 'browser') {
    return (
      <figure className={`w-full ${className}`}>
        <div className="rounded-2xl border border-[var(--color-border-soft)] bg-white overflow-hidden shadow-soft">
          {/* Barre de navigateur */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-page-warm)]"
            aria-hidden
          >
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 h-5 rounded-md bg-white border border-[var(--color-border)]" />
          </div>
          {/* Écran */}
          <div className="relative aspect-[16/9] bg-[var(--color-page-warm)]">
            {hasImage ? (
              <Image
                src={mockup.src as string}
                alt={mockup.alt}
                fill
                priority={priority}
                loading={priority ? undefined : 'lazy'}
                sizes={sizes ?? '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1040px'}
                className="object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0">{mockup.variant && renderVariant(mockup.variant)}</div>
            )}
          </div>
        </div>
        {mockup.caption && (
          <figcaption className="mt-3 text-[13px] text-[var(--color-muted)]">
            {mockup.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // Phone
  if (hasImage) {
    return (
      <figure className={`w-full flex flex-col items-center ${className}`}>
        <div className="relative w-full max-w-[260px] aspect-[9/19]">
          <Image
            src={mockup.src as string}
            alt={mockup.alt}
            fill
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            sizes={sizes ?? '(max-width: 768px) 60vw, 260px'}
            className="object-contain drop-shadow-xl"
          />
        </div>
        {mockup.caption && (
          <figcaption className="mt-4 text-[13px] text-[var(--color-muted)] text-center">
            {mockup.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // Phone avec variant CSS : on dessine un iPhone frame
  return (
    <figure className={`w-full flex flex-col items-center ${className}`}>
      <div className="relative mx-auto w-[240px] h-[490px] rounded-[42px] bg-[var(--color-ink)] p-[10px] shadow-soft">
        <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-white">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black/90 z-10" aria-hidden />
          <div className="absolute inset-0 pt-6">{mockup.variant && renderVariant(mockup.variant)}</div>
        </div>
      </div>
      {mockup.caption && (
        <figcaption className="mt-4 text-[13px] text-[var(--color-muted)] text-center">
          {mockup.caption}
        </figcaption>
      )}
    </figure>
  )
}
