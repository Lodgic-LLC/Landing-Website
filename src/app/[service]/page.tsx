import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageSeo from '@/components/PageSeo'
import { buildSeoMetadata } from '@/lib/seo'
import { PAGES_SERVICE, trouverPageService } from '@/content/pages-service'

/** Une page statique par entrée de PAGES_SERVICE. */
export function generateStaticParams() {
  return PAGES_SERVICE.map((page) => ({ service: page.slug }))
}

type Props = { params: Promise<{ service: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params
  const page = trouverPageService(service)
  if (!page) return {}

  return buildSeoMetadata({
    path: `/${page.slug}`,
    title: page.name,
    description: page.description,
  })
}

export default async function Page({ params }: Props) {
  const { service } = await params
  const page = trouverPageService(service)
  if (!page) notFound()

  return <PageSeo page={page} />
}
