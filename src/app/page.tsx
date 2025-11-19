"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // SDK'nin kesin yüklendiğinden emin olmak için 3000ms bekliyoruz (Ohara gibi)
    const timer = setTimeout(() => {
      const win = window as any;
      win.sdk?.actions?.ready?.();
      console.log("ready() gitti kanka, 3 saniye bekledik");
    }, 3000); // 3 saniye = Ohara'nın load time'ı

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>
      <p className="text-xl text-zinc-500 mt-16">hold 100k $lowfreq to mint</p>
      <p className="absolute bottom-10 text-xs text-zinc-600 opacity-60">1/333 · base · token-gated</p>
    </div>
  );
}
