import WALDO from "../assets/waldo.jpg"
import OLDAW from "../assets/odlaw.jpg"
import WENDA from "../assets/wenda.jpg"
import WIZARD from "../assets/wizard.jpg"

export interface CharacterLocation {
    id: string;
    name: string;
    x: number;
    y: number;
    tolerance: number;
    image: string
}

export const CHARACTER_DATA: CharacterLocation[] = [
    {
        id: "waldo",
        name: "Waldo",
        x: 1200,
        y: 45,
        tolerance: 50,
        image: WALDO
    },
    {
        id: "oldaw",
        name: "Oldaw",
        x: 1149,
        y: 455,
        tolerance: 40,
        image: OLDAW
    },
    {
        id: "wenda",
        name: "Wenda",
        x: 352,
        y: 536,
        tolerance: 40,
        image: WENDA
    },
    {
        id: "wizard",
        name: "Wizard",
        x: 371,
        y: 325,
        tolerance: 55,
        image: WIZARD
    }
]