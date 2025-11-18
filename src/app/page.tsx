"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // SDK zaten layout.tsx’te yüklü ama garanti olsun diye burada da yükleyelim
    if (document.querySelector('script[src*="miniapp-sdk"]')) {
      // Zaten varsa direkt ready dene
      callReady();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js";
    script.async = true;
    script.onload = () => callReady();
    document.head.appendChild(script);

    function callReady() {
      try {
        // Farcaster’ın tüm olası ready yolları (biri kesin çalışır)
        if ((window as any).MiniAppSDK?.ready) (window as any).MiniAppSDK.ready();
        if ((window as any).fcMiniApp?.ready) (window as any).fcMiniApp.ready();
        if ((window as any).farcaster?.miniapp?.ready) (window as any).farcaster.miniapp.ready();
        if ((window as any).farcaster?.actions?.ready) (window as any).farcaster.actions.ready();
      } catch (e) {
        console.log("ready error:", e);
      }
    }

    // Her 400ms’de bir zorla dene, max 2.5 saniye
    const interval = setInterval(callReady, 400);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      callReady(); // son bir kez
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-32 h-32 mb-8" />
      <h1 className="text-7xl font-black tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mt-4 opacity-80">signals</h2>
      <p className="text-xl text-gray-400 mt-8">mint soon</p>
    </div>
  );
}
