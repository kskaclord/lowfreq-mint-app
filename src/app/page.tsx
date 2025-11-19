"use client";

const killSplash = () => {
    // TypeScript hatasını önlemek için güvenli tip ataması
    const win = window as any; 
    
    // En sade ve güçlü ready komutları (Splash kapatma)
    win.MiniAppSDK?.ready?.();
    win.farcaster?.actions?.ready?.(); 
};

// Sayfa yüklenir yüklenmez (senkron) çağır
if (typeof window !== "undefined") {
    killSplash();
}

export default function LowfreqMint() {
  // Gecikmeli çağrılar için, zamanlama hatasını kesin çözmek amacıyla
  setTimeout(killSplash, 400);
  setTimeout(killSplash, 800);
  setTimeout(killSplash, 1200);
  setTimeout(killSplash, 2000);

  return (
    // w-full h-screen ile mobil ekranın tamamını kapla
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl text-green-500">ÇALIŞIYOR OLMALI</h1>
      <p className="text-lg mt-4 text-white">Bu, içeriğin yüklendiğini gösterir.</p>
    </div>
  );
}
