"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

export default function LowfreqMint() {
  const [ready, setReady] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [debug, setDebug] = useState("");

  useEffect(() => {
    const init = async () => {
      await sdk.actions.ready();
      setReady(true);

      try {
        const context = await sdk.context;
        console.log("Context geldi:", context);
        setDebug(JSON.stringify(context, null, 2));

        // Farcaster 2025’te adresi burada veriyor → wallet.address
        const address = (context as any)?.wallet?.address;

        if (address) {
          console.log("Adres bulundu:", address);
          const res = await fetch(`/api/balance?address=${address}`);
          const data = await res.json();
          console.log("Balance API cevabı:", data);

          // API'miz wei (string) dönüyor, 18 decimal
          const balanceNum = Number(data.balance || 0);
          const balanceInTokens = balanceNum / 1e18;

          setHasToken(balanceInTokens >= 100000);
          setDebug(prev => prev + `\n\nBalance: ${balanceInTokens.toFixed(2)} $lowfreq`);
        } else {
          console.log("Adres gelmedi, gating kapalı");
          setHasToken(false);
          setDebug(prev => prev + "\n\nAdres bulunamadı – buton çıkmaz");
        }
      } catch (e) {
        console.error("Hata:", e);
        setHasToken(false);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const handleMint = () => {
    alert("Signal minted – 1/333 ✦");
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>

      {loading ? (
        <p className="mt-20 text-xl text-zinc-400">checking wallet...</p>
      ) : hasToken ? (
        <button
          onClick={handleMint}
          className="mt-20 bg-purple-600 hover:bg-purple-500 px-20 py-8 rounded-3xl text-5xl font-black shadow-2xl animate-pulse"
        >
          MINT SIGNAL (1/333)
        </button>
      ) : (
        <p className="mt-20 text-xl text-zinc-500">hold 100k $lowfreq to mint</p>
      )}

      <pre className="absolute bottom-20 left-4 right-4 text-[10px] text-zinc-600 opacity-70 max-h-32 overflow-auto">
        {debug || "debug yok"}
      </pre>

      <p className="absolute bottom-6 text-xs text-zinc-700 opacity-50">
        1/333 · base · token-gated
      </p>
    </div>
  );
}
