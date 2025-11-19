"use client";

import { useEffect } from "react";

// ready()’i useEffect DIŞINA alıyoruz → Farcaster bunu direkt çalıştırıyor
if (typeof window !== "undefined") {
  const win = window as any;

  const killSplash = () => {
    win.MiniAppSDK?.ready?.();
    win.fcMiniApp?.ready?.();
    win.farcaster?.miniapp?.ready?.();
    win.farcaster?.actions?.ready?.();
  };

  // Sayfa açılır açılmaz + gecikmeli seri ateşle
  killSplash();
  setTimeout(killSplash, 300);
  setTimeout(killSplash, 700);
  setTimeout(killSplash, 1200);
  setTimeout(killSplash, 2000);
}

export default function LowfreqMint() {
  // useEffect artık sadece görsel için (ready burda olmasın)
  useEffect(() => {
    // buraya hiçbir şey yazmıyoruz
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-40 h-40 mb-8" />
      <h1 className="text-7xl font-black tracking-wider">lowfreq</h1>
      <h2 className="text-3xl mt-4 opacity-80">signals</h2>
      <p className="text-xl text-gray-500 mt-12">hold 100k $lowfreq to mint</p>
    </div>
  );
}
