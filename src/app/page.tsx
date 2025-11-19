"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // 300ms sonra ready() bas → Farcaster 2025’te çalışan tek kesin yöntem
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        // @ts-ignore – Farcaster SDK’sı global, tipi yok diye kızmasın
        window.MiniAppSDK?.ready?.();
      }
    }, 300);

    return () => clearTimeout(timer);
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
