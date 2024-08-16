import { useState } from "react"

export default function Player({ initialName,symbol}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handleClick(){
        setIsEditing(editing => !editing);        
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
return(
    <li>
    <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={handleChange}/> : <span className="player-name">{playerName}</span>}
  
  <span className="symbol">{symbol}</span>
  </span>
  <button onClick={handleClick}>{isEditing ? "save" : "edit"}</button>
  </li>
)
}