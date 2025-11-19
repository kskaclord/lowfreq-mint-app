"use client";

import { useEffect } from "react";

// BU KISIM TAM ÇALIŞAN HALİ – ASLA DEĞİŞTİRME
if (typeof window !== "undefined") {
  const win = window as any;

  const killSplash = () => {
    win.MiniAppSDK?.ready?.();
    win.fcMiniApp?.ready?.();
    win.farcaster?.miniapp?.ready?.();
    win.farcaster?.actions?.ready?.();
  };

  killSplash();
  setTimeout(killSplash, 300);
  setTimeout(killSplash, 700);
  setTimeout(killSplash, 1200);
  setTimeout(killSplash, 2000);
}

export default function LowfreqMint() {
  useEffect(() => {
    // boş kalacak, hazır splash zaten dışarıda
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Logo */}
      <img 
        src="/logo.png" 
        alt="lowfreq" 
        className="w-52 h-52 mb-10 select-none pointer-events-none" 
      />

      {/* lowfreq – gradient ve ultra ağır */}
      <h1 className="text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 leading-none">
        lowfreq
      </h1>

      {/* signals */}
      <h2 className="text-4xl md:text-5xl mt-6 tracking-widest opacity-75 font-light">
        signals
      </h2>

      {/* Mint koşulu */}
      <p className="text-xl md:text-2xl text-zinc-500 mt-16 tracking-wider font-medium">
        hold 100k $lowfreq to mint
      </p>

      {/* Alt bilgi – sabit altta */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-zinc-600 tracking-widest opacity-70">
          1/333 · base · token-gated
        </p>
      </div>
    </div>
  );
}
