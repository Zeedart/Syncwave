
"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Route, routes } from "@/app/routes"
import {usePathname} from "next/navigation"



export default function Nav() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    let trimmedPathname = pathname?.replace(/^\/+/, '') || '';
    console.log(trimmedPathname)

    if (trimmedPathname === "SelectPlaylist") {
        trimmedPathname = "Select Playlist"
    }

    if (trimmedPathname === "SyncScreen") {
        trimmedPathname = "Sync Screen"
    }

    if (trimmedPathname === "") {
        trimmedPathname = "Home"
    }

    return (
        <nav className="flex justify-between items-center p-3 align-center text-(--text) border-b border-(--line)">
            <Link href="/" className="flex flex-row ml-3 items-center gap-2">
                <div className="bg-(--syncwave) font-syne text-white rounded-md items-center font-white flex justify-center w-8 h-8 font-[1000]">S</div>
                <span className="font-semibold font-syne ">Syncwave</span>
                <p className="text-sm hidden lg:flex place-content-center-safe font-syne text-(--syncwave)"><span className="font-bold mr-1.5">/</span> {trimmedPathname}</p>
            </Link>
            <div className="gap-2 flex mr-4 flex-row items-center">
                <button className="mode-btn" id="modeBtn" title="Toggle dark/light mode" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <DropdownMenu>
                    <DropdownMenuTrigger> Open </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-(--bg) text-(--text) border-4 border-(--line) rounded-md p-2 w-56" align="end" >
                        <DropdownMenuGroup>
                            {routes.map((route: Route) => (
                                <DropdownMenuItem key={route.href} asChild>
                                    <Link  href={route.href}>{route.label}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}