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
    default: "Voliber | Working-Capital Discipline",
    template: "%s | Voliber",
  },
  description:
    "Working-capital discipline for open revenue queues inside B2B service firms.",
  openGraph: {
    title: "Voliber | Working-Capital Discipline",
    description:
      "Voliber identifies, classifies, prioritizes, works, logs, escalates, and reports open revenue queues.",
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
