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
        {/* SDK CDN */}
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js" />

        {/* 2025 Mini App için ZORUNLU meta tag'ler – EMBED VALID'i yeşil yapar */}
        <meta property="fc:miniapp" content="v1" />
        <meta property="fc:miniapp:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
        <meta property="fc:miniapp:button:1" content="Open lowfreq mint" />
        <meta property="fc:miniapp:button:1:action" content="post" />
        <meta property="fc:miniapp:post_url" content="https://lowfreq-mint-app.vercel.app/api/webhook" />

        {/* Eski fc:frame tag'leri – kalsın, zararı yok */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />
        <meta property="fc:frame:button:1" content="Mint Signal" />
        <meta property="fc:frame:post_url" content="https://lowfreq-mint-app.vercel.app/api/webhook" />
        <meta property="og:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
