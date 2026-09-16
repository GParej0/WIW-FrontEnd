import Waldo from "../assets/waldo.jpg"
import Oldaw from "../assets/odlaw.jpg"
import Wenda from "../assets/wenda.jpg"
import Wizard from "../assets/wizard.jpg"

export default function GameInfo() {
    return (
        <>
            <h3>Who is hidding?</h3>
            <div className="info-details">
                <img src={Waldo} alt="Waldo" className="infoPhoto" />
                <h5>Waldo</h5>
            </div>
            <div className="info-details">
                <img src={Oldaw} alt="Oldaw" className="infoPhoto" />
                <h5>Oldaw</h5>
            </div>
            <div className="info-details">
                <img src={Wenda} alt="Wenda" className="infoPhoto" />
                <h5>Wenda</h5>
            </div>
            <div className="info-details">
                <img src={Wizard} alt="Wizard" className="infoPhoto" />
                <h5>Wizard</h5>
            </div>
        </>
    )
}