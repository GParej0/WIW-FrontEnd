import type { DropMenuProps } from "../types"
import { CHARACTER_DATA } from "../characterData/characters"


export default function DropMenu({ target, onClose, onSelect, foundIds }: DropMenuProps) {

    const charactersToLookFor = CHARACTER_DATA.filter((char) => !foundIds.includes(char.id))
    const isNearTop = target.displayY < 150;
    return (
        <>
            <div className={`drop-menu absolute z-50 bg-white shadow-xl rounded-xl p-3 border border-gray-200 min-w-[160px] translate-x-85 ${isNearTop ? "translate-y-2" : "-translate-y-full"}`} style={{
                left: `${target.displayX}px`,
                top: `${target.displayY}px`,
            }}>
                <div className="menu-main">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Who did you found?</h3>
                    <ul className="flex flex-col gap-2">
                        {
                            charactersToLookFor.map(char => {
                                return (
                                    <li key={char.id} onClick={() => onSelect(char.id)} className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
                                        <img src={char.image} alt={char.id} className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                                        <h5 className="text-sm font-semibold text-slate-800">{char.name}</h5>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button className="close-menu" onClick={onClose} >x</button>
                </div>
            </div >

        </>
    )
}