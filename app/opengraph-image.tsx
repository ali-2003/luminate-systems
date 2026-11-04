import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Luminate Systems — Tell us the problem. We devise the solution.";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#080C17", color: "#FFFFFF", display: "flex", flexDirection: "column", padding: "65px 76px", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, fontWeight: 800, letterSpacing: -1 }}><div style={{ display: "flex", alignItems: "center" }}>LUMINATE <span style={{ color: "#4B90FF" }}>SYSTEMS®</span></div><div style={{ fontSize: 13, letterSpacing: 3, fontWeight: 400 }}>INDEPENDENT SOFTWARE STUDIO</div></div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 90, fontSize: 75, fontWeight: 800, letterSpacing: -8, lineHeight: .98 }}><div>Tell us the problem.</div><div style={{ display: "flex", alignItems: "baseline" }}><span style={{ color: "#4B90FF" }}>We devise</span> the solution.</div></div>
      <div style={{ display: "flex", marginTop: "auto", justifyContent: "space-between", borderTop: "1px solid #34507B", paddingTop: 24, fontSize: 17 }}><span>BUILD WITH INTENTION.</span><span>luminatesystems.com ↗</span></div>
      <div style={{ display: "flex", position: "absolute", width: 420, height: 420, border: "60px solid #4B90FF", borderRadius: "50%", right: -145, top: 140, opacity: 0.18 }} />
    </div>,
    size
  );
}
