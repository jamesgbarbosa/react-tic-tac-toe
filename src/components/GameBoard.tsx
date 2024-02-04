import "./Gameboard.css"


export function GameBoard({ onSelectSquare, board }) {
    return <div className="board flex-space-between">
        {board.map((rows, rowIndex) =>
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