"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // SDK’yı bu sayfaya da yükle (garanti olsun)
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js";
    script.async = true;
    document.body.appendChild(script);

    const tryReady = () => {
      // Farcaster’ın son 3 yıldır kullandığı tüm olası SDK yolları (biri kesin tutar)
      if ((window as any).MiniAppSDK?.ready) (window as any).MiniAppSDK.ready();
      if ((window as any).fcMiniApp?.ready) (window as any).fcMiniApp.ready();
      if ((window as any).farcaster?.miniapp?.ready) (window as any).farcaster.miniapp.ready();
      if ((window as any).farcaster?.actions?.ready) (window as any).farcaster.actions.ready();
    };

    // Sayfa açılır açılmaz + her 300ms’de bir dene (maks 1.5sn)
    tryReady();
    const interval = setInterval(tryReady, 300);
    setTimeout(() => clearInterval(interval), 1500);

    return () => {
      clearInterval(interval);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
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
