import { useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'

function getActivePlayer(gameTurns) {
  return gameTurns.length == 0 ? "X" : (gameTurns[0].activePlayer == "X" ? "O" : "X" )
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState([])
  let activePlayer = getActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    let isSquareAlreadyMarked = gameTurns.find(it => (it?.square?.row == rowIndex && it?.square.col == colIndex));
    // setActivePlayer((prev) => {
    //   if (isSquareAlreadyMarked) {
    //     return prev;
    //   }
    //   return prev === "X" ? "O" : "X";
    // })

    setGameTurns((prev) => {
      if (isSquareAlreadyMarked) {
        return [...prev]
      }
      return [{ activePlayer: activePlayer, square: { row: rowIndex, col: colIndex } }, ...prev]
    })
  }

  return (
    <>
      <div className="main">
        <div className="game-container">
          <div className="player-container flex-space-between">
            <Player symbol="X" isActive={activePlayer === "X"} defaultName="Player 1"/>
            <Player symbol="O" isActive={activePlayer === "O"} defaultName="Player 2" />
          </div>
          <div className="center">
            <GameBoard gameTurns={gameTurns} onSelectSquare={handleSelectSquare} />
          </div>
        </div>

      </div>
      {/* {gameTurns.map(it =>
      (
        <>
          <div>{it?.activePlayer} {it?.square?.row} {it?.square?.col}</div>
        </>
      )
      )} */}
    </>
  )
}

export default App
