import { GraduationCap } from "lucide-react";
import { education, certifications } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal className="flex max-w-xl items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-card">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><GraduationCap size={20} aria-hidden /></span>
        <div>
          <h3 className="font-medium">{education.degree}</h3>
          <p className="text-sm text-muted">{education.school}</p>
          <p className="mt-1 text-sm text-accent">{education.status}</p>
        </div>
      </Reveal>
      {certifications.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="mt-4 grid max-w-xl gap-3">
            {certifications.map((c) => (
              <li key={c.title} className="rounded-xl border border-line bg-white p-4">
                <p className="font-medium">{c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{c.title}</a> : c.title}</p>
                <p className="text-sm text-muted">{c.issuer}{c.year ? `, ${c.year}` : ""}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
