import { useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'
import { WINNING_COMBINATIONS as WC } from "./WinningCombinations"

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function getActivePlayer(gameTurns) {
  return gameTurns.length == 0 ? "X" : (gameTurns[0].activePlayer == "X" ? "O" : "X")
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  let board = initialBoard;
  let activePlayer = getActivePlayer(gameTurns);

  gameTurns.map((turn) => {
    let { square, activePlayer } = turn;
    let { row, col } = square;
    board[row][col] = activePlayer;
  })

  function handleSelectSquare(rowIndex, colIndex) {
    let isSquareAlreadyMarked = gameTurns.find(it => (it?.square?.row == rowIndex && it?.square.col == colIndex));
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
            <Player symbol="X" isActive={activePlayer === "X"} defaultName="Player 1" />
            <Player symbol="O" isActive={activePlayer === "O"} defaultName="Player 2" />
          </div>
          <div className="center">
            <GameBoard board={board} onSelectSquare={handleSelectSquare} />
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
