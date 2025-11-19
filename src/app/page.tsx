"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

export default function LowfreqMint() {
  const [ready, setReady] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true);
  const [debug, setDebug] = useState(""); // ← adresi ve balance’i görmek için

  useEffect(() => {
    const init = async () => {
      await sdk.actions.ready();
      setReady(true);

      try {
        const context = await sdk.context;
        console.log("Farcaster context:", context); // ← bunu mobilde console’da gör
        setDebug(JSON.stringify(context, null, 2));

        const address = (context as any)?.wallet?.address ||
                        (context as any)?.user?.verifiedAddresses?.[0] ||
                        (context as any)?.user?.custodyAddress ||
                        (context as any)?.user?.fid; // fallback

        if (address) {
          const res = await fetch(`/api/balance?address=${address}`);
          const data = await res.json();
          console.log("API response:", data);
          setHasToken(Number(data.balance || 0) >= 100000);
        } else {
          console.log("Adres gelmedi");
          // TEST İÇİN ZORLA BUTON ÇIKAR
          setHasToken(true);
        }
      } catch (e) {
        console.error(e);
        // hata olsa bile test butonu çıksın
        setHasToken(true);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleMint = () => {
    alert("Minted – test başarılı!");
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/logo.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>

      {loading ? (
        <p className="mt-20 text-xl">loading...</p>
      ) : (
        <>
          <button
            onClick={handleMint}
            className="mt-20 bg-purple-600 hover:bg-purple-500 px-16 py-8 rounded-3xl text-4xl font-black animate-pulse shadow-2xl"
          >
            MINT SIGNAL (TEST)
          </button>
          <pre className="mt-10 text-xs text-zinc-500 max-w-xs overflow-auto">
            {debug || "no debug"}
          </pre>
        </>
      )}

      <p className="absolute bottom-10 text-xs text-zinc-600 opacity-60">
        1/333 · base · token-gated
      </p>
    </div>
  );
}
