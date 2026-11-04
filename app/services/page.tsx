import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ContactCTA } from "@/components/cta";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Software Development & Workflow Automation",
  description: "Explore custom software development, nonprofit case management systems, Next.js web development, and workflow automation from Luminate Systems.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return <><section className="inner-hero inner-hero--dark"><div className="container-wide"><div className="tiny-label page-kicker">WHAT WE DO <span> / 02</span></div><h1>Expertise with<br /><em>a point of view.</em></h1><div className="inner-hero-bottom"><p>We believe useful is beautiful. We build the software, systems, and web experiences that make ambitious ideas real.</p><span className="big-asterisk">✳</span></div></div></section>
    <section className="service-detail-index section-pad"><div className="container-wide">{services.map((service, i) => <Reveal key={service.slug} delay={i * 50}><Link className="service-index-item" href={`/services/${service.slug}`}><span className="tiny-label">{service.number} &nbsp; {service.eyebrow}</span><div><h2>{service.title}</h2><p>{service.intro}</p><span className="service-index-more">EXPLORE CAPABILITIES <ArrowUpRight size={22} /></span></div><ArrowUpRight className="service-index-arrow" size={34} /></Link></Reveal>)}</div></section><ContactCTA /></>;
}
