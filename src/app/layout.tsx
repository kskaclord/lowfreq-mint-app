// src/app/layout.tsx tamamen şu haliyle değiştir (kopyala-yapıştır):
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lowfreq signals mint",
  description: "Quiet minds, heavy signals. Token-gated NFT collection on Base",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@0.0.10/dist/index.min.js" />
      </head>
      <body style={{ fontFamily: "'Geist Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}