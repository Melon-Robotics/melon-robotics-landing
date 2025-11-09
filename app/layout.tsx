import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UnifiedNav } from "@/components/unified-nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Melon Robotics | Ocean Intelligence Technology",
  description: "Advanced robotics and safety technology for defense, research, and commercial operations in the world's most demanding environments.",
  keywords: ["underwater robotics", "AUV", "ocean technology", "defense technology", "marine robotics", "subsea operations"],
  authors: [{ name: "Melon Robotics" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#0a0e1a",
  openGraph: {
    title: "Melon Robotics | Ocean Intelligence Technology",
    description: "Advanced robotics and safety technology for defense, research, and commercial operations",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://melonrobotics.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0a0e1a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <UnifiedNav />
        <main id="main-content" className="min-h-screen pt-16 md:pt-20" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
