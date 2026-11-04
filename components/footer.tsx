import Link from "next/link";
import { ArrowUpRight, Asterisk, Mark } from "@/components/icons";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="container-wide">
      <div className="footer-top">
        <div>
          <div className="tiny-label"><span className="status-dot" /> OPEN TO SELECT PROJECTS</div>
          <h2>Have something<br /><em>ambitious</em> in mind?</h2>
        </div>
        <Link className="footer-round-link" href="/contact" aria-label="Contact Luminate Systems"><ArrowUpRight size={46} /></Link>
      </div>
      <div className="footer-middle">
        <div className="footer-logo"><Mark size={46} /><span>LUMINATE<br /><strong>SYSTEMS</strong></span></div>
        <div className="footer-links-group"><span className="tiny-label">EXPLORE</span><Link href="/work">Selected work</Link><Link href="/services">Expertise</Link><Link href="/studio">The studio</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-links-group"><span className="tiny-label">SAY HELLO</span><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a><a href="tel:+13312436122">{SITE_PHONE}</a><p>Chicago roots. Worldwide reach.</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} LUMINATE SYSTEMS. BUILT WITH INTENTION.</span><span>SOFTWARE IS THE MEDIUM. IMPACT IS THE POINT.</span><a href="#top">BACK TO TOP ↑</a></div>
    </div>
    <Asterisk className="footer-star" size={350} />
  </footer>;
}
