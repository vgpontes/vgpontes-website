import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css"

const ibmMono = IBM_Plex_Mono({weight: "400", style: "normal", subsets: ["latin"], variable: '--font-ibm-mono'})
const ibmSans400 = IBM_Plex_Sans({weight: "400", style: "normal", subsets: ["latin"], variable: '--font-ibm-sans-400'})
const ibmSans300 = IBM_Plex_Sans({weight: "300", style: "normal", subsets: ["latin"], variable: '--font-ibm-sans-300'})

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
      <body className={`${ibmMono.variable} font-mono ${ibmSans300.variable} font-sans-300 ${ibmSans400.variable} font-sans-400`}>{children}</body>
    </html>
  );
}
