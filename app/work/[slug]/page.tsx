import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { ContactCTA } from "@/components/cta";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.seoTitle, description: project.seoDescription, alternates: { canonical: `/work/${slug}` }, openGraph: { title: project.seoTitle, description: project.seoDescription, url: `/work/${slug}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const otherProject = projects[(currentIndex + 1) % projects.length];
  return <><section className="inner-hero inner-hero--dark project-hero"><div className="container-wide"><Link href="/work" className="back-link">← ALL PROJECTS</Link><div className="tiny-label page-kicker">{project.number} / {project.sector}</div><h1>{project.title}<span className="detail-hero-period">.</span></h1><div className="inner-hero-bottom"><p>{project.headline}</p><span className="big-asterisk">✳</span></div></div></section>
    <section className="project-detail-art"><div className="container-wide"><ProjectVisual type={project.visual}/><div className="project-art-note">ABSTRACTED PRODUCT INTERFACE / NOT A LIVE SCREENSHOT</div></div></section>
    <section className="project-story section-pad"><div className="container-wide"><div className="project-story-intro"><div className="section-meta"><span className="section-num">THE WORK —</span><span>OVERVIEW</span></div><div><h2>{project.headline}</h2><p>{project.overview}</p></div></div><div className="project-story-features"><span className="tiny-label">PRODUCT CAPABILITIES</span><div>{project.features.map((feature, i) => <Reveal key={feature} delay={i * 30}><div className="project-feature"><span>{String(i + 1).padStart(2, "0")}</span><h3>{feature}</h3><ArrowRight size={18}/></div></Reveal>)}</div></div>{otherProject && <Link className="next-project" href={`/work/${otherProject.slug}`}><div><span className="tiny-label">UP NEXT / ANOTHER SYSTEM</span><h2>{otherProject.title}</h2></div><ArrowUpRight size={34} /></Link>}</div></section><ContactCTA />
  </>;
}
