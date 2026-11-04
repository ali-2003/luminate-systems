import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Asterisk } from "@/components/icons";
import { ContactCTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Our Studio & Approach", description: "Meet Luminate Systems, an independent software engineering studio with Chicago roots, an obsession with clear systems, and a practical approach to building digital products.", alternates: { canonical: "/studio" } };

export default function StudioPage() {
  return <><section className="inner-hero inner-hero--dark studio-hero"><div className="container-wide"><div className="tiny-label page-kicker">THE STUDIO <span> / 03</span></div><h1>Curious minds.<br /><em>Serious craft.</em></h1><div className="inner-hero-bottom"><p>We&apos;re an independent software studio with a simple belief: the best technology feels like it was made for you. Because it was.</p><span className="big-asterisk">✳</span></div></div></section>
    <section className="studio-belief section-pad"><div className="container-wide"><div className="studio-belief-heading"><span className="tiny-label">WHAT DRIVES US</span><Asterisk size={54}/></div><Reveal><h2>There&apos;s a big difference between software that <em>looks impressive</em> and software that <span>changes your day.</span></h2></Reveal><div className="studio-belief-bottom"><span>WE&apos;RE HERE TO BUILD THE SECOND KIND.</span><p>Luminate Systems works at the intersection of thoughtful product design and engineering rigor. From nonprofit case management to workforce operations, we focus on tools that remove friction from important work.</p></div></div></section>
    <section className="studio-principles section-pad"><div className="container-wide"><div className="section-head section-head--compact"><div className="section-meta"><span className="section-num">THE PRINCIPLES —</span></div><div className="section-head-copy"><h2>Good work is<br /><em>intentional.</em></h2></div></div><div className="principle-grid">{[
      { n: "01", title: "Listen before building.", desc: "The right questions at the beginning save an enormous amount of wrong work later." },
      { n: "02", title: "Clarity over complexity.", desc: "Powerful doesn't have to mean confusing. The best systems are understandable by design." },
      { n: "03", title: "Craft every interaction.", desc: "The small things are the product: the loading state, the form, the moment something just works." },
      { n: "04", title: "Make it last.", desc: "We favor sound architecture, clean code, accessibility, and steady improvement over shortcuts." }
    ].map((item, i) => <Reveal key={item.n} delay={i * 50}><div className="principle"><span className="tiny-label">{item.n}</span><h3>{item.title}</h3><p>{item.desc}</p></div></Reveal>)}</div><Link href="/services" className="outlined-link">Explore our expertise <ArrowUpRight size={22}/></Link></div></section><ContactCTA /></>;
}
