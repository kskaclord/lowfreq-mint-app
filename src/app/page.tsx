"use client";

import { useEffect } from "react";

// ready() dışarıda + biraz daha agresif + en son 500ms’de zorla tekrar
if (typeof window !== "undefined") {
  const win = window as any;
  const killSplash = () => {
    win.MiniAppSDK?.ready?.();
    win.fcMiniApp?.ready?.();
    win.farcaster?.miniapp?.ready?.();
    win.farcaster?.actions?.ready?.();
  };

  // 5 kez seri + en son 3 saniyede kesin öldür
  killSplash();
  setTimeout(killSplash, 200);
  setTimeout(killSplash, 500);
  setTimeout(killSplash, 900);
  setTimeout(killSplash, 1500);
  setTimeout(killSplash, 3000);  // ← BU SATIR KRİTİK (normal kullanıcı için)
}

// BU SATIR DA KRİTİK → body’ye h-screen ve overflow-hidden zorla
if (typeof document !== "undefined") {
  document.documentElement.classList.add("h-screen");
  document.body.classList.add("h-screen", "overflow-hidden");
}

export default function LowfreqMint() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-10 select-none" />
      <h1 className="text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600">
        lowfreq
      </h1>
      <h2 className="text-4xl md:text-5xl mt-6 tracking-widest opacity-75 font-light">
        signals
      </h2>
      <p className="text-xl md:text-2xl text-zinc-500 mt-16 tracking-wider font-medium">
        hold 100k $lowfreq to mint
      </p>
      <div className="absolute bottom-8 text-xs text-zinc-600 opacity-70 tracking-widest">
        1/333 · base · token-gated
      </div>
    </div>
  );
}
