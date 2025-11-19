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
          // @ts-ignore
          context?.user?.verifiedAddresses?.[0] ||
          context?.user?.verifierAddresses?.[0] ||
          context?.wallet?.address;

        if (address) {
          const res = await fetch(`/api/balance?address=${address}`);
          const data = await res.json();
          setHasToken(Number(data.balance) >= 100000);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleMint = () => {
    sdk.actions.notification({ title: "lowfreq", body: "Signal minted" });
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>

      {loading ? (
        <p className="mt-20 text-xl">checking...</p>
      ) : hasToken ? (
        <button
          onClick={handleMint}
          className="mt-20 bg-purple-600 hover:bg-purple-500 px-12 py-6 rounded-2xl text-3xl font-bold"
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
