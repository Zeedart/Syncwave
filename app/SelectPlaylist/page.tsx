import MiniPlaylistDisplay from "@/components/customComp/miniPlaylistDisplay"
import BlinkingDot from "@/components/customComp/blinkingDot"

export default function SelectPlaylist() {
  return (
    <div className="w-[95%] mt-10 mx-auto h-fit lg:h-fit mb-20 flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h3>Choose playlists to sync</h3>
        <p className="text-sm text-(--text-muted)">
          Pick one from each platform — they'll be paired and kept in sync.
        </p>
      </div>
      <div className="grid grid-cols-1 w-[90%] self-center lg:w-full mt-4 items-start lg:grid-cols-2 gap-4 mb-10">
        <div>
          <div className="flex items-baseline gap-2">
            <BlinkingDot width={10} height={10} color="bg-red-500" />
            <p className="font-semibold text-(--text-muted) mb-3">YouTube</p>
          </div>
          <MiniPlaylistDisplay />
          <MiniPlaylistDisplay />
          <MiniPlaylistDisplay />
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <BlinkingDot width={10} height={10} color="bg-green-500" />
            <p className="font-semibold text-(--text-muted) mb-3">Spotify</p>
          </div>
          <MiniPlaylistDisplay />
          <MiniPlaylistDisplay />
          <MiniPlaylistDisplay />
          <MiniPlaylistDisplay />
        </div>
      </div>
      <button className="p-4 w-fit self-center bg-(--bg-surface) hover:text-white border-2 border-(--line) text-(--text) hover:bg-(--syncwave-hover) rounded-xl transition-colors">
        Preview and sync →
      </button>
    </div>
  );
}