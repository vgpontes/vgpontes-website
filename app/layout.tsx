import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css"

const ibmMono = IBM_Plex_Mono({weight: "400", style: "normal", subsets: ["latin"], variable: '--font-ibm-mono'})
const ibmMono700 = IBM_Plex_Mono({weight: "700", style: "normal", subsets: ["latin"], variable: '--font-ibm-mono-700'})
const ibmSans200 = IBM_Plex_Sans({weight: "200", style: "normal", subsets: ["latin"], variable: '--font-ibm-sans-200'})
const ibmSans300 = IBM_Plex_Sans({weight: "300", style: "normal", subsets: ["latin"], variable: '--font-ibm-sans-300'})
const ibmSans400 = IBM_Plex_Sans({weight: "400", style: "normal", subsets: ["latin"], variable: '--font-ibm-sans-400'})
const ibmSans700 = IBM_Plex_Sans({weight: "700", style: "normal", subsets: ["latin"], variable: '--font-ibm-sans-700'})

export const metadata: Metadata = {
  title: "Victor Pontes",
  description: "Software Engineer @ Amazon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmMono.variable} font-mono ${ibmMono700.variable} font-mono-700 ${ibmSans200.variable} font-sans-200 ${ibmSans300.variable} font-sans-300 ${ibmSans400.variable} font-sans-400 ${ibmSans700.variable} font-sans-700`}>{children}</body>
    </html>
  );
}
