import { process } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <Section id="process" title="UI/UX design process" intro="How I approach a design from first question to final polish.">
      <ol className="relative max-w-2xl space-y-8 border-l border-line pl-8">
        {process.map((s, i) => (
          <li key={s.title} className="relative">
            <Reveal delay={i * 0.04}>
              <span className="absolute -left-[3.15rem] grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-sm font-medium text-accent">{i + 1}</span>
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
