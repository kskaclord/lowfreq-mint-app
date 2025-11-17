import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "lowfreq signals mint",
  description: "Mint your lowfreq signal NFT – hold 100k $lowfreq to unlock frequency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Farcaster Mini App SDK – CDN */}
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@0.0.10/dist/index.min.js" />
      </Head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}