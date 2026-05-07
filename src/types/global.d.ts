interface Window {
  gtag?: (
    command: string,
    action: any,
    params?: {
      send_to?: string
      value?: number
      currency?: string
      [key: string]: any
    }
  ) => void
  dataLayer?: any[]
}

declare module "vanilla-cookieconsent/dist/cookieconsent.css";