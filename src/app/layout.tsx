import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typewriter",
  description:
    "Welcome to Typewriter, your tech oasis. Dive into our world of innovative insights, technology reviews, and tech tales that unravel the ever-evolving digital landscape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
