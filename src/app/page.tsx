"use client";

export default function LowfreqMint() {
  // 2025'te çalışan tek kesin yol – CDN yüklü, window.sdk var
  if (typeof window !== "undefined") {
    // 1 saniye bekle, SDK kesin yüklensin (layout.tsx'te zaten CDN var)
    setTimeout(() => {
      // @ts-ignore
      window.sdk?.actions?.ready?.();
    }, 1000);
  }

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src="/logo.png" alt="lowfreq" className="w-48 h-48 mb-8" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-4 tracking-widest opacity-70">signals</h2>
      <p className="text-xl text-zinc-500 mt-12">hold 100k $lowfreq to mint</p>
      <p className="absolute bottom-10 text-xs text-zinc-600 opacity-60">1/333 · base · token-gated</p>
    </div>
  );
}
