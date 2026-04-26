import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400"],
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voliber.com"),
  title: {
    default: "Voliber | Revenue Decay Operations",
    template: "%s | Voliber",
  },
  description: "Operations on the decay layer of B2B service revenue.",
  openGraph: {
    title: "Voliber | Revenue Decay Operations",
    description: "Operations on the decay layer of B2B service revenue.",
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
      className={`h-full ${fraunces.variable} ${sourceSerif.variable} ${jetBrainsMono.variable}`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
