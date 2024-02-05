import "./Gameboard.css"


export function GameBoard({ onSelectSquare, board, isDisabled }) {
    return <div className="board flex-space-between">
        {board.map((rows, rowIndex) =>
        (
            <ul key={rowIndex}>
                {rows.map((square, colIndex) => {
                    let tempSquare = square?.substr(0,1);
                    let winningSymbol = square?.length == 2; 
                    return <li className={`${winningSymbol ? 'win' : ''} ${square ? 's-active' : ''}`} key={`${rowIndex}${colIndex}`} onClick={() => {
                        isDisabled ? null : onSelectSquare(rowIndex, colIndex);
                    }}>{tempSquare}</li>
                }

                )}
            </ul>
        )
        )}
    </ div>
}