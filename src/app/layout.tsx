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
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js" />
        
        {/* Farcaster Embed Valid için zorunlu fc:frame meta tag'leri */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />
        <meta property="fc:frame:button:1" content="Mint Signal" />
        <meta property="fc:frame:post_url" content="https://lowfreq-mint-app.vercel.app/api/webhook" />
      </head>
      <body>{children}</body>
    </html>
  );
}
