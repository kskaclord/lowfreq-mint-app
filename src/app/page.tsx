"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // CDN SDK yükle + async ready çağrısı (docs'taki tam yöntem)
    const loadAndReady = async () => {
      if (typeof window !== "undefined") {
        try {
          // SDK CDN'sini güncel yükle (2025 versiyonu)
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js";
          script.async = true;
          script.onload = async () => {
            // SDK yüklendikten sonra ready() bas (await ile, docs'ta zorunlu)
            const { sdk } = await import('@farcaster/miniapp-sdk');
            await sdk.actions.ready(); // Bu satır splash'i kapatır
          };
          document.head.appendChild(script);
        } catch (e) {
          console.log("SDK ready error:", e); // Hata logla, ama devam et
        }
      }
    };

    loadAndReady();
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
