# Luminate Systems — software studio site

A custom-designed, multi-page **Next.js App Router + TypeScript** marketing site for Luminate Systems. It is a real application, not a screenshot, theme, or generic AI site builder template.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Before deploying, run:

```bash
npm run typecheck
npm run build
```

**Note:** This project was authored offline in the delivery environment, where npm registry access was unavailable, so its dependency installation and full Next.js build have **not** been verified here. If npm resolves a different package version than expected, pin it based on the current Next/React/R3F compatibility guidance.

## Brand direction (v3)

Blue, black, and white with an electric-blue 3D focal point and problem-first messaging. The hero invites visitors to describe their business challenge rather than choose a service upfront. Source contains a homepage FAQ with meaningful, indexable content and detail-page Service schema. See `SEO-GROWTH-PLAN.md` for an actionable keyword-to-page map and 60-day rollout.

## Pages included

- `/` — cinematic homepage with an interactive Three.js 3D centerpiece
- `/work` — selected project index
- `/work/lumincase`, `/work/decare`, `/work/taxos`, `/work/paybridge`, `/work/mrkt-id-co`, `/work/xphones-fr` — individual portfolio pages with descriptive metadata and custom illustrated interface concepts
- `/services` — capability index
- `/services/custom-software-development`
- `/services/nonprofit-software`
- `/services/web-development`
- `/services/workflow-automation`
- `/studio` — studio story and principles
- `/contact` — project inquiry form
- Custom 404 page

## The 3D design

The hero scene uses **Three.js + React Three Fiber**, with multiple physically based materials, moving orbital structures, pointer response, and lighting. It is dynamically imported on the client, pauses rendering when offscreen, uses a low pixel ratio on slow devices, respects reduced-motion preferences, and provides a pure-CSS fallback without WebGL. Other page animations use CSS and an IntersectionObserver—no full-site animation runtime needed.

The product-interface visuals are **conceptual compositions** built in CSS/HTML, not verified screenshots of production applications. Swap them with approved product screenshots when available. The copy deliberately avoids invented results, testimonials, metrics, or unverified client logos.

## SEO included

- Next.js Metadata API, canonical URLs, unique page titles and descriptions
- Open Graph / Twitter cards, generated `/opengraph-image`
- `app/sitemap.ts` automatically serves **`/sitemap.xml`** (the Google convention is *sitemap.xml*, not *sites.xml*)
- `app/robots.ts` serves `/robots.txt` and announces the sitemap
- `Organization`, `WebSite`, and `ProfessionalService` structured data (JSON-LD)
- Semantic headings, indexable server-rendered content, descriptive internal links
- Static service & project detail routes (`generateStaticParams`)
- Responsive styling, keyboard focus, a skip link, and reduced-motion support

Technical SEO is a foundation, not a ranking guarantee. Continue with meaningful, well-supported content, relevant backlinks, and Search Console performance checks.

### Important domain detail

The current domain redirects to **`https://www.luminatesystems.com`**, so that is the canonical base for this site. If you change your preferred domain, update `SITE_URL` in `lib/site.ts` and your Vercel redirect settings together.

### Google Search Console setup after going live

1. Add and verify `https://www.luminatesystems.com` in [Google Search Console](https://search.google.com/search-console/).
2. In **Indexing → Sitemaps**, submit `https://www.luminatesystems.com/sitemap.xml`.
3. Check `/robots.txt`, `/sitemap.xml`, and the public metadata on all main pages.
4. Request indexing for key service pages as needed; monitor indexing and Core Web Vitals over time.
5. Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if using the HTML meta-tag ownership method.

## Direct website-to-inbox contact form (setup required)

The form now **submits inside the website to `POST /api/contact`**, which sends the inquiry directly using the **Resend Email API**. It **never opens Outlook, Apple Mail, or another email app**. The provider API key stays server-side; the submitter's address is set as the reply-to address.

**This does not automatically begin sending email by merely downloading the code.** Before deployment:

1. Create a Resend account at https://resend.com and verify an email-sending domain. Suggested: `notify.luminatesystems.com` so the form's transactional mail authentication is separate from existing Outlook/Microsoft 365 email records. Only add the DNS records Resend provides for that subdomain; **do not replace the existing domain's MX, SPF, DKIM, or DMARC records**.
2. Copy `.env.example` to `.env.local` (for development). Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (verified sender), and `RESEND_TO_EMAIL` (the actual inbox that should receive project leads). The sample destination is `founder@luminatesystems.com`; change it if necessary.
3. Set the **same three environment variables in your production hosting platform**, such as Vercel → Project → Settings → Environment Variables, then redeploy.
4. Submit a test inquiry from the live site and check your inbox, spam folder, and Resend email logs. Confirm replying to the message addresses the submitter, not the website sender.
5. Consider adding persistent rate limiting and bot verification (e.g., Cloudflare Turnstile) before broad promotion; the included origin check and honeypot are not a complete abuse-prevention system.

If credentials aren't configured or Resend returns an error, the form shows an error **in place**, without redirecting the visitor and without incorrectly reporting success. Visitors can still choose to click the separate published email address if they wish. The form specifically tells visitors not to send medical records, SSNs, or financial account details through this general inquiry channel.

### How to test locally

With credentials configured, run `npm run dev`, visit `http://localhost:3000/contact`, complete the form, and submit. Verify a success message and the actual email in the receiving inbox. A successful API response means Resend accepted the message; inbox delivery should be verified separately.

### Portfolio content and accuracy

Six projects are featured, including Decare (clinic operations/intake/check-in), TaxOS (tax-document intake/review workflows), MRKT ID CO (e-commerce), and XPhones.fr (device e-commerce). All visualizations are original *illustrative* UI concepts, not screenshots of production software. In particular, TaxOS is **not presented as already electronically filing tax returns**; its documented v1 scope is document intake, validation, reconciliation, and handoff. Confirm any additional features and all client-approved project naming before launch.

## Deploy to Vercel

Push the project to GitHub and import the repository in Vercel. Set the root directory to the project folder (if inside a monorepo), add the optional environment variables, and deploy. Attach `luminatesystems.com` and `www.luminatesystems.com` under project domains, making **www** canonical, while preserving working email/DNS records. Do not delete your MX, SPF, DKIM, or DMARC records when updating your website DNS.

## What to personalize before launch

- Confirm the final language and level of product detail for LuminCase and PayBridge.
- Replace conceptual interface art with approved screenshots if you wish.
- Confirm `contact@luminatesystems.com` and `+1 (331) 243-6122` remain your public contact details.
- Add real case-study evidence, testimonials, and client names only with permission.
- Update privacy/legal information before adding analytics or other tracking services.

## Project architecture

`app/` holds server-rendered pages and metadata routes; `components/` holds UI and optional 3D client components; `lib/site.ts` centralizes content, URL and contact details; `app/globals.css` is the bespoke design system. No Tailwind dependency is required.
