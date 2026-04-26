import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voliber.com"),
  title: {
    default: "Voliber | Revenue Follow-Up Operations",
    template: "%s | Voliber",
  },
  description:
    "Voliber runs revenue follow-up operations for open money already in motion.",
  openGraph: {
    title: "Voliber | Revenue Follow-Up Operations",
    description:
      "Disciplined revenue follow-up operations for small businesses with open money already in motion.",
    url: "https://voliber.com",
    siteName: "Voliber",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
