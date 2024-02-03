import { useReducer, useState } from 'react'
import './App.css'
import './components/Player'
import { Player } from './components/Player'
import { GameBoard } from './components/GameBoard'

function App() {



  return (
    <>
      <div className="main">
        <div className="game-container">
          <div className="player-container flex-space-between">
            <Player symbol="X" />
            <Player symbol="O"/>
          </div>
          <div className="center">
            <GameBoard />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
