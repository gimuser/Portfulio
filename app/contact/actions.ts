"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

type ContactActionResult = {
  status: "success" | "error";
  reason?: "invalid" | "rate_limited" | "not_configured" | "delivery_failed";
};

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const globalRateLimit = globalThis as typeof globalThis & {
  __portfolioContactRateLimit?: Map<string, RateLimitRecord>;
};

const rateLimitStore = globalRateLimit.__portfolioContactRateLimit ?? new Map<string, RateLimitRecord>();
globalRateLimit.__portfolioContactRateLimit = rateLimitStore;

const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const RATE_LIMIT_MAX_MESSAGES = 5;
const placeholderSecrets = new Set([
  "your-google-app-password",
  "replace-with-google-app-password",
  "your-app-password",
]);

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function removeHeaderUnsafeChars(value: string) {
  return value.replace(/[\r\n]/g, " ").replace(/\s+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function readEnv(key: string) {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt < now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_MESSAGES) {
    return true;
  }

  current.count += 1;
  return false;
}

async function getRequestIdentity() {
  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || requestHeaders.get("x-real-ip") || "unknown";
  const userAgent = requestHeaders.get("user-agent") || "unknown";
  const origin = requestHeaders.get("origin");
  const host = requestHeaders.get("host");

  return { host, ip, origin, userAgent };
}

function isTrustedOrigin(origin: string | null, host: string | null) {
  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function getSmtpConfig() {
  const host = readEnv("SMTP_HOST");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const from = readEnv("CONTACT_FROM_EMAIL") || user;
  const to = readEnv("CONTACT_TO_EMAIL") || user;
  const port = Number(readEnv("SMTP_PORT") || "465");
  const secure = (readEnv("SMTP_SECURE") || String(port === 465)).toLowerCase() === "true";

  if (!host || !user || !pass || !from || !to || !Number.isInteger(port) || placeholderSecrets.has(pass.toLowerCase())) {
    return null;
  }

  return { from, host, pass, port, secure, to, user };
}

export async function sendContactMessage(formData: FormData): Promise<ContactActionResult> {
  const { host, ip, origin, userAgent } = await getRequestIdentity();

  if (!isTrustedOrigin(origin, host)) {
    return { status: "error", reason: "invalid" };
  }

  const honeypot = getFormValue(formData, "company");
  if (honeypot) {
    return { status: "success" };
  }

  if (isRateLimited(ip)) {
    return { status: "error", reason: "rate_limited" };
  }

  const startedAt = Number(getFormValue(formData, "startedAt"));
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 1200) {
    return { status: "success" };
  }

  const name = removeHeaderUnsafeChars(getFormValue(formData, "name")).slice(0, 80);
  const email = removeHeaderUnsafeChars(getFormValue(formData, "email")).toLowerCase();
  const subject = removeHeaderUnsafeChars(getFormValue(formData, "subject")).slice(0, 120);
  const message = getFormValue(formData, "message").slice(0, 4000);

  if (name.length < 2 || subject.length < 3 || message.length < 20 || !isValidEmail(email)) {
    return { status: "error", reason: "invalid" };
  }

  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    return { status: "error", reason: "not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
    "",
    `IP: ${ip}`,
    `User-Agent: ${userAgent}`,
  ].join("\n");

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    <hr />
    <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
    <p><strong>User-Agent:</strong> ${escapeHtml(userAgent)}</p>
  `;

  try {
    await transporter.sendMail({
      from: { name: "Oualid Portfolio", address: smtpConfig.from },
      to: smtpConfig.to,
      replyTo: { name, address: email },
      subject: `[Portfolio] ${subject}`,
      text,
      html,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Contact mail delivery failed", error instanceof Error ? error.message : "unknown error");
    return { status: "error", reason: "delivery_failed" };
  }
}
