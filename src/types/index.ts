interface ClickTarget {
    displayX: number,
    displayY: number,
    realX: number,
    realY: number
}
interface DropMenuProps {
    target: ClickTarget,
    onClose: () => void,
    onSelect: (characterName: string) => void
}

export type { ClickTarget, DropMenuProps }