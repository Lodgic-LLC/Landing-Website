"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const ConsentVercelAnalytics = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let consentRun = 0;

    const updateConsent = async () => {
      const run = ++consentRun;
      const cc = await import("vanilla-cookieconsent");
      if (run !== consentRun) return;
      const CookieConsent = cc.default ?? cc;
      setEnabled(CookieConsent.acceptedCategory("analytics"));
    };

    window.addEventListener("cc:consent-change", updateConsent);
    void updateConsent();

    return () => {
      consentRun++;
      window.removeEventListener("cc:consent-change", updateConsent);
    };
  }, []);

  if (!enabled) return null;

  return <Analytics />;
};

export default ConsentVercelAnalytics;
