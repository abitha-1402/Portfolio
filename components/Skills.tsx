import { skills } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Tools and technologies I work with.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.category} delay={i * 0.05} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h3 className="font-medium">{g.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="rounded-full bg-accent-soft px-3 py-1 text-sm text-accent">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
