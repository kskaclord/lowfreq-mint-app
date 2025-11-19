import { NextRequest } from "next/server";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
const LOWFREQ_CONTRACT = "0xcf9e840081ec193b7e84f5b2d1e6c4271779cb07";

const ABI = ["function balanceOf(address) view returns (uint256)"];

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address");
  if (!address) return Response.json({ balance: "0" });

  try {
    const contract = new ethers.Contract(LOWFREQ_CONTRACT, ABI, provider);
    const balance = await contract.balanceOf(address);
    return Response.json({ balance: balance.toString() });
  } catch (e) {
    return Response.json({ balance: "0" });
  }
}
