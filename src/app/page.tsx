"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // Farcaster Mini App SDK sadece CDN ile çalışıyor, import YOK
    const tryReady = () => {
      if (typeof window === "undefined") return;

      // 2025’te çalışan tek gerçek yol
      if ((window as any).MiniAppSDK?.ready) {
        (window as any).MiniAppSDK.ready();
        console.log("lowfreq: ready() sent – splash dead");
      }
    };

    // Hemen dene
    tryReady();

    // 300ms arayla 8 kez daha dene (toplam 2.4 saniye)
    let count = 0;
    const interval = setInterval(() => {
      tryReady();
      if (++count === 8) clearInterval(interval);
    }, 300);

    // 2.5 saniye sonra son darbe
    setTimeout(tryReady, 2500);
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
