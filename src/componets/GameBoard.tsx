import { useState } from "react";
import { useRef } from "react";
import WiWBoard from "../assets/Where is Waldo .jpg";
import calculateImageCoordinates from "../utils/coordinates";
import type { ClickTarget } from "../types";
import DropMenu from "./DropdownMenu";
import { CHARACTER_DATA } from "../characterData/characters";

export default function GameBoard() {

    const imageRef = useRef<HTMLImageElement>(null)
    const [target, setTarget] = useState<ClickTarget | null>(null);
    const [foundCharacterIds, setFoundCharacterIds] = useState<string[]>([])
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
    return (
        <>
            <img ref={imageRef} src={WiWBoard} alt="Where is Waldo?" onClick={handleClick} />
            {target && <DropMenu target={target} onClose={closeMenu} onSelect={selectCharacter} foundIds={foundCharacterIds} />}
        </>
    )
}