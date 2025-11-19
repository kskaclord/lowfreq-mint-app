"use client";
import { useEffect } from "react"; // useEffect'i geri getirdik!

const killSplash = () => {
    const win = window as any;
    // En sade ve güçlü ready komutları
    win.MiniAppSDK?.ready?.();
    win.farcaster?.actions?.ready?.(); 
};

export default function LowfreqMint() {
  useEffect(() => {
    // 1. ready() komutunu DOM içeriği yüklendiğinde anında çalıştır
    if (typeof window !== 'undefined') {
        const handler = () => {
            killSplash();
        };

        // DOMContentLoaded dinle (SDK'nın büyük ihtimalle yüklendiği an)
        window.addEventListener('DOMContentLoaded', handler);
        
        // Ek olarak bir kez daha anında ve 500ms sonra çalıştır (Garanti)
        killSplash();
        setTimeout(killSplash, 500);

        // Komponent silindiğinde dinleyiciyi kaldır
        return () => window.removeEventListener('DOMContentLoaded', handler);
    }
  }, []); // Sadece bir kez çalıştır

  return (
    // Bu kısım aynı kalabilir
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl text-green-500">ÇALIŞIYOR OLMALI</h1>
      <p className="text-lg mt-4 text-white">Bu yazıyı görüyorsanız sorun Warpcast'tedir.</p>
    </div>
  );
}
