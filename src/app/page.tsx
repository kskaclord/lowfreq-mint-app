"use client";

// Sadece en temel splash kapatma komutu
const killSplash = () => {
    const win = window as any;
    win.MiniAppSDK?.ready?.();
    win.farcaster?.actions?.ready?.(); 
};
// Sayfa yüklenir yüklenmez çağır
if (typeof window !== "undefined") {
    killSplash();
}

export default function LowfreqMint() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl text-green-500">ÇALIŞIYOR OLMALI</h1>
      <p className="text-lg mt-4 text-white">Bu yazıyı görüyorsanız sorun Warpcast'tedir.</p>
    </div>
  );
}
