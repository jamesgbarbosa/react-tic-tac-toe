import { useReducer, useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'

function App() {
  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare() {
    setActivePlayer((prev) => {
      return prev === "X" ? "O" : "X";
    })
  }

  return (
    <>
      <div className="main">
        <div className="game-container">
          <div className="player-container flex-space-between">
            <Player symbol="X" isActive={activePlayer === "X"}/>
            <Player symbol="O" isActive={activePlayer === "O"}/>
          </div>
          <div className="center">
            <GameBoard playerSymbol={activePlayer} onSelectSquare={handleSelectSquare} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
