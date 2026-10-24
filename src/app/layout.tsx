import type { Metadata, Viewport } from "next";
import "@fontsource-variable/outfit";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name}, ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.bio,
  openGraph: {
    title: `${site.name}, ${site.title}`,
    description: site.headline,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0d0c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-base leading-[1.55]">{children}</body>
    </html>
  );
}
