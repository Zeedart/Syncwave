export default function DataCard({ title, data }: { title: string; data: number }) {
    return (
        <div className="lg:w-full p-5 border-2 border-(--line) rounded-2xl bg-(--bg-surface) h-fit flex justify-center flex-col">
            <p className="text-sm text-(--text-muted)">{title}</p>
            <p className="text-4xl font-extrabold font-syne ml-1 text-(--syncwave)">{data}</p>
        </div>
    )
}