# Oualid Ait Alla Portfolio

Modern personal portfolio and CV website for Oualid Ait Alla, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Source Material

The portfolio uses Oualid Ait Alla's profile details and repositories from the GitHub account `gimuser`. Unsupported project claims are not presented as completed work.

Current profile details:

- Name: Oualid Ait Alla
- Email: oualidaitalla18@gmail.com
- Location: Beni Mellal, Morocco
- LinkedIn: https://www.linkedin.com/in/aitalla-oualid-9797132bb/
- GitHub: https://github.com/gimuser
- Languages: Arabic native, English intermediate, French intermediate, Spanish beginner
- Education entries: 2026 Master's student in Data Science & Information Systems Security, 2025 Bachelor's in Data Science & Information Systems Security, 2024 DEUG Mathematics & Computer Science, 2023 Mathematical Sciences high school diploma, 2022 Physical Sciences high school diploma
- Academic projects: Car Price Prediction System, Hotel Management System (PHP), Image Classification with PyTorch, Android Device Security Testing
- GitHub projects: BachelorAI Tutor, Islamic AI Chat, Maison Global Store

## Missing Placeholders

Replace these before publishing:

- project-specific GitHub URLs for older academic projects, if those repositories exist
- `[ADD LIVE DEMO URL]`
- Certificates and credential links
- Project repositories, screenshots, notebooks, reports, and metrics
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

## Run With Docker

```bash
./run_project.sh
```

The script builds the Docker image and serves the production Next.js app at `http://localhost:3000`. If port `3000` is already busy, it automatically uses the next free port and prints the correct URL.

If `.env.local` exists, `run_project.sh` passes it to the Docker container at runtime. Secrets are not copied into the Docker image.

To stop the portfolio container:

```bash
./run_project.sh stop
```

## CV PDF

The `/cv` page is print-friendly and supports English/French switching in the browser.
For the public website, `/cv` is the safe default: visitors can view the CV and use browser print/save-as-PDF without needing a committed PDF file.

To generate both English and French PDFs locally:

```bash
npm run dev
npm run pdf:cv:all
```

The script prints `/cv?lang=en` and `/cv?lang=fr` to local files under `public/cv/` using Chromium. These generated PDF files are ignored by Git and should stay local/private unless you intentionally decide to publish them. The default `npm run pdf:cv` command generates the English PDF.

## Content Updates

- Profile and education: `data/profile.ts`
- Projects: `data/projects.ts`
- Skills: `data/skills.ts`
- Research interests and capabilities: `data/research.ts`
- Certifications: `data/certifications.ts`
- UI translations: `messages/en.json` and `messages/fr.json`

## Adding a Project

1. Add a new object to `data/projects.ts`.
2. Provide only supported technologies, results, links, and dataset information.
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

The contact form sends mail from a server action through SMTP. For Gmail delivery, create a Google App Password and keep these values in `.env.local`:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=oualidaitalla18@gmail.com
SMTP_PASS=your-google-app-password
CONTACT_FROM_EMAIL=oualidaitalla18@gmail.com
CONTACT_TO_EMAIL=oualidaitalla18@gmail.com
```

Do not commit `.env.local`. The form validates input on the server, uses a honeypot field, rate limits submissions, and sends visitor emails through `replyTo` rather than trusting visitor-controlled sender headers.

After replacing `SMTP_PASS`, send a real delivery test:

```bash
npm run test:contact-email
```
