"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    const killSplash = () => {
      const win = window as any;
      win.MiniAppSDK?.ready?.();
      win.fcMiniApp?.ready?.();
      win.farcaster?.miniapp?.ready?.();
      win.farcaster?.actions?.ready?.();
    };

    // 5 kez seri ateşle
    setTimeout(killSplash, 100);
    setTimeout(killSplash, 400);
    setTimeout(killSplash, 800);
    setTimeout(killSplash, 1200);
    setTimeout(killSplash, 2000);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-40 h-40 mb-8" />
      <h1 className="text-7xl font-black tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mt-4 opacity-80">signals</h2>
      <p className="text-xl text-gray-500 mt-12">hold 100k $lowfreq to mint</p>
    </div>
  );
}
