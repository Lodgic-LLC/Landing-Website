export type Phase = {
  number: number
  name: string
  range: string
  color: string
  accent: string
}

export const PHASES: Phase[] = [
  { number: 1, name: 'Cadrage & discovery', range: 'J1 – J5', color: 'bg-blue-500', accent: 'text-blue-600' },
  { number: 2, name: 'Design UI/UX', range: 'J6 – J14', color: 'bg-violet-500', accent: 'text-violet-600' },
  { number: 3, name: 'Développement', range: 'J15 – J35', color: 'bg-emerald-500', accent: 'text-emerald-600' },
  { number: 4, name: 'Tests & recette', range: 'J36 – J42', color: 'bg-amber-500', accent: 'text-amber-600' },
  { number: 5, name: 'Mise en production', range: 'J43 – J45', color: 'bg-lime-500', accent: 'text-lime-600' },
]
