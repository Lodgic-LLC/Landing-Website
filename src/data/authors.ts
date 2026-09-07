import { SITE_URL } from '@/lib/site'

export interface Author {
  slug: string
  name: string
  jobTitle: string
  bio: string
  image?: string
  sameAs?: string[]
  email?: string
}

const AUTHORS: Record<string, Author> = {
  'yann-rouquie': {
    slug: 'yann-rouquie',
    name: 'Yann Rouquie',
    jobTitle: 'Ingénieur en informatique · Développeur web & mobile',
    bio: "Ingénieur en informatique, Yann conçoit et développe des sites web, des applications mobiles et des logiciels sur mesure depuis Toulouse, pour des TPE, PME et porteurs de projet. Il travaille seul, du cadrage à la mise en ligne.",
    sameAs: [
      'https://linkedin.com/in/yann-rouquie',
      'https://github.com/lodgic-llc',
    ],
  },
  'equipe-lodgic': {
    slug: 'equipe-lodgic',
    name: "L'équipe Lodgic",
    jobTitle: 'Agence de développement web et mobile',
    bio: "L'équipe Lodgic conçoit et développe des sites web, applications mobiles et logiciels sur mesure pour startups, PME et entrepreneurs depuis Toulouse.",
    sameAs: ['https://linkedin.com/company/lodgic-dev'],
  },
}

const slugifyName = (name: string): string =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const getAuthorBySlug = (slug: string): Author | null => AUTHORS[slug] ?? null

export const getAuthorByName = (name: string): Author => {
  const slug = slugifyName(name)
  if (AUTHORS[slug]) return AUTHORS[slug]

  return {
    slug,
    name,
    jobTitle: 'Auteur',
    bio: `${name} contribue au blog de Lodgic.`,
  }
}

export const getAllAuthors = (): Author[] => Object.values(AUTHORS)

export const getAuthorUrl = (slug: string): string => `${SITE_URL}/auteurs/${slug}`
