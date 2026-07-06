import Image from "next/image";
import Nav from "@/components/customComp/nav";
import BlinkingDot from "@/components/customComp/blinkingDot";
import Card from "@/components/customComp/card";
import { ArrowDownUpIcon } from "@/components/ui/arrow-down-up-icon";

export default function Home() {
  return (
    <>
      <div className="w-[90%] my-0 mx-auto lg:w-full h-fit mt-20 lg:h-screen flex justify-center items-center flex-col gap-10">
        <div className="w-50 lg:w-40 p-0.5 rounded-full bg-(--bg-card) border border-(--line) justify-center gap-3 items-center flex">
          <BlinkingDot width={10} height={10} />
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
        <button className="bg-(--bg-card) border-2 border-(--line)  text-(--text) hover:bg-(--syncwave-hover) py-2 px-4 rounded-xl transition-colors">
          Get Started 🚀
        </button>
        <div className="w-full lg:w-[80%]  flex lg:flex-row flex-col gap-5 lg:mt-3 justify-center items-center">
          <Card logo="YT" label="YouTube" description="Your video playlists and music collections" logoBg="bg-(--bg-youtube)" logoColor="text-(--youtube)" />
          <ArrowDownUpIcon size={20} color="var(--syncwave)" className="lg:transform border border-(--syncwave) lg:rotate-90 bg-[rgb(124,92,252,0.15)] p-4 rounded-full" />
          <Card logo="SP" label="Spotify" description="Your streaming library and playlists" logoBg="bg-(--bg-spotify)" logoColor="text-(--spotify)" />
        </div>
      </div>
      <hr className="w-[90%] lg:w-[95%] mt-10 mx-auto border border-(--line)" />
      <div className="w-[90%] mt-5 lg:w-[95%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-5">
        <p className="text-lg font-inter text-(--text-muted)">WHAT IT DOES</p>
      </div>
    </>
  );
}


