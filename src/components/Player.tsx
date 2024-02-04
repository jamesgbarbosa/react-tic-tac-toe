import { useState } from "react";
import "./Player.css";

export function Player({ symbol, isActive, defaultName }) {
    const [isEditMode, setisEditMode] = useState(false)
    const [playerName, setPlayerName] = useState(defaultName)

    return <>
        <div className={`player-container flex`}>
            <span className="symbol">{symbol}</span>

            <section className={`player flex ${isActive ? "active" : ''}`}>
                <label>Name: </label>
                {
                    isEditMode ? <input className="name" onChange={(e) => { setPlayerName(e.target.value) }} type="text"></input> : <label className="name">{playerName}</label>
                }

                <span className="edit" onClick={() => { setisEditMode((prev) => !prev) }}>{isEditMode ? "Submit" : "Edit"}</span>
            </section>
        </div>
    </>
}