const initialBoard = [
    [1, null, null],
    [null, null, null],
    [null, null, null],
]
export function GameBoard() {
    let board = initialBoard;
    return <div className="board flex-space-between">
        {board.map(rows =>
        (
            <ul>
                {rows.map(square => 

                    <li>X</li>
                )}
            </ul>
        )



        )}
    </ div>
}