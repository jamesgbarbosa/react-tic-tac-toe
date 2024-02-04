import { useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'
import { WINNING_COMBINATIONS as WinningCombinations } from "./WinningCombinations"

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
  let activePlayer = "";
  let isWinner = false;

  gameTurns.map((turn) => {
    let { square, activePlayer } = turn;
    let { row, col } = square;
    board[row][col] = activePlayer;
  })

  for (const wc of WinningCombinations) {
    const first = board[wc[0].row][wc[0].column]
    const second = board[wc[1].row][wc[1].column]
    const third = board[wc[2].row][wc[2].column]

    if (first && first == second && second == third) {
      isWinner = true;
    }
  }

  if (isWinner) {
    setTimeout(() => {
      alert(`Player ${gameTurns[0].activePlayer} won!`)
    }, 500)
   
  } else {
    activePlayer = getActivePlayer(gameTurns);
  }

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
            <GameBoard  isDisabled={isWinner} board={board} onSelectSquare={handleSelectSquare} />
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
