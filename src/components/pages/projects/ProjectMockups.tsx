import type { ReactNode } from 'react'

const NAVY = '#001F45'
const INK = '#162869'
const SURFACE = '#f6f7fc'

type FrameProps = { children: ReactNode; title?: string }

export const PhoneFrame = ({ children, title }: FrameProps) => {
  return (
    <div className="mx-auto w-[260px] md:w-[280px]">
      <div className="relative rounded-[44px] border border-[#001F45]/15 bg-[#0a1a33] p-2 shadow-[0_20px_60px_-20px_rgba(0,31,69,0.4)]">
        <div className="absolute left-1/2 top-1 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-[#0a1a33]" />
        <div className="relative overflow-hidden rounded-[36px] bg-white">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-medium text-[#001F45]/70">
            <span>9:41</span>
            <span>●●● 100%</span>
          </div>
          <div className="h-[480px] overflow-hidden px-3 pb-4">{children}</div>
        </div>
      </div>
      {title ? (
        <p className="mt-3 text-center text-xs text-[#162869]/70">{title}</p>
      ) : null}
    </div>
  )
}

export const BrowserFrame = ({ children, title, url = 'lodgic-app.com' }: FrameProps & { url?: string }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#001F45]/10 bg-white shadow-[0_20px_60px_-30px_rgba(0,31,69,0.35)]">
      <div className="flex items-center gap-2 border-b border-[#001F45]/10 bg-[#f6f7fc] px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1">
          <div className="mx-auto w-3/5 truncate rounded-md border border-[#001F45]/10 bg-white px-3 py-1 text-center text-[11px] text-[#162869]/80">
            {url}
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5">{children}</div>
      {title ? (
        <div className="border-t border-[#001F45]/10 bg-[#f6f7fc] px-4 py-2 text-center text-xs text-[#162869]/70">
          {title}
        </div>
      ) : null}
    </div>
  )
}

export const HousePhoneScreen = () => (
  <div className="flex h-full flex-col">
    <p className="mt-1 text-[11px]" style={{ color: INK + 'B3' }}>
      Bonjour, Yann
    </p>
    <p className="text-sm font-semibold" style={{ color: NAVY }}>
      Vue propriétaire
    </p>

    <div className="mt-3 rounded-xl p-3" style={{ background: SURFACE }}>
      <p className="text-[11px]" style={{ color: INK + 'B3' }}>
        Loyers ce mois
      </p>
      <p className="text-xl font-semibold" style={{ color: NAVY }}>
        4 820 €
      </p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-white">
        <div className="h-full w-3/4 rounded-full" style={{ background: NAVY }} />
      </div>
      <p className="mt-2 text-[10px]" style={{ color: INK + 'B3' }}>
        78 % des loyers reçus
      </p>
    </div>

    <p className="mt-4 text-xs font-semibold" style={{ color: NAVY }}>
      Incidents en cours
    </p>
    <div className="mt-2 space-y-2">
      {[
        ['Fuite salle de bain', 'Appartement 2B', 'Urgent'],
        ['Chauffe-eau', 'Studio 5', 'En cours'],
        ['Clé perdue', 'T3 - Rangueil', 'Nouveau'],
      ].map(([title, place, status]) => (
        <div key={title} className="rounded-lg border border-[#001F45]/10 p-2">
          <p className="text-[11px] font-medium" style={{ color: NAVY }}>
            {title}
          </p>
          <p className="text-[10px]" style={{ color: INK + 'B3' }}>
            {place}
          </p>
          <span className="mt-1 inline-block rounded-full bg-[#001F45]/5 px-2 py-0.5 text-[9px]" style={{ color: NAVY }}>
            {status}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-auto grid grid-cols-4 gap-2 pt-3">
      {['Accueil', 'Biens', 'Paiements', 'Plus'].map((tab, i) => (
        <div key={tab} className="flex flex-col items-center text-[9px]" style={{ color: i === 0 ? NAVY : INK + '99' }}>
          <div className={`h-1 w-6 rounded-full ${i === 0 ? 'bg-[#001F45]' : 'bg-transparent'}`} />
          <span className="mt-1">{tab}</span>
        </div>
      ))}
    </div>
  </div>
)

export const HouseTenantScreen = () => (
  <div className="flex h-full flex-col">
    <p className="mt-1 text-[11px]" style={{ color: INK + 'B3' }}>
      Bonjour, Sarah
    </p>
    <p className="text-sm font-semibold" style={{ color: NAVY }}>
      Mon logement
    </p>

    <div className="mt-3 rounded-xl border border-[#001F45]/10 p-3">
      <p className="text-[11px]" style={{ color: INK + 'B3' }}>
        Prochain loyer
      </p>
      <p className="text-base font-semibold" style={{ color: NAVY }}>
        720 € · 5 avril
      </p>
      <button className="mt-2 w-full rounded-lg py-1.5 text-[11px] font-medium text-white" style={{ background: NAVY }}>
        Payer maintenant
      </button>
    </div>

    <p className="mt-3 text-xs font-semibold" style={{ color: NAVY }}>
      Signaler un incident
    </p>
    <div className="mt-2 grid grid-cols-2 gap-2">
      {['Plomberie', 'Électricité', 'Chauffage', 'Autre'].map((c) => (
        <div key={c} className="rounded-lg border border-[#001F45]/10 p-2 text-[11px]" style={{ color: NAVY }}>
          {c}
        </div>
      ))}
    </div>

    <p className="mt-3 text-xs font-semibold" style={{ color: NAVY }}>
      Messages
    </p>
    <div className="mt-2 space-y-2">
      <div className="rounded-lg bg-[#001F45]/5 p-2 text-[11px]" style={{ color: NAVY }}>
        Votre intervention est planifiée pour demain 10h.
      </div>
      <div className="rounded-lg border border-[#001F45]/10 p-2 text-[11px]" style={{ color: NAVY }}>
        Merci, à demain !
      </div>
    </div>
  </div>
)

export const RhDashboardScreen = () => (
  <div className="grid grid-cols-12 gap-3">
    <div className="col-span-3 rounded-xl border border-[#001F45]/10 bg-[#f6f7fc] p-3">
      <p className="text-[11px] font-semibold" style={{ color: NAVY }}>
        RH
      </p>
      <ul className="mt-3 space-y-1.5 text-[11px]" style={{ color: INK + 'CC' }}>
        {['Tableau de bord', 'Équipe', 'Congés', 'Notes de frais', 'Onboarding', 'Paramètres'].map((item, i) => (
          <li
            key={item}
            className={`rounded-md px-2 py-1 ${i === 0 ? 'bg-white font-medium' : ''}`}
            style={i === 0 ? { color: NAVY } : undefined}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="col-span-9 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold" style={{ color: NAVY }}>
            Bonjour, Camille
          </p>
          <p className="text-[11px]" style={{ color: INK + 'B3' }}>
            Voici ce qui se passe aujourd’hui · Mars 2024
          </p>
        </div>
        <button className="rounded-lg px-3 py-1.5 text-[11px] font-medium text-white" style={{ background: NAVY }}>
          Nouvelle demande
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          ['Demandes en attente', '12', '+3'],
          ['Congés posés', '48', '+8'],
          ['Notes de frais', '27', '−2'],
          ['Nouveaux arrivants', '3', 'ce mois'],
        ].map(([label, value, diff]) => (
          <div key={label} className="rounded-lg border border-[#001F45]/10 p-2">
            <p className="text-[10px]" style={{ color: INK + 'B3' }}>
              {label}
            </p>
            <p className="text-base font-semibold" style={{ color: NAVY }}>
              {value}
            </p>
            <p className="text-[10px]" style={{ color: INK + '99' }}>
              {diff}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-[#001F45]/10 p-3">
        <p className="text-[11px] font-semibold" style={{ color: NAVY }}>
          Demandes récentes
        </p>
        <div className="mt-2 space-y-1.5">
          {[
            ['Paul M.', 'Congés', 'En attente'],
            ['Sarah L.', 'Note de frais', 'Validée'],
            ['Karim B.', 'Télétravail', 'En attente'],
            ['Julia R.', 'Congés', 'Refusée'],
          ].map(([n, t, s]) => (
            <div key={n} className="flex items-center justify-between text-[11px]" style={{ color: NAVY }}>
              <span className="font-medium">{n}</span>
              <span style={{ color: INK + 'B3' }}>{t}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const RhExpensesScreen = () => (
  <div>
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold" style={{ color: NAVY }}>
        Notes de frais à valider
      </p>
      <span className="text-[11px]" style={{ color: INK + 'B3' }}>
        12 en attente de validation
      </span>
    </div>
    <div className="mt-3 overflow-hidden rounded-lg border border-[#001F45]/10">
      <div className="grid grid-cols-5 bg-[#f6f7fc] px-3 py-2 text-[10px] font-medium" style={{ color: INK + 'B3' }}>
        <span>Collaborateur</span>
        <span>Catégorie</span>
        <span>Montant</span>
        <span>Date</span>
        <span>Statut</span>
      </div>
      {[
        ['Paul Martin', 'Déplacement', '248,90 €', '12 mars', 'En attente'],
        ['Sarah Legrand', 'Repas client', '86,50 €', '12 mars', 'En attente'],
        ['Karim Bouaziz', 'Hôtel', '312,00 €', '11 mars', 'Validée'],
        ['Julia Renaud', 'Fourniture', '45,20 €', '11 mars', 'En attente'],
        ['Louis Pernod', 'Déplacement', '142,00 €', '09 mars', 'Validée'],
      ].map((row) => (
        <div key={row[0]} className="grid grid-cols-5 border-t border-[#001F45]/10 px-3 py-2 text-[11px]" style={{ color: NAVY }}>
          {row.map((cell, i) => (
            <span key={i}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export const RhMobileScreen = () => (
  <div className="flex h-full flex-col">
    <p className="mt-1 text-[11px]" style={{ color: INK + 'B3' }}>
      Bonjour,
    </p>
    <p className="text-sm font-semibold" style={{ color: NAVY }}>
      Paul Martin
    </p>
    <div className="mt-3 rounded-xl p-3" style={{ background: SURFACE }}>
      <p className="text-[11px]" style={{ color: INK + 'B3' }}>
        Solde de congés
      </p>
      <p className="text-xl font-semibold" style={{ color: NAVY }}>
        18,5 jours
      </p>
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2">
      {['Poser un congé', 'Note de frais', 'Mes documents'].map((a) => (
        <div key={a} className="rounded-lg border border-[#001F45]/10 p-2 text-[10px]" style={{ color: NAVY }}>
          {a}
        </div>
      ))}
    </div>
    <p className="mt-3 text-xs font-semibold" style={{ color: NAVY }}>
      Demandes en cours
    </p>
    <div className="mt-2 space-y-2">
      <div className="rounded-lg border border-[#001F45]/10 p-2">
        <p className="text-[11px] font-medium" style={{ color: NAVY }}>
          Congés — 3 jours
        </p>
        <p className="text-[10px]" style={{ color: INK + 'B3' }}>
          15 au 17 mars · En attente
        </p>
      </div>
      <div className="rounded-lg border border-[#001F45]/10 p-2">
        <p className="text-[11px] font-medium" style={{ color: NAVY }}>
          Note de frais — 248,90 €
        </p>
        <p className="text-[10px]" style={{ color: INK + 'B3' }}>
          Trajet client · Validée
        </p>
      </div>
    </div>
    <div className="mt-auto grid grid-cols-4 gap-2 pt-3">
      {['Accueil', 'Équipe', 'Docs', 'Profil'].map((t, i) => (
        <div key={t} className="text-center text-[9px]" style={{ color: i === 0 ? NAVY : INK + '99' }}>
          {t}
        </div>
      ))}
    </div>
  </div>
)

export const ShopHomeScreen = () => (
  <div>
    <div className="flex items-center justify-between border-b border-[#001F45]/10 pb-2 text-[11px]" style={{ color: INK + 'B3' }}>
      <span>Livraison offerte dès 80 € · Retour gratuit 30 jours</span>
      <span>FR ▾ · Aide · Mon compte</span>
    </div>
    <div className="mt-3 flex items-center justify-between">
      <p className="text-sm font-semibold tracking-widest" style={{ color: NAVY }}>
        MAISON MODE
      </p>
      <div className="flex gap-3 text-[11px]" style={{ color: NAVY }}>
        <span>Femme</span>
        <span>Homme</span>
        <span>Accessoires</span>
        <span>Lookbook</span>
        <span>Journal</span>
      </div>
      <div className="text-[11px]" style={{ color: NAVY }}>
        ⌕  ♡  Panier 2
      </div>
    </div>

    <div className="mt-3 rounded-xl p-5" style={{ background: SURFACE }}>
      <p className="text-[10px] uppercase tracking-widest" style={{ color: INK + 'B3' }}>
        Printemps 2024
      </p>
      <p className="mt-1 text-lg font-semibold" style={{ color: NAVY }}>
        Matières nobles, coupes sculptées.
      </p>
      <button className="mt-2 text-[11px] font-medium" style={{ color: NAVY }}>
        Découvrir →
      </button>
    </div>

    <div className="mt-3 grid grid-cols-4 gap-2">
      {[
        ['Sac cabas Léo', '149 €', 'Nouveau'],
        ['Écharpe Oslo', '89 €', ''],
        ['Bottines Nina', '239 €', '-20%'],
        ['Ceinture Lune', '64 €', ''],
      ].map(([title, price, tag]) => (
        <div key={title} className="rounded-lg border border-[#001F45]/10 p-2">
          <div className="h-16 rounded-md" style={{ background: SURFACE }} />
          <div className="mt-1 flex items-center justify-between text-[10px]" style={{ color: INK + 'B3' }}>
            <span>{tag}</span>
            <span>♡</span>
          </div>
          <p className="mt-0.5 text-[11px] font-medium" style={{ color: NAVY }}>
            {title}
          </p>
          <p className="text-[11px]" style={{ color: NAVY }}>
            {price}
          </p>
        </div>
      ))}
    </div>
  </div>
)

export const ShopCheckoutScreen = () => (
  <div>
    <p className="text-sm font-semibold" style={{ color: NAVY }}>
      Paiement sécurisé
    </p>
    <div className="mt-3 grid grid-cols-5 gap-3">
      <div className="col-span-3 space-y-2">
        {[
          ['Sac cabas Léo', '1 × 149 €'],
          ['Écharpe Oslo', '1 × 89 €'],
        ].map(([t, q]) => (
          <div key={t} className="flex items-center justify-between rounded-lg border border-[#001F45]/10 p-2 text-[11px]" style={{ color: NAVY }}>
            <span>{t}</span>
            <span>{q}</span>
          </div>
        ))}
        <div className="rounded-lg bg-[#001F45]/5 p-2 text-[11px]" style={{ color: NAVY }}>
          Code promo · PRINTEMPS10 appliqué — -23,80 €
        </div>
      </div>
      <div className="col-span-2 rounded-lg border border-[#001F45]/10 p-3 text-[11px]" style={{ color: NAVY }}>
        <div className="flex items-center justify-between">
          <span>Sous-total</span>
          <span>238 €</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span>Livraison</span>
          <span>Offerte</span>
        </div>
        <div className="mt-2 border-t border-[#001F45]/10 pt-2 font-semibold">
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span>214,20 €</span>
          </div>
        </div>
        <button className="mt-3 w-full rounded-lg py-1.5 text-[11px] font-medium text-white" style={{ background: NAVY }}>
          Payer avec Stripe
        </button>
        <p className="mt-2 text-[10px]" style={{ color: INK + '99' }}>
          CB · Apple Pay · 3× sans frais
        </p>
      </div>
    </div>
  </div>
)

/* ============================================================
   Écrans additionnels — pour enrichir les pages projets
   ============================================================ */

export const HouseIncidentScreen = () => (
  <div className="flex h-full flex-col">
    <p className="mt-1 text-[11px]" style={{ color: INK + 'B3' }}>
      Incident · #4218
    </p>
    <p className="text-sm font-semibold" style={{ color: NAVY }}>
      Fuite salle de bain
    </p>

    <div className="mt-3 rounded-xl p-3" style={{ background: SURFACE }}>
      <p className="text-[11px]" style={{ color: INK + 'B3' }}>
        Appartement 2B · 12 rue Jean Jaurès
      </p>
      <div className="mt-2 flex items-center gap-2">
        <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white" style={{ background: '#e11d48' }}>
          Urgent
        </span>
        <span className="rounded-full bg-white px-2 py-0.5 text-[9px]" style={{ color: NAVY }}>
          Ouvert · 2 h
        </span>
      </div>
    </div>

    <p className="mt-4 text-xs font-semibold" style={{ color: NAVY }}>
      Suivi
    </p>
    <div className="mt-2 space-y-2">
      {[
        ['Déclaration', 'Locataire · 10:12'],
        ['Prise en charge', 'Propriétaire · 10:24'],
        ['Artisan dépêché', 'En route · 11:00'],
      ].map(([t, sub], i) => (
        <div key={t} className="flex items-start gap-2">
          <span
            className="mt-1 h-2 w-2 rounded-full"
            style={{ background: i === 2 ? NAVY : INK + '55' }}
          />
          <div>
            <p className="text-[11px] font-medium" style={{ color: NAVY }}>
              {t}
            </p>
            <p className="text-[10px]" style={{ color: INK + 'B3' }}>
              {sub}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-auto rounded-xl p-3 text-white" style={{ background: NAVY }}>
      <p className="text-[11px] font-medium">Contacter l'artisan</p>
      <p className="text-[10px] opacity-80">Arrivée estimée · 14h30</p>
    </div>
  </div>
)

export const HousePaymentScreen = () => (
  <div className="flex h-full flex-col">
    <p className="mt-1 text-[11px]" style={{ color: INK + 'B3' }}>
      Loyers · Avril 2024
    </p>
    <p className="text-sm font-semibold" style={{ color: NAVY }}>
      Vue paiements
    </p>

    <div className="mt-3 rounded-xl p-3" style={{ background: SURFACE }}>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px]" style={{ color: INK + 'B3' }}>
            Encaissé ce mois
          </p>
          <p className="text-xl font-semibold" style={{ color: NAVY }}>
            12 460 €
          </p>
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium" style={{ color: NAVY }}>
          +8 %
        </span>
      </div>
      <div className="mt-3 flex items-end gap-1.5">
        {[40, 65, 50, 72, 60, 88, 78].map((h, i) => (
          <div
            key={i}
            className="w-full rounded-t"
            style={{ height: h, background: i === 5 ? NAVY : '#001F4533' }}
          />
        ))}
      </div>
    </div>

    <p className="mt-4 text-xs font-semibold" style={{ color: NAVY }}>
      À relancer
    </p>
    <div className="mt-2 space-y-2">
      {[
        ['Studio 5 — Rangueil', '720 €', 'Retard 4 j'],
        ['T3 — Minimes', '980 €', 'Retard 2 j'],
      ].map(([t, amt, state]) => (
        <div key={t} className="flex items-center justify-between rounded-lg border border-[#001F45]/10 p-2">
          <div>
            <p className="text-[11px] font-medium" style={{ color: NAVY }}>
              {t}
            </p>
            <p className="text-[10px]" style={{ color: '#e11d48' }}>
              {state}
            </p>
          </div>
          <p className="text-[11px] font-semibold" style={{ color: NAVY }}>
            {amt}
          </p>
        </div>
      ))}
    </div>

    <button className="mt-auto w-full rounded-lg py-2 text-[11px] font-medium text-white" style={{ background: NAVY }}>
      Envoyer les relances
    </button>
  </div>
)

export const RhLeaveCalendarScreen = () => (
  <div>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold" style={{ color: NAVY }}>
          Calendrier des congés
        </p>
        <p className="text-[11px]" style={{ color: INK + 'B3' }}>
          Équipe Produit — mars 2024
        </p>
      </div>
      <div className="flex gap-2">
        <button className="rounded-lg border border-[#001F45]/10 bg-white px-3 py-1 text-[11px]" style={{ color: NAVY }}>
          Filtrer
        </button>
        <button className="rounded-lg px-3 py-1 text-[11px] font-medium text-white" style={{ background: NAVY }}>
          Poser un congé
        </button>
      </div>
    </div>

    <div className="mt-3 overflow-hidden rounded-lg border border-[#001F45]/10">
      <div className="grid grid-cols-[120px_repeat(20,minmax(0,1fr))] bg-[#f6f7fc] px-2 py-1 text-[9px] font-medium" style={{ color: INK + 'B3' }}>
        <span>Collaborateur</span>
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="text-center">
            {i + 4}
          </span>
        ))}
      </div>
      {[
        { name: 'Paul M.', start: 2, span: 4, type: 'leave' },
        { name: 'Sarah L.', start: 7, span: 2, type: 'remote' },
        { name: 'Karim B.', start: 10, span: 3, type: 'leave' },
        { name: 'Julia R.', start: 4, span: 2, type: 'sick' },
        { name: 'Louis P.', start: 14, span: 5, type: 'leave' },
        { name: 'Inès T.', start: 6, span: 3, type: 'remote' },
      ].map((row) => {
        const color =
          row.type === 'leave' ? NAVY : row.type === 'remote' ? '#6366F1' : '#F97316'
        return (
          <div key={row.name} className="grid grid-cols-[120px_repeat(20,minmax(0,1fr))] items-center border-t border-[#001F45]/10 px-2 py-1 text-[10px]" style={{ color: NAVY }}>
            <span className="font-medium">{row.name}</span>
            {Array.from({ length: 20 }, (_, i) => {
              const inside = i >= row.start && i < row.start + row.span
              return (
                <div key={i} className="px-0.5">
                  <div
                    className="h-3 rounded"
                    style={{ background: inside ? color : '#001F4511' }}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>

    <div className="mt-2 flex items-center gap-3 text-[10px]" style={{ color: INK + 'B3' }}>
      <span className="inline-flex items-center gap-1">
        <span className="h-2 w-2 rounded" style={{ background: NAVY }} />
        Congés
      </span>
      <span className="inline-flex items-center gap-1">
        <span className="h-2 w-2 rounded" style={{ background: '#6366F1' }} />
        Télétravail
      </span>
      <span className="inline-flex items-center gap-1">
        <span className="h-2 w-2 rounded" style={{ background: '#F97316' }} />
        Maladie / RTT
      </span>
    </div>
  </div>
)

export const RhOnboardingScreen = () => (
  <div>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold" style={{ color: NAVY }}>
          Onboarding — Lucas Reynaud
        </p>
        <p className="text-[11px]" style={{ color: INK + 'B3' }}>
          Arrivée · 18 mars · Product Designer
        </p>
      </div>
      <span className="rounded-full bg-[#16a34a]/10 px-2 py-0.5 text-[10px] font-medium" style={{ color: '#16a34a' }}>
        67 % complété
      </span>
    </div>

    <div className="mt-3 grid grid-cols-3 gap-3">
      {[
        ['Administratif', 3, 3, '#16a34a'],
        ['Matériel & accès', 4, 5, NAVY],
        ['Formation', 2, 4, '#6366F1'],
      ].map(([label, done, total, color]) => (
        <div key={String(label)} className="rounded-lg border border-[#001F45]/10 p-3">
          <p className="text-[10px]" style={{ color: INK + 'B3' }}>
            {label}
          </p>
          <p className="text-base font-semibold" style={{ color: NAVY }}>
            {done} / {total}
          </p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-[#001F4511]">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(Number(done) / Number(total)) * 100}%`,
                background: String(color),
              }}
            />
          </div>
        </div>
      ))}
    </div>

    <p className="mt-4 text-[11px] font-semibold" style={{ color: NAVY }}>
      Checklist
    </p>
    <div className="mt-2 space-y-1.5">
      {[
        ['Signature contrat', true],
        ['Création comptes SSO', true],
        ['Poste de travail livré', true],
        ['Formation outillage produit', false],
        ['Rendez-vous RH J+30', false],
      ].map(([t, done]) => (
        <div key={String(t)} className="flex items-center justify-between rounded-lg border border-[#001F45]/10 px-3 py-2 text-[11px]" style={{ color: NAVY }}>
          <span className="flex items-center gap-2">
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded border"
              style={{
                borderColor: done ? NAVY : INK + '33',
                background: done ? NAVY : 'white',
                color: 'white',
              }}
            >
              {done ? '✓' : ''}
            </span>
            {t}
          </span>
          <span className="text-[10px]" style={{ color: INK + 'B3' }}>
            {done ? 'Fait' : 'À faire'}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export const ShopProductScreen = () => (
  <div>
    <div className="flex items-center justify-between text-[11px]" style={{ color: INK + 'B3' }}>
      <span>Accueil · Femme · Sacs</span>
      <span>⌕  ♡  Panier 2</span>
    </div>
    <div className="mt-3 grid grid-cols-5 gap-3">
      <div className="col-span-3 rounded-xl p-4" style={{ background: SURFACE }}>
        <div className="flex h-48 items-center justify-center rounded-lg bg-white">
          <div className="h-32 w-24 rounded-md" style={{ background: '#dedae0' }} />
        </div>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-10 rounded bg-white ring-1 ring-[#001F45]/10" />
          ))}
        </div>
      </div>
      <div className="col-span-2 flex flex-col">
        <p className="text-[10px] uppercase tracking-widest" style={{ color: INK + 'B3' }}>
          Printemps 2024
        </p>
        <p className="mt-1 text-base font-semibold" style={{ color: NAVY }}>
          Sac cabas Léo — cuir tanné
        </p>
        <p className="mt-1 text-sm" style={{ color: NAVY }}>
          149 €{' '}
          <span className="ml-1 text-[10px]" style={{ color: INK + '99' }}>
            · 4 avis ★★★★★
          </span>
        </p>
        <div className="mt-3">
          <p className="text-[10px] font-medium" style={{ color: INK + 'B3' }}>
            Couleur
          </p>
          <div className="mt-1 flex gap-1.5">
            {['#3b2a20', '#000', '#cfc4b6'].map((c) => (
              <span key={c} className="h-4 w-4 rounded-full ring-1 ring-[#001F45]/20" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="mt-3">
          <p className="text-[10px] font-medium" style={{ color: INK + 'B3' }}>
            Taille
          </p>
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            {['S', 'M', 'L'].map((s, i) => (
              <button
                key={s}
                className={`rounded-md border px-2 py-1 text-[10px] ${i === 1 ? 'text-white' : ''}`}
                style={{
                  borderColor: i === 1 ? NAVY : INK + '33',
                  background: i === 1 ? NAVY : 'white',
                  color: i === 1 ? 'white' : NAVY,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <button className="mt-auto rounded-lg py-2 text-[11px] font-medium text-white" style={{ background: NAVY }}>
          Ajouter au panier · 149 €
        </button>
        <p className="mt-2 text-[9px]" style={{ color: INK + '99' }}>
          Livraison offerte dès 80 € · Retour gratuit 30 jours
        </p>
      </div>
    </div>
  </div>
)

export const ShopCategoryScreen = () => (
  <div>
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold" style={{ color: NAVY }}>
        Nouveautés · Sacs
      </p>
      <div className="flex gap-2 text-[11px]" style={{ color: NAVY }}>
        <span className="rounded-full border border-[#001F45]/10 px-2 py-0.5">Trier · Popularité ▾</span>
        <span className="rounded-full border border-[#001F45]/10 px-2 py-0.5">Filtrer</span>
      </div>
    </div>
    <div className="mt-3 grid grid-cols-4 gap-3">
      {[
        ['Sac cabas Léo', '149 €', 'Nouveau', '#eeeae4'],
        ['Besace Milo', '129 €', '', '#e8e0d6'],
        ['Cabas Soho', '179 €', '-10%', '#ded6cb'],
        ['Sac bourse Elia', '199 €', '', '#dfd9d0'],
        ['Pochette Nuit', '89 €', '', '#cfc4b6'],
        ['Sac à dos Lux', '249 €', 'Nouveau', '#e6dfd4'],
        ['Tote Sol', '59 €', '', '#eee7dd'],
        ['Besace Jour', '139 €', '', '#d9d1c6'],
      ].map(([title, price, tag, color]) => (
        <div key={String(title)} className="rounded-lg border border-[#001F45]/10 p-2">
          <div className="relative h-20 rounded-md" style={{ background: String(color) }}>
            {tag ? (
              <span className="absolute left-1 top-1 rounded-full bg-white px-1.5 text-[9px] font-semibold" style={{ color: NAVY }}>
                {tag}
              </span>
            ) : null}
            <span className="absolute right-1 top-1 text-[11px]" style={{ color: NAVY }}>
              ♡
            </span>
          </div>
          <p className="mt-1 text-[11px] font-medium" style={{ color: NAVY }}>
            {title}
          </p>
          <p className="text-[10px]" style={{ color: INK + 'B3' }}>
            {price}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center justify-center gap-2 text-[11px]" style={{ color: NAVY }}>
      <span className="rounded border border-[#001F45]/15 px-2 py-0.5">‹</span>
      <span className="rounded bg-[#001F45] px-2 py-0.5 text-white">1</span>
      <span className="rounded border border-[#001F45]/15 px-2 py-0.5">2</span>
      <span className="rounded border border-[#001F45]/15 px-2 py-0.5">3</span>
      <span className="rounded border border-[#001F45]/15 px-2 py-0.5">›</span>
    </div>
  </div>
)

/* Composition multi-device pour mise en scène hero */
export const DeviceScene = ({ children }: { children: ReactNode }) => (
  <div className="relative rounded-3xl p-6 md:p-10 ring-1 ring-[#001F45]/5 bg-gradient-to-br from-[#eaf0ff] via-white to-[#f6f7fc] overflow-hidden">
    <div
      aria-hidden
      className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#001F45]/5 blur-3xl"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#DBFF00]/20 blur-3xl"
    />
    <div className="relative">{children}</div>
  </div>
)
