# Abi — Portfolio (Next.js, TypeScript, Tailwind, Framer Motion)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```
Requires Node.js 18.18+.

## Edit your content
All text, links, skills, projects and certifications live in `lib/data.ts`.
- Replace the placeholder `email`, `linkedin`, `github`.
- Projects: set `status` honestly ("Concept", "In progress", "Completed"). Empty `liveUrl`/`codeUrl` show disabled buttons; add real links when they exist.
- Project images: put files in `public/` and set `image: "/yourfile.png"`.
- Profile photo: replace the placeholder block in `components/Hero.tsx`.
- Colors: `tailwind.config.ts`.

## Contact form
Uses [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Until then the form shows a clear "not configured" message instead of pretending to send.

## Deploy
Push to GitHub and import into Vercel; add the same env vars there (and `NEXT_PUBLIC_SITE_URL`).
"# Portfolio" 
