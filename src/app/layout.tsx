import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "IP Technology | INNOVATE. OPTIMIZE. FUTURE-PROOF.",
  description: "Next-gen tech solutions for your business. Specializing in Business Consulting, Account Management, and Project Governance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-slate-200 bg-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
