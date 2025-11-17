"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // Splash screen’i anında kapatır
    if (typeof window !== "undefined" && (window as any).MiniAppSDK) {
      (window as any).MiniAppSDK.ready();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold mb-4">lowfreq signals</h1>
      <p className="text-xl text-gray-400">mint soon</p>
    </div>
  );
}