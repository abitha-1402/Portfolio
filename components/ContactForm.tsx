"use client";
import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Errors = {};
    if (!d.name?.trim()) errs.name = "Enter your name.";
    if (!emailRe.test(d.email ?? "")) errs.email = "Enter a valid email address.";
    if ((d.message ?? "").trim().length < 10) errs.message = "Write at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending"); setFeedback("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Message could not be sent.");
      setStatus("success"); setFeedback("Message sent. Thanks for reaching out."); form.reset();
    } catch (err) {
      setStatus("error"); setFeedback(err instanceof Error ? err.message : "Message could not be sent. Try emailing directly.");
    }
  }

  const field = "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm";
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="hidden" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {(["name", "email"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="text-sm font-medium">{k === "name" ? "Name" : "Email"}</label>
          <input id={k} name={k} type={k === "email" ? "email" : "text"} autoComplete={k} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
          {errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-600">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {errors.message && <p id="message-err" className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" disabled={status === "sending"} className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4A3CB8] disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-600"}`}>{feedback}</p>
    </form>
  );
}
