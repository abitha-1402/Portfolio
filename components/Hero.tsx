import { site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-24 md:grid-cols-[1.4fr_1fr]">
      <Reveal>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden /> {site.availability}
        </p>
        <h1 id="hero-title" className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{site.headline}</h1>
        <p className="mt-3 text-lg font-medium text-accent">Hi, I&apos;m {site.name}.</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black">Explore My Work</a>
          <a href="#contact" className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent">Contact Me</a>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
        {/* Photo placeholder: replace this block with <Image src="/profile.jpg" ... /> */}
        <div role="img" aria-label="Profile photo placeholder" className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-accent-soft shadow-card">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20" />
          <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-[2rem] bg-accent/10" />
          <span className="absolute inset-0 grid place-items-center text-8xl font-semibold text-accent/70">{site.name[0]}</span>
        </div>
      </Reveal>
    </section>
  );
}
