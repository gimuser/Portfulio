import { existsSync, readFileSync } from "node:fs";
import nodemailer from "nodemailer";

const placeholderValues = new Set([
  "your-google-app-password",
  "replace-with-google-app-password",
  "your-app-password",
]);

function loadEnvFile(path) {
  if (!existsSync(path)) {
    return;
  }

  const lines = readFileSync(path, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function readEnv(key) {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}

function getConfig() {
  loadEnvFile(".env.local");
  loadEnvFile(".env");

  const host = readEnv("SMTP_HOST");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const from = readEnv("CONTACT_FROM_EMAIL") || user;
  const to = readEnv("CONTACT_TO_EMAIL") || user;
  const port = Number(readEnv("SMTP_PORT") || "465");
  const secure = (readEnv("SMTP_SECURE") || String(port === 465)).toLowerCase() === "true";

  if (!host || !user || !pass || !from || !to || !Number.isInteger(port)) {
    throw new Error("SMTP configuration is incomplete. Check .env.local.");
  }

  if (placeholderValues.has(pass.toLowerCase())) {
    throw new Error("SMTP_PASS is still a placeholder. Replace it with a real Google App Password.");
  }

  return { from, host, pass, port, secure, to, user };
}

async function main() {
  const config = getConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  await transporter.verify();

  await transporter.sendMail({
    from: { name: "Oualid Portfolio SMTP Test", address: config.from },
    to: config.to,
    replyTo: config.from,
    subject: "[Portfolio] SMTP delivery test",
    text: [
      "This is a delivery test from the Oualid Ait Alla portfolio contact form.",
      "",
      "If you received this message, SMTP delivery is configured correctly.",
    ].join("\n"),
  });

  console.log(`SMTP test email sent to ${config.to}. Check your Gmail inbox and spam folder.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "SMTP test failed.");
  process.exit(1);
});
