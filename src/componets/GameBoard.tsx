import { useState } from "react";
import { useRef } from "react";
import WiWBoard from "../assets/Where is Waldo .jpg";
import calculateImageCoordinates from "../utils/coordinates";
import type { ClickTarget, GameBoardProps } from "../types";
import DropMenu from "./DropdownMenu";
import GameInfo from "./GameInfo"
import LeaderBoard from "./LeaderBoard";
import { startGame, validateCharacter } from "../services/api";

export default function GameBoard({ isPlaying, setIsPlaying, setStartTime }: GameBoardProps) {

    const imageRef = useRef<HTMLImageElement>(null)
    const [target, setTarget] = useState<ClickTarget | null>(null);
    const [foundCharacterIds, setFoundCharacterIds] = useState<string[]>([])
    const [sessionId, setSessionId] = useState<number | null>(null)
    const [characters, setCharacters] = useState<string[]>([])
    const [endTime, setEndTime] = useState<number | null>(null)


    async function handleStartGame() {
        try {
            const data = await startGame();
            setSessionId(data.sessionID);
            setStartTime(Date.now());
            setIsPlaying(true);
            setCharacters(data.characters)
        } catch (error) {
            alert("Error al iniciar la partida");
        }
    }


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

    async function selectCharacter(character: string) {
        if (!target) return;

        try {
            const response = await validateCharacter(character, target.realX, target.realY);

            if (response.isCorrect) {
                setFoundCharacterIds(prev => [...prev, character]);
                if (characters.length > 0 && foundCharacterIds.length + 1 === characters.length) {
                    setIsPlaying(false);
                    setEndTime(Date.now())
                }
                alert(`Congrats! You found ${character}!`);
            } else {
                alert(`Sorry, you missed =(`);
            }
        } catch (error) {
            alert("Error al conectar con el servidor.");
        } finally {
            setTarget(null);
        }
    }

    function onRestart() {
        setFoundCharacterIds([]);
        setTarget(null)
        setStartTime(null)
    }


    if (characters.length > 0 && foundCharacterIds.length === characters.length) {
        if (sessionId === null) return null;
        if (endTime === null) return null
        return (
            <LeaderBoard sessionId={sessionId} endTime={endTime} onRestart={onRestart} />
        )
    }

    if (!isPlaying) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-amber-50/50">
                <button onClick={handleStartGame} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xl px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/20"
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