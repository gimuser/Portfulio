import type { Metadata } from "next";
import { Globe2, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Oualid Ait Alla for internships, research, collaborations, and suitable opportunities.",
};

export default function ContactPage() {
  return (
    <div className="page-shell" id="content">
      <section className="section contact-section">
        <div className="contact-data-visual" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="container contact-layout">
          <div className="contact-copy">
            <SectionHeading
              eyebrow="Contact"
              title="Internships, research, collaboration"
              description={profile.availability.en}
            />
            <div className="contact-focus-tags" aria-label="Focus areas">
              <span>Data Science</span>
              <span>Machine Learning</span>
              <span>AI / RAG</span>
              <span>Security</span>
            </div>
            <div className="contact-methods">
              <a className="contact-method contact-method-email" href={`mailto:${profile.email}`}>
                <span className="contact-method-icon">
                  <Mail size={18} />
                </span>
                <span>
                  <small>Email</small>
                  <strong>{profile.email}</strong>
                </span>
              </a>
              <a className="contact-method contact-method-location" href={profile.locationMapHref} target="_blank" rel="noreferrer">
                <span className="contact-method-icon">
                  <MapPin size={18} />
                </span>
                <span>
                  <small>Location</small>
                  <strong>{profile.location}</strong>
                </span>
              </a>
              <a className="contact-method contact-method-website" href={profile.links.website.href} target="_blank" rel="noreferrer">
                <span className="contact-method-icon">
                  <Globe2 size={18} />
                </span>
                <span>
                  <small>Portfolio</small>
                  <strong>{profile.links.website.href.replace("https://", "")}</strong>
                </span>
              </a>
              <a className="contact-method contact-method-whatsapp" href={profile.whatsapp.href} target="_blank" rel="noreferrer">
                <span className="contact-method-icon">
                  <SocialIcon name="whatsapp" />
                </span>
                <span>
                  <small>{profile.whatsapp.label}</small>
                  <strong>{profile.phone}</strong>
                </span>
              </a>
              <a className="contact-method contact-method-linkedin" href={profile.links.linkedin.href} target="_blank" rel="noreferrer">
                <span className="contact-method-icon">
                  <SocialIcon name="linkedin" />
                </span>
                <span>
                  <small>{profile.links.linkedin.label}</small>
                  <strong>{profile.links.linkedin.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</strong>
                </span>
              </a>
              <a className="contact-method contact-method-github" href={profile.links.github.href} target="_blank" rel="noreferrer">
                <span className="contact-method-icon">
                  <SocialIcon name="github" />
                </span>
                <span>
                  <small>{profile.links.github.label}</small>
                  <strong>{profile.links.github.href.replace("https://", "")}</strong>
                </span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
