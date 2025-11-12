import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const ibmFont = IBM_Plex_Sans_Thai({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KANNAWAT | P-GEN",
  description: "Edit images using Google DeepMind Gemini 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={ibmFont.className}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
