"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // @latest SDK zaten layout.tsx’te yüklü, sadece ready() basmak yeterli
    const tryReady = () => {
      // Farcaster’ın 2025’teki çalışan tek yolu
      if (typeof window !== "undefined" && (window as any).MiniAppSDK?.ready) {
        (window as any).MiniAppSDK.ready();
      }
    };

    tryReady(); // hemen dene
    // 300ms arayla 5 kez daha dene (toplam max 1.5sn)
    let count = 0;
    const timer: NodeJS.Timeout = setInterval(() => {
      tryReady();
      count++;
      if (count >= 5) clearInterval(timer);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-40 h-40 mb-8" />
      <h1 className="text-7xl font-black tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mt-4 opacity-80">signals</h2>
      <p className="text-xl text-gray-500 mt-12">hold 100k $lowfreq to mint</p>
    </div>
  );
}
