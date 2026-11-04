"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mark } from "@/components/icons";

const links = [
  { href: "/work", text: "Work" },
  { href: "/services", text: "Expertise" },
  { href: "/studio", text: "Studio" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 14);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
    <div className="nav-shell container-wide">
      <Link className="brand" href="/" aria-label="Luminate Systems homepage" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark"><Mark size={30} /></span>
        <span className="brand-name">LUMINATE<span>SYSTEMS®</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <Link href={link.href} key={link.href} className={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "active" : ""}>{link.text}<span className="nav-hover-dot" /></Link>)}
      </nav>
      <Link className="nav-contact" href="/contact"><span>Let&apos;s talk</span><ArrowUpRight size={18} /></Link>
      <button className={`menu-trigger ${menuOpen ? "is-open" : ""}`} type="button" onClick={() => setMenuOpen((v) => !v)} aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
        <span /><span />
      </button>
    </div>
    <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
      {links.map((link, i) => <Link tabIndex={menuOpen ? 0 : -1} href={link.href} key={link.href}><span>0{i + 1}</span>{link.text}<ArrowUpRight size={24} /></Link>)}
      <Link tabIndex={menuOpen ? 0 : -1} href="/contact"><span>04</span>Let&apos;s talk<ArrowUpRight size={24} /></Link>
      <p>INDEPENDENT SOFTWARE STUDIO / CHICAGO & EVERYWHERE</p>
    </div>
  </header>;
}
