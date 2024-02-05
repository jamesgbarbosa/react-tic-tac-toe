export function Logs({ gameTurns }) {
    return <section>
        {gameTurns.map((it, index) =>
        (
            <>
                <div key={index}>
                    <span className="log">
                        {it?.activePlayer} on [{it?.square?.row}, {it?.square?.col}]
                    </span>
                </div>
            </>
        )
        )}
    </section>
}