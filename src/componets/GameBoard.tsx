import { useState } from "react";
import { useRef } from "react";
import WiWBoard from "../assets/Where is Waldo .jpg";
import calculateImageCoordinates from "../utils/coordinates";
import type { ClickTarget } from "../types";
import DropMenu from "./DropdownMenu";

export default function GameBoard() {

    const imageRef = useRef<HTMLImageElement>(null)
    const [target, setTarget] = useState<ClickTarget | null>(null);

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
        console.log(character)
    }
    return (
        <>
            <img ref={imageRef} src={WiWBoard} alt="Where is Waldo?" onClick={handleClick} />
            {target && <DropMenu target={target} onClose={closeMenu} onSelect={selectCharacter} />}
        </>
    )
}