import "./Gameboard.css"

const initialBoard = [
    ["X", "X", null],
    ["O", null, null],
    [null, null, null],
]

export function GameBoard() {
    let board = initialBoard;
    return <div className="board flex-space-between">
        {board.map(rows =>
        (
            <ul>
                {rows.map((square, index) => 

                    <li key={index}>{square}</li>
                )}
            </ul>
        )



        )}
    </ div>
}