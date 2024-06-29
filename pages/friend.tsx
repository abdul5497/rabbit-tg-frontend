import Link from "next/link";
import { useState, useEffect } from 'react';

import { useSnackbar } from 'notistack';
import axios from 'axios';

import { Button } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EuroIcon from "@mui/icons-material/Euro";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

interface Item {
    t_id: string,
    mount: number
}

function Friend() {
    const [user, setUser] = useState<string | null>("");
    const [items, setItems] = useState<Item[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const user = localStorage.getItem("user");
            setUser(user);
            if (user != "") {
                const response = await axios.post(
                    "https://vws-be.onrender.com/friends",
                    { user }
                );
                if (response.data.items == undefined)
                    setItems([]);
                else
                    setItems(response.data.items);
            }
        }
        fetchData()
    });

    const handleInviteClick = async () => {
        // Generate the invite link
        const inviteLink = `https://t.me/ClickerVWSBot?start=${user}\nPlay with me, become cryptoexchange CEO and get a token airdrop`;
        console.log(inviteLink);

        // Show the invite link in a snackbar or modal
        enqueueSnackbar('Invite link copied to clipboard!', { variant: 'success' });

        // Copy the link to the clipboard
        const shareLink = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}`;

        // Open the share link in a new window
        window.open(shareLink, '_blank');

    }

    return (
        <>
            <div className="flex flex-col space-y-5 px-5 pt-5 rounded-t-3xl bg-slate-900 shadow-km flex-1 h-0 overflow-auto">
                <div className="font-black text-[28px] uppercase text-center text-white">Invite Friends!</div>
                <div className="text-white text-lg font-medium text-center">You and your friend will receive bonuses</div>
                <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 text-base font-semibold bg-blue-800 hover:bg-blue-600 text-white rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleInviteClick}>
                        Invite a friend
                    </button>
                    <button className="px-4 py-2 text-base font-semibold bg-blue-800 hover:bg-blue-600 text-white rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed">
                        <ContentCopyIcon></ContentCopyIcon>
                    </button>
                </div>
                <div className="flex bg-slate-900 border border-gray-900 rounded-2xl p-4 space-x-4">
                    <img src="/images/gift2.png" alt="gift" className="w-16 h-16"></img>
                    <div className="text-white text-sm font-normal flex flex-col space-y-2">
                        <p className="font-medium">Invite a friend</p>
                        <div className="flex items-center space-x-2">
                            <div className=" bg-yellow-500 w-1 h-1 rounded-full"></div>
                            <img src="/images/dollar-icon.svg" alt="dollar" className="w-4 h-4"></img>
                            <div className="text-yellow-500 text-sm font-normal">+5,000</div>
                            <div className="text-sm">for you and your friend</div>
                        </div>
                    </div>
                </div>
                <div className="flex bg-slate-900 border border-gray-900 rounded-2xl p-4 space-x-4">
                    <img src="/images/gift1.png" alt="gift" className="w-16 h-16"></img>
                    <div className="text-white text-sm flex flex-col space-y-2">
                        <p className="font-medium">Invite a friend with Telegram Premium</p>
                        <div className="flex items-center space-x-2">
                            <div className=" bg-yellow-500 w-1 h-1 rounded-full"></div>
                            <img src="/images/dollar-icon.svg" alt="dollar" className="w-4 h-4"></img>
                            <div className="text-yellow-500 text-sm font-normal">+10,000</div>
                            <div className="text-sm">for you and your friend</div>
                        </div>
                    </div>
                </div>
                <div className="text-lg font-medium text-white mx-4 mt-5">List of your friends</div>
                {items.length === 0 ? (
                    <div className="text-lg font-normal text-gray-600 mt-5 text-center mb-[100px]">
                        You haven&apos;t invited anyone yet
                    </div>
                ) : (
                    <div className="mb-[100px]">
                        {items.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-row items-center mt-5 bg-[#272A2F] p-2 px-4 mx-4 rounded-lg">
                                    <div className="text-white text-lg">{index + 1}</div>
                                    <div className="ml-4 text-white">{item.t_id}</div>
                                    <img src="/images/dollar-icon.svg" alt="dollar" className="w-4 h-4 ml-6"></img>
                                    <div className="ml-2 text-white">{item.mount}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Friend;