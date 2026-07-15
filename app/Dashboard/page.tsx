"use client"
import DataCard from "@/components/customComp/dataCard"
import SyncPairCard from "@/components/customComp/syncPairCard"
import { WarningIcon } from "@phosphor-icons/react"

export default function Dashboard() {
    return (
        <div className="w-[90%] mt-10 mx-auto h-fit lg:h-fit mb-30 flex flex-col gap-2">
            <h3>Your Sync</h3>
            <p className="text-sm text-(--text-muted)">3 pairs running · last synced 4 min ago</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 md:grid-cols-4">
                <DataCard title="Total Songs Synced" data={46} />
                <DataCard title="Total Playlists Synced" data={8} />
                <DataCard title="Total Albums Synced" data={3} />
                <DataCard title="Total Artists Synced" data={12} />
            </div>
            <h4 className="my-5">Sync Pairs</h4>
            <div className="grid grid-cols-1 gap-3 justify-items-center lg:grid-rows-4">
                <SyncPairCard ytPlaylistTitle="My YouTube Playlist" spotifyPlaylistTitle="My Spotify Playlist" totalSongs={46} />
                <SyncPairCard ytPlaylistTitle="My YouTube Playlist" spotifyPlaylistTitle="My Spotify Playlist" totalSongs={46} />
                <SyncPairCard ytPlaylistTitle="My YouTube Playlist" spotifyPlaylistTitle="My Spotify Playlist" totalSongs={46} />
            </div>
            <div className="bg-(--bg-surface) rounded-2xl border border-(--text-destructive) h-fit ">
                <div className="flex p-5 justify-between">
                    <h4>Failed songs</h4>
                    <div className="flex gap-1 bg-(--bg-destructive) p-2 rounded-lg">
                        <WarningIcon size={20} weight="duotone" color="#FF6B6B" className="self-center" />
                        <p className="text-sm self-center text-(--text-destructive)">3 songs</p>
                    </div>
                </div>
                <div className="flex justify-between gap-2 p-5">
                    <div>
                        <p className="text-sm">Song 1</p>
                        <p className="text-sm text-(--text-destructive)">Not found</p>
                    </div>
                    <button className="bg-(--bg-card) p-3 hover:text-white border-2 border-(--line)  text-(--text) hover:bg-(--syncwave-hover) rounded-xl transition-colors">Search Spotify</button>
                </div>
                <hr className="w-[97%] text-(--text-muted) my-0 mx-auto" />
                <div className="flex justify-between gap-2 p-5">
                    <div>
                        <p className="text-sm">Song 1</p>
                        <p className="text-sm text-(--text-destructive)">Not found</p>
                    </div>
                    <button className="bg-(--bg-card) p-3 hover:text-white border-2 border-(--line)  text-(--text) hover:bg-(--syncwave-hover) rounded-xl transition-colors">Search Spotify</button>
                </div>
                <hr className="w-[97%] text-(--text-muted) my-0 mx-auto" />
                <div className="flex justify-between gap-2 p-5">
                    <div>
                        <p className="text-sm">Song 1</p>
                        <p className="text-sm text-(--text-destructive)">Not found</p>
                    </div>
                    <button className="bg-(--bg-card) p-3 hover:text-white border-2 border-(--line)  text-(--text) hover:bg-(--syncwave-hover) rounded-xl transition-colors">Search Spotify</button>
                </div>
            </div>
        </div>
    )
}