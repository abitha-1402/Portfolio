import { Palette, Code2, BookOpen } from "lucide-react";
import { about, highlights } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const icons = { palette: Palette, code: Code2, book: BookOpen };

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-4 leading-relaxed text-muted">
          {about.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          {highlights.map((h, i) => {
            const Icon = icons[h.icon];
            return (
              <li key={h.title}>
                <Reveal delay={i * 0.06} className="flex h-full gap-4 rounded-2xl border border-line bg-white p-5 shadow-card md:items-center">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={20} aria-hidden /></span>
                  <div><h3 className="font-medium">{h.title}</h3><p className="text-sm text-muted">{h.text}</p></div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
