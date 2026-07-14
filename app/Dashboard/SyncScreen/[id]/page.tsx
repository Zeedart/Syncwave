"use client"
import {ArrowLeftIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import BlinkingDot from "@/components/customComp/blinkingDot"
import PlaylistDisplay from "@/components/customComp/playlistDisplay"
import { ArrowsLeftRightIcon  } from "@phosphor-icons/react"

export default function SyncScreen() {
    const router = useRouter()

    return (
        <div className="w-[95%] mt-10 mx-auto h-fit lg:h-fit flex flex-col gap-5">
            <button 
                className="p-3 hover:cursor-pointer w-fit flex items-center gap-2  border-2 border-(--line) text-(--text) hover:bg-(--bg-card) rounded-xl transition-colors"
                onClick={() => router.back()}
                
            >
                <ArrowLeftIcon />
                Back to dashboard
            </button>
            <div className="w-full self-center p-4 border-2 border-(--line)  gap-3.5 rounded-lg bg-(--bg-surface) h-fit flex">
                <div className="flex items-center gap-2">
                    <BlinkingDot width={10} height={10} color="bg-green-500"/>
                    <p className="text-sm text-(--text-muted) self-center w-fit">On both platforms</p>
                </div>
                <div className="flex items-center gap-2">
                    <BlinkingDot width={10} height={10} color="bg-(--text-destructive)"/>
                    <p className="text-sm text-(--text-muted) self-center w-fit">Missing from other side</p>
                </div>
            </div>
            <div className="flex gap-5 w-fit self-center">
                <PlaylistDisplay /> 
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="h-[20%] border-l border-(--line-hover)"></div>
                    <ArrowsLeftRightIcon size={22} weight="fill" color="#7C5CFC" className="self-center" />
                    <div className="h-[20%] border-l rounded-2xl border-(--line-hover)"></div>
                </div>
                <PlaylistDisplay />
            </div>
            
        </div>
    )
}