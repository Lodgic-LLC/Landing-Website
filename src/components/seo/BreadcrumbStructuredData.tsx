interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[]
}

const BreadcrumbStructuredData = ({ items }: BreadcrumbStructuredDataProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default BreadcrumbStructuredData
