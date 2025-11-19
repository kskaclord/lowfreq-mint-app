"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // 500ms bekle, SDK kesin yüklensin
    const timer = setTimeout(() => {
      // @ts-ignore – TypeScript sus, SDK global
      if (window.sdk?.actions?.ready) {
        window.sdk.actions.ready();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-6xl font-bold mb-2 tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mb-6 opacity-80">signals</h2>
      <p className="text-xl text-gray-400">mint soon</p>
    </div>
  );
}
