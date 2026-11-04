export function ProjectVisual({ type, compact = false }: { type: "case" | "pay" | "clinic" | "tax" | "commerce" | "devices"; compact?: boolean }) {
  if (type === "case") {
    return <div className={`project-visual project-visual--case ${compact ? "project-visual--compact" : ""}`} aria-label="Illustrative LuminCase interface composition" role="img">
      <div className="visual-noise" />
      <div className="interface-window interface-case">
        <div className="interface-sidebar">
          <div className="interface-mini-logo">L<span>•</span></div>
          <div className="sidebar-dots"><i /><i /><i /><i /></div>
          <span className="sidebar-footer-dot" />
        </div>
        <div className="interface-content">
          <div className="interface-topline"><span>OVERVIEW / OPERATIONS</span><span>● &nbsp; SYSTEM ACTIVE</span></div>
          <div className="interface-heading">Good morning, team.</div>
          <div className="interface-small">Everything important, all in one place.</div>
          <div className="interface-stat-row"><div><span>ACTIVE CASES</span><strong>128</strong><i /></div><div><span>OPEN REFERRALS</span><strong>24</strong><i /></div><div><span>TEAM UPDATES</span><strong>08</strong><i /></div></div>
          <div className="interface-bottom-row"><div className="interface-chart"><span>CASE ACTIVITY</span><div className="bars"><b style={{ height: "35%" }} /><b style={{ height: "58%" }} /><b style={{ height: "43%" }} /><b style={{ height: "73%" }} /><b style={{ height: "62%" }} /><b style={{ height: "94%" }} /><b style={{ height: "78%" }} /><b style={{ height: "88%" }} /></div></div><div className="interface-list"><span>RECENT WORK</span><p><i /> Case note updated</p><p><i /> New referral</p><p><i /> Service recorded</p></div></div>
        </div>
      </div>
      <div className="visual-caption">INTERFACE CONCEPT / LUMINCASE</div>
    </div>;
  }
  if (type === "clinic") {
    return <div className={`project-visual project-visual--clinic ${compact ? "project-visual--compact" : ""}`} role="img" aria-label="Illustrative Decare clinic operations dashboard, showing sample intake and check-in stages">
      <div className="visual-wire-grid" />
      <div className="mock-frame mock-frame--clinic">
        <div className="mock-topbar"><span className="mock-brand"><span className="mock-symbol">✳</span> decare<span className="mock-brand-dot">.</span></span><span>CLINIC OPERATIONS</span><span className="mock-pill">● &nbsp;WORKSPACE</span></div>
        <div className="mock-page-head"><div><span className="mock-eyebrow">FRONT DESK / OVERVIEW</span><strong>Better care starts here.</strong><small>Keep every check-in moving.</small></div><span className="mock-ghost-button">+ NEW INTAKE</span></div>
        <div className="clinic-stat-line"><div><span>01</span><strong>Intake</strong><small>Forms &amp; details</small></div><div><span>02</span><strong>Check-in</strong><small>Arrival confirmation</small></div><div><span>03</span><strong>Care team</strong><small>Ready for next steps</small></div></div>
        <div className="clinic-queue"><div className="clinic-queue-head"><b>Today&apos;s workflow</b><span>EXAMPLE / SAMPLE VIEW</span></div><div className="clinic-queue-row"><span className="fake-avatar">01</span><span>Digital intake</span><i className="mock-tag">RECEIVED</i></div><div className="clinic-queue-row"><span className="fake-avatar">02</span><span>Arrival check-in</span><i className="mock-tag mock-tag--blue">IN PROGRESS</i></div></div>
      </div>
      <div className="visual-caption">INTERFACE CONCEPT / DECARE</div>
    </div>;
  }
  if (type === "tax") {
    return <div className={`project-visual project-visual--tax ${compact ? "project-visual--compact" : ""}`} role="img" aria-label="Illustrative TaxOS workspace for tax document intake, review, and reconciliation">
      <div className="visual-wire-grid" />
      <div className="tax-floating-sheet"><span>1040 / K-1</span><div className="tax-sheet-rule"/><div className="tax-sheet-rule tax-sheet-rule--short"/><div className="tax-sheet-columns"><b/><b/><b/></div><div className="tax-sheet-rule"/><div className="tax-sheet-rule tax-sheet-rule--short"/></div>
      <div className="mock-frame mock-frame--tax">
        <div className="mock-topbar"><span className="mock-brand">Tax<span className="mock-brand-dot">OS</span></span><span>DOCUMENT WORKSPACE</span><span className="mock-pill">REVIEW MODE</span></div>
        <div className="mock-page-head"><div><span className="mock-eyebrow">TAX OPERATIONS</span><strong>From documents to decisions.</strong><small>Make every review step visible.</small></div></div>
        <div className="tax-stage-grid"><div><span>01 / COLLECT</span><strong>Intake</strong><span className="tax-stage-icon">⇣</span></div><div><span>02 / UNDERSTAND</span><strong>Extract</strong><span className="tax-stage-icon">▤</span></div><div><span>03 / VERIFY</span><strong>Review</strong><span className="tax-stage-icon">✓</span></div></div>
        <div className="tax-workflow"><span>EXAMPLE DOCUMENT QUEUE</span><div><b>K-1 / PARTNERSHIP</b><i>READY FOR REVIEW</i></div><div><b>1099 / SUPPORTING</b><i>CHECK FIELDS</i></div></div>
      </div>
      <div className="visual-caption">INTERFACE CONCEPT / TAXOS</div>
    </div>;
  }
  if (type === "commerce") {
    return <div className={`project-visual project-visual--commerce ${compact ? "project-visual--compact" : ""}`} role="img" aria-label="Illustrative MRKT ID CO e-commerce storefront with product collections">
      <div className="commerce-showcase">
        <div className="commerce-nav"><span>MRKT<span className="commerce-logo-accent"> ID CO</span></span><span>DISCOVER &nbsp; / &nbsp; THE COLLECTION</span><span>↗</span></div>
        <div className="commerce-stage"><div><span className="mock-eyebrow">A DIFFERENT KIND OF STOREFRONT</span><strong>Curated for<br /><em>discovery.</em></strong><span className="commerce-cta">EXPLORE THE EDIT ↗</span></div><div className="commerce-display"><div className="commerce-product-shape commerce-product-shape-a"/><div className="commerce-product-shape commerce-product-shape-b"/><div className="commerce-product-shape commerce-product-shape-c"/></div></div>
        <div className="commerce-bottom"><span>COLLECTIONS</span><span>OBJECTS / STORIES / DETAILS</span><span>01 — 03</span></div>
      </div>
      <div className="visual-caption">STOREFRONT CONCEPT / MRKT ID CO</div>
    </div>;
  }
  if (type === "devices") {
    return <div className={`project-visual project-visual--devices ${compact ? "project-visual--compact" : ""}`} role="img" aria-label="Illustrative XPhones.fr e-commerce storefront for smartphones and electronics">
      <div className="devices-frame"><div className="devices-navbar"><span><strong>X</strong>PHONES<span className="devices-domain">.FR</span></span><span>SMARTPHONES &nbsp; ACCESSOIRES &nbsp; TABLETTES</span><span>⌕ &nbsp; ◇</span></div>
        <div className="devices-main"><div className="devices-copy"><span className="mock-eyebrow">TECHNOLOGIE / AU QUOTIDIEN</span><strong>Le bon appareil.<br /><em>Au bon endroit.</em></strong><span className="devices-button">DÉCOUVRIR ↗</span></div><div className="device-cluster"><div className="phone phone-back"><div className="phone-camera"><i/><i/><i/></div></div><div className="phone phone-front"><div className="phone-notch"/><div className="phone-screen-light"/></div></div></div>
        <div className="devices-bottom"><span>SMARTPHONES</span><span>ACCESSOIRES</span><span>APPAREILS</span></div>
      </div>
      <div className="visual-caption">STOREFRONT CONCEPT / XPHONES.FR</div>
    </div>;
  }
  return <div className={`project-visual project-visual--pay ${compact ? "project-visual--compact" : ""}`} aria-label="Illustrative PayBridge interface composition" role="img">
    <div className="visual-orbit visual-orbit-1"/><div className="visual-orbit visual-orbit-2"/>
    <div className="pay-window">
      <div className="pay-header"><span className="pay-symbol">↗</span><span>PAYBRIDGE / WORKSPACE</span><span>● LIVE VIEW</span></div>
      <div className="pay-title">Time, in sync.</div>
      <div className="pay-label">WEEKLY HOURS OVERVIEW</div>
      <div className="pay-graph"><div className="graph-lines"/><svg viewBox="0 0 500 140" preserveAspectRatio="none" role="presentation"><path d="M0 111 C40 125 58 87 100 89 S154 109 196 72 S270 105 312 44 S397 89 439 33 S480 46 500 12" stroke="#4B90FF" strokeWidth="4" fill="none"/><path d="M0 111 C40 125 58 87 100 89 S154 109 196 72 S270 105 312 44 S397 89 439 33 S480 46 500 12 L500 140 L0 140Z" fill="url(#payFill)"/><defs><linearGradient id="payFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#4B90FF" stopOpacity=".28"/><stop offset="1" stopColor="#4B90FF" stopOpacity="0"/></linearGradient></defs></svg></div>
      <div className="pay-stats"><div><span>TOTAL HOURS</span><strong>1,284<span>h</span></strong></div><div><span>READY FOR REVIEW</span><strong>92<span>%</span></strong></div></div>
    </div>
    <div className="visual-caption">INTERFACE CONCEPT / PAYBRIDGE</div>
  </div>;
}
