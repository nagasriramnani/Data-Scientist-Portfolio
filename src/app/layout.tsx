import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
