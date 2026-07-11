import type { Metadata } from "next";
import { CvDocument } from "@/components/cv/cv-document";

export const metadata: Metadata = {
  title: "CV",
  description: "Modern print-friendly CV for Oualid Ait Alla in English and French.",
};

export default function CvPage() {
  return <CvDocument />;
}
