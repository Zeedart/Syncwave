import Image from "next/image";
import pic from "@/public/221620.jpg";

export default function MiniPlaylistDisplay() {
  return (
    <label className="group flex mb-3 cursor-pointer items-center justify-between rounded-2xl border-2 border-(--line) bg-(--bg-card) p-4 transition-all duration-200 has-checked:border-(--syncwave) has-checked:bg-(--syncwave)/10">
      {/* Left: cover + info */}
      <div className="flex items-center gap-3">
        <Image
          src={pic}
          width={100}
          height={100}
          alt="Playlist Cover"
          className="h-15 w-15 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Playlist Name</p>
          <p className="text-sm text-(--text-muted)">77 songs</p>
        </div>
      </div>

      {/* Hidden native radio */}
      <input
        type="radio"
        name="playlist"
        className="absolute h-0 w-0 opacity-0"
      />

      {/* Custom radio circle – changes only when checked */}
      <div className="relative h-5 w-5 shrink-0 self-center rounded-full border-2 border-(--text-muted) transition-all duration-200 group-has-[:checked]:border-(--syncwave) group-has-[:checked]:bg-(--syncwave)">
        {/* Inner dot – visible only when checked */}
        <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-white opacity-0 transition-opacity group-has-[:checked]:opacity-100" />
      </div>
    </label>
  );
}