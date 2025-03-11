interface Window {
  gtag: (
    command: string,
    action: string,
    params?: {
      send_to?: string
      value?: number
      currency?: string
      [key: string]: any
    }
  ) => void
  dataLayer: any[]
}
