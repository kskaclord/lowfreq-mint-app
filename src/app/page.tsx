"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // Farcaster Mini App SDK’yı CDN’den yükle (layout’ta olmasa bile buradan çalışsın)
    const script = document.createElement("script");
    script.src = "https://cdn.farcaster.xyz/miniapps/sdk@latest";
    script.async = true;
    document.head.appendChild(script);

    // SDK yüklendikten sonra ready()’i zorla gönder (her 200ms’de bir, max 2 saniye)
    const tryReady = () => {
      if ((window as any).MiniAppSDK?.ready) {
        (window as any).MiniAppSDK.ready();
        console.log("lowfreq: ready() sent – splash killed");
      }
    };

    const interval = setInterval(tryReady, 200);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      tryReady(); // son bir kez daha zorla
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-40 h-40 mb-8" />
      <h1 className="text-7xl font-black tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mt-4 opacity-80">signals</h2>
      <p className="text-xl text-gray-400 mt-8">mint soon</p>
    </div>
  );
}
