import type React from "react";
import type { LeaderBoardProps } from "../types";
import { useState } from "react";

export default function LeaderBoard({ timeScore, onRestart }: LeaderBoardProps) {
    const [name, setName] = useState<string | null>(null);
    const [scores, setScores] = useState<{ name: string; score: number }[]>([
        { name: "Player 1", score: 45 },
        { name: "Player 2", score: 62 },
    ])

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const name = formData.get("name") as string;
        setName(name)
        setScores(prev => {
            const newScores = [...prev, { name: name, score: timeScore / 1000 }];
            return newScores.sort((a, b) => a.score - b.score)
        })
    }
    if (name === null) {
        return (
            <>
                <div className="min-h-screen flex items-center justify-center bg-amber-50/50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md w-full text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-200">
                        <div className="text-4xl">🎉</div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                            Congrats! You won!
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full text-left">
                            <label htmlFor="name" className="text-sm font-bold text-gray-600">
                                Please let us know your name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="Ej. Waldo Master"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-800"
                            />
                            <button
                                type="submit"
                                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-150 cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50/50 p-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md w-full text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="text-4xl">🏆</div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">
                    Congratulations!
                </h1>

                <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-left">
                        Leaderboard
                    </h2>
                    <ol className="flex flex-col gap-2 w-full text-left">
                        {scores.map((score, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/60 shadow-xs"
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`w-6 text-center font-bold text-sm ${index === 0 ? "text-amber-500 text-base" :
                                            index === 1 ? "text-slate-400 text-base" :
                                                index === 2 ? "text-amber-700 text-base" : "text-gray-400"
                                        }`}>
                                        {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}.`}
                                    </span>
                                    <span className="font-semibold text-slate-700 text-sm">
                                        {score.name}
                                    </span>
                                </div>
                                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                                    {score.score.toFixed(2)}s
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <button
                    onClick={onRestart}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer"
                >
                    🔄 Play again
                </button>
            </div>
        </div>
    )
}