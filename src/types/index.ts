interface ClickTarget {
    displayX: number,
    displayY: number,
    realX: number,
    realY: number
}
interface DropMenuProps {
    target: ClickTarget,
    onClose: () => void,
    onSelect: (characterName: string) => void,
    foundIds: string[]
}

interface LeaderBoardProps {
    timeScore: number,
    onRestart: () => void
}

interface GameInfoProp {
    foundIds: string[];
}

interface NavProps {
    isPlaying: boolean,
    startTime: number | null
}

interface GameBoardProps {
    isPlaying: boolean,
    startTime: number | null,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    setStartTime: React.Dispatch<React.SetStateAction<number | null>>
}
export type { ClickTarget, DropMenuProps, LeaderBoardProps, GameInfoProp, NavProps, GameBoardProps }