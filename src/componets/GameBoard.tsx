import { useEffect, useState } from "react";
import { useRef } from "react";
import WiWBoard from "../assets/Where is Waldo .jpg";
import calculateImageCoordinates from "../utils/coordinates";
import type { ClickTarget, GameBoardProps } from "../types";
import DropMenu from "./DropdownMenu";
import { CHARACTER_DATA } from "../characterData/characters";
import GameInfo from "./GameInfo"
import LeaderBoard from "./LeaderBoard";

export default function GameBoard({ isPlaying, startTime, setIsPlaying, setStartTime }: GameBoardProps) {

    const imageRef = useRef<HTMLImageElement>(null)
    const [target, setTarget] = useState<ClickTarget | null>(null);
    const [foundCharacterIds, setFoundCharacterIds] = useState<string[]>([])
    const [endTime, setEndTime] = useState<number>();
    const [timeScore, setTimeScore] = useState<number | null>(null)

    useEffect(() => {
        if (isPlaying) {
            endGame()
        }
    }, [foundCharacterIds, isPlaying])

    function handleClick(e: React.MouseEvent<HTMLImageElement>) {
        const image = imageRef.current

        if (!image) return;

        const coords = calculateImageCoordinates(e, image)
        setTarget({
            displayX: coords.screenX,
            displayY: coords.screenY,
            realX: coords.x,
            realY: coords.y,
        })

    }

    function closeMenu() {
        setTarget(null)
    }

    function selectCharacter(character: string) {
        const foundCharacter = CHARACTER_DATA.find((char) => char.id.toLowerCase() === character.toLowerCase());

        if (foundCharacter && target) {
            const diffX = Math.abs(target.realX - foundCharacter.x);
            const diffY = Math.abs(target.realY - foundCharacter.y);

            if (diffX <= foundCharacter.tolerance && diffY <= foundCharacter.tolerance) {
                setFoundCharacterIds(prev => [...prev, foundCharacter.id])
                alert(`Congarts! You founded ${character}!`)
            } else {

                alert(`Sory you missed =(`)
            }
        }
        setTarget(null)
    }

    function endGame() {

        if (foundCharacterIds.length === CHARACTER_DATA.length) {
            const finishedAt = Date.now();
            setEndTime(finishedAt);

            if (startTime == null) return

            setTimeScore(finishedAt - startTime);
            setIsPlaying(false)
        }
    }

    function onRestart() {
        setIsPlaying(false)
        setFoundCharacterIds([]);
        setTimeScore(null);
        setTarget(null)
    }
    if (timeScore !== null) {
        return (
            <LeaderBoard timeScore={timeScore} onRestart={onRestart} />
        )
    }

    if (!isPlaying) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-amber-50/50">
                <button onClick={() => { setIsPlaying(true); setStartTime(Date.now()) }} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xl px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/20"
                >🎮 Play Game</button>
            </div>
        )
    }

    return (
        <>
            <GameInfo foundIds={foundCharacterIds} />
            <div className="relative min-h-screen bg-amber-50 flex flex-col items-center p-4">
                <img ref={imageRef} src={WiWBoard} alt="Where is Waldo?" onClick={handleClick} className="cursor-crosshair rounded-lg shadow-2xl max-w-full" />
                {target && <DropMenu target={target} onClose={closeMenu} onSelect={selectCharacter} foundIds={foundCharacterIds} />}
            </div>
        </>
    )
}