"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    const sendReady = () => {
      // 2025 Mart sonrası güncel yöntem – üçünü de dene, biri kesin çalışır
      if ((window as any).farcaster?.miniapp?.ready) {
        (window as any).farcaster.miniapp.ready();
      }
      if ((window as any).MiniAppSDK?.ready) {
        (window as any).MiniAppSDK.ready();
      }
      if ((window as any).fcMiniApp?.ready) {
        (window as any).fcMiniApp.ready();
      }
    };

    // Hemen dene
    sendReady();

    // 500ms, 1000ms ve 2000ms sonra da zorla gönder (kesin kapanır)
    const timers = [500, 1000, 2000].map(delay =>
      setTimeout(sendReady, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* En güncel SDK – CDN’den direkt çekiyoruz */}
      <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js" />

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
        <h1 className="text-6xl font-bold mb-2 tracking-wider">lowfreq</h1>
        <h2 className="text-3xl mb-6 opacity-80">signals</h2>
        <p className="text-xl text-gray-400">mint soon</p>
      </div>
    </>
  );
}
