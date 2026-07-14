import BlinkingDot from "@/components/customComp/blinkingDot"
import SongDisplay from "@/components/customComp/songDisplay"
export default function PlaylistDisplay() {
    return (
        <div className="w-full mx-auto h-fit rounded-lg bg-(--bg-surface) border-2 border-(--line) gap-2">
            <div className="md:w-full flex rounded-lg items-center gap-40 md:gap-52 lg:gap-60 justify-between p-3 bg-(--bg-surface)">
                <div className="flex items-center gap-2">
                    <BlinkingDot width={10} height={10} color="bg-(--youtube)" />
                    <span className="text-md self-center">Chill Vibes</span>
                </div>
                <p className="text-sm text-(--text-muted) w-fit">84 songs</p>
            </div>
            <div className="border-b-(--line) w-full border-2 border-x-0 border-t-0"></div>
            <SongDisplay />
            <SongDisplay />
            <SongDisplay />
            <SongDisplay />
            <button className="w-full border-2 border-(--line) mt-2.5 rounded-lg hover:bg-(--bg-card) flex items-center justify-center p-3">Show all 84 songs</button>
        </div>
    )
}