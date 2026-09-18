import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://anujrastogi.in"),
  title: "Anuj Rastogi: Coming Soon",
  description:
    "A new space for my projects, ideas, experiments, and everything I'm building. Something better is taking shape.",
  keywords: [
    "Anuj Rastogi",
    "developer",
    "portfolio",
    "coding",
    "data analysis",
    "coming soon",
  ],
  openGraph: {
    type: "website",
    url: "https://anujrastogi.in",
    siteName: "anujrastogi.in",
    title: "Anuj Rastogi: Coming Soon",
    description:
      "Code. Analyze. Build. A new space for projects, ideas and experiments.",
    images: ["/background.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05080d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
