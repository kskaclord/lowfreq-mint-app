"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // Farcaster 2025’te splash’ı kapatmak için tek çalışan yöntem:
    const killSplash = () => {
      // @ts-ignore
      if (window.MiniAppSDK?.ready) window.MiniAppSDK.ready();
      // @ts-ignore
      if (window.fcMiniApp?.ready) window.fcMiniApp.ready();
      // @ts-ignore
      if (window.farcaster?.miniapp?.ready) window.farcaster.miniapp.ready();
    };

    // 100ms sonra bas, 300ms sonra tekrar, 600ms sonra son darbe
    setTimeout(killSplash, 100);
    setTimeout(killSplash, 300);
    setTimeout(killSplash, 600);
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
