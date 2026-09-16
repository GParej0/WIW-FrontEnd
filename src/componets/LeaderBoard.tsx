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
                <h2>Congrats! You won!</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Please let us know your name:</label>
                    <input type="text" name="name" id="name" />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }

    return (
        <>
            <h1>Congratulations!</h1>
            <ol>
                {scores.map((score, index) => (
                    <li key={index}>
                        {score.name} - {score.score.toFixed(2)} seconds
                    </li>
                ))}
            </ol>
            <button onClick={onRestart}>Play again</button>
        </>
    )
}