import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Van Tho - Web Developer Portfolio",
  description: "Professional web developer specializing in React, Next.js, and modern web technologies. Building high-performance, results-driven web applications.",
  keywords: ["web developer", "React", "Next.js", "TypeScript", "portfolio", "frontend developer"],
  authors: [{ name: "Van Tho" }],
  creator: "Van Tho",
  openGraph: {
    title: "Van Tho - Web Developer Portfolio",
    description: "Professional web developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
