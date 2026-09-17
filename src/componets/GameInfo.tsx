import { CHARACTER_DATA } from "../characterData/characters"
import type { GameInfoProp } from "../types";
export default function GameInfo({ foundIds }: GameInfoProp) {
    return (
        <div className="flex gap-4 items-center justify-center p-4 bg-white/80 rounded-xl shadow-md">
            {CHARACTER_DATA.map((char) => {
                const isFound = foundIds.includes(char.id);
                return (
                    <div key={char.id} className="flex flex-col items-center gap-1">
                        <img
                            src={char.image}
                            alt={char.name}
                            className={`w-12 h-12 rounded-full border-2 border-black object-cover transition-all ${isFound ? "blur-sm opacity-50 scale-95" : "opacity-100"
                                }`}
                        />
                        <span className="text-xs font-semibold">{char.name}</span>
                    </div>
                );
            })}
        </div>
    )
}