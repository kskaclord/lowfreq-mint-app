"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // Yeni SDK’da ready bu şekilde çağrılıyor
    if ((window as any).MiniAppSDK?.ready) {
      (window as any).MiniAppSDK.ready();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-7xl font-black tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mt-4 opacity-80">signals</h2>
      <p className="text-xl text-gray-400 mt-8">mint soon</p>
    </div>
  );
}
