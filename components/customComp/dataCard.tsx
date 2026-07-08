export default function DataCard({ title, data }: { title: string; data: number }) {
    return (
        <div className="w-6xl p-5 border-2 border-(--line) rounded-2xl bg-(--bg-card) h-fit flex justify-center flex-col gap-3">
            <p className="text-sm text-(--text-muted)">{title}</p>
            <p className="text-4xl font-extrabold font-syne ml-1 text-(--syncwave)">{data}</p>
        </div>
    )
}