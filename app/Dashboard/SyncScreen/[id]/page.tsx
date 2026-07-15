"use client"
import {ArrowLeftIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import BlinkingDot from "@/components/customComp/blinkingDot"
import PlaylistDisplay from "@/components/customComp/playlistDisplay"
import { ArrowsLeftRightIcon  } from "@phosphor-icons/react"
import { Switch } from "@/components/ui/switch"


export default function SyncScreen() {
    const router = useRouter()

    return (
        <div className="w-[95%] mt-10 mb-30 mx-auto h-fit lg:h-fit flex flex-col gap-5">
            <button 
                className="p-3 hover:cursor-pointer w-fit flex items-center gap-2 bg-(--bg-surface)  border-2 border-(--line) text-(--text) hover:bg-(--bg-card) rounded-xl transition-colors"
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
            <div className="flex flex-col lg:flex-row gap-5 w-fit self-center">
                <PlaylistDisplay /> 
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="h-[20%] border-l border-(--line-hover)"></div>
                    <ArrowsLeftRightIcon size={22} weight="fill" color="#7C5CFC" className="self-center rotate-90 lg:rotate-0" />
                    <div className="h-[20%] border-l rounded-2xl border-(--line-hover)"></div>
                </div>
                <PlaylistDisplay />
            </div>
            
            <button className="w-fit bg-(--bg-surface) self-center border-2 font-syne font-bold text-lg px-5 border-(--line) mt-2.5 rounded-lg hover:bg-(--bg-card) flex items-center justify-center p-3">Start sync</button>

            <div className="sm:w-xl lg:w-4xl max-w-4xl self-center p-5 bg-(--bg-surface) gap-4 flex-col flex border-2 border-(--line) rounded-2xl">
                <h6>Sync Settings</h6>
                <div className="flex justify-between">
                    <div>
                        <p className="text-md">Sync deletions</p>
                        <p className="text-sm text-(--text-muted)">Remove from one side, remove from the other</p>
                    </div>
                    <Switch className="border-2" />
                </div>
                <hr className="border-(--line)"></hr>
                <div className="flex justify-between">
                    <div>
                        <p className="text-md">Auto sync</p>
                        <p className="text-sm text-(--text-muted)">Check for changes every 5 minutes</p>
                    </div>
                    <Switch className="border-2" />
                </div>
            </div>
        </div>
    )
}