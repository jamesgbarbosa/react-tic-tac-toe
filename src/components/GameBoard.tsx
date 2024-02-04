import "./Gameboard.css"


export function GameBoard({ onSelectSquare, board, isDisabled }) {
    return <div className="board flex-space-between">
        {board.map((rows, rowIndex) =>
        (
            <ul key={rowIndex}>
                {rows.map((square, colIndex) =>
                    <li className={square ? 's-active' : ''} key={`${rowIndex}${colIndex}`} onClick={() => {
                        isDisabled ? null : onSelectSquare(rowIndex, colIndex);
                    }}>{square}</li>
                )}
            </ul>
        )
        )}
    </ div>
}