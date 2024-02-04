import "./Gameboard.css"

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]


export function GameBoard({ gameTurns , onSelectSquare}) {
    let b = initialBoard;
    // const [board, setBoard] = useState(b);
    gameTurns.map((turn) => {
        let {square, activePlayer} = turn;
        let {row,col} = turn.square;
        
        b[row][col] = activePlayer;
    })
    // function handleSelectSquare(rowIndex, colIndex) {
    //     onSelectSquare(rowIndex, colIndex, playerSymbol);
    // }

    return <div className="board flex-space-between">
        {b.map((rows, rowIndex) =>
        (
            <ul>
                {rows.map((square, colIndex) =>

                    <li onClick={() => {
                        // handleSelectSquare(rowIndex, colIndex)
                        onSelectSquare(rowIndex, colIndex);
                    }}>{square}</li>
                )}
            </ul>
        )
        )}
    </ div>
}