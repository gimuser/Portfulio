# Portfolio Website

Modern personal portfolio and CV website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project Content

Portfolio content is stored in local data files so profile, education, skills, projects, links, and translations can be updated without changing the page structure.

## Missing Placeholders

Replace these before publishing:

- project-specific GitHub URLs for older academic projects, if those repositories exist
- `[ADD LIVE DEMO URL]`
- Certificates and credential links
- Project repositories, screenshots, notebooks, reports, and metrics
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

The script builds the Docker image and starts the production Next.js app in the background at `http://localhost:3000`. If port `3000` is already busy, it automatically uses the next free port and prints the correct URL.

The terminal does not stay attached to the container. To follow logs manually:

```bash
docker logs -f oualid-portfolio
```

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
3. Keep the default Next.js framework settings.
4. Set the production domain and update metadata URLs in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
5. Add the following private environment variables in Vercel Project Settings > Environment Variables:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
```

The repository also includes a `vercel.json` file and a `.env.example` file to make the Vercel setup explicit and reproducible.

### Netlify

Use:

- Build command: `npm run build`
- Publish directory: `.next`

Install the official Next.js runtime/plugin if Netlify does not auto-detect it.

### GitHub Pages

This app uses the Next.js App Router and is best deployed on Vercel or Netlify. GitHub Pages requires static export adjustments that are not enabled by default.

## Environment Variables

The contact form sends mail from a server action through SMTP. Configure these only in private runtime environment variables in your hosting provider dashboard:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
```

Do not commit secrets. The form validates input on the server, uses a honeypot field, rate limits submissions, and sends visitor emails through `replyTo` rather than trusting visitor-controlled sender headers.

After replacing `SMTP_PASS`, send a real delivery test:

```bash
npm run test:contact-email
```
