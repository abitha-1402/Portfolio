import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const title = `${site.name} | UI/UX Design & Frontend Development`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title, description: site.description,
  openGraph: { title, description: site.description, type: "website", siteName: `${site.name} Portfolio` },
  twitter: { card: "summary", title, description: site.description },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FAFAF8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
