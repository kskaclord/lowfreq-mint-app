"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // Yeni SDK adı: MiniAppSDK (eski fcMiniApp öldü)
    const ready = () => {
      if (typeof window !== "undefined" && (window as any).MiniAppSDK?.ready) {
        (window as any).MiniAppSDK.ready();
      }
    };

    // Sayfa yüklendiği anda
    ready();

    // Garanti olsun diye 1.5 saniye sonra da zorla
    const timer = setTimeout(ready, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Farcaster Mini App SDK – son sürüm */}
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
