export const SITE_URL = 'https://www.lodgic-dev.com'
export const SITE_NAME = 'Lodgic'

export const SITE_DESCRIPTION =
  'Agence de developpement web et mobile a Toulouse. Lodgic conçoit des sites web, applications mobiles et logiciels sur mesure pour startups, PME et entrepreneurs.'

export const CONTACT_EMAIL = 'contact@lodgic-dev.com'
export const CONTACT_PHONE = '+33652468750'

// NAP — à compléter avec les vraies valeurs (sinon laisser vide, le schema les omet)
export const STREET_ADDRESS = '11 Impasse Pierre Maurand'
export const POSTAL_CODE = '31000'
export const ADDRESS_LOCALITY = 'Toulouse'
export const ADDRESS_REGION = 'Occitanie'
export const ADDRESS_COUNTRY = 'FR'

// Coordonnées géographiques (lat/lng) — à compléter pour le local pack
export const GEO_LATITUDE = '43.580360'
export const GEO_LONGITUDE = '1.491874'

// Horaires d'ouverture — au format Schema.org OpeningHoursSpecification
// Exemple : [{ dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }]
export const OPENING_HOURS: Array<{
  dayOfWeek: string[]
  opens: string
  closes: string
}> = [{ dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' }]

export const PRICE_RANGE = '€€'

// Wikidata entity QID (e.g. 'Q12345') — laisser vide tant que l'entité n'existe pas.
// Après création sur https://www.wikidata.org/wiki/Special:NewItem :
//   - P856 (official website)  → https://www.lodgic-dev.com
//   - P131 (located in)         → Q7880 (Toulouse)
//   - P452 (industry)           → Q638328 (software development)
//   - P17  (country)            → Q142 (France)
// Une fois l'entité publiée, mettre le QID ici (sans 'https://...', juste 'Qxxxx').
export const WIKIDATA_QID = ''

export const SOCIAL_PROFILES = [
  'https://github.com/lodgic-llc',
  'https://linkedin.com/company/lodgic-dev',
  'https://x.com/lodgic-dev',
]

