"use client";

import { useEffect } from "react";

const CookieConsentBanner = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initConsent = async () => {
      const cc = await import("vanilla-cookieconsent");
      const CookieConsent = cc.default ?? cc;

      CookieConsent.run({
      revision: 1,
      autoClearCookies: true,
      cookie: { expiresAfterDays: 182 },
      guiOptions: {
        consentModal: {
          layout: "cloud",
          position: "bottom center",
        },
        preferencesModal: {
          layout: "box",
        },
      },
      onConsent: () => {
        window.dispatchEvent(new Event("cc:consent-change"));
      },
      onChange: () => {
        window.dispatchEvent(new Event("cc:consent-change"));
      },
      categories: {
        necessary: {
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: "_gid" },
              { name: "_gat" },
              { name: "_gac" },
            ],
          },
        },
        marketing: {
          autoClear: {
            cookies: [
              { name: /^_gcl/ },
              { name: "IDE" },
            ],
          },
        },
      },
      language: {
        default: "fr",
        translations: {
          fr: {
            consentModal: {
              title: "Votre confidentialité compte",
              description:
                "J’utilise des cookies pour mesurer l’audience du site et suivre mes campagnes publicitaires. Vous choisissez ce que vous acceptez.",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              showPreferencesBtn: "Personnaliser",
              footer: '<a href="/cookies">Politique de cookies</a>',
            },
            preferencesModal: {
              title: "Préférences de cookies",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              savePreferencesBtn: "Enregistrer",
              closeIconLabel: "Fermer",
              sections: [
                {
                  title: "Résumé",
                  description:
                    "Seuls les cookies nécessaires au fonctionnement du site sont déposés sans votre accord. Les autres servent à mesurer l’audience et à suivre mes campagnes publicitaires.",
                },
                {
                  title: "Cookies nécessaires",
                  description:
                    "Indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Mesure d’audience",
                  description:
                    "Google Analytics, Ahrefs et Vercel Analytics m’aident à comprendre comment le site est utilisé et à l’améliorer.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Google Ads me permet de mesurer l’efficacité de mes annonces et d’attribuer les demandes de contact.",
                  linkedCategory: "marketing",
                },
                {
                  title: "Plus d’informations",
                  description:
                    "Vous pouvez modifier vos préférences à tout moment depuis le lien « Gérer les cookies » en bas de page. Le détail est dans la <a href=\"/cookies\">politique de cookies</a>.",
                },
              ],
            },
          },
        },
      },
      });
    };

    void initConsent();
  }, []);

  return null;
};

export default CookieConsentBanner;
