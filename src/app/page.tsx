"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk"; // Import – docs'taki zorunlu satır

export default function LowfreqMint() {
  useEffect(() => {
    // Docs'taki tam yöntem: App yüklendiğinde ready çağr
    sdk.actions.ready(); // Bu satır splash'i kapatır
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-6xl font-bold mb-2 tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mb-6 opacity-80">signals</h2>
      <p className="text-xl text-gray-400">mint soon</p>
    </div>
  );
}
