"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/layout/language-provider";
import { localize } from "@/utils/localize";

export function SiteFooter() {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>{profile.name}</h2>
          <p>{localize(profile.shortProfile, language)}</p>
        </div>
        <div className="footer-links">
          <Link href="/projects">Projects</Link>
          <Link href="/cv">CV</Link>
          <Link href="/contact">Contact</Link>
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} />
            {profile.email}
          </a>
          <a href={profile.locationMapHref} target="_blank" rel="noreferrer">
            <MapPin size={16} />
            {profile.location}
          </a>
        </div>
      </div>
    </footer>
  );
}
