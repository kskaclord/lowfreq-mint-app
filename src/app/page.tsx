"use client";

if (typeof window !== "undefined") {
  const win = window as any;

  const killSplash = () => {
    // ESKİ YOL (artık çalışmıyor)
    // win.MiniAppSDK?.ready?.();

    // YENİ 2025 YOLU – BU KESİN ÇALIŞIYOR
    win.sdk?.actions?.ready?.();
    win.farcaster?.sdk?.actions?.ready?.();
  };

  // seri ateşle
  killSplash();
  setTimeout(killSplash, 100);
  setTimeout(killSplash, 300);
  setTimeout(killSplash, 600);
  setTimeout(killSplash, 1200);
}

export default function LowfreqMint() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-48 h-48 mb-8" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-4 tracking-widest opacity-70">signals</h2>
      <p className="text-xl text-zinc-500 mt-12 tracking-wide">
        hold 100k $lowfreq to mint
      </p>
      <p className="absolute bottom-10 text-xs text-zinc-600 opacity-60">
        1/333 · base · token-gated
      </p>
    </div>
  );
}
