import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>{site.college}</p>
      </div>
    </footer>
  );
}
