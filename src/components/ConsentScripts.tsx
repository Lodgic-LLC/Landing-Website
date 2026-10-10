"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { setTrackingConsent, trackPageView } from "@/lib/analytics";

const GA_MEASUREMENT_ID = "G-LV93937W8D";
const ADS_MEASUREMENT_ID = "AW-16908078298";
const AHREFS_KEY = "NwAOnm/5ns2EDAKe8YmE8g";

const GA_SCRIPT_ID = "ga-gtag-script";
const AHREFS_SCRIPT_ID = "ahrefs-analytics-script";

const loadScript = (src: string, id: string, attributes: Record<string, string> = {}) => {
  return new Promise<boolean>((resolve) => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") resolve(true);
      else {
        existing.addEventListener("load", () => resolve(true), { once: true });
        existing.addEventListener("error", () => resolve(false), { once: true });
        existing.addEventListener("abort", () => resolve(false), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.addEventListener("abort", () => resolve(false), { once: true });

    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    script.onload = () => {
      script.dataset.loaded = "true";
      resolve(true);
    };
    script.onerror = () => {
      console.warn(`[ConsentScripts] Failed to load ${src}`);
      script.remove();
      resolve(false);
    };
    document.head.appendChild(script);
  });
};

const removeScript = (id: string) => {
  const script = document.getElementById(id);
  if (script?.parentNode) {
    script.dispatchEvent(new Event("abort"));
    script.parentNode.removeChild(script);
  }
};

const ensureGtag = () => {
  if (typeof window === "undefined") return;
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
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
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let consentRun = 0;
    let analyticsActive = false;

    const applyConsent = async () => {
      const run = ++consentRun;
      const cc = await import("vanilla-cookieconsent");
      if (run !== consentRun) return;
      const CookieConsent = cc.default ?? cc;

      const analyticsAccepted = CookieConsent.acceptedCategory("analytics");
      const marketingAccepted = CookieConsent.acceptedCategory("marketing");
      setTrackingConsent(analyticsAccepted, marketingAccepted);

      if (!analyticsAccepted && !marketingAccepted) {
        analyticsActive = false;
        disableGtag();
        removeScript(AHREFS_SCRIPT_ID);
        return;
      }

      const loaded = await loadScript(
        `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
        GA_SCRIPT_ID
      );
      if (run !== consentRun || !loaded) return;

      ensureGtag();
      window.gtag?.("js", new Date());

      if (analyticsAccepted) {
        window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });
        if (!analyticsActive) {
          trackPageView(document.title, { page_location: window.location.href });
          analyticsActive = true;
        }
        await loadScript(
          "https://analytics.ahrefs.com/analytics.js",
          AHREFS_SCRIPT_ID,
          { "data-key": AHREFS_KEY }
        );
      } else {
        analyticsActive = false;
        removeScript(AHREFS_SCRIPT_ID);
      }

      if (run !== consentRun) return;
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
      consentRun++;
      window.removeEventListener("cc:consent-change", handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (pathname === previousPathname.current) return;
    previousPathname.current = pathname;
    trackPageView(document.title, { page_location: window.location.href });
  }, [pathname]);

  return null;
};

export default ConsentScripts;
