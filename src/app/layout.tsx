import type { Metadata } from "next";
import "./globals.css";

// Next.js metadata tanımı
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
        {/* SDK CDN */}
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js" />
        
        {/* FC:FRAME META TAG'LERİ – Embed Valid için zorunlu */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />
        <meta property="fc:frame:button:1" content="Mint Signal" />
        <meta property="fc:frame:post_url" content="https://lowfreq-mint-app.vercel.app/api/webhook" />

        {/* 🚨 OG:IMAGE EKLENTİSİ (Embed Valid için ZORUNLU) */}
        <meta property="og:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
