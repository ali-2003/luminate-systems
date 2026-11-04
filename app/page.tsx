import Link from "next/link";
import { ArrowRight, ArrowUpRight, Asterisk, Minus } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { HeroOrbit } from "@/components/hero-orbit";
import { ProjectVisual } from "@/components/project-visual";
import { ContactCTA } from "@/components/cta";
import { projects, services } from "@/lib/site";

export default function HomePage() {
  return <>
    <section className="hero-section">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="container-wide hero-container">
        <div className="hero-topline"><span className="tiny-label"><span className="status-dot" /> INDEPENDENT SOFTWARE ENGINEERING STUDIO</span><span className="tiny-label hero-topline-right">CHICAGO ROOTS / GLOBAL THINKING &nbsp; ↗</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-sup"><span className="hero-index">01 / 04</span><span className="hero-slash">✳</span><span>YOUR CHALLENGE. OUR CRAFT.</span></div>
            <h1>Tell us<br />the <span className="hero-outline">problem.</span><br /><em>We devise</em><br />the solution.</h1>
            <p className="hero-description">Tell us what is slowing your team down. We listen, understand the problem, and devise a practical solution through custom software, connected systems, and thoughtful technology.</p>
            <div className="hero-actions"><Link href="/contact" className="button button-acid">Discuss your challenge <ArrowUpRight size={19} /></Link><Link href="/work" className="text-link">See what we build <ArrowRight size={19} /></Link></div>
          </div>
          <div className="hero-object"><div className="hero-object-frame"><div className="frame-corner frame-corner-tl"/><div className="frame-corner frame-corner-br"/><HeroOrbit /><div className="orbit-stamp orbit-stamp-top">FIG. 01&nbsp; / &nbsp;POSSIBILITY ENGINE</div><div className="orbit-stamp orbit-stamp-bottom">FORM FOLLOWS FUNCTION &nbsp; [∞]</div><span className="orbit-vertical">LUMINATE — SYSTEMS / R&amp;D</span></div></div>
        </div>
        <div className="hero-bottomline"><span className="tiny-label">SCROLL TO EXPLORE <span className="down-arrow">↓</span></span><span className="tiny-label">START WITH A PROBLEM. LEAVE WITH A PLAN.</span><span className="hero-coordinate">41°52′N &nbsp; 87°37′W</span></div>
      </div>
    </section>

    <div className="ticker" aria-label="What drives our work"><div className="ticker-track">{[0, 1, 2, 3].map((v) => <span key={v}>REAL PROBLEMS <Asterisk size={20} /> REAL SOLUTIONS <Asterisk size={20} /> NO COOKIE-CUTTER THINKING <Asterisk size={20} />&nbsp;</span>)}</div></div>

    <section className="section-work section-pad" id="work">
      <div className="container-wide">
        <Reveal><div className="section-head"><div className="section-meta"><span className="section-num">01 —</span><span>SELECTED WORK</span></div><div className="section-head-copy"><h2>Real problems.<br /><em>Built solutions.</em></h2><p>From clinic operations and tax workflows to nonprofit platforms and e-commerce, our work starts with understanding how people actually work.</p></div></div></Reveal>
        <div className="projects-stack">
          {projects.slice(0, 4).map((project, i) => <Reveal key={project.slug} delay={i * 70}><Link href={`/work/${project.slug}`} className={`project-showcase ${i === 1 ? "project-showcase--reverse" : ""}`}>
            <ProjectVisual type={project.visual} />
            <div className="project-summary"><div className="project-summary-top"><span className="tiny-label">PROJECT / {project.number}</span><span className="project-indicator"><ArrowUpRight size={26} /></span></div><div><span className="project-sector">{project.sector}</span><h3>{project.title}</h3><p>{project.short}</p></div><div className="project-summary-bottom"><span>EXPLORE THE PROJECT</span><ArrowRight size={20} /></div></div>
          </Link></Reveal>)}
        </div>
        <div className="more-projects" aria-label="More projects">
          {projects.slice(4).map((project) => <Link href={`/work/${project.slug}`} className="more-project" key={project.slug}>
            <span className="tiny-label">{project.sector}</span>
            <strong>{project.title}</strong>
            <span>{project.short}</span>
            <ArrowUpRight size={23} aria-hidden="true" />
          </Link>)}
        </div>
        <Reveal><Link href="/work" className="outlined-link">Explore all {projects.length} projects <ArrowUpRight size={22} /></Link></Reveal>
      </div>
    </section>

    <section className="philosophy-section section-pad">
      <div className="container-wide"><div className="philosophy-top"><div className="section-meta light"><span className="section-num">02 —</span><span>THE WAY WE THINK</span></div><span className="tiny-label">SOFTWARE / WITH INTENTION</span></div>
      <Reveal><div className="philosophy-quote">Your workflow should shape the <span>technology.</span> Not the <i>other way around.</i></div></Reveal>
      <div className="philosophy-bottom"><div className="philosophy-graphic"><Asterisk size={60}/><span>MAKE EVERY<br />DETAIL COUNT.</span></div><p>We help organizations untangle manual processes, disconnected systems, and ideas that have outgrown spreadsheets. Then we engineer the right solution.</p><Link href="/studio" className="text-link text-link--light">Meet the studio <ArrowUpRight size={20} /></Link></div></div>
    </section>

    <section className="services-section section-pad" id="services">
      <div className="container-wide">
        <Reveal><div className="section-head section-head--compact"><div className="section-meta"><span className="section-num">03 —</span><span>OUR EXPERTISE</span></div><div className="section-head-copy"><h2>Different problems.<br /><em>Purpose-built answers.</em></h2><p>Custom software development, nonprofit case management platforms, high-performance websites, and workflow automation. The solution depends on the problem.</p></div></div></Reveal>
        <div className="services-list">{services.map((service) => <Link href={`/services/${service.slug}`} className="service-row" key={service.slug}><span className="service-row-no">{service.number} /</span><div><span className="service-row-eyebrow">{service.eyebrow}</span><h3>{service.title}</h3></div><p>{service.short}</p><span className="service-row-arrow"><ArrowUpRight size={27} /></span></Link>)}</div>
        <Reveal><div className="services-footer"><span className="tiny-label">NOT SURE WHAT YOU NEED YET? THAT&apos;S OKAY.</span><Link href="/contact" className="text-link">Discuss your problem <ArrowRight size={19} /></Link></div></Reveal>
      </div>
    </section>

    <section className="process-section section-pad">
      <div className="container-wide">
        <Reveal><div className="process-heading"><div className="section-meta"><span className="section-num">04 —</span><span>HOW WE BUILD</span></div><h2>From problem<br />to <em>working product.</em></h2><p>You do not need a technical specification. You need a problem worth solving. We figure out the right technology together.</p></div></Reveal>
        <div className="process-grid">{[
          { n: "01", title: "Talk", text: "You explain what is not working, who it affects, and what you wish were easier." },
          { n: "02", title: "Devise", text: "We map the workflow and design a solution using only the technology you need." },
          { n: "03", title: "Build", text: "We engineer a usable product, integrate systems, and test it against real work." },
          { n: "04", title: "Improve", text: "We launch, measure what works, and refine the solution with your team." }
        ].map((item, i) => <Reveal key={item.n} delay={i * 70}><div className="process-item"><div className="process-number">{item.n}<Minus size={26} /></div><div className="process-symbol">{i === 0 ? "◉" : i === 1 ? "◇" : i === 2 ? "↗" : "✳"}</div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div>
      </div>
    </section>
    <section className="faq-section section-pad" aria-labelledby="faq-heading">
      <div className="container-wide faq-grid">
        <div><div className="section-meta"><span className="section-num">05 —</span><span>GOOD QUESTIONS</span></div><h2 id="faq-heading">No tech brief?<br /><em>No problem.</em></h2><p>Start with the challenge. We&apos;ll help figure out the product, platform, or integration that makes sense.</p></div>
        <div className="faq-list">
          <details><summary>Can you build custom software if we only have a business problem?</summary><p>Yes. We start with a discovery conversation about your process, the people involved, and the outcome you need. A technical specification is not required to get started.</p></details>
          <details><summary>Can you connect our existing tools and automate manual work?</summary><p>We design workflow automation and API integrations for tools such as payroll, reporting, and internal operations platforms, depending on the access and capabilities each provider supports.</p></details>
          <details><summary>Do you develop nonprofit case management software?</summary><p>Yes. Our work includes LuminCase, a platform built around case management, staff workflows, referrals, service records, and fund-allocation processes for human-service teams.</p></details>
          <details><summary>Do you work with companies in Chicago and beyond?</summary><p>Luminate Systems has Chicago roots and works on digital products for teams wherever a thoughtful software solution is needed.</p></details>
        </div>
      </div>
    </section>
    <ContactCTA />
  </>;
}
