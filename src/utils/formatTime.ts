function formatTime(ms: number) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;

    const minToString = minutes.toString();
    const secndToString = secondsLeft.toString()

    return `${minToString.padStart(2, "0")}:${secndToString.padStart(2, "0")}`
}

export default formatTime