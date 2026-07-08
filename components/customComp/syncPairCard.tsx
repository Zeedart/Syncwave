"use client"

import BlinkingDot from "./blinkingDot";
import { ArrowsLeftRightIcon, MusicNotesIcon } from "@phosphor-icons/react";
export default function SyncPairCard({ ytPlaylistTitle, spotifyPlaylistTitle, totalSongs }: { ytPlaylistTitle: string; spotifyPlaylistTitle: string; totalSongs: number }) {
    return (
        <div className="lg:w-full p-5 border-2 border-(--line) flex-col gap-3.5 rounded-2xl bg-(--bg-card) h-fit flex">
            <div className="flex gap-2">
                <div className={`w-10 h-10 lg:max-w-15 lg:max-h-15 lg:min-h-10 rounded-lg bg-(--bg-youtube) flex justify-center items-center`}>
                    <span className="text-(--youtube)">YT</span>
                </div>
                <p className="text-sm self-center ">{ytPlaylistTitle}</p>
                <ArrowsLeftRightIcon size={22} weight="fill" color="#7C5CFC" className="self-center" />
                <div className={`w-10 h-10 lg:max-w-15 lg:max-h-15 lg:min-h-10 rounded-lg bg-(--bg-spotify) flex justify-center items-center`}>
                    <span className="text-(--spotify)">SP</span>
                </div>
                <p className="text-sm self-center">{spotifyPlaylistTitle}</p>
                <div className="ml-auto flex justify-center items-center gap-2 self-center">
                    <BlinkingDot width={10} height={10}></BlinkingDot>
                    <p className="text-sm text-(--text-muted)">Syncing</p>
                </div>
            </div>
            <div className="flex gap-1">
                <MusicNotesIcon size={20} weight="duotone" color="#74746f" className="self-center" />
                <p className="text-sm self-center text-(--text-muted)">{totalSongs} songs</p>
            </div>
        </div>
    )
}