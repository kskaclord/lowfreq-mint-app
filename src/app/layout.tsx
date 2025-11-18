import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lowfreq signals mint",
  description: "Quiet minds, heavy signals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@0.0.10/dist/index.min.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}