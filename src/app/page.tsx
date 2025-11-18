"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    const tryReady = () => {
      if (typeof window === "undefined") return;

      const sdk =
        (window as any).MiniAppSDK ||
        (window as any).fcMiniApp ||
        (window as any).farcaster?.miniapp ||
        (window as any).farcaster?.actions;

      if (sdk?.ready) {
        sdk.ready();
      } else if (sdk?.actions?.ready) {
        sdk.actions.ready();
      }
    };

    // Hemen dene
    tryReady();

    // 200ms arayla 10 kez daha dene (toplam max 2 saniye)
    let attempts = 0;
    const intervalId = setInterval(() => {
      tryReady();
      attempts++;
      if (attempts >= 10) clearInterval(intervalId);
    }, 200);

    // 2 saniye sonra son bir kez zorla
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      tryReady();
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
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
