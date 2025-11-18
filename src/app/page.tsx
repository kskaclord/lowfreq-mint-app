"use client";

import { useEffect } from "react";

export default function LowfreqMint() {
  useEffect(() => {
    // SDK script'i yükle (onload ile bekle)
    if (document.querySelector('script[src*="miniapp-sdk"]')) return; // Zaten varsa atla

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@farcaster/miniapp-sdk@latest/dist/index.min.js";
    script.async = true;
    script.onload = () => {
      console.log("lowfreq: SDK loaded – calling ready()");
      tryReady();
    };
    document.head.appendChild(script);

    let interval;

    const tryReady = () => {
      try {
        if ((window as any).MiniAppSDK?.ready) {
          (window as any).MiniAppSDK.ready();
          console.log("lowfreq: ready() success – splash killed");
          clearInterval(interval); // Başarılıysa interval'i durdur
        }
      } catch (e) {
        console.error("lowfreq: ready() error:", e);
      }
    };

    // SDK yüklenmezse 500ms'de bir dene (max 3 saniye)
    interval = setInterval(tryReady, 500);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      tryReady(); // Son deneme
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
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
