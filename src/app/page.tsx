"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // 1. Yöntem: Sayfa yüklenir yüklenmez ready gönder
    if (typeof window !== "undefined" && (window as any).fcMiniApp) {
      (window as any).fcMiniApp.ready();
    }

    // 2. Yöntem: SDK biraz geç geliyorsa zorla 1.5 saniye sonra kapat
    const forceCloseSplash = setTimeout(() => {
      if ((window as any).fcMiniApp?.ready) {
        (window as any).fcMiniApp.ready();
      }
    }, 1500);

    // Cleanup (gerekirse)
    return () => clearTimeout(forceCloseSplash);
  }, []);

  return (
    <>
      {/* Farcaster SDK (zaten layout.tsx’te var ama garanti olsun diye buraya da koyduk) */}
      <script src="https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@0.0.10/dist/index.min.js" />

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
        <h1 className="text-6xl font-bold mb-4 tracking-wider">lowfreq</h1>
        <h2 className="text-2xl mb-2 opacity-80">signals</h2>
        <p className="text-xl text-gray-400">mint soon</p>
      </div>
    </>
  );
}
