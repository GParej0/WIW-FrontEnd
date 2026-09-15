import type { DropMenuProps } from "../types"
import Waldo from "../assets/waldo.jpg"
import Oldaw from "../assets/odlaw.jpg"
import Wenda from "../assets/wenda.jpg"
import Wizard from "../assets/wizard.jpg"

export default function DropMenu({ target, onClose }: DropMenuProps) {

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
                        <li>
                            <img src={Waldo} alt="Waldo" className="menuPhoto" />
                            <h5>Waldo</h5>
                        </li>
                        <li>
                            <img src={Oldaw} alt="Waldo" className="menuPhoto" />
                            <h5>Oldaw</h5>
                        </li>
                        <li>
                            <img src={Wenda} alt="Waldo" className="menuPhoto" />
                            <h5>Wenda</h5>
                        </li>
                        <li>
                            <img src={Wizard} alt="Waldo" className="menuPhoto" />
                            <h5>Wizard</h5>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="close-menu" onClick={onClose} >x</button>
                </div>
            </div>

        </>
    )
}