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
        {/* BU SATIRI DEĞİŞTİR – ESKİ CDN’Yİ SİL, YENİ RESMİ CDN’Yİ KOY */}
        <script src="https://miniapps.farcaster.xyz/sdk.js" async />

        {/* TÜM FRAME META TAG’LERİ KALSIN – SİLME! */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />
        <meta property="fc:frame:button:1" content="Open lowfreq mint" />
        <meta property="fc:frame:post_url" content="https://lowfreq-mint-app.vercel.app/api/webhook" />
        <meta property="og:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />

        {/* fc:miniapp meta tag’leri varsa onları da bırak, yoksa ekle */}
        <meta property="fc:miniapp" content="v1" />
        <meta property="fc:miniapp:image" content="https://lowfreq-mint-app.vercel.app/screenshot.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
