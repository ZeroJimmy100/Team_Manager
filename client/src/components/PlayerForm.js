import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';



export default props => {

    const { initialPlayer, initialPosition, onSubmitProp } = props;
    const [ playerName, setName ] = useState(initialPlayer);
    const [ refPosition, setRefPosition ] = useState("");
    const positions = ["", "Forward", "Midhelder", "Water-Boy", "Quarterback"];
    
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({playerName:playerName, refPosition:refPosition});
        console.log(playerName, "is a string")
        console.log(refPosition, "should be a string")
        // setName("");
        // setRefPosition('');

    }

    const PickPosHandler = (e) => {
        e.preventDefault();
        const newpos = e.target.value
        console.log(newpos, "should be input value")
        setRefPosition(newpos)
        console.log(refPosition)
    }

    return(
        <div>
            <h1>
            <Link to={"/"}>Manage Players</Link>
            |
            <Link to={"/status/game/1"}>Manage Player Status</Link>
            </h1>
            <h1>
                <Link to={"/"}>List</Link>
                |
                <Link to={"/player/addplayer"}>Add Player</Link>
            </h1>
            
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Player Name</label><br/>
                    <input
                        type="text"
                        name="playerName"
                        onChange={(e) => {setName(e.target.value)}}/>
                </p>
                <p>
                    <label>Preferred Position
                        <select name="position" onChange={PickPosHandler} >
                            {positions.map((item, idx) => {
                                return <option key={idx} value={item} >{item}</option>
                            })}
                        </select>
                    </label>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}