"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight">{site.name}<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="text-sm text-muted transition-colors hover:text-ink">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4A3CB8] sm:inline-block">Let&apos;s Connect</a>
          <button type="button" className="rounded-lg p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={close} className="block py-3 text-base">{n.label}</a></li>
            ))}
            <li className="py-3"><a href="#contact" onClick={close} className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white">Let&apos;s Connect</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
