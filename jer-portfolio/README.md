# Jer / Developer portfolio

A dark-first editorial developer portfolio. Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and Lucide React. Static export makes GitHub Pages deployment possible; no server-side form handler is assumed.

## Before publishing

The four projects are explicitly **speculative concept work**, not client projects. Experience is an editable scaffold, and verified testimonials/social URLs are intentionally absent. Replace the concepts, employment history, portrait, statistics, real screenshots, demos and repository links with your own verified work. The contact email is set to `jer.nellmo.las@gmail.com`; change it in `data/site.ts` if needed. Never add private credentials to client-side env vars.

## Install and run

Requirements: Node.js 20.9+ and npm. Run `npm install`, then `npm run dev` for local development. Run `npm run typecheck` and `npm run build` for validation. `npm run build` writes deployable static files to `out/`. For local static inspection, serve `out/` with a static file server. `npm run start` is not for a static-export build.

## Configuration

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to your live domain without trailing slash. For GitHub Pages project sites, set `NEXT_PUBLIC_BASE_PATH=/your-repo-name`. For a custom domain or root deployment, leave the base path blank. Only public, non-secret values belong in `NEXT_PUBLIC_*` variables.

## Deployment

**Vercel / Netlify:** import the GitHub repository, set the same public environment values, run `npm run build`, publish `out/` as a static site. Next.js static export has no server runtime.

**GitHub Pages:** enable Pages from GitHub Actions and add repository variable `NEXT_PUBLIC_SITE_URL=https://YOUR_USERNAME.github.io` (or your custom domain). The workflow sets `NEXT_PUBLIC_BASE_PATH=/${{ github.event.repository.name }}` for a project site. If you use a custom domain, remove that base path from the workflow. The workflow builds, adds `.nojekyll`, and publishes `out/`. Pages support is static only, so server actions, API routes, and Next.js image optimization are not available. Contact uses the visitor's configured email app via `mailto:` and does not falsely claim delivery.

## Structure

- `app/`: pages, static case-study routes, global styles, SEO routes and metadata.
- `components/`: reusable navigation, sections, project visual/case study, form, theme and progress UI.
- `data/`: editable site copy, projects, experience, skills, social profiles and testimonials.
- `public/`: favicon and future real screenshots/profile images.

Project previews are CSS-generated original mockups, not photographs or client assets. Add actual images under `public/`, use `next/image` with proper alt text, and remove speculative content when real work is available. Motion respects reduced-motion settings. Theme choice persists in local storage.
