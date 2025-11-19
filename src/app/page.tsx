"use client";

// Base Mini App 2025 – Ready call için tek çalışan yöntem
if (typeof window !== "undefined") {
  // SDK zaten layout.tsx'te CDN ile yüklü → direkt global objeye bas
  const tryReady = () => {
    // @ts-ignore
    if (window.sdk?.actions?.ready) {
      window.sdk.actions.ready();
      console.log("ready() sent!");
    }
  };

  // Hemen bas + 500ms sonra tekrar + 1500ms sonra son kez
  tryReady();
  setTimeout(tryReady, 500);
  setTimeout(tryReady, 1500);
}

export default function LowfreqMint() {
  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>
      <p className="text-xl text-zinc-500 mt-16">hold 100k $lowfreq to mint</p>
      <p className="absolute bottom-10 text-xs text-zinc-600 opacity-60">1/333 · base · token-gated</p>
    </div>
  );
}
