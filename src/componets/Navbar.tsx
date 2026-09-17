import { useEffect, useState } from "react"
import type { NavProps } from "../types"


export default function Navbar({ isPlaying, startTime }: NavProps) {
    const [elapsedTime, setElapsedTime] = useState(0)

    useEffect(() => {
        if (startTime === null || !isPlaying) return

        const interval = setInterval(() => {

            setElapsedTime(Math.floor((Date.now() - startTime!) / 1000))
        }, 1000)

        return () => clearInterval(interval);

    }, [isPlaying, startTime])

    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    return (
        <nav className="flex items-center justify-between max-w-4xl mx-auto my-4 px-8 py-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-amber-100/60 sticky top-4 z-40">
            <div className="title flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">
                    Where is Waldo?
                </h2>
            </div>

            <div className="nav-crono bg-amber-100/70 text-amber-900 font-mono font-extrabold text-lg px-4 py-1.5 rounded-xl border border-amber-200/80 shadow-xs flex items-center gap-2">
                <span className="text-sm">⏱️</span>
                <h3>{formattedTime}</h3>
            </div>
        </nav>
    )
}