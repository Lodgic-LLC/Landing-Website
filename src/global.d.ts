type GtagParams = Record<string, unknown>

interface Window {
  gtag?: (command: string, action: string | Date, params?: GtagParams) => void
  dataLayer?: unknown[]
}

declare module 'vanilla-cookieconsent/dist/cookieconsent.css'
