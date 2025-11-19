import { NextRequest } from "next/server";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

// SENİN DOĞRU $LOWFREQ KONTRAK ADRESİN (checksum’lı hali)
const LOWFREQ = "0xcf9e840081EC193b7E84f5B2d1E6c4271779cb07";

const ABI = ["function balanceOf(address) view returns (uint256)"];

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address");
  if (!address) return Response.json({ balance: "0" });

  try {
    const contract = new ethers.Contract(LOWFREQ, ABI, provider);
    const rawBalance = await contract.balanceOf(address);
    // 18 decimal → insan okunur hale getiriyoruz
    const balance = ethers.formatUnits(rawBalance, 18);
    console.log("Balance check →", address, balance); // log görelim
    return Response.json({ balance });
  } catch (error) {
    console.error("Balance error:", error);
    return Response.json({ balance: "0" });
  }
}
