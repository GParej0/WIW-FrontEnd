export interface CharacterLocation {
    id: string;
    name: string;
    x: number;
    y: number;
    tolerance: number;
}

export const CHARACTER_DATA: CharacterLocation[] = [
    {
        id: "waldo",
        name: "waldo",
        x: 1200,
        y: 45,
        tolerance: 50
    },
    {
        id: "oldaw",
        name: "oldaw",
        x: 1149,
        y: 455,
        tolerance: 40
    },
    {
        id: "wenda",
        name: "wenda",
        x: 352,
        y: 536,
        tolerance: 40,
    },
    {
        id: "wizard",
        name: "wizard",
        x: 371,
        y: 325,
        tolerance: 55,
    }
]