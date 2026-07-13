import { ExternalLink } from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icons";
import type { ProfileLink } from "@/types/content";

export function LinkStatus({ link }: { link: ProfileLink }) {
  if (link.status === "available") {
    const isGithub = link.href.includes("github.com");

    return (
      <a className="button button-ghost" href={link.href} target="_blank" rel="noreferrer">
        {isGithub ? <SocialIcon name="github" /> : <ExternalLink size={16} />}
        {link.label}
      </a>
    );
  }

  return null;
}
