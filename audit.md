SEO Audit Report — lodgic-dev.com  
 Date: 2026-05-06 Business type: Digital Agency (web/mobile dev) — French, Toulouse-based (hybrid local + remote)  
 Stack: Next.js 15 (App Router), SSR/SSG on Vercel Languages: French only ---  
 SEO Health Score: 63 / 100

┌────────────────────────────┬────────┬────────────────────────┬──────────┐
│ Category │ Weight │ Score │ Weighted │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ Technical SEO │ 22% │ 75 │ 16.5 │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ Content Quality (E-E-A-T)\* │ 23% │ 55 │ 12.7 │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ On-Page SEO / SXO │ 20% │ 46 (SXO) / ~65 on-page │ 13.0 │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ Schema / Structured Data │ 10% │ 60 │ 6.0 │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ Performance (CWV) │ 10% │ 68 │ 6.8 │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ AI Search Readiness (GEO) │ 10% │ 52 │ 5.2 │
├────────────────────────────┼────────┼────────────────────────┼──────────┤
│ Images │ 5% │ 60 │ 3.0 │
└────────────────────────────┴────────┴────────────────────────┴──────────┘

- Content E-E-A-T agent failed to return a substantive report. Score inferred from SXO authority gaps (3/15), schema findings (articleBody only stores summaries), and absence of named  
  author bios/testimonials.

Bonus angle: Local SEO scored 41/100 — most critical sub-area for a Toulouse agency.

---

Top Findings by Severity

CRITICAL

1. No sitemap.xml and no robots.txt — Despite next.config.ts declaring an XML header rule, there is no actual sitemap output and no robots.txt. Google has no machine-readable URL inventory.
   Fix: add src/app/sitemap.ts (next-sitemap.config.js code provided by the sitemap agent) and public/robots.txt.
2. No Google Business Profile signals on site — No Maps embed, no GBP link, no reviews widget, no aggregateRating. For "agence développement application mobile Toulouse" the local pack  
   dominates above organic — Lodgic is invisible to it.
3. Zero visible reviews / testimonials / named clients — Only 1 case study (Gestion locative, no client attribution). Per the SXO Trust dimension: 5/25 for startup founders, 4/25 for SMB  
   owners. Highest-leverage gap on the entire site.
4. BlogPosting.articleBody contains only post.summary in src/app/blog/[slug]/page.tsx:152. Google sees a hollow article. One-line fix: change post.summary → post.content.
5. BlogPosting.image is a bare URL string — must be ImageObject with width/height, otherwise no Article rich results.
6. PostalAddress missing streetAddress and postalCode — without a full address, Google cannot confirm Toulouse physical presence for local pack eligibility.
7. No Content-Security-Policy header in next.config.ts.

HIGH

8. webVitalsAttribution still lists 'FID' in next.config.ts:49 — FID was retired Sept 2024. Replace with 'INP'.
9. IndexNow not implemented despite Bing site verification existing (public/BingSiteAuth.xml). Reuse the existing key for IndexNow API submissions on each deploy.
10. BreadcrumbList schema missing on every page — components exist (BreadcrumbStructuredData.tsx, FAQStructuredData.tsx) but are not imported anywhere.
11. Schema @type should be ProfessionalService / ITService, not generic LocalBusiness. Add geo (lat/lng) and openingHoursSpecification.
12. LCP risk on homepage — Hero is a JS-animated SVG via Framer Motion (17 motion.path elements). Mobile LCP estimated 2.8–3.4s. The framer-motion bundle (~40kb gzipped) ships on every  
    page.
13. /contact page returns 404 — primary local NAP anchor missing. Build /contact with full address + Maps embed + business hours.
14. No Wikidata entity — single largest gap for AI Overviews / ChatGPT Search citation.
15. Page-type mismatch on homepage for kw "agence développement application mobile Toulouse" — SERP rewards Commercial Local Service Pages with evidence layers; Lodgic's homepage is a  
    generic agency landing with zero pricing/social-proof signals.

MEDIUM

16. /api/\* routes not blocked in robots.ts.
17. /intelligence-artificielle missing canonical tag and absent from sitemap.
18. Static STATIC_LAST_MODIFIED = 2026-04-28 applied to all sitemap entries — every URL looks equally fresh/stale.
19. Boilerplate weight on 5 SEO landing pages — Process, About, SuccessStories, FAQ (which is actually a contact form) render identical HTML across all of them. ~40-50% unique content.  
    Acceptable today, risky if you add more location pages.
20. NAP name inconsistency — "Lodgic" vs "Lodgic Dev" across SITE_NAME, OG, schema. Pick one.
21. AdvancedTracker attaches 5 synchronous global listeners (mousemove, click, scroll, visibilitychange, mouseleave) on every homepage load — INP risk on slower mobiles.
22. Two Google Fonts + an orphaned Sofia Pro @font-face with no actual .woff2 file. Consolidate.
23. useIsMobile hook causes a post-hydration repaint in Hero — small CLS contribution.
24. No FAQPage schema on commercial pages — fine for Google rich results (Aug 2023 restriction), but add for /developpement-application-mobile informational hub for AI/LLM citation benefit
    (Info priority, not Critical).
25. lodgicdev@gmail.com — free consumer email harms credibility for Clutch / Sortlist / Societe.com profile scoring.

LOW

26. Deprecated X-XSS-Protection header still present.
27. AOSInitializer is a dead stub — remove.
28. llms.txt and llms-full.txt indexed in sitemap unnecessarily; also have stripped diacritics ("developpement" instead of "développement"), which breaks French NLP entity matching.
29. dateModified always equals datePublished in BlogPosting schema — no freshness tracking.
30. Contact form inputs lack <label> elements (placeholder only) — accessibility + mobile usability gap.

---

Prioritized Action Plan

Week 1 (Critical — blocks indexing / trust)

- Ship src/app/sitemap.ts + public/robots.txt.
- Claim & fully optimize Google Business Profile (category: "Agence de développement logiciel"), embed Maps on homepage, link GBP from footer.
- Fix BlogPosting.articleBody (1-line) and BlogPosting.image → ImageObject.
- Add streetAddress + postalCode to PostalAddress everywhere.
- Add Content-Security-Policy header in next.config.ts.
- Replace 'FID' with 'INP' in webVitalsAttribution.
- Build /contact page (full NAP + map embed + form).

Week 2-4 (High — rankings + experience)

- Launch review acquisition (target 5 Google reviews in 30 days; embed widget on homepage); add aggregateRating once present.
- Add 2-3 named case studies with client/sector + outcome metric to homepage and /developpement-application-mobile-toulouse.
- Create Wikidata entity (P856, P131 Toulouse, P452 software dev).
- Wire BreadcrumbStructuredData and FAQStructuredData components into pages — they exist but are unused.
- Upgrade schema to ProfessionalService + add geo + openingHoursSpecification.
- Replace homepage Hero's JS-animated SVG with a static SVG + CSS keyframes (or dynamic({ ssr: false })); set framer-motion to be tree-shaken from mobile bundle.
- Implement IndexNow on deploy (reuse the Bing verification key).

Month 2+ (Medium — strategic)

- Register on Pages Jaunes, Sortlist, Clutch, La French Tech (citation tier 1 for French agencies).
- Move from lodgicdev@gmail.com to contact@lodgic-dev.com.
- Unify name to "Lodgic" everywhere.
- Add inline pricing anchors ("À partir de…") on Toulouse landing pages — kills the SXO budget-context gap.
- Restore French diacritics in llms.txt / llms-full.txt; add a license: line.
- Deepen /developpement-application-mobile informational hub to 1,200–1,500 words with proper FAQ + author byline.
- Consider one or two short YouTube videos (highest-correlated AI-citation signal, currently absent).

Backlog (Low)

- Remove AOSInitializer stub, deprecated X-XSS-Protection, and exclude llms\*.txt from sitemap.
- Add priceRange: "€€" to LocalBusiness schema.
- Track real per-page lastModified rather than a static constant.
- Consider a /toulouse pillar hub aggregating all geo pages.

---

Notes & Limitations

- Visual / above-fold subagent could not run (needs Playwright + Bash). Mobile screenshots and CLS-prone-element identification were not captured directly — Hero analysis came from source  
  review.
- Content E-E-A-T agent completed without returning a substantive report. Treat the Content Quality score as a proxy derived from SXO Authority signals + schema findings; a re-run with  
  explicit author/testimonial review would tighten it.
- No live CrUX or PageSpeed field data — performance numbers are source-derived estimates. Validate on cruxvis.withgoogle.com and PSI once GSC/CrUX data is reachable.
- Live SERP confirmation for the three target keywords was not captured — page-type consensus is based on known French agency SERP patterns. Run /seo dataforseo if you have the extension to
  validate the local pack composition for May 2026.
