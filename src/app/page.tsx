"use client";

import { useEffect } from "react";
import { useOpenUrl } from "@coinbase/onchainkit/minikit"; // Base migration – güncel hook

export default function LowfreqMint() {
  const openUrl = useOpenUrl();

  useEffect(() => {
    // Base 2025 docs'taki tam yöntem: hook ile ready() entegre
    openUrl('about:blank'); // Dummy call, SDK'yi tetikle
    // Docs'taki migration: await sdk.actions.ready() ama hook ile
    const ready = async () => {
      const { sdk } = await import('@farcaster/miniapp-sdk');
      await sdk.actions.ready(); // Splash kapanır
    };
    ready();
  }, [openUrl]);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-6xl font-bold mb-2 tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mb-6 opacity-80">signals</h2>
      <p className="text-xl text-gray-400">mint soon</p>
    </div>
  );
}
