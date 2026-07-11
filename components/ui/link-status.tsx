import { ExternalLink } from "lucide-react";
import type { ProfileLink } from "@/types/content";

export function LinkStatus({ link }: { link: ProfileLink }) {
  if (link.status === "available") {
    return (
      <a className="button button-ghost" href={link.href} target="_blank" rel="noreferrer">
        <ExternalLink size={16} />
        {link.label}
      </a>
    );
  }

  return (
    <span className="missing-link" aria-label={`${link.label} missing`}>
      {link.label}: {link.href}
    </span>
  );
}
