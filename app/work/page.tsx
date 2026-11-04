import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ContactCTA } from "@/components/cta";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site";

export const metadata: Metadata = { title: "Selected Software Projects", description: "Explore six Luminate Systems projects spanning clinic operations, tax-document workflows, nonprofit platforms, workforce tools, and e-commerce.", alternates: { canonical: "/work" } };

export default function WorkPage() { return <><section className="inner-hero inner-hero--dark"><div className="container-wide"><div className="tiny-label page-kicker">SELECTED PROJECTS <span> / 01</span></div><h1>Built for<br /><em>the real world.</em></h1><div className="inner-hero-bottom"><p>Some of the most important software isn&apos;t the loudest. It&apos;s the software people can depend on every day.</p><span className="big-asterisk">✳</span></div></div></section>
    <section className="work-index section-pad"><div className="container-wide"><div className="work-index-top"><span className="tiny-label">PROJECT INDEX</span><span className="tiny-label">01 — {String(projects.length).padStart(2, "0")}</span></div>{projects.map((project, index) => <Reveal key={project.slug} delay={index * 70}><Link className="work-index-card" href={`/work/${project.slug}`}><ProjectVisual type={project.visual} /><div className="work-index-label"><div><span className="tiny-label">{project.number} &nbsp; / &nbsp;{project.sector}</span><h2>{project.title}</h2><p>{project.short}</p></div><span className="work-index-arrow"><ArrowUpRight size={30}/></span></div></Link></Reveal>)}</div></section><ContactCTA /></>; }
