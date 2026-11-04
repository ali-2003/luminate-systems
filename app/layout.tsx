import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE, services } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Custom Software Development & Automation | Luminate Systems", template: "%s | Luminate Systems" },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: SITE_URL, siteName: SITE_NAME, title: "Luminate Systems — Tell us the problem. We devise the solution.", description: SITE_DESCRIPTION, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Luminate Systems" }] },
  twitter: { card: "summary_large_image", title: "Luminate Systems — Tell us the problem. We devise the solution.", description: SITE_DESCRIPTION, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } } : {}),
  category: "technology",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080C17" };

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL, email: SITE_EMAIL, telephone: SITE_PHONE, description: SITE_DESCRIPTION },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en-US" },
    { "@type": "ProfessionalService", "@id": `${SITE_URL}/#services`, name: SITE_NAME, url: SITE_URL, description: SITE_DESCRIPTION, email: SITE_EMAIL, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: "Worldwide", hasOfferCatalog: { "@type": "OfferCatalog", name: "Software engineering services", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, description: service.short, url: `${SITE_URL}/services/${service.slug}` } })) } }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </body></html>;
}
