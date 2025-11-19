// src/app/api/balance/route.ts
import { NextRequest } from "next/server";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

// $LOWFREQ kontrat adresin (doğru)
const LOWFREQ = "0xcf9e840081EC193b7E84f5B2d1E6c4271779cb07";

const ABI = ["function balanceOf(address) view returns (uint256)"];

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address");

  if (!address || !ethers.isAddress(address)) {
    return Response.json({ balance: "0" });
  }

  try {
    const contract = new ethers.Contract(LOWFREQ, ABI, provider);
    const rawBalance = await contract.balanceOf(address);
    const balance = rawBalance.toString(); // wei olarak string dönüyoruz (page.tsx'de 1e18'e böleceğiz)

    console.log("Balance check →", address, balance);
    return Response.json({ balance });
  } catch (error) {
    console.error("Balance error:", error);
    return Response.json({ balance: "0" });
  }
}
