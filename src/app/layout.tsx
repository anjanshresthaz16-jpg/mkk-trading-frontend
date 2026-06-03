import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MK Trading | Global Trading Solutions From China To The World",
    template: "%s | MK Trading",
  },
  description:
    "MK Trading is a leading Chinese international trading company specializing in electronics, industrial products, home goods, and wholesale supply. Connecting global buyers with trusted Chinese manufacturing since 2003.",
  keywords: [
    "Chinese trading company",
    "international trade",
    "wholesale supply",
    "product sourcing",
    "China exports",
    "global trade solutions",
    "B2B trading",
    "manufacturing",
  ],
  openGraph: {
    title: "MK Trading | Global Trading Solutions",
    description: "Connecting Global Buyers with Trusted Chinese Manufacturing",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
