import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { ContactCTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: `${service.short} Discuss your challenge with Luminate Systems.`, alternates: { canonical: `/services/${slug}` }, openGraph: { title: `${service.title} | Luminate Systems`, description: service.intro, url: `/services/${slug}` } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.intro, serviceType: service.title, provider: { "@type": "Organization", name: "Luminate Systems", url: "https://www.luminatesystems.com" }, url: `https://www.luminatesystems.com/services/${service.slug}` };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="inner-hero inner-hero--dark detail-hero"><div className="container-wide"><Link href="/services" className="back-link">← ALL EXPERTISE</Link><div className="tiny-label page-kicker">{service.number} / {service.eyebrow}</div><h1>{service.title.split(" ").slice(0, -1).join(" ")}<br /><em>{service.title.split(" ").slice(-1)}</em><span className="detail-hero-period">.</span></h1><div className="inner-hero-bottom"><p>{service.intro}</p><span className="big-asterisk">✳</span></div></div></section>
    <section className="detail-body section-pad"><div className="container-wide detail-grid"><div className="detail-aside"><span className="tiny-label">BUILT TO FIT</span><h2>What we<br /><em>bring to the table.</em></h2><p>{service.details}</p><Link className="button button-dark" href="/contact">Discuss your project <ArrowUpRight size={19} /></Link></div><div className="detail-includes"><div className="tiny-label">THE CAPABILITIES / {service.number}</div>{service.includes.map((feature, index) => <Reveal key={feature} delay={index * 30}><div className="detail-feature"><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature}</h3><ArrowRight size={20}/></div></Reveal>)}</div></div></section><ContactCTA />
  </>;
}
