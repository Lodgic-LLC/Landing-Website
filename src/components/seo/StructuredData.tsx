type StructuredDataProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
  id?: string
}

const serializeJsonLd = (data: StructuredDataProps['data']) =>
  JSON.stringify(data).replace(/</g, '\\u003c')

export default function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}

