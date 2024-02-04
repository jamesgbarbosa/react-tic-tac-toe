import "./Gameboard.css"

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export function GameBoard({ gameTurns, onSelectSquare }) {
    let b = initialBoard;
    // const [board, setBoard] = useState(b);
    gameTurns.map((turn) => {
        let { square, activePlayer } = turn;
        let { row, col } = square;
        b[row][col] = activePlayer;
    })

    return <div className="board flex-space-between">
        {b.map((rows, rowIndex) =>
        (
            <ul key={rowIndex}>
                {rows.map((square, colIndex) =>
                    <li key={`${rowIndex}${colIndex}`} onClick={() => {
                        onSelectSquare(rowIndex, colIndex);
                    }}>{square}</li>
                )}
            </ul>
        )
        )}
    </ div>
}