import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function ContactCTA({ light = false }: { light?: boolean }) {
  return <section className={`contact-cta ${light ? "contact-cta--light" : ""}`}>
    <div className="container-wide">
      <Reveal>
        <div className="contact-cta-bar"><span className="tiny-label">LET’S GET TO THE ROOT OF IT</span><span className="tiny-label">NO TECHNICAL BRIEF REQUIRED</span></div>
        <Link href="/contact" className="contact-cta-link"><span>Have a problem?<br /><em>Let&apos;s solve it.</em></span><span className="contact-cta-arrow"><ArrowUpRight size={42} /></span></Link>
      </Reveal>
    </div>
  </section>;
}
