import { LanguageProvider } from "@/components/layout/language-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </LanguageProvider>
    </ThemeProvider>
  );
}
