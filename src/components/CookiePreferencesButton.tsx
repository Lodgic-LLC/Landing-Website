'use client'

export default function CookiePreferencesButton() {
  async function openPreferences() {
    const cc = await import('vanilla-cookieconsent')
    const CookieConsent = cc.default ?? cc
    CookieConsent.showPreferences()
  }

  return <button type="button" onClick={openPreferences} className="transition-colors hover:text-white">
    Gérer les cookies
  </button>
}
