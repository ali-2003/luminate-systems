import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

export default function NotFound() { return <section className="notfound-section"><div className="container-wide"><span className="tiny-label">404 / THIS ROUTE DOESN&apos;T EXIST</span><h1>Wrong turn.<br /><em>Great potential.</em></h1><p>That page isn&apos;t here, but there&apos;s still plenty to explore.</p><Link className="button button-acid" href="/">Back to the beginning <ArrowUpRight size={20}/></Link></div></section>; }
