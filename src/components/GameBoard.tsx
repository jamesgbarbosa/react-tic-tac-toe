import { useState } from "react";
import "./Gameboard.css"

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


export function GameBoard({ playerSymbol = "X" }) {
    let b = initialBoard;
    const [board, setBoard] = useState(b);

    function handleSelectSquare(rowIndex, colIndex) {
        setBoard((prev) => {
            const b = [...prev.map(innerArr => [...innerArr])]
            b[rowIndex][colIndex] = playerSymbol;
            return b;
        })
    }

    return <div className="board flex-space-between">
        {board.map((rows, rowIndex) =>
        (
            <ul>
                {rows.map((square, colIndex) =>

                    <li onClick={() => {
                        handleSelectSquare(rowIndex, colIndex)
                    }}>{square}</li>
                )}
            </ul>
        )
        )}
    </ div>
}