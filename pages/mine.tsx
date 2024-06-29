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

function Mine() {
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
          <div className="font-black text-[28px] uppercase text-center text-white">Task List</div>
          {/* Conference organizeers */}
          <Card
            title="Dorahacks"
            description="Conference Organizers"
            price="10000"
            link="https://dorahacks.io/buidl/12541"
            img="/images/dorahacks.ico"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Questbook"
            description="Conference Organizers"
            price="10000"
            link="https://questbook.app/dashboard/?chainId=10&isRenderingProposalBody=true&role=builder&grantId=65c7836df27e2e1702d2d279&proposalId=664dcc62c1ee73f92c911280"
            img="/images/questbook.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="TON Community RUS"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/toncoin_rus"
            img="/images/toncoin_rus.jpg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram News"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/telegram"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="TON Society"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/tonsociety"
            img="/images/tonsociety.jpg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="The Open Network"
            description="Conference Organizers"
            price="10000"
            link="https://t.me/tonblockchain"
            img="/images/toncoin_rus.jpg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="TMA Clicker Token VWS Game"
            description="Conference Organizers"
            price="10000"
            link="https://tonresear.ch/t/tma-clicker-token-vws-game-mining-pool-vws-ton-dedust-io-mining-nfts-buidls-dorahacks-io/18457/3"
            img="/images/tonresear-logo.png"
            onLoad={handleImageLoad}
          ></Card>

          {/* TG Channel */}
          <Card
            title="Telegram MagicVipClub Channel"
            price="10000"
            link="https://t.me/MagicVipClub"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MiningVws Channel"
            price="10000"
            link="https://t.me/miningvws"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram VirtualsWorlds Channel"
            price="10000"
            link="https://t.me/VirtualsWorlds"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicNFTcollection Channel"
            price="10000"
            link="https://t.me/MagicNFTcollections"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicVipPeople Channel"
            price="10000"
            link="https://t.me/MagicVipPeople"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram P2PExchange Channel"
            price="10000"
            link="https://t.me/p2pExchenges"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram AirdropNftOpensea Channel"
            price="10000"
            link="https://t.me/AirdropNftOpensea"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Telegram MagicNftClub Channel"
            price="10000"
            link="https://t.me/MagicNftClub"
            img="/images/telegram-1.svg"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Swap VWS"
            price="10000"
            link="https://dedust.io/swap/TON/VWS"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mining Pool VWS/TON"
            price="10000"
            link="https://dedust.io/pools/EQCCa6jA_VzoQi76cAHmumoJfZbglVtY-DL-k8-f9h3vUOy2"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Swap bot"
            price="10000"
            link="https://t.me/tonRocketBot/cex?startapp=trade-VWS-TON"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
          <Card
            title="Mining NFTs"
            price="10000"
            link="http://getgems.io/virtualsworlds"
            img="/images/hamster.png"
            onLoad={handleImageLoad}
          ></Card>
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

export default Mine;
