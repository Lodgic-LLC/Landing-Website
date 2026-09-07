"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const ConsentVercelAnalytics = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateConsent = async () => {
      const module = await import("vanilla-cookieconsent");
      const CookieConsent = module.default ?? module;
      setEnabled(CookieConsent.acceptedCategory("analytics"));
    };

    window.addEventListener("cc:consent-change", updateConsent);
  void updateConsent();

    return () => {
      window.removeEventListener("cc:consent-change", updateConsent);
    };
  }, []);

  if (!enabled) return null;

  return <Analytics />;
};

export default ConsentVercelAnalytics;
