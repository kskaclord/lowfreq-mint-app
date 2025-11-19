import { NextRequest } from "next/server";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
const LOWFREQ = "0xCDEcF3e66354C9f2B39C0E6C2B8C11B5dd0E042B9"; // $lowfreq kontrat adresin

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address");
  if (!address) return Response.json({ balance: 0 });

  try {
    const contract = new ethers.Contract(LOWFREQ, ["function balanceOf(address) view returns (uint256)"], provider);
    const balance = await contract.balanceOf(address);
    return Response.json({ balance: balance.toString() });
  } catch (e) {
    return Response.json({ balance: 0 });
  }
}
