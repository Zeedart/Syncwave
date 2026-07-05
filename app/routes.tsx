export type Route = {
    label: string
    href: string
    icon?: string
}

export const routes: Route[] = [
    { label: "Home", href: "/", icon: "refresh" },
    { label: "Dashboard", href: "/Dashboard", icon: "home" },
    { label: "Select Playlist", href: "/SelectPlaylist", icon: "playlist" },
    { label: "Sync Screen", href: "/SyncScreen", icon: "sync" },
]