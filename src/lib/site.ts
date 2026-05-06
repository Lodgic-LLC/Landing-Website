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
