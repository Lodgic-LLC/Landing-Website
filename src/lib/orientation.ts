/** Orientation indicative : aucun tarif, aucun score et aucune donnée personnelle. */
export type Audience = 'public' | 'clients' | 'equipe'
export type Usage = 'ponctuel' | 'regulier' | 'telephone'
export type Existing = 'nouveau' | 'existant'
export type Orientation = 'site' | 'application' | 'outil' | 'reprise'
export interface Answers { audience: Audience | ''; usage: Usage | ''; existing: Existing | '' }

export function orientProject(answers: Answers): Orientation | null {
  if (!answers.audience || !answers.usage || !answers.existing) return null
  if (answers.existing === 'existant') return answers.audience === 'public' ? 'site' : 'reprise'
  if (answers.audience === 'equipe') return 'outil'
  if (answers.usage === 'telephone' || (answers.audience === 'clients' && answers.usage === 'regulier')) return 'application'
  return 'site'
}
