import type { DropMenuProps } from "../types"
import { CHARACTER_DATA } from "../characterData/characters"


export default function DropMenu({ target, onClose, onSelect, foundIds }: DropMenuProps) {

    const charactersToLookFor = CHARACTER_DATA.filter((char) => !foundIds.includes(char.id))

    return (
        <>
            <div className="drop-menu" style={{
                position: "absolute",
                left: `${target.displayX}px`,
                top: `${target.displayY}px`,
                backgroundColor: "white",
                transform: "translate(10%, 40%)"
            }}>
                <div className="menu-main">
                    <h3>Who did you found?</h3>
                    <ul>
                        {
                            charactersToLookFor.map(char => {
                                return (
                                    <li key={char.id} onClick={() => onSelect(char.id)} >
                                        <img src={char.image} alt={char.id} />
                                        <h5>{char.name}</h5>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button className="close-menu" onClick={onClose} >x</button>
                </div>
            </div>

        </>
    )
}