import { Mail, Linkedin, Github } from "lucide-react";
import { site } from "@/lib/data";
import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  const links = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", href: site.linkedin, external: true },
    { icon: Github, label: "GitHub", href: site.github, external: true },
  ];
  return (
    <Section id="contact" title="Let's connect">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="max-w-md leading-relaxed text-muted">Whether you&apos;re a recruiter, designer, or developer, I&apos;d love to hear from you. I&apos;m open to internships, collaborations, and feedback on my work.</p>
          <ul className="mt-6 space-y-3">
            {links.map(({ icon: Icon, label, href, external }) => (
              <li key={href}>
                <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-3 text-sm hover:text-accent">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={18} aria-hidden /></span>{label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
