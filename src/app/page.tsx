"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

export default function LowfreqMint() {
  const [ready, setReady] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await sdk.actions.ready();
      setReady(true);

      try {
        const context = await sdk.context;
        const address =
          (context as any)?.wallet?.address ||
          (context as any)?.user?.verifiedAddresses?.[0] ||
          (context as any)?.user?.custodyAddress;

        if (address) {
          const res = await fetch(`/api/balance?address=${address}`);
          const data = await res.json();
          // 100k = 100000 * 10^18 → ama API'miz zaten 18 decimal düzeltiyor
          setHasToken(Number(data.balance) >= 100000);
        }
      } catch (e) {
        console.error("balance check error:", e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleMint = () => {
    alert("Signal minted ✦");
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>

      {loading ? (
        <p className="mt-20 text-xl text-zinc-400">checking balance...</p>
      ) : hasToken ? (
        <button
          onClick={handleMint}
          className="mt-20 bg-purple-600 hover:bg-purple-500 px-16 py-7 rounded-3xl text-4xl font-black shadow-2xl animate-pulse"
        >
          MINT SIGNAL (1/333)
        </button>
      ) : (
        <p className="mt-20 text-xl text-zinc-500">hold 100k $lowfreq to mint</p>
      )}

      <p className="absolute bottom-10 text-xs text-zinc-600 opacity-60">
        1/333 · base · token-gated
      </p>
    </div>
  );
}
