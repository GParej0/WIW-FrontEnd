
import { useRef } from "react"
import WiWBoard from "../assets/Where is Waldo .jpg"
import calculateImageCoordinates from "../utils/coordinates"

export default function GameBoard() {

    const imageRef = useRef<HTMLImageElement>(null)


    function handleClick(e: React.MouseEvent<HTMLImageElement>) {
        const image = imageRef.current

        if (!image) return;

        const coor = calculateImageCoordinates(e, image)
        console.log(coor)
    }
    return (
        <>
            <img ref={imageRef} src={WiWBoard} alt="Where is Waldo?" onClick={handleClick} />
        </>
    )
}