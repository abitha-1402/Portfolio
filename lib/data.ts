// Edit everything about the site here.
export const site = {
  name: "Abi",
  role: "B.Tech Computer Science and Business Systems Student",
  college: "KPRIET, Coimbatore",
  headline: "Designing thoughtful digital experiences. Building them with code.",
  intro:
    "I'm a CSBS student at KPRIET interested in UI/UX design and frontend development. I like turning real problems into interfaces that feel simple to use.",
  availability: "Open to internships and learning opportunities.",
  goal: "To become a skilled UI/UX professional and frontend developer by creating meaningful digital experiences.",
  // TODO: replace with your real details
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  description:
    "Portfolio of Abi, a B.Tech CSBS student at KPRIET focused on UI/UX design and frontend development.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = [
  "I enjoy understanding what people actually need before I open a design tool or an editor. That habit shapes how I approach every project: start with the problem, then design and build the simplest thing that solves it.",
  "As a student, I'm learning across design and code at the same time. Figma helps me explore flows and layouts; Next.js and JavaScript let me turn them into working interfaces.",
];

export const highlights = [
  { icon: "palette", title: "UI/UX Design", text: "Intuitive interfaces shaped by user needs." },
  { icon: "code", title: "Frontend Development", text: "Responsive, accessible interfaces built with modern tools." },
  { icon: "book", title: "Continuous Learning", text: "Always picking up new tools and techniques." },
] as const;

export const skills = [
  { category: "Programming", items: ["Java", "JavaScript"] },
  { category: "Frontend", items: ["HTML", "CSS", "React", "Next.js"] },
  { category: "Design", items: ["Figma", "Wireframing", "Prototyping", "User Research"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export type Project = {
  title: string; description: string; stack: string[];
  status: "Concept" | "In progress" | "Completed";
  image?: string; // e.g. "/projects/civicfix.png" (put the file in /public)
  liveUrl?: string; codeUrl?: string; // leave empty until real links exist
};

export const projects: Project[] = [
  {
    title: "CivicFix — Smart Community Issue Resolution Platform",
    description: "A platform for reporting and tracking community issues such as road damage, garbage, water leakage, and broken streetlights.",
    stack: ["Next.js", "TypeScript", "Figma"], status: "In progress", liveUrl: "", codeUrl: "",
  },
  {
    title: "RouteZen — Smart Bus Tracking App",
    description: "A mobile app concept that helps commuters explore bus routes, track journeys, receive stop reminders, and access travel information.",
    stack: ["Figma", "UI/UX", "Prototyping"], status: "Concept", liveUrl: "", codeUrl: "",
  },
  {
    title: "Online Food Ordering App",
    description: "A user-friendly food ordering application concept focused on simple navigation, product discovery, and a smooth ordering experience.",
    stack: ["Figma", "UI/UX", "User Flows"], status: "Concept", liveUrl: "", codeUrl: "",
  },
];

export const process = [
  { title: "Understand the problem", text: "Define who is affected and what success looks like." },
  { title: "Research users", text: "Talk to people and observe how they handle the task today." },
  { title: "Create user flows and wireframes", text: "Map the journey and sketch layouts before styling." },
  { title: "Design interfaces in Figma", text: "Build clear, consistent screens and components." },
  { title: "Prototype and test", text: "Click through the design with real users." },
  { title: "Improve based on feedback", text: "Refine, and repeat where it matters." },
];

export const education = {
  degree: "B.Tech in Computer Science and Business Systems",
  school: "KPRIET, Coimbatore",
  status: "Currently pursuing",
};

// Add entries like { title: "Certificate name", issuer: "Issuer", year: "2026", url: "" }
export const certifications: { title: string; issuer: string; year?: string; url?: string }[] = [];
