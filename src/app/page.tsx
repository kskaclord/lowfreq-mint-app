"use client";

import { useEffect } from "react";

// Global ready() çağrısı – docs'taki 2025 yöntemi (useEffect dışında, hydration'ı atla)
if (typeof window !== "undefined") {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js";
  script.onload = () => {
    // SDK yüklendikten sonra direkt ready() bas (docs'taki "as soon as possible")
    (window as any).sdk.actions.ready();
  };
  document.head.appendChild(script);
}

export default function LowfreqMint() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-6xl font-bold mb-2 tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mb-6 opacity-80">signals</h2>
      <p className="text-xl text-gray-400">mint soon</p>
    </div>
  );
}
