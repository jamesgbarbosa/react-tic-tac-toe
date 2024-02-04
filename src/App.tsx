import { useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((prev) => {
      return prev === "X" ? "O" : "X";
    })

    setGameTurns((prev) => {
      return [{ activePlayer: activePlayer, square: { row: rowIndex, col: colIndex } }, ...prev]
    })
    debugger;
  }

  return (
    <>
      <div className="main">
        <div className="game-container">
          <div className="player-container flex-space-between">
            <Player symbol="X" isActive={activePlayer === "X"} />
            <Player symbol="O" isActive={activePlayer === "O"} />
          </div>
          <div className="center">
            <GameBoard gameTurns={gameTurns} onSelectSquare={handleSelectSquare} />
          </div>
        </div>

      </div>
      {gameTurns.map(it =>
      (
        <>
          <div>{it?.activePlayer} {it?.square?.row} {it?.square?.col}</div>
        </>
      )
      )}
    </>
  )
}

export default App
