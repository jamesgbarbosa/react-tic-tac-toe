import { useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'
import { Logs } from "./components/Logs";
import { WINNING_COMBINATIONS as WinningCombinations } from "./WinningCombinations"

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function getActivePlayer(gameTurns) {
  return gameTurns.length == 0 ? "X" : (gameTurns[0].activePlayer == "X" ? "O" : "X")
}

function deriveWinner(gameTurns) {
  let isWinner = false, first = null, second = null, third = null, winningCombination = null;
  for (const wc of WinningCombinations) {
    // const first = board[wc[0].row][wc[0].column]
    // const first = board[wc[0].row][wc[0].column]
    // const second = board[wc[1].row][wc[1].column]
    // const third = board[wc[2].row][wc[2].column]

    first = gameTurns.find(it => (it.square.row == wc[0].row && it.square.col == wc[0].column))
    second = gameTurns.find(it => (it.square.row == wc[1].row && it.square.col == wc[1].column))
    third = gameTurns.find(it => (it.square.row == wc[2].row && it.square.col == wc[2].column))
    winningCombination = { first, second, third };

    if (first?.activePlayer && first?.activePlayer == second?.activePlayer && second?.activePlayer == third?.activePlayer) {
      isWinner = true;
      first.winningSymbol = true;
      second.winningSymbol = true;
      third.winningSymbol = true;
      // winningCombination = { first, second, third };
    }

  }
  return { isWinner, updatedGameTurns: gameTurns };
}

function deriveBoard(gameTurns, board) {
  gameTurns.map((turn) => {
    let { square, activePlayer } = turn;
    let { row, col } = square;
    board[row][col] = turn?.winningSymbol ? activePlayer + activePlayer : activePlayer;
  })
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [playerName, setPlayerName] = useState({ X: "Player 1", O: "Player 2" })
  let board = [...initialBoard.map(it => [...it])];
  let activePlayer = "";
  deriveBoard(gameTurns, board)
  const { isWinner } = deriveWinner(gameTurns);

  if (isWinner) {
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
      let gameTurns = [{ winningSymbol: false, activePlayer: activePlayer, square: { row: rowIndex, col: colIndex } }, ...prev];
      let { isWinner, updatedGameTurns } = deriveWinner(gameTurns);
      if (isWinner) {
        deriveBoard(updatedGameTurns, board)
        return updatedGameTurns;
      }
      return gameTurns;
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
      return { ...prev, [symbol]: name };
    })
  }

  return (
    <div className="main">
      <div className="game-container">
        <div className="title flex center">
          <h1>Tic-Tac-Toe!</h1>
        </div>
        <div className="winner-container flex center">
          <div className="flex">
            {isWinner ? <p className="winner-player">{playerName[activePlayer]} won!</p> : null}
            <div className={`${isWinner ? 'shake' : null} restart-button-container`}>
              <button onClick={() => {
                resetBoard()
              }}> Reset Board</button>
            </div>
          </div>
        </div>
        <div className="player-container flex-space-between">
          <Player isDisableEdit={gameTurns?.length > 0} symbol="X" isActive={activePlayer === "X"} defaultName={playerName.X} onNameChange={handleNameChange} />
          <Player isDisableEdit={gameTurns?.length > 0} symbol="O" isActive={activePlayer === "O"} defaultName={playerName.O} onNameChange={handleNameChange} />
        </div>
        <div className="center">
          <GameBoard isDisabled={isWinner} board={board} onSelectSquare={handleSelectSquare} />
        </div>
        <div className="center">
          <Logs gameTurns={gameTurns} />
        </div>
      </div>
    </div>
  )
}

export default App
