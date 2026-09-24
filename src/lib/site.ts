export const SITE_URL = 'https://www.lodgic-dev.com'
export const SITE_NAME = 'Lodgic'

export const SITE_DESCRIPTION =
  "Yann, ingénieur en informatique à Toulouse. Conception et développement de sites web, d'applications mobiles et de logiciels sur mesure pour les TPE, PME et porteurs de projet."
export const OWNER_NAME = 'Yann'
export const OWNER_TITLE = 'Ingénieur en informatique, développeur web, mobile et logiciel'

export const CONTACT_EMAIL = 'contact@lodgic-dev.com'
export const CONTACT_PHONE = '+33643517157'
export const CONTACT_PHONE_DISPLAY = '06 43 51 71 57'

// NAP : à compléter avec les vraies valeurs (sinon laisser vide, le schema les omet)
export const STREET_ADDRESS = '2 impasse Pierre Maurand'
export const POSTAL_CODE = '31400'
export const ADDRESS_LOCALITY = 'Toulouse'
export const ADDRESS_REGION = 'Occitanie'
export const ADDRESS_COUNTRY = 'FR'

// Coordonnées géographiques (lat/lng) : à compléter pour le local pack
export const GEO_LATITUDE = ''
export const GEO_LONGITUDE = ''

// Horaires d'ouverture au format Schema.org OpeningHoursSpecification
// Exemple : [{ dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }]
export const OPENING_HOURS: Array<{
  dayOfWeek: string[]
  opens: string
  closes: string
}> = []

export const PRICE_RANGE = '€€'

// Wikidata entity QID (e.g. 'Q12345') : laisser vide tant que l'entité n'existe pas.
// Après création sur https://www.wikidata.org/wiki/Special:NewItem :
//   - P856 (official website)  → https://www.lodgic-dev.com
//   - P131 (located in)         → Q7880 (Toulouse)
//   - P452 (industry)           → Q638328 (software development)
//   - P17  (country)            → Q142 (France)
// Une fois l'entité publiée, mettre le QID ici (sans 'https://...', juste 'Qxxxx').
export const WIKIDATA_QID = ''

// Fiche Google Business Profile : laisser vide tant que le lien n'est pas fourni :
// le schéma et le pied de page l'omettent automatiquement.
export const GOOGLE_BUSINESS_URL = ''

export const SOCIAL_PROFILES = [
  'https://github.com/lodgic-llc',
  'https://linkedin.com/company/lodgic-dev',
]
