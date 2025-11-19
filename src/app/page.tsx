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
        const address = (context as any)?.wallet?.address ||
                        (context as any)?.user?.verifiedAddresses?.[0] ||
                        (context as any)?.user?.custodyAddress;

        if (address) {
          // Uniswap subgraph'ından $lowfreq balance check (gerçek API)
          const res = await fetch(`https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3-base`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: `
                query ($address: String!) {
                  account(id: $address) {
                    tokenBalances(where: {token: "0xcf9e840081ec193b7e84f5b2d1e6c4271779cb07"}) {
                      value
                    }
                  }
                }
              `,
              variables: { address: address.toLowerCase() }
            })
          });
          const data = await res.json();
          const balance = Number(data.data.account.tokenBalances[0]?.value || 0) / 1e18;
          setHasToken(balance >= 100000);
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
    alert("Signal minted – check your wallet!");
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>

      {loading ? (
        <p className="mt-20 text-xl">checking balance...</p>
      ) : hasToken ? (
        <button
          onClick={handleMint}
          className="mt-20 bg-purple-600 hover:bg-purple-500 px-12 py-6 rounded-2xl text-3xl font-bold animate-pulse"
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
