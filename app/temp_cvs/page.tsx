import type { Metadata } from "next";
import { KiteaCv } from "./kitea-cv";

export const metadata: Metadata = {
  title: "KITEA CV | Oualid Ait Alla",
  description: "Version du CV d’Oualid Ait Alla adaptée à une candidature spontanée chez KITEA.",
  robots: { index: false, follow: false },
};

export default function TempCvsPage() {
  return <KiteaCv />;
}
