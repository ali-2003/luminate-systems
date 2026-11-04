# Luminate Systems — SEO and organic lead-growth plan

## Positioning

**Audience:** Business owners, operations directors, nonprofit executives, and teams stuck with spreadsheets, disconnected tools, or manual work.

**Headline:** Tell us the problem. We devise the solution.

**Offer:** Discovery conversation → process mapping → purpose-built software, website, or integration. Do not lead with "AI" unless it is genuinely the right solution.

## Keyword-to-page map (hypotheses — validate demand in Search Console & Keyword Planner)

| Page | Primary intent / search phrase | Related natural phrases |
| --- | --- | --- |
| `/` | custom software development company | custom software solutions for businesses; Chicago software development |
| `/services/custom-software-development` | custom software development | business process software; internal tools; custom web application development |
| `/services/nonprofit-software` | nonprofit case management software | human services case management system; referrals and fund allocation |
| `/services/workflow-automation` | business workflow automation | software integration services; automate manual data entry; payroll integrations |
| `/services/web-development` | Next.js web development agency | TypeScript development company; custom website development; technical SEO |
| `/work/lumincase` | nonprofit case management platform | service tracking; case notes; staff workflows |
| `/work/paybridge` | time tracking and payroll integration software | clock in clock out; timesheet review; payroll handoff |

Use one clear topic per page. The phrases above are **candidates**, not verified high-volume or low-competition keywords. Do not use geographic modifiers on pages that cannot honestly substantiate local relevance.

## Suggested new people-first content (publish one deeply useful article at a time)

1. **When spreadsheets stop working: 7 signs your business needs custom software** — specific diagnostic checklist; show examples and trade-offs. Link to `/services/custom-software-development`.
2. **What a nonprofit should look for in case management software** — practical checklist about permissions, referrals, service notes, reporting, and security. Link to `/services/nonprofit-software` and `/work/lumincase`.
3. **Connecting time tracking to payroll: what can be automated and what still needs approval** — operational architecture without claiming payroll processing or banking approvals. Link to `/services/workflow-automation` and `/work/paybridge`.
4. **Custom software vs SaaS: how to choose for a growing operations team** — decision framework including costs, integration, maintenance, and risks. Link to `/contact`.

Write from direct experience and add approved product screenshots/case-study details; avoid generic AI-written filler, made-up numbers, fake reviews, and keyword-stuffed city doorway pages.

## Launch checklist

1. Deploy to the canonical domain `https://www.luminatesystems.com`, keep HTTPS and redirect non-www → www consistently. Do **not** alter email DNS records when moving web hosting.
2. Verify ownership in [Google Search Console](https://search.google.com/search-console/), submit `https://www.luminatesystems.com/sitemap.xml` under Sitemaps. Confirm `/robots.txt` includes sitemap. The sitemap helps discovery but does not guarantee indexing.
3. Use URL Inspection on homepage and core service pages. Check coverage, canonical URLs, indexability, and mobile render.
4. Validate `Organization`, `ProfessionalService`, and individual `Service` structured data with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/). Service schema does not ensure a special rich result.
5. Run [PageSpeed Insights](https://pagespeed.web.dev/) on desktop and mobile. Keep the lazy-loaded WebGL hero; meaningful heading and copy must be server-rendered. Fix slow images, excessive JS, layout shifts.
6. Add a real Google Business Profile only if eligibility and real location/customer-contact requirements are met; do not invent a Chicago street address.
7. Obtain legitimate relevant links (partners, client websites with consent, industry directories, professional associations) and document actual project work. Avoid link schemes.
8. Track inquiries and form submissions as conversions, not only traffic; configure consent-aware analytics and a privacy page before adding new tracking.

## First 60 days

- **Week 1:** Ship, confirm page indexing, set up Search Console, analytics and lead conversion events.
- **Weeks 2–3:** Improve service pages with approved original visuals, real use cases, buyer FAQs, internal links and useful comparisons.
- **Weeks 4–5:** Publish two high-quality guides and one detailed, permission-approved case study.
- **Weeks 6–8:** Review Search Console queries, CTR, indexed pages and conversion sources. Rewrite titles only when justified by measured relevance; expand articles based on real visitor needs.

## What to measure

**Leading:** indexed pages, impressions for relevant commercial queries, clicks/CTR, contact page visits. **Actual outcome:** qualified contact submissions and booked discovery conversations.

Do **not** expect top rankings automatically from keywords, meta tags, structured data, or a sitemap. They improve clarity and discoverability; competition, relevance, originality, reputation, and time still matter.

Source: Google Search Central SEO Starter Guide and sitemap documentation (developers.google.com/search/docs).


## Expanded portfolio / intent-driven search pages (v3)

These portfolio pages create additional opportunities for relevant branded and industry-intent searches, but are not substitutes for service pages or genuine project evidence:

- `/work/decare` — clinic operations software, patient intake platform, digital check-in workflow
- `/work/taxos` — accounting-firm document intake, tax-document review workflow, K-1 reconciliation
- `/work/mrkt-id-co` — custom e-commerce platform, storefront design, responsive shopping experience
- `/work/xphones-fr` — electronics e-commerce development, smartphone storefront, mobile product catalog
- `/work/lumincase` — nonprofit case management, service referrals, resource allocation
- `/work/paybridge` — time tracking, workforce hours review, payroll integrations

The portfolio pages are included automatically in `/sitemap.xml`. Each has server-rendered HTML, unique metadata, and internal navigation. Search ranking is not guaranteed; improve each case study with approved real images, project-specific challenges, solutions, implementation detail, outcomes, and relevant links.

### Mobile-first review before launch

Use real iPhone, Android, iPad, and desktop browsers where possible. Check navigation, readable text, tap targets, keyboard navigation, form submission, 3D WebGL fallback, and no horizontal overflow. Validate at widths 320, 375, 390, 430, 768, 820, 1024 and 1440 CSS pixels. Google uses the mobile version of responsive websites for indexing; do not hide important service or project content on mobile.
