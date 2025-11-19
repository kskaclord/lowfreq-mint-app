"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    const killSplash = () => {
      // Farcaster 2025’te çalışan tüm olası yollar – hepsine basıyoruz
      // @ts-ignore – global SDK, tipi yok diye sus
      window.MiniAppSDK?.ready?.();
      window.fcMiniApp?.ready?.();
      window.farcaster?.miniapp?.ready?.();
      window.farcaster?.actions?.ready?.();
    };

    // 0.3sn, 0.8sn, 1.3sn, 2sn → 4 kez üst üste bas (kesin ölür)
    setTimeout(killSplash, 300);
    setTimeout(killSplash, 800);
    setTimeout(killSplash, 1300);
    setTimeout(killSplash, 2000);

    // Bonus: her 500ms’de bir 5 saniye boyunca zorla (aşırı garanti)
    const interval = setInterval(killSplash, 500);
    setTimeout(() => clearInterval(interval), 5000);
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
