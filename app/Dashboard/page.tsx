import DataCard from "@/components/customComp/dataCard"

export default function Dashboard() {
    return (
        <div className="w-[90%] mt-10 ml-10 h-fit lg:h-screen flex flex-col gap-2">
            <h3>Your Sync</h3>
            <p className="text-sm text-(--text-muted)">3 pairs running · last synced 4 min ago</p>
            <div className="mt-4 flex justify-center w-full gap-3">
                <DataCard title="Total Songs Synced" data={46} />
                <DataCard title="Total Playlists Synced" data={8} />
                <DataCard title="Total Albums Synced" data={3} />
                <DataCard title="Total Artists Synced" data={12} />
            </div>
        </div>
    )
}