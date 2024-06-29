"use Client";

import Card from "@/app/components/common/card";
import Link from "next/link";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ConstructionIcon from '@mui/icons-material/Construction';
import EuroIcon from "@mui/icons-material/Euro";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

function Airdrop() {
  const [user, setUser] = useState<string | null>("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleImageLoad = () => {
    // setImagesLoaded((prev) => {
    //     console.log(prev)
    //     const newCount = prev + 1;
    //     console.log(newCount)
    //     if (newCount === totalImages) {
    //         setLoading(false);
    //     }
    //     return newCount;
    // });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex-1 h-0" hidden={loading}>
        <div className="py-7 mb-[90px] px-5 text-white rounded-t-3xl bg-slate-900 shadow-km h-full overflow-auto">
          <div className="font-black text-[28px] uppercase text-center">Airdrop</div>
          <div className="flex flex-col mt-5">
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Swap #VWS  ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Mining Pool #VWS ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>exchange negotiations ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Market maker negotiations ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Key partnerships are coming ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Airdrop Task list ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Airdrop Nfts ETH ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Airdrop NFTs MATIC ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Airdrop NFTs BNB ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Airdrop NFTs GAT ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Airdrop NFTs TON ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Rewards Mining Pool ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Clicker VWS Social Tasks ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Ton Blockchain Training ✅</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>VWS Staking , </span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Staking Mining NFTs , </span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Domain Zone</span>,</span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Bridge BNB/TON </span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Buying premium Telegrams in the bot, and there are a lot of interesting things that we will tell you about</span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>construction of flying drones </span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Updating the roadmap </span></span>
            <span className="flex items-center space-x-1 mt-1 capitalize"><div className="rounded-full min-w-4 h-4 bg-[#0F0]" /> <span>Listing all exchange</span></span>
            <span className="mt-5">Donations</span>
            <span className="mt-2.5">TON</span>
            <span className="mt-2.5" style={{ wordBreak: "break-word" }}>UQARROkNiK15pmaOZZoxtSra3v39Nd3XJT1DrLSrxVUH4Aci</span>
            <span className="mt-2.5 uppercase">bnb eth matic btc</span>
            <span className="mt-2.5" style={{ wordBreak: "break-word" }}>0xc69F83A668b3bBAd0B5570dbccF98Ec3C3e50eF3</span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Airdrop;
