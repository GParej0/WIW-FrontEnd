const URL = import.meta.env.VITE_API_URL

export async function startGame() {
    const response = await fetch(`${URL}/start`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },
    })
    if (!response.ok) {
        throw new Error("Wrong data")
    }
    return await response.json()
}

export async function validateCharacter(characterId: string, x: number, y: number) {
    const response = await fetch(`${URL}/check-char`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            characterId,
            x,
            y,
        })
    })
    if (!response.ok) {
        throw new Error("Wrong data")
    }
    return await response.json()
}

export async function finishGame(sessionId: number, playerName: string, endTime: number) {
    const response = await fetch(`${URL}/finish`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            sessionId,
            playerName: playerName,
            endedAt: endTime
        })
    })
    if (!response.ok) {
        throw new Error("Wrong data")
    }
    return await response.json()
}

export async function getLeaderBoard() {
    const response = await fetch(`${URL}/board`)
    if (!response.ok) {
        throw new Error("Wrong data")
    }
    return await response.json()
}