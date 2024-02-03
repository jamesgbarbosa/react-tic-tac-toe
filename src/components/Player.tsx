export function Player({symbol}) {
    return <>
        <div className="flex">
            <label>Name: </label>
            <input type="text"></input>
            <span>{symbol}</span>
        </div>
    </>
}