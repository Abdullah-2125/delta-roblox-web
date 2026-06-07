import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Delta Roblox | Delta Executor v2.720 Download",
  description: "Download Delta Executor v2.720 for Android, iOS, PC, and Mac. The ultimate Roblox script injector with built-in script library.",
  metadataBase: new URL('https://delta-executor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Delta Roblox | Delta Executor v2.720 Download",
    description: "Download Delta Executor v2.720 for Android, iOS, PC, and Mac. The ultimate Roblox script injector with built-in script library.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-[#0a0a0a] text-white`}>
        <Header />
        <main className="flex-grow pt-24 pb-12 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
