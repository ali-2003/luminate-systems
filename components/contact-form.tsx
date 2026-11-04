"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "@/components/icons";
import { SITE_EMAIL } from "@/lib/site";

type Submission = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<Submission>("idle");
  const [message, setMessage] = useState("");
  const sending = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      organization: String(data.get("organization") || "").trim(),
      projectType: String(data.get("projectType") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || "").trim()
    };
    sending.current = true;
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store"
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (response.ok && result.ok) {
        setState("sent");
        form.reset();
        setMessage("Your inquiry has been sent. Thanks for reaching out — we’ll reply to the email you provided.");
      } else {
        setState("error");
        setMessage(result.error || "We couldn't send your message. Please try again shortly.");
      }
    } catch {
      setState("error");
      setMessage(`The form is temporarily unavailable. You can contact us at ${SITE_EMAIL}.`);
    } finally {
      sending.current = false;
    }
  }

  return <form className="contact-form" onSubmit={onSubmit} aria-busy={state === "sending"}>
    <div className="form-top"><span className="tiny-label">TELL US WHAT YOU&apos;RE THINKING</span><span className="tiny-label">* REQUIRED</span></div>
    <div className="form-grid"><label className="field"><span>Your name *</span><input name="name" type="text" minLength={2} maxLength={100} required autoComplete="name" placeholder="Your full name" /></label><label className="field"><span>Work email *</span><input name="email" type="email" maxLength={200} required autoComplete="email" inputMode="email" placeholder="you@company.com" /></label></div>
    <div className="form-grid"><label className="field"><span>Company / organization</span><input name="organization" type="text" maxLength={140} autoComplete="organization" placeholder="Where do you work?" /></label><label className="field"><span>What are we building?</span><select name="projectType" defaultValue=""><option value="" disabled>Pick a direction</option><option>Custom software platform</option><option>Healthcare or clinic software</option><option>Tax and accounting workflows</option><option>Nonprofit technology</option><option>E-commerce platform</option><option>Website or digital experience</option><option>Automation or integration</option><option>Something else entirely</option></select></label></div>
    <label className="field field--full"><span>Tell us about the challenge *</span><textarea name="message" rows={5} minLength={20} maxLength={5000} required placeholder="What are you trying to solve? What's not working? What would success look like?" /></label>
    <div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-footer"><p>Sent directly from this website. No email app needed. Please do not include medical records, Social Security numbers, or financial account details.</p><button className="button button-acid" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send my inquiry"}<ArrowUpRight size={20}/></button></div>
    {message && <p className={`form-status ${state === "sent" ? "form-status--success" : "form-status--error"}`} role={state === "error" ? "alert" : "status"} aria-live={state === "error" ? "assertive" : "polite"}>{message}</p>}
  </form>;
}
