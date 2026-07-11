# Oualid Ait Alla Portfolio

Modern personal portfolio and CV website for Oualid Ait Alla, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Verified Source Material

The original workspace contained `CV.pdf`. The portfolio now also uses repositories from the authenticated GitHub account `gimuser`. Unsupported project claims are not presented as completed work.

Extracted from the old CV:

- Name: Oualid Ait Alla
- Email: oualidaitalla18@gmail.com
- Location: Mghila, Beni Mellal, Morocco
- Languages: Arabic native, English intermediate, French intermediate, Spanish beginner
- Education entries: 2025 Data Science & Information Systems Security, 2024 DEUG Mathematics & Computer Science, 2023 Mathematical Sciences high school diploma, 2022 Physical Sciences high school diploma
- CV projects: Car Price Prediction System, Hotel Management System (PHP), Image Classification with PyTorch, Android Device Security Testing
- GitHub projects: BachelorAI Tutor, Islamic AI Chat, Maison Global Store

## Missing Placeholders

Replace these before publishing:

- `[ADD LINKEDIN URL]`
- project-specific GitHub URLs for older CV-only projects, if those repositories exist
- `[ADD LIVE DEMO URL]`
- `[ADD INSTITUTION]`
- Certificates and credential links
- Project repositories, screenshots, notebooks, reports, and verified metrics
- Optional public phone number decision
- Production domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run typecheck
npm run build
```

## CV PDF

The `/cv` page is print-friendly and supports English/French switching in the browser.

To generate a modern PDF locally:

```bash
npm run dev
npm run pdf:cv
```

The script prints `http://localhost:3000/cv` to `public/cv/oualid-ait-alla-modern-cv.pdf` using local Chromium. You can also open `/cv` and use the `Print / Save PDF` button.

## Content Updates

- Profile and education: `data/profile.ts`
- Projects: `data/projects.ts`
- Skills: `data/skills.ts`
- Research interests and capabilities: `data/research.ts`
- Certifications: `data/certifications.ts`
- UI translations: `messages/en.json` and `messages/fr.json`

## Adding a Project

1. Add a new object to `data/projects.ts`.
2. Provide only verified technologies, results, links, and dataset information.
3. Add screenshots or project assets under `public/projects/`.
4. Run `npm run lint` and `npm run build`.

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js settings.
4. Add a production domain and update metadata URLs.

### Netlify

Use:

- Build command: `npm run build`
- Publish directory: `.next`

Install the official Next.js runtime/plugin if Netlify does not auto-detect it.

### GitHub Pages

This app uses the Next.js App Router and is best deployed on Vercel or Netlify. GitHub Pages requires static export adjustments that are not enabled by default.

## Environment Variables

No environment variables are required for the current static portfolio. Add email/contact form secrets only on the server side when integrating a real mail provider.
