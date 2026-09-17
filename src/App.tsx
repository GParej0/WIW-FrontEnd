import Navbar from "./componets/Navbar"
import GameBoard from "./componets/GameBoard"
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  return (
    <>
      <Navbar isPlaying={isPlaying} startTime={startTime} />
      <GameBoard isPlaying={isPlaying} startTime={startTime} setIsPlaying={setIsPlaying} setStartTime={setStartTime} />
    </>
  )
}

export default App
