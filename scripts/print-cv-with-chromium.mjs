import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const requestedLanguage = process.env.CV_LANG === "fr" || process.env.CV_LANG === "all" ? process.env.CV_LANG : "en";
const languages = requestedLanguage === "all" ? ["en", "fr"] : [requestedLanguage];
const cvKind = process.env.CV_KIND === "ats" ? "ats" : "modern";

const candidates = [process.env.CHROMIUM_PATH, "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"].filter(Boolean);
const chromium = candidates.find((candidate) => candidate && existsSync(candidate));

if (!chromium) {
  console.error("Chromium was not found. Set CHROMIUM_PATH to generate the CV PDF.");
  process.exit(1);
}

function cvUrl(language) {
  const path = cvKind === "ats" ? "/ats-cv" : "/cv";
  const target = new URL(process.env.CV_URL ?? "http://localhost:3000");
  target.pathname = path;
  target.searchParams.set("lang", language);
  return target.toString();
}

let exitStatus = 0;

for (const language of languages) {
  const outputName = cvKind === "ats"
    ? `Oualid_Ait_Alla_ATS_CV_${language.toUpperCase()}.pdf`
    : language === "en"
      ? "Oualid_Ait_Alla_CV.pdf"
      : "Oualid_Ait_Alla_CV_FR.pdf";
  const out = resolve(`public/cv/${outputName}`);
  mkdirSync(dirname(out), { recursive: true });

  const result = spawnSync(
    chromium,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=8000",
      `--print-to-pdf=${out}`,
      "--no-pdf-header-footer",
      cvUrl(language),
    ],
    { stdio: "inherit" },
  );

  if ((result.status ?? 1) !== 0) {
    exitStatus = result.status ?? 1;
    break;
  }

}

process.exit(exitStatus);
