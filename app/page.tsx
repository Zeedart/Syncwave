"use client";
import Image from "next/image";
import Nav from "@/components/customComp/nav";
import BlinkingDot from "@/components/customComp/blinkingDot";
import Card from "@/components/customComp/card";
import { ArrowsClockwiseIcon, ArrowsLeftRightIcon, TrashIcon, InfoIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <div className="w-[90%] my-0 mx-auto lg:w-full h-fit mt-20 lg:h-screen flex justify-center items-center flex-col gap-10">
        <div className="w-50 lg:w-40 p-1 rounded-full bg-(--bg-surface) border border-(--line) justify-center gap-3 items-center flex">
          <BlinkingDot width={10} height={10} color="bg-green-500"/>
          <p className="text-sm text-(--text-muted)">Always in sync</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2>Your Music,</h2>
          <h2 className="text-(--syncwave)">One playlist.</h2>
          <h2>Two platforms.</h2>
        </div>
        <div className="w-full lg:w-[30%]">
          <p className="text-center text-(--text-muted) text-sm lg:text-base">
            Add a song on YouTube, it appears on Spotify. Add it on Spotify, it appears on YouTube. Every 5 minutes, automatically.
          </p>
        </div>
        <button className="bg-(--bg-surface) hover:text-white border-2 border-(--line)  text-(--text) hover:bg-(--syncwave-hover) py-2 px-4 rounded-xl transition-colors">
          Get Started 🚀
        </button>
        <div className="w-full lg:w-[80%]  flex lg:flex-row flex-col gap-5 lg:mt-3 justify-center items-center">
          <Card logo="YT" label="YouTube" description="Your video playlists and music collections" logoBg="bg-(--bg-youtube)" logoColor="text-(--youtube)" />
          <ArrowsLeftRightIcon size={50} weight="fill" color="#7C5CFC" className="transform rotate-90 lg:rotate-0 border border-(--syncwave) bg-[rgb(124,92,252,0.15)] rounded-full p-2.5" />
          <Card logo="SP" label="Spotify" description="Your streaming library and playlists" logoBg="bg-(--bg-spotify)" logoColor="text-(--spotify)" />
        </div>
      </div>
      <hr className="w-[90%] lg:w-[90%] mt-10 mx-auto border border-(--line)" />

      <div className="w-[90%] mx-auto mt-3 mb-10 pt-8">
        <p className="text-xl lg:text-xs text-center lg:text-left font-semibold tracking-widest uppercase text-(--text-muted) mb-5">What it does</p>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-2">
          <Card
            logo={<ArrowsClockwiseIcon color="#7C5CFC" weight="fill" size={26} />}
            label="Live sync"
            description="Checks both playlists every 5 minutes and syncs any changes."
            logoBg="bg-[rgb(124,92,252,0.15)]"
          />
          <Card
            logo={<ArrowsLeftRightIcon size={26} weight="fill" color="#7C5CFC" />}
            label="Both ways"
            description="Add a song anywhere — it shows up everywhere."
            logoBg="bg-[rgb(124,92,252,0.15)]"
          />
          <Card
            logo={<TrashIcon color="#7C5CFC" size={26} />}
            label="Deletion sync"
            description="Remove from one side and it's gone from the other too."
            logoBg="bg-[rgb(124,92,252,0.15)]"
          />
          <Card
            logo={<InfoIcon color="#7C5CFC" size={26} />}
            label="Failed song log"
            description="Songs not found on Spotify are logged for manual review."
            logoBg="bg-[rgb(124,92,252,0.15)]"
          />
        </div>
      </div>
    </>
  );
}


