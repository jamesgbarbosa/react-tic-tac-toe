export function Logs({ gameTurns }) {
    return <section>
        {gameTurns.map((it, index) =>
        (
            <div className="log" key={index}>
                {it?.activePlayer} on [{it?.square?.row}, {it?.square?.col}]
            </div>
        )
        )}
    </section>
}