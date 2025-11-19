"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";
import { base } from "wagmi/chains";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

const CONTRACT_ADDRESS = "0x6A94fE881756e4cCFFE42233945f4C88965814AA";

export default function LowfreqMint() {
  const [ready, setReady] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [loading, setLoading] = useState(true);

  const { writeContract, data: hash, isPending: mintLoading } = useWriteContract();

  const { isSuccess } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isSuccess) {
      sdk.actions.addNotification({
        type: "success",
        message: "Signal minted — 1/333",
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    const init = async () => {
      try {
        await sdk.actions.ready();
        setReady(true);

        const context = await sdk.context;
        const address = context.wallet?.address;

        if (!address) {
          setHasToken(false);
          setLoading(false);
          return;
        }

        const res = await fetch(`/api/balance?address=${address}`);
        const json = await res.json();
        const balance = Number(json.balance || "0") / 1e18;

        setHasToken(balance >= 100_000);
      } catch (err) {
        console.error(err);
        setHasToken(false);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const handleMint = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: [
        {
          inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      functionName: "mint",
      args: [BigInt(1)],
      chainId: base.id,
    });
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-8">
      <img src="/signal.png" alt="lowfreq" className="w-52 h-52 mb-12" />
      <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">
        lowfreq
      </h1>
      <h2 className="text-4xl mt-6 tracking-widest opacity-70">signals</h2>

      {loading ? (
        <p className="mt-20 text-xl text-zinc-400 animate-pulse">checking wallet...</p>
      ) : hasToken ? (
        <button
          onClick={handleMint}
          disabled={mintLoading}
          className="mt-20 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 px-20 py-8 rounded-3xl text-5xl font-black shadow-2xl animate-pulse transition"
        >
          {mintLoading ? "MINTING..." : "MINT SIGNAL (1/333)"}
        </button>
      ) : (
        <p className="mt-20 text-xl text-zinc-500">hold 100k $lowfreq to mint</p>
      )}

      <p className="absolute bottom-6 text-xs text-zinc-700 opacity-50">
        1/333 · base · live
      </p>
    </div>
  );
}
