import Image from "next/image"
import pic from "@/public/221620.jpg";
import BlinkingDot from "./blinkingDot";

export default function SongDisplay() {
    return (
        <div className="w-full mx-auto h-fit flex my-4  items-center">
            <div className="w-fit flex items-center gap-2">
                <p className="text-md text-(--text-muted) ml-6 mr-3 w-fit">1</p>
                <Image
                    src={pic}
                    width={40}
                    height={40}
                    alt="Playlist Cover"
                    className="h-15 w-15 rounded-lg object-cover"
                />
                <div>
                    <p className="text-sm font-semibold">Song Name</p>
                    <p className="text-sm text-(--text-muted)">Artist Name</p>
                </div>
            </div>
            <BlinkingDot width={10} height={10} className="ml-auto mr-4" color="bg-green-500"/>
        </div>
    )
}