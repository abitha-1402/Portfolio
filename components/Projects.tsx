import Image from "next/image";
import { LayoutDashboard } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

function LinkButton({ href, label, primary }: { href?: string; label: string; primary?: boolean }) {
  const base = "rounded-full px-4 py-2 text-sm font-medium transition-colors";
  if (!href) return <span aria-disabled="true" title="Not available yet" className={`${base} cursor-not-allowed border border-line text-muted/60`}>{label}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${primary ? "bg-ink text-white hover:bg-black" : "border border-line hover:border-accent hover:text-accent"}`}>{label}</a>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="relative aspect-[16/10] bg-accent-soft">
        {p.image ? <Image src={p.image} alt={`${p.title} preview`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
          : <div className="grid h-full place-items-center text-accent/60"><LayoutDashboard size={48} aria-hidden /></div>}
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm">{p.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{s}</li>)}</ul>
        <div className="mt-auto flex gap-2 pt-6">
          <LinkButton href={p.liveUrl} label="View Project" primary />
          <LinkButton href={p.codeUrl} label="Source Code" />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Concepts and work in progress. Status is shown on each card.">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <li key={p.title}><Reveal delay={i * 0.06} className="h-full"><Card p={p} /></Reveal></li>)}
      </ul>
    </Section>
  );
}
