"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    const killSplash = () => {
      // TypeScript’i susturmak için “as any” kullanıyoruz – 2025’te herkes böyle yapıyor
      const win = window as any;
      win.MiniAppSDK?.ready?.();
      win.fcMiniApp?.ready?.();
      win.farcaster?.miniapp?.ready?.();
      win.farcaster?.actions?.ready?.();
    };

    // 4 kez direkt vur
    setTimeout(killSplash, 200);
    setTimeout(killSplash, 600);
    setTimeout(killSplash, 1000);
    setTimeout(killSplash, 1800);

    // 4 saniye boyunca her 400ms’de bir zorla (aşırı garanti)
    const interval = setInterval(killSplash, 400);
    setTimeout(() => clearInterval(interval), 4000);
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
