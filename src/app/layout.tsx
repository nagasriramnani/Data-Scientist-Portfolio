import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import SmoothFollower from "@/components/SmoothFollower";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Naga Sri Ram Kochetti | AI Systems Architect",
  description: "Personal Portfolio of Naga Sri Ram Kochetti — AI Systems Architect, Full Stack AI Engineer, and Researcher based in London.",
  openGraph: {
    title: "Naga Sri Ram Kochetti | AI Systems Architect",
    description: "Personal Portfolio of Naga Sri Ram Kochetti",
    type: "website",
    url: "https://www.nagasriram.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Clash Display from Fontshare with Syne as CSS fallback */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} antialiased bg-[#0A0A0A] text-white cursor-none`}
      >
        <SmoothFollower />
        {children}
      </body>
    </html>
  );
}
