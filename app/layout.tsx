import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css"

const ibm = IBM_Plex_Mono({weight: "400", style: "normal", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "victor pontes",
  description: "software engineer @ amazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
