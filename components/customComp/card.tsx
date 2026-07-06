


export default function Card({ logo, label, description, logoBg, logoColor }: { logo: string | React.ReactNode; label: string; description: string, logoBg?: string, logoColor?: string }) {
    return (
        <div className="w-[90%] lg:max-w-80 h-[20vh] lg:h-[25vh] bg-(--bg-card) border border-(--line) rounded-xl flex flex-col justify-center items-left gap-3 p-5">
            <div className={`w-15 h-15 lg:max-w-15 lg:max-h-15 lg:min-h-10 rounded-lg ${logoBg || 'bg-(--bg-card)'} flex justify-center items-center`}>
                <span className={logoColor || 'text-(--text-muted)'}>{logo}</span>
            </div>
            <h5 className="text-lg lg:text-xl font-inter">{label}</h5>
            <p className="text-[14px] text-(--text-muted)">{description}</p>
        </div>
    );
}