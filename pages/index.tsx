"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { updateItem } from "../app/lib/api";
import Button from "@mui/material/Button";

import { useSnackbar } from 'notistack';
import Header from "./Header";
import Footer from "./Footer";

export default function Index() {
  const [count, setCount] = useState<number>(0);
  const [mount, setMount] = useState<number>(1000);
  const [showAnimation, setShowAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [user, setUser] = useState<string>("");
  const router = useRouter();
  const userFromQuery = router.query.user?.toString() || "";
  let storageUser;
  const snackbar = useSnackbar();

  const handleChange = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };
  const getLevelInfo = () => {
    switch (Math.floor(count / 200000))
    {
      case 0:
        return {text: "Bronze", number: 1};
      case 1:
        return {text: "Silver", number: 2};
      case 2:
        return {text: "Platinum", number: 3};
      case 3:
        return {text: "Diamond", number: 4};
      case 4:
        return {text: "Master", number: 5};
      case 5:
        return {text: "Grandmaster", number: 6};
      case 6:
        return {text: "Elite", number: 7};
      case 7:
        return {text: "Legendary", number: 8};
      case 8:
        return {text: "Mythic", number: 9};
      default:
        return {text: "Mythic", number: 9};
    }
  }
  const handleIncrement = (event: React.MouseEvent<HTMLDivElement>) => {
    // const { clientX, clientY } = event
    const { clientX, clientY } = event;
    console.log("Mouse X: ", clientX, "Mouse Y: ", clientY);
    setMousePosition({ x: clientX, y: clientY });
    const newCount = count + 1;
    setCount(newCount);
    setMount(mount - 1);
    if(!showAnimation) handleChange();
    try {
      const user = localStorage.getItem("user");
      updateItem(user, { count: newCount }); // Use the correct item ID here
    } catch (error) {
      console.error("Failed to update item", error);
    }
  };
  useEffect(() => {
    if (mount < 1000) {
      const intervalId = setInterval(() => {
        setMount((prevMount) => Math.min(prevMount + 3, 1000)); // Ensure mount doesn't exceed 1000
      }, 500); // Adjust the interval as needed

      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }
  }, [mount]);

  useEffect(() => {
    if (userFromQuery) {
      setUser(userFromQuery);
    }
  }, [userFromQuery]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(user);
      localStorage.setItem("user", user);
      if (user != "") {
        const response = await axios.post(
          "https://vws-be.onrender.com/items",
          { user }
        );
        if (response.data.stats === "success") {
          const id = response.data.item._id;
          localStorage.setItem("id", id);
          const res = await axios.get(
            "https://vws-be.onrender.com/items"
          );
          const data = res.data;
          // Assuming you have an item with an initial mount value
          const itemId = localStorage.getItem("id");
          const item = data.find((item: any) => item._id === itemId); // Adjust the condition if needed
          setCount(item.mount);
        } else {
          alert("Login error");
        }
      }
    };
    fetchData();
  }, [user]);
  return (
    <>
      <div>
        <style>
          {`
            .animation {
              opacity: 1;
              animation-name: example;
              animation-duration: 0.5s;
              animation-fill-mode: forwards;
            }

            @keyframes example {
              0%   {opacity: 1; left :${mousePosition.x + "px"}; top:${
            mousePosition.y + "px"
          };}
              100% {opacity: 0; left: ${mousePosition.x + "px"}; top:${
            mousePosition.y-100 + "px"
          };}
            }
            `}
        </style>
      </div>
      <div className="relative rounded-t-3xl border-t-2 border-gray-900 shadow-km flex-1 h-0 overflow-auto">
        <video autoPlay muted playsInline loop className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[80%] object-contain">
          <source src="/videos/wen.webm" type="video/webm" />
          <source src="/videos/wen.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-black/75 backdrop-blur-[72px] transition-opacity duration-1000 opacity-1" />
        <div className="flex flex-col relative z-[1] px-5 py-7 bg-slate-900 h-full">
          <div className="grid grid-cols-3 gap-2 relative">
            <div className="py-2 text-xs font-medium bg-slate-900 border border-gray-900 rounded-2xl text-center">
              <div className="text-white">Earn per tap</div>
              <div className="flex mt-2 justify-center items-center space-x-2">
                <img
                  src="/images/dollar-icon.svg"
                  alt="dollar"
                  className="w-6 h-6"
                ></img>
                <div className="text-white text-lg">+1</div>
              </div>
            </div>
            <div className="py-2 text-xs font-medium bg-slate-900 border border-gray-900 rounded-2xl text-center">
              <div className="text-white">Coins to level up</div>
              <div className="flex mt-2 justify-center items-center space-x-2">
                <div className="text-white text-lg">5k</div>
              </div>
            </div>
            <div className="py-2 text-xs font-medium bg-slate-900 border border-gray-900 rounded-2xl text-center">
              <div className="text-white">Profit per hour</div>
              <div className="flex mt-2 justify-center items-center space-x-2">
                <img
                  src="/images/dollar-icon.svg"
                  alt="dollar"
                  className="w-6 h-6"
                ></img>
                <div className="text-white text-lg">20</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5 items-center space-x-3">
            <img
              src="/images/dollar-icon.svg"
              alt="dollar"
              className="w-14 h-14"
            ></img>
            <div className="text-2xl font-semibold text-white">{count}</div>
          </div>
          <div className="flex mt-5 text-white items-center">
            <div className="font-semibold text-xs">{getLevelInfo().text} &gt;</div>
            <div className="ml-auto text-xs">
              <span className="text-[#8B8E93] mr-2">Level</span>{getLevelInfo().number}/9
            </div>
          </div>
          <div className="z-0 relative overflow-hidden h-3 rounded-full bg-[#FFFFFF] bg-opacity-15 mt-1">
            <div
              className="h-full rounded-full transition-transform !duration-500 opacity-100"
              style={{
                transform: `translateX(-${100 - (count % 200000)/200000*100}%)`,
                background: "-webkit-linear-gradient(left, #0075FF, #86BEFF)",
              }}
            ></div>
          </div>
          <div
            className="mt-5 w-[200px] h-[200px] flex justify-center items-center rounded-full m-auto cursor-pointer coingroup relative"
            onClick={handleIncrement}
          >
            <div
              className="w-[90%] h-[90%] rounded-full bg-cover transition duration-300"
              style={{
                backgroundImage: "url(/images/hamster.png)",
                backgroundRepeat: "none",
              }}
            ></div>
            {/* <img src='/images/hamster.png' alt='hamster' className='w-[90%] h-[90%] rounded-full'></img> */}
            <div
              className={`animation font-medium text-[30px] text-white ${
                showAnimation ? "" : "hidden"
              }`}
              style={{
                position: "fixed",
                left: mousePosition.x + "px",
                top: mousePosition.y + "px",
              }}
            >
              +1
            </div>
          </div>
          <div className="flex mt-5 text-white text-lg font-medium">
            <div className="">⚡ {mount}/1000</div>
            <div className="ml-auto">🚀 Boost</div>
          </div>
        </div>
      </div>
    </>
  );
}
