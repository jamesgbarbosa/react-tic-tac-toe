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

function deriveWinner(board) {
  let isWinner = false;
  for (const wc of WinningCombinations) {
    const first = board[wc[0].row][wc[0].column]
    const second = board[wc[1].row][wc[1].column]
    const third = board[wc[2].row][wc[2].column]

    if (first && first == second && second == third) {
      isWinner = true;
    }
  }
  return isWinner;
}

function deriveBoard(gameTurns, board) {
  gameTurns.map((turn) => {
    let { square, activePlayer } = turn;
    let { row, col } = square;
    board[row][col] = activePlayer;
  })

}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [playerName, setPlayerName] = useState({X : "Player 1", O: "Player 2"})
  let board = [...initialBoard.map(it => [...it])];
  let activePlayer = "";

  deriveBoard(gameTurns, board)

  if (deriveWinner(board)) {
    activePlayer = gameTurns[0].activePlayer;
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

  function resetBoard() {
    board = initialBoard;
    setGameTurns((prev) => {
      return [];
    });
  }

  function handleNameChange(name, symbol) {
    setPlayerName((prev) => {
      return {...prev, [symbol]:name};
    })
  }

  return (
    <>
      <div className="main">
        <div className="game-container">
          <div className="title flex center">
            <h1>Tic-Tac-Toe!</h1>
          </div>
          <div className="winner-container flex center">
              <div className="flex">
                {deriveWinner(board) ? <p className="winner-player">{playerName[activePlayer]} won!</p> : null}
                <div className="restart-button-container">
                  <button onClick={() => {
                    resetBoard()
                  }}>Restart Board</button>
                </div>
              </div>
          </div>
          <div className="player-container flex-space-between">
            <Player symbol="X" isActive={activePlayer === "X"} defaultName={playerName.X} onNameChange={handleNameChange}/>
            <Player symbol="O" isActive={activePlayer === "O"} defaultName={playerName.O} onNameChange={handleNameChange}/>
          </div>
          <div className="center">
            <GameBoard isDisabled={deriveWinner(board)} board={board} onSelectSquare={handleSelectSquare} />
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
