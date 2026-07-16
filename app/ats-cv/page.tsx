import type { Metadata } from "next";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `ATS CV | ${profile.name}`,
  description:
    "ATS-friendly CV of Oualid Ait Alla, Master's student in Data Science and Information Systems Security.",
};

export default function AtsCvPage() {
  return <AtsCvDocument />;
}
