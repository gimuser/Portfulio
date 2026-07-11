import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Oualid Ait Alla for internships, research, collaborations, and suitable opportunities.",
};

export default function ContactPage() {
  return (
    <div className="page-shell" id="content">
      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Internships, research, collaboration"
              description={profile.availability.en}
            />
            <div className="contact-methods">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
              <span>LinkedIn: [ADD LINKEDIN URL]</span>
              <a href={profile.links.github.href} target="_blank" rel="noreferrer">
                GitHub: {profile.links.github.href}
              </a>
            </div>
            <p className="muted">{profile.publicContactNote.en}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
