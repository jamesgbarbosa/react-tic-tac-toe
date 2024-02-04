import "./Player.css";

export function Player({symbol, isActive}) {
    return <>
        <div className={`player flex ${isActive ? "active" : ''}`}>
            <label>Name: </label>
            <input type="text"></input>
            <span className="symbol">{symbol}</span>
        </div>
    </>
}