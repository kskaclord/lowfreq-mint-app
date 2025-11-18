"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // SDK layout'ta yüklendiği için direkt ready() bas
    const ready = async () => {
      if (typeof window !== "undefined") {
        // Docs'taki tam yöntem (2025 güncel)
        const { sdk } = await import('@farcaster/miniapp-sdk');
        await sdk.actions.ready(); // Bu satır splash'i kapatır
      }
    };

    ready();
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
