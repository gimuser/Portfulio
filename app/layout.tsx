import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Portfolio of AIT ALLA Oualid, a master's student in Data Science and Information Systems Security in Morocco, focused on AI, machine learning, data analytics, Python, and secure intelligent systems.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.links.website.href),
  title: {
    default: `${profile.name} | Data Science, AI & Security Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Oualid Ait Alla",
    "Data Scientist portfolio",
    "AI Engineer portfolio",
    "Machine Learning student",
    "Generative AI developer",
    "RAG developer",
    "Data Analyst Morocco",
    "Python developer Morocco",
    "Information Systems Security",
    "Master Data Science Morocco",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Data Science, AI & Security Portfolio`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} Portfolio`,
    images: ["/images/secure-ai-data-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Data Science, AI & Security Portfolio`,
    description: siteDescription,
    images: ["/images/secure-ai-data-hero.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beni Mellal",
    addressCountry: "MA",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Sultan Moulay Slimane University",
  },
  knowsAbout: [
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Information Systems Security",
    "Python",
    "Cybersecurity",
  ],
};

const themeInitScript = `
(() => {
  try {
    const stored = window.localStorage.getItem("portfolio-theme");
    const theme = stored === "dark" || stored === "light"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
