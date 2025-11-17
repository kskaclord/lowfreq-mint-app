"use client";
import { useState } from 'react';

export default function LowfreqMint() {
  const [balance, setBalance] = useState(0);
  const [minted, setMinted] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const checkBalance = () => {
    setBalance(150000);
  };

  const mintSignal = () => {
    if (balance < 100000) return alert('Hold 100k $lowfreq to mint');
    setIsMinting(true);
    setTimeout(() => {
      setMinted(true);
      setIsMinting(false);
      alert('Signal minted – frequency unlocked');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl mb-4 font-bold">lowfreq signals mint</h1>
      <p className="mb-4 text-gray-400">Enter wallet address:</p>
      <input
        type="text"
        placeholder="0x..."
        onChange={(e) => setWalletAddress(e.target.value)}
        className="mb-4 p-2 bg-gray-800 text-white rounded w-64"
        onBlur={checkBalance}
      />
      <p className="mb-4">Balance: {balance.toLocaleString()} $lowfreq</p>
      {balance >= 100000 ? (
        <button
          onClick={mintSignal}
          disabled={isMinting || minted}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded disabled:opacity-50"
        >
          {isMinting ? 'Minting...' : minted ? 'Minted' : 'Mint Signal (1/333)'}
        </button>
      ) : (
        <p className="text-gray-400">Hold 100k $lowfreq to unlock mint</p>
      )}
    </div>
  );
}