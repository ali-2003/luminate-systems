import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Inquiry = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  projectType?: unknown;
  message?: unknown;
  website?: unknown;
};

const safe = (input: unknown, max: number) =>
  typeof input === "string" ? input.trim().slice(0, max) : "";
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);

export async function POST(request: NextRequest) {
  // Browser requests must come from this website; this is an additional safeguard,
  // not a replacement for production rate limiting / bot protection.
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const originUrl = new URL(origin);
      if (originUrl.host !== request.headers.get("host") || !["https:", "http:"].includes(originUrl.protocol)) {
        return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    }
  }

  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "This form expects JSON." }, { status: 415 });
  }
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > 12000) {
    return NextResponse.json({ error: "Message too large." }, { status: 413 });
  }

  let data: Inquiry;
  try {
    const body = await request.text();
    if (body.length > 12000) return NextResponse.json({ error: "Message too large." }, { status: 413 });
    const parsed: unknown = JSON.parse(body);
    if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") throw Error("Invalid input");
    data = parsed as Inquiry;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept likely bot submissions without notifying the team.
  if (safe(data.website, 200)) return NextResponse.json({ ok: true });

  const name = safe(data.name, 100);
  const email = safe(data.email, 200);
  const organization = safe(data.organization, 140);
  const projectType = safe(data.projectType, 100);
  const message = safe(data.message, 5000);
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 20) {
    return NextResponse.json({ error: "Enter a valid name, email, and message of at least 20 characters." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;
  if (!apiKey || !from || !to) {
    // Important: never pretend the submission was delivered and never redirect to mailto:.
    return NextResponse.json({ error: "The form isn't accepting messages yet. Please contact us directly until email delivery is configured." }, { status: 503 });
  }

  const html = `<h2>New website inquiry · Luminate Systems</h2><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Organization:</b> ${escapeHtml(organization || "Not provided")}</p><p><b>Project type:</b> ${escapeHtml(projectType || "Not selected")}</p><h3>The challenge</h3><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;
  const text = `New website inquiry\n\nName: ${name}\nEmail: ${email}\nOrganization: ${organization || "Not provided"}\nProject: ${projectType || "Not selected"}\n\n${message}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Luminate website inquiry — ${name.replace(/[\r\n]/g, " ")}`,
        html,
        text
      }),
      signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) {
      console.error("Resend contact API failed", response.status);
      return NextResponse.json({ error: "We couldn't send your inquiry right now. Please try again shortly." }, { status: 502 });
    }
    const result = await response.json() as { id?: string };
    if (!result.id) return NextResponse.json({ error: "We couldn't confirm that your inquiry was accepted. Please try again." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't connect to our email service. Please try again shortly." }, { status: 502 });
  }
}
