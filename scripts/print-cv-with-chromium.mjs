import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const url = process.env.CV_URL ?? "http://localhost:3000/cv";
const out = resolve("public/cv/oualid-ait-alla-modern-cv.pdf");
mkdirSync(dirname(out), { recursive: true });

const candidates = [process.env.CHROMIUM_PATH, "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"].filter(Boolean);
const chromium = candidates.find((candidate) => candidate && existsSync(candidate));

if (!chromium) {
  console.error("Chromium was not found. Set CHROMIUM_PATH to generate the CV PDF.");
  process.exit(1);
}

const result = spawnSync(
  chromium,
  [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    `--print-to-pdf=${out}`,
    "--print-to-pdf-no-header",
    url,
  ],
  { stdio: "inherit" },
);

process.exit(result.status ?? 1);
