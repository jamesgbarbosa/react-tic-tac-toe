import { useState } from "react";
import "./Player.css";

export function Player({ symbol, isActive, defaultName, onNameChange, isDisableEdit }) {
    const [isEditMode, setisEditMode] = useState(false)
    const [playerName, setPlayerName] = useState(defaultName)

    function onClickButton() {
        if (isEditMode) {
            onNameChange(playerName, symbol)
        }
        setisEditMode((prev) => !prev)
    }
    return <>
        <div className={`player-container flex`}>
            <span className="symbol">{symbol}</span>

            <section className={`player flex ${isActive ? "active" : ''}`}>
                <label>Name: </label>
                {
                    isEditMode ? <input className="name" onChange={(e) => { setPlayerName(e.target.value) }} value={playerName} type="text"></input> : <label className="name">{playerName}</label>
                }
                { isDisableEdit ? null :
                    <span className="edit" onClick={() => { onClickButton() }}>{isEditMode ? "Submit" : "Edit"}</span>
                }
            </section>
        </div>
    </>
}