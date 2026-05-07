"use client";

import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-LV93937W8D";
const ADS_MEASUREMENT_ID = "AW-16908078298";
const AHREFS_KEY = "NwAOnm/5ns2EDAKe8YmE8g";

const GA_SCRIPT_ID = "ga-gtag-script";
const AHREFS_SCRIPT_ID = "ahrefs-analytics-script";

const loadScript = (src: string, id: string, attributes: Record<string, string> = {}) => {
  return new Promise<boolean>((resolve) => {
    if (document.getElementById(id)) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;

    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    script.onload = () => resolve(true);
    script.onerror = () => {
      console.warn(`[ConsentScripts] Failed to load ${src}`);
      resolve(false);
    };
    document.head.appendChild(script);
  });
};

const removeScript = (id: string) => {
  const script = document.getElementById(id);
  if (script?.parentNode) {
    script.parentNode.removeChild(script);
  }
};

const ensureGtag = () => {
  if (typeof window === "undefined") return;
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (!window.gtag) {
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer?.push(args);
    };
  }
};

const disableGtag = () => {
  if (typeof window === "undefined") return;
  window.gtag = undefined;
  window.dataLayer = [];
  removeScript(GA_SCRIPT_ID);
};

const ConsentScripts = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyConsent = async () => {
      const module = await import("vanilla-cookieconsent");
      const CookieConsent = module.default ?? module;

      const analyticsAccepted = CookieConsent.acceptedCategory("analytics");
      const marketingAccepted = CookieConsent.acceptedCategory("marketing");

      if (!analyticsAccepted && !marketingAccepted) {
        disableGtag();
        removeScript(AHREFS_SCRIPT_ID);
        return;
      }

      try {
        await loadScript(
          `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
          GA_SCRIPT_ID
        );
      } catch {
        return;
      }

      ensureGtag();
      window.gtag?.("js", new Date());

      if (analyticsAccepted) {
        window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });
        await loadScript(
          "https://analytics.ahrefs.com/analytics.js",
          AHREFS_SCRIPT_ID,
          { "data-key": AHREFS_KEY }
        );
      } else {
        removeScript(AHREFS_SCRIPT_ID);
      }

      if (marketingAccepted) {
        window.gtag?.("config", ADS_MEASUREMENT_ID, { send_page_view: false });
      }
    };

    const handleConsentChange = () => {
      void applyConsent();
    };

    window.addEventListener("cc:consent-change", handleConsentChange);
    handleConsentChange();

    return () => {
      window.removeEventListener("cc:consent-change", handleConsentChange);
    };
  }, []);

  return null;
};

export default ConsentScripts;
