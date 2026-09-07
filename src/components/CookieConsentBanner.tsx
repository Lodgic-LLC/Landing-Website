"use client";

import { useEffect } from "react";

const CookieConsentBanner = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initConsent = async () => {
      const module = await import("vanilla-cookieconsent");
      const CookieConsent = module.default ?? module;

      CookieConsent.run({
      revision: 1,
      autoClearCookies: true,
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
                "Nous utilisons des cookies pour mesurer l’audience, améliorer l’expérience et soutenir nos campagnes marketing. Vous pouvez choisir les catégories que vous acceptez.",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              showPreferencesBtn: "Personnaliser",
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
                    "Nous utilisons uniquement les cookies nécessaires pour faire fonctionner le site. Les cookies analytics et marketing servent à mesurer la performance et à optimiser les campagnes.",
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
                    "Google Analytics, Ahrefs Analytics et Vercel Analytics nous aident à comprendre l’usage du site et à améliorer vos parcours.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Google Ads nous permet d’optimiser les campagnes et d’attribuer les conversions.",
                  linkedCategory: "marketing",
                },
                {
                  title: "Plus d’informations",
                  description:
                    "Vous pouvez modifier vos préférences à tout moment depuis le bas de page.",
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
